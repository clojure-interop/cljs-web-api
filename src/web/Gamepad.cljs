(ns web.Gamepad
  "The Gamepad interface of the Gamepad API defines an individual
  or other controller, allowing access to information such as button
  axis positions, and id."
  (:refer-clojure :exclude []))

(defn axes
  "Property.

  The Gamepad.axes property of the `web.Gamepad` interface returns
  array representing the controls with axes present on the device
  analog thumb sticks).-

  `readonly    attribute double[]            axes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/axes`"
  [this]
  (-> this (.axes)))

(defn set-axes!
  "Property.

  The Gamepad.axes property of the `web.Gamepad` interface returns
  array representing the controls with axes present on the device
  analog thumb sticks).-

  `readonly    attribute double[]            axes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/axes`"
  [this val]
  (aset this "axes" val))

(defn buttons
  "Property.

  The Gamepad.buttons property of the `web.Gamepad` interface returns
  array of `web.gamepadButton` objects representing the buttons
  on the device.

  `readonly    attribute GamepadButton[]     buttons;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/buttons`"
  [this]
  (-> this (.buttons)))

(defn set-buttons!
  "Property.

  The Gamepad.buttons property of the `web.Gamepad` interface returns
  array of `web.gamepadButton` objects representing the buttons
  on the device.

  `readonly    attribute GamepadButton[]     buttons;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/buttons`"
  [this val]
  (aset this "buttons" val))

(defn connected
  "Property.

  The Gamepad.connected property of the `web.Gamepad` interface
  a boolean indicating whether the gamepad is still connected to
  system.

  `readonly    attribute boolean             connected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/connected`"
  [this]
  (-> this (.connected)))

(defn set-connected!
  "Property.

  The Gamepad.connected property of the `web.Gamepad` interface
  a boolean indicating whether the gamepad is still connected to
  system.

  `readonly    attribute boolean             connected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/connected`"
  [this val]
  (aset this "connected" val))

(defn display-id
  "Property.

  The displayId read-only property of the `web.Gamepad` interface
  the `vr.VRDisplay.displayId` of the associated `vr.VRDisplay`
  the VRDisplay that the gamepad is controlling the displayed scene

  `var myDisplayId = gamepadInstance.displayId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/displayId`"
  [this]
  (-> this (.displayId)))

(defn set-display-id!
  "Property.

  The displayId read-only property of the `web.Gamepad` interface
  the `vr.VRDisplay.displayId` of the associated `vr.VRDisplay`
  the VRDisplay that the gamepad is controlling the displayed scene

  `var myDisplayId = gamepadInstance.displayId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/displayId`"
  [this val]
  (aset this "displayId" val))

(defn hand
  "Property.

  The hand read-only property of the `web.Gamepad` interface returns
  enum defining what hand the controller is being held in, or is
  likely to be held in.

  `var myHand = gamepadInstance.hand;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hand`"
  [this]
  (-> this (.hand)))

(defn set-hand!
  "Property.

  The hand read-only property of the `web.Gamepad` interface returns
  enum defining what hand the controller is being held in, or is
  likely to be held in.

  `var myHand = gamepadInstance.hand;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hand`"
  [this val]
  (aset this "hand" val))

(defn haptic-actuators
  "Property.

  The hapticActuators read-only property of the `web.Gamepad` interface
  an array containing `web.GamepadHapticActuator` objects, each
  which represents haptic feedback hardware available on the controller.

  `var myHapticActuators = gamepadInstance.hapticActuators;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hapticActuators`"
  [this]
  (-> this (.hapticActuators)))

(defn set-haptic-actuators!
  "Property.

  The hapticActuators read-only property of the `web.Gamepad` interface
  an array containing `web.GamepadHapticActuator` objects, each
  which represents haptic feedback hardware available on the controller.

  `var myHapticActuators = gamepadInstance.hapticActuators;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hapticActuators`"
  [this val]
  (aset this "hapticActuators" val))

(defn id
  "Property.

  The Gamepad.id property of the `web.Gamepad` interface returns
  string containing some information about the controller.

  `readonly    attribute DOMString           id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The Gamepad.id property of the `web.Gamepad` interface returns
  string containing some information about the controller.

  `readonly    attribute DOMString           id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id`"
  [this val]
  (aset this "id" val))

(defn index
  "Property.

  The Gamepad.index property of the `web.Gamepad` interface returns
  integer that is auto-incremented to be unique for each device
  connected to the system.

  `readonly    attribute long                index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/index`"
  [this]
  (-> this (.index)))

(defn set-index!
  "Property.

  The Gamepad.index property of the `web.Gamepad` interface returns
  integer that is auto-incremented to be unique for each device
  connected to the system.

  `readonly    attribute long                index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/index`"
  [this val]
  (aset this "index" val))

(defn mapping
  "Property.

  The Gamepad.mapping property of the `web.Gamepad` interface returns
  string indicating whether the browser has remapped the controls
  the device to a known layout.

  `readonly    attribute DOMString           mapping;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping`"
  [this]
  (-> this (.mapping)))

(defn set-mapping!
  "Property.

  The Gamepad.mapping property of the `web.Gamepad` interface returns
  string indicating whether the browser has remapped the controls
  the device to a known layout.

  `readonly    attribute DOMString           mapping;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping`"
  [this val]
  (aset this "mapping" val))

(defn pose
  "Property.

  The pose read-only property of the `web.Gamepad` interface returns
  `web.GamepadPose` object representing the pose information associated
  a WebVR controller (e.g. its position and orientation in 3D space).

  `var myGamepadPose = gamepadInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/pose`"
  [this]
  (-> this (.pose)))

(defn set-pose!
  "Property.

  The pose read-only property of the `web.Gamepad` interface returns
  `web.GamepadPose` object representing the pose information associated
  a WebVR controller (e.g. its position and orientation in 3D space).

  `var myGamepadPose = gamepadInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/pose`"
  [this val]
  (aset this "pose" val))

(defn timestamp
  "Property.

  The Gamepad.timestamp property of the `web.Gamepad` interface
  a `dom.DOMHighResTimeStamp` representing the last time the data
  this gamepad was updated.

  `readonly    attribute DOMHighResTimeStamp timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/timestamp`"
  [this]
  (-> this (.timestamp)))

(defn set-timestamp!
  "Property.

  The Gamepad.timestamp property of the `web.Gamepad` interface
  a `dom.DOMHighResTimeStamp` representing the last time the data
  this gamepad was updated.

  `readonly    attribute DOMHighResTimeStamp timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/timestamp`"
  [this val]
  (aset this "timestamp" val))

