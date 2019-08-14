// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Magnetometer');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Magnetometer constructor creates a new `web.Magnetometer` object which returns information about the magnetic field as detected by a device’s primary magnetometer sensor.
 * 
 *   options Optional
 *   Options are as follows:
 * 
 *   frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends on device hardware and consequently may be less than requested.
 *   referenceFrame: Either 'device' or 'screen'. The default is 'device'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/Magnetometer`
 */
web.Magnetometer.constructor$ = Magnetometer;
/**
 * Property.
 * 
 *   The x read-only property of the `web.Magnetometer` interface
 *   a double precision integer containing the magnetic field around
 *   device's x axis.
 * 
 *   `var magnetometerx = magnetometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/x`
 */
web.Magnetometer.x = (function web$Magnetometer$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The x read-only property of the `web.Magnetometer` interface
 *   a double precision integer containing the magnetic field around
 *   device's x axis.
 * 
 *   `var magnetometerx = magnetometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/x`
 */
web.Magnetometer.set_x_BANG_ = (function web$Magnetometer$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Magnetometer` interface
 *   a double precision integer containing the magnetic field around
 *   device's y axis.
 * 
 *   `var magnetometery = magnetometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/y`
 */
web.Magnetometer.y = (function web$Magnetometer$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Magnetometer` interface
 *   a double precision integer containing the magnetic field around
 *   device's y axis.
 * 
 *   `var magnetometery = magnetometer.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/y`
 */
web.Magnetometer.set_y_BANG_ = (function web$Magnetometer$set_y_BANG_(this$,val){
return (this$["y"] = val);
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Magnetometer` interface
 *   a double-precision integer containing the magnetic field around
 *   device's z axis.
 * 
 *   `var magnetometerz = magnetometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/z`
 */
web.Magnetometer.z = (function web$Magnetometer$z(this$){
return this$.z();
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Magnetometer` interface
 *   a double-precision integer containing the magnetic field around
 *   device's z axis.
 * 
 *   `var magnetometerz = magnetometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/z`
 */
web.Magnetometer.set_z_BANG_ = (function web$Magnetometer$set_z_BANG_(this$,val){
return (this$["z"] = val);
});

//# sourceMappingURL=Magnetometer.js.map?rel=1565798815097
