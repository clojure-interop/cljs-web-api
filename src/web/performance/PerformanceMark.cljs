(ns web.performance.PerformanceMark
  "PerformanceMark is an abstract interface for `web.performance.PerformanceEntry`
  with an `entryType` of \\\"mark\\\". Entries of this type are created
  calling `performance.mark()` to add a named `web.dom.DOMHighResTimeStamp`
  mark) to the browser's performance timeline."
  (:refer-clojure :exclude [name]))

(defn entry-type
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.-entryType)))

(defn set-entry-type!
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this val]
  (aset this "entryType" val))

(defn name
  "Property.

  The name property of the `web.performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name property of the `web.performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this val]
  (aset this "name" val))

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

