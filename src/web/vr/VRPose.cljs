(ns web.vr.VRPose
  "The VRPose interface of the WebVR API represents the state of
  VR sensor at a given timestamp (which includes orientation, position,
  and acceleration information.)"
  (:refer-clojure :exclude []))

(defn position
  "Property.

  [Read Only]
  [Experimental]

  The position read-only property of the `web.vr.VRPose` interface
  the position of the `web.media.VRDisplay` at the current `VRPose.timestamp`
  a 3D vector.

  `var myPosition = VRPose.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/position`"
  [this]
  (-> this (.-position)))

(defn linear-velocity
  "Property.

  [Read Only]
  [Experimental]

  The linearVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the linear velocity vector of the
  at the current `VRPose.timestamp`, in meters per second.

  `var myLinearVelocity = VRPose.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearVelocity`"
  [this]
  (-> this (.-linearVelocity)))

(defn linear-acceleration
  "Property.

  [Read Only]
  [Experimental]

  The linearAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the linear acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myLinearAcceleration = VRPose.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearAcceleration`"
  [this]
  (-> this (.-linearAcceleration)))

(defn orientation
  "Property.

  [Read Only]
  [Experimental]

  The orientation read-only property of the `VRPositionState` interface
  the orientation of the sensor at the current `VRPose.timestamp`,
  a quarternion value.

  `var myOrientation = VRPose.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/orientation`"
  [this]
  (-> this (.-orientation)))

(defn angular-velocity
  "Property.

  [Read Only]
  [Experimental]

  The angularVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the angular velocity vector of
  `web.media.VRDisplay` at the current `VRPose.timestamp`, in radians
  second.

  `var myAngularVelocity = VRPose.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularVelocity`"
  [this]
  (-> this (.-angularVelocity)))

(defn angular-acceleration
  "Property.

  [Read Only]
  [Experimental]

  The angularAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the angular acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myAngularAcceleration = VRPose.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularAcceleration`"
  [this]
  (-> this (.-angularAcceleration)))

(defn timestamp
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The timestamp read-only property of the `web.vr.VRPose` interface
  the current time stamp of the system — a monotonically increasing
  representing the time since the current app was started.

  `var myTimeStamp = VRPose.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/timeStamp`"
  [this]
  (-> this (.-timestamp)))

(defn has-orientation
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The hasOrientation read-only property of the `VRPositionState`
  returns a boolean indicating whether the `VRPositionState.orientation`
  is valid (i.e. if the hardware is currently registering a valid
  If it is false, the orientation property will return null.

  `var myHasOrientation = VRPositionState.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasOrientation`"
  [this]
  (-> this (.-hasOrientation)))

(defn has-position
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The hasPosition read-only property of the `VRPositionState` interface
  a boolean indicating whether the `VRPositionState.position` property
  valid (i.e. if the hardware is currently registering a valid
  If it is false, the position property will return null.

  `var myHasPosition = VRPositionState.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasPosition`"
  [this]
  (-> this (.-hasPosition)))

