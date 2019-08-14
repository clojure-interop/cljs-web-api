// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MerchantValidationEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MerchantValidationEvent() constructor creates a new `web.MerchantValidationEvent` object. You should not have to create these events yourself; instead, just handle the merchantvalidation event.
 * 
 *   type
 *   A `dom.DOMString` which must be merchantvalidation, the only type of event which uses the MerchantValidationEvent interface.
 *   options Optional
 * 
 *   An optional dictionary which may contain zero or more of the following properties:
 * 
 * 
 *   methodName Optional
 *   A `dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
 *   validationURL Optional
 *   The URL from which to retrieve payment handler specific verification information used to validate the merchant. This is an empty string by default.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent`
 */
web.MerchantValidationEvent.constructor$ = MerchantValidationEvent;
/**
 * Method.
 * 
 *   The `web.MerchantValidationEvent` method complete() takes merchant-specific
 *   previously received from the `web.validationURL` and uses it
 *   validate the merchant.
 * 
 *   `merchantValidationEvent.complete(validationData);
 *   merchantValidationEvent.complete(merchantSessionPromise);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/complete`
 */
web.MerchantValidationEvent.complete = (function web$MerchantValidationEvent$complete(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43356 = arguments.length;
var i__42557__auto___43357 = (0);
while(true){
if((i__42557__auto___43357 < len__42556__auto___43356)){
args__42563__auto__.push((arguments[i__42557__auto___43357]));

var G__43358 = (i__42557__auto___43357 + (1));
i__42557__auto___43357 = G__43358;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.MerchantValidationEvent.complete.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.MerchantValidationEvent.complete.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.complete,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.MerchantValidationEvent.complete.cljs$lang$maxFixedArity = (1);

web.MerchantValidationEvent.complete.cljs$lang$applyTo = (function (seq43354){
var G__43355 = cljs.core.first.call(null,seq43354);
var seq43354__$1 = cljs.core.next.call(null,seq43354);
return web.MerchantValidationEvent.complete.cljs$core$IFn$_invoke$arity$variadic(G__43355,seq43354__$1);
});

/**
 * Property.
 * 
 *   The `web.MerchantValidationEvent` property methodName is a read-only
 *   which returns a string indicating the payment method identifier
 *   represents the payment handler that requires merchant validation.
 * 
 *   `methodID = merchantValidationEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`
 */
web.MerchantValidationEvent.method_name = (function web$MerchantValidationEvent$method_name(this$){
return this$.methodName();
});
/**
 * Property.
 * 
 *   The `web.MerchantValidationEvent` property methodName is a read-only
 *   which returns a string indicating the payment method identifier
 *   represents the payment handler that requires merchant validation.
 * 
 *   `methodID = merchantValidationEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`
 */
web.MerchantValidationEvent.set_method_name_BANG_ = (function web$MerchantValidationEvent$set_method_name_BANG_(this$,val){
return (this$["methodName"] = val);
});
/**
 * Property.
 * 
 *   The `web.MerchantValidationEvent` property validationURL is a
 *   string value providing the URL from which to fetch the payment
 *   data needed to validate the merchant.
 * 
 *   `validationURL = merchantValidationEvent.validationURL;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`
 */
web.MerchantValidationEvent.validation_url = (function web$MerchantValidationEvent$validation_url(this$){
return this$.validationURL();
});
/**
 * Property.
 * 
 *   The `web.MerchantValidationEvent` property validationURL is a
 *   string value providing the URL from which to fetch the payment
 *   data needed to validate the merchant.
 * 
 *   `validationURL = merchantValidationEvent.validationURL;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`
 */
web.MerchantValidationEvent.set_validation_url_BANG_ = (function web$MerchantValidationEvent$set_validation_url_BANG_(this$,val){
return (this$["validationURL"] = val);
});

//# sourceMappingURL=MerchantValidationEvent.js.map?rel=1565798805836
