// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Position');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The Position.coords read-only property, a `web.Coordinates` object,
 *   a geographic attitude: it contains the location, that is longitude
 *   latitude on the Earth, the altitude, and the speed of the object
 *   regrouped inside the returned value. It also contains accuracy
 *   about these values.
 * 
 *   `coord = position.coords`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/coords`
 */
web.Position.coords = (function web$Position$coords(this$){
return this$.coords();
});
/**
 * Property.
 * 
 *   The Position.coords read-only property, a `web.Coordinates` object,
 *   a geographic attitude: it contains the location, that is longitude
 *   latitude on the Earth, the altitude, and the speed of the object
 *   regrouped inside the returned value. It also contains accuracy
 *   about these values.
 * 
 *   `coord = position.coords`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/coords`
 */
web.Position.set_coords_BANG_ = (function web$Position$set_coords_BANG_(this$,val){
return (this$["coords"] = val);
});
/**
 * Property.
 * 
 *   The Position.timestamp read-only property, a `dom.DOMTimeStamp`
 *   represents the date and the time of the creation of the `web.Position`
 *   it belongs to. The precision is to the millisecond.
 * 
 *   `var timestamp = position.timestamp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/timestamp`
 */
web.Position.timestamp = (function web$Position$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The Position.timestamp read-only property, a `dom.DOMTimeStamp`
 *   represents the date and the time of the creation of the `web.Position`
 *   it belongs to. The precision is to the millisecond.
 * 
 *   `var timestamp = position.timestamp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/timestamp`
 */
web.Position.set_timestamp_BANG_ = (function web$Position$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});

//# sourceMappingURL=Position.js.map?rel=1565798859353
