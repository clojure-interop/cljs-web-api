// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MouseEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MouseEvent() constructor creates a new `web.MouseEvent`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent`
 */
web.MouseEvent.constructor$ = MouseEvent;
/**
 * Method.
 * 
 *   The MouseEvent.getModifierState() method returns the current
 *   of the specified modifier key: true if the modifier is active
 *   the modifier key is pressed or locked), otherwise, false.
 * 
 *   `var active =​ event.getModifierState(keyArg);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/getModifierState`
 */
web.MouseEvent.get_modifier_state = (function web$MouseEvent$get_modifier_state(this$,key_arg){
return this$.getModifierState(key_arg);
});
/**
 * Method.
 * 
 *   The MouseEvent.initMouseEvent() method initializes the value
 *   a mouse event once it's been created (normally using the `web.Document.createEvent()`
 * 
 *   `event.initMouseEvent(type, canBubble, cancelable, view,
 *   detail, screenX, screenY, clientX, clientY,
 *   ctrlKey, altKey, shiftKey, metaKey,
 *   button, relatedTarget);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent`
 */
web.MouseEvent.init_mouse_event = (function web$MouseEvent$init_mouse_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44680 = arguments.length;
var i__42557__auto___44681 = (0);
while(true){
if((i__42557__auto___44681 < len__42556__auto___44680)){
args__42563__auto__.push((arguments[i__42557__auto___44681]));

var G__44682 = (i__42557__auto___44681 + (1));
i__42557__auto___44681 = G__44682;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.MouseEvent.init_mouse_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.MouseEvent.init_mouse_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.initMouseEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.MouseEvent.init_mouse_event.cljs$lang$maxFixedArity = (1);

web.MouseEvent.init_mouse_event.cljs$lang$applyTo = (function (seq44678){
var G__44679 = cljs.core.first.call(null,seq44678);
var seq44678__$1 = cljs.core.next.call(null,seq44678);
return web.MouseEvent.init_mouse_event.cljs$core$IFn$_invoke$arity$variadic(G__44679,seq44678__$1);
});

/**
 * Property.
 * 
 *   The MouseEvent.altKey read-only property is a `web.Boolean` that
 *   whether the alt key was pressed or not when a given mouse event
 * 
 *   `var altKeyPressed = instanceOfMouseEvent.altKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey`
 */
web.MouseEvent.alt_key = (function web$MouseEvent$alt_key(this$){
return this$.altKey();
});
/**
 * Property.
 * 
 *   The MouseEvent.button read-only property indicates which button
 *   pressed on the mouse to trigger the event.
 * 
 *   `var buttonPressed = instanceOfMouseEvent.button`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button`
 */
web.MouseEvent.button = (function web$MouseEvent$button(this$){
return this$.button();
});
/**
 * Property.
 * 
 *   The MouseEvent.buttons read-only property indicates which buttons
 *   pressed on the mouse (or other input device) when a mouse event
 *   triggered.
 * 
 *   `var buttonsPressed = instanceOfMouseEvent.buttons`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons`
 */
web.MouseEvent.buttons = (function web$MouseEvent$buttons(this$){
return this$.buttons();
});
/**
 * Property.
 * 
 *   The clientX read-only property of the `web.MouseEvent` interface
 *   the horizontal coordinate within the application's client area
 *   which the event occurred (as opposed to the coordinate within
 *   page).
 * 
 *   `var x = instanceOfMouseEvent.clientX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX`
 */
web.MouseEvent.client_x = (function web$MouseEvent$client_x(this$){
return this$.clientX();
});
/**
 * Property.
 * 
 *   The clientY read-only property of the `web.MouseEvent` interface
 *   the vertical coordinate within the application's client area
 *   which the event occurred (as opposed to the coordinate within
 *   page).
 * 
 *   `var y = instanceOfMouseEvent.clientY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY`
 */
web.MouseEvent.client_y = (function web$MouseEvent$client_y(this$){
return this$.clientY();
});
/**
 * Property.
 * 
 *   The MouseEvent.ctrlKey read-only property is a `web.Boolean`
 *   indicates whether the ctrl key was pressed or not when a given
 *   event occurs.
 * 
 *   `var ctrlKeyPressed = instanceOfMouseEvent.ctrlKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/ctrlKey`
 */
web.MouseEvent.ctrl_key = (function web$MouseEvent$ctrl_key(this$){
return this$.ctrlKey();
});
/**
 * Property.
 * 
 *   The MouseEvent.metaKey read-only property is a `web.Boolean`
 *   indicates whether the meta key was pressed or not when a given
 *   event occurs.
 * 
 *   `var metaKeyPressed = instanceOfMouseEvent.metaKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey`
 */
web.MouseEvent.meta_key = (function web$MouseEvent$meta_key(this$){
return this$.metaKey();
});
/**
 * Property.
 * 
 *   The movementX read-only property of the `web.MouseEvent` interface
 *   the difference in the X coordinate of the mouse pointer between
 *   given event and the previous mousemove event. In other words,
 *   value of the property is computed like this: currentEvent.movementX
 *   currentEvent.screenX - previousEvent.screenX.
 * 
 *   `var xShift = instanceOfMouseEvent.movementX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX`
 */
web.MouseEvent.movement_x = (function web$MouseEvent$movement_x(this$){
return this$.movementX();
});
/**
 * Property.
 * 
 *   The movementY read-only property of the `web.MouseEvent` interface
 *   the difference in the Y coordinate of the mouse pointer between
 *   given event and the previous mousemove event. In other words,
 *   value of the property is computed like this: currentEvent.movementY
 *   currentEvent.screenY - previousEvent.screenY.
 * 
 *   `var yShift = instanceOfMouseEvent.movementY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementY`
 */
web.MouseEvent.movement_y = (function web$MouseEvent$movement_y(this$){
return this$.movementY();
});
/**
 * Property.
 * 
 *   The MouseEvent.mozInputSource read-only property on `web.MouseEvent`
 *   information indicating the type of device that generated the
 *   This lets you, for example, determine whether a mouse event was
 *   by an actual mouse or by a touch event (which might affect the
 *   of accuracy with which you interpret the coordinates associated
 *   the event).
 * 
 *   `var source = instanceOfMouseEvent.mozInputSource;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/mozInputSource`
 */
web.MouseEvent.moz_input_source = (function web$MouseEvent$moz_input_source(this$){
return this$.mozInputSource();
});
/**
 * Property.
 * 
 *   The offsetX read-only property of the `web.MouseEvent` interface
 *   the offset in the X coordinate of the mouse pointer between that
 *   and the padding edge of the target node.
 * 
 *   `var xOffset = instanceOfMouseEvent.offsetX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX`
 */
web.MouseEvent.offset_x = (function web$MouseEvent$offset_x(this$){
return this$.offsetX();
});
/**
 * Property.
 * 
 *   The offsetY read-only property of the `web.MouseEvent` interface
 *   the offset in the Y coordinate of the mouse pointer between that
 *   and the padding edge of the target node.
 * 
 *   `var yOffset = instanceOfMouseEvent.offsetY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY`
 */
web.MouseEvent.offset_y = (function web$MouseEvent$offset_y(this$){
return this$.offsetY();
});
/**
 * Property.
 * 
 *   The pageX read-only property of the `web.MouseEvent` interface
 *   the X (horizontal) coordinate (in pixels) at which the mouse
 *   clicked, relative to the left edge of the entire document.
 * 
 *   `var pageX = MouseEvent.pageX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX`
 */
web.MouseEvent.page_x = (function web$MouseEvent$page_x(this$){
return this$.pageX();
});
/**
 * Property.
 * 
 *   The pageY read-only property of the `web.MouseEvent` interface
 *   the Y (vertical) coordinate in pixels of the event relative to
 *   whole document. This property takes into account any vertical
 *   of the page.
 * 
 *   `var pos = event.pageY;
 * 
 *   Originally, this property was defined as a long integer. The CSSOM View Module redefined it as a double float. See the Browser compatibility section for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY`
 */
web.MouseEvent.page_y = (function web$MouseEvent$page_y(this$){
return this$.pageY();
});
/**
 * Property.
 * 
 *   The MouseEvent.region read-only property returns the id of the
 *   hit region affected by the event. If no hit region is affected,
 *   is returned.
 * 
 *   `var hitRegion = instanceOfMouseEvent.region`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/region`
 */
web.MouseEvent.region = (function web$MouseEvent$region(this$){
return this$.region();
});
/**
 * Property.
 * 
 *   The MouseEvent.relatedTarget read-only property is the secondary
 *   for the mouse event, if there is one. That is:
 * 
 *   `var target = instanceOfMouseEvent.relatedTarget`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget`
 */
web.MouseEvent.related_target = (function web$MouseEvent$related_target(this$){
return this$.relatedTarget();
});
/**
 * Property.
 * 
 *   The screenX read-only property of the `web.MouseEvent` interface
 *   the horizontal coordinate (offset) of the mouse pointer in global
 *   coordinates.
 * 
 *   `var x = instanceOfMouseEvent.screenX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX`
 */
web.MouseEvent.screen_x = (function web$MouseEvent$screen_x(this$){
return this$.screenX();
});
/**
 * Property.
 * 
 *   The screenY read-only property of the `web.MouseEvent` interface
 *   the vertical coordinate (offset) of the mouse pointer in global
 *   coordinates.
 * 
 *   `var y = instanceOfMouseEvent.screenY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenY`
 */
web.MouseEvent.screen_y = (function web$MouseEvent$screen_y(this$){
return this$.screenY();
});
/**
 * Property.
 * 
 *   The MouseEvent.shiftKey read-only property is a `web.Boolean`
 *   indicates whether the shift key was pressed or not when a given
 *   event occurs.
 * 
 *   `var shiftKeyPressed = instanceOfMouseEvent.shiftKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey`
 */
web.MouseEvent.shift_key = (function web$MouseEvent$shift_key(this$){
return this$.shiftKey();
});
/**
 * Property.
 * 
 *   MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN is a proprietary,
 *   static numeric property whose value is the minimum force necessary
 *   a force click.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`
 */
web.MouseEvent.webkit_force_at_force_mouse_down = (function web$MouseEvent$webkit_force_at_force_mouse_down(this$){
return this$.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN();
});
/**
 * Property.
 * 
 *   MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN is a proprietary,
 *   static numeric property whose value is the minimum force necessary
 *   a force click.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`
 */
web.MouseEvent.set_webkit_force_at_force_mouse_down_BANG_ = (function web$MouseEvent$set_webkit_force_at_force_mouse_down_BANG_(this$,val){
return (this$["WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN"] = val);
});
/**
 * Property.
 * 
 *   MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN is a proprietary, WebKit-specific,
 *   numeric property whose value is the minimum force necessary for
 *   normal click.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN`
 */
web.MouseEvent.webkit_force_at_mouse_down = (function web$MouseEvent$webkit_force_at_mouse_down(this$){
return this$.WEBKIT_FORCE_AT_MOUSE_DOWN();
});
/**
 * Property.
 * 
 *   MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN is a proprietary, WebKit-specific,
 *   numeric property whose value is the minimum force necessary for
 *   normal click.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN`
 */
web.MouseEvent.set_webkit_force_at_mouse_down_BANG_ = (function web$MouseEvent$set_webkit_force_at_mouse_down_BANG_(this$,val){
return (this$["WEBKIT_FORCE_AT_MOUSE_DOWN"] = val);
});
/**
 * Property.
 * 
 *   MouseEvent.webkitForce is a proprietary, WebKit-specific numeric
 *   whose value represents the amount of pressure that is being applied
 *   the touchpad or touchscreen.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/webkitForce`
 */
web.MouseEvent.webkit_force = (function web$MouseEvent$webkit_force(this$){
return this$.webkitForce();
});
/**
 * Property.
 * 
 *   MouseEvent.webkitForce is a proprietary, WebKit-specific numeric
 *   whose value represents the amount of pressure that is being applied
 *   the touchpad or touchscreen.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/webkitForce`
 */
web.MouseEvent.set_webkit_force_BANG_ = (function web$MouseEvent$set_webkit_force_BANG_(this$,val){
return (this$["webkitForce"] = val);
});
/**
 * Property.
 * 
 *   The MouseEvent.which read-only property indicates which button
 *   pressed on the mouse to trigger the event. The standard alternatives
 *   this property are `web.MouseEvent.button` and `web.MouseEvent.buttons`.
 * 
 *   `var buttonPressed = instanceOfMouseEvent.which`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which`
 */
web.MouseEvent.which = (function web$MouseEvent$which(this$){
return this$.which();
});
/**
 * Property.
 * 
 *   The MouseEvent.x property is an alias for the `web.MouseEvent.clientX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/x`
 */
web.MouseEvent.x = (function web$MouseEvent$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The MouseEvent.x property is an alias for the `web.MouseEvent.clientX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/x`
 */
web.MouseEvent.set_x_BANG_ = (function web$MouseEvent$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The MouseEvent.y property is an alias for the `web.MouseEvent.clientY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/y`
 */
web.MouseEvent.y = (function web$MouseEvent$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The MouseEvent.y property is an alias for the `web.MouseEvent.clientY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/y`
 */
web.MouseEvent.set_y_BANG_ = (function web$MouseEvent$set_y_BANG_(this$,val){
return (this$["y"] = val);
});

//# sourceMappingURL=MouseEvent.js.map?rel=1565798815747
