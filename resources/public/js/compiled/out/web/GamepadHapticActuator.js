// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.GamepadHapticActuator');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The pulse() method of the `web.GamepadHapticActuator` interface
 *   the hardware pulse at a certain intensity for a specified duration.
 * 
 *   `gamepadHapticActuatorInstance.pulse(value, duration).then(function(result) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/pulse`
 */
web.GamepadHapticActuator.pulse = (function web$GamepadHapticActuator$pulse(this$,value,duration){
return this$.pulse(value,duration);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.GamepadHapticActuator`
 *   returns an enum representing the type of the haptic hardware.
 * 
 *   `var myActuatorType = gamepadHapticActuatorInstance.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/type`
 */
web.GamepadHapticActuator.type = (function web$GamepadHapticActuator$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.GamepadHapticActuator`
 *   returns an enum representing the type of the haptic hardware.
 * 
 *   `var myActuatorType = gamepadHapticActuatorInstance.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/type`
 */
web.GamepadHapticActuator.set_type_BANG_ = (function web$GamepadHapticActuator$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=GamepadHapticActuator.js.map?rel=1565798812832
