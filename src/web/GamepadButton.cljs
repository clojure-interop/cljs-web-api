(ns web.GamepadButton
  "The GamepadButton interface defines an individual button of a
  or other controller, allowing access to the current state of
  types of buttons available on the control device."
  (:refer-clojure :exclude []))

(defn pressed
  "Property.

  The GamepadButton.pressed property of the `web.GamepadButton`
  returns a boolean indicating whether the button is currently
  (true) or unpressed (false).

  `var isPressed = navigator.getGamepads()[0].pressed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/pressed`"
  [this]
  (-> this (.pressed)))

(defn set-pressed!
  "Property.

  The GamepadButton.pressed property of the `web.GamepadButton`
  returns a boolean indicating whether the button is currently
  (true) or unpressed (false).

  `var isPressed = navigator.getGamepads()[0].pressed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/pressed`"
  [this val]
  (aset this "pressed" val))

(defn value
  "Property.

  The GamepadButton.value property of the `web.GamepadButton` interface
  a double value used to represent the current state of analog
  on many modern gamepads, such as the triggers.

  `readonly    attribute double  value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The GamepadButton.value property of the `web.GamepadButton` interface
  a double value used to represent the current state of analog
  on many modern gamepads, such as the triggers.

  `readonly    attribute double  value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/value`"
  [this val]
  (aset this "value" val))

