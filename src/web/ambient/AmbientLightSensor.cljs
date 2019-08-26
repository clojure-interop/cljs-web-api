(ns web.ambient.AmbientLightSensor
  "The AmbientLightSensor interface of the the Sensor APIs returns
  current light level or illuminance of the ambient light around
  hosting device."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AmbinentLightSensor() constructor creates a new `web.ambient.AmbientLightSensor` object, which returns the current light level or illuminance of the ambient light around the hosting device.

  options Optional
  Currently only one option is supported:

  frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/AmbientLightSensor`"
  js/AmbientLightSensor)

(defn illuminance
  "Property.

  The illuminance property of the `web.ambient.AmbientLightSensor`
  returns the current light level in lux of the ambient light level
  the hosting device.

  `var level = AmbientLightSensor.illuminance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`"
  [this]
  (-> this (.illuminance)))

(defn set-illuminance!
  "Property.

  The illuminance property of the `web.ambient.AmbientLightSensor`
  returns the current light level in lux of the ambient light level
  the hosting device.

  `var level = AmbientLightSensor.illuminance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`"
  [this val]
  (aset this "illuminance" val))

