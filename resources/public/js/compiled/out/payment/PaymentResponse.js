// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentResponse');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `payment.PaymentRequest` method complete() of the Payment
 *   API notifies the user agent that the user interaction is over,
 *   causes any remaining user interface to be closed.
 * 
 *   `completePromise = paymentRequest.complete(result);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/complete`
 */
payment.PaymentResponse.complete = (function payment$PaymentResponse$complete(this$,result){
return this$.complete(result);
});
/**
 * Method.
 * 
 *   The `payment.PaymentResponse` interface's reply() method makes
 *   possible to ask the user to retry a payment after an error occurs
 *   processing.
 * 
 *   `retryPromise = paymentRequest.retry(errorFields);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/retry`
 */
payment.PaymentResponse.retry = (function payment$PaymentResponse$retry(this$,error_fields){
return this$.retry(error_fields);
});
/**
 * Property.
 * 
 *   The details read-only property of the `payment.PaymentResponse`
 *   returns a JSON-serializable object that provides a payment method
 *   message used by the merchant to process the transaction and determine
 *   successful funds transfer.
 * 
 *   `var detailsObject = PaymentResponse.details;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details`
 */
payment.PaymentResponse.details = (function payment$PaymentResponse$details(this$){
return this$.details();
});
/**
 * Property.
 * 
 *   The details read-only property of the `payment.PaymentResponse`
 *   returns a JSON-serializable object that provides a payment method
 *   message used by the merchant to process the transaction and determine
 *   successful funds transfer.
 * 
 *   `var detailsObject = PaymentResponse.details;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details`
 */
payment.PaymentResponse.set_details_BANG_ = (function payment$PaymentResponse$set_details_BANG_(this$,val){
return (this$["details"] = val);
});
/**
 * Property.
 * 
 *   The methodName read-only property of the `payment.PaymentResponse`
 *   returns a string uniquely identifying the payment handler selected
 *   the user.
 * 
 *   `var methodName = PaymentResponse.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName`
 */
payment.PaymentResponse.method_name = (function payment$PaymentResponse$method_name(this$){
return this$.methodName();
});
/**
 * Property.
 * 
 *   The methodName read-only property of the `payment.PaymentResponse`
 *   returns a string uniquely identifying the payment handler selected
 *   the user.
 * 
 *   `var methodName = PaymentResponse.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName`
 */
payment.PaymentResponse.set_method_name_BANG_ = (function payment$PaymentResponse$set_method_name_BANG_(this$,val){
return (this$["methodName"] = val);
});
/**
 * Property.
 * 
 *   The `payment.PaymentResponse` object's onpayerdetailchange property
 *   an event handler which is called to handle the payerdetailchange
 *   which is sent to the PaymentResponse when the user makes changes
 *   their personal information while filling out a payment request
 * 
 *   `paymentResponse.onpayerdetailchange = eventHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`
 */
payment.PaymentResponse.onpayerdetailchange = (function payment$PaymentResponse$onpayerdetailchange(this$){
return this$.onpayerdetailchange();
});
/**
 * Property.
 * 
 *   The `payment.PaymentResponse` object's onpayerdetailchange property
 *   an event handler which is called to handle the payerdetailchange
 *   which is sent to the PaymentResponse when the user makes changes
 *   their personal information while filling out a payment request
 * 
 *   `paymentResponse.onpayerdetailchange = eventHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`
 */
payment.PaymentResponse.set_onpayerdetailchange_BANG_ = (function payment$PaymentResponse$set_onpayerdetailchange_BANG_(this$,val){
return (this$["onpayerdetailchange"] = val);
});
/**
 * Property.
 * 
 *   The payerEmail read-only property of the `payment.PaymentResponse`
 *   returns the email address supplied by the user. This option is
 *   present when the requestPayerEmail option is set to true in the
 *   object passed to the `payment.PaymentRequest` constructor.
 * 
 *   `var payerEmail = PaymentResponse.payerEmail;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail`
 */
payment.PaymentResponse.payer_email = (function payment$PaymentResponse$payer_email(this$){
return this$.payerEmail();
});
/**
 * Property.
 * 
 *   The payerEmail read-only property of the `payment.PaymentResponse`
 *   returns the email address supplied by the user. This option is
 *   present when the requestPayerEmail option is set to true in the
 *   object passed to the `payment.PaymentRequest` constructor.
 * 
 *   `var payerEmail = PaymentResponse.payerEmail;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail`
 */
payment.PaymentResponse.set_payer_email_BANG_ = (function payment$PaymentResponse$set_payer_email_BANG_(this$,val){
return (this$["payerEmail"] = val);
});
/**
 * Property.
 * 
 *   The payerName read-only property of the `payment.PaymentResponse`
 *   returns the name supplied by the user. This option is only present
 *   the requestPayerName option is set to true in the options parameter
 *   the `payment.PaymentRequest()` constructor.
 * 
 *   `var payerName = PaymentResponse.payerName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName`
 */
