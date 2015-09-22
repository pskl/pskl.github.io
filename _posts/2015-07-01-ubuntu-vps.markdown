---
layout: post
title:  "How to set up Ubuntu VPS for a Rails app using Unicorn and Nginx ?"
date:   2015-06-15 15:15:26
categories: jekyll update
---
In this quick guide I'll give you some basic instructions to prepare the environment for a Rails app hosted on Ubuntu. A very intuitive tool to automate deployment on remote machines is [Capistrano][capi].

- In the Digital Ocean admin panel start by choosing a blank Ubuntu droplet.
- Connect to your droplet using SSH : `ssh root@ip-adress-of-your-droplet`
- Create a new user and give that user root access. `adduser newuser`
- `gpasswd -a newuser sudo`
- `su - newuser`
- `mkdir .ssh`
- `chmod 700 .ssh`
- `nano .ssh/authorized_keys`
- `chmod 600 .ssh/authorized keys`
- `exit`

- before installing new software on this brand new shining Ubuntu let's update our package index : `sudo apt-get update`
- install RVM to install your Ruby environment :
  - `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`
  - `\curl -sSL https://get.rvm.io | bash -s stable`

- Install Nginx : `sudo apt-get install nginx`
- Install mysqlserver (of course only if you plan to use MySQL, if not install your favorite database): `sudo apt-get install mysql-server`
- Install unicorn gem in your app : add `gem 'unicorn'` to your Gemfile at the root of your app
- `bundle install`
- Install cron on Ubuntu : `sudo apt-get install cron`
- Add SSH keys to your ssh-agent doing so (refer to [this guide][ssh] to generate SSH credentials):
    - eval `ssh-agent`
    - `ssh-add ~/.ssh/yourprivatekey`


- Deploy using Capistrano : most likely `bundle exec cap production deploy`
- `sudo vi /etc/nginx/sites-available` to make a new nginx configuration script

Nginx config file :

{% highlight nginx %}

upstream app {
    # Path to Unicorn SOCK file, as defined previously
    server unix:/home/raccoon/rapi/shared/sockets/unicorn.sock fail_timeout=0;
}

server {
    listen 80;
    server_name localhost;
    root /home/raccoon/rapi/current/public;
    try_files $uri/index.html $uri @app;

    location @app {
        proxy_pass http://app;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
      }
      location ~ ^/(assets)/  {
          root /home/raccoon/rapi/current/public;
          gzip_static off;
          expires max;
          add_header Cache-Control public;
      }
      location ~ ^/(javascripts|stylesheets|images)/ {
      root /home/raccoon/rapi/current/public/assets;
      gzip_static off;
      expires max;
      add_header Cache-Control public;
      }

      location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
          root /home/raccoon/rapi/current/public;
          expires max;
          add_header Cache-Control public;
          log_not_found on;
      }

      error_page 500 502 503 504 /500.html;
      client_max_body_size 4G;
      keepalive_timeout 10;
}

{% endhighlight %}


In order to automate the launch of Unicorn when your droplet boots up, we need to create a script that will take care of that :

- `sudo vi /etc/init.d/unicorn_appname`
- copy and paste the following piece of code

{% highlight bash %}
#!/bin/sh

### BEGIN INIT INFO
# Provides:          unicorn
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: starts the unicorn app server
# Description:       starts unicorn using start-stop-daemon
### END INIT INFO

set -e
set -u

USAGE="Usage: $0 <start|stop|restart|upgrade|rotate|force-stop>"

# app settings
USER="raccoon"
APP_NAME="rapi"
APP_ROOT="/home/$USER/$APP_NAME/current"
ENV="production"

# environment settings
PID="/home/raccoon/rapi/shared/pids/unicorn.pid"
GEM_HOME="/home/$USER/.rvm/gems/ruby-2.2.1"
UNICORN_OPTS="-D -E $ENV -c $APP_ROOT/config/unicorn.rb"
SET_PATH="cd $APP_ROOT; rvm use 2.2.1; export GEM_HOME=$GEM_HOME"
CMD="$SET_PATH; $GEM_HOME/bin/unicorn $UNICORN_OPTS"

OLD_PID="$PID.oldbin"

# make sure the app exists
cd $APP_ROOT || exit 1

sig () {
  test -s "$PID" && kill -$1 `cat $PID`
}

oldsig () {
  test -s $OLD_PID && kill -$1 `cat $OLD_PID`
}

case $1 in
  start)
    sig 0 && echo >&2 "Already running" && exit 0
    echo "Starting $APP_NAME"
    su - $USER -c "$CMD"
    ;;
  stop)
    echo "Stopping $APP_NAME"
    sig QUIT && exit 0
    echo >&2 "Not running"
    ;;
  force-stop)
    echo "Force stopping $APP_NAME"
    sig TERM && exit 0
    echo >&2 "Not running"
    ;;
  restart|reload|upgrade)
    sig USR2 && echo "reloaded $APP_NAME" && exit 0
    echo >&2 "Couldn't reload, starting '$CMD' instead"
    $CMD
    ;;
  rotate)
    sig USR1 && echo rotated logs OK && exit 0
    echo >&2 "Couldn't rotate logs" && exit 1
    ;;
  *)
    echo >&2 $USAGE
    exit 1
    ;;
esac

{% endhighlight %}

Update the script permission so as to allow Unicorn to be launched on startup :

- `sudo chmod 755 /etc/init.d/unicorn_appname`, this changes the right of the script to `-rwxr-xr-x`
- `sudo update-rc.d unicorn_appname defaults`
- now if you do `service --status-all` you should see your script appear in the list aswell as cron for example, those scripts are fired up each time Ubuntu boots up
- `sudo service unicorn_appname start` to start Unicorn for the first time


Congratulations :dart:, that was it ! Now if you need to have a development server alongside your production server you can just clone the whole droplet by making a snapshot of your system in the Digital Ocean panel and then create a new droplet using said snapshot.

Article heavily inspired by [a tutorial from Digital Ocean][do-tutorial]

[jekyll]:      http://jekyllrb.com
[capi]:        http://capistranorb.com/
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[do-tutorial]: https://www.digitalocean.com/community/tutorials/how-to-deploy-a-rails-app-with-unicorn-and-nginx-on-ubuntu-14-04
[ssh]: https://help.github.com/articles/generating-ssh-keys/
