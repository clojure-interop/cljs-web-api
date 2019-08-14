// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Navigator');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The canShare() method of the `web.Navigator` interface returns
 *   if a call to Navigator.share() would succeed.
 * 
 *   `var canShare = navigator.canShare(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare`
 */
web.Navigator.can_share = (function web$Navigator$can_share(this$,data){
return this$.canShare(data);
});
/**
 * Method.
 * 
 *   The getBattery() method provides information about the system's
 *   It returns a battery promise, which is resolved in a `web.BatteryManager`
 *   providing also some new events you can handle to monitor the
 *   status. This implements the Battery Status API; see that documentation
 *   additional details, a guide to using the API, and sample code.
 * 
 *   `var batteryPromise = navigator.getBattery();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery`
 */
web.Navigator.get_battery = (function web$Navigator$get_battery(this$){
return this$.getBattery();
});
/**
 * Method.
 * 
 *   The Navigator.getGamepads() method returns an array of `web.Gamepad`
 *   one for each gamepad connected to the device.
 * 
 *   `var gamepads = navigator.getGamepads();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads`
 */
web.Navigator.get_gamepads = (function web$Navigator$get_gamepads(this$){
return this$.getGamepads();
});
/**
 * Method.
 * 
 *   The deprecated Navigator.getUserMedia() method prompts the user
 *   permission to use up to one video input device (such as a camera
 *   shared screen) and up to one audio input device (such as a microphone)
 *   the source for a `media.MediaStream`.
 * 
 *   `navigator.getUserMedia(constraints, successCallback, errorCallback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia`
 */
web.Navigator.get_user_media = (function web$Navigator$get_user_media(this$,constraints,success_callback,error_callback){
return this$.getUserMedia(constraints,success_callback,error_callback);
});
/**
 * Method.
 * 
 *   The getVRDisplays() method of the `web.Navigator` interface returns
 *   promise that resolves to an array of `vr.VRDisplay` objects representing
 *   available VR displays connected to the computer.
 * 
 *   `navigator.getVRDisplays().then(function(displays) {
 *   // Do something with the available VR displays
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getVRDisplays`
 */
