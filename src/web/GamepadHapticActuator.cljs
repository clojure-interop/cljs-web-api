(ns web.GamepadHapticActuator
  "The GamepadHapticActuator interface of the Gamepad API represents
  in the controller designed to provide haptic feedback to the
  (if available), most commonly vibration hardware."
  (:refer-clojure :exclude [type]))

(defn pulse
  "Method.

  The pulse() method of the `web.GamepadHapticActuator` interface
  the hardware pulse at a certain intensity for a specified duration.

  `gamepadHapticActuatorInstance.pulse(value, duration).then(function(result) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/pulse`"
  [this value duration]
  (-> this (.pulse value duration)))

(defn type
  "Property.

  The type read-only property of the `web.GamepadHapticActuator`
  returns an enum representing the type of the haptic hardware.

  `var myActuatorType = gamepadHapticActuatorInstance.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.GamepadHapticActuator`
  returns an enum representing the type of the haptic hardware.

  `var myActuatorType = gamepadHapticActuatorInstance.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/type`"
  [this val]
  (aset this "type" val))

