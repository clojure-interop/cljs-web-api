// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PresentationRequest');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PresentationRequest constructor creates a new `web.PresentationRequest` object which creates a new PresentationRequest.
 * 
 *   url or urls[]
 *   A URL or array of URLs that are possible URLs used to create, or reconnect, a presentation for the PresentationRequest instance.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/PresentationRequest`
 */
web.PresentationRequest.constructor$ = PresentationRequest;
/**
 * Method.
 * 
 *   The start() property of the `web.PresentationRequest` interface
 *   a `web.Promise` that resolves with a `web.PresentationConnection`
 *   the user agent prompts the user to select a display and grant
 *   to use that display.
 * 
 *   `var promise = presentationRequest.start()
 *   promise.then(function(PresentationConnection) { ... })
 *   .catch(function(error) { ...})`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/start`
 */
web.PresentationRequest.start = (function web$PresentationRequest$start(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50503 = arguments.length;
var i__42557__auto___50504 = (0);
while(true){
if((i__42557__auto___50504 < len__42556__auto___50503)){
args__42563__auto__.push((arguments[i__42557__auto___50504]));

var G__50505 = (i__42557__auto___50504 + (1));
i__42557__auto___50504 = G__50505;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PresentationRequest.start.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PresentationRequest.start.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.start,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PresentationRequest.start.cljs$lang$maxFixedArity = (1);

web.PresentationRequest.start.cljs$lang$applyTo = (function (seq50501){
var G__50502 = cljs.core.first.call(null,seq50501);
var seq50501__$1 = cljs.core.next.call(null,seq50501);
return web.PresentationRequest.start.cljs$core$IFn$_invoke$arity$variadic(G__50502,seq50501__$1);
});

/**
 * Method.
 * 
 *   When the reconnect(presentationId) method is called on a PresentationRequest
 *   the user agent MUST run the following steps to reconnect to a
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/reconnect`
 */
web.PresentationRequest.reconnect = (function web$PresentationRequest$reconnect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50508 = arguments.length;
var i__42557__auto___50509 = (0);
while(true){
if((i__42557__auto___50509 < len__42556__auto___50508)){
args__42563__auto__.push((arguments[i__42557__auto___50509]));

var G__50510 = (i__42557__auto___50509 + (1));
i__42557__auto___50509 = G__50510;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PresentationRequest.reconnect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PresentationRequest.reconnect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.reconnect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PresentationRequest.reconnect.cljs$lang$maxFixedArity = (1);

web.PresentationRequest.reconnect.cljs$lang$applyTo = (function (seq50506){
var G__50507 = cljs.core.first.call(null,seq50506);
var seq50506__$1 = cljs.core.next.call(null,seq50506);
return web.PresentationRequest.reconnect.cljs$core$IFn$_invoke$arity$variadic(G__50507,seq50506__$1);
});

/**
 * Method.
 * 
 *   When the getAvailability() method is called, the user agent MUST
 *   the following steps:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/getAvailability`
 */
web.PresentationRequest.get_availability = (function web$PresentationRequest$get_availability(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50513 = arguments.length;
var i__42557__auto___50514 = (0);
while(true){
if((i__42557__auto___50514 < len__42556__auto___50513)){
args__42563__auto__.push((arguments[i__42557__auto___50514]));

var G__50515 = (i__42557__auto___50514 + (1));
i__42557__auto___50514 = G__50515;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PresentationRequest.get_availability.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PresentationRequest.get_availability.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAvailability,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PresentationRequest.get_availability.cljs$lang$maxFixedArity = (1);

web.PresentationRequest.get_availability.cljs$lang$applyTo = (function (seq50511){
var G__50512 = cljs.core.first.call(null,seq50511);
var seq50511__$1 = cljs.core.next.call(null,seq50511);
return web.PresentationRequest.get_availability.cljs$core$IFn$_invoke$arity$variadic(G__50512,seq50511__$1);
});

/**
 * Property.
 * 
 *   The following are event handlers (and their corresponding event
 *   event types) which must be supported, as event handler IDL attributes,
 *   objects implementing the PresentationRequest interface:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/onconnectionavailable`
 */
web.PresentationRequest.onconnectionavailable = (function web$PresentationRequest$onconnectionavailable(this$){
return this$.onconnectionavailable();
});
/**
 * Property.
 * 
 *   The following are event handlers (and their corresponding event
 *   event types) which must be supported, as event handler IDL attributes,
 *   objects implementing the PresentationRequest interface:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/onconnectionavailable`
 */
web.PresentationRequest.set_onconnectionavailable_BANG_ = (function web$PresentationRequest$set_onconnectionavailable_BANG_(this$,val){
return (this$["onconnectionavailable"] = val);
});

//# sourceMappingURL=PresentationRequest.js.map?rel=1565798840057
