(ns web.performance.Navigator
  "The Navigator interface represents the state and the identity
  the user agent. It allows scripts to query it and to register
  to carry on some activities."
  (:refer-clojure :exclude []))

(defn can-share
  "Method.

  [Experimental]

  The canShare() method of the `web.performance.Navigator` interface
  true if a call to Navigator.share() would succeed.

  `var canShare = navigator.canShare(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare`"
  [this data]
  (-> this (.canShare data)))

(defn get-vr-displays
  "Method.

  [Experimental]

  The getVRDisplays() method of the `web.performance.Navigator`
  returns a promise that resolves to an array of `web.media.VRDisplay`
  representing any available VR displays connected to the computer.

  `navigator.getVRDisplays().then(function(displays) {
  // Do something with the available VR displays
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getVRDisplays`"
  [this & args]
  (-> this .-getVRDisplays (.apply this (clj->js args))))

(defn get-user-media
  "Method.

  [Deprecated]

  The deprecated Navigator.getUserMedia() method prompts the user
  permission to use up to one video input device (such as a camera
  shared screen) and up to one audio input device (such as a microphone)
  the source for a `web.streams.MediaStream`.

  `navigator.getUserMedia(constraints, successCallback, errorCallback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia`"
  [this constraints success-callback error-callback]
  (-> this (.getUserMedia constraints success-callback error-callback)))

(defn register-content-handler
  "Method.

  [Obsolute]

  Allows web sites to register themselves as possible handlers
  content of a particular MIME type.

  `navigator.registerContentHandler(mimeType, uri, title);


  mimeType is the desired MIME type as a string.
  uri is the URI to the handler as a string.
  title is the title of the handler presented to the user as a string.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerContentHandler`"
  [this & args]
  (-> this .-registerContentHandler (.apply this (clj->js args))))

(defn register-protocol-handler
  "Method.

  The `web.performance.Navigator` method registerProtocolHandler()
  web sites register themselves as possible handlers for particular

  `navigator.registerProtocolHandler(protocol, url, title);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler`"
  [this protocol url title]
  (-> this (.registerProtocolHandler protocol url title)))

(defn request-media-key-system-access
  "Method.

  The Navigator.requestMediaKeySystemAccess() method returns a
  which delivers a `web.audio.MediaKeySystemAccess` object that
  be used to access a particular media key system, which can in
  be used to create keys for decrypting a media stream. This method
  part of the Encrypted Media Extensions API, which brings support
  encrypted media and DRM-protected video to the web.

  `​Promise = Navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMediaKeySystemAccess`"
  [this key-system supported-configurations]
  (-> this (.requestMediaKeySystemAccess key-system supported-configurations)))

(defn send-beacon
  "Method.

  The navigator.sendBeacon() method can be used to asynchronously
  a small amount of data over HTTP to a web server.

  `navigator.sendBeacon(url, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon`"
  [this url data]
  (-> this (.sendBeacon url data)))

(defn share
  "Method.

  [Experimental]

  The Navigator.share() method invokes the native sharing mechanism
  the device as part of the Web Share API. If the Web Share API
  unsupported, then this method will be undefined.

  `var sharePromise = window.navigator.share(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share`"
  [this data]
  (-> this (.share data)))

(defn taint-enabled
  "Method.

  [Deprecated]

  The NavigatorID.taintEnabled() method always returns false.

  `result = window.navigator.taintEnabled()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/taintEnabled`"
  [this ]
  (-> this (.taintEnabled)))

(defn vibrate
  "Method.

  The Navigator.vibrate() method pulses the vibration hardware
  the device, if such hardware exists. If the device doesn't support
  this method has no effect. If a vibration pattern is already
  progress when this method is called, the previous pattern is
  and the new one begins instead.

  `var successBool = window.navigator.vibrate(pattern);


  pattern
  Provides a pattern of vibration and pause intervals. Each value indicates a number of milliseconds to vibrate or pause, in alternation. You may provide either a single value (to vibrate once for that many milliseconds) or an array of values to alternately vibrate, pause, then vibrate again. See Vibration API for details.


  Passing a value of 0, an empty array, or an array containing all zeros will cancel any currently ongoing vibration pattern.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate`"
  [this & args]
  (-> this .-vibrate (.apply this (clj->js args))))

