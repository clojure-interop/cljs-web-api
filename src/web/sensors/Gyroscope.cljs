(ns web.sensors.Gyroscope
  "The Gyroscope interface of the Sensor APIs provides on each reading
  angular velocity of the device along all three axes."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Read Only]

  The x read-only property of the `web.sensors.Gyroscope` interface
  a double precision integer containing the angular velocity of
  device along the its x axis.

  `var x = gyroscope.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The y read-only property of the `web.sensors.Gyroscope` interface
  a double precision integer containing the angular velocity of
  device along the its y axis.

  `var y = gyroscope.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  The z read-only property of the `web.sensors.Gyroscope` interface
  a double precision integer containing the angular velocity of
  device along the its z axis.

  `var z = gyroscope.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/z`"
  [this]
  (-> this (.-z)))

