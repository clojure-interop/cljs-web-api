(ns performance.PerformanceEntry
  "The PerformanceEntry object encapsulates a single performance
  that is part of the performance timeline. A performance entry
  be directly created by making a performance `web.mark` or `web.measure`
  example by calling the `web.mark()` method) at an explicit point
  an application. Performance entries are also created in indirect
  such as loading a resource (such as an image)."
  (:refer-clojure :exclude [name]))

(defn to-json
  "Method.

  The toJSON() method is a serializer; it returns a JSON representation
  the `web.performance entry` object.

  `json = perfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn duration
  "Property.

  The duration property returns a `web.timestamp` that is the duration
  the `web.performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this]
  (-> this (.duration)))

(defn set-duration!
  "Property.

  The duration property returns a `web.timestamp` that is the duration
  the `web.performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this val]
  (aset this "duration" val))

(defn entry-type
  "Property.

  The entryType property returns a `dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.entryType)))

(defn set-entry-type!
  "Property.

  The entryType property returns a `dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this val]
  (aset this "entryType" val))

(defn name
  "Property.

  The name property of the `performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name property of the `performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this val]
  (aset this "name" val))

(defn start-time
  "Property.

  The startTime property returns the first recorded `web.timestamp`
  the `web.performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this]
  (-> this (.startTime)))

(defn set-start-time!
  "Property.

  The startTime property returns the first recorded `web.timestamp`
  the `web.performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this val]
  (aset this "startTime" val))