(defn moz-is-locally-available
  "Method.

  [Non Standard]
  [Obsolute]

  The Navigator.mozIsLocallyAvailable() method allows add-ons to
  whether or not a given resource is available.

  `navigator.mozIsLocallyAvailable(uri, ifOffline);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mozIsLocallyAvailable`"
  [this uri if-offline]
  (-> this (.mozIsLocallyAvailable uri if-offline)))

(defn moz-pay
  "Method.

  Allows in-app payment."
  [this & args]
  (-> this .-mozPay (.apply this (clj->js args))))

(defn get-battery
  "Method.

  [Obsolute]

  The getBattery() method provides information about the system's
  It returns a battery promise, which is resolved in a `web.device.BatteryManager`
  providing also some new events you can handle to monitor the
  status. This implements the Battery Status API; see that documentation
  additional details, a guide to using the API, and sample code.

  `var batteryPromise = navigator.getBattery();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery`"
  [this ]
  (-> this (.getBattery)))

(defn get-gamepads
  "Method.

  [Experimental]

  The Navigator.getGamepads() method returns an array of `web.gamepad.Gamepad`
  one for each gamepad connected to the device.

  `var gamepads = navigator.getGamepads();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads`"
  [this ]
  (-> this (.getGamepads)))

(defn ms-launch-uri
  "Method.

  [Non Standard]

  The msLaunchUri() method is a Microsoft extension to the `web.performance.Navigator`
  which starts a service or app, such as an email client, that
  a given protocol. The Uniform Resource Identifier (URI) contains
  protocol for the default service or app, such as mailto://test@contoso.com.

  `navigator.msLaunchUri(uri, successCallback, noHandlerCallback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/msLaunchUri`"
  [this uri success-callback no-handler-callback]
  (-> this (.msLaunchUri uri success-callback no-handler-callback)))

(defn active-vr-displays
  "Property.

  [Read Only]
  [Experimental]

  The activeVRDisplays read-only property of the `web.performance.Navigator`
  returns an array containing every `web.media.VRDisplay` object
  is currently presenting (`VRDisplay.ispresenting` is true).

  `var myActiveDisplays = navigator.activeVRDisplays;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/activeVRDisplays`"
  [this]
  (-> this (.-activeVRDisplays)))

(defn app-code-name
  "Property.

  [Read Only]

  The value of the NavigatorID.appCodeName property is always \\\"Mozilla\\\",
  any browser. This property is kept only for compatibility purposes.

  `codeName = window.navigator.appCodeName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName`"
  [this]
  (-> this (.-appCodeName)))

(defn app-name
  "Property.

  [Read Only]

  The value of the NavigatorID.appName property is always \\\"Netscape\\\",
  any browser.

  `appName = window.navigator.appName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName`"
  [this]
  (-> this (.-appName)))

(defn app-version
  "Property.

  [Read Only]

  Returns either \\\"4.0\\\" or a string representing version information
  the browser.

  `window.navigator.appVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion`"
  [this]
  (-> this (.-appVersion)))

(defn battery
  "Property.

  [Read Only]
  [Obsolute]

  The battery read-only property returns a `web.device.BatteryManager`
  information about the system's battery charge level; provides
  some new events you can handle to monitor the battery status.
  implements the Battery Status API; see that documentation for
  details, a guide to using the API, and sample code.

  `var battery = navigator.battery;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery`"
  [this]
  (-> this (.-battery)))

(defn connection
  "Property.

  [Read Only]
  [Experimental]

  The Navigator.connection read-only property returns a `web.other.NetworkInformation`
  containing information about the system's connection, such as
  current bandwidth of the user's device or whether the connection
  metered.

  `networkInformation = navigator.connection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection`"
  [this]
  (-> this (.-connection)))

