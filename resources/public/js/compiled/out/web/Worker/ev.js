// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Worker.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   The message event is fired on a `web.Worker` object when the
 *   parent receives a message from its worker (i.e. when the worker
 *   a message using DedicatedWorkerGlobalScope.postMessage()).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/message_event`
 */
web.Worker.ev.message = "message";
/**
 * Event.
 * 
 *   The messageerror event is fired on a `web.Worker` object when
 *   receives a message that can't be deserialized.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/messageerror_event`
 */
web.Worker.ev.messageerror = "messageerror";

//# sourceMappingURL=ev.js.map?rel=1565798837642
