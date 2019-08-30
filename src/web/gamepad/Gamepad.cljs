(ns web.gamepad.Gamepad
  "The Gamepad interface of the Gamepad API defines an individual
  or other controller, allowing access to information such as button
  axis positions, and id."
  (:refer-clojure :exclude []))

(defn axes
  "Property.

  [Read Only]

  The Gamepad.axes property of the `web.gamepad.Gamepad` interface
  an array representing the controls with axes present on the device
  analog thumb sticks).-

  `readonly    attribute double[]            axes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/axes`"
  [this]
  (-> this (.-axes)))

(defn buttons
  "Property.

  [Read Only]

  The Gamepad.buttons property of the `web.gamepad.Gamepad` interface
  an array of `gamepadButton` objects representing the buttons
  on the device.

  `readonly    attribute GamepadButton[]     buttons;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/buttons`"
  [this]
  (-> this (.-buttons)))

(defn connected
  "Property.

  [Read Only]

  The Gamepad.connected property of the `web.gamepad.Gamepad` interface
  a boolean indicating whether the gamepad is still connected to
  system.

  `readonly    attribute boolean             connected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/connected`"
  [this]
  (-> this (.-connected)))

(defn display-id
  "Property.

  [Read Only]
  [Experimental]

  The displayId read-only property of the `web.gamepad.Gamepad`
  returns the `VRDisplay.displayId` of the associated `web.media.VRDisplay`
  the VRDisplay that the gamepad is controlling the displayed scene

  `var myDisplayId = gamepadInstance.displayId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/displayId`"
  [this]
  (-> this (.-displayId)))

(defn id
  "Property.

  [Read Only]

  The Gamepad.id property of the `web.gamepad.Gamepad` interface
  a string containing some information about the controller.

  `readonly    attribute DOMString           id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id`"
  [this]
  (-> this (.-id)))

(defn index
  "Property.

  [Read Only]

  The Gamepad.index property of the `web.gamepad.Gamepad` interface
  an integer that is auto-incremented to be unique for each device
  connected to the system.

  `readonly    attribute long                index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/index`"
  [this]
  (-> this (.-index)))

(defn mapping
  "Property.

  [Read Only]

  The Gamepad.mapping property of the `web.gamepad.Gamepad` interface
  a string indicating whether the browser has remapped the controls
  the device to a known layout.

  `readonly    attribute DOMString           mapping;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping`"
  [this]
  (-> this (.-mapping)))

(defn timestamp
  "Property.

  [Read Only]

  The Gamepad.timestamp property of the `web.gamepad.Gamepad` interface
  a `web.dom.DOMHighResTimeStamp` representing the last time the
  for this gamepad was updated.

  `readonly    attribute DOMHighResTimeStamp timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/timestamp`"
  [this]
  (-> this (.-timestamp)))

(defn hand
  "Property.

  [Read Only]
  [Experimental]

  The hand read-only property of the `web.gamepad.Gamepad` interface
  an enum defining what hand the controller is being held in, or
  most likely to be held in.

  `var myHand = gamepadInstance.hand;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hand`"
  [this]
  (-> this (.-hand)))

(defn haptic-actuators
  "Property.

  [Read Only]
  [Experimental]

  The hapticActuators read-only property of the `web.gamepad.Gamepad`
  returns an array containing `web.vr.GamepadHapticActuator` objects,
  of which represents haptic feedback hardware available on the

  `var myHapticActuators = gamepadInstance.hapticActuators;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hapticActuators`"
  [this]
  (-> this (.-hapticActuators)))

(defn pose
  "Property.

  [Read Only]
  [Experimental]

  The pose read-only property of the `web.gamepad.Gamepad` interface
  a `web.vr.GamepadPose` object representing the pose information
  with a WebVR controller (e.g. its position and orientation in
  space).

  `var myGamepadPose = gamepadInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/pose`"
  [this]
  (-> this (.-pose)))

