// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PushManager');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The PushManager.getSubscription() method of the `web.PushManager`
 *   retrieves an existing push subscription.
 * 
 *   `​PushManager.getSubscription().then(function(pushSubscription) { ... } );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/getSubscription`
 */
web.PushManager.get_subscription = (function web$PushManager$get_subscription(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52308 = arguments.length;
var i__42557__auto___52309 = (0);
while(true){
if((i__42557__auto___52309 < len__42556__auto___52308)){
args__42563__auto__.push((arguments[i__42557__auto___52309]));

var G__52310 = (i__42557__auto___52309 + (1));
i__42557__auto___52309 = G__52310;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PushManager.get_subscription.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PushManager.get_subscription.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getSubscription,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PushManager.get_subscription.cljs$lang$maxFixedArity = (1);

web.PushManager.get_subscription.cljs$lang$applyTo = (function (seq52306){
var G__52307 = cljs.core.first.call(null,seq52306);
var seq52306__$1 = cljs.core.next.call(null,seq52306);
return web.PushManager.get_subscription.cljs$core$IFn$_invoke$arity$variadic(G__52307,seq52306__$1);
});

/**
 * Method.
 * 
 *   The PushManager.hasPermission() method of the `web.PushManager`
 *   returns a `web.Promise` that resolves to the PushPermissionStatus
 *   the requesting webapp, which will be one of granted, denied,
 *   default.
 * 
 *   `​PushManager.hasPermission().then(function(pushPermissionStatus) { ... } );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/hasPermission`
 */
web.PushManager.has_permission = (function web$PushManager$has_permission(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52313 = arguments.length;
var i__42557__auto___52314 = (0);
while(true){
if((i__42557__auto___52314 < len__42556__auto___52313)){
args__42563__auto__.push((arguments[i__42557__auto___52314]));

var G__52315 = (i__42557__auto___52314 + (1));
i__42557__auto___52314 = G__52315;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PushManager.has_permission.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PushManager.has_permission.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.hasPermission,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PushManager.has_permission.cljs$lang$maxFixedArity = (1);

web.PushManager.has_permission.cljs$lang$applyTo = (function (seq52311){
var G__52312 = cljs.core.first.call(null,seq52311);
var seq52311__$1 = cljs.core.next.call(null,seq52311);
return web.PushManager.has_permission.cljs$core$IFn$_invoke$arity$variadic(G__52312,seq52311__$1);
});

/**
 * Method.
 * 
 *   The permissionState() method of the `web.PushManager` interface
 *   a `web.Promise` that resolves to a `dom.DOMString` indicating
 *   permission state of the push manager. Possible values are 'prompt',
 *   or 'granted'.
 * 
 *   `PushManager.permissionState(options).then(function(PushMessagingState) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/permissionState`
 */
web.PushManager.permission_state = (function web$PushManager$permission_state(this$,options){
return this$.permissionState(options);
});
/**
 * Method.
 * 
 *   The register method is used to ask the system to request a new
 *   for notifications. This method has been superceded by `web.PushManager.subscribe()`.
 * 
 *   `var request = navigator.push.register();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/register`
 */
web.PushManager.register = (function web$PushManager$register(this$){
return this$.register();
});
/**
 * Method.
 * 
 *   The registrations method is used to ask the system about existing
 *   endpoint registrations.
 * 
 *   `var request = navigator.push.registrations();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/registrations`
 */
web.PushManager.registrations = (function web$PushManager$registrations(this$){
return this$.registrations();
});
/**
 * Method.
 * 
 *   The subscribe() method of the `web.PushManager` interface subscribes
 *   a push service.
 * 
 *   `​PushManager.subscribe(options).then(function(pushSubscription) { ... } );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe`
 */
web.PushManager.subscribe = (function web$PushManager$subscribe(this$,options){
return this$.subscribe(options);
});
/**
 * Method.
 * 
 *   The unregister() method was used to ask the system to unregister
 *   delete the specified endpoint. In the updated API, a subscription
 *   can be unregistered via the `web.PushSubscription.unsubscribe()`
 * 
 *   `var request = navigator.push.unregister(pushEndpoint);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/unregister`
 */
web.PushManager.unregister = (function web$PushManager$unregister(this$,push_endpoint){
return this$.unregister(push_endpoint);
});
/**
 * Property.
 * 
 *   The supportedContentEncodings read-only property of the `web.PushManager`
 *   returns an array of supported content codings that can be used
 *   encrypt the payload of a push message.
 * 
 *   `var encodings[] = PushManager.supportedContentEncodings`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/supportedContentEncodings`
 */
web.PushManager.supported_content_encodings = (function web$PushManager$supported_content_encodings(this$){
return this$.supportedContentEncodings();
});
/**
 * Property.
 * 
 *   The supportedContentEncodings read-only property of the `web.PushManager`
 *   returns an array of supported content codings that can be used
 *   encrypt the payload of a push message.
 * 
 *   `var encodings[] = PushManager.supportedContentEncodings`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/supportedContentEncodings`
 */
web.PushManager.set_supported_content_encodings_BANG_ = (function web$PushManager$set_supported_content_encodings_BANG_(this$,val){
return (this$["supportedContentEncodings"] = val);
});

//# sourceMappingURL=PushManager.js.map?rel=1565798851173
