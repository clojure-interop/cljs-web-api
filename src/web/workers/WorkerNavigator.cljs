(ns web.workers.WorkerNavigator
  "The WorkerNavigator interface represents a subset of the `web.performance.Navigator`
  allowed to be accessed from a `web.workers.Worker`. Such an object
  initialized for each worker and is available via the `WorkerGlobalScope.navigator`
  obtained by calling window.self.navigator."
  (:refer-clojure :exclude []))

(defn taint-enabled
  "Method.

  The NavigatorID.taintEnabled() method always returns false.

  `result = window.navigator.taintEnabled()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/taintEnabled`"
  [this ]
  (-> this (.taintEnabled)))

(defn connection
  "Property.

  The WorkerNavigator.connection read-only property returns a `web.other.NetworkInformation`
  containing information about the system's connection, such as
  current bandwidth of the user's device or whether the connection
  metered. This could be used to select high definition content
  low definition content based on the user's connection.

  `connectionInfo = self.navigator.connection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/connection`"
  [this]
  (-> this (.connection)))

(defn set-connection!
  "Property.

  The WorkerNavigator.connection read-only property returns a `web.other.NetworkInformation`
  containing information about the system's connection, such as
  current bandwidth of the user's device or whether the connection
  metered. This could be used to select high definition content
  low definition content based on the user's connection.

  `connectionInfo = self.navigator.connection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/connection`"
  [this val]
  (aset this "connection" val))

(defn app-code-name
  "Property.

  The value of the NavigatorID.appCodeName property is always \\\"Mozilla\\\",
  any browser. This property is kept only for compatibility purposes.

  `codeName = window.navigator.appCodeName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName`"
  [this]
  (-> this (.appCodeName)))

(defn set-app-code-name!
  "Property.

  The value of the NavigatorID.appCodeName property is always \\\"Mozilla\\\",
  any browser. This property is kept only for compatibility purposes.

  `codeName = window.navigator.appCodeName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName`"
  [this val]
  (aset this "appCodeName" val))

(defn app-name
  "Property.

  The value of the NavigatorID.appName property is always \\\"Netscape\\\",
  any browser.

  `appName = window.navigator.appName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName`"
  [this]
  (-> this (.appName)))

(defn set-app-name!
  "Property.

  The value of the NavigatorID.appName property is always \\\"Netscape\\\",
  any browser.

  `appName = window.navigator.appName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName`"
  [this val]
  (aset this "appName" val))

(defn app-version
  "Property.

  Returns either \\\"4.0\\\" or a string representing version information
  the browser.

  `window.navigator.appVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion`"
  [this]
  (-> this (.appVersion)))

(defn set-app-version!
  "Property.

  Returns either \\\"4.0\\\" or a string representing version information
  the browser.

  `window.navigator.appVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion`"
  [this val]
  (aset this "appVersion" val))

(defn language
  "Property.

  The NavigatorLanguage.language read-only property returns a string
  the preferred language of the user, usually the language of the
  UI.

  `var lang = navigator.language`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language`"
  [this]
  (-> this (.language)))

(defn languages
  "Property.

  The NavigatorLanguage.languages read-only property returns an
  of `web.dom.DOMString`s representing the user's preferred languages.
  language is described using BCP 47 language tags. In the returned
  they are ordered by preference with the most preferred language

  `preferredLanguages = globalObj.navigator.languages`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages`"
  [this]
  (-> this (.languages)))

(defn locks
  "Property.

  The locks read-only property of the `web.workers.WorkerNavigator`
  returns a `web.locks.LockManager` object which provides methods
  requesting a new `web.locks.Lock` object and querying for an
  Lock object.

  `var lockManager = Navigator.locks`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/locks`"
  [this]
  (-> this (.locks)))

(defn set-locks!
  "Property.

  The locks read-only property of the `web.workers.WorkerNavigator`
  returns a `web.locks.LockManager` object which provides methods
  requesting a new `web.locks.Lock` object and querying for an
  Lock object.

  `var lockManager = Navigator.locks`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/locks`"
  [this val]
  (aset this "locks" val))

(defn on-line
  "Property.

  Returns the online status of the browser. The property returns
  boolean value, with true meaning online and false meaning offline.
  property sends updates whenever the browser's ability to connect
  the network changes. The update occurs when the user follows
  or when a script requests a remote page. For example, the property
  return false when users click links soon after they lose internet

  `online = window.navigator.onLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`"
  [this]
  (-> this (.onLine)))

(defn set-on-line!
  "Property.

  Returns the online status of the browser. The property returns
  boolean value, with true meaning online and false meaning offline.
  property sends updates whenever the browser's ability to connect
  the network changes. The update occurs when the user follows
  or when a script requests a remote page. For example, the property
  return false when users click links soon after they lose internet

  `online = window.navigator.onLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`"
  [this val]
  (aset this "onLine" val))

(defn permissions
  "Property.

  The WorkerNavigator.permissions read-only property returns a
  object that can be used to query and update permission status
  APIs covered by the Permissions API.

  `permissionsObj = self.permissions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/permissions`"
  [this]
  (-> this (.permissions)))

(defn set-permissions!
  "Property.

  The WorkerNavigator.permissions read-only property returns a
  object that can be used to query and update permission status
  APIs covered by the Permissions API.

  `permissionsObj = self.permissions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/permissions`"
  [this val]
  (aset this "permissions" val))

(defn platform
  "Property.

  Returns a string representing the platform of the browser. The
  allows browsers to always return the empty string, so don't rely
  this property to get a reliable answer.

  `platform = navigator.platform`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform`"
  [this]
  (-> this (.platform)))

(defn set-platform!
  "Property.

  Returns a string representing the platform of the browser. The
  allows browsers to always return the empty string, so don't rely
  this property to get a reliable answer.

  `platform = navigator.platform`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform`"
  [this val]
  (aset this "platform" val))

(defn product
  "Property.

  The value of the NavigatorID.product property is always \\\"Gecko\\\",
  any browser.

  `productName = window.navigator.product`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product`"
  [this]
  (-> this (.product)))

(defn set-product!
  "Property.

  The value of the NavigatorID.product property is always \\\"Gecko\\\",
  any browser.

  `productName = window.navigator.product`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product`"
  [this val]
  (aset this "product" val))

(defn user-agent
  "Property.

  The NavigatorID.userAgent read-only property returns the user
  string for the current browser.

  `var ua = window.navigator.userAgent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent`"
  [this]
  (-> this (.userAgent)))

