(ns web.deprecated.PerformanceNavigation
  "The legacy PerformanceNavigation interface represents information
  how the navigation to the current document was done."
  (:refer-clojure :exclude [type]))

(defn redirect-count
  "Property.

  The legacy PerformanceNavigation.redirectCount read-only property
  an unsigned short representing the number of REDIRECTs done before
  the page.

  `amount = performanceNavigation.redirectCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/redirectCount`"
  [this]
  (-> this (.redirectCount)))

(defn type
  "Property.

  The legacy PerformanceNavigation.type read-only property returns
  unsigned short containing a constant describing how the navigation
  this page was done. Possible values are:

  `type = performanceNavigation.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/type`"
  [this]
  (-> this (.type)))

