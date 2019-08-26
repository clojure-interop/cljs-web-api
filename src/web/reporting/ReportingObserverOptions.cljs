(ns web.reporting.ReportingObserverOptions
  "The ReportingObserverOptions dictionary of the Reporting API
  options to be set in the constructor when creating a `web.reporting.ReportingObserver`."
  (:refer-clojure :exclude []))

(defn types
  "Property.

  An array of strings representing the types of report to be collected
  this observer. Available types include deprecation, intervention,
  crash."
  [this]
  (-> this (.types)))

(defn set-types!
  "Property.

  An array of strings representing the types of report to be collected
  this observer. Available types include deprecation, intervention,
  crash."
  [this val]
  (aset this "types" val))

