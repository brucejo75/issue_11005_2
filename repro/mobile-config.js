App.info({
  'id': 'xyz.foo.app',
  'version': '1.0',
  'buildNumber': '1',
  'name': 'repro_11005',
  'description': 'Bug Repro',
  'author': 'brucejo75@github',
});

//   let bgLocConfig = {
//   'ACCOUNT_TYPE': `xyz.foo.app.account`,
//   'ACCOUNT_NAME': `xyz.foo.app`,
//   'CONTENT_AUTHORITY': `xyz.foo.app`,
//   'LICENSE': 'foo',
//   'GOOGLE_API_VERSION': '16.0.0',
//   'APPCOMPAT_VERSION': '27.0.1',
//   'OKHTTP_VERSION': '3.12.+',
//   'LOCATION_ALWAYS_AND_WHEN_IN_USE_USAGE_DESCRIPTION': 'Always use is required for background location tracking',
//   'LOCATION_ALWAYS_USAGE_DESCRIPTION': 'Background location-tracking is required',
//   'LOCATION_WHEN_IN_USE_USAGE_DESCRIPTION': 'Background location-tracking is required',
//   'MOTION_USAGE_DESCRIPTION': 'Using the accelerometer increases battery-efficiency'
//     + 'by intelligently toggling location-tracking only when the device is detected to be moving'
// };

// App.configurePlugin('cordova-background-geolocation', bgLocConfig);

App.appendToConfig(`
<!-- /background-geolocation-lt -->
<plugin name="cordova-background-geolocation-lt">
  <variable name="LICENSE" value="foo" />
  <variable name="GOOGLE_API_VERSION" value="16.0.0" />
  <variable name="APPCOMPAT_VERSION" value="27.0.1" />
  <variable name="LOCATION_ALWAYS_AND_WHEN_IN_USE_USAGE_DESCRIPTION" value="Always use is required for background location tracking" />
  <variable name="LOCATION_ALWAYS_USAGE_DESCRIPTION" value="Background location-tracking is required" />
  <variable name="LOCATION_WHEN_IN_USE_USAGE_DESCRIPTION" value="Background location-tracking is required" />
  <variable name="MOTION_USAGE_DESCRIPTION" value="Using the accelerometer increases battery-efficiency by intelligently toggling location-tracking only when the device is detected to be moving" />
</plugin>
<platform name="android">
  <!-- background-geolocation-lt -->
  <config-file parent="/manifest" target="app/src/main/AndroidManifest.xml"
    xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.READ_LOGS"/>
  </config-file>
  <config-file parent="/manifest/application" target="app/src/main/AndroidManifest.xml"
    xmlns:android="http://schemas.android.com/apk/res/android">
    <meta-data
      android:name="com.transistorsoft.locationmanager.license_key"
      android:value="foo" />
  </config-file>
</platform>
`);


// App.addResourceFile(
//   'BackgroundGeolocationHeadlessTask.java',
//   'app/src/main/java/com/transistorsoft/cordova/bggeo/BackgroundGeolocationHeadlessTask.java',
//   'android');
  