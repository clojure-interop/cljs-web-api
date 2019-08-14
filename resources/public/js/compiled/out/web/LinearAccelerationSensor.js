// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.LinearAccelerationSensor');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The LinearAccelerationSensor constructor creates a new `web.LinearAccelerationSensor` object which provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.
 * 
 *   options Optional
 *   Options are as follows:
 * 
 *   frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
 *   referenceFrame: Either 'device' or 'screen'. The default is 'device'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/LinearAccelerationSensor`
 */
web.LinearAccelerationSensor.constructor$ = LinearAccelerationSensor;
/**
 * Property.
 * 
 *   The x read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the linear acceleration
 *   the device along the device's x axis.
 * 
 *   `var xLinearAccelerationSensor = linearAccelerationSensor.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/x`
 */
web.LinearAccelerationSensor.x = (function web$LinearAccelerationSensor$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The x read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the linear acceleration
 *   the device along the device's x axis.
 * 
 *   `var xLinearAccelerationSensor = linearAccelerationSensor.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/x`
 */
web.LinearAccelerationSensor.set_x_BANG_ = (function web$LinearAccelerationSensor$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the acceleration
 *   the device along the device's y axis.
 * 
 *   `var yAcceleration = accelerometer.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/y`
 */
web.LinearAccelerationSensor.y = (function web$LinearAccelerationSensor$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the acceleration
 *   the device along the device's y axis.
 * 
 *   `var yAcceleration = accelerometer.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/y`
 */
web.LinearAccelerationSensor.set_y_BANG_ = (function web$LinearAccelerationSensor$set_y_BANG_(this$,val){
return (this$["y"] = val);
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the acceleration
 *   the device along the device's z axis.
 * 
 *   `var zAcceleration = accelerometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/z`
 */
web.LinearAccelerationSensor.z = (function web$LinearAccelerationSensor$z(this$){
return this$.z();
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.LinearAccelerationSensor`
 *   returns a double precision integer containing the acceleration
 *   the device along the device's z axis.
 * 
 *   `var zAcceleration = accelerometer.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/z`
 */
web.LinearAccelerationSensor.set_z_BANG_ = (function web$LinearAccelerationSensor$set_z_BANG_(this$,val){
return (this$["z"] = val);
});

//# sourceMappingURL=LinearAccelerationSensor.js.map?rel=1565798811519
