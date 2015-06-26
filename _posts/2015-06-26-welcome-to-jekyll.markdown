---
layout: post
title:  "How to set up Ubuntu VPS for a Rails app using Unicorn and Nginx"
date:   2015-06-26 15:15:26
categories: jekyll update
---
`_posts` 
In the Digital Ocean admin panel start by choosing a blank Ubuntu droplet.
Connect to your droplet using SSH (if you need any help for that go to : )
Create a new user and give that user root access.

`adduser newuser`
`gpasswd -a newuser sudo`
`su - newuser`
`mkdir .ssh`
`chmod 700 .ssh`
`nano .ssh/authorized_keys`
`chmod 600 .ssh/authorized keys`
`exit`

Then install RVM.
Install Nginx
Install mysqlserver
Install unicorn gem in your app
Install cron on Ubuntu
Add SSH keys to your ssh-agent
Deploy using Capistrano

Nginx config file :

{% highlight javascript %}

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


{% highlight bash}
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

{% endhighlight }

Article heavily inspired by [a tutorial from Digital Ocean][do-tutorial]

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[do-tutorial]: https://www.digitalocean.com/community/tutorials/how-to-deploy-a-rails-app-with-unicorn-and-nginx-on-ubuntu-14-04