(defn cookie-enabled
  "Property.

  [Read Only]

  navigator.cookieEnabled returns a Boolean value that indicates
  cookies are enabled or not.

  `var cookieEnabled = navigator.cookieEnabled;


  \\tcookieEnabled is a Boolean: true or false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled`"
  [this]
  (-> this (.-cookieEnabled)))

(defn geolocation
  "Property.

  [Read Only]

  The Navigator.geolocation read-only property returns a `web.geolocation.Geolocation`
  that gives Web content access to the location of the device.
  allows a Web site or app to offer customized results based on
  user's location.

  `geo = navigator.geolocation`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation`"
  [this]
  (-> this (.-geolocation)))

(defn hardware-concurrency
  "Property.

  [Read Only]

  The navigator.hardwareConcurrency read-only property returns
  number of logical processors available to run threads on the
  computer.

  `logicalProcessors = window.navigator.hardwareConcurrency`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency`"
  [this]
  (-> this (.-hardwareConcurrency)))

(defn java-enabled
  "Property.

  [Read Only]

  This method indicates whether the current browser is Java-enabled
  not.

  `result = window.navigator.javaEnabled()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled`"
  [this]
  (-> this (.-javaEnabled)))

(defn keyboard
  "Property.

  [Read Only]
  [Experimental]

  The keyboard read-only property of the `web.performance.Navigator`
  returns a `web.keyboard.Keyboard` object which provides access
  functions that retrieve keyboard layout maps and toggle capturing
  key presses from the physical keyboard.

  `var keyboard = navigator.keyboard`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/keyboard`"
  [this]
  (-> this (.-keyboard)))

(defn language
  "Property.

  [Read Only]

  The NavigatorLanguage.language read-only property returns a string
  the preferred language of the user, usually the language of the
  UI.

  `var lang = navigator.language`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language`"
  [this]
  (-> this (.-language)))

(defn languages
  "Property.

  [Read Only]
  [Experimental]

  The NavigatorLanguage.languages read-only property returns an
  of `web.dom.DOMString`s representing the user's preferred languages.
  language is described using BCP 47 language tags. In the returned
  they are ordered by preference with the most preferred language

  `preferredLanguages = globalObj.navigator.languages`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages`"
  [this]
  (-> this (.-languages)))

(defn locks
  "Property.

  [Read Only]
  [Experimental]

  The locks read-only property of the `web.performance.Navigator`
  returns a `web.locks.LockManager` object which provides methods
  requesting a new `web.locks.Lock` object and querying for an
  Lock object.

  `var lockManager = Navigator.locks`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/locks`"
  [this]
  (-> this (.-locks)))

(defn media-capabilities
  "Property.

  [Read Only]
  [Experimental]

  The Navigator.mediaCapabilities read-only property returns a
  object that can expose information about the decoding and encoding
  for a given format and output capabilities as defined by the
  Capabilities API.

  `mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities`"
  [this]
  (-> this (.-mediaCapabilities)))

(defn max-touch-points
  "Property.

  [Read Only]

  The maxTouchPoints read-only property of the `web.performance.Navigator`
  returns the maximum number of simultaneous touch contact points
  supported by the current device.

  `touchPoints = navigator.maxTouchPoints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints`"
  [this]
  (-> this (.-maxTouchPoints)))

(defn mime-types
  "Property.

  [Read Only]

  Returns a `web.other.MimeTypeArray` object, which contains a
  of `web.other.MimeType` objects representing the MIME types recognized
  the browser.

  `var mimeTypes[] = navigator.mimeTypes;

  mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`"
  [this]
  (-> this (.-mimeTypes)))

(defn on-line
  "Property.

  [Read Only]

  Returns the online status of the browser. The property returns
  boolean value, with true meaning online and false meaning offline.
  property sends updates whenever the browser's ability to connect
  the network changes. The update occurs when the user follows
  or when a script requests a remote page. For example, the property
  return false when users click links soon after they lose internet

  `online = window.navigator.onLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`"
  [this]
  (-> this (.-onLine)))

