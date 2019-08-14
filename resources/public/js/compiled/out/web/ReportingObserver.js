// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReportingObserver');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReportingObserver() constructor of the Reporting API creates a new `web.ReportingObserver` object instance, which can be used to collect and access reports.
 * 
 *   callback
 *   A callback function that runs when the observer starts to collect reports (i.e. via `web.ReportingObserver.observe()`). The callback function is given two parameters:
 * 
 *   reports: A sequence of `web.Report` objects representing the reports collected in the observer's report queue. This is probably the most common way to retrieve the reports.
 *   observer: A reference to the same ReportingObserver object, allowing for recursive report collection, etc.
 * 
 * 
 *   options Optional
 *   An `web.ReportingObserverOptions` object allowing you to set the options for creating the object. The available options are:
 * 
 *   types: An array of strings representing the types of report to be collected by this observer. Available types include deprecation, intervention, and crash (although this last type usually isn't retrievable via a ReportingObserver).
 *   buffered: a boolean that defines whether the reports that were generated before the observer was able to be created should be observable (true) or not (false).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/ReportingObserver`
 */
web.ReportingObserver.constructor$ = ReportingObserver;
/**
 * Method.
 * 
 *   The disconnect() method of the `web.ReportingObserver` interface
 *   a reporting observer that had previously started observing from
 *   reports.
 * 
 *   `reportingObserverInstance.disconnect()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/disconnect`
 */
web.ReportingObserver.disconnect = (function web$ReportingObserver$disconnect(this$){
return this$.disconnect();
});
/**
 * Method.
 * 
 *   The observe() method of the `web.ReportingObserver` interface
 *   a reporting observer to start collecting reports in its report
 * 
 *   `reportingObserverInstance.observe()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/observe`
 */
web.ReportingObserver.observe = (function web$ReportingObserver$observe(this$){
return this$.observe();
});
/**
 * Method.
 * 
 *   The takeRecords() method of the `web.ReportingObserver` interface
 *   the current list of reports contained in the observer's report
 *   and empties the queue.
 * 
 *   `reportingObserverInstance.takeRecords()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReportingObserver/takeRecords`
 */
web.ReportingObserver.take_records = (function web$ReportingObserver$take_records(this$){
return this$.takeRecords();
});

//# sourceMappingURL=ReportingObserver.js.map?rel=1565798856070
