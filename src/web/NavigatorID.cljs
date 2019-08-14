(ns web.NavigatorID
  "The NavigatorID interface contains methods and properties related
  the identity of the browser."
  (:refer-clojure :exclude []))

(defn taint-enabled
  "Method.

  The NavigatorID.taintEnabled() method always returns false.

  `result = window.navigator.taintEnabled()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/taintEnabled`"
  [this ]
  (-> this (.taintEnabled)))

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