(defn permissions
  "Property.

  [Read Only]
  [Experimental]

  The Navigator.permissions read-only property returns a `web.permissions.Permissions`
  that can be used to query and update permission status of APIs
  by the Permissions API.

  `permissionsObj = globalObj.navigator.permissions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions`"
  [this]
  (-> this (.-permissions)))

(defn platform
  "Property.

  [Read Only]

  Returns a string representing the platform of the browser. The
  allows browsers to always return the empty string, so don't rely
  this property to get a reliable answer.

  `platform = navigator.platform`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform`"
  [this]
  (-> this (.-platform)))

(defn plugins
  "Property.

  [Read Only]

  Returns a `web.PluginArray` object, listing the `web.Plugin`
  describing the plugins installed in the application.

  `var plugins = navigator.plugins;

  plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.

  The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\\\"name\\\") methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`"
  [this]
  (-> this (.-plugins)))

(defn product
  "Property.

  [Read Only]

  The value of the NavigatorID.product property is always \\\"Gecko\\\",
  any browser.

  `productName = window.navigator.product`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product`"
  [this]
  (-> this (.-product)))

(defn service-worker
  "Property.

  [Read Only]

  The Navigator.serviceWorker read-only property returns the `web.workers.ServiceWorkerContainer`
  for the associated document, which provides access to registration,
  upgrade, and communication with the `web.workers.ServiceWorker`.

  `var workerContainerInstance = navigator.serviceWorker;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/serviceWorker`"
  [this]
  (-> this (.-serviceWorker)))

(defn storage
  "Property.

  [Read Only]

  The NavigatorStorage.storage read-only property returns the singleton
  object used to access the overall storage capabilities of the
  for the current site or app.

  `var storageManager = navigator.storage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorStorage/storage`"
  [this]
  (-> this (.-storage)))

(defn user-agent
  "Property.

  [Read Only]

  The NavigatorID.userAgent read-only property returns the user
  string for the current browser.

  `var ua = window.navigator.userAgent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent`"
  [this]
  (-> this (.-userAgent)))

(defn webdriver
  "Property.

  [Read Only]
  [Experimental]

  The webdriver read-only property of the `navigator` interface
  whether the user agent is controlled by automation.

  `var isAutomated = navigator.webdriver`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver`"
  [this]
  (-> this (.-webdriver)))

