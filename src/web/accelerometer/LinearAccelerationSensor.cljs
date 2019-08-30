(ns web.accelerometer.LinearAccelerationSensor
  "The LinearAccelerationSensor interface of the Sensor APIs provides
  each reading the acceleration applied to the device along all
  axes, but without the contribution of gravity."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Read Only]

  The x read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the linear acceleration
  the device along the device's x axis.

  `var xLinearAccelerationSensor = linearAccelerationSensor.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The y read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  The z read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/z`"
  [this]
  (-> this (.-z)))

