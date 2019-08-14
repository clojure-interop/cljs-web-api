// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DeviceMotionEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DeviceMotionEvent constructor creates a new `web.DeviceMotionEvent`.
 * 
 *   type
 *   Must be \"devicemotion\".
 *   optionsOptional
 *   Options are as follows:
 * 
 *   acceleration: An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in m/s2.
 *   accelerationIncludingGravity: An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in m/s2.
 *   rotationRate: An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is express in degrees per seconds.
 *   interval: A number representing the interval of time, in milliseconds, at which data is obtained from the device.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent`
 */
web.DeviceMotionEvent.constructor$ = DeviceMotionEvent;
/**
 * Property.
 * 
 *   The acceleration property returns the amount of acceleration
 *   by the device, in meters per second squared (m/s2).
 * 
 *   `var acceleration = deviceMotionEvent.acceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/acceleration`
 */
web.DeviceMotionEvent.acceleration = (function web$DeviceMotionEvent$acceleration(this$){
return this$.acceleration();
});
/**
 * Property.
 * 
 *   The acceleration property returns the amount of acceleration
 *   by the device, in meters per second squared (m/s2).
 * 
 *   `var acceleration = deviceMotionEvent.acceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/acceleration`
 */
web.DeviceMotionEvent.set_acceleration_BANG_ = (function web$DeviceMotionEvent$set_acceleration_BANG_(this$,val){
return (this$["acceleration"] = val);
});
/**
 * Property.
 * 
 *   The accelerationIncludingGravity property returns the amount
 *   acceleration recorded by the device, in meters per second squared
 *   Unlike `web.DeviceMotionEvent.acceleration` which compensates
 *   the influence of gravity, its value is the sum of the acceleration
 *   the device as induced by the user and the acceleration caused
 *   gravity.
 * 
 *   `var acceleration = deviceMotionEvent.accelerationIncludingGravity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity`
 */
web.DeviceMotionEvent.acceleration_including_gravity = (function web$DeviceMotionEvent$acceleration_including_gravity(this$){
return this$.accelerationIncludingGravity();
});
/**
 * Property.
 * 
 *   The accelerationIncludingGravity property returns the amount
 *   acceleration recorded by the device, in meters per second squared
 *   Unlike `web.DeviceMotionEvent.acceleration` which compensates
 *   the influence of gravity, its value is the sum of the acceleration
 *   the device as induced by the user and the acceleration caused
 *   gravity.
 * 
 *   `var acceleration = deviceMotionEvent.accelerationIncludingGravity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity`
 */
web.DeviceMotionEvent.set_acceleration_including_gravity_BANG_ = (function web$DeviceMotionEvent$set_acceleration_including_gravity_BANG_(this$,val){
return (this$["accelerationIncludingGravity"] = val);
});
/**
 * Property.
 * 
 *   Returns the interval, in milliseconds, at which data is obtained
 *   the underlaying hardware. You can use this to determine the granularity
 *   motion events.
 * 
 *   `var interval = deviceMotionEvent.interval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/interval`
 */
web.DeviceMotionEvent.interval = (function web$DeviceMotionEvent$interval(this$){
return this$.interval();
});
/**
 * Property.
 * 
 *   Returns the interval, in milliseconds, at which data is obtained
 *   the underlaying hardware. You can use this to determine the granularity
 *   motion events.
 * 
 *   `var interval = deviceMotionEvent.interval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/interval`
 */
web.DeviceMotionEvent.set_interval_BANG_ = (function web$DeviceMotionEvent$set_interval_BANG_(this$,val){
return (this$["interval"] = val);
});
/**
 * Property.
 * 
 *   Returns the rate at which the device is rotating around each
 *   its axes in degrees per second.
 * 
 *   `var rotationRate = deviceMotionEvent.rotationRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate`
 */
web.DeviceMotionEvent.rotation_rate = (function web$DeviceMotionEvent$rotation_rate(this$){
return this$.rotationRate();
});
/**
 * Property.
 * 
 *   Returns the rate at which the device is rotating around each
 *   its axes in degrees per second.
 * 
 *   `var rotationRate = deviceMotionEvent.rotationRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate`
 */
web.DeviceMotionEvent.set_rotation_rate_BANG_ = (function web$DeviceMotionEvent$set_rotation_rate_BANG_(this$,val){
return (this$["rotationRate"] = val);
});

//# sourceMappingURL=DeviceMotionEvent.js.map?rel=1565798807722
