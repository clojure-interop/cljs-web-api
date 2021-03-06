(ns web.performance.PerformanceEntry
  "The PerformanceEntry object encapsulates a single performance
  that is part of the performance timeline. A performance entry
  be directly created by making a performance `mark` or `measure`
  example by calling the `mark()` method) at an explicit point
  an application. Performance entries are also created in indirect
  such as loading a resource (such as an image)."
  (:refer-clojure :exclude [name]))

(defn to-json
  "Method.

  The toJSON() method is a serializer; it returns a JSON representation
  the `performance entry` object.

  `json = perfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn name
  "Property.

  [Read Only]

  The name property of the `web.performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this]
  (-> this (.-name)))

(defn entry-type
  "Property.

  [Read Only]

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.-entryType)))

(defn start-time
  "Property.

  [Read Only]

  The startTime property returns the first recorded `timestamp`
  the `performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this]
  (-> this (.-startTime)))

(defn duration
  "Property.

  [Read Only]

  The duration property returns a `timestamp` that is the duration
  the `performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this]
  (-> this (.-duration)))

