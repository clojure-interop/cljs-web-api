// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AbortController');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AbortController() constructor creates a new AbortController object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController`
 */
web.AbortController.constructor$ = AbortController;
/**
 * Method.
 * 
 *   The abort() method of the `web.AbortController` interface aborts
 *   DOM request (e.g. a Fetch request) before it has completed. This
 *   able to abort fetch requests, consumption of any response `web.Body`,
 *   streams.
 * 
 *   `controller.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort`
 */
web.AbortController.abort = (function web$AbortController$abort(this$){
return this$.abort();
});
/**
 * Property.
 * 
 *   The signal read-only property of the `web.AbortController` interface
 *   an `web.AbortSignal` object instance, which can be used to communicate
 *   a DOM request as desired.
 * 
 *   `var signal = abortController.signal;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal`
 */
web.AbortController.signal = (function web$AbortController$signal(this$){
return this$.signal();
});
/**
 * Property.
 * 
 *   The signal read-only property of the `web.AbortController` interface
 *   an `web.AbortSignal` object instance, which can be used to communicate
 *   a DOM request as desired.
 * 
 *   `var signal = abortController.signal;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal`
 */
web.AbortController.set_signal_BANG_ = (function web$AbortController$set_signal_BANG_(this$,val){
return (this$["signal"] = val);
});

//# sourceMappingURL=AbortController.js.map?rel=1565798861726
