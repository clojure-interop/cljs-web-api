// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.IdleDeadline');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The timeRemaining() method on the `web.IdleDeadline` interface
 *   the estimated number of milliseconds remaining in the current
 *   period. The callback can call this method at any time to determine
 *   much time it can continue to work before it must return. For
 *   if the callback finishes a task and has another one to begin,
 *   can call timeRemaining() to see if there's enough time to complete
 *   next task. If there isn't, the callback can just return immediately,
 *   look for other work to do with the remaining time.
 * 
 *   `timeRemaining = IdleDeadline.timeRemaining();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/timeRemaining`
 */
web.IdleDeadline.time_remaining = (function web$IdleDeadline$time_remaining(this$){
return this$.timeRemaining();
});
/**
 * Property.
 * 
 *   The read-only didTimeout property on the `web.IdleDeadline` interface
 *   a Boolean value which indicates whether or not the idle callback
 *   being invoked because the timeout interval specified when `web.Window.requestIdleCallback()`
 *   called has expired.
 * 
 *   `var timedOut = IdleDeadline.didTimeout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/didTimeout`
 */
web.IdleDeadline.did_timeout = (function web$IdleDeadline$did_timeout(this$){
return this$.didTimeout();
});
/**
 * Property.
 * 
 *   The read-only didTimeout property on the `web.IdleDeadline` interface
 *   a Boolean value which indicates whether or not the idle callback
 *   being invoked because the timeout interval specified when `web.Window.requestIdleCallback()`
 *   called has expired.
 * 
 *   `var timedOut = IdleDeadline.didTimeout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/didTimeout`
 */
web.IdleDeadline.set_did_timeout_BANG_ = (function web$IdleDeadline$set_did_timeout_BANG_(this$,val){
return (this$["didTimeout"] = val);
});

//# sourceMappingURL=IdleDeadline.js.map?rel=1565798862126
