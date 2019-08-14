// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Screen');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The lockOrientation() method of the `web.Screen` interface locks
 *   screen into a specified orientation. The `web.ScreenOrientation.lock()`
 *   should be used instead.
 * 
 *   `lockAllowed = window.screen.lockOrientation(orientation);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation`
 */
web.Screen.lock_orientation = (function web$Screen$lock_orientation(this$,orientation){
return this$.lockOrientation(orientation);
});
/**
 * Method.
 * 
 *   The Screen.unlockOrientation() method removes all the previous
 *   locks set by the page/app. The `web.ScreenOrientation.unlock()`
 *   should be used instead.
 * 
 *   `var unlocked = window.screen.unlockOrientation();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/unlockOrientation`
 */
web.Screen.unlock_orientation = (function web$Screen$unlock_orientation(this$){
return this$.unlockOrientation();
});
/**
 * Method.
 * 
 *   The `web.EventTarget` method addEventListener() sets up a function
 *   will be called whenever the specified event is delivered to the
 * 
 *   `target.addEventListener(type, listener[, options]);
 *   target.addEventListener(type, listener[, useCapture]);
 *   target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
 */
web.Screen.add_event_listener = (function web$Screen$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44798 = arguments.length;
var i__42557__auto___44799 = (0);
while(true){
if((i__42557__auto___44799 < len__42556__auto___44798)){
args__42563__auto__.push((arguments[i__42557__auto___44799]));

var G__44800 = (i__42557__auto___44799 + (1));
i__42557__auto___44799 = G__44800;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Screen.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Screen.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Screen.add_event_listener.cljs$lang$maxFixedArity = (1);

web.Screen.add_event_listener.cljs$lang$applyTo = (function (seq44796){
var G__44797 = cljs.core.first.call(null,seq44796);
var seq44796__$1 = cljs.core.next.call(null,seq44796);
return web.Screen.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44797,seq44796__$1);
});

/**
 * Method.
 * 
 *   The EventTarget.removeEventListener() method removes from the
 *   an event listener previously registered with `web.EventTarget.addEventListener()`.
 *   event listener to be removed is identified using a combination
 *   the event type, the event listener function itself, and various
 *   options that may affect the matching process; see Matching event
 *   for removal
 * 
 *   `target.removeEventListener(type, listener[, options]);
 *   target.removeEventListener(type, listener[, useCapture]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`
 */
web.Screen.remove_event_listener = (function web$Screen$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44803 = arguments.length;
var i__42557__auto___44804 = (0);
while(true){
if((i__42557__auto___44804 < len__42556__auto___44803)){
args__42563__auto__.push((arguments[i__42557__auto___44804]));

var G__44805 = (i__42557__auto___44804 + (1));
i__42557__auto___44804 = G__44805;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Screen.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Screen.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Screen.remove_event_listener.cljs$lang$maxFixedArity = (1);

web.Screen.remove_event_listener.cljs$lang$applyTo = (function (seq44801){
var G__44802 = cljs.core.first.call(null,seq44801);
var seq44801__$1 = cljs.core.next.call(null,seq44801);
return web.Screen.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44802,seq44801__$1);
});

/**
 * Method.
 * 
 *   Dispatches an `web.Event` at the specified `web.EventTarget`,
 *   invoking the affected `web.EventListener`s in the appropriate
 *   The normal event processing rules (including the capturing and
 *   bubbling phase) also apply to events dispatched manually with
 * 
 *   `cancelled = !target.dispatchEvent(event)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`
 */
web.Screen.dispatch_event = (function web$Screen$dispatch_event(this$,event){
return this$.dispatchEvent(event);
});
/**
 * Property.
 * 
 *   The read-only `web.Screen` interface's availHeight property returns
 *   height, in CSS pixels, of the space available for Web content
 *   the screen. Since `web.Screen` is exposed on the `web.Window`
 *   `web.window.screen` property, you access availHeight using window.screen.availHeight.
 * 
 *   `let availHeight = window.screen.availHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight`
 */
web.Screen.avail_height = (function web$Screen$avail_height(this$){
return this$.availHeight();
});
/**
 * Property.
 * 
 *   The read-only `web.Screen` interface's availHeight property returns
 *   height, in CSS pixels, of the space available for Web content
 *   the screen. Since `web.Screen` is exposed on the `web.Window`
 *   `web.window.screen` property, you access availHeight using window.screen.availHeight.
 * 
 *   `let availHeight = window.screen.availHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight`
 */
web.Screen.set_avail_height_BANG_ = (function web$Screen$set_avail_height_BANG_(this$,val){
return (this$["availHeight"] = val);
});
/**
 * Property.
 * 
 *   Returns the first available pixel available from the left side
 *   the screen.
 * 
 *   `let availLeft = window.screen.availLeft;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availLeft`
 */
web.Screen.avail_left = (function web$Screen$avail_left(this$){
return this$.availLeft();
});
/**
 * Property.
 * 
 *   Returns the first available pixel available from the left side
 *   the screen.
 * 
 *   `let availLeft = window.screen.availLeft;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availLeft`
 */
web.Screen.set_avail_left_BANG_ = (function web$Screen$set_avail_left_BANG_(this$,val){
return (this$["availLeft"] = val);
});
/**
 * Property.
 * 
 *   Specifies the y-coordinate of the first pixel that is not allocated
 *   permanent or semipermanent user interface features.
 * 
 *   `let availTop = window.screen.availTop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availTop`
 */
web.Screen.avail_top = (function web$Screen$avail_top(this$){
return this$.availTop();
});
/**
 * Property.
 * 
 *   Specifies the y-coordinate of the first pixel that is not allocated
 *   permanent or semipermanent user interface features.
 * 
 *   `let availTop = window.screen.availTop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availTop`
 */
web.Screen.set_avail_top_BANG_ = (function web$Screen$set_avail_top_BANG_(this$,val){
return (this$["availTop"] = val);
});
/**
 * Property.
 * 
 *   The Screen.availWidth property returns the amount of horizontal
 *   (in pixels) available to the window.
 * 
 *   `var width = window.screen.availWidth`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth`
 */
web.Screen.avail_width = (function web$Screen$avail_width(this$){
return this$.availWidth();
});
/**
 * Property.
 * 
 *   The Screen.availWidth property returns the amount of horizontal
 *   (in pixels) available to the window.
 * 
 *   `var width = window.screen.availWidth`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth`
 */
web.Screen.set_avail_width_BANG_ = (function web$Screen$set_avail_width_BANG_(this$,val){
return (this$["availWidth"] = val);
});
/**
 * Property.
 * 
 *   The Screen.colorDepth read-only property returns the color depth
 *   the screen. Per the CSSOM, some implementations return 24 for
 *   reasons. See the browser compatibility section for those that
 * 
 *   `bitDepth = window.screen.colorDepth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth`
 */
web.Screen.color_depth = (function web$Screen$color_depth(this$){
return this$.colorDepth();
});
/**
 * Property.
 * 
 *   The Screen.colorDepth read-only property returns the color depth
 *   the screen. Per the CSSOM, some implementations return 24 for
 *   reasons. See the browser compatibility section for those that
 * 
 *   `bitDepth = window.screen.colorDepth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth`
 */
web.Screen.set_color_depth_BANG_ = (function web$Screen$set_color_depth_BANG_(this$,val){
return (this$["colorDepth"] = val);
});
/**
 * Property.
 * 
 *   The Screen.height read-only property returns the height of the
 *   in pixels.
 * 
 *   `var height = window.screen.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/height`
 */
web.Screen.height = (function web$Screen$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The Screen.height read-only property returns the height of the
 *   in pixels.
 * 
 *   `var height = window.screen.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/height`
 */
web.Screen.set_height_BANG_ = (function web$Screen$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   Returns the distance in pixels from the left side of the main
 *   to the left side of the current screen.
 * 
 *   `var left = window.screen.left;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/left`
 */
web.Screen.left = (function web$Screen$left(this$){
return this$.left();
});
/**
 * Property.
 * 
 *   Returns the distance in pixels from the left side of the main
 *   to the left side of the current screen.
 * 
 *   `var left = window.screen.left;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/left`
 */
web.Screen.set_left_BANG_ = (function web$Screen$set_left_BANG_(this$,val){
return (this$["left"] = val);
});
/**
 * Property.
 * 
 *   Indicates how bright the screen's backlight is, on a scale from
 *   (very dim) to 1 (full brightness); this value is a double-precision
 * 
 *   `let screenBrightness = window.screen.mozBrightness;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozBrightness`
 */
web.Screen.moz_brightness = (function web$Screen$moz_brightness(this$){
return this$.mozBrightness();
});
/**
 * Property.
 * 
 *   Indicates how bright the screen's backlight is, on a scale from
 *   (very dim) to 1 (full brightness); this value is a double-precision
 * 
 *   `let screenBrightness = window.screen.mozBrightness;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozBrightness`
 */
web.Screen.set_moz_brightness_BANG_ = (function web$Screen$set_moz_brightness_BANG_(this$,val){
return (this$["mozBrightness"] = val);
});
/**
 * Property.
 * 
 *   This Boolean attribute controls the device's screen. Setting
 *   to false will turn off the screen.
 * 
 *   `let screenEnabled = window.screen.mozEnabled`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozEnabled`
 */
web.Screen.moz_enabled = (function web$Screen$moz_enabled(this$){
return this$.mozEnabled();
});
/**
 * Property.
 * 
 *   This Boolean attribute controls the device's screen. Setting
 *   to false will turn off the screen.
 * 
 *   `let screenEnabled = window.screen.mozEnabled`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozEnabled`
 */
web.Screen.set_moz_enabled_BANG_ = (function web$Screen$set_moz_enabled_BANG_(this$,val){
return (this$["mozEnabled"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the orientationchange events sent to the
 *   object. The `web.ScreenOrientation.onchange` handler should be
 *   instead.
 * 
 *   `screen.onorientationchange = funcRef;
 * 
 *   Where funcRef is a reference to a function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/onorientationchange`
 */
web.Screen.onorientationchange = (function web$Screen$onorientationchange(this$){
return this$.onorientationchange();
});
/**
 * Property.
 * 
 *   An event handler for the orientationchange events sent to the
 *   object. The `web.ScreenOrientation.onchange` handler should be
 *   instead.
 * 
 *   `screen.onorientationchange = funcRef;
 * 
 *   Where funcRef is a reference to a function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/onorientationchange`
 */
web.Screen.set_onorientationchange_BANG_ = (function web$Screen$set_onorientationchange_BANG_(this$,val){
return (this$["onorientationchange"] = val);
});
/**
 * Property.
 * 
 *   The orientation read-only property of the `web.Screen` interface
 *   the current orientation of the screen.
 * 
 *   `var orientation = window.screen.orientation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation`
 */
web.Screen.orientation = (function web$Screen$orientation(this$){
return this$.orientation();
});
/**
 * Property.
 * 
 *   Returns the bit depth of the screen. Per the CSSOM, some implementations
 *   24 for compatibility reasons. See the browser compatibility section
 *   those that don't.
 * 
 *   `let depth = window.screen.pixelDepth`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/pixelDepth`
 */
web.Screen.pixel_depth = (function web$Screen$pixel_depth(this$){
return this$.pixelDepth();
});
/**
 * Property.
 * 
 *   Returns the bit depth of the screen. Per the CSSOM, some implementations
 *   24 for compatibility reasons. See the browser compatibility section
 *   those that don't.
 * 
 *   `let depth = window.screen.pixelDepth`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/pixelDepth`
 */
web.Screen.set_pixel_depth_BANG_ = (function web$Screen$set_pixel_depth_BANG_(this$,val){
return (this$["pixelDepth"] = val);
});
/**
 * Property.
 * 
 *   Returns the distance in pixels from the top side of the current
 * 
 *   `let top = window.screen.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/top`
 */
web.Screen.top = (function web$Screen$top(this$){
return this$.top();
});
/**
 * Property.
 * 
 *   Returns the distance in pixels from the top side of the current
 * 
 *   `let top = window.screen.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/top`
 */
web.Screen.set_top_BANG_ = (function web$Screen$set_top_BANG_(this$,val){
return (this$["top"] = val);
});
/**
 * Property.
 * 
 *   Returns the width of the screen.
 * 
 *   `lWidth = window.screen.width`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/width`
 */
web.Screen.width = (function web$Screen$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   Returns the width of the screen.
 * 
 *   `lWidth = window.screen.width`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/width`
 */
web.Screen.set_width_BANG_ = (function web$Screen$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=Screen.js.map?rel=1565798816667
