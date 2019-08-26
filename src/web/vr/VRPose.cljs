(ns web.vr.VRPose
  "The VRPose interface of the WebVR API represents the state of
  VR sensor at a given timestamp (which includes orientation, position,
  and acceleration information.)"
  (:refer-clojure :exclude []))

(defn position
  "Property.

  The position read-only property of the `web.vr.VRPose` interface
  the position of the `web.media.VRDisplay` at the current `VRPose.timestamp`
  a 3D vector.

  `var myPosition = VRPose.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/position`"
  [this]
  (-> this (.-position)))

(defn set-position!
  "Property.

  The position read-only property of the `web.vr.VRPose` interface
  the position of the `web.media.VRDisplay` at the current `VRPose.timestamp`
  a 3D vector.

  `var myPosition = VRPose.position;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/position`"
  [this val]
  (aset this "position" val))

(defn linear-velocity
  "Property.

  The linearVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the linear velocity vector of the
  at the current `VRPose.timestamp`, in meters per second.

  `var myLinearVelocity = VRPose.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearVelocity`"
  [this]
  (-> this (.-linearVelocity)))

(defn set-linear-velocity!
  "Property.

  The linearVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the linear velocity vector of the
  at the current `VRPose.timestamp`, in meters per second.

  `var myLinearVelocity = VRPose.linearVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearVelocity`"
  [this val]
  (aset this "linearVelocity" val))

(defn linear-acceleration
  "Property.

  The linearAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the linear acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myLinearAcceleration = VRPose.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearAcceleration`"
  [this]
  (-> this (.-linearAcceleration)))

(defn set-linear-acceleration!
  "Property.

  The linearAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the linear acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myLinearAcceleration = VRPose.linearAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/linearAcceleration`"
  [this val]
  (aset this "linearAcceleration" val))

(defn orientation
  "Property.

  The orientation read-only property of the `VRPositionState` interface
  the orientation of the sensor at the current `VRPose.timestamp`,
  a quarternion value.

  `var myOrientation = VRPose.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/orientation`"
  [this]
  (-> this (.-orientation)))

(defn set-orientation!
  "Property.

  The orientation read-only property of the `VRPositionState` interface
  the orientation of the sensor at the current `VRPose.timestamp`,
  a quarternion value.

  `var myOrientation = VRPose.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/orientation`"
  [this val]
  (aset this "orientation" val))

(defn angular-velocity
  "Property.

  The angularVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the angular velocity vector of
  `web.media.VRDisplay` at the current `VRPose.timestamp`, in radians
  second.

  `var myAngularVelocity = VRPose.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularVelocity`"
  [this]
  (-> this (.-angularVelocity)))

(defn set-angular-velocity!
  "Property.

  The angularVelocity read-only property of the `web.vr.VRPose`
  returns an array representing the angular velocity vector of
  `web.media.VRDisplay` at the current `VRPose.timestamp`, in radians
  second.

  `var myAngularVelocity = VRPose.angularVelocity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularVelocity`"
  [this val]
  (aset this "angularVelocity" val))

(defn angular-acceleration
  "Property.

  The angularAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the angular acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myAngularAcceleration = VRPose.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularAcceleration`"
  [this]
  (-> this (.-angularAcceleration)))

(defn set-angular-acceleration!
  "Property.

  The angularAcceleration read-only property of the `web.vr.VRPose`
  returns an array representing the angular acceleration vector
  the `web.media.VRDisplay` at the current `VRPose.timestamp`,
  meters per second per second.

  `var myAngularAcceleration = VRPose.angularAcceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/angularAcceleration`"
  [this val]
  (aset this "angularAcceleration" val))

(defn timestamp
  "Property.

  The timestamp read-only property of the `web.vr.VRPose` interface
  the current time stamp of the system — a monotonically increasing
  representing the time since the current app was started.

  `var myTimeStamp = VRPose.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/timeStamp`"
  [this]
  (-> this (.-timestamp)))

(defn set-timestamp!
  "Property.

  The timestamp read-only property of the `web.vr.VRPose` interface
  the current time stamp of the system — a monotonically increasing
  representing the time since the current app was started.

  `var myTimeStamp = VRPose.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/timeStamp`"
  [this val]
  (aset this "timestamp" val))

(defn has-orientation
  "Property.

  The hasOrientation read-only property of the `VRPositionState`
  returns a boolean indicating whether the `VRPositionState.orientation`
  is valid (i.e. if the hardware is currently registering a valid
  If it is false, the orientation property will return null.

  `var myHasOrientation = VRPositionState.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasOrientation`"
  [this]
  (-> this (.-hasOrientation)))

(defn set-has-orientation!
  "Property.

  The hasOrientation read-only property of the `VRPositionState`
  returns a boolean indicating whether the `VRPositionState.orientation`
  is valid (i.e. if the hardware is currently registering a valid
  If it is false, the orientation property will return null.

  `var myHasOrientation = VRPositionState.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasOrientation`"
  [this val]
  (aset this "hasOrientation" val))

(defn has-position
  "Property.

  The hasPosition read-only property of the `VRPositionState` interface
  a boolean indicating whether the `VRPositionState.position` property
  valid (i.e. if the hardware is currently registering a valid
  If it is false, the position property will return null.

  `var myHasPosition = VRPositionState.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasPosition`"
  [this]
  (-> this (.-hasPosition)))

(defn set-has-position!
  "Property.

  The hasPosition read-only property of the `VRPositionState` interface
  a boolean indicating whether the `VRPositionState.position` property
  valid (i.e. if the hardware is currently registering a valid
  If it is false, the position property will return null.

  `var myHasPosition = VRPositionState.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRPose/hasPosition`"
  [this val]
  (aset this "hasPosition" val))