web.Navigator.get_vr_displays = (function web$Navigator$get_vr_displays(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50622 = arguments.length;
var i__42557__auto___50623 = (0);
while(true){
if((i__42557__auto___50623 < len__42556__auto___50622)){
args__42563__auto__.push((arguments[i__42557__auto___50623]));

var G__50624 = (i__42557__auto___50623 + (1));
i__42557__auto___50623 = G__50624;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Navigator.get_vr_displays.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Navigator.get_vr_displays.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getVRDisplays,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Navigator.get_vr_displays.cljs$lang$maxFixedArity = (1);

web.Navigator.get_vr_displays.cljs$lang$applyTo = (function (seq50620){
var G__50621 = cljs.core.first.call(null,seq50620);
var seq50620__$1 = cljs.core.next.call(null,seq50620);
return web.Navigator.get_vr_displays.cljs$core$IFn$_invoke$arity$variadic(G__50621,seq50620__$1);
});

/**
 * Method.
 * 
 *   The Navigator.mozIsLocallyAvailable() method allows add-ons to
 *   whether or not a given resource is available.
 * 
 *   `navigator.mozIsLocallyAvailable(uri, ifOffline);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mozIsLocallyAvailable`
 */
web.Navigator.moz_is_locally_available = (function web$Navigator$moz_is_locally_available(this$,uri,if_offline){
return this$.mozIsLocallyAvailable(uri,if_offline);
});
/**
 * Method.
 * 
 *   The msLaunchUri() method is a Microsoft extension to the `web.Navigator`
 *   which is used to start a service or app, such as an email client,
 *   handles a given protocol. The Uniform Resource Identifier (URI)
 *   the protocol for the default service or app, such as mailto://test@contoso.com.
 * 
 *   `navigator.msLaunchUri(uri, successCallback, noHandlerCallback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/msLaunchUri`
 */
web.Navigator.ms_launch_uri = (function web$Navigator$ms_launch_uri(this$,uri,success_callback,no_handler_callback){
return this$.msLaunchUri(uri,success_callback,no_handler_callback);
});
/**
 * Method.
 * 
 *   Allows web sites to register themselves as possible handlers
 *   content of a particular MIME type.
 * 
 *   `navigator.registerContentHandler(mimeType, uri, title);
 * 
 * 
 *   mimeType is the desired MIME type as a string.
 *   uri is the URI to the handler as a string.
 *   title is the title of the handler presented to the user as a string.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerContentHandler`
 */
web.Navigator.register_content_handler = (function web$Navigator$register_content_handler(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50627 = arguments.length;
var i__42557__auto___50628 = (0);
while(true){
if((i__42557__auto___50628 < len__42556__auto___50627)){
args__42563__auto__.push((arguments[i__42557__auto___50628]));

var G__50629 = (i__42557__auto___50628 + (1));
i__42557__auto___50628 = G__50629;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Navigator.register_content_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Navigator.register_content_handler.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.registerContentHandler,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Navigator.register_content_handler.cljs$lang$maxFixedArity = (1);

web.Navigator.register_content_handler.cljs$lang$applyTo = (function (seq50625){
var G__50626 = cljs.core.first.call(null,seq50625);
var seq50625__$1 = cljs.core.next.call(null,seq50625);
return web.Navigator.register_content_handler.cljs$core$IFn$_invoke$arity$variadic(G__50626,seq50625__$1);
});

/**
 * Method.
 * 
 *   The `web.Navigator` method registerProtocolHandler() lets web
 *   register themselves as possible handlers for particular protocols.
 * 
 *   `navigator.registerProtocolHandler(protocol, url, title);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler`
 */
web.Navigator.register_protocol_handler = (function web$Navigator$register_protocol_handler(this$,protocol,url,title){
return this$.registerProtocolHandler(protocol,url,title);
});
/**
 * Method.
 * 
 *   The Navigator.requestMediaKeySystemAccess() method returns a
 *   which delivers a `media.MediaKeySystemAccess` object that can
 *   used to access a particular media key system, which can in turn
 *   used to create keys for decrypting a media stream. This method
 *   part of the Encrypted Media Extensions API, which brings support
 *   encrypted media and DRM-protected video to the web.
 * 
 *   `​Promise = Navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMediaKeySystemAccess`
 */
web.Navigator.request_media_key_system_access = (function web$Navigator$request_media_key_system_access(this$,key_system,supported_configurations){
return this$.requestMediaKeySystemAccess(key_system,supported_configurations);
});
/**
 * Method.
 * 
 *   The navigator.sendBeacon() method can be used to asynchronously
 *   a small amount of data over HTTP to a web server.
 * 
 *   `navigator.sendBeacon(url, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon`
 */
web.Navigator.send_beacon = (function web$Navigator$send_beacon(this$,url,data){
return this$.sendBeacon(url,data);
});
/**
 * Method.
 * 
 *   The Navigator.share() method invokes the native sharing mechanism
 *   the device as part of the Web Share API. If the Web Share API
 *   unsupported, then this method will be undefined.
 * 
 *   `var sharePromise = window.navigator.share(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share`
 */
web.Navigator.share = (function web$Navigator$share(this$,data){
return this$.share(data);
});
/**
 * Method.
 * 
 *   The NavigatorID.taintEnabled() method always returns false.
 * 
 *   `result = window.navigator.taintEnabled()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/taintEnabled`
 */
web.Navigator.taint_enabled = (function web$Navigator$taint_enabled(this$){
return this$.taintEnabled();
});
/**
 * Method.
 * 
 *   The Navigator.vibrate() method pulses the vibration hardware
 *   the device, if such hardware exists. If the device doesn't support
 *   this method has no effect. If a vibration pattern is already
 *   progress when this method is called, the previous pattern is
 *   and the new one begins instead.
 * 
 *   `var successBool = window.navigator.vibrate(pattern);
 * 
 * 
 *   pattern
 *   Provides a pattern of vibration and pause intervals. Each value indicates a number of milliseconds to vibrate or pause, in alternation. You may provide either a single value (to vibrate once for that many milliseconds) or an array of values to alternately vibrate, pause, then vibrate again. See Vibration API for details.
 * 
 * 
 *   Passing a value of 0, an empty array, or an array containing all zeros will cancel any currently ongoing vibration pattern.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate`
 */
web.Navigator.vibrate = (function web$Navigator$vibrate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50632 = arguments.length;
var i__42557__auto___50633 = (0);
while(true){
if((i__42557__auto___50633 < len__42556__auto___50632)){
args__42563__auto__.push((arguments[i__42557__auto___50633]));

var G__50634 = (i__42557__auto___50633 + (1));
i__42557__auto___50633 = G__50634;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Navigator.vibrate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Navigator.vibrate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vibrate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Navigator.vibrate.cljs$lang$maxFixedArity = (1);

web.Navigator.vibrate.cljs$lang$applyTo = (function (seq50630){
var G__50631 = cljs.core.first.call(null,seq50630);
var seq50630__$1 = cljs.core.next.call(null,seq50630);
return web.Navigator.vibrate.cljs$core$IFn$_invoke$arity$variadic(G__50631,seq50630__$1);
});

/**
 * Property.
 * 
 *   The activeVRDisplays read-only property of the `web.Navigator`
 *   returns an array containing every `vr.VRDisplay` object that
 *   currently presenting (`vr.VRDisplay.ispresenting` is true).
 * 
 *   `var myActiveDisplays = navigator.activeVRDisplays;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/activeVRDisplays`
 */
web.Navigator.active_vr_displays = (function web$Navigator$active_vr_displays(this$){
return this$.activeVRDisplays();
});
/**
 * Property.
 * 
 *   The activeVRDisplays read-only property of the `web.Navigator`
 *   returns an array containing every `vr.VRDisplay` object that
 *   currently presenting (`vr.VRDisplay.ispresenting` is true).
 * 
 *   `var myActiveDisplays = navigator.activeVRDisplays;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/activeVRDisplays`
 */
web.Navigator.set_active_vr_displays_BANG_ = (function web$Navigator$set_active_vr_displays_BANG_(this$,val){
return (this$["activeVRDisplays"] = val);
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
web.Navigator.app_code_name = (function web$Navigator$app_code_name(this$){
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
web.Navigator.set_app_code_name_BANG_ = (function web$Navigator$set_app_code_name_BANG_(this$,val){
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
web.Navigator.app_name = (function web$Navigator$app_name(this$){
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
web.Navigator.set_app_name_BANG_ = (function web$Navigator$set_app_name_BANG_(this$,val){
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
web.Navigator.app_version = (function web$Navigator$app_version(this$){
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
web.Navigator.set_app_version_BANG_ = (function web$Navigator$set_app_version_BANG_(this$,val){
return (this$["appVersion"] = val);
});
/**
 * Property.
 * 
 *   The battery read-only property returns a `web.BatteryManager`
 *   information about the system's battery charge level; provides
 *   some new events you can handle to monitor the battery status.
 *   implements the Battery Status API; see that documentation for
 *   details, a guide to using the API, and sample code.
 * 
 *   `var battery = navigator.battery;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery`
 */
web.Navigator.battery = (function web$Navigator$battery(this$){
return this$.battery();
});
/**
 * Property.
 * 
 *   The battery read-only property returns a `web.BatteryManager`
 *   information about the system's battery charge level; provides
 *   some new events you can handle to monitor the battery status.
 *   implements the Battery Status API; see that documentation for
 *   details, a guide to using the API, and sample code.
 * 
 *   `var battery = navigator.battery;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery`
 */
web.Navigator.set_battery_BANG_ = (function web$Navigator$set_battery_BANG_(this$,val){
return (this$["battery"] = val);
});
/**
 * Property.
 * 
 *   Returns the build identifier of the browser. In modern browsers
 *   property now returns a fixed timestamp as a privacy measure,
 *   20181001000000 in Firefox 64 onwards.
 * 
 *   `buildID = navigator.buildID;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/buildID`
 */
web.Navigator.build_id = (function web$Navigator$build_id(this$){
return this$.buildID();
});
/**
 * Property.
 * 
 *   Returns the build identifier of the browser. In modern browsers
 *   property now returns a fixed timestamp as a privacy measure,
 *   20181001000000 in Firefox 64 onwards.
 * 
 *   `buildID = navigator.buildID;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/buildID`
 */
web.Navigator.set_build_id_BANG_ = (function web$Navigator$set_build_id_BANG_(this$,val){
return (this$["buildID"] = val);
});
/**
 * Property.
 * 
 *   The Clipboard API adds to the `web.Navigator` interface the read-only
 *   property, which returns the `web.Clipboard` object used to read
 *   write the clipboard's contents.
 * 
 *   `theClipboard = navigator.clipboard;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard`
 */
web.Navigator.clipboard = (function web$Navigator$clipboard(this$){
return this$.clipboard();
});
/**
 * Property.
 * 
 *   The Navigator.connection read-only property returns a `web.NetworkInformation`
 *   containing information about the system's connection, such as
 *   current bandwidth of the user's device or whether the connection
 *   metered.
 * 
 *   `networkInformation = navigator.connection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection`
 */
web.Navigator.connection = (function web$Navigator$connection(this$){
return this$.connection();
});
/**
 * Property.
 * 
 *   The Navigator.connection read-only property returns a `web.NetworkInformation`
 *   containing information about the system's connection, such as
 *   current bandwidth of the user's device or whether the connection
 *   metered.
 * 
 *   `networkInformation = navigator.connection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection`
 */
web.Navigator.set_connection_BANG_ = (function web$Navigator$set_connection_BANG_(this$,val){
return (this$["connection"] = val);
});
/**
 * Property.
 * 
 *   navigator.cookieEnabled returns a Boolean value that indicates
 *   cookies are enabled or not.
 * 
 *   `var cookieEnabled = navigator.cookieEnabled;
 * 
 * 
 *   \tcookieEnabled is a Boolean: true or false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled`
 */
web.Navigator.cookie_enabled = (function web$Navigator$cookie_enabled(this$){
return this$.cookieEnabled();
});
/**
 * Property.
 * 
 *   navigator.cookieEnabled returns a Boolean value that indicates
 *   cookies are enabled or not.
 * 
 *   `var cookieEnabled = navigator.cookieEnabled;
 * 
 * 
 *   \tcookieEnabled is a Boolean: true or false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled`
 */
web.Navigator.set_cookie_enabled_BANG_ = (function web$Navigator$set_cookie_enabled_BANG_(this$,val){
return (this$["cookieEnabled"] = val);
});
/**
 * Property.
 * 
 *   The credentials property of the `web.Navigator` interface returns
 *   `web.CredentialsContainer` interface, which exposes methods to
 *   The `web.CredentialsContainer` interface also notifies the user
 *   when an interesting event occurs, such as a successful sign-in
 *   sign-out. This interface can be used for feature detection.
 * 
 *   `var credentialsContainer = navigator.credentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials`
 */
web.Navigator.credentials = (function web$Navigator$credentials(this$){
return this$.credentials();
});
/**
 * Property.
 * 
 *   The credentials property of the `web.Navigator` interface returns
 *   `web.CredentialsContainer` interface, which exposes methods to
 *   The `web.CredentialsContainer` interface also notifies the user
 *   when an interesting event occurs, such as a successful sign-in
 *   sign-out. This interface can be used for feature detection.
 * 
 *   `var credentialsContainer = navigator.credentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials`
 */
web.Navigator.set_credentials_BANG_ = (function web$Navigator$set_credentials_BANG_(this$,val){
return (this$["credentials"] = val);
});
/**
 * Property.
 * 
 *   The deviceMemory read-only property of the `web.navigator` interface
 *   the approximate amount of device memory in gigabytes. This value
 *   an approximation given by rounding down to the nearest power
 *   2 and dividing that number by 1024. Also, the lower and upper
 *   are used to protect privacy of owners of very low- or high-end
 * 
 *   `const memory = navigator.deviceMemory
 *   console.log (\"This device has at least \"  memory  \"GiB of RAM.\")`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory`
 */
web.Navigator.device_memory = (function web$Navigator$device_memory(this$){
return this$.deviceMemory();
});
/**
 * Property.
 * 
 *   The deviceMemory read-only property of the `web.navigator` interface
 *   the approximate amount of device memory in gigabytes. This value
 *   an approximation given by rounding down to the nearest power
 *   2 and dividing that number by 1024. Also, the lower and upper
 *   are used to protect privacy of owners of very low- or high-end
 * 
 *   `const memory = navigator.deviceMemory
 *   console.log (\"This device has at least \"  memory  \"GiB of RAM.\")`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory`
 */
web.Navigator.set_device_memory_BANG_ = (function web$Navigator$set_device_memory_BANG_(this$,val){
return (this$["deviceMemory"] = val);
});
/**
 * Property.
 * 
 *   Returns the user's do-not-track setting. This is \"1\" if the
 *   has requested not to be tracked by web sites, content, or advertising.
 * 
 *   `dnt = navigator.doNotTrack;
 * 
 *   The value reflects that of the do-not-track header, i.e. values of {\"1\", \"0\", \"unspecified\" }. Note: Prior to Gecko 32, Gecko used the values { \"yes\", \"no\", \"unspecified\"} (bug 887703).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack`
 */
web.Navigator.do_not_track = (function web$Navigator$do_not_track(this$){
return this$.doNotTrack();
});
/**
 * Property.
 * 
 *   Returns the user's do-not-track setting. This is \"1\" if the
 *   has requested not to be tracked by web sites, content, or advertising.
 * 
 *   `dnt = navigator.doNotTrack;
 * 
 *   The value reflects that of the do-not-track header, i.e. values of {\"1\", \"0\", \"unspecified\" }. Note: Prior to Gecko 32, Gecko used the values { \"yes\", \"no\", \"unspecified\"} (bug 887703).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack`
 */
web.Navigator.set_do_not_track_BANG_ = (function web$Navigator$set_do_not_track_BANG_(this$,val){
return (this$["doNotTrack"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.geolocation read-only property returns a `web.Geolocation`
 *   that gives Web content access to the location of the device.
 *   allows a Web site or app to offer customized results based on
 *   user's location.
 * 
 *   `geo = navigator.geolocation`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation`
 */
web.Navigator.geolocation = (function web$Navigator$geolocation(this$){
return this$.geolocation();
});
/**
 * Property.
 * 
 *   The Navigator.geolocation read-only property returns a `web.Geolocation`
 *   that gives Web content access to the location of the device.
 *   allows a Web site or app to offer customized results based on
 *   user's location.
 * 
 *   `geo = navigator.geolocation`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation`
 */
web.Navigator.set_geolocation_BANG_ = (function web$Navigator$set_geolocation_BANG_(this$,val){
return (this$["geolocation"] = val);
});
/**
 * Property.
 * 
 *   The keyboard read-only property of the `web.Navigator` interface
 *   a `web.Keyboard` object which provides access to functions that
 *   keyboard layout maps and toggle capturing of key presses from
 *   physical keyboard.
 * 
 *   `var keyboard = navigator.keyboard`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/keyboard`
 */
web.Navigator.keyboard = (function web$Navigator$keyboard(this$){
return this$.keyboard();
});
/**
 * Property.
 * 
 *   The keyboard read-only property of the `web.Navigator` interface
 *   a `web.Keyboard` object which provides access to functions that
 *   keyboard layout maps and toggle capturing of key presses from
 *   physical keyboard.
 * 
 *   `var keyboard = navigator.keyboard`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/keyboard`
 */
web.Navigator.set_keyboard_BANG_ = (function web$Navigator$set_keyboard_BANG_(this$,val){
return (this$["keyboard"] = val);
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
web.Navigator.language = (function web$Navigator$language(this$){
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
web.Navigator.languages = (function web$Navigator$languages(this$){
return this$.languages();
});
/**
 * Property.
 * 
 *   The locks read-only property of the `web.Navigator` interface
 *   a `web.LockManager` object which provides methods for requesting
 *   new `web.Lock` object and querying for an existing Lock object.
 * 
 *   `var lockManager = Navigator.locks`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/locks`
 */
web.Navigator.locks = (function web$Navigator$locks(this$){
return this$.locks();
});
/**
 * Property.
 * 
 *   The locks read-only property of the `web.Navigator` interface
 *   a `web.LockManager` object which provides methods for requesting
 *   new `web.Lock` object and querying for an existing Lock object.
 * 
 *   `var lockManager = Navigator.locks`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/locks`
 */
web.Navigator.set_locks_BANG_ = (function web$Navigator$set_locks_BANG_(this$,val){
return (this$["locks"] = val);
});
/**
 * Property.
 * 
 *   The maxTouchPoints read-only property of the `web.Navigator`
 *   returns the maximum number of simultaneous touch contact points
 *   supported by the current device.
 * 
 *   `touchPoints = navigator.maxTouchPoints;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints`
 */
web.Navigator.max_touch_points = (function web$Navigator$max_touch_points(this$){
return this$.maxTouchPoints();
});
/**
 * Property.
 * 
 *   The maxTouchPoints read-only property of the `web.Navigator`
 *   returns the maximum number of simultaneous touch contact points
 *   supported by the current device.
 * 
 *   `touchPoints = navigator.maxTouchPoints;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints`
 */
web.Navigator.set_max_touch_points_BANG_ = (function web$Navigator$set_max_touch_points_BANG_(this$,val){
return (this$["maxTouchPoints"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.mediaDevices read-only property returns a `media.MediaDevices`
 *   which provides access to connected media input devices like cameras
 *   microphones, as well as screen sharing.
 * 
 *   `var mediaDevices = navigator.mediaDevices;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices`
 */
web.Navigator.media_devices = (function web$Navigator$media_devices(this$){
return this$.mediaDevices();
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
web.Navigator.on_line = (function web$Navigator$on_line(this$){
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
web.Navigator.set_on_line_BANG_ = (function web$Navigator$set_on_line_BANG_(this$,val){
return (this$["onLine"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.oscpu property returns a string that identifies
 *   current operating system.
 * 
 *   `oscpuInfo = window.navigator.oscpu
 * 
 * 
 *   oscpuInfo is a string that takes the following form:
 * 
 * 
 * 
 * 
 * 
 *   Operating system
 *   oscpuInfo string format
 * 
 * 
 *   OS/2
 *   OS/2 Warp x (either 3, 4 or 4.5)
 * 
 * 
 *   Windows CE
 *   WindowsCE x.y1
 * 
 * 
 *   Windows 64-bit (64-bit build)
 *   Windows NT x.y; Win64; x64
 * 
 * 
 *   Windows 64-bit (32-bit build)
 *   Windows NT x.y; WOW64
 * 
 * 
 *   Windows 32-bit
 *   Windows NT x.y
 * 
 * 
 *   Mac OS X (PPC build)
 *   PPC Mac OS X x.y
 * 
 * 
 *   Mac OS X (i386/x64 build)
 *   Intel Mac OS X x.y
 * 
 * 
 *   Linux 64-bit (32-bit build)
 *   Output of uname -s plus \"i686 on x86_64\"
 * 
 * 
 *   Linux
 *   Output of uname -sm
 * 
 * 
 * 
 * 
 *   1x.y refers to the version of the operating system`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu`
 */
web.Navigator.oscpu = (function web$Navigator$oscpu(this$){
return this$.oscpu();
});
/**
 * Property.
 * 
 *   The Navigator.oscpu property returns a string that identifies
 *   current operating system.
 * 
 *   `oscpuInfo = window.navigator.oscpu
 * 
 * 
 *   oscpuInfo is a string that takes the following form:
 * 
 * 
 * 
 * 
 * 
 *   Operating system
 *   oscpuInfo string format
 * 
 * 
 *   OS/2
 *   OS/2 Warp x (either 3, 4 or 4.5)
 * 
 * 
 *   Windows CE
 *   WindowsCE x.y1
 * 
 * 
 *   Windows 64-bit (64-bit build)
 *   Windows NT x.y; Win64; x64
 * 
 * 
 *   Windows 64-bit (32-bit build)
 *   Windows NT x.y; WOW64
 * 
 * 
 *   Windows 32-bit
 *   Windows NT x.y
 * 
 * 
 *   Mac OS X (PPC build)
 *   PPC Mac OS X x.y
 * 
 * 
 *   Mac OS X (i386/x64 build)
 *   Intel Mac OS X x.y
 * 
 * 
 *   Linux 64-bit (32-bit build)
 *   Output of uname -s plus \"i686 on x86_64\"
 * 
 * 
 *   Linux
 *   Output of uname -sm
 * 
 * 
 * 
 * 
 *   1x.y refers to the version of the operating system`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu`
 */
web.Navigator.set_oscpu_BANG_ = (function web$Navigator$set_oscpu_BANG_(this$,val){
return (this$["oscpu"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.permissions read-only property returns a `web.Permissions`
 *   that can be used to query and update permission status of APIs
 *   by the Permissions API.
 * 
 *   `permissionsObj = globalObj.navigator.permissions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions`
 */
web.Navigator.permissions = (function web$Navigator$permissions(this$){
return this$.permissions();
});
/**
 * Property.
 * 
 *   The Navigator.permissions read-only property returns a `web.Permissions`
 *   that can be used to query and update permission status of APIs
 *   by the Permissions API.
 * 
 *   `permissionsObj = globalObj.navigator.permissions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions`
 */
web.Navigator.set_permissions_BANG_ = (function web$Navigator$set_permissions_BANG_(this$,val){
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
web.Navigator.platform = (function web$Navigator$platform(this$){
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
web.Navigator.set_platform_BANG_ = (function web$Navigator$set_platform_BANG_(this$,val){
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
web.Navigator.product = (function web$Navigator$product(this$){
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
web.Navigator.set_product_BANG_ = (function web$Navigator$set_product_BANG_(this$,val){
return (this$["product"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.productSub read-only property returns the build
 *   of the current browser.
 * 
 *   `prodSub = window.navigator.productSub
 * 
 * 
 *   prodSub is a string.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/productSub`
 */
web.Navigator.product_sub = (function web$Navigator$product_sub(this$){
return this$.productSub();
});
/**
 * Property.
 * 
 *   The Navigator.serviceWorker read-only property returns the `web.ServiceWorkerContainer`
 *   for the associated document, which provides access to registration,
 *   upgrade, and communication with the `web.ServiceWorker`.
 * 
 *   `var workerContainerInstance = navigator.serviceWorker;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/serviceWorker`
 */
web.Navigator.service_worker = (function web$Navigator$service_worker(this$){
return this$.serviceWorker();
});
/**
 * Property.
 * 
 *   The Navigator.serviceWorker read-only property returns the `web.ServiceWorkerContainer`
 *   for the associated document, which provides access to registration,
 *   upgrade, and communication with the `web.ServiceWorker`.
 * 
 *   `var workerContainerInstance = navigator.serviceWorker;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/serviceWorker`
 */
web.Navigator.set_service_worker_BANG_ = (function web$Navigator$set_service_worker_BANG_(this$,val){
return (this$["serviceWorker"] = val);
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
web.Navigator.user_agent = (function web$Navigator$user_agent(this$){
return this$.userAgent();
});
/**
 * Property.
 * 
 *   The value of the `web.Navigator` vendor property is always either
 *   Inc.\", \"Apple Computer, Inc.\", or (in Firefox) the empty string.
 * 
 *   `venString = window.navigator.vendor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendor`
 */
web.Navigator.vendor = (function web$Navigator$vendor(this$){
return this$.vendor();
});
/**
 * Property.
 * 
 *   The value of the Navigator.vendorSub property is always the empty
 *   in any browser.
 * 
 *   `venSub = window.navigator.vendorSub`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendorSub`
 */
web.Navigator.vendor_sub = (function web$Navigator$vendor_sub(this$){
return this$.vendorSub();
});
/**
 * Property.
 * 
 *   The webdriver read-only property of the `web.navigator` interface
 *   whether the user agent is controlled by automation.
 * 
 *   `var isAutomated = navigator.webdriver`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver`
 */
web.Navigator.webdriver = (function web$Navigator$webdriver(this$){
return this$.webdriver();
});
/**
 * Property.
 * 
 *   The webdriver read-only property of the `web.navigator` interface
 *   whether the user agent is controlled by automation.
 * 
 *   `var isAutomated = navigator.webdriver`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver`
 */
web.Navigator.set_webdriver_BANG_ = (function web$Navigator$set_webdriver_BANG_(this$,val){
return (this$["webdriver"] = val);
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
web.Navigator.hardware_concurrency = (function web$Navigator$hardware_concurrency(this$){
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
web.Navigator.set_hardware_concurrency_BANG_ = (function web$Navigator$set_hardware_concurrency_BANG_(this$,val){
return (this$["hardwareConcurrency"] = val);
});
/**
 * Property.
 * 
 *   This method indicates whether the current browser is Java-enabled
 *   not.
 * 
 *   `result = window.navigator.javaEnabled()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled`
 */
web.Navigator.java_enabled = (function web$Navigator$java_enabled(this$){
return this$.javaEnabled();
});
/**
 * Property.
 * 
 *   This method indicates whether the current browser is Java-enabled
 *   not.
 * 
 *   `result = window.navigator.javaEnabled()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled`
 */
web.Navigator.set_java_enabled_BANG_ = (function web$Navigator$set_java_enabled_BANG_(this$,val){
return (this$["javaEnabled"] = val);
});
/**
 * Property.
 * 
 *   The Navigator.mediaCapabilities read-only property returns a
 *   object that can expose information about the decoding and encoding
 *   for a given format and output capabilities as defined by the
 *   Capabilities API.
 * 
 *   `mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities`
 */
web.Navigator.media_capabilities = (function web$Navigator$media_capabilities(this$){
return this$.mediaCapabilities();
});
/**
 * Property.
 * 
 *   The Navigator.mediaCapabilities read-only property returns a
 *   object that can expose information about the decoding and encoding
 *   for a given format and output capabilities as defined by the
 *   Capabilities API.
 * 
 *   `mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities`
 */
web.Navigator.set_media_capabilities_BANG_ = (function web$Navigator$set_media_capabilities_BANG_(this$,val){
return (this$["mediaCapabilities"] = val);
});
/**
 * Property.
 * 
 *   Returns a `web.MimeTypeArray` object, which contains a list of
 *   objects representing the MIME types recognized by the browser.
 * 
 *   `var mimeTypes[] = navigator.mimeTypes;
 * 
 *   mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`
 */
web.Navigator.mime_types = (function web$Navigator$mime_types(this$){
return this$.mimeTypes();
});
/**
 * Property.
 * 
 *   Returns a `web.MimeTypeArray` object, which contains a list of
 *   objects representing the MIME types recognized by the browser.
 * 
 *   `var mimeTypes[] = navigator.mimeTypes;
 * 
 *   mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`
 */
web.Navigator.set_mime_types_BANG_ = (function web$Navigator$set_mime_types_BANG_(this$,val){
return (this$["mimeTypes"] = val);
});
/**
 * Property.
 * 
 *   Returns a `web.PluginArray` object, listing the `web.Plugin`
 *   describing the plugins installed in the application.
 * 
 *   `var plugins = navigator.plugins;
 * 
 *   plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.
 * 
 *   The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\"name\") methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`
 */
web.Navigator.plugins = (function web$Navigator$plugins(this$){
return this$.plugins();
});
/**
 * Property.
 * 
 *   Returns a `web.PluginArray` object, listing the `web.Plugin`
 *   describing the plugins installed in the application.
 * 
 *   `var plugins = navigator.plugins;
 * 
 *   plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.
 * 
 *   The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\"name\") methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`
 */
web.Navigator.set_plugins_BANG_ = (function web$Navigator$set_plugins_BANG_(this$,val){
return (this$["plugins"] = val);
});
/**
 * Property.
 * 
 *   The NavigatorStorage.storage read-only property returns the singleton
 *   object used to access the overall storage capabilities of the
 *   for the current site or app.
 * 
 *   `var storageManager = navigator.storage;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorStorage/storage`
 */
web.Navigator.storage = (function web$Navigator$storage(this$){
return this$.storage();
});
/**
 * Property.
 * 
 *   The NavigatorStorage.storage read-only property returns the singleton
 *   object used to access the overall storage capabilities of the
 *   for the current site or app.
 * 
 *   `var storageManager = navigator.storage;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorStorage/storage`
 */
web.Navigator.set_storage_BANG_ = (function web$Navigator$set_storage_BANG_(this$,val){
return (this$["storage"] = val);
});
/**
 * Property.
 * 
 *   The xr read-only property of the `web.Navigator` interface returns
 *   `web.XR` object which works as a gateway to the WebXR API.
 * 
 *   `const XR = navigator.xr`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/xr`
 */
web.Navigator.xr = (function web$Navigator$xr(this$){
return this$.xr();
});
/**
 * Property.
 * 
 *   The xr read-only property of the `web.Navigator` interface returns
 *   `web.XR` object which works as a gateway to the WebXR API.
 * 
 *   `const XR = navigator.xr`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/xr`
 */
web.Navigator.set_xr_BANG_ = (function web$Navigator$set_xr_BANG_(this$,val){
return (this$["xr"] = val);
});

//# sourceMappingURL=Navigator.js.map?rel=1565798841719
