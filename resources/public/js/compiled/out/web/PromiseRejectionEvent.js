// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PromiseRejectionEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PromiseRejectionEvent() constructor returns a newly created `web.PromiseRejectionEvent`, which represents events fired when a JavaScript `web.Promise` is rejected.
 * 
 *   The PromiseRejectionEvent() constructor also inherits parameters from `web.Event()`.
 * 
 * 
 *   type
 *   A string representing the name of the type of the PromiseRejectionEvent. This is case-sensitive and should be one of \"rejectionhandled\" or \"unhandledrejection\", to match the event names of the possible (non-synthetic) `web.PromiseRejectionEvent` events that user agents can actually fire).
 *   options
 *   An `web.Object` specifying details about the rejection which occurred:
 * 
 *   promise
 *   The `web.Promise` that was rejected.
 *   reason
 *   Any value or `web.Object` which represents the reason the promise was rejected. This can be anything from a numeric error code to an error `dom.DOMString` to an object which contains detailed information describing the situation resulting in the promise being rejected.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/PromiseRejectionEvent`
 */
web.PromiseRejectionEvent.constructor$ = PromiseRejectionEvent;
/**
 * Property.
 * 
 *   The `web.PromiseRejectionEvent` interface's promise read-only
 *   indicates the JavaScript `web.Promise` which was rejected. You
 *   examine the event's `web.PromiseRejectionEvent.reason` property
 *   learn why the promise was rejected.
 * 
 *   `promise = PromiseRejectionEvent.promise`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise`
 */
web.PromiseRejectionEvent.promise = (function web$PromiseRejectionEvent$promise(this$){
return this$.promise();
});
/**
 * Property.
 * 
 *   The `web.PromiseRejectionEvent` interface's promise read-only
 *   indicates the JavaScript `web.Promise` which was rejected. You
 *   examine the event's `web.PromiseRejectionEvent.reason` property
 *   learn why the promise was rejected.
 * 
 *   `promise = PromiseRejectionEvent.promise`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise`
 */
web.PromiseRejectionEvent.set_promise_BANG_ = (function web$PromiseRejectionEvent$set_promise_BANG_(this$,val){
return (this$["promise"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.PromiseRejection` property reason read-only
 *   is any JavaScript value or `web.Object` which provides the reason
 *   into `web.Promise.reject()`. This in theory provides information
 *   why the promise was rejected.
 * 
 *   `reason = PromiseRejectionEvent.reason`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason`
 */
web.PromiseRejectionEvent.reason = (function web$PromiseRejectionEvent$reason(this$){
return this$.reason();
});
/**
 * Property.
 * 
 *   The read-only `web.PromiseRejection` property reason read-only
 *   is any JavaScript value or `web.Object` which provides the reason
 *   into `web.Promise.reject()`. This in theory provides information
 *   why the promise was rejected.
 * 
 *   `reason = PromiseRejectionEvent.reason`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason`
 */
web.PromiseRejectionEvent.set_reason_BANG_ = (function web$PromiseRejectionEvent$set_reason_BANG_(this$,val){
return (this$["reason"] = val);
});

//# sourceMappingURL=PromiseRejectionEvent.js.map?rel=1565798801573
