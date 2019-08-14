// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PositionSensorVRDevice');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getImmediateState() method of the `vr.VRDevice` interface
 *   the current instantaneous position sensor state. This is intended
 *   only be used rarely, for certain special uses, for example sampling
 *   immediate position of a hand orientation sensor — or at least
 *   will be, in the future.
 * 
 *   `var myPositionstate = PositionSensorVRDevice.getImmediateState();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getImmediateState`
 */
web.PositionSensorVRDevice.get_immediate_state = (function web$PositionSensorVRDevice$get_immediate_state(this$){
return this$.getImmediateState();
});
/**
 * Method.
 * 
 *   The getState() method of the `web.PositionSensorVRDevice` interface
 *   the current state of the position sensor for the current frame
 *   within the current `web.window.requestAnimationFrame` callback)
 *   for the previous frame, contained with a `vr.VRPositionState`
 *   This is the method you'd normally want to use, vs. `web.PositionSensorVRDevice.getImmediateState`.
 * 
 *   `var myPositionState = PositionSensorVRDevice.getState();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getState`
 */
web.PositionSensorVRDevice.get_state = (function web$PositionSensorVRDevice$get_state(this$){
return this$.getState();
});
/**
 * Method.
 * 
 *   The resetSensor() method of the `vr.VRDevice` interface can be
 *   to reset the sensor if desired, returning the position and orientation
 *   to zero.
 * 
 *   `PositionSensorVRDevice.resetSensor();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/resetSensor`
 */
web.PositionSensorVRDevice.reset_sensor = (function web$PositionSensorVRDevice$reset_sensor(this$){
return this$.resetSensor();
});

//# sourceMappingURL=PositionSensorVRDevice.js.map?rel=1565798841062
