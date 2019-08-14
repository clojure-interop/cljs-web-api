// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DedicatedWorkerGlobalScope');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The close() method of the `web.DedicatedWorkerGlobalScope` interface
 *   any tasks queued in the DedicatedWorkerGlobalScope's event loop,
 *   closing this particular scope.
 * 
 *   `self.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/close`
 */
web.DedicatedWorkerGlobalScope.close = (function web$DedicatedWorkerGlobalScope$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The postMessage() method of the `web.DedicatedWorkerGlobalScope`
 *   sends a message to the main thread that spawned it. This accepts
 *   single parameter, which is the data to send to the worker. The
 *   may be any value or JavaScript object handled by the structured
 *   algorithm, which includes cyclical references.
 * 
 *   `postMessage(aMessage, transferList);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage`
 */
web.DedicatedWorkerGlobalScope.post_message = (function web$DedicatedWorkerGlobalScope$post_message(this$,a_message,transfer_list){
return this$.postMessage(a_message,transfer_list);
});
/**
 * Method.
 * 
 *   The dump() method of the `web.WorkerGlobalScope` interface allows
 *   to write a message to stdout — i.e. in your terminal, in Firefox
 *   This is the same as Firefox's `web.window.dump`, but for workers.
 * 
 *   `dump('My message\\n');`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/dump`
 */
web.DedicatedWorkerGlobalScope.dump = (function web$DedicatedWorkerGlobalScope$dump(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52381 = arguments.length;
var i__42557__auto___52382 = (0);
while(true){
if((i__42557__auto___52382 < len__42556__auto___52381)){
args__42563__auto__.push((arguments[i__42557__auto___52382]));

var G__52383 = (i__42557__auto___52382 + (1));
i__42557__auto___52382 = G__52383;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DedicatedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DedicatedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.dump,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DedicatedWorkerGlobalScope.dump.cljs$lang$maxFixedArity = (1);

web.DedicatedWorkerGlobalScope.dump.cljs$lang$applyTo = (function (seq52379){
var G__52380 = cljs.core.first.call(null,seq52379);
var seq52379__$1 = cljs.core.next.call(null,seq52379);
return web.DedicatedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic(G__52380,seq52379__$1);
});

/**
 * Method.
 * 
 *   The importScripts() method of the `web.WorkerGlobalScope` interface
 *   imports one or more scripts into the worker's scope.
 * 
 *   `self.importScripts('foo.js');
 *   self.importScripts('foo.js', 'bar.js', ...);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts`
 */
web.DedicatedWorkerGlobalScope.import_scripts = (function web$DedicatedWorkerGlobalScope$import_scripts(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52386 = arguments.length;
var i__42557__auto___52387 = (0);
while(true){
if((i__42557__auto___52387 < len__42556__auto___52386)){
args__42563__auto__.push((arguments[i__42557__auto___52387]));

var G__52388 = (i__42557__auto___52387 + (1));
i__42557__auto___52387 = G__52388;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DedicatedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DedicatedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.importScripts,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DedicatedWorkerGlobalScope.import_scripts.cljs$lang$maxFixedArity = (1);

web.DedicatedWorkerGlobalScope.import_scripts.cljs$lang$applyTo = (function (seq52384){
var G__52385 = cljs.core.first.call(null,seq52384);
var seq52384__$1 = cljs.core.next.call(null,seq52384);
return web.DedicatedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic(G__52385,seq52384__$1);
});

/**
 * Property.
 * 
 *   The name read-only property of the `web.DedicatedWorkerGlobalScope`
 *   returns the name that the `web.Worker` was (optionally) given
 *   it was created. This is the name that the `web.Worker()` constructor
 *   pass to get a reference to the `web.DedicatedWorkerGlobalScope`.
 * 
 *   `var nameObj = self.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`
 */
web.DedicatedWorkerGlobalScope.name = (function web$DedicatedWorkerGlobalScope$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.DedicatedWorkerGlobalScope`
 *   returns the name that the `web.Worker` was (optionally) given
 *   it was created. This is the name that the `web.Worker()` constructor
 *   pass to get a reference to the `web.DedicatedWorkerGlobalScope`.
 * 
 *   `var nameObj = self.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`
 */
web.DedicatedWorkerGlobalScope.set_name_BANG_ = (function web$DedicatedWorkerGlobalScope$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.DedicatedWorkerGlobalScope`
 *   represents an `web.EventHandler` to be called when the message
 *   occurs and bubbles through the `web.Worker` — i.e. when a message
 *   sent to the worker using the `web.Worker.postMessage` method.
 * 
 *   `self.onmessage = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`
 */
web.DedicatedWorkerGlobalScope.onmessage = (function web$DedicatedWorkerGlobalScope$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.DedicatedWorkerGlobalScope`
 *   represents an `web.EventHandler` to be called when the message
 *   occurs and bubbles through the `web.Worker` — i.e. when a message
 *   sent to the worker using the `web.Worker.postMessage` method.
 * 
 *   `self.onmessage = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`
 */
web.DedicatedWorkerGlobalScope.set_onmessage_BANG_ = (function web$DedicatedWorkerGlobalScope$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.DedicatedWorkerGlobalScope`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the worker—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`
 */
web.DedicatedWorkerGlobalScope.onmessageerror = (function web$DedicatedWorkerGlobalScope$onmessageerror(this$){
return this$.onmessageerror();
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.DedicatedWorkerGlobalScope`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the worker—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`
 */
web.DedicatedWorkerGlobalScope.set_onmessageerror_BANG_ = (function web$DedicatedWorkerGlobalScope$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
});
/**
 * Property.
 * 
 *   The self read-only property of the `web.WorkerGlobalScope` interface
 *   a reference to the WorkerGlobalScope itself. Most of the time
 *   is a specific scope like `web.DedicatedWorkerGlobalScope`, `web.SharedWorkerGlobalScope`,
 *   `web.ServiceWorkerGlobalScope`.
 * 
 *   `var selfRef = self;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`
 */
web.DedicatedWorkerGlobalScope.self = (function web$DedicatedWorkerGlobalScope$self(this$){
return this$.self();
});
/**
 * Property.
 * 
 *   The self read-only property of the `web.WorkerGlobalScope` interface
 *   a reference to the WorkerGlobalScope itself. Most of the time
 *   is a specific scope like `web.DedicatedWorkerGlobalScope`, `web.SharedWorkerGlobalScope`,
 *   `web.ServiceWorkerGlobalScope`.
 * 
 *   `var selfRef = self;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`
 */
web.DedicatedWorkerGlobalScope.set_self_BANG_ = (function web$DedicatedWorkerGlobalScope$set_self_BANG_(this$,val){
return (this$["self"] = val);
});
/**
 * Property.
 * 
 *   The console read-only property of the `web.WorkerGlobalScope`
 *   returns a `web.Console` object providing access to the browser
 *   for the worker.
 * 
 *   `var consoleObj = self.console;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console`
 */
web.DedicatedWorkerGlobalScope.console = (function web$DedicatedWorkerGlobalScope$console(this$){
return this$.console();
});
/**
 * Property.
 * 
 *   The location read-only property of the `web.WorkerGlobalScope`
 *   returns the `web.WorkerLocation` associated with the worker.
 *   is a specific location object, mostly a subset of the `web.Location`
 *   browsing scopes, but adapted to workers.
 * 
 *   `var locationObj = self.location;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`
 */
web.DedicatedWorkerGlobalScope.location = (function web$DedicatedWorkerGlobalScope$location(this$){
return this$.location();
});
/**
 * Property.
 * 
 *   The location read-only property of the `web.WorkerGlobalScope`
 *   returns the `web.WorkerLocation` associated with the worker.
 *   is a specific location object, mostly a subset of the `web.Location`
 *   browsing scopes, but adapted to workers.
 * 
 *   `var locationObj = self.location;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`
 */
web.DedicatedWorkerGlobalScope.set_location_BANG_ = (function web$DedicatedWorkerGlobalScope$set_location_BANG_(this$,val){
return (this$["location"] = val);
});
/**
 * Property.
 * 
 *   The navigator read-only property of the `web.WorkerGlobalScope`
 *   returns the `web.WorkerNavigator` associated with the worker.
 *   is a specific navigator object, mostly a subset of the `web.Navigator`
 *   browsing scopes, but adapted to workers.
 * 
 *   `var navigatorObj = self.navigator;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`
 */
web.DedicatedWorkerGlobalScope.navigator = (function web$DedicatedWorkerGlobalScope$navigator(this$){
return this$.navigator();
});
/**
 * Property.
 * 
 *   The navigator read-only property of the `web.WorkerGlobalScope`
 *   returns the `web.WorkerNavigator` associated with the worker.
 *   is a specific navigator object, mostly a subset of the `web.Navigator`
 *   browsing scopes, but adapted to workers.
 * 
 *   `var navigatorObj = self.navigator;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`
 */
web.DedicatedWorkerGlobalScope.set_navigator_BANG_ = (function web$DedicatedWorkerGlobalScope$set_navigator_BANG_(this$,val){
return (this$["navigator"] = val);
});
/**
 * Property.
 * 
 *   The performance read-only property of the `web.WorkerGlobalScope`
 *   returns a `performance.Performance` object to be used on the
 * 
 *   `var perfObj = self.performance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/performance`
 */
web.DedicatedWorkerGlobalScope.performance = (function web$DedicatedWorkerGlobalScope$performance(this$){
return this$.performance();
});

//# sourceMappingURL=DedicatedWorkerGlobalScope.js.map?rel=1565798852357
