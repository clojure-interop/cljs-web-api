// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentRequest');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PaymentRequest() constructor creates a new `payment.PaymentRequest` object which will be used to handle the process of generating, validating, and submitting a payment request.
 * 
 *   methodData
 *   Contains an array of identifiers for the payment methods the merchant web site accepts and any associated payment method specific data. Each item in the array contains the following fields:
 * 
 *   supportedMethods
 *   For early implementations of the spec, this was a sequence of identifiers for payment methods that the merchant website accepts. Starting with more recent browsers, this parameter is more generic than credit cards, it is a single `dom.DOMString`, and the meaning of the data parameter changes with the supportedMethods. For example, the basic card payment method is selected by specifying the string basic-card here.
 *   data
 *   A JSON-serializable object that provides optional information that might be needed by the supported payment methods. This has to conform to the type expected by the payment handler indicated by supportedMethods. For basic credit card services, this structure should match the `web.BasicCardRequest` dictionary.
 * 
 * 
 *   details
 *   Provides information about the requested transaction. This parameter contains the following fields:
 * 
 *   total
 *   The total amount of the payment request.
 *   id Optional
 *   A free-form identifier for this payment request. If a value is not supplied, the browser will construct one.
 *   displayItems
 *   An array of optional line items for the payment request that the user agent may display, such as product details, tax, and shipping.
 *   shippingOptions
 *   The shipping options the user may choose from. If this sequence is blank, it indicates the merchant cannot ship to the current shipping address. The default shipping option may be indicated in this sequence.
 *   modifiers
 *   Modifiers for specific payment methods; for example, adjusting the total amount based on the payment method. This parameter contains the following fields:
 * 
 *   additionalDisplayItems
 *   An array of items to be appended to the details.displayItems property. This property is commonly used to add a discount or surcharge line item indicating the different amount in details.modifiers.total.
 *   data
 *   A JSON-serializable object that provides optional information that might be needed by the supported payment methods. This has to conform to the structure defined in the `web.BasicCardRequest` dictionary.
 *   total
 *   A total amount for the payment request that overrides value in details.total. This is typically used when details.modifiers.additionalItems adds a discount or a surchase to the request.
 * 
 * 
 * 
 * 
 *   options Optional
 *   Lets you set options that control the behavior of the user agent. This parameter contains the following fields:
 * 
 * 
 *   requestPayerName
 *   A Boolean indicating whether the user agent should collect the payer's name and submit it with the payment request. The default is false.
 *   requestPayerEmail
 *   A Boolean indicating whether the user agent should collect the payer's email address and submit it with the payment request. The default is false.
 *   requestPayerPhone
 *   A Boolean indicating whether the user agent should collect the payer's phone number and submit it with the payment request. The default is false.
 *   requestShipping
 *   A Boolean indicating whether the user agent should collect the payer's shipping address and submit it with the payment request. If you set this type to true, you should select an appropriate shippingType. The default is false.
 *   shippingType
 *   Lets you specify how the user interface refers to shipping when the word 'shipping' isn't appropriate for your use case. For example, in English speaking countries you would say \"pizza delivery\" not \"pizza shipping\". Valid values are \"shipping\", \"delivery\", and \"pickup\". Quotation marks must be included. The default value is \"shipping\".
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest`
 */
payment.PaymentRequest.constructor$ = PaymentRequest;
/**
 * Method.
 * 
 *   The `payment.PaymentRequest` method canMakePayment() determines
 *   or not the request is configured in a way that is compatible
 *   at least one payment method supported by the user agent.
 * 
 *   `paymentRequest.canMakePayment()
 *   .then( canPay => { ... })
 *   .catch( error => { ... })
 * 
 *   canPay = await paymentRequest.canMakePayment();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/canMakePayment`
 */
payment.PaymentRequest.can_make_payment = (function payment$PaymentRequest$can_make_payment(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50187 = arguments.length;
var i__42557__auto___50188 = (0);
while(true){
if((i__42557__auto___50188 < len__42556__auto___50187)){
args__42563__auto__.push((arguments[i__42557__auto___50188]));

var G__50189 = (i__42557__auto___50188 + (1));
i__42557__auto___50188 = G__50189;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return payment.PaymentRequest.can_make_payment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

payment.PaymentRequest.can_make_payment.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.canMakePayment,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

payment.PaymentRequest.can_make_payment.cljs$lang$maxFixedArity = (1);

payment.PaymentRequest.can_make_payment.cljs$lang$applyTo = (function (seq50185){
var G__50186 = cljs.core.first.call(null,seq50185);
var seq50185__$1 = cljs.core.next.call(null,seq50185);
return payment.PaymentRequest.can_make_payment.cljs$core$IFn$_invoke$arity$variadic(G__50186,seq50185__$1);
});

/**
 * Method.
 * 
 *   The `payment.PaymentRequest` interface's show() method instructs
 *   user agent to begin the process of showing and handling the user
 *   for the payment request to the user.
 * 
 *   `paymentPromise = paymentRequest.show(detailsPromise);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/show`
 */
payment.PaymentRequest.show = (function payment$PaymentRequest$show(this$,details_promise){
return this$.show(details_promise);
});
/**
 * Method.
 * 
 *   The PaymentRequest.abort() method of the `payment.PaymentRequest`
 *   causes the user agent to end the payment request and to remove
 *   user interface that might be shown.
 * 
 *   `PaymentRequest.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/abort`
 */
payment.PaymentRequest.abort = (function payment$PaymentRequest$abort(this$){
return this$.abort();
});
/**
 * Property.
 * 
 *   The `payment.PaymentRequest` event handler onmerchantvalidation
 *   invoked when the merchantvalidation
 * 
 *   `paymentRequest.onmerchantvalidation = eventHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`
 */
payment.PaymentRequest.onmerchantvalidation = (function payment$PaymentRequest$onmerchantvalidation(this$){
return this$.onmerchantvalidation();
});
/**
 * Property.
 * 
 *   The `payment.PaymentRequest` event handler onmerchantvalidation
 *   invoked when the merchantvalidation
 * 
 *   `paymentRequest.onmerchantvalidation = eventHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`
 */
payment.PaymentRequest.set_onmerchantvalidation_BANG_ = (function payment$PaymentRequest$set_onmerchantvalidation_BANG_(this$,val){
return (this$["onmerchantvalidation"] = val);
});
/**
 * Property.
 * 
 *   The `payment.PaymentRequest` event handler onpaymentmethodchange
 *   invoked when the paymentmethodchange
 * 
 *   `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });
 * 
 *   PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`
 */
payment.PaymentRequest.onpaymentmethodchange = (function payment$PaymentRequest$onpaymentmethodchange(this$){
return this$.onpaymentmethodchange();
});
/**
 * Property.
 * 
 *   The `payment.PaymentRequest` event handler onpaymentmethodchange
 *   invoked when the paymentmethodchange
 * 
 *   `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });
 * 
 *   PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`
 */
payment.PaymentRequest.set_onpaymentmethodchange_BANG_ = (function payment$PaymentRequest$set_onpaymentmethodchange_BANG_(this$,val){
return (this$["onpaymentmethodchange"] = val);
});
/**
 * Property.
 * 
 *   The onshippingaddresschange event of the `payment.PaymentRequest`
 *   is fired whenever the user changes their shipping address, including
 *   an address is added by the user for the first time.
 * 
 *   `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });
 * 
 *   PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`
 */
payment.PaymentRequest.onshippingaddresschange = (function payment$PaymentRequest$onshippingaddresschange(this$){
return this$.onshippingaddresschange();
});
/**
 * Property.
 * 
 *   The onshippingaddresschange event of the `payment.PaymentRequest`
 *   is fired whenever the user changes their shipping address, including
 *   an address is added by the user for the first time.
 * 
 *   `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });
 * 
 *   PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`
 */
payment.PaymentRequest.set_onshippingaddresschange_BANG_ = (function payment$PaymentRequest$set_onshippingaddresschange_BANG_(this$,val){
return (this$["onshippingaddresschange"] = val);
});
/**
 * Property.
 * 
 *   The shippingAddress read-only property of the `payment.PaymentRequest`
 *   returns the shipping address provided by the user. It is null
 *   default.
 * 
 *   `var paymentAddress = PaymentRequest.shippingAddress;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress`
 */
payment.PaymentRequest.shipping_address = (function payment$PaymentRequest$shipping_address(this$){
return this$.shippingAddress();
});
/**
 * Property.
 * 
 *   The shippingAddress read-only property of the `payment.PaymentRequest`
 *   returns the shipping address provided by the user. It is null
 *   default.
 * 
 *   `var paymentAddress = PaymentRequest.shippingAddress;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress`
 */
payment.PaymentRequest.set_shipping_address_BANG_ = (function payment$PaymentRequest$set_shipping_address_BANG_(this$,val){
return (this$["shippingAddress"] = val);
});
/**
 * Property.
 * 
 *   The shippingOption read-only attribute of the `payment.PaymentRequest`
 *   returns either the id of a selected shipping option, null (if
 *   shipping option was set to be selected) or a shipping option
 *   by the user. It is initially null by when no \"selected\" shipping
 *   are provided.
 * 
 *   `// Returns the id of the selected PaymentShippingOption
 *   var shippingOption = request.shippingOption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingOption`
 */
payment.PaymentRequest.shipping_option = (function payment$PaymentRequest$shipping_option(this$){
return this$.shippingOption();
});
/**
 * Property.
 * 
 *   The shippingOption read-only attribute of the `payment.PaymentRequest`
 *   returns either the id of a selected shipping option, null (if
 *   shipping option was set to be selected) or a shipping option
 *   by the user. It is initially null by when no \"selected\" shipping
 *   are provided.
 * 
 *   `// Returns the id of the selected PaymentShippingOption
 *   var shippingOption = request.shippingOption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingOption`
 */
payment.PaymentRequest.set_shipping_option_BANG_ = (function payment$PaymentRequest$set_shipping_option_BANG_(this$,val){
return (this$["shippingOption"] = val);
});
/**
 * Property.
 * 
 *   The id read-only attribute of the `payment.PaymentRequest` interface
 *   a unique identifier for a particular `payment.PaymentRequest`
 * 
 *   `var id = paymentRequest.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/id`
 */
payment.PaymentRequest.id = (function payment$PaymentRequest$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The id read-only attribute of the `payment.PaymentRequest` interface
 *   a unique identifier for a particular `payment.PaymentRequest`
 * 
 *   `var id = paymentRequest.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/id`
 */
payment.PaymentRequest.set_id_BANG_ = (function payment$PaymentRequest$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The shippingType read-only property of the `payment.PaymentRequest`
 *   returns one of \"shipping\", \"delivery\", \"pickup\", or null
 *   one was not provided by the constructor.
 * 
 *   `var shippingType = paymentRequest.shippingType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingType`
 */
payment.PaymentRequest.shipping_type = (function payment$PaymentRequest$shipping_type(this$){
return this$.shippingType();
});
/**
 * Property.
 * 
 *   The shippingType read-only property of the `payment.PaymentRequest`
 *   returns one of \"shipping\", \"delivery\", \"pickup\", or null
 *   one was not provided by the constructor.
 * 
 *   `var shippingType = paymentRequest.shippingType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingType`
 */
payment.PaymentRequest.set_shipping_type_BANG_ = (function payment$PaymentRequest$set_shipping_type_BANG_(this$,val){
return (this$["shippingType"] = val);
});

//# sourceMappingURL=PaymentRequest.js.map?rel=1565798836763
