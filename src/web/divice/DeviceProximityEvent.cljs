(ns web.divice.DeviceProximityEvent
  "The DeviceProximityEvent interface provides information about
  distance of a nearby physical object using the proximity sensor
  a device."
  (:refer-clojure :exclude [max min]))

(defn max
  "Property.

  The max property provides the maximum sensing distance the sensor
  able to report, in centimeters.

  `var value = instanceOfDeviceProximityEvent.max;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/max`"
  [this]
  (-> this (.max)))

(defn set-max!
  "Property.

  The max property provides the maximum sensing distance the sensor
  able to report, in centimeters.

  `var value = instanceOfDeviceProximityEvent.max;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/max`"
  [this val]
  (aset this "max" val))

(defn min
  "Property.

  The min property provides the minimum distance the sensor can
  in centimeters.

  `var value = instanceOfDeviceProximityEvent.min;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/min`"
  [this]
  (-> this (.min)))

(defn set-min!
  "Property.

  The min property provides the minimum distance the sensor can
  in centimeters.

  `var value = instanceOfDeviceProximityEvent.min;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/min`"
  [this val]
  (aset this "min" val))

(defn value
  "Property.

  The value property of `web.divice.DeviceProximityEvent` objects
  the current distance between the device and the detected object,
  centimeters.

  `var distance = instanceOfDeviceProximityEvent.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The value property of `web.divice.DeviceProximityEvent` objects
  the current distance between the device and the detected object,
  centimeters.

  `var distance = instanceOfDeviceProximityEvent.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent/value`"
  [this val]
  (aset this "value" val))

