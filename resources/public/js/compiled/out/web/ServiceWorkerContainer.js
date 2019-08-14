// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ServiceWorkerContainer');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getRegistration() method of the `web.ServiceWorkerContainer`
 *   gets a `web.ServiceWorkerRegistration` object whose scope URL
 *   the provided document URL. The method returns a Promise that
 *   to a `web.ServiceWorkerRegistration` or undefined.
 * 
 *   `ServiceWorkerContainer.getRegistration(scope).then(function(ServiceWorkerRegistration) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistration`
 */
web.ServiceWorkerContainer.get_registration = (function web$ServiceWorkerContainer$get_registration(this$,scope){
return this$.getRegistration(scope);
});
/**
 * Method.
 * 
 *   The getRegistrations() method of the `web.ServiceWorkerContainer`
 *   returns all `web.ServiceWorkerRegistration`s associated with
 *   ServiceWorkerContainer in an array. If the method can't return
 *   it returns a `web.Promise`.
 * 
 *   `ServiceWorkerContainer.getRegistrations().then(function(ServiceWorkerRegistrations) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistrations`
 */
web.ServiceWorkerContainer.get_registrations = (function web$ServiceWorkerContainer$get_registrations(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42943 = arguments.length;
var i__42557__auto___42944 = (0);
while(true){
if((i__42557__auto___42944 < len__42556__auto___42943)){
args__42563__auto__.push((arguments[i__42557__auto___42944]));

var G__42945 = (i__42557__auto___42944 + (1));
i__42557__auto___42944 = G__42945;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerContainer.get_registrations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerContainer.get_registrations.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getRegistrations,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerContainer.get_registrations.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerContainer.get_registrations.cljs$lang$applyTo = (function (seq42941){
var G__42942 = cljs.core.first.call(null,seq42941);
var seq42941__$1 = cljs.core.next.call(null,seq42941);
return web.ServiceWorkerContainer.get_registrations.cljs$core$IFn$_invoke$arity$variadic(G__42942,seq42941__$1);
});

/**
 * Method.
 * 
 *   The register() method of the `web.ServiceWorkerContainer` interface
 *   or updates a `web.ServiceWorkerRegistration` for the given scriptURL.
 * 
 *   `ServiceWorkerContainer.register(scriptURL, options)
 *   .then(function(ServiceWorkerRegistration) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register`
 */
web.ServiceWorkerContainer.register = (function web$ServiceWorkerContainer$register(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42948 = arguments.length;
var i__42557__auto___42949 = (0);
while(true){
if((i__42557__auto___42949 < len__42556__auto___42948)){
args__42563__auto__.push((arguments[i__42557__auto___42949]));

var G__42950 = (i__42557__auto___42949 + (1));
i__42557__auto___42949 = G__42950;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerContainer.register.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerContainer.register.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.register,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerContainer.register.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerContainer.register.cljs$lang$applyTo = (function (seq42946){
var G__42947 = cljs.core.first.call(null,seq42946);
var seq42946__$1 = cljs.core.next.call(null,seq42946);
return web.ServiceWorkerContainer.register.cljs$core$IFn$_invoke$arity$variadic(G__42947,seq42946__$1);
});

/**
 * Method.
 * 
 *   The startMessages() method of the `web.ServiceWorkerContainer`
 *   explicitly starts the flow of messages being dispatched from
 *   service worker to pages under its control (e.g. sent via `web.Client.postMessage()`).
 *   can be used to react to sent messages earlier, even before that
 *   content has finished loading.
 * 
 *   `ServiceWorkerContainer.startMessages();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/startMessages`
 */
web.ServiceWorkerContainer.start_messages = (function web$ServiceWorkerContainer$start_messages(this$){
return this$.startMessages();
});
/**
 * Property.
 * 
 *   The controller read-only property of the `web.ServiceWorkerContainer`
 *   returns a `web.ServiceWorker` object if its state is activated
 *   same object returned by `web.ServiceWorkerRegistration.active`).
 *   property returns null if the request is a force refresh (Shift
 *   or if there is no active worker.
 * 
 *   `var myController = navigator.serviceWorker.controller;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`
 */
web.ServiceWorkerContainer.controller = (function web$ServiceWorkerContainer$controller(this$){
return this$.controller();
});
/**
 * Property.
 * 
 *   The controller read-only property of the `web.ServiceWorkerContainer`
 *   returns a `web.ServiceWorker` object if its state is activated
 *   same object returned by `web.ServiceWorkerRegistration.active`).
 *   property returns null if the request is a force refresh (Shift
 *   or if there is no active worker.
 * 
 *   `var myController = navigator.serviceWorker.controller;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`
 */
web.ServiceWorkerContainer.set_controller_BANG_ = (function web$ServiceWorkerContainer$set_controller_BANG_(this$,val){
return (this$["controller"] = val);
});
/**
 * Property.
 * 
 *   The oncontrollerchange property of the `web.ServiceWorkerContainer`
 *   is an event handler fired whenever a controllerchange event occurs
 *   when the document's associated `web.ServiceWorkerRegistration`
 *   a new `web.ServiceWorkerRegistration.active` worker.
 * 
 *   `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`
 */
web.ServiceWorkerContainer.oncontrollerchange = (function web$ServiceWorkerContainer$oncontrollerchange(this$){
return this$.oncontrollerchange();
});
/**
 * Property.
 * 
 *   The oncontrollerchange property of the `web.ServiceWorkerContainer`
 *   is an event handler fired whenever a controllerchange event occurs
 *   when the document's associated `web.ServiceWorkerRegistration`
 *   a new `web.ServiceWorkerRegistration.active` worker.
 * 
 *   `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`
 */
web.ServiceWorkerContainer.set_oncontrollerchange_BANG_ = (function web$ServiceWorkerContainer$set_oncontrollerchange_BANG_(this$,val){
return (this$["oncontrollerchange"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.ServiceWorkerContainer` interface
 *   an event handler fired whenever an error event occurs in the
 *   service workers.
 * 
 *   `ServiceWorkerContainer.onerror = function(errorevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`
 */
web.ServiceWorkerContainer.onerror = (function web$ServiceWorkerContainer$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.ServiceWorkerContainer` interface
 *   an event handler fired whenever an error event occurs in the
 *   service workers.
 * 
 *   `ServiceWorkerContainer.onerror = function(errorevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`
 */
web.ServiceWorkerContainer.set_onerror_BANG_ = (function web$ServiceWorkerContainer$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.ServiceWorkerContainer` interface
 *   an event handler fired whenever a message event occurs — when
 *   messages are received to the `web.ServiceWorkerContainer` object
 *   via a `web.MessagePort.postMessage()` call).
 * 
 *   `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`
 */
web.ServiceWorkerContainer.onmessage = (function web$ServiceWorkerContainer$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.ServiceWorkerContainer` interface
 *   an event handler fired whenever a message event occurs — when
 *   messages are received to the `web.ServiceWorkerContainer` object
 *   via a `web.MessagePort.postMessage()` call).
 * 
 *   `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`
 */
web.ServiceWorkerContainer.set_onmessage_BANG_ = (function web$ServiceWorkerContainer$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The ready read-only property of the `web.ServiceWorkerContainer`
 *   provides a way of delaying code execution until a service worker
 *   active. It returns a `web.Promise` that will never reject, and
 *   waits indefinitely until the `web.ServiceWorkerRegistration`
 *   with the current page has an `web.active` worker. Once that condition
 *   met, it resolves with the `web.ServiceWorkerRegistration`.
 * 
 *   `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`
 */
web.ServiceWorkerContainer.ready = (function web$ServiceWorkerContainer$ready(this$){
return this$.ready();
});
/**
 * Property.
 * 
 *   The ready read-only property of the `web.ServiceWorkerContainer`
 *   provides a way of delaying code execution until a service worker
 *   active. It returns a `web.Promise` that will never reject, and
 *   waits indefinitely until the `web.ServiceWorkerRegistration`
 *   with the current page has an `web.active` worker. Once that condition
 *   met, it resolves with the `web.ServiceWorkerRegistration`.
 * 
 *   `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`
 */
web.ServiceWorkerContainer.set_ready_BANG_ = (function web$ServiceWorkerContainer$set_ready_BANG_(this$,val){
return (this$["ready"] = val);
});

//# sourceMappingURL=ServiceWorkerContainer.js.map?rel=1565798801720
