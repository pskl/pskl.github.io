---
layout: post
title:  "Easiest way to set up push notifications in an Ionic app"
date:   2015-06-20 15:15:26
categories: jekyll update
---
Whenever you want to implement push notifications in your app there are multiple solutions.
At [Achieved][achieved] for a quick MVP we decided to make useful push notifications for a new concept.
So we decided to go with Ionic and started to look for solutions to implement push notifications in Ionic.

So a quick look on Google gave me a few options.

#[Pushwoosh Experience][pw]

The documentation is fine but for some reason I coudln't get any device to register even though the procedure is fairly basic.

#[Urban Airship][urban-airship]

This one is one of the biggest competitors to pushwoosh. Their documentation seemed to be torough but the implementation implied a lot of reading and a bit too much code. I gave up on this one because I wanted a more lightweight solution.

#[Parse][parse]
Parse belongs to Facebook and aims at replacing your backend needs by their lightweight service.

Pros and cons

- :white_check_mark: Ultra easy
- :white_check_mark: lightweight as fuck

- :no_entry_sign: The Parse Javascript doesnt allow push receiving
- :no_entry_sign: the Parse cordova plugin doesnt allow push scheduling

You can find the cordova plugin [here][cordova_plugin]
You can find the full Parse JS SDK [here][js_sdk]

So you need both libraries in your project in order to have a fully functioning app with pushes.
The implementation of those libraries is virtually effortless.


{% highlight coffeescript  linenos %}
class Parsepush extends Service

  constructor: ($q, raccoonConfig, $rootScope, rapitalksService) ->
    # Parse JS SDK doesnt handle push receiving so
    # we use a cordova plugin for that

    @init = ->
      @initCordovaPlugin().then( =>
        return @getInstallationId()
      ).then( (id) =>
        return localforage.setItem('installationId', id)
      ).then( =>
        return rapitalksService.updateUser()
      ).then( =>
        return @subscribe("raccoon")
      ).then( =>
        # sign up for pushes
        return rapitalksService.pushSignUp()
      ).catch( (error) ->
        # always catch errors when chaining promises
        console.log 'Error in promise chain in init() from parsepush.coffee'
        console.log error
      )

    @initCordovaPlugin = ->
      $q (resolve, reject) =>
        window.parsePlugin.initialize raccoonConfig.parse_app_id, raccoonConfig.parse_client_key
        ,()->
          resolve console.log '[Parse] cordova plugin successfully initialized'
          return
        ,(e) ->
          alert 'error'
          return

    @getInstallationId = ->
      $q (resolve, reject) =>
        window.parsePlugin.getInstallationId (id) ->
          console.log '[Parse] Installation id : '+id
          $rootScope.installationId = id
          resolve $rootScope.installationId
          return
        , (e) ->
          console.log 'error'
          return

    @subscribe = (channel) ->
      $q (resolve, reject) =>
        window.parsePlugin.subscribe channel, (msg)->
          resolve console.log '[Parse] Device successfully subscribed to '+channel
          return
        , (e) ->
          reject console.log 'error'
          return

{% endhighlight %}

:raised_hands:


> Indeed, far from being useful, many (if not most), push notifications actually harm us, hooking us on our own dopamine and making us less present and aware of the moments of life passing us by. [Source][apple-watch]

[urban-airship]: http://urbanairship.com/
[apple-watch]: http://techcrunch.com/2015/04/25/the-apple-watch-can-be-a-sixth-sense/?ncid=rss#.6pznpr:euWA
[parse]: https://www.parse.com/
[pw]: https://www.pushwoosh.com/
[cordova_plugin]: https://github.com/benjie/phonegap-parse-plugin
[js_sdk]: https://parse.com/docs/js/guide
[achieved]: https://achieved.co
