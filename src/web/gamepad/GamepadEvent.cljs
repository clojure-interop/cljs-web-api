(ns web.gamepad.GamepadEvent
  "The GamepadEvent interface of the Gamepad API contains references
  gamepads connected to the system, which is what the gamepad events
  and `Window.gamepaddisconnected` are fired in response to."
  (:refer-clojure :exclude []))

(defn gamepad
  "Property.

  [Read Only]

  The GamepadEvent.gamepad property of the `web.gamepad.GamepadEvent`
  returns a `web.gamepad.Gamepad` object, providing access to the
  gamepad data for fired gamepadconnected and gamepaddisconnected

  `readonly    attribute Gamepad gamepad;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`"
  [this]
  (-> this (.-gamepad)))

