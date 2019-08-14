// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ScreenOrientation');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The lock() property of the `web.ScreenOrientation` interface
 *   the orientation of the containing document to its default orientation.
 * 
 *   `ScreenOrientation.lock(orientation)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock`
 */
web.ScreenOrientation.lock = (function web$ScreenOrientation$lock(this$,orientation){
return this$.lock(orientation);
});
/**
 * Method.
 * 
 *   The unlock() property of the `web.ScreenOrientation` interface
 *   the orientation of the containing document from its default orientation.
 * 
 *   `ScreenOrientation.unlock()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/unlock`
 */
web.ScreenOrientation.unlock = (function web$ScreenOrientation$unlock(this$){
return this$.unlock();
});
/**
 * Property.
 * 
 *   The angle read-only property of the `web.ScreenOrientation` interface
 *   the document's current orientation angle.
 * 
 *   `angle = ScreenOrientation.angle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`
 */
web.ScreenOrientation.angle = (function web$ScreenOrientation$angle(this$){
return this$.angle();
});
/**
 * Property.
 * 
 *   The angle read-only property of the `web.ScreenOrientation` interface
 *   the document's current orientation angle.
 * 
 *   `angle = ScreenOrientation.angle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`
 */
web.ScreenOrientation.set_angle_BANG_ = (function web$ScreenOrientation$set_angle_BANG_(this$,val){
return (this$["angle"] = val);
});
/**
 * Property.
 * 
 *   The onchange property of the `web.ScreenOrientation` is an event
 *   fired whenever is the `web.EventHandler` called when the screen
 *   orientation.
 * 
 *   `ScreenOrientation.addEventListener('change', function(e) { ... })
 *   ScreenOrientation.onchange = function(e) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`
 */
web.ScreenOrientation.onchange = (function web$ScreenOrientation$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The onchange property of the `web.ScreenOrientation` is an event
 *   fired whenever is the `web.EventHandler` called when the screen
 *   orientation.
 * 
 *   `ScreenOrientation.addEventListener('change', function(e) { ... })
 *   ScreenOrientation.onchange = function(e) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`
 */
web.ScreenOrientation.set_onchange_BANG_ = (function web$ScreenOrientation$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.ScreenOrientation` interface
 *   the document's current orientation type, one of \"portrait-primary\",
 *   \"landscape-primary\", or \"landscape-secondary\".
 * 
 *   `type = ScreenOrientation.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`
 */
web.ScreenOrientation.type = (function web$ScreenOrientation$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.ScreenOrientation` interface
 *   the document's current orientation type, one of \"portrait-primary\",
 *   \"landscape-primary\", or \"landscape-secondary\".
 * 
 *   `type = ScreenOrientation.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`
 */
web.ScreenOrientation.set_type_BANG_ = (function web$ScreenOrientation$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=ScreenOrientation.js.map?rel=1565798860594
