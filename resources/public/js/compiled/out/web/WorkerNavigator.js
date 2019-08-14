// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WorkerNavigator');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The NavigatorID.taintEnabled() method always returns false.
 * 
 *   `result = window.navigator.taintEnabled()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/taintEnabled`
 */
web.WorkerNavigator.taint_enabled = (function web$WorkerNavigator$taint_enabled(this$){
return this$.taintEnabled();
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.appCodeName property is always \"Mozilla\",
 *   any browser. This property is kept only for compatibility purposes.
 * 
 *   `codeName = window.navigator.appCodeName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName`
 */
web.WorkerNavigator.app_code_name = (function web$WorkerNavigator$app_code_name(this$){
return this$.appCodeName();
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.appCodeName property is always \"Mozilla\",
 *   any browser. This property is kept only for compatibility purposes.
 * 
 *   `codeName = window.navigator.appCodeName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName`
 */
web.WorkerNavigator.set_app_code_name_BANG_ = (function web$WorkerNavigator$set_app_code_name_BANG_(this$,val){
return (this$["appCodeName"] = val);
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.appName property is always \"Netscape\",
 *   any browser.
 * 
 *   `appName = window.navigator.appName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName`
 */
web.WorkerNavigator.app_name = (function web$WorkerNavigator$app_name(this$){
return this$.appName();
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.appName property is always \"Netscape\",
 *   any browser.
 * 
 *   `appName = window.navigator.appName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName`
 */
web.WorkerNavigator.set_app_name_BANG_ = (function web$WorkerNavigator$set_app_name_BANG_(this$,val){
return (this$["appName"] = val);
});
/**
 * Property.
 * 
 *   Returns either \"4.0\" or a string representing version information
 *   the browser.
 * 
 *   `window.navigator.appVersion`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion`
 */
web.WorkerNavigator.app_version = (function web$WorkerNavigator$app_version(this$){
return this$.appVersion();
});
/**
 * Property.
 * 
 *   Returns either \"4.0\" or a string representing version information
 *   the browser.
 * 
 *   `window.navigator.appVersion`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion`
 */
web.WorkerNavigator.set_app_version_BANG_ = (function web$WorkerNavigator$set_app_version_BANG_(this$,val){
return (this$["appVersion"] = val);
});
/**
 * Property.
 * 
 *   The WorkerNavigator.connection read-only property returns a `web.NetworkInformation`
 *   containing information about the system's connection, such as
 *   current bandwidth of the user's device or whether the connection
 *   metered. This could be used to select high definition content
 *   low definition content based on the user's connection.
 * 
 *   `connectionInfo = self.navigator.connection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/connection`
 */
web.WorkerNavigator.connection = (function web$WorkerNavigator$connection(this$){
return this$.connection();
});
/**
 * Property.
 * 
 *   The WorkerNavigator.connection read-only property returns a `web.NetworkInformation`
 *   containing information about the system's connection, such as
 *   current bandwidth of the user's device or whether the connection
 *   metered. This could be used to select high definition content
 *   low definition content based on the user's connection.
 * 
 *   `connectionInfo = self.navigator.connection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/connection`
 */
web.WorkerNavigator.set_connection_BANG_ = (function web$WorkerNavigator$set_connection_BANG_(this$,val){
return (this$["connection"] = val);
});
/**
 * Property.
 * 
 *   The NavigatorLanguage.language read-only property returns a string
 *   the preferred language of the user, usually the language of the
 *   UI.
 * 
 *   `var lang = navigator.language`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language`
 */
web.WorkerNavigator.language = (function web$WorkerNavigator$language(this$){
return this$.language();
});
/**
 * Property.
 * 
 *   The NavigatorLanguage.languages read-only property returns an
 *   of `dom.DOMString`s representing the user's preferred languages.
 *   language is described using BCP 47 language tags. In the returned
 *   they are ordered by preference with the most preferred language
 * 
 *   `preferredLanguages = globalObj.navigator.languages`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages`
 */
web.WorkerNavigator.languages = (function web$WorkerNavigator$languages(this$){
return this$.languages();
});
/**
 * Property.
 * 
 *   The locks read-only property of the `web.WorkerNavigator` interface
 *   a `web.LockManager` object which provides methods for requesting
 *   new `web.Lock` object and querying for an existing Lock object.
 * 
 *   `var lockManager = Navigator.locks`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/locks`
 */
web.WorkerNavigator.locks = (function web$WorkerNavigator$locks(this$){
return this$.locks();
});
/**
 * Property.
 * 
 *   The locks read-only property of the `web.WorkerNavigator` interface
 *   a `web.LockManager` object which provides methods for requesting
 *   new `web.Lock` object and querying for an existing Lock object.
 * 
 *   `var lockManager = Navigator.locks`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/locks`
 */
web.WorkerNavigator.set_locks_BANG_ = (function web$WorkerNavigator$set_locks_BANG_(this$,val){
return (this$["locks"] = val);
});
/**
 * Property.
 * 
 *   Returns the online status of the browser. The property returns
 *   boolean value, with true meaning online and false meaning offline.
 *   property sends updates whenever the browser's ability to connect
 *   the network changes. The update occurs when the user follows
 *   or when a script requests a remote page. For example, the property
 *   return false when users click links soon after they lose internet
 * 
 *   `online = window.navigator.onLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`
 */
web.WorkerNavigator.on_line = (function web$WorkerNavigator$on_line(this$){
return this$.onLine();
});
/**
 * Property.
 * 
 *   Returns the online status of the browser. The property returns
 *   boolean value, with true meaning online and false meaning offline.
 *   property sends updates whenever the browser's ability to connect
 *   the network changes. The update occurs when the user follows
 *   or when a script requests a remote page. For example, the property
 *   return false when users click links soon after they lose internet
 * 
 *   `online = window.navigator.onLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`
 */
web.WorkerNavigator.set_on_line_BANG_ = (function web$WorkerNavigator$set_on_line_BANG_(this$,val){
return (this$["onLine"] = val);
});
/**
 * Property.
 * 
 *   The WorkerNavigator.permissions read-only property returns a
 *   object that can be used to query and update permission status
 *   APIs covered by the Permissions API.
 * 
 *   `permissionsObj = self.permissions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/permissions`
 */
web.WorkerNavigator.permissions = (function web$WorkerNavigator$permissions(this$){
return this$.permissions();
});
/**
 * Property.
 * 
 *   The WorkerNavigator.permissions read-only property returns a
 *   object that can be used to query and update permission status
 *   APIs covered by the Permissions API.
 * 
 *   `permissionsObj = self.permissions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator/permissions`
 */
web.WorkerNavigator.set_permissions_BANG_ = (function web$WorkerNavigator$set_permissions_BANG_(this$,val){
return (this$["permissions"] = val);
});
/**
 * Property.
 * 
 *   Returns a string representing the platform of the browser. The
 *   allows browsers to always return the empty string, so don't rely
 *   this property to get a reliable answer.
 * 
 *   `platform = navigator.platform`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform`
 */
web.WorkerNavigator.platform = (function web$WorkerNavigator$platform(this$){
return this$.platform();
});
/**
 * Property.
 * 
 *   Returns a string representing the platform of the browser. The
 *   allows browsers to always return the empty string, so don't rely
 *   this property to get a reliable answer.
 * 
 *   `platform = navigator.platform`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform`
 */
web.WorkerNavigator.set_platform_BANG_ = (function web$WorkerNavigator$set_platform_BANG_(this$,val){
return (this$["platform"] = val);
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.product property is always \"Gecko\",
 *   any browser.
 * 
 *   `productName = window.navigator.product`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product`
 */
web.WorkerNavigator.product = (function web$WorkerNavigator$product(this$){
return this$.product();
});
/**
 * Property.
 * 
 *   The value of the NavigatorID.product property is always \"Gecko\",
 *   any browser.
 * 
 *   `productName = window.navigator.product`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product`
 */
web.WorkerNavigator.set_product_BANG_ = (function web$WorkerNavigator$set_product_BANG_(this$,val){
return (this$["product"] = val);
});
/**
 * Property.
 * 
 *   The NavigatorID.userAgent read-only property returns the user
 *   string for the current browser.
 * 
 *   `var ua = window.navigator.userAgent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent`
 */
web.WorkerNavigator.user_agent = (function web$WorkerNavigator$user_agent(this$){
return this$.userAgent();
});
/**
 * Property.
 * 
 *   The navigator.hardwareConcurrency read-only property returns
 *   number of logical processors available to run threads on the
 *   computer.
 * 
 *   `logicalProcessors = window.navigator.hardwareConcurrency`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency`
 */
web.WorkerNavigator.hardware_concurrency = (function web$WorkerNavigator$hardware_concurrency(this$){
return this$.hardwareConcurrency();
});
/**
 * Property.
 * 
 *   The navigator.hardwareConcurrency read-only property returns
 *   number of logical processors available to run threads on the
 *   computer.
 * 
 *   `logicalProcessors = window.navigator.hardwareConcurrency`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency`
 */
web.WorkerNavigator.set_hardware_concurrency_BANG_ = (function web$WorkerNavigator$set_hardware_concurrency_BANG_(this$,val){
return (this$["hardwareConcurrency"] = val);
});

//# sourceMappingURL=WorkerNavigator.js.map?rel=1565798812905
