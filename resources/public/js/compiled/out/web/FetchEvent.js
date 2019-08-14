// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FetchEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FetchEvent() constructor creates a new `web.FetchEvent` object.
 * 
 *   type
 *   The type of the Event.
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the event object. Options are as follows:
 * 
 *   request: The `web.Request` object that would have triggered the event handler.
 *   clientId: The `web.Client` that the current service worker is controlling. This property is not yet implemented in Chrome.
 *   isReload: A `web.Boolean` that signifies whether the page was reloaded or not when the event was dispatched. true if yes, and false if not. Typically, pressing the refresh button in a browser is a reload, while clicking a link and pressing the back button is not. If not present, it defaults to false.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/FetchEvent`
 */
web.FetchEvent.constructor$ = FetchEvent;
/**
 * Method.
 * 
 *   The respondWith() method of `web.FetchEvent` prevents the browser's
 *   fetch handling, and allows you to provide a promise for a `web.Response`
 * 
 *   `fetchEvent.respondWith(
 *   // Promise that resolves to a Response.
 *   ​)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith`
 */
web.FetchEvent.respond_with = (function web$FetchEvent$respond_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52962 = arguments.length;
var i__42557__auto___52963 = (0);
while(true){
if((i__42557__auto___52963 < len__42556__auto___52962)){
args__42563__auto__.push((arguments[i__42557__auto___52963]));

var G__52964 = (i__42557__auto___52963 + (1));
i__42557__auto___52963 = G__52964;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.FetchEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.FetchEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.respondWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.FetchEvent.respond_with.cljs$lang$maxFixedArity = (1);

web.FetchEvent.respond_with.cljs$lang$applyTo = (function (seq52960){
var G__52961 = cljs.core.first.call(null,seq52960);
var seq52960__$1 = cljs.core.next.call(null,seq52960);
return web.FetchEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic(G__52961,seq52960__$1);
});

/**
 * Method.
 * 
 *   The extendableEvent.waitUntil() method tells the event dispatcher
 *   work is ongoing. It can also be used to detect whether that work
 *   successful. In service workers, waitUntil() tells the browser
 *   work is ongoing until the promise settles, and it shouldn't terminate
 *   service worker if it wants that work to complete.
 * 
 *   `event.waitUntil(promise)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil`
 */
web.FetchEvent.wait_until = (function web$FetchEvent$wait_until(this$,promise){
return this$.waitUntil(promise);
});
/**
 * Property.
 * 
 *   The FetchEvent.client read-only property returns the `web.Client`
 *   the current service worker is controlling.
 * 
 *   `var myClient = FetchEvent.client;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/client`
 */
web.FetchEvent.client = (function web$FetchEvent$client(this$){
return this$.client();
});
/**
 * Property.
 * 
 *   The FetchEvent.client read-only property returns the `web.Client`
 *   the current service worker is controlling.
 * 
 *   `var myClient = FetchEvent.client;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/client`
 */
web.FetchEvent.set_client_BANG_ = (function web$FetchEvent$set_client_BANG_(this$,val){
return (this$["client"] = val);
});
/**
 * Property.
 * 
 *   The clientId read-only property of the `web.FetchEvent` returns
 *   id of the `web.Client` that the current service worker is controlling.
 * 
 *   `var myClientId = FetchEvent.clientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/clientId`
 */
web.FetchEvent.client_id = (function web$FetchEvent$client_id(this$){
return this$.clientId();
});
/**
 * Property.
 * 
 *   The clientId read-only property of the `web.FetchEvent` returns
 *   id of the `web.Client` that the current service worker is controlling.
 * 
 *   `var myClientId = FetchEvent.clientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/clientId`
 */
web.FetchEvent.set_client_id_BANG_ = (function web$FetchEvent$set_client_id_BANG_(this$,val){
return (this$["clientId"] = val);
});
/**
 * Property.
 * 
 *   The isReload read-only property of the `web.FetchEvent` interface
 *   true if the event was dispatched by the user attempting to reload
 *   page, and false otherwise. Pressing the refresh button is a reload
 *   clicking a link and pressing the back button is not.
 * 
 *   `var reloaded = FetchEvent.isReload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/isReload`
 */
web.FetchEvent.is_reload = (function web$FetchEvent$is_reload(this$){
return this$.isReload();
});
/**
 * Property.
 * 
 *   The isReload read-only property of the `web.FetchEvent` interface
 *   true if the event was dispatched by the user attempting to reload
 *   page, and false otherwise. Pressing the refresh button is a reload
 *   clicking a link and pressing the back button is not.
 * 
 *   `var reloaded = FetchEvent.isReload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/isReload`
 */
web.FetchEvent.set_is_reload_BANG_ = (function web$FetchEvent$set_is_reload_BANG_(this$,val){
return (this$["isReload"] = val);
});
/**
 * Property.
 * 
 *   The navigationPreload read-only property of the `web.FetchEvent`
 *   returns a `web.Promise` that resolves to the instance of `web.NavigationPreloadManager`
 *   with the current service worker registration.
 * 
 *   `var promise = fetchEvent.navigationPreload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/navigationPreload`
 */
web.FetchEvent.navigation_preload = (function web$FetchEvent$navigation_preload(this$){
return this$.navigationPreload();
});
/**
 * Property.
 * 
 *   The navigationPreload read-only property of the `web.FetchEvent`
 *   returns a `web.Promise` that resolves to the instance of `web.NavigationPreloadManager`
 *   with the current service worker registration.
 * 
 *   `var promise = fetchEvent.navigationPreload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/navigationPreload`
 */
web.FetchEvent.set_navigation_preload_BANG_ = (function web$FetchEvent$set_navigation_preload_BANG_(this$,val){
return (this$["navigationPreload"] = val);
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`
 */
