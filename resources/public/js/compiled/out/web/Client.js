// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Client');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The postMessage() method of `web.Client` allows a service worker
 *   send a message to a client (a `web.Window`, `web.Worker`, or
 *   The message is received in the \"message\" event on `web.navigator.serviceWorker`.
 * 
 *   `Client.postMessage(message[, transfer]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage`
 */
web.Client.post_message = (function web$Client$post_message(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50090 = arguments.length;
var i__42557__auto___50091 = (0);
while(true){
if((i__42557__auto___50091 < len__42556__auto___50090)){
args__42563__auto__.push((arguments[i__42557__auto___50091]));

var G__50092 = (i__42557__auto___50091 + (1));
i__42557__auto___50091 = G__50092;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Client.post_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Client.post_message.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.postMessage,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Client.post_message.cljs$lang$maxFixedArity = (1);

web.Client.post_message.cljs$lang$applyTo = (function (seq50088){
var G__50089 = cljs.core.first.call(null,seq50088);
var seq50088__$1 = cljs.core.next.call(null,seq50088);
return web.Client.post_message.cljs$core$IFn$_invoke$arity$variadic(G__50089,seq50088__$1);
});

/**
 * Property.
 * 
 *   The frameType read-only property of the `web.Client` interface
 *   the type of browsing context of the current `web.Client`. This
 *   can be one of auxiliary, top-level, nested, or none.
 * 
 *   `var myFrameType = Client.frameType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`
 */
web.Client.frame_type = (function web$Client$frame_type(this$){
return this$.frameType();
});
/**
 * Property.
 * 
 *   The frameType read-only property of the `web.Client` interface
 *   the type of browsing context of the current `web.Client`. This
 *   can be one of auxiliary, top-level, nested, or none.
 * 
 *   `var myFrameType = Client.frameType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`
 */
web.Client.set_frame_type_BANG_ = (function web$Client$set_frame_type_BANG_(this$,val){
return (this$["frameType"] = val);
});
/**
 * Property.
 * 
 *   The id read-only property of the `web.Client` interface returns
 *   universally unique identifier of the `web.Client` object.
 * 
 *   `var clientId = Client.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`
 */
web.Client.id = (function web$Client$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The id read-only property of the `web.Client` interface returns
 *   universally unique identifier of the `web.Client` object.
 * 
 *   `var clientId = Client.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`
 */
web.Client.set_id_BANG_ = (function web$Client$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Client` interface indicates
 *   type of client the service worker is controlling.
 * 
 *   `var myClientType = Client.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`
 */
web.Client.type = (function web$Client$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Client` interface indicates
 *   type of client the service worker is controlling.
 * 
 *   `var myClientType = Client.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`
 */
web.Client.set_type_BANG_ = (function web$Client$set_type_BANG_(this$,val){
return (this$["type"] = val);
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Client` interface returns
 *   URL of the current service worker client.
 * 
 *   `var clientUrl = Client.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`
 */
web.Client.url = (function web$Client$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Client` interface returns
 *   URL of the current service worker client.
 * 
 *   `var clientUrl = Client.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`
 */
web.Client.set_url_BANG_ = (function web$Client$set_url_BANG_(this$,val){
return (this$["url"] = val);
});

//# sourceMappingURL=Client.js.map?rel=1565798835863
