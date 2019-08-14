(ns web.DeviceAcceleration
  "A DeviceAcceleration object provides information about the amount
  acceleration the device is experiencing along all three axes."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the X axis in a `web.DeviceAcceleration` object.

  `var xAccel = deviceAcceleration.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/x`"
  [this]
  (-> this (.x)))

(defn set-x!
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the X axis in a `web.DeviceAcceleration` object.

  `var xAccel = deviceAcceleration.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the Y axis in a `web.DeviceAcceleration` object.

  `var yAccel = deviceAcceleration.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/y`"
  [this]
  (-> this (.y)))

(defn set-y!
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the Y axis in a `web.DeviceAcceleration` object.

  `var yAccel = deviceAcceleration.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the Z axis in a `web.DeviceAcceleration` object.

  `var zAccel = deviceAcceleration.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/z`"
  [this]
  (-> this (.z)))

(defn set-z!
  "Property.

  This read-only property indicates the amount of acceleration
  occurred along the Z axis in a `web.DeviceAcceleration` object.

  `var zAccel = deviceAcceleration.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceAcceleration/z`"
  [this val]
  (aset this "z" val))

