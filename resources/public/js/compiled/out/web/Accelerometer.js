// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Accelerometer');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Accelerometer constructor creates a new `web.Accelerometer` object which returns the acceleration of the device along all three axes at the time it is read.
 * 
 *   options Optional
 *   Options are as follows:
 * 
 *   frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onerror` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
 *   referenceFrame: Either 'device' or 'screen'. The default is 'device'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/Accelerometer`
 */
web.Accelerometer.constructor$ = Accelerometer;
/**
 * Property.
 * 
 *   The x read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its x axis.
 * 
 *   `var xAcceleration = accelerometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/x`
 */
web.Accelerometer.x = (function web$Accelerometer$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The x read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its x axis.
 * 
 *   `var xAcceleration = accelerometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/x`
 */
web.Accelerometer.set_x_BANG_ = (function web$Accelerometer$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its y axis.
 * 
 *   `var yAcceleration = accelerometer.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/y`
 */
web.Accelerometer.y = (function web$Accelerometer$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its y axis.
 * 
 *   `var yAcceleration = accelerometer.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/y`
 */
web.Accelerometer.set_y_BANG_ = (function web$Accelerometer$set_y_BANG_(this$,val){
return (this$["y"] = val);
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its z axis.
 * 
 *   `var zAcceleration = accelerometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/z`
 */
web.Accelerometer.z = (function web$Accelerometer$z(this$){
return this$.z();
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Accelerometer` interface
 *   a double precision integer containing the acceleration of the
 *   along the its z axis.
 * 
 *   `var zAcceleration = accelerometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/z`
 */
web.Accelerometer.set_z_BANG_ = (function web$Accelerometer$set_z_BANG_(this$,val){
return (this$["z"] = val);
});

//# sourceMappingURL=Accelerometer.js.map?rel=1565798858930
