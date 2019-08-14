(ns performance.PerformanceObserver
  "The PerformanceObserver interface is used to observe performance
  events and be notified of new performance entries as they are
  in the browser's performance timeline."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PerformanceObserver() constructor creates a new `performance.PerformanceObserver` object with the given observer callback. The observer callback is invoked when performance entry events are recorded for the entry types that have been registered, via the `web.observe()` method.

  callback
  A PerformanceObserverCallback callback that will be invoked when observed performance events are recorded. When the callback is invoked, its first parameter is a list of performance observer entries and the second parameter is the `web.observer` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver`"
  js/PerformanceObserver)

(defn disconnect
  "Method.

  The disconnect() method of the `performance.PerformanceObserver`
  is used to stop the performance observer from receiving any performance
  events.

  `performanceObserver.disconnect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The observe() method of the `performance.PerformanceObserver`
  is used to specify the set of performance entry types to observe.

  `observer.observe(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/observe`"
  [this options]
  (-> this (.observe options)))

(defn take-records
  "Method.

  The takeRecords() method of the `performance.PerformanceObserver`
  returns the current list of `web.performance entries` stored
  the performance observer, emptying it out.

  `var PerformanceEntry[] = performanceObserver.takeRecords();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

