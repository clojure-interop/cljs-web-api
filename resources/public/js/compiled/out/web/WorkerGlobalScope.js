// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WorkerGlobalScope');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WindowOrWorkerGlobalScope.atob() function decodes a string
 *   data which has been encoded using base-64 encoding. You can use
 *   `web.btoa()` method to encode and transmit data which may otherwise
 *   communication problems, then transmit it and use the atob() method
 *   decode the data again. For example, you can encode, transmit,
 *   decode control characters such as ASCII values 0 through 31.
 * 
 *   `var decodedData = scope.atob(encodedData);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob`
 */
web.WorkerGlobalScope.atob = (function web$WorkerGlobalScope$atob(this$,encoded_data){
return this$.atob(encoded_data);
});
/**
 * Method.
 * 
 *   The WindowOrWorkerGlobalScope.btoa() method creates a base-64
 *   ASCII string from a binary string (i.e., a `web.String` object
 *   which each character in the string is treated as a byte of binary
 * 
 *   `var encodedData = scope.btoa(stringToEncode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa`
 */
web.WorkerGlobalScope.btoa = (function web$WorkerGlobalScope$btoa(this$,string_to_encode){
return this$.btoa(string_to_encode);
});
/**
 * Method.
 * 
 *   The clearInterval() method of the `web.WindowOrWorkerGlobalScope`
 *   cancels a timed, repeating action which was previously established
 *   a call to `web.setInterval()`.
 * 
 *   `scope.clearInterval(intervalID)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval`
 */
web.WorkerGlobalScope.clear_interval = (function web$WorkerGlobalScope$clear_interval(this$,interval_id){
return this$.clearInterval(interval_id);
});
/**
 * Method.
 * 
 *   The clearTimeout() method of the `web.WindowOrWorkerGlobalScope`
 *   cancels a timeout previously established by calling `web.setTimeout()`.
 * 
 *   `scope.clearTimeout(timeoutID)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout`
 */
web.WorkerGlobalScope.clear_timeout = (function web$WorkerGlobalScope$clear_timeout(this$,timeout_id){
return this$.clearTimeout(timeout_id);
});
/**
 * Method.
 * 
 *   The close() method of the `web.WorkerGlobalScope` interface discards
 *   tasks queued in the WorkerGlobalScope's event loop, effectively
 *   this particular scope.
 * 
 *   `self.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/close`
 */
