(ns web.reporting.ReportingObserver
  "The ReportingObserver interface of the Reporting API allows you
  collect and access reports."
  (:refer-clojure :exclude []))

(defn disconnect
  "Method.

  [Experimental]

  The disconnect() method of the `web.reporting.ReportingObserver`
  stops a reporting observer that had previously started observing
  collecting reports.

  `reportingObserverInstance.disconnect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  [Experimental]

  The observe() method of the `web.reporting.ReportingObserver`
  instructs a reporting observer to start collecting reports in
  report queue.

  `reportingObserverInstance.observe()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/observe`"
  [this ]
  (-> this (.observe)))

(defn take-records
  "Method.

  [Experimental]

  The takeRecords() method of the `web.reporting.ReportingObserver`
  returns the current list of reports contained in the observer's
  queue, and empties the queue.

  `reportingObserverInstance.takeRecords()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

