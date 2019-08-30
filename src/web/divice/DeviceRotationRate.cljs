(ns web.divice.DeviceRotationRate
  "A DeviceRotationRate object provides information about the rate
  which the device is rotating around all three axes."
  (:refer-clojure :exclude []))

(defn alpha
  "Property.

  [Read Only]

  This property indicates the rate of rotation around the Z axis
  in degrees per second -- in a `web.divice.DeviceRotationRate`

  `var alpha = deviceRotationRate.alpha;

  This property is read-only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceRotationRate/alpha`"
  [this]
  (-> this (.-alpha)))

(defn beta
  "Property.

  [Read Only]

  This property indicates the rate of rotation around the X axis
  in degrees per second -- in a `web.divice.DeviceRotationRate`

  `var beta = deviceRotationRate.beta;

  This property is read-only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceRotationRate/beta`"
  [this]
  (-> this (.-beta)))

(defn gamma
  "Property.

  [Read Only]

  This property indicates the rate of rotation around the Y axis
  in degrees per second -- in a `web.divice.DeviceRotationRate`

  `var gamma = deviceRotationRate.gamma;

  This property is read-only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceRotationRate/gamma`"
  [this]
  (-> this (.-gamma)))

