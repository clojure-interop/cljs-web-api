(ns web.reporting.ReportingObserver
  "The ReportingObserver interface of the Reporting API allows you
  collect and access reports."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReportingObserver() constructor of the Reporting API creates a new `web.reporting.ReportingObserver` object instance, which can be used to collect and access reports.

  callback
  A callback function that runs when the observer starts to collect reports (i.e. via `ReportingObserver.observe()`). The callback function is given two parameters:

  reports: A sequence of `web.reporting.Report` objects representing the reports collected in the observer's report queue. This is probably the most common way to retrieve the reports.
  observer: A reference to the same ReportingObserver object, allowing for recursive report collection, etc.


  options Optional
  An `web.reporting.ReportingObserverOptions` object allowing you to set the options for creating the object. The available options are:

  types: An array of strings representing the types of report to be collected by this observer. Available types include deprecation, intervention, and crash (although this last type usually isn't retrievable via a ReportingObserver).
  buffered: a boolean that defines whether the reports that were generated before the observer was able to be created should be observable (true) or not (false).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/ReportingObserver`"
  js/ReportingObserver)

(defn disconnect
  "Method.

  The disconnect() method of the `web.reporting.ReportingObserver`
  stops a reporting observer that had previously started observing
  collecting reports.

  `reportingObserverInstance.disconnect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The observe() method of the `web.reporting.ReportingObserver`
  instructs a reporting observer to start collecting reports in
  report queue.

  `reportingObserverInstance.observe()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/observe`"
  [this ]
  (-> this (.observe)))

(defn take-records
  "Method.

  The takeRecords() method of the `web.reporting.ReportingObserver`
  returns the current list of reports contained in the observer's
  queue, and empties the queue.

  `reportingObserverInstance.takeRecords()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

