(ns web.sensors.SensorErrorEvent
  "The SensorErrorEvent interface of the Sensor APIs provides information
  errors thrown by a `web.sensors.Sensor` or related interface."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  [Read Only]

  The error read-only property of the `web.sensors.SensorErrorEvent`
  returns the `web.dom.DOMException` object passed in the event's

  `var domException = sensorErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/error`"
  [this]
  (-> this (.-error)))