web.FetchEvent.preload_request = (function web$FetchEvent$preload_request(this$){
return this$.PreloadRequest();
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`
 */
web.FetchEvent.set_preload_request_BANG_ = (function web$FetchEvent$set_preload_request_BANG_(this$,val){
return (this$["PreloadRequest"] = val);
});
/**
 * Property.
 * 
 *   The preloadResponse read-only property of the `web.FetchEvent`
 *   returns a `web.Promise` that resolves to the navigation preload
 *   if navigation preload was triggered or undefined otherwise.
 * 
 *   `var expectedResponse = FetchEvent.preloadResponse;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadResponse`
 */
web.FetchEvent.preload_response = (function web$FetchEvent$preload_response(this$){
return this$.PreloadResponse();
});
/**
 * Property.
 * 
 *   The preloadResponse read-only property of the `web.FetchEvent`
 *   returns a `web.Promise` that resolves to the navigation preload
 *   if navigation preload was triggered or undefined otherwise.
 * 
 *   `var expectedResponse = FetchEvent.preloadResponse;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadResponse`
 */
web.FetchEvent.set_preload_response_BANG_ = (function web$FetchEvent$set_preload_response_BANG_(this$,val){
return (this$["PreloadResponse"] = val);
});
/**
 * Property.
 * 
 *   The replacesClientId read-only property of the `web.FetchEvent`
 *   is the `web.id` of the `web.client` that is being replaced during
 *   page navigation.
 * 
 *   `var myReplacedClientId = FetchEvent.replacesClientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/replacesClientId`
 */
web.FetchEvent.replaces_client_id = (function web$FetchEvent$replaces_client_id(this$){
return this$.replacesClientId();
});
/**
 * Property.
 * 
 *   The replacesClientId read-only property of the `web.FetchEvent`
 *   is the `web.id` of the `web.client` that is being replaced during
 *   page navigation.
 * 
 *   `var myReplacedClientId = FetchEvent.replacesClientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/replacesClientId`
 */
web.FetchEvent.set_replaces_client_id_BANG_ = (function web$FetchEvent$set_replaces_client_id_BANG_(this$,val){
return (this$["replacesClientId"] = val);
});
/**
 * Property.
 * 
 *   The request read-only property of the `web.FetchEvent` interface
 *   the `web.Request` that triggered the event handler.
 * 
 *   `var recentRequest = FetchEvent.request;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request`
 */
web.FetchEvent.request = (function web$FetchEvent$request(this$){
return this$.request();
});
/**
 * Property.
 * 
 *   The request read-only property of the `web.FetchEvent` interface
 *   the `web.Request` that triggered the event handler.
 * 
 *   `var recentRequest = FetchEvent.request;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request`
 */
web.FetchEvent.set_request_BANG_ = (function web$FetchEvent$set_request_BANG_(this$,val){
return (this$["request"] = val);
});
/**
 * Property.
 * 
 *   The resultingClientId read-only property of the `web.FetchEvent`
 *   is the `web.id` of the `web.client` that replaces the previous
 *   during a page navigation.
 * 
 *   `var myResultingClientId = FetchEvent.resultingClientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId`
 */
web.FetchEvent.resulting_client_id = (function web$FetchEvent$resulting_client_id(this$){
return this$.resultingClientId();
});
/**
 * Property.
 * 
 *   The resultingClientId read-only property of the `web.FetchEvent`
 *   is the `web.id` of the `web.client` that replaces the previous
 *   during a page navigation.
 * 
 *   `var myResultingClientId = FetchEvent.resultingClientId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId`
 */
web.FetchEvent.set_resulting_client_id_BANG_ = (function web$FetchEvent$set_resulting_client_id_BANG_(this$,val){
return (this$["resultingClientId"] = val);
});

//# sourceMappingURL=FetchEvent.js.map?rel=1565798860998
