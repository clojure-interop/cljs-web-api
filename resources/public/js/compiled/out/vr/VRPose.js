// Compiled by ClojureScript 1.9.946 {}
goog.provide('vr.VRPose');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The angularAcceleration read-only property of the `vr.VRPose`
 *   returns an array representing the angular acceleration vector
 *   the `vr.VRDisplay` at the current `vr.VRPose.timestamp`, in meters
 *   second per second.
 * 
 *   `var myAngularAcceleration = VRPose.angularAcceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularAcceleration`
 */
vr.VRPose.angular_acceleration = (function vr$VRPose$angular_acceleration(this$){
return this$.angularAcceleration();
});
/**
 * Property.
 * 
 *   The angularAcceleration read-only property of the `vr.VRPose`
 *   returns an array representing the angular acceleration vector
 *   the `vr.VRDisplay` at the current `vr.VRPose.timestamp`, in meters
 *   second per second.
 * 
 *   `var myAngularAcceleration = VRPose.angularAcceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularAcceleration`
 */
vr.VRPose.set_angular_acceleration_BANG_ = (function vr$VRPose$set_angular_acceleration_BANG_(this$,val){
return (this$["angularAcceleration"] = val);
});
/**
 * Property.
 * 
 *   The angularVelocity read-only property of the `vr.VRPose` interface
 *   an array representing the angular velocity vector of the `vr.VRDisplay`
 *   the current `vr.VRPose.timestamp`, in radians per second.
 * 
 *   `var myAngularVelocity = VRPose.angularVelocity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularVelocity`
 */
vr.VRPose.angular_velocity = (function vr$VRPose$angular_velocity(this$){
return this$.angularVelocity();
});
/**
 * Property.
 * 
 *   The angularVelocity read-only property of the `vr.VRPose` interface
 *   an array representing the angular velocity vector of the `vr.VRDisplay`
 *   the current `vr.VRPose.timestamp`, in radians per second.
 * 
 *   `var myAngularVelocity = VRPose.angularVelocity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularVelocity`
 */
vr.VRPose.set_angular_velocity_BANG_ = (function vr$VRPose$set_angular_velocity_BANG_(this$,val){
return (this$["angularVelocity"] = val);
});
/**
 * Property.
 * 
 *   The hasOrientation read-only property of the `vr.VRPositionState`
 *   returns a boolean indicating whether the `vr.VRPositionState.orientation`
 *   is valid (i.e. if the hardware is currently registering a valid
 *   If it is false, the orientation property will return null.
 * 
 *   `var myHasOrientation = VRPositionState.hasOrientation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasOrientation`
 */
vr.VRPose.has_orientation = (function vr$VRPose$has_orientation(this$){
return this$.hasOrientation();
});
/**
 * Property.
 * 
 *   The hasOrientation read-only property of the `vr.VRPositionState`
 *   returns a boolean indicating whether the `vr.VRPositionState.orientation`
 *   is valid (i.e. if the hardware is currently registering a valid
 *   If it is false, the orientation property will return null.
 * 
 *   `var myHasOrientation = VRPositionState.hasOrientation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasOrientation`
 */
vr.VRPose.set_has_orientation_BANG_ = (function vr$VRPose$set_has_orientation_BANG_(this$,val){
return (this$["hasOrientation"] = val);
});
/**
 * Property.
 * 
 *   The hasPosition read-only property of the `vr.VRPositionState`
 *   returns a boolean indicating whether the `vr.VRPositionState.position`
 *   is valid (i.e. if the hardware is currently registering a valid
 *   If it is false, the position property will return null.
 * 
 *   `var myHasPosition = VRPositionState.hasPosition;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasPosition`
 */
vr.VRPose.has_position = (function vr$VRPose$has_position(this$){
return this$.hasPosition();
});
/**
 * Property.
 * 
 *   The hasPosition read-only property of the `vr.VRPositionState`
 *   returns a boolean indicating whether the `vr.VRPositionState.position`
 *   is valid (i.e. if the hardware is currently registering a valid
 *   If it is false, the position property will return null.
 * 
 *   `var myHasPosition = VRPositionState.hasPosition;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasPosition`
 */
