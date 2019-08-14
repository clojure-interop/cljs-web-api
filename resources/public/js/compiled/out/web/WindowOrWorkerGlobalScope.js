// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WindowOrWorkerGlobalScope');
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
web.WindowOrWorkerGlobalScope.atob = (function web$WindowOrWorkerGlobalScope$atob(this$,encoded_data){
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
web.WindowOrWorkerGlobalScope.btoa = (function web$WindowOrWorkerGlobalScope$btoa(this$,string_to_encode){
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
web.WindowOrWorkerGlobalScope.clear_interval = (function web$WindowOrWorkerGlobalScope$clear_interval(this$,interval_id){
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
web.WindowOrWorkerGlobalScope.clear_timeout = (function web$WindowOrWorkerGlobalScope$clear_timeout(this$,timeout_id){
return this$.clearTimeout(timeout_id);
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
web.WindowOrWorkerGlobalScope.create_image_bitmap = (function web$WindowOrWorkerGlobalScope$create_image_bitmap(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52851 = arguments.length;
var i__42557__auto___52852 = (0);
while(true){
if((i__42557__auto___52852 < len__42556__auto___52851)){
args__42563__auto__.push((arguments[i__42557__auto___52852]));

var G__52853 = (i__42557__auto___52852 + (1));
i__42557__auto___52852 = G__52853;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WindowOrWorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WindowOrWorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createImageBitmap,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WindowOrWorkerGlobalScope.create_image_bitmap.cljs$lang$maxFixedArity = (1);

web.WindowOrWorkerGlobalScope.create_image_bitmap.cljs$lang$applyTo = (function (seq52849){
var G__52850 = cljs.core.first.call(null,seq52849);
var seq52849__$1 = cljs.core.next.call(null,seq52849);
return web.WindowOrWorkerGlobalScope.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic(G__52850,seq52849__$1);
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
web.WindowOrWorkerGlobalScope.fetch = (function web$WindowOrWorkerGlobalScope$fetch(this$,resource,init){
return this$.fetch(resource,init);
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
web.WindowOrWorkerGlobalScope.queue_microtask = (function web$WindowOrWorkerGlobalScope$queue_microtask(this$,function$){
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
web.WindowOrWorkerGlobalScope.set_interval = (function web$WindowOrWorkerGlobalScope$set_interval(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52856 = arguments.length;
var i__42557__auto___52857 = (0);
while(true){
if((i__42557__auto___52857 < len__42556__auto___52856)){
args__42563__auto__.push((arguments[i__42557__auto___52857]));

var G__52858 = (i__42557__auto___52857 + (1));
i__42557__auto___52857 = G__52858;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WindowOrWorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WindowOrWorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setInterval,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WindowOrWorkerGlobalScope.set_interval.cljs$lang$maxFixedArity = (1);

web.WindowOrWorkerGlobalScope.set_interval.cljs$lang$applyTo = (function (seq52854){
var G__52855 = cljs.core.first.call(null,seq52854);
var seq52854__$1 = cljs.core.next.call(null,seq52854);
return web.WindowOrWorkerGlobalScope.set_interval.cljs$core$IFn$_invoke$arity$variadic(G__52855,seq52854__$1);
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
web.WindowOrWorkerGlobalScope.set_timeout = (function web$WindowOrWorkerGlobalScope$set_timeout(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52861 = arguments.length;
var i__42557__auto___52862 = (0);
while(true){
if((i__42557__auto___52862 < len__42556__auto___52861)){
args__42563__auto__.push((arguments[i__42557__auto___52862]));

var G__52863 = (i__42557__auto___52862 + (1));
i__42557__auto___52862 = G__52863;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WindowOrWorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WindowOrWorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setTimeout,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WindowOrWorkerGlobalScope.set_timeout.cljs$lang$maxFixedArity = (1);

web.WindowOrWorkerGlobalScope.set_timeout.cljs$lang$applyTo = (function (seq52859){
var G__52860 = cljs.core.first.call(null,seq52859);
var seq52859__$1 = cljs.core.next.call(null,seq52859);
return web.WindowOrWorkerGlobalScope.set_timeout.cljs$core$IFn$_invoke$arity$variadic(G__52860,seq52859__$1);
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
web.WindowOrWorkerGlobalScope.caches = (function web$WindowOrWorkerGlobalScope$caches(this$){
return this$.caches();
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
web.WindowOrWorkerGlobalScope.indexed_db = (function web$WindowOrWorkerGlobalScope$indexed_db(this$){
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
web.WindowOrWorkerGlobalScope.is_secure_context = (function web$WindowOrWorkerGlobalScope$is_secure_context(this$){
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
web.WindowOrWorkerGlobalScope.set_is_secure_context_BANG_ = (function web$WindowOrWorkerGlobalScope$set_is_secure_context_BANG_(this$,val){
return (this$["isSecureContext"] = val);
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
web.WindowOrWorkerGlobalScope.origin = (function web$WindowOrWorkerGlobalScope$origin(this$){
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
web.WindowOrWorkerGlobalScope.set_origin_BANG_ = (function web$WindowOrWorkerGlobalScope$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
});

//# sourceMappingURL=WindowOrWorkerGlobalScope.js.map?rel=1565798859989
