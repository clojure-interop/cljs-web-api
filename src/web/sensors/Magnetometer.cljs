(ns web.sensors.Magnetometer
  "The Magnetometer interface of the Sensor APIs provides information
  the magnetic field as detected by the device’s primary magnetometer"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Read Only]

  The x read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's x axis.

  `var magnetometerx = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The y read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's y axis.

  `var magnetometery = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  The z read-only property of the `web.sensors.Magnetometer` interface
  a double-precision integer containing the magnetic field around
  device's z axis.

  `var magnetometerz = magnetometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/z`"
  [this]
  (-> this (.-z)))

