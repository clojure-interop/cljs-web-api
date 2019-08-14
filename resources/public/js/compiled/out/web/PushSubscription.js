// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PushSubscription');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getKey() method of the `web.PushSubscription` interface returns
 *   `web.ArrayBuffer` representing a client public key, which can
 *   be sent to a server and used in encrypting push message data.
 * 
 *   `​var key = subscription.getKey(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/getKey`
 */
web.PushSubscription.get_key = (function web$PushSubscription$get_key(this$,name){
return this$.getKey(name);
});
/**
 * Method.
 * 
 *   The toJSON() method of the `web.PushSubscription` interface is
 *   standard serializer: it returns a JSON representation of the
 *   properties, providing a useful shortcut.
 * 
 *   `​mySubscription = subscription.toJSON()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/toJSON`
 */
web.PushSubscription.to_json = (function web$PushSubscription$to_json(this$){
return this$.toJSON();
});
/**
 * Method.
 * 
 *   The unsubscribe() method of the `web.PushSubscription` interface
 *   a `web.Promise` that resolves to a `web.Boolean` when the current
 *   is successfully unsubscribed.
 * 
 *   `​PushSubscription.unsubscribe().then(function(Boolean) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/unsubscribe`
 */
web.PushSubscription.unsubscribe = (function web$PushSubscription$unsubscribe(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52937 = arguments.length;
var i__42557__auto___52938 = (0);
while(true){
if((i__42557__auto___52938 < len__42556__auto___52937)){
args__42563__auto__.push((arguments[i__42557__auto___52938]));

var G__52939 = (i__42557__auto___52938 + (1));
i__42557__auto___52938 = G__52939;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PushSubscription.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PushSubscription.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.unsubscribe,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PushSubscription.unsubscribe.cljs$lang$maxFixedArity = (1);

web.PushSubscription.unsubscribe.cljs$lang$applyTo = (function (seq52935){
var G__52936 = cljs.core.first.call(null,seq52935);
var seq52935__$1 = cljs.core.next.call(null,seq52935);
return web.PushSubscription.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__52936,seq52935__$1);
});

/**
 * Property.
 * 
 *   The endpoint read-only property of the `web.PushSubscription`
 *   returns a `web.USVString` containing the endpoint associated
 *   the push subscription.
 * 
 *   `var myEnd = pushSubscription.endpoint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/endpoint`
 */
web.PushSubscription.endpoint = (function web$PushSubscription$endpoint(this$){
return this$.endpoint();
});
/**
 * Property.
 * 
 *   The endpoint read-only property of the `web.PushSubscription`
 *   returns a `web.USVString` containing the endpoint associated
 *   the push subscription.
 * 
 *   `var myEnd = pushSubscription.endpoint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/endpoint`
 */
web.PushSubscription.set_endpoint_BANG_ = (function web$PushSubscription$set_endpoint_BANG_(this$,val){
return (this$["endpoint"] = val);
});
/**
 * Property.
 * 
 *   The expirationTime read-only property of the `web.PushSubscription`
 *   returns a `dom.DOMHighResTimeStamp` of the subscription expiration
 *   associated with the push subscription, if there is one, or null
 * 
 *   `var expirationTime = pushSubscription.expirationTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/expirationTime`
 */
web.PushSubscription.expiration_time = (function web$PushSubscription$expiration_time(this$){
return this$.expirationTime();
});
/**
 * Property.
 * 
 *   The expirationTime read-only property of the `web.PushSubscription`
 *   returns a `dom.DOMHighResTimeStamp` of the subscription expiration
 *   associated with the push subscription, if there is one, or null
 * 
 *   `var expirationTime = pushSubscription.expirationTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/expirationTime`
 */
web.PushSubscription.set_expiration_time_BANG_ = (function web$PushSubscription$set_expiration_time_BANG_(this$,val){
return (this$["expirationTime"] = val);
});
/**
 * Property.
 * 
 *   The options read-only property of the `web.PushSubscription`
 *   is an object containing containing the options used to create
 *   subscription.
 * 
 *   `var options = PushSubscription.options`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/options`
 */
web.PushSubscription.options = (function web$PushSubscription$options(this$){
return this$.options();
});
/**
 * Property.
 * 
 *   The options read-only property of the `web.PushSubscription`
 *   is an object containing containing the options used to create
 *   subscription.
 * 
 *   `var options = PushSubscription.options`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/options`
 */
web.PushSubscription.set_options_BANG_ = (function web$PushSubscription$set_options_BANG_(this$,val){
return (this$["options"] = val);
});
/**
 * Property.
 * 
 *   The endpoint read-only property of the `web.PushSubscription`
 *   returns a `dom.DOMString` containing the subscription ID associated
 *   the push subscription.
 * 
 *   `var subId = pushSubscription.subscriptionId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/subscriptionId`
 */
web.PushSubscription.subscription_id = (function web$PushSubscription$subscription_id(this$){
return this$.subscriptionId();
});
/**
 * Property.
 * 
 *   The endpoint read-only property of the `web.PushSubscription`
 *   returns a `dom.DOMString` containing the subscription ID associated
 *   the push subscription.
 * 
 *   `var subId = pushSubscription.subscriptionId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/subscriptionId`
 */
web.PushSubscription.set_subscription_id_BANG_ = (function web$PushSubscription$set_subscription_id_BANG_(this$,val){
return (this$["subscriptionId"] = val);
});

//# sourceMappingURL=PushSubscription.js.map?rel=1565798860674
