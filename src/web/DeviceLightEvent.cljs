(ns web.DeviceLightEvent
  "The DeviceLightEvent provides web developers with information
  photo sensors or similiar detectors about ambient light levels
  the device. For example this may be useful to adjust the screen's
  based on the current ambient light level in order to save energy
  provide better readability."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  The value property provides the current level of the ambient

  `var light = instanceOfDeviceLightEvent.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The value property provides the current level of the ambient

  `var light = instanceOfDeviceLightEvent.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent/value`"
  [this val]
  (aset this "value" val))

