(ns web.permissions.PerformanceObserver
  "The PerformanceObserver interface is used to observe performance
  events and be notified of new performance entries as they are
  in the browser's performance timeline."
  (:refer-clojure :exclude []))

(defn observe
  "Method.

  The observe() method of the `web.permissions.PerformanceObserver`
  is used to specify the set of performance entry types to observe.

  `observer.observe(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/observe`"
  [this options]
  (-> this (.observe options)))

(defn disconnect
  "Method.

  The disconnect() method of the `web.permissions.PerformanceObserver`
  is used to stop the performance observer from receiving any performance
  events.

  `performanceObserver.disconnect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn take-records
  "Method.

  The takeRecords() method of the `web.permissions.PerformanceObserver`
  returns the current list of `performance entries` stored in the
  observer, emptying it out.

  `var PerformanceEntry[] = performanceObserver.takeRecords();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

