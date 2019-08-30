(ns web.performance.PerformanceServerTiming
  "The PerformanceServerTiming interface surfaces server metrics
  are sent with the response in the `Server-Timing` HTTP header."
  (:refer-clojure :exclude [name]))

(defn to-json
  "Method.

  The toJSON() method of the `web.performance.PerformanceServerTiming`
  returns a `web.dom.DOMString` that is the JSON representation
  the `web.performance.PerformanceServerTiming` object.

  `var json = PerformanceServerTiming.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn description
  "Property.

  [Read Only]

  The description read-only property returns a `web.dom.DOMString`
  of the server-specified metric description, or an empty string.

  `serverTiming.description;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/description`"
  [this]
  (-> this (.-description)))

(defn duration
  "Property.

  [Read Only]

  The duration read-only property returns a double that contains
  server-specified metric duration, or value 0.0.

  `serverTiming.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/duration`"
  [this]
  (-> this (.-duration)))

(defn name
  "Property.

  [Read Only]

  The name read-only property returns a `web.dom.DOMString` value
  the server-specified metric name.

  `serverTiming.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/name`"
  [this]
  (-> this (.-name)))

