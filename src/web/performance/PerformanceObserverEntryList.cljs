(ns web.performance.PerformanceObserverEntryList
  "The PerformanceObserverEntryList interface is a list of peformance
  that were explicitly observed via the `observe()` method."
  (:refer-clojure :exclude []))

(defn get-entries
  "Method.

  The getEntries() method of the `web.performance.PerformanceObserverEntryList`
  returns a list of explicitly observed performance entry objects
  a given filter. The list's members are determined by the set
  entry types specified in the call to the `observe()` method.
  list is available in the observer's callback function (as the
  parameter in the callback).

  `General syntax:



  entries = list.getEntries();
  entries = list.getEntries(PerformanceEntryFilterOptions);

  Specific usage:



  entries = list.getEntries({name: \\\"entry_name\\\", entryType: \\\"mark\\\"});`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntries`"
  [this & args]
  (-> this .-getEntries (.apply this (clj->js args))))

(defn get-entries-by-type
  "Method.

  The getEntriesByType() method of the `web.performance.PerformanceObserverEntryList`
  a list of explicitly observed performance entry objects for a
  performance entry type. The list's members are determined by
  set of entry types specified in the call to the `observe()` method.
  list is available in the observer's callback function (as the
  parameter in the callback).

  `entries = list.getEntriesByType(type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntriesByType`"
  [this type]
  (-> this (.getEntriesByType type)))

(defn get-entries-by-name
  "Method.

  The getEntriesByName() method of the `web.performance.PerformanceObserverEntryList`
  returns a list of explicitly observed performance entry objects
  a given `name` and `entry type`. The list's members are determined
  the set of entry types specified in the call to the `observe()`
  The list is available in the observer's callback function (as
  first parameter in the callback).

  `entries = list.getEntriesByName(name, type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntriesByName`"
  [this name type]
  (-> this (.getEntriesByName name type)))

