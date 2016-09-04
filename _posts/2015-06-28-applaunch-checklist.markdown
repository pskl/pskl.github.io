---
layout: post
title:  "Ionic app launch checklist"
date:   2015-06-25 15:15:26
published: true
categories: jekyll update
---

Here is my checklist whenever I make a new release of an ionic app to both Apple appstore and Google Play store. It's good to have step by step instructions for this kind of action because one might overlook some crucial part.

In this guide, heavily inspired by [Ionic's publishing guide][ionic] I assume you already have a git repository set up and your latest work is located on your master branch and also that you're using [Brunch][brunch] as your build tool (it's super lightweight and easy to use :facepunch:)

- `git pull origin master`
- resolve any conflicts you might have, make it neat and tidy
- Bump the build version number in package.json / config.xml
- Minify and build the project : brunch build --production
- check if Javascript files are properly minified by looking in the `www` folder

Android specific process  :
---------------------------

- do `ionic build android`
- test the app : `ionic run android -lc --device` (I suggest you alias that command as `run`)
- verify the information in AndroidManifest.xml (especially android:label as it will be the name displayed on the phone's home screen)
- build the unsigned APK with `cordova build --release android`
- `cd platforms/android/ant-build`
- generate
- sign the APK with jarsigner : jarsigner -verb-ose -sigalg SHA1withRSA -digestalg SHA1 -keystore _yourkey.keystore_ MainActivity-release-unsigned.apk alias_name -tsa http://timestamp.digicert.com
- generate a new key if your android folder has been erased since last release or if it's the first time you do this process : `keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
- _KEEP the key somewhere safe_ because you're going to need it again when you want to upload a new build to the stores :fire_engine:
- `jarsigner -verb-ose -sigalg SHA1withRSA -digestalg SHA1 -keystore raccoon.keystore MainActivity-release-unsigned.apk alias_name -tsa http://timestamp.digicert.com`
Notice the tsa flag is optional but sometimes your APK can be rejected for no reason and this flag solves it. More information [here][tsa-flag]

(You’ll find zipalign in the Android SDK as follows)

- On OSX and if you have the Android SDK installed `~/Library/Android/sdk/build-tools/20.0.0/zipalign -v 4 MainActivity-release-unsigned.apk Raccoon.apk`
- upload APK to Google Play and BOOM

iOS specific process :
----------------------
- `ionic build ios`
- test the app
- open the .xcodeproj file in the ios folder
- if necessary add the facebook sdk to the project
- verify the information in the .plist file
- make sure that the build target is set to release
- make sure that you’re targeting the proper device
- click Product > Archive
- click Submit
- go to Itunes Connect and Submit for review

Taaaadaaa :zap:
And that's it overall, now next time you need to upload a new build start over from the beginning.

[tsa-flag]: http://stackoverflow.com/questions/21695520/tsa-or-tsacert-timestamp-for-applet-jar-self-signed
[ionic]: http://ionicframework.com/docs/guide/publishing.html
[brunch]: http://brunch.io
