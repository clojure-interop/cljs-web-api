// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SharedWorkerGlobalScope');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The close() method of the `web.SharedWorkerGlobalScope` interface
 *   any tasks queued in the SharedWorkerGlobalScope's event loop,
 *   closing this particular scope.
 * 
 *   `self.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/close`
 */
web.SharedWorkerGlobalScope.close = (function web$SharedWorkerGlobalScope$close(this$){
return this$.close();
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
web.SharedWorkerGlobalScope.dump = (function web$SharedWorkerGlobalScope$dump(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52611 = arguments.length;
var i__42557__auto___52612 = (0);
while(true){
if((i__42557__auto___52612 < len__42556__auto___52611)){
args__42563__auto__.push((arguments[i__42557__auto___52612]));

var G__52613 = (i__42557__auto___52612 + (1));
i__42557__auto___52612 = G__52613;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SharedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SharedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.dump,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SharedWorkerGlobalScope.dump.cljs$lang$maxFixedArity = (1);

web.SharedWorkerGlobalScope.dump.cljs$lang$applyTo = (function (seq52609){
var G__52610 = cljs.core.first.call(null,seq52609);
var seq52609__$1 = cljs.core.next.call(null,seq52609);
return web.SharedWorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic(G__52610,seq52609__$1);
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
web.SharedWorkerGlobalScope.import_scripts = (function web$SharedWorkerGlobalScope$import_scripts(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52616 = arguments.length;
var i__42557__auto___52617 = (0);
while(true){
if((i__42557__auto___52617 < len__42556__auto___52616)){
args__42563__auto__.push((arguments[i__42557__auto___52617]));

var G__52618 = (i__42557__auto___52617 + (1));
i__42557__auto___52617 = G__52618;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SharedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SharedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.importScripts,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SharedWorkerGlobalScope.import_scripts.cljs$lang$maxFixedArity = (1);

web.SharedWorkerGlobalScope.import_scripts.cljs$lang$applyTo = (function (seq52614){
var G__52615 = cljs.core.first.call(null,seq52614);
var seq52614__$1 = cljs.core.next.call(null,seq52614);
return web.SharedWorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic(G__52615,seq52614__$1);
});

/**
 * Property.
 * 
 *   The applicationCache read-only property of the `web.SharedWorkerGlobalScope`
 *   returns the `web.ApplicationCache` object for the worker (see
 *   the application cache).
 * 
 *   `var nameObj = self.applicationCache;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`
 */
web.SharedWorkerGlobalScope.application_cache = (function web$SharedWorkerGlobalScope$application_cache(this$){
return this$.applicationCache();
});
/**
 * Property.
 * 
 *   The applicationCache read-only property of the `web.SharedWorkerGlobalScope`
 *   returns the `web.ApplicationCache` object for the worker (see
 *   the application cache).
 * 
 *   `var nameObj = self.applicationCache;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`
 */
web.SharedWorkerGlobalScope.set_application_cache_BANG_ = (function web$SharedWorkerGlobalScope$set_application_cache_BANG_(this$,val){
return (this$["applicationCache"] = val);
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.SharedWorkerGlobalScope`
 *   returns the name that the `web.SharedWorker` was (optionally)
 *   when it was created. This is the name that the `web.SharedWorker()`
 *   can pass to get a reference to the `web.SharedWorkerGlobalScope`.
 * 
 *   `var nameObj = self.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`
 */
web.SharedWorkerGlobalScope.name = (function web$SharedWorkerGlobalScope$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.SharedWorkerGlobalScope`
 *   returns the name that the `web.SharedWorker` was (optionally)
 *   when it was created. This is the name that the `web.SharedWorker()`
 *   can pass to get a reference to the `web.SharedWorkerGlobalScope`.
 * 
 *   `var nameObj = self.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`
 */
web.SharedWorkerGlobalScope.set_name_BANG_ = (function web$SharedWorkerGlobalScope$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The onconnect property of the `web.SharedWorkerGlobalScope` interface
 *   an event handler representing the code to be called when the
 *   event is raised — that is, when a `web.MessagePort` connection
 *   opened between the associated `web.SharedWorker` and the main
 * 
 *   `onconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`
 */
web.SharedWorkerGlobalScope.onconnect = (function web$SharedWorkerGlobalScope$onconnect(this$){
return this$.onconnect();
});
/**
 * Property.
 * 
 *   The onconnect property of the `web.SharedWorkerGlobalScope` interface
 *   an event handler representing the code to be called when the
 *   event is raised — that is, when a `web.MessagePort` connection
 *   opened between the associated `web.SharedWorker` and the main
 * 
 *   `onconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`
 */
web.SharedWorkerGlobalScope.set_onconnect_BANG_ = (function web$SharedWorkerGlobalScope$set_onconnect_BANG_(this$,val){
return (this$["onconnect"] = val);
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
web.SharedWorkerGlobalScope.self = (function web$SharedWorkerGlobalScope$self(this$){
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
web.SharedWorkerGlobalScope.set_self_BANG_ = (function web$SharedWorkerGlobalScope$set_self_BANG_(this$,val){
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
web.SharedWorkerGlobalScope.console = (function web$SharedWorkerGlobalScope$console(this$){
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
web.SharedWorkerGlobalScope.location = (function web$SharedWorkerGlobalScope$location(this$){
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
web.SharedWorkerGlobalScope.set_location_BANG_ = (function web$SharedWorkerGlobalScope$set_location_BANG_(this$,val){
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
web.SharedWorkerGlobalScope.navigator = (function web$SharedWorkerGlobalScope$navigator(this$){
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
web.SharedWorkerGlobalScope.set_navigator_BANG_ = (function web$SharedWorkerGlobalScope$set_navigator_BANG_(this$,val){
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
web.SharedWorkerGlobalScope.performance = (function web$SharedWorkerGlobalScope$performance(this$){
return this$.performance();
});

//# sourceMappingURL=SharedWorkerGlobalScope.js.map?rel=1565798857060
