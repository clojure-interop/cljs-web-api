// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.InstallEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The InstallEvent() constructor creates a new `web.InstallEvent` object.
 * 
 *   type
 *   The type of the event.
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the event object. Available options are as follows:
 * 
 *   activeWorker: The `web.ServiceWorker` that is currently actively controlling the page.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/InstallEvent`
 */
web.InstallEvent.constructor$ = InstallEvent;
/**
 * Property.
 * 
 *   The activeWorker read-only property of the `web.InstallEvent`
 *   returns the `web.ServiceWorker` that is currently actively controlling
 *   page.
 * 
 *   `var myActiveWorker = event.activeWorker`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/activeWorker`
 */
web.InstallEvent.active_worker = (function web$InstallEvent$active_worker(this$){
return this$.activeWorker();
});
/**
 * Property.
 * 
 *   The activeWorker read-only property of the `web.InstallEvent`
 *   returns the `web.ServiceWorker` that is currently actively controlling
 *   page.
 * 
 *   `var myActiveWorker = event.activeWorker`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/activeWorker`
 */
web.InstallEvent.set_active_worker_BANG_ = (function web$InstallEvent$set_active_worker_BANG_(this$,val){
return (this$["activeWorker"] = val);
});

//# sourceMappingURL=InstallEvent.js.map?rel=1565798850917