payment.PaymentResponse.payer_name = (function payment$PaymentResponse$payer_name(this$){
return this$.payerName();
});
/**
 * Property.
 * 
 *   The payerName read-only property of the `payment.PaymentResponse`
 *   returns the name supplied by the user. This option is only present
 *   the requestPayerName option is set to true in the options parameter
 *   the `payment.PaymentRequest()` constructor.
 * 
 *   `var payerName = PaymentResponse.payerName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName`
 */
payment.PaymentResponse.set_payer_name_BANG_ = (function payment$PaymentResponse$set_payer_name_BANG_(this$,val){
return (this$["payerName"] = val);
});
/**
 * Property.
 * 
 *   The payerPhone read-only property of the `payment.PaymentResponse`
 *   returns the phone number supplied by the user. This option is
 *   present when the requestPayerPhone option is set to true in the
 *   object passed to the `payment.PaymentRequest` constructor.
 * 
 *   `var payerPhone = PaymentResponse.payerPhone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone`
 */
payment.PaymentResponse.payer_phone = (function payment$PaymentResponse$payer_phone(this$){
return this$.payerPhone();
});
/**
 * Property.
 * 
 *   The payerPhone read-only property of the `payment.PaymentResponse`
 *   returns the phone number supplied by the user. This option is
 *   present when the requestPayerPhone option is set to true in the
 *   object passed to the `payment.PaymentRequest` constructor.
 * 
 *   `var payerPhone = PaymentResponse.payerPhone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone`
 */
payment.PaymentResponse.set_payer_phone_BANG_ = (function payment$PaymentResponse$set_payer_phone_BANG_(this$,val){
return (this$["payerPhone"] = val);
});
/**
 * Property.
 * 
 *   The requestId read-only property of the `payment.PaymentResponse`
 *   rreturns the free-form identifier supplied by the PaymentResponse()
 *   by details.id.
 * 
 *   `var id = paymentRequest.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId`
 */
payment.PaymentResponse.request_id = (function payment$PaymentResponse$request_id(this$){
return this$.requestId();
});
/**
 * Property.
 * 
 *   The requestId read-only property of the `payment.PaymentResponse`
 *   rreturns the free-form identifier supplied by the PaymentResponse()
 *   by details.id.
 * 
 *   `var id = paymentRequest.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId`
 */
payment.PaymentResponse.set_request_id_BANG_ = (function payment$PaymentResponse$set_request_id_BANG_(this$,val){
return (this$["requestId"] = val);
});
/**
 * Property.
 * 
 *   The shippingAddress read-only property of the PaymentRequest
 *   returns a `payment.PaymentAddress` object containing the shipping
 *   provided by the user.
 * 
 *   `var shippingAddress = PaymentRequest.shippingAddress;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress`
 */
payment.PaymentResponse.shipping_address = (function payment$PaymentResponse$shipping_address(this$){
return this$.shippingAddress();
});
/**
 * Property.
 * 
 *   The shippingAddress read-only property of the PaymentRequest
 *   returns a `payment.PaymentAddress` object containing the shipping
 *   provided by the user.
 * 
 *   `var shippingAddress = PaymentRequest.shippingAddress;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress`
 */
payment.PaymentResponse.set_shipping_address_BANG_ = (function payment$PaymentResponse$set_shipping_address_BANG_(this$,val){
return (this$["shippingAddress"] = val);
});
/**
 * Property.
 * 
 *   The shippingOption read-only property of the PaymentRequest interface
 *   the ID attribute of the shipping option selected by the user.
 *   option is only present when the requestShipping option is set
 *   true in the `payment.PaymentOptions` object passed to the `payment.PaymentRequest`
 * 
 *   `var shippingOption = PaymentRequest.shippingOption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption`
 */
payment.PaymentResponse.shipping_option = (function payment$PaymentResponse$shipping_option(this$){
return this$.shippingOption();
});
/**
 * Property.
 * 
 *   The shippingOption read-only property of the PaymentRequest interface
 *   the ID attribute of the shipping option selected by the user.
 *   option is only present when the requestShipping option is set
 *   true in the `payment.PaymentOptions` object passed to the `payment.PaymentRequest`
 * 
 *   `var shippingOption = PaymentRequest.shippingOption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption`
 */
payment.PaymentResponse.set_shipping_option_BANG_ = (function payment$PaymentResponse$set_shipping_option_BANG_(this$,val){
return (this$["shippingOption"] = val);
});

//# sourceMappingURL=PaymentResponse.js.map?rel=1565798851924
