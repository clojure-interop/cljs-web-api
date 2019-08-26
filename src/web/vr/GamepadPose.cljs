(ns web.vr.GamepadPose
  "The GamepadPose interface of the Gamepad API represents the pose
  a WebVR controller at a given timestamp (which includes orientation,
  velocity, and acceleration information.)"
  (:refer-clojure :exclude []))

(defn has-orientation
  "Property.

  The hasOrientation read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return orientation information.

  `var hasItGotOrientation = gamepadPoseInstance.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasOrientation`"
  [this]
  (-> this (.hasOrientation)))

(defn set-has-orientation!
  "Property.

  The hasOrientation read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return orientation information.

  `var hasItGotOrientation = gamepadPoseInstance.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasOrientation`"
  [this val]
  (aset this "hasOrientation" val))

(defn angular-acceleration
  "Property.

  The angularAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadAngAcc = gamepadPoseInstance.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularAcceleration`"
  [this]
  (-> this (.angularAcceleration)))

(defn set-angular-acceleration!
  "Property.

  The angularAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadAngAcc = gamepadPoseInstance.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularAcceleration`"
  [this val]
  (aset this "angularAcceleration" val))

(defn angular-velocity
  "Property.

  The angularVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular velocity vector of
  `web.gamepad.Gamepad`, in radians per second.

  `var myGamepadAngVel = gamepadPoseInstance.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularVelocity`"
  [this]
  (-> this (.angularVelocity)))

(defn set-angular-velocity!
  "Property.

  The angularVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the angular velocity vector of
  `web.gamepad.Gamepad`, in radians per second.

  `var myGamepadAngVel = gamepadPoseInstance.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/angularVelocity`"
  [this val]
  (aset this "angularVelocity" val))

(defn has-position
  "Property.

  The hasPosition read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return position information.

  `var hasItGotPosition = gamepadPoseInstance.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasPosition`"
  [this]
  (-> this (.hasPosition)))

(defn set-has-position!
  "Property.

  The hasPosition read-only property of the `web.vr.GamepadPose`
  returns a `js.Boolean` stating whether the `web.gamepad.Gamepad`
  track and return position information.

  `var hasItGotPosition = gamepadPoseInstance.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/hasPosition`"
  [this val]
  (aset this "hasPosition" val))

(defn linear-acceleration
  "Property.

  The linearAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadLinAcc = gamepadPoseInstance.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearAcceleration`"
  [this]
  (-> this (.linearAcceleration)))

(defn set-linear-acceleration!
  "Property.

  The linearAcceleration read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear acceleration vector
  the `web.gamepad.Gamepad`, in meters per second per second.

  `var myGamepadLinAcc = gamepadPoseInstance.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearAcceleration`"
  [this val]
  (aset this "linearAcceleration" val))

(defn linear-velocity
  "Property.

  The linearVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear velocity vector of the
  in meters per second.

  `var myGamepadLinVel = gamepadPoseInstance.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearVelocity`"
  [this]
  (-> this (.linearVelocity)))

(defn set-linear-velocity!
  "Property.

  The linearVelocity read-only property of the `web.vr.GamepadPose`
  returns an array representing the linear velocity vector of the
  in meters per second.

  `var myGamepadLinVel = gamepadPoseInstance.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/linearVelocity`"
  [this val]
  (aset this "linearVelocity" val))

(defn orientation
  "Property.

  The orientation read-only property of the `web.vr.GamepadPose`
  returns the orientation of the `web.gamepad.Gamepad`, as a quarternion

  `var myGamepadOrientation = gamepadPoseInstance.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/orientation`"
  [this]
  (-> this (.orientation)))

(defn set-orientation!
  "Property.

  The orientation read-only property of the `web.vr.GamepadPose`
  returns the orientation of the `web.gamepad.Gamepad`, as a quarternion

  `var myGamepadOrientation = gamepadPoseInstance.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/orientation`"
  [this val]
  (aset this "orientation" val))

(defn position
  "Property.

  The position read-only property of the `web.vr.GamepadPose` interface
  the position of the `web.gamepad.Gamepad` as a 3D vector.

  `var myGamepadPosition = gamepadPoseInstance.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/position`"
  [this]
  (-> this (.position)))

(defn set-position!
  "Property.

  The position read-only property of the `web.vr.GamepadPose` interface
  the position of the `web.gamepad.Gamepad` as a 3D vector.

  `var myGamepadPosition = gamepadPoseInstance.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadPose/position`"
  [this val]
  (aset this "position" val))

