(ns performance.PerformanceServerTiming
  "The PerformanceServerTiming interface surfaces server metrics
  are sent with the response in the `web.Server-Timing` HTTP header."
  (:refer-clojure :exclude [name]))

(defn to-json
  "Method.

  The toJSON() method of the `performance.PerformanceServerTiming`
  returns a `dom.DOMString` that is the JSON representation of
  `performance.PerformanceServerTiming` object.

  `var json = PerformanceServerTiming.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn description
  "Property.

  The description read-only property returns a `dom.DOMString`
  of the server-specified metric description, or an empty string.

  `serverTiming.description;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/description`"
  [this]
  (-> this (.description)))

(defn set-description!
  "Property.

  The description read-only property returns a `dom.DOMString`
  of the server-specified metric description, or an empty string.

  `serverTiming.description;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/description`"
  [this val]
  (aset this "description" val))

(defn duration
  "Property.

  The duration read-only property returns a double that contains
  server-specified metric duration, or value 0.0.

  `serverTiming.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/duration`"
  [this]
  (-> this (.duration)))

(defn set-duration!
  "Property.

  The duration read-only property returns a double that contains
  server-specified metric duration, or value 0.0.

  `serverTiming.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/duration`"
  [this val]
  (aset this "duration" val))

(defn name
  "Property.

  The name read-only property returns a `dom.DOMString` value of
  server-specified metric name.

  `serverTiming.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property returns a `dom.DOMString` value of
  server-specified metric name.

  `serverTiming.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming/name`"
  [this val]
  (aset this "name" val))

