(ns web.performance.PerformanceMeasure
  "PerformanceMeasure is an abstract interface for `web.performance.PerformanceEntry`
  with an `entryType` of \\\"measure\\\". Entries of this type are
  by calling `performance.measure()` to add a named `web.dom.DOMHighResTimeStamp`
  measure) between two marks to the browser's performance timeline."
  (:refer-clojure :exclude []))

(defn entry-type
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.entryType)))

(defn set-entry-type!
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this val]
  (aset this "entryType" val))

