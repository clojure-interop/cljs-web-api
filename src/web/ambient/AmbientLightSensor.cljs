(ns web.ambient.AmbientLightSensor
  "The AmbientLightSensor interface of the the Sensor APIs returns
  current light level or illuminance of the ambient light around
  hosting device."
  (:refer-clojure :exclude []))

(defn illuminance
  "Property.

  The illuminance property of the `web.ambient.AmbientLightSensor`
  returns the current light level in lux of the ambient light level
  the hosting device.

  `var level = AmbientLightSensor.illuminance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`"
  [this]
  (-> this (.-illuminance)))

(defn set-illuminance!
  "Property.

  The illuminance property of the `web.ambient.AmbientLightSensor`
  returns the current light level in lux of the ambient light level
  the hosting device.

  `var level = AmbientLightSensor.illuminance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`"
  [this val]
  (aset this "illuminance" val))

