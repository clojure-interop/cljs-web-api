(ns web.vr.PositionSensorVRDevice
  "The PositionSensorVRDevice interface of the WebVR API represents
  hardware's position sensor. You can access information such as
  current position and orientation of the sensor in relation to
  head mounted display through the `PositionSensorVRDevice.getState()`"
  (:refer-clojure :exclude []))

(defn get-state
  "Method.

  [Experimental]
  [Obsolute]

  The getState() method of the `web.vr.PositionSensorVRDevice`
  returns the current state of the position sensor for the current
  (e.g. within the current `window.requestAnimationFrame` callback)
  for the previous frame, contained with a `VRPositionState` object.
  is the method you'd normally want to use, vs. `PositionSensorVRDevice.getImmediateState`.

  `var myPositionState = PositionSensorVRDevice.getState();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getState`"
  [this ]
  (-> this (.getState)))

(defn get-immediate-state
  "Method.

  [Experimental]
  [Obsolute]

  The getImmediateState() method of the `VRDevice` interface returns
  current instantaneous position sensor state. This is intended
  only be used rarely, for certain special uses, for example sampling
  immediate position of a hand orientation sensor — or at least
  will be, in the future.

  `var myPositionstate = PositionSensorVRDevice.getImmediateState();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getImmediateState`"
  [this ]
  (-> this (.getImmediateState)))

(defn reset-sensor
  "Method.

  [Experimental]
  [Obsolute]

  The resetSensor() method of the `VRDevice` interface can be used
  reset the sensor if desired, returning the position and orientation
  to zero.

  `PositionSensorVRDevice.resetSensor();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/resetSensor`"
  [this ]
  (-> this (.resetSensor)))

(defn hardware-unit-id
  "Property.

  Returns the distinct hardware ID for the overall hardware unit
  this VRDevice is a part of. All devices that are part of the
  physical piece of hardware will have the same hardwareUnitId."
  [this]
  (-> this (.-hardwareUnitId)))

(defn set-hardware-unit-id!
  "Property.

  Returns the distinct hardware ID for the overall hardware unit
  this VRDevice is a part of. All devices that are part of the
  physical piece of hardware will have the same hardwareUnitId."
  [this val]
  (aset this "hardwareUnitId" val))

(defn device-id
  "Property.

  Returns the ID for this specific VRDevice. The ID shouldn’t change
  browser restarts, allowing configuration data to be saved based
  it."
  [this]
  (-> this (.-deviceId)))

(defn set-device-id!
  "Property.

  Returns the ID for this specific VRDevice. The ID shouldn’t change
  browser restarts, allowing configuration data to be saved based
  it."
  [this val]
  (aset this "deviceId" val))

(defn device-name
  "Property.

  A human-readable name to identify the VRDevice."
  [this]
  (-> this (.-deviceName)))

(defn set-device-name!
  "Property.

  A human-readable name to identify the VRDevice."
  [this val]
  (aset this "deviceName" val))

