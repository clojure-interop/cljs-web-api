// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentRequestEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PaymentRequestEvent constructor creates a new `payment.PaymentRequestEvent` object which is a constructor for a `payment.PaymentRequestEvent` which is the object passed to a payment handler when a `payment.PaymentRequest` is made..
 * 
 *   type
 *   Must always be 'PaymentRequest'.
 *   options Optional
 *   Options are as follows:
 * 
 *   instrumentKey: A `payment.PaymentInstrument` object reflecting the payment instrument selected by the user or an empty string if the user has not registered or chosen a payment instrument.
 *   methodData: An array of `payment.PaymentMethodData` objects containing payment method identifers for the payment methods that the web site accepts and any associated payment method specific data.
 *   modifiers: An array of objects containing changes to payment details.
 *   paymentRequestId: The ID of the `payment.PaymentRequest` object.
 *   paymentRequestOrigin: The origin where the `payment.PaymentRequest` object was initialized.
 *   topLeveOrigin: The top-level origin where the `payment.PaymentRequest` object was initialized.
 *   total: The total amount being requested for payment.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent`
 */
payment.PaymentRequestEvent.constructor$ = PaymentRequestEvent;
/**
 * Method.
 * 
 *   The openWindow property of the `payment.PaymentRequestEvent`
 *   opens the specified URL in a new window, if and only if the given
 *   is on the same origin as the calling page. It returns a `web.Promise`
 *   resolves with a reference to a `web.WindowClient`.
 * 
 *   `var aPromise = paymentRequestEvent.openWindow(url)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/openWindow`
 */
payment.PaymentRequestEvent.open_window = (function payment$PaymentRequestEvent$open_window(this$,url){
return this$.openWindow(url);
});
/**
 * Method.
 * 
 *   The respondWith property of the `payment.PaymentRequestEvent`
 *   prevents the default event handling and allows you to provide
 *   `web.Promise` for a `payment.PaymentResponse` object yourself.
 * 
 *   `paymentRequestEvent.respondWith(
 *   // Promise that resolves with a PaymentResponse.
 *   )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/respondWith`
 */
payment.PaymentRequestEvent.respond_with = (function payment$PaymentRequestEvent$respond_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43913 = arguments.length;
var i__42557__auto___43914 = (0);
while(true){
if((i__42557__auto___43914 < len__42556__auto___43913)){
args__42563__auto__.push((arguments[i__42557__auto___43914]));

var G__43915 = (i__42557__auto___43914 + (1));
i__42557__auto___43914 = G__43915;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return payment.PaymentRequestEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

payment.PaymentRequestEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.respondWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

payment.PaymentRequestEvent.respond_with.cljs$lang$maxFixedArity = (1);

payment.PaymentRequestEvent.respond_with.cljs$lang$applyTo = (function (seq43911){
var G__43912 = cljs.core.first.call(null,seq43911);
var seq43911__$1 = cljs.core.next.call(null,seq43911);
return payment.PaymentRequestEvent.respond_with.cljs$core$IFn$_invoke$arity$variadic(G__43912,seq43911__$1);
});

/**
 * Property.
 * 
 *   The paymentRequestId read-only property of the `payment.PaymentRequestEvent`
 *   returns the ID of the `payment.PaymentRequest` object.
 * 
 *   `var id = paymentRequestEvent.paymentRequestId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestId`
 */
payment.PaymentRequestEvent.payment_request_id = (function payment$PaymentRequestEvent$payment_request_id(this$){
return this$.paymentRequestId();
});
/**
 * Property.
 * 
 *   The paymentRequestId read-only property of the `payment.PaymentRequestEvent`
 *   returns the ID of the `payment.PaymentRequest` object.
 * 
 *   `var id = paymentRequestEvent.paymentRequestId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestId`
 */
payment.PaymentRequestEvent.set_payment_request_id_BANG_ = (function payment$PaymentRequestEvent$set_payment_request_id_BANG_(this$,val){
return (this$["paymentRequestId"] = val);
});
/**
 * Property.
 * 
 *   The paymentRequestOrigin read-only property of the `payment.PaymentRequestEvent`
 *   returns the origin where the `payment.PaymentRequest` object
 *   initialized.
 * 
 *   `var aUsvString = paymentRequestEvent.paymentRequestOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin`
 */
payment.PaymentRequestEvent.payment_request_origin = (function payment$PaymentRequestEvent$payment_request_origin(this$){
return this$.paymentRequestOrigin();
});
/**
 * Property.
 * 
 *   The paymentRequestOrigin read-only property of the `payment.PaymentRequestEvent`
 *   returns the origin where the `payment.PaymentRequest` object
 *   initialized.
 * 
 *   `var aUsvString = paymentRequestEvent.paymentRequestOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin`
 */
payment.PaymentRequestEvent.set_payment_request_origin_BANG_ = (function payment$PaymentRequestEvent$set_payment_request_origin_BANG_(this$,val){
return (this$["paymentRequestOrigin"] = val);
});
/**
 * Property.
 * 
 *   The topOrigin read-only property of the `payment.PaymentRequestEvent`
 *   returns the top level payee origin where the `payment.PaymentRequest`
 *   was initialized.
 * 
 *   `var aUsvString = paymentRequestEvent.topOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/topLevelOrigin`
 */
payment.PaymentRequestEvent.top_origin = (function payment$PaymentRequestEvent$top_origin(this$){
return this$.topOrigin();
});
/**
 * Property.
 * 
 *   The topOrigin read-only property of the `payment.PaymentRequestEvent`
 *   returns the top level payee origin where the `payment.PaymentRequest`
 *   was initialized.
 * 
 *   `var aUsvString = paymentRequestEvent.topOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/topLevelOrigin`
 */
payment.PaymentRequestEvent.set_top_origin_BANG_ = (function payment$PaymentRequestEvent$set_top_origin_BANG_(this$,val){
return (this$["topOrigin"] = val);
});
/**
 * Property.
 * 
 *   The total readonly property of the `payment.PaymentRequestEvent`
 *   returns a `payment.PaymentCurrencyAmount` object containing the
 *   amount being requested for payment.
 * 
 *   `var paymentCurrencyAmount = paymentRequestEvent.total`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/total`
 */
