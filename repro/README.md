# https://github.com/meteor/meteor/issues/11005 2nd repro

To setup:
```
git clone --branch 2.14.2 https://github.com/transistorsoft/cordova-bac
kground-geolocation-lt
```

Now you will have the folder `cordova-background-geolocation-lt` in your top level.
The repo will have a detached head pointing at `v2.14.2`

To repro the issue
```
cd repro
meteor npm install
meteor build ../build --directory --debug --server https://foo.com
```

**Note:** `--directory` & `--debug` flags make the build go faster.

**Result:**
```
%% Failed to install 'cordova-plugin-background-fetch': Error: Cannot find module 'cordova-common'
... (stack trace)
```

Expected it to build.

**Note:** if you remove the reference to `App.appendToConfig` in `mobile-config.js` the app will build.
