(ns web.GamepadEvent
  "The GamepadEvent interface of the Gamepad API contains references
  gamepads connected to the system, which is what the gamepad events
  and `web.Window.gamepaddisconnected` are fired in response to."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The GamepadEvent_ constructor creates a new `web.GamepadEvent` object.

  typeArg
  A `dom.DOMString` that must be one of gamepadconnected or gamepaddisconnected.
  options Optional
  Options are as follows:

  gamepad: An instance of `web.Gamepad` describing the gamepad associated with the event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/GamepadEvent`"
  js/GamepadEvent)

(defn gamepad
  "Property.

  The GamepadEvent.gamepad property of the `web.GamepadEvent` interface
  a `web.Gamepad` object, providing access to the associated gamepad
  for fired gamepadconnected and gamepaddisconnected events.

  `readonly    attribute Gamepad gamepad;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`"
  [this]
  (-> this (.gamepad)))

(defn set-gamepad!
  "Property.

  The GamepadEvent.gamepad property of the `web.GamepadEvent` interface
  a `web.Gamepad` object, providing access to the associated gamepad
  for fired gamepadconnected and gamepaddisconnected events.

  `readonly    attribute Gamepad gamepad;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`"
  [this val]
  (aset this "gamepad" val))

