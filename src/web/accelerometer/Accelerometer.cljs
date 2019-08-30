(ns web.accelerometer.Accelerometer
  "The Accelerometer interface of the Sensor APIs provides on each
  the acceleration applied to the device along all three axes."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Read Only]

  The x read-only property of the `web.accelerometer.Accelerometer`
  returns a double precision integer containing the acceleration
  the device along the its x axis.

  `var xAcceleration = accelerometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The y read-only property of the `web.accelerometer.Accelerometer`
  returns a double precision integer containing the acceleration
  the device along the its y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  The z read-only property of the `web.accelerometer.Accelerometer`
  returns a double precision integer containing the acceleration
  the device along the its z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/z`"
  [this]
  (-> this (.-z)))

