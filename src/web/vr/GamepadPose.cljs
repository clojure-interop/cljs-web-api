(ns web.vr.GamepadPose
  "The GamepadPose interface of the Gamepad API represents the pose
  a WebVR controller at a given timestamp (which includes orientation,
  velocity, and acceleration information.)"
  (:refer-clojure :exclude []))

(defn has-orientation
  "Property.

  [Read Only]
  [Experimental]

  The hasOrientation read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return orientation information.

  `var hasItGotOrientation = gamepadPoseInstance.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasOrientation`"
  [this]
  (-> this (.-hasOrientation)))

(defn has-position
  "Property.

  [Read Only]
  [Experimental]

  The hasPosition read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return position information.

  `var hasItGotPosition = gamepadPoseInstance.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasPosition`"
  [this]
  (-> this (.-hasPosition)))

(defn position
  "Property.

  [Read Only]
  [Experimental]

  The position read-only property of the `web.vr.GamepadPose` interface
  the position of the `web.gamepad.Gamepad` as a 3D vector.

  `var myGamepadPosition = gamepadPoseInstance.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/position`"
  [this]
  (-> this (.-position)))

(defn linear-velocity
  "Property.

  [Read Only]
  [Experimental]

  The linearVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear velocity vector of the
  in meters per second.

  `var myGamepadLinVel = gamepadPoseInstance.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearVelocity`"
  [this]
  (-> this (.-linearVelocity)))

(defn linear-acceleration
  "Property.

  [Read Only]
  [Experimental]

  The linearAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadLinAcc = gamepadPoseInstance.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearAcceleration`"
  [this]
  (-> this (.-linearAcceleration)))

(defn orientation
  "Property.

  [Read Only]
  [Experimental]

  The orientation read-only property of the `web.vr.GamepadPose`
  returns the orientation of the `web.gamepad.Gamepad`, as a quarternion

  `var myGamepadOrientation = gamepadPoseInstance.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/orientation`"
  [this]
  (-> this (.-orientation)))

(defn angular-velocity
  "Property.

  [Read Only]
  [Experimental]

  The angularVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular velocity vector of
  `web.gamepad.Gamepad`, in radians per second.

  `var myGamepadAngVel = gamepadPoseInstance.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularVelocity`"
  [this]
  (-> this (.-angularVelocity)))

(defn angular-acceleration
  "Property.

  [Read Only]
  [Experimental]

  The angularAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadAngAcc = gamepadPoseInstance.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularAcceleration`"
  [this]
  (-> this (.-angularAcceleration)))

