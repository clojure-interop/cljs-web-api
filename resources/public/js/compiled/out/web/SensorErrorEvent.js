// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SensorErrorEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SensorErrorEvent constructor creates a new `web.SensorErrorEvent` object which provides information about errors thrown by any of the interfaces based on `web.Sensor`.
 * 
 *   type
 *   Will always be 'SensorErrorEvent'.
 *   options Optional
 *   Currently only one option is supported:
 * 
 *   error: An instance of `dom.DOMException`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/SensorErrorEvent`
 */
web.SensorErrorEvent.constructor$ = SensorErrorEvent;
/**
 * Property.
 * 
 *   The error read-only property of the `web.SensorErrorEvent` interface
 *   the `dom.DOMException` object passed in the event's contructor.
 * 
 *   `var domException = sensorErrorEvent.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/error`
 */
web.SensorErrorEvent.error = (function web$SensorErrorEvent$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   The error read-only property of the `web.SensorErrorEvent` interface
 *   the `dom.DOMException` object passed in the event's contructor.
 * 
 *   `var domException = sensorErrorEvent.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/error`
 */
web.SensorErrorEvent.set_error_BANG_ = (function web$SensorErrorEvent$set_error_BANG_(this$,val){
return (this$["error"] = val);
});

//# sourceMappingURL=SensorErrorEvent.js.map?rel=1565798855735
