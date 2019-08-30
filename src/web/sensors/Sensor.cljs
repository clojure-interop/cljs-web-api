(ns web.sensors.Sensor
  "The Sensor interface of the the Sensor APIs is the base class
  all the other sensor interfaces. This interface cannot be used
  Instead it provides properties, event handlers, and methods accessed
  interfaces that inherit from it."
  (:refer-clojure :exclude []))

(defn start
  "Method.

  The start method activates one of the sensors based on Sensor.

  `Sensor.start()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/start`"
  [this ]
  (-> this (.start)))

(defn stop
  "Method.

  The stop method of the `web.sensors.Sensor` interface deactivates
  current sensor.

  `Sensor.stop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/stop`"
  [this ]
  (-> this (.stop)))

(defn activated
  "Property.

  [Read Only]

  The activated read-only property of the `web.sensors.Sensor`
  returns a `js.Boolean` indicating whether the sensor is active.

  `var boolean = sensorInstance.activated

  Because `web.sensors.Sensor` is a base class, activated may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/activated`"
  [this]
  (-> this (.-activated)))

(defn has-reading
  "Property.

  [Read Only]

  The hasReading read-only property of the `web.sensors.Sensor`
  returns a `js.Boolean` indicating whether the sensor has a reading.

  `var boolean = sensorInstance.hasReading

  Because `web.sensors.Sensor` is a base class, hasReading may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/hasReading`"
  [this]
  (-> this (.-hasReading)))

(defn timestamp
  "Property.

  [Read Only]

  The timestamp read-only property of the `web.sensors.Sensor`
  returns the time stamp of the latest sensor reading.

  `var timestamp = sensorInstance.timestamp

  Because `web.sensors.Sensor` is a base class, timestamp may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/timestamp`"
  [this]
  (-> this (.-timestamp)))

(defn onerror
  "Property.

  The onerror `EventHandler` is called when an error occurs on
  of the child interfaces of the `web.sensors.Sensor` interface.

  `sensorInstance.onerror = function
  sensorInstance.addEventListener('error', function() { ... })

  Because `web.sensors.Sensor` is a base class, onerror may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror `EventHandler` is called when an error occurs on
  of the child interfaces of the `web.sensors.Sensor` interface.

  `sensorInstance.onerror = function
  sensorInstance.addEventListener('error', function() { ... })

  Because `web.sensors.Sensor` is a base class, onerror may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onreading
  "Property.

  The onreading `EventHandler` is called when a reading is taken
  one of the child interfaces of the `web.sensors.Sensor` interface.

  `sensorInstance.onreading = function
  sensorInstance.addEventListener('reading', function() { ... })

  Because `web.sensors.Sensor` is a base class, onreading may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onreading`"
  [this]
  (-> this (.-onreading)))

(defn set-onreading!
  "Property.

  The onreading `EventHandler` is called when a reading is taken
  one of the child interfaces of the `web.sensors.Sensor` interface.

  `sensorInstance.onreading = function
  sensorInstance.addEventListener('reading', function() { ... })

  Because `web.sensors.Sensor` is a base class, onreading may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onreading`"
  [this val]
  (aset this "onreading" val))

(defn onactivate
  "Property.

  The onactivate `EventHandler` is called when one of the Sensor
  child interfaces becomes active.

  `sensorInstance.onactivate = function
  sensorInstance.addEventListener('activate', function() { ... })

  Because `web.sensors.Sensor` is a base class, onactivate may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onactivate`"
  [this]
  (-> this (.-onactivate)))

(defn set-onactivate!
  "Property.

  The onactivate `EventHandler` is called when one of the Sensor
  child interfaces becomes active.

  `sensorInstance.onactivate = function
  sensorInstance.addEventListener('activate', function() { ... })

  Because `web.sensors.Sensor` is a base class, onactivate may only be used on one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onactivate`"
  [this val]
  (aset this "onactivate" val))

