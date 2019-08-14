// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Touch');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Touch() constructor creates a new `web.Touch` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/Touch`
 */
web.Touch.constructor$ = Touch;
/**
 * Property.
 * 
 *   The Touch.clientX read-only property returns the X coordinate
 *   the touch point relative to the viewport, not including any scroll
 * 
 *   `touchItem.clientX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientX`
 */
web.Touch.client_x = (function web$Touch$client_x(this$){
return this$.clientX();
});
/**
 * Property.
 * 
 *   The Touch.clientY read-only property returns the Y coordinate
 *   the touch point relative to the browser's viewport, not including
 *   scroll offset.
 * 
 *   `touchItem.clientY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientY`
 */
web.Touch.client_y = (function web$Touch$client_y(this$){
return this$.clientY();
});
/**
 * Property.
 * 
 *   The Touch.force read-only property returns the amount of pressure
 *   user is applying to the touch surface for a `web.Touch` point.
 * 
 *   `touchItem.force;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/force`
 */
web.Touch.force = (function web$Touch$force(this$){
return this$.force();
});
/**
 * Property.
 * 
 *   The Touch.identifier returns a value uniquely identifying this
 *   of contact with the touch surface. This value remains consistent
 *   every event involving this finger's (or stylus's) movement on
 *   surface until it is lifted off the surface.
 * 
 *   `touchItem.identifier;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier`
 */
web.Touch.identifier = (function web$Touch$identifier(this$){
return this$.identifier();
});
/**
 * Property.
 * 
 *   The Touch.pageX read-only property returns the X coordinate of
 *   touch point relative to the viewport, including any scroll offset.
 * 
 *   `touchItem.pageX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageX`
 */
web.Touch.page_x = (function web$Touch$page_x(this$){
return this$.pageX();
});
/**
 * Property.
 * 
 *   The Touch.pageY read-only property returns the Y coordinate of
 *   touch point relative to the viewport, including any scroll offset.
 * 
 *   `touchItem.pageY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageY`
 */
web.Touch.page_y = (function web$Touch$page_y(this$){
return this$.pageY();
});
/**
 * Property.
 * 
 *   Returns the X radius of the ellipse that most closely circumscribes
 *   area of contact with the touch surface. The value is in CSS pixels
 *   the same scale as `web.Touch.screenX`.
 * 
 *   `var xRadius = touchItem.radiusX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusX`
 */
web.Touch.radius_x = (function web$Touch$radius_x(this$){
return this$.radiusX();
});
/**
 * Property.
 * 
 *   Returns the X radius of the ellipse that most closely circumscribes
 *   area of contact with the touch surface. The value is in CSS pixels
 *   the same scale as `web.Touch.screenX`.
 * 
 *   `var xRadius = touchItem.radiusX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusX`
 */
web.Touch.set_radius_x_BANG_ = (function web$Touch$set_radius_x_BANG_(this$,val){
return (this$["radiusX"] = val);
});
/**
 * Property.
 * 
 *   Returns the Y radius of the ellipse that most closely circumscribes
 *   area of contact with the touch surface. The value is in CSS pixels
 *   the same scale as `web.Touch.screenX`.
 * 
 *   `var yRadius = touchItem.radiusY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusY`
 */
web.Touch.radius_y = (function web$Touch$radius_y(this$){
return this$.radiusY();
});
/**
 * Property.
 * 
 *   Returns the Y radius of the ellipse that most closely circumscribes
 *   area of contact with the touch surface. The value is in CSS pixels
 *   the same scale as `web.Touch.screenX`.
 * 
 *   `var yRadius = touchItem.radiusY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusY`
 */
