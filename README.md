# vuetifyjs-webpack-feathers template



## Build Setup

``` bash
# install dependencies
npm install

# go inside backend and also install dependencias
npm install

# run mongo server (in other terminal)
mongod

# run feathers backend (inside backend folder)
npm start

# Now go again to the project root and serve with hot reload at localhost:8080
npm run dev
```


### Building for production
```
# build for production with minification
npm run build
# build for mobile development through Cordova
npm run build_mobile

```


### Testing
``` bash
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### Mobile building

Requirements at system level:
- Android SDK (I recommend to download [Android Studio](https://developer.android.com/studio/index.html))
    - Set ANDROID_HOME environment path
- JDK (The version 9 doesn't worked for me. I have to use version 8)
- Gradle (I installed it using [sdk](http://sdkman.io/))
- Cordova (npm install -g cordova)


Requirements at project level:
- There must exist the __config.xml__ file.
    - [Click here for more info about this file](https://cordova.apache.org/docs/en/latest/config_ref/)
- There must exist the __www__ folder (can be empty).

##### Steps:
```
# Add your mobile device as platform (ios | android)
cordova platform add android
cordova platform add ios  
# Build minification files for mobile
npm run build_mobile
# There I had a little problem with path. Maybe some configuration in Webpack file may fix it
# so I had to change the relative paths of CSS and JS files from '/static/...' to 'static/...'
# Then just execute commando to build the APK
cordova build android
cordova build ios
## The generated APK will be located inside platforms/android/app/build/outputs/apk/debug/ in my case.
```


### TODO

- [x] Mobile building
- [x] Feathers.js 
