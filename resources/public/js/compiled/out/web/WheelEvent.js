// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WheelEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WheelEvent() constructor returns a newly created `web.WheelEvent` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/WheelEvent`
 */
web.WheelEvent.constructor$ = WheelEvent;
/**
 * Property.
 * 
 *   The WheelEvent.deltaMode read-only property returns an unsigned
 *   representing the unit of the delta values scroll amount. Permitted
 *   are:
 * 
 *   `var unit = event.deltaMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode`
 */
web.WheelEvent.delta_mode = (function web$WheelEvent$delta_mode(this$){
return this$.deltaMode();
});
/**
 * Property.
 * 
 *   The WheelEvent.deltaX read-only property is a double representing
 *   horizontal scroll amount in the `web.WheelEvent.deltaMode` unit.
 * 
 *   `var dX = event.deltaX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaX`
 */
web.WheelEvent.delta_x = (function web$WheelEvent$delta_x(this$){
return this$.deltaX();
});
/**
 * Property.
 * 
 *   The WheelEvent.deltaY read-only property is a double representing
 *   vertical scroll amount in the `web.WheelEvent.deltaMode` unit.
 * 
 *   `var dY = event.deltaY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaY`
 */
web.WheelEvent.delta_y = (function web$WheelEvent$delta_y(this$){
return this$.deltaY();
});
/**
 * Property.
 * 
 *   The WheelEvent.deltaZ read-only property is a double representing
 *   scroll amount along the z-axis, in the `web.WheelEvent.deltaMode`
 * 
 *   `var dZ = event.deltaZ;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaZ`
 */
web.WheelEvent.delta_z = (function web$WheelEvent$delta_z(this$){
return this$.deltaZ();
});

//# sourceMappingURL=WheelEvent.js.map?rel=1565798857635
