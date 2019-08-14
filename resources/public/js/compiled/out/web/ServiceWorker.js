// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ServiceWorker');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The AbstractWorker.onerror property of the `web.AbstractWorker`
 *   represents an `web.EventHandler`, that is a function to be called
 *   the error event occurs and bubbles through the `web.Worker`.
 * 
 *   `myWorker.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`
 */
web.ServiceWorker.onerror = (function web$ServiceWorker$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The AbstractWorker.onerror property of the `web.AbstractWorker`
 *   represents an `web.EventHandler`, that is a function to be called
 *   the error event occurs and bubbles through the `web.Worker`.
 * 
 *   `myWorker.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`
 */
web.ServiceWorker.set_onerror_BANG_ = (function web$ServiceWorker$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   An `web.EventListener` property called whenever an event of type
 *   is fired; it is basically fired anytime the `web.ServiceWorker.state`
 * 
 *   `ServiceWorker.onstatechange = function(statechangeevent) { ... }
 *   ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/onstatechange`
 */
web.ServiceWorker.onstatechange = (function web$ServiceWorker$onstatechange(this$){
return this$.onstatechange();
});
/**
 * Property.
 * 
 *   An `web.EventListener` property called whenever an event of type
 *   is fired; it is basically fired anytime the `web.ServiceWorker.state`
 * 
 *   `ServiceWorker.onstatechange = function(statechangeevent) { ... }
 *   ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/onstatechange`
 */
web.ServiceWorker.set_onstatechange_BANG_ = (function web$ServiceWorker$set_onstatechange_BANG_(this$,val){
return (this$["onstatechange"] = val);
});
/**
 * Property.
 * 
 *   Returns the ServiceWorker serialized script URL defined as part
 *   ServiceWorkerRegistration. Must be on the same origin as the
 *   that registers the ServiceWorker.
 * 
 *   `someURL = ServiceWorker.scriptURL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/scriptURL`
 */
web.ServiceWorker.script_url = (function web$ServiceWorker$script_url(this$){
return this$.scriptURL();
});
/**
 * Property.
 * 
 *   Returns the ServiceWorker serialized script URL defined as part
 *   ServiceWorkerRegistration. Must be on the same origin as the
 *   that registers the ServiceWorker.
 * 
 *   `someURL = ServiceWorker.scriptURL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/scriptURL`
 */
web.ServiceWorker.set_script_url_BANG_ = (function web$ServiceWorker$set_script_url_BANG_(this$,val){
return (this$["scriptURL"] = val);
});
/**
 * Property.
 * 
 *   The state read-only property of the `web.ServiceWorker` interface
 *   a string representing the current state of the service worker.
 *   can be one of the following values: installing, installed, activating,
 *   or redundant.
 * 
 *   `someURL = ServiceWorker.state`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/state`
 */
web.ServiceWorker.state = (function web$ServiceWorker$state(this$){
return this$.state();
});
/**
 * Property.
 * 
 *   The state read-only property of the `web.ServiceWorker` interface
 *   a string representing the current state of the service worker.
 *   can be one of the following values: installing, installed, activating,
 *   or redundant.
 * 
 *   `someURL = ServiceWorker.state`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/state`
 */
web.ServiceWorker.set_state_BANG_ = (function web$ServiceWorker$set_state_BANG_(this$,val){
return (this$["state"] = val);
});

//# sourceMappingURL=ServiceWorker.js.map?rel=1565798857614
