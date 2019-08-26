(ns web.gamepad.GamepadEvent
  "The GamepadEvent interface of the Gamepad API contains references
  gamepads connected to the system, which is what the gamepad events
  and `Window.gamepaddisconnected` are fired in response to."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The GamepadEvent_ constructor creates a new `web.gamepad.GamepadEvent` object.

  typeArg
  A `web.dom.DOMString` that must be one of gamepadconnected or gamepaddisconnected.
  options Optional
  Options are as follows:

  gamepad: An instance of `web.gamepad.Gamepad` describing the gamepad associated with the event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/GamepadEvent`"
  js/GamepadEvent)

(defn gamepad
  "Property.

  The GamepadEvent.gamepad property of the `web.gamepad.GamepadEvent`
  returns a `web.gamepad.Gamepad` object, providing access to the
  gamepad data for fired gamepadconnected and gamepaddisconnected

  `readonly    attribute Gamepad gamepad;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`"
  [this]
  (-> this (.-gamepad)))

(defn set-gamepad!
  "Property.

  The GamepadEvent.gamepad property of the `web.gamepad.GamepadEvent`
  returns a `web.gamepad.Gamepad` object, providing access to the
  gamepad data for fired gamepadconnected and gamepaddisconnected

  `readonly    attribute Gamepad gamepad;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`"
  [this val]
  (aset this "gamepad" val))

