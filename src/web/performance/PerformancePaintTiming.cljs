(ns web.performance.PerformancePaintTiming
  "The PerformancePaintTiming interface of the Paint Timing provides
  information about \\\"paint\\\" (also called \\\"render\\\") operations
  web page construction. \\\"Paint\\\" refers to conversion of the
  tree to on-screen pixels."
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