(defn xr
  "Property.

  [Read Only]
  [Experimental]

  The xr read-only property of the `web.performance.Navigator`
  returns a `web.ar.XR` object which works as a gateway to the
  API.

  `const XR = navigator.xr`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/xr`"
  [this]
  (-> this (.-xr)))

(defn build-id
  "Property.

  Returns the build identifier of the browser. In modern browsers
  property now returns a fixed timestamp as a privacy measure,
  20181001000000 in Firefox 64 onwards.

  `buildID = navigator.buildID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/buildID`"
  [this]
  (-> this (.-buildID)))

(defn set-build-id!
  "Property.

  Returns the build identifier of the browser. In modern browsers
  property now returns a fixed timestamp as a privacy measure,
  20181001000000 in Firefox 64 onwards.

  `buildID = navigator.buildID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/buildID`"
  [this val]
  (aset this "buildID" val))

(defn credentials
  "Property.

  The credentials property of the `web.performance.Navigator` interface
  the `web.credential.CredentialsContainer` interface, which exposes
  to request credentials. The `web.credential.CredentialsContainer`
  also notifies the user agent when an interesting event occurs,
  as a successful sign-in or sign-out. This interface can be used
  feature detection.

  `var credentialsContainer = navigator.credentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials`"
  [this]
  (-> this (.-credentials)))

(defn set-credentials!
  "Property.

  The credentials property of the `web.performance.Navigator` interface
  the `web.credential.CredentialsContainer` interface, which exposes
  to request credentials. The `web.credential.CredentialsContainer`
  also notifies the user agent when an interesting event occurs,
  as a successful sign-in or sign-out. This interface can be used
  feature detection.

  `var credentialsContainer = navigator.credentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials`"
  [this val]
  (aset this "credentials" val))

(defn device-memory
  "Property.

  [Read Only]
  [Experimental]

  The deviceMemory read-only property of the `navigator` interface
  the approximate amount of device memory in gigabytes. This value
  an approximation given by rounding down to the nearest power
  2 and dividing that number by 1024. Also, the lower and upper
  are used to protect privacy of owners of very low- or high-end

  `const memory = navigator.deviceMemory
  console.log (\\\"This device has at least \\\"  memory  \\\"GiB of RAM.\\\")`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory`"
  [this]
  (-> this (.-deviceMemory)))

(defn do-not-track
  "Property.

  [Experimental]

  Returns the user's do-not-track setting. This is \\\"1\\\" if the
  has requested not to be tracked by web sites, content, or advertising.

  `dnt = navigator.doNotTrack;

  The value reflects that of the do-not-track header, i.e. values of {\\\"1\\\", \\\"0\\\", \\\"unspecified\\\" }. Note: Prior to Gecko 32, Gecko used the values { \\\"yes\\\", \\\"no\\\", \\\"unspecified\\\"} (bug 887703).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack`"
  [this]
  (-> this (.-doNotTrack)))

(defn set-do-not-track!
  "Property.

  [Experimental]

  Returns the user's do-not-track setting. This is \\\"1\\\" if the
  has requested not to be tracked by web sites, content, or advertising.

  `dnt = navigator.doNotTrack;

  The value reflects that of the do-not-track header, i.e. values of {\\\"1\\\", \\\"0\\\", \\\"unspecified\\\" }. Note: Prior to Gecko 32, Gecko used the values { \\\"yes\\\", \\\"no\\\", \\\"unspecified\\\"} (bug 887703).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack`"
  [this val]
  (aset this "doNotTrack" val))

(defn media-devices
  "Property.

  [Read Only]

  The Navigator.mediaDevices read-only property returns a `web.audio.MediaDevices`
  which provides access to connected media input devices like cameras
  microphones, as well as screen sharing.

  `var mediaDevices = navigator.mediaDevices;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices`"
  [this]
  (-> this (.-mediaDevices)))

(defn moz-notification
  "Property.

  Returns a notification object you can use to deliver notifications
  the user from your web application."
  [this]
  (-> this (.-mozNotification)))

(defn set-moz-notification!
  "Property.

  Returns a notification object you can use to deliver notifications
  the user from your web application."
  [this val]
  (aset this "mozNotification" val))

(defn moz-social
  "Property.

  The Object, returned by the navigator.mozSocial property, is
  within the social media provider's panel to provide functionality
  may need."
  [this]
  (-> this (.-mozSocial)))

(defn set-moz-social!
  "Property.

  The Object, returned by the navigator.mozSocial property, is
  within the social media provider's panel to provide functionality
  may need."
  [this val]
  (aset this "mozSocial" val))

(defn oscpu
  "Property.

  The Navigator.oscpu property returns a string that identifies
  current operating system.

  `oscpuInfo = window.navigator.oscpu


  oscpuInfo is a string that takes the following form:





  Operating system
  oscpuInfo string format


  OS/2
  OS/2 Warp x (either 3, 4 or 4.5)


  Windows CE
  WindowsCE x.y1


  Windows 64-bit (64-bit build)
  Windows NT x.y; Win64; x64


  Windows 64-bit (32-bit build)
  Windows NT x.y; WOW64


  Windows 32-bit
  Windows NT x.y


  Mac OS X (PPC build)
  PPC Mac OS X x.y


  Mac OS X (i386/x64 build)
  Intel Mac OS X x.y


  Linux 64-bit (32-bit build)
  Output of uname -s plus \\\"i686 on x86_64\\\"


  Linux
  Output of uname -sm




  1x.y refers to the version of the operating system`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu`"
  [this]
  (-> this (.-oscpu)))

(defn set-oscpu!
  "Property.

  The Navigator.oscpu property returns a string that identifies
  current operating system.

  `oscpuInfo = window.navigator.oscpu


  oscpuInfo is a string that takes the following form:





  Operating system
  oscpuInfo string format


  OS/2
  OS/2 Warp x (either 3, 4 or 4.5)


  Windows CE
  WindowsCE x.y1


  Windows 64-bit (64-bit build)
  Windows NT x.y; Win64; x64


  Windows 64-bit (32-bit build)
  Windows NT x.y; WOW64


  Windows 32-bit
  Windows NT x.y


  Mac OS X (PPC build)
  PPC Mac OS X x.y


  Mac OS X (i386/x64 build)
  Intel Mac OS X x.y


  Linux 64-bit (32-bit build)
  Output of uname -s plus \\\"i686 on x86_64\\\"


  Linux
  Output of uname -sm




  1x.y refers to the version of the operating system`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu`"
  [this val]
  (aset this "oscpu" val))

(defn presentation
  "Property.

  Returns a reference to the Presentation API."
  [this]
  (-> this (.-presentation)))

(defn set-presentation!
  "Property.

  Returns a reference to the Presentation API."
  [this val]
  (aset this "presentation" val))

(defn product-sub
  "Property.

  [Read Only]

  The Navigator.productSub read-only property returns the build
  of the current browser.

  `prodSub = window.navigator.productSub


  prodSub is a string.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/productSub`"
  [this]
  (-> this (.-productSub)))

(defn securitypolicy
  "Property.

  Returns an empty string. In Netscape 4.7x, returns \"US & CA domestic
  or \"Export policy\"."
  [this]
  (-> this (.-securitypolicy)))

(defn set-securitypolicy!
  "Property.

  Returns an empty string. In Netscape 4.7x, returns \"US & CA domestic
  or \"Export policy\"."
  [this val]
  (aset this "securitypolicy" val))

(defn standalone
  "Property.

  Returns a boolean indicating whether the browser is running in
  mode. Available on Apple's iOS Safari only."
  [this]
  (-> this (.-standalone)))

(defn set-standalone!
  "Property.

  Returns a boolean indicating whether the browser is running in
  mode. Available on Apple's iOS Safari only."
  [this val]
  (aset this "standalone" val))

(defn storage-quota
  "Property.

  Returns a StorageQuota interface which provides means to query
  request storage usage and quota information."
  [this]
  (-> this (.-storageQuota)))

(defn set-storage-quota!
  "Property.

  Returns a StorageQuota interface which provides means to query
  request storage usage and quota information."
  [this val]
  (aset this "storageQuota" val))

(defn vendor
  "Property.

  [Read Only]

  The value of the `web.performance.Navigator` vendor property
  always either \\\"Google Inc.\\\", \\\"Apple Computer, Inc.\\\", or (in
  the empty string.

  `venString = window.navigator.vendor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendor`"
  [this]
  (-> this (.-vendor)))

(defn vendor-sub
  "Property.

  [Read Only]

  The value of the Navigator.vendorSub property is always the empty
  in any browser.

  `venSub = window.navigator.vendorSub`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendorSub`"
  [this]
  (-> this (.-vendorSub)))

(defn webkit-pointer
  "Property.

  Returns a PointerLock object for the Mouse Lock API."
  [this]
  (-> this (.-webkitPointer)))

(defn set-webkit-pointer!
  "Property.

  Returns a PointerLock object for the Mouse Lock API."
  [this val]
  (aset this "webkitPointer" val))

(defn clipboard
  "Property.

  [Read Only]

  The Clipboard API adds to the `web.performance.Navigator` interface
  read-only clipboard property, which returns the `web.clipboard.Clipboard`
  used to read and write the clipboard's contents.

  `theClipboard = navigator.clipboard;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard`"
  [this]
  (-> this (.-clipboard)))

