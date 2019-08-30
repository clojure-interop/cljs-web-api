(ns web.performance.PerformanceFrameTiming
  "PerformanceFrameTiming is an abstract interface that provides
  timing data about the browser's event loop."
  (:refer-clojure :exclude [name]))

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

(defn start-time
  "Property.

  The startTime property returns the first recorded `timestamp`
  the `performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this]
  (-> this (.-startTime)))

(defn set-start-time!
  "Property.

  The startTime property returns the first recorded `timestamp`
  the `performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this val]
  (aset this "startTime" val))

(defn duration
  "Property.

  The duration property returns a `timestamp` that is the duration
  the `performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this]
  (-> this (.-duration)))

(defn set-duration!
  "Property.

  The duration property returns a `timestamp` that is the duration
  the `performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this val]
  (aset this "duration" val))

