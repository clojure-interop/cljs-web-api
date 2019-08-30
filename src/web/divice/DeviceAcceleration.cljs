(ns web.divice.DeviceAcceleration
  "A DeviceAcceleration object provides information about the amount
  acceleration the device is experiencing along all three axes."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Read Only]

  This read-only property indicates the amount of acceleration
  occurred along the X axis in a `web.divice.DeviceAcceleration`

  `var xAccel = deviceAcceleration.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  This read-only property indicates the amount of acceleration
  occurred along the Y axis in a `web.divice.DeviceAcceleration`

  `var yAccel = deviceAcceleration.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  This read-only property indicates the amount of acceleration
  occurred along the Z axis in a `web.divice.DeviceAcceleration`

  `var zAccel = deviceAcceleration.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/z`"
  [this]
  (-> this (.-z)))

