// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TouchEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The TouchEvent() constructor creates a new `web.TouchEvent`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent`
 */
web.TouchEvent.constructor$ = TouchEvent;
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the alt (Alternate)
 *   is enabled when the touch event is created. If the alt key is
 *   the attribute's value is true. Otherwise, it is false.
 * 
 *   `var altEnabled = touchEvent.altKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/altKey`
 */
web.TouchEvent.alt_key = (function web$TouchEvent$alt_key(this$){
return this$.altKey();
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the alt (Alternate)
 *   is enabled when the touch event is created. If the alt key is
 *   the attribute's value is true. Otherwise, it is false.
 * 
 *   `var altEnabled = touchEvent.altKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/altKey`
 */
web.TouchEvent.set_alt_key_BANG_ = (function web$TouchEvent$set_alt_key_BANG_(this$,val){
return (this$["altKey"] = val);
});
/**
 * Property.
 * 
 *   The changedTouches read-only property is a `web.TouchList` whose
 *   points (`web.Touch` objects) varies depending on the event type,
 *   follows:
 * 
 *   `var changes = touchEvent.changedTouches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/changedTouches`
 */
web.TouchEvent.changed_touches = (function web$TouchEvent$changed_touches(this$){
return this$.changedTouches();
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether the control (Control)
 *   is enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var ctrlEnabled = touchEvent.ctrlKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/ctrlKey`
 */
web.TouchEvent.ctrl_key = (function web$TouchEvent$ctrl_key(this$){
return this$.ctrlKey();
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether the control (Control)
 *   is enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var ctrlEnabled = touchEvent.ctrlKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/ctrlKey`
 */
web.TouchEvent.set_ctrl_key_BANG_ = (function web$TouchEvent$set_ctrl_key_BANG_(this$,val){
return (this$["ctrlKey"] = val);
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the Meta key
 *   enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var metaEnabled = touchEvent.metaKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/metaKey`
 */
web.TouchEvent.meta_key = (function web$TouchEvent$meta_key(this$){
return this$.metaKey();
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the Meta key
 *   enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var metaEnabled = touchEvent.metaKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/metaKey`
 */
web.TouchEvent.set_meta_key_BANG_ = (function web$TouchEvent$set_meta_key_BANG_(this$,val){
return (this$["metaKey"] = val);
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the shift key
 *   enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var shiftEnabled = touchEvent.shiftKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/shiftKey`
 */
web.TouchEvent.shift_key = (function web$TouchEvent$shift_key(this$){
return this$.shiftKey();
});
/**
 * Property.
 * 
 *   A `web.Boolean` value indicating whether or not the shift key
 *   enabled when the touch event is created. If this key is enabled,
 *   attribute's value is true. Otherwise, it is false.
 * 
 *   `var shiftEnabled = touchEvent.shiftKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/shiftKey`
 */
web.TouchEvent.set_shift_key_BANG_ = (function web$TouchEvent$set_shift_key_BANG_(this$,val){
return (this$["shiftKey"] = val);
});
/**
 * Property.
 * 
 *   The targetTouches read-only property is a `web.TouchList` listing
 *   the `web.Touch` objects for touch points that are still in contact
 *   the touch surface and whose touchstart event occurred inside
 *   same target `web.element` as the current target element.
 * 
 *   `var touches = touchEvent.targetTouches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/targetTouches`
 */
web.TouchEvent.target_touches = (function web$TouchEvent$target_touches(this$){
return this$.targetTouches();
});
/**
 * Property.
 * 
 *   touches is a read-only `web.TouchList` listing all the `web.Touch`
 *   for touch points that are currently in contact with the touch
 *   regardless of whether or not they've changed or what their target
 *   was at touchstart time.
 * 
 *   `var touches = touchEvent.touches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches`
 */
web.TouchEvent.touches = (function web$TouchEvent$touches(this$){
return this$.touches();
});

//# sourceMappingURL=TouchEvent.js.map?rel=1565798801835