vr.VRPose.set_has_position_BANG_ = (function vr$VRPose$set_has_position_BANG_(this$,val){
return (this$["hasPosition"] = val);
});
/**
 * Property.
 * 
 *   The linearAcceleration read-only property of the `vr.VRPose`
 *   returns an array representing the linear acceleration vector
 *   the `vr.VRDisplay` at the current `vr.VRPose.timestamp`, in meters
 *   second per second.
 * 
 *   `var myLinearAcceleration = VRPose.linearAcceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearAcceleration`
 */
vr.VRPose.linear_acceleration = (function vr$VRPose$linear_acceleration(this$){
return this$.linearAcceleration();
});
/**
 * Property.
 * 
 *   The linearAcceleration read-only property of the `vr.VRPose`
 *   returns an array representing the linear acceleration vector
 *   the `vr.VRDisplay` at the current `vr.VRPose.timestamp`, in meters
 *   second per second.
 * 
 *   `var myLinearAcceleration = VRPose.linearAcceleration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearAcceleration`
 */
vr.VRPose.set_linear_acceleration_BANG_ = (function vr$VRPose$set_linear_acceleration_BANG_(this$,val){
return (this$["linearAcceleration"] = val);
});
/**
 * Property.
 * 
 *   The linearVelocity read-only property of the `vr.VRPose` interface
 *   an array representing the linear velocity vector of the `vr.VRDisplay`
 *   the current `vr.VRPose.timestamp`, in meters per second.
 * 
 *   `var myLinearVelocity = VRPose.linearVelocity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearVelocity`
 */
vr.VRPose.linear_velocity = (function vr$VRPose$linear_velocity(this$){
return this$.linearVelocity();
});
/**
 * Property.
 * 
 *   The linearVelocity read-only property of the `vr.VRPose` interface
 *   an array representing the linear velocity vector of the `vr.VRDisplay`
 *   the current `vr.VRPose.timestamp`, in meters per second.
 * 
 *   `var myLinearVelocity = VRPose.linearVelocity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearVelocity`
 */
vr.VRPose.set_linear_velocity_BANG_ = (function vr$VRPose$set_linear_velocity_BANG_(this$,val){
return (this$["linearVelocity"] = val);
});
/**
 * Property.
 * 
 *   The orientation read-only property of the `vr.VRPositionState`
 *   returns the orientation of the sensor at the current `vr.VRPose.timestamp`,
 *   a quarternion value.
 * 
 *   `var myOrientation = VRPose.orientation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/orientation`
 */
vr.VRPose.orientation = (function vr$VRPose$orientation(this$){
return this$.orientation();
});
/**
 * Property.
 * 
 *   The orientation read-only property of the `vr.VRPositionState`
 *   returns the orientation of the sensor at the current `vr.VRPose.timestamp`,
 *   a quarternion value.
 * 
 *   `var myOrientation = VRPose.orientation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/orientation`
 */
vr.VRPose.set_orientation_BANG_ = (function vr$VRPose$set_orientation_BANG_(this$,val){
return (this$["orientation"] = val);
});
/**
 * Property.
 * 
 *   The position read-only property of the `vr.VRPose` interface
 *   the position of the `vr.VRDisplay` at the current `vr.VRPose.timestamp`
 *   a 3D vector.
 * 
 *   `var myPosition = VRPose.position;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/position`
 */
vr.VRPose.position = (function vr$VRPose$position(this$){
return this$.position();
});
/**
 * Property.
 * 
 *   The position read-only property of the `vr.VRPose` interface
 *   the position of the `vr.VRDisplay` at the current `vr.VRPose.timestamp`
 *   a 3D vector.
 * 
 *   `var myPosition = VRPose.position;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/position`
 */
vr.VRPose.set_position_BANG_ = (function vr$VRPose$set_position_BANG_(this$,val){
return (this$["position"] = val);
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `vr.VRPose` interface
 *   the current time stamp of the system — a monotonically increasing
 *   representing the time since the current app was started.
 * 
 *   `var myTimeStamp = VRPose.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/timeStamp`
 */
vr.VRPose.timestamp = (function vr$VRPose$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `vr.VRPose` interface
 *   the current time stamp of the system — a monotonically increasing
 *   representing the time since the current app was started.
 * 
 *   `var myTimeStamp = VRPose.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/timeStamp`
 */
vr.VRPose.set_timestamp_BANG_ = (function vr$VRPose$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});

//# sourceMappingURL=VRPose.js.map?rel=1565798801328
