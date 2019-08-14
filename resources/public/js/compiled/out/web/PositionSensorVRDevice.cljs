(ns web.PositionSensorVRDevice
  "The PositionSensorVRDevice interface of the WebVR API represents
  hardware's position sensor. You can access information such as
  current position and orientation of the sensor in relation to
  head mounted display through the `web.PositionSensorVRDevice.getState()`"
  (:refer-clojure :exclude []))

(defn get-immediate-state
  "Method.

  The getImmediateState() method of the `vr.VRDevice` interface
  the current instantaneous position sensor state. This is intended
  only be used rarely, for certain special uses, for example sampling
  immediate position of a hand orientation sensor — or at least
  will be, in the future.

  `var myPositionstate = PositionSensorVRDevice.getImmediateState();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getImmediateState`"
  [this ]
  (-> this (.getImmediateState)))

(defn get-state
  "Method.

  The getState() method of the `web.PositionSensorVRDevice` interface
  the current state of the position sensor for the current frame
  within the current `web.window.requestAnimationFrame` callback)
  for the previous frame, contained with a `vr.VRPositionState`
  This is the method you'd normally want to use, vs. `web.PositionSensorVRDevice.getImmediateState`.

  `var myPositionState = PositionSensorVRDevice.getState();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/getState`"
  [this ]
  (-> this (.getState)))

(defn reset-sensor
  "Method.

  The resetSensor() method of the `vr.VRDevice` interface can be
  to reset the sensor if desired, returning the position and orientation
  to zero.

  `PositionSensorVRDevice.resetSensor();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionSensorVRDevice/resetSensor`"
  [this ]
  (-> this (.resetSensor)))