web.WorkerGlobalScope.close = (function web$WorkerGlobalScope$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The createImageBitmap() method creates a bitmap from a given
 *   optionally cropped to contain only a portion of that source.
 *   method exists on the global scope in both windows and workers.
 *   accepts a variety of different image sources, and returns a `web.Promise`
 *   resolves to an `web.ImageBitmap`.
 * 
 *   `createImageBitmap(image[, options]).then(function(response) { ... });
 *   createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap`
 */
web.WorkerGlobalScope.create_image_bitmap = (function web$WorkerGlobalScope$create_image_bitmap(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50554 = arguments.length;
var i__42557__auto___50555 = (0);
while(true){
if((i__42557__auto___50555 < len__42556__auto___50554)){
args__42563__auto__.push((arguments[i__42557__auto___50555]));

var G__50556 = (i__42557__auto___50555 + (1));
i__42557__auto___50555 = G__50556;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createImageBitmap,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WorkerGlobalScope.create_image_bitmap.cljs$lang$maxFixedArity = (1);

web.WorkerGlobalScope.create_image_bitmap.cljs$lang$applyTo = (function (seq50552){
var G__50553 = cljs.core.first.call(null,seq50552);
var seq50552__$1 = cljs.core.next.call(null,seq50552);
return web.WorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic(G__50553,seq50552__$1);
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
web.WorkerGlobalScope.dump = (function web$WorkerGlobalScope$dump(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50559 = arguments.length;
var i__42557__auto___50560 = (0);
while(true){
if((i__42557__auto___50560 < len__42556__auto___50559)){
args__42563__auto__.push((arguments[i__42557__auto___50560]));

var G__50561 = (i__42557__auto___50560 + (1));
i__42557__auto___50560 = G__50561;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.dump,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WorkerGlobalScope.dump.cljs$lang$maxFixedArity = (1);

web.WorkerGlobalScope.dump.cljs$lang$applyTo = (function (seq50557){
var G__50558 = cljs.core.first.call(null,seq50557);
var seq50557__$1 = cljs.core.next.call(null,seq50557);
return web.WorkerGlobalScope.dump.cljs$core$IFn$_invoke$arity$variadic(G__50558,seq50557__$1);
});

/**
 * Method.
 * 
 *   The fetch() method of the `web.WindowOrWorkerGlobalScope` mixin
 *   the process of fetching a resource from the network, returning
 *   promise which is fulfilled once the response is available.
 * 
 *   `fetchResponsePromise = fetch(resource, init);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch`
 */
web.WorkerGlobalScope.fetch = (function web$WorkerGlobalScope$fetch(this$,resource,init){
return this$.fetch(resource,init);
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
web.WorkerGlobalScope.import_scripts = (function web$WorkerGlobalScope$import_scripts(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50564 = arguments.length;
var i__42557__auto___50565 = (0);
while(true){
if((i__42557__auto___50565 < len__42556__auto___50564)){
args__42563__auto__.push((arguments[i__42557__auto___50565]));

var G__50566 = (i__42557__auto___50565 + (1));
i__42557__auto___50565 = G__50566;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.importScripts,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WorkerGlobalScope.import_scripts.cljs$lang$maxFixedArity = (1);

web.WorkerGlobalScope.import_scripts.cljs$lang$applyTo = (function (seq50562){
var G__50563 = cljs.core.first.call(null,seq50562);
var seq50562__$1 = cljs.core.next.call(null,seq50562);
return web.WorkerGlobalScope.import_scripts.cljs$core$IFn$_invoke$arity$variadic(G__50563,seq50562__$1);
});

/**
 * Method.
 * 
 *   The queueMicrotask() method of the `web.WindowOrWorkerGlobalScope`
 *   queues a microtask.
 * 
 *   `scope.queueMicrotask(function);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask`
 */
web.WorkerGlobalScope.queue_microtask = (function web$WorkerGlobalScope$queue_microtask(this$,function$){
return this$.queueMicrotask(function$);
});
/**
 * Method.
 * 
 *   The setInterval() method, offered on the `web.Window` and `web.Worker`
 *   repeatedly calls a function or executes a code snippet, with
 *   fixed time delay between each call.
 * 
 *   `var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
 *   var intervalID = scope.setInterval(code, delay);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval`
 */
web.WorkerGlobalScope.set_interval = (function web$WorkerGlobalScope$set_interval(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50569 = arguments.length;
var i__42557__auto___50570 = (0);
while(true){
if((i__42557__auto___50570 < len__42556__auto___50569)){
args__42563__auto__.push((arguments[i__42557__auto___50570]));

var G__50571 = (i__42557__auto___50570 + (1));
i__42557__auto___50570 = G__50571;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setInterval,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WorkerGlobalScope.set_interval.cljs$lang$maxFixedArity = (1);

web.WorkerGlobalScope.set_interval.cljs$lang$applyTo = (function (seq50567){
var G__50568 = cljs.core.first.call(null,seq50567);
var seq50567__$1 = cljs.core.next.call(null,seq50567);
return web.WorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic(G__50568,seq50567__$1);
});

/**
 * Method.
 * 
 *   The setTimeout() method of the `web.WindowOrWorkerGlobalScope`
 *   (and successor to Window.setTimeout()) sets a timer which executes
 *   function or specified piece of code once the timer expires.
 * 
 *   `var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
 *   var timeoutID = scope.setTimeout(function[, delay]);
 *   var timeoutID = scope.setTimeout(code[, delay]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout`
 */
web.WorkerGlobalScope.set_timeout = (function web$WorkerGlobalScope$set_timeout(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50574 = arguments.length;
var i__42557__auto___50575 = (0);
while(true){
if((i__42557__auto___50575 < len__42556__auto___50574)){
args__42563__auto__.push((arguments[i__42557__auto___50575]));

var G__50576 = (i__42557__auto___50575 + (1));
i__42557__auto___50575 = G__50576;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setTimeout,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WorkerGlobalScope.set_timeout.cljs$lang$maxFixedArity = (1);

web.WorkerGlobalScope.set_timeout.cljs$lang$applyTo = (function (seq50572){
var G__50573 = cljs.core.first.call(null,seq50572);
var seq50572__$1 = cljs.core.next.call(null,seq50572);
return web.WorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic(G__50573,seq50572__$1);
});

/**
 * Property.
 * 
 *   The caches read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the `web.CacheStorage` object associated with the current
 *   This object enables functionality such as storing assets for
 *   use, and generating custom responses to requests.
 * 
 *   `var myCacheStorage = self.caches; // or just caches`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches`
 */
web.WorkerGlobalScope.caches = (function web$WorkerGlobalScope$caches(this$){
return this$.caches();
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
web.WorkerGlobalScope.console = (function web$WorkerGlobalScope$console(this$){
return this$.console();
});
/**
 * Property.
 * 
 *   The indexedDB read-only property of the `web.WindowOrWorkerGlobalScope`
 *   provides a mechanism for applications to asynchronously access
 *   capabilities of indexed databases.
 * 
 *   `var IDBFactory = self.indexedDB;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB`
 */
web.WorkerGlobalScope.indexed_db = (function web$WorkerGlobalScope$indexed_db(this$){
return this$.indexedDB();
});
/**
 * Property.
 * 
 *   The isSecureContext read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns a boolean indicating whether the current context is secure
 *   or not (false).
 * 
 *   `var isItSecure = self.isSecureContext; // or just isSecureContext`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/isSecureContext`
 */
web.WorkerGlobalScope.is_secure_context = (function web$WorkerGlobalScope$is_secure_context(this$){
return this$.isSecureContext();
});
/**
 * Property.
 * 
 *   The isSecureContext read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns a boolean indicating whether the current context is secure
 *   or not (false).
 * 
 *   `var isItSecure = self.isSecureContext; // or just isSecureContext`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/isSecureContext`
 */
web.WorkerGlobalScope.set_is_secure_context_BANG_ = (function web$WorkerGlobalScope$set_is_secure_context_BANG_(this$,val){
return (this$["isSecureContext"] = val);
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
web.WorkerGlobalScope.location = (function web$WorkerGlobalScope$location(this$){
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
web.WorkerGlobalScope.set_location_BANG_ = (function web$WorkerGlobalScope$set_location_BANG_(this$,val){
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
web.WorkerGlobalScope.navigator = (function web$WorkerGlobalScope$navigator(this$){
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
web.WorkerGlobalScope.set_navigator_BANG_ = (function web$WorkerGlobalScope$set_navigator_BANG_(this$,val){
return (this$["navigator"] = val);
});
/**
 * Property.
 * 
 *   The onclose property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the close event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onclose = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onclose`
 */
web.WorkerGlobalScope.onclose = (function web$WorkerGlobalScope$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The onclose property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the close event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onclose = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onclose`
 */
web.WorkerGlobalScope.set_onclose_BANG_ = (function web$WorkerGlobalScope$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the error event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onerror`
 */
web.WorkerGlobalScope.onerror = (function web$WorkerGlobalScope$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the error event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onerror`
 */
web.WorkerGlobalScope.set_onerror_BANG_ = (function web$WorkerGlobalScope$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onlanguagechange property of the `web.WorkerGlobalScope`
 *   represents an `web.EventHandler` to be called when the languagechange
 *   occurs and bubbles through the `web.Worker`.
 * 
 *   `self.onlanguagechange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onlanguagechange`
 */
web.WorkerGlobalScope.onlanguagechange = (function web$WorkerGlobalScope$onlanguagechange(this$){
return this$.onlanguagechange();
});
/**
 * Property.
 * 
 *   The onlanguagechange property of the `web.WorkerGlobalScope`
 *   represents an `web.EventHandler` to be called when the languagechange
 *   occurs and bubbles through the `web.Worker`.
 * 
 *   `self.onlanguagechange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onlanguagechange`
 */
web.WorkerGlobalScope.set_onlanguagechange_BANG_ = (function web$WorkerGlobalScope$set_onlanguagechange_BANG_(this$,val){
return (this$["onlanguagechange"] = val);
});
/**
 * Property.
 * 
 *   The onoffline property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the offline event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onoffline = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onoffline`
 */
web.WorkerGlobalScope.onoffline = (function web$WorkerGlobalScope$onoffline(this$){
return this$.onoffline();
});
/**
 * Property.
 * 
 *   The onoffline property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the offline event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.onoffline = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onoffline`
 */
web.WorkerGlobalScope.set_onoffline_BANG_ = (function web$WorkerGlobalScope$set_onoffline_BANG_(this$,val){
return (this$["onoffline"] = val);
});
/**
 * Property.
 * 
 *   The ononline property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the online event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.ononline = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/ononline`
 */
web.WorkerGlobalScope.ononline = (function web$WorkerGlobalScope$ononline(this$){
return this$.ononline();
});
/**
 * Property.
 * 
 *   The ononline property of the `web.WorkerGlobalScope` interface
 *   an `web.EventHandler` to be called when the online event occurs
 *   bubbles through the `web.Worker`.
 * 
 *   `self.ononline = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/ononline`
 */
web.WorkerGlobalScope.set_ononline_BANG_ = (function web$WorkerGlobalScope$set_ononline_BANG_(this$,val){
return (this$["ononline"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the origin of the global scope, serialized as a string.
 * 
 *   `var myOrigin = self.origin; // or just origin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`
 */
web.WorkerGlobalScope.origin = (function web$WorkerGlobalScope$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the origin of the global scope, serialized as a string.
 * 
 *   `var myOrigin = self.origin; // or just origin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`
 */
web.WorkerGlobalScope.set_origin_BANG_ = (function web$WorkerGlobalScope$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
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
web.WorkerGlobalScope.performance = (function web$WorkerGlobalScope$performance(this$){
return this$.performance();
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
web.WorkerGlobalScope.self = (function web$WorkerGlobalScope$self(this$){
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
web.WorkerGlobalScope.set_self_BANG_ = (function web$WorkerGlobalScope$set_self_BANG_(this$,val){
return (this$["self"] = val);
});

//# sourceMappingURL=WorkerGlobalScope.js.map?rel=1565798840861
