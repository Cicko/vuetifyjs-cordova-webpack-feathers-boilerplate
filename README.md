# vuetifyjs-onsenui-webpack-feathers template

<img src="static/images/js-es5-logo.png" width="100px"> <img src="static/images/Webpack.png" width="100px"> <img src="static/images/vue-logo.png" width="100px"> <img src="static/images/vuetify-logo.png" width="100px"> <img src="static/images/cordova_logo.png" width="100px">
<img src="static/images/feathers-logo.svg" width="100px"> <img src="static/images/Mongo-logo.png" width="100px"> <img src="static/images/nodejs-logo.png" width="100px">


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
# build for production with minification (also for mobile)
npm run build

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

##### First Steps:
```
# Add your mobile device as platform (ios | android)
cordova platform add android
cordova platform add ios
```

##### Further iterative steps
Every time you make some changes to the application and you want to create updated app you have to follow always these steps:
```  
# Build minification files for mobile
npm run build
# Then just execute commando to build the APK
cordova build android
cordova build ios
## The generated APK will be located inside platforms/android/app/build/outputs/apk/debug/ in my case.
```


### TODO

- [x] Mobile building
- [x] Feathers.js 
- [ ] Prepare some native components through Onsenui