web.Touch.set_radius_y_BANG_ = (function web$Touch$set_radius_y_BANG_(this$,val){
return (this$["radiusY"] = val);
});
/**
 * Property.
 * 
 *   Returns the rotation angle, in degrees, of the contact area ellipse
 *   by `web.Touch.radiusX` and `web.Touch.radiusY`. The value may
 *   between 0 and 90. Together, these three values describe an ellipse
 *   approximates the size and shape of the area of contact between
 *   user and the screen. This may be a relatively large ellipse representing
 *   contact between a fingertip and the screen or a small area representing
 *   tip of a stylus, for example.
 * 
 *   `var angle = touchItem.rotationAngle;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle`
 */
web.Touch.rotation_angle = (function web$Touch$rotation_angle(this$){
return this$.rotationAngle();
});
/**
 * Property.
 * 
 *   Returns the rotation angle, in degrees, of the contact area ellipse
 *   by `web.Touch.radiusX` and `web.Touch.radiusY`. The value may
 *   between 0 and 90. Together, these three values describe an ellipse
 *   approximates the size and shape of the area of contact between
 *   user and the screen. This may be a relatively large ellipse representing
 *   contact between a fingertip and the screen or a small area representing
 *   tip of a stylus, for example.
 * 
 *   `var angle = touchItem.rotationAngle;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle`
 */
web.Touch.set_rotation_angle_BANG_ = (function web$Touch$set_rotation_angle_BANG_(this$,val){
return (this$["rotationAngle"] = val);
});
/**
 * Property.
 * 
 *   Returns the X coordinate of the touch point relative to the screen,
 *   including any scroll offset.
 * 
 *   `var x = touchItem.screenX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenX`
 */
web.Touch.screen_x = (function web$Touch$screen_x(this$){
return this$.screenX();
});
/**
 * Property.
 * 
 *   Returns the X coordinate of the touch point relative to the screen,
 *   including any scroll offset.
 * 
 *   `var x = touchItem.screenX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenX`
 */
web.Touch.set_screen_x_BANG_ = (function web$Touch$set_screen_x_BANG_(this$,val){
return (this$["screenX"] = val);
});
/**
 * Property.
 * 
 *   Returns the Y coordinate of the touch point relative to the screen,
 *   including any scroll offset.
 * 
 *   `var y = touchItem.screenY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenY`
 */
web.Touch.screen_y = (function web$Touch$screen_y(this$){
return this$.screenY();
});
/**
 * Property.
 * 
 *   Returns the Y coordinate of the touch point relative to the screen,
 *   including any scroll offset.
 * 
 *   `var y = touchItem.screenY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenY`
 */
web.Touch.set_screen_y_BANG_ = (function web$Touch$set_screen_y_BANG_(this$,val){
return (this$["screenY"] = val);
});
/**
 * Property.
 * 
 *   Returns the `web.Element` (`web.EventTarget`) on which the touch
 *   started when it was first placed on the surface, even if the
 *   point has since moved outside the interactive area of that element
 *   even been removed from the document. Note that if the target
 *   is removed from the document, events will still be targeted at
 *   and hence won't necessarily bubble up to the window or document
 *   If there is any risk of an element being removed while it is
 *   touched, the best practice is to attach the touch listeners directly
 *   the target.
 * 
 *   `var el = touchPoint.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/target`
 */
web.Touch.target = (function web$Touch$target(this$){
return this$.target();
});
/**
 * Property.
 * 
 *   Returns the `web.Element` (`web.EventTarget`) on which the touch
 *   started when it was first placed on the surface, even if the
 *   point has since moved outside the interactive area of that element
 *   even been removed from the document. Note that if the target
 *   is removed from the document, events will still be targeted at
 *   and hence won't necessarily bubble up to the window or document
 *   If there is any risk of an element being removed while it is
 *   touched, the best practice is to attach the touch listeners directly
 *   the target.
 * 
 *   `var el = touchPoint.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/target`
 */
web.Touch.set_target_BANG_ = (function web$Touch$set_target_BANG_(this$,val){
return (this$["target"] = val);
});

//# sourceMappingURL=Touch.js.map?rel=1565798806286
