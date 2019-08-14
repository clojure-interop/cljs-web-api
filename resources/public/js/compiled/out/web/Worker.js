// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Worker');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Worker() constructor creates a `web.Worker` object that executes the script at the specified URL. This script must obey the same-origin policy.
 * 
 *   aURL
 *   \tA `web.USVString` representing the URL of the script the worker will execute. It must obey the same-origin policy.
 *   \toptions Optional
 *   \tAn object containing option properties that can be set when creating the object instance. Available properties are as follows:
 * 
 *   \t\ttype: A `dom.DOMString` specifying the type of worker to create. The value can be classic or module. If not specified, the default used is classic.
 *   \t\tcredentials: A `dom.DOMString` specifying the type of credentials to use for the worker. The value can be omit, same-origin, or include. If not specified, or if type is classic, the default used is omit (no credentials required).
 *   \t\tname: A `dom.DOMString` specifying an identifying name for the `web.DedicatedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for debugging purposes.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker`
 */
web.Worker.constructor$ = Worker;
/**
 * Method.
 * 
 *   The postMessage() method of the `web.Worker` interface sends
 *   message to the worker's inner scope. This accepts a single parameter,
 *   is the data to send to the worker. The data may be any value
 *   JavaScript object handled by the structured clone algorithm,
 *   includes cyclical references.
 * 
 *   `worker.postMessage(message, [transfer]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage`
 */
web.Worker.post_message = (function web$Worker$post_message(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43960 = arguments.length;
var i__42557__auto___43961 = (0);
while(true){
if((i__42557__auto___43961 < len__42556__auto___43960)){
args__42563__auto__.push((arguments[i__42557__auto___43961]));

var G__43962 = (i__42557__auto___43961 + (1));
i__42557__auto___43961 = G__43962;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Worker.post_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Worker.post_message.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.postMessage,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Worker.post_message.cljs$lang$maxFixedArity = (1);

web.Worker.post_message.cljs$lang$applyTo = (function (seq43958){
var G__43959 = cljs.core.first.call(null,seq43958);
var seq43958__$1 = cljs.core.next.call(null,seq43958);
return web.Worker.post_message.cljs$core$IFn$_invoke$arity$variadic(G__43959,seq43958__$1);
});

/**
 * Method.
 * 
 *   The terminate() method of the `web.Worker` interface immediately
 *   the `web.Worker`. This does not offer the worker an opportunity
 *   finish its operations; it is simply stopped at once.
 * 
 *   `myWorker.terminate();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/terminate`
 */
web.Worker.terminate = (function web$Worker$terminate(this$){
return this$.terminate();
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
web.Worker.onerror = (function web$Worker$onerror(this$){
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
web.Worker.set_onerror_BANG_ = (function web$Worker$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.Worker` interface represents
 *   `web.EventHandler`, that is a function to be called when the
 *   event occurs. These events are of type `web.MessageEvent` and
 *   be called when the worker's parent receives a message (i.e. from
 *   `web.DedicatedWorkerGlobalScope.postMessage` method).
 * 
 *   `myWorker.onmessage = function(e) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage`
 */
web.Worker.onmessage = (function web$Worker$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.Worker` interface represents
 *   `web.EventHandler`, that is a function to be called when the
 *   event occurs. These events are of type `web.MessageEvent` and
 *   be called when the worker's parent receives a message (i.e. from
 *   `web.DedicatedWorkerGlobalScope.postMessage` method).
 * 
 *   `myWorker.onmessage = function(e) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage`
 */
web.Worker.set_onmessage_BANG_ = (function web$Worker$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.Worker` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the Worker instance — that is,
 *   it receives a message that cannot be deserialized.
 * 
 *   `Worker.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessageerror`
 */
web.Worker.onmessageerror = (function web$Worker$onmessageerror(this$){
return this$.onmessageerror();
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.Worker` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the Worker instance — that is,
 *   it receives a message that cannot be deserialized.
 * 
 *   `Worker.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessageerror`
 */
web.Worker.set_onmessageerror_BANG_ = (function web$Worker$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
});

//# sourceMappingURL=Worker.js.map?rel=1565798810705