payment.PaymentRequestEvent.total = (function payment$PaymentRequestEvent$total(this$){
return this$.total();
});
/**
 * Property.
 * 
 *   The total readonly property of the `payment.PaymentRequestEvent`
 *   returns a `payment.PaymentCurrencyAmount` object containing the
 *   amount being requested for payment.
 * 
 *   `var paymentCurrencyAmount = paymentRequestEvent.total`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/total`
 */
payment.PaymentRequestEvent.set_total_BANG_ = (function payment$PaymentRequestEvent$set_total_BANG_(this$,val){
return (this$["total"] = val);
});
/**
 * Property.
 * 
 *   The instrumentKey read-only property of the `payment.PaymentRequestEvent`
 *   returns a `payment.PaymentInstrument` object reflecting the payment
 *   selected by the user or an empty string if the user has not registered
 *   chosen a payment instrument.
 * 
 *   `var instrumentKey = paymentRequestEvent.instrumentKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/instrumentKey`
 */
payment.PaymentRequestEvent.instrument_key = (function payment$PaymentRequestEvent$instrument_key(this$){
return this$.instrumentKey();
});
/**
 * Property.
 * 
 *   The instrumentKey read-only property of the `payment.PaymentRequestEvent`
 *   returns a `payment.PaymentInstrument` object reflecting the payment
 *   selected by the user or an empty string if the user has not registered
 *   chosen a payment instrument.
 * 
 *   `var instrumentKey = paymentRequestEvent.instrumentKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/instrumentKey`
 */
payment.PaymentRequestEvent.set_instrument_key_BANG_ = (function payment$PaymentRequestEvent$set_instrument_key_BANG_(this$,val){
return (this$["instrumentKey"] = val);
});
/**
 * Property.
 * 
 *   The methodData read-only property of the `payment.PaymentRequestEvent`
 *   returns an array of `payment.PaymentMethodData` objects containing
 *   method identifers for the payment methods that the web site accepts
 *   any associated payment method specific data.
 * 
 *   `var methodData[] = paymentRequestEvent.methodData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/methodData`
 */
payment.PaymentRequestEvent.method_data = (function payment$PaymentRequestEvent$method_data(this$){
return this$.methodData();
});
/**
 * Property.
 * 
 *   The methodData read-only property of the `payment.PaymentRequestEvent`
 *   returns an array of `payment.PaymentMethodData` objects containing
 *   method identifers for the payment methods that the web site accepts
 *   any associated payment method specific data.
 * 
 *   `var methodData[] = paymentRequestEvent.methodData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/methodData`
 */
payment.PaymentRequestEvent.set_method_data_BANG_ = (function payment$PaymentRequestEvent$set_method_data_BANG_(this$,val){
return (this$["methodData"] = val);
});
/**
 * Property.
 * 
 *   The modifiers read-only property of the `payment.PaymentRequestEvent`
 *   returns an array of objects containing changes to payment details.
 * 
 *   `var modifiers[] = paymentDetailsEvent.modifiers`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/modifiers`
 */
payment.PaymentRequestEvent.modifiers = (function payment$PaymentRequestEvent$modifiers(this$){
return this$.modifiers();
});
/**
 * Property.
 * 
 *   The modifiers read-only property of the `payment.PaymentRequestEvent`
 *   returns an array of objects containing changes to payment details.
 * 
 *   `var modifiers[] = paymentDetailsEvent.modifiers`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/modifiers`
 */
payment.PaymentRequestEvent.set_modifiers_BANG_ = (function payment$PaymentRequestEvent$set_modifiers_BANG_(this$,val){
return (this$["modifiers"] = val);
});

//# sourceMappingURL=PaymentRequestEvent.js.map?rel=1565798810469
