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
  (-> this (.-types)))

(defn set-types!
  "Property.

  An array of strings representing the types of report to be collected
  this observer. Available types include deprecation, intervention,
  crash."
  [this val]
  (aset this "types" val))

(defn buffered
  "Property.

  A boolean that defines whether the reports that were generated
  the observer was able to be created should be observable (true)
  not (false)."
  [this]
  (-> this (.-buffered)))

(defn set-buffered!
  "Property.

  A boolean that defines whether the reports that were generated
  the observer was able to be created should be observable (true)
  not (false)."
  [this val]
  (aset this "buffered" val))

