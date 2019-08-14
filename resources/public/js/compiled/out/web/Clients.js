// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Clients');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The claim() method of the `web.Clients` allows an active service
 *   to set itself as the `web.controller` for all clients within
 *   `web.scope`. This triggers a \"controllerchange\" event on `web.navigator.serviceWorker`
 *   any clients that become controlled by this service worker.
 * 
 *   `await clients.claim();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim`
 */
web.Clients.claim = (function web$Clients$claim(this$){
return this$.claim();
});
/**
 * Method.
 * 
 *   The get() method of the `web.Clients` interface gets a service
 *   client matching a given id and returns it in a `web.Promise`.
 * 
 *   `self.clients.get(id).then(function(client) {
 *   // do something with your returned client
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/get`
 */
web.Clients.get = (function web$Clients$get(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43086 = arguments.length;
var i__42557__auto___43087 = (0);
while(true){
if((i__42557__auto___43087 < len__42556__auto___43086)){
args__42563__auto__.push((arguments[i__42557__auto___43087]));

var G__43088 = (i__42557__auto___43087 + (1));
i__42557__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Clients.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Clients.get.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.get,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Clients.get.cljs$lang$maxFixedArity = (1);

web.Clients.get.cljs$lang$applyTo = (function (seq43084){
var G__43085 = cljs.core.first.call(null,seq43084);
var seq43084__$1 = cljs.core.next.call(null,seq43084);
return web.Clients.get.cljs$core$IFn$_invoke$arity$variadic(G__43085,seq43084__$1);
});

/**
 * Method.
 * 
 *   The matchAll() method of the `web.Clients` interface returns
 *   Promise for a list of service worker `web.Client` objects. Include
 *   options parameter to return all service worker clients whose
 *   is the same as the associated service worker's origin. If options
 *   not included, the method returns only the service worker clients
 *   by the service worker.
 * 
 *   `ServiceWorkerClients.matchAll(options).then(function(clients) {
 *   // do something with your clients list
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll`
 */
web.Clients.match_all = (function web$Clients$match_all(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43091 = arguments.length;
var i__42557__auto___43092 = (0);
while(true){
if((i__42557__auto___43092 < len__42556__auto___43091)){
args__42563__auto__.push((arguments[i__42557__auto___43092]));

var G__43093 = (i__42557__auto___43092 + (1));
i__42557__auto___43092 = G__43093;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Clients.match_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Clients.match_all.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.matchAll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Clients.match_all.cljs$lang$maxFixedArity = (1);

web.Clients.match_all.cljs$lang$applyTo = (function (seq43089){
var G__43090 = cljs.core.first.call(null,seq43089);
var seq43089__$1 = cljs.core.next.call(null,seq43089);
return web.Clients.match_all.cljs$core$IFn$_invoke$arity$variadic(G__43090,seq43089__$1);
});

/**
 * Method.
 * 
 *   The openWindow() method of the `web.Clients` interface creates
 *   new top level browsing context and loads a given URL. If the
 *   script doesn't have permission to show popups, openWindow() will
 *   an InvalidAccessError.
 * 
 *   `ServiceWorkerClients.openWindow(url).then(function(WindowClient) {
 *   // Do something with your WindowClient
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow`
 */
web.Clients.open_window = (function web$Clients$open_window(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43096 = arguments.length;
var i__42557__auto___43097 = (0);
while(true){
if((i__42557__auto___43097 < len__42556__auto___43096)){
args__42563__auto__.push((arguments[i__42557__auto___43097]));

var G__43098 = (i__42557__auto___43097 + (1));
i__42557__auto___43097 = G__43098;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Clients.open_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Clients.open_window.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openWindow,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Clients.open_window.cljs$lang$maxFixedArity = (1);

web.Clients.open_window.cljs$lang$applyTo = (function (seq43094){
var G__43095 = cljs.core.first.call(null,seq43094);
var seq43094__$1 = cljs.core.next.call(null,seq43094);
return web.Clients.open_window.cljs$core$IFn$_invoke$arity$variadic(G__43095,seq43094__$1);
});


//# sourceMappingURL=Clients.js.map?rel=1565798803590
