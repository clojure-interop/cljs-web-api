// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MutationObserver');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOM MutationObserver() constructor — part of the `web.MutationObserver` interface — creates and returns a new observer which invokes a specified callback when DOM events occur.
 * 
 *   callback
 *   A function which will be called on each DOM change that qualifies given the targeted node or subtree and options. The callback function takes as input two parameters: an array of `web.MutationRecord` objects describing each change that occurred and the MutationObserver which invoked the callback. See the example below for more details.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver`
 */
web.MutationObserver.constructor$ = MutationObserver;
/**
 * Method.
 * 
 *   The `web.MutationObserver` method observe() configures the MutationObserver
 *   to begin receiving notifications of changes to the DOM that match
 *   given options.
 * 
 *   `mutationObserver.observe(target, options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe`
 */
web.MutationObserver.observe = (function web$MutationObserver$observe(this$,target,options){
return this$.observe(target,options);
});
/**
 * Method.
 * 
 *   The `web.MutationObserver` method takeRecords() returns a list
 *   all matching DOM changes that have been detected but not yet
 *   by the observer's callback function, leaving the mutation queue
 * 
 *   `mutationRecords = mutationObserver.takeRecords()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/takeRecords`
 */
web.MutationObserver.take_records = (function web$MutationObserver$take_records(this$){
return this$.takeRecords();
});
/**
 * Method.
 * 
 *   The `web.MutationObserver` method disconnect() tells the observer
 *   stop watching for mutations.
 * 
 *   `mutationObserver.disconnect()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect`
 */
web.MutationObserver.disconnect = (function web$MutationObserver$disconnect(this$){
return this$.disconnect();
});

//# sourceMappingURL=MutationObserver.js.map?rel=1565798811640
