(ns web.sensors.SensorErrorEvent
  "The SensorErrorEvent interface of the Sensor APIs provides information
  errors thrown by a `web.sensors.Sensor` or related interface."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SensorErrorEvent constructor creates a new `web.sensors.SensorErrorEvent` object which provides information about errors thrown by any of the interfaces based on `web.sensors.Sensor`.

  type
  Will always be 'SensorErrorEvent'.
  options Optional
  Currently only one option is supported:

  error: An instance of `web.dom.DOMException`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/SensorErrorEvent`"
  js/SensorErrorEvent)

(defn error
  "Property.

  The error read-only property of the `web.sensors.SensorErrorEvent`
  returns the `web.dom.DOMException` object passed in the event's

  `var domException = sensorErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  The error read-only property of the `web.sensors.SensorErrorEvent`
  returns the `web.dom.DOMException` object passed in the event's

  `var domException = sensorErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SensorErrorEvent/error`"
  [this val]
  (aset this "error" val))

