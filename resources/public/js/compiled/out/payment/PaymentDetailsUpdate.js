// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentDetailsUpdate');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `payment.PaymentDetailsUpdate` dictionary's error property
 *   a human-readable `dom.DOMString` which provides an error message
 *   be displayed if the specified information doesn't offer any valid
 *   options.
 * 
 *   `errorString = paymentDetailsUpdate.error;
 * 
 *   paymentDetailsUpdate.error = errorString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/error`
 */
payment.PaymentDetailsUpdate.error = (function payment$PaymentDetailsUpdate$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   The `payment.PaymentDetailsUpdate` dictionary's error property
 *   a human-readable `dom.DOMString` which provides an error message
 *   be displayed if the specified information doesn't offer any valid
 *   options.
 * 
 *   `errorString = paymentDetailsUpdate.error;
 * 
 *   paymentDetailsUpdate.error = errorString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/error`
 */
payment.PaymentDetailsUpdate.set_error_BANG_ = (function payment$PaymentDetailsUpdate$set_error_BANG_(this$,val){
return (this$["error"] = val);
});
/**
 * Property.
 * 
 *   The `payment.PaymentDetailsUpdate` dictionary's shippingAddressErrors
 *   if present, contains an `web.AddressErrors` object whose contents
 *   error messages for one or more of the values in the `payment.PaymentAddress`
 *   as `payment.PaymentRequest.shippingAddress`.
 * 
 *   `var addressErrors = PaymentDetailsUpdate.shippingAddressErrors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/shippingAddressErrors`
 */
payment.PaymentDetailsUpdate.shipping_address_errors = (function payment$PaymentDetailsUpdate$shipping_address_errors(this$){
return this$.shippingAddressErrors();
});
/**
 * Property.
 * 
 *   The `payment.PaymentDetailsUpdate` dictionary's shippingAddressErrors
 *   if present, contains an `web.AddressErrors` object whose contents
 *   error messages for one or more of the values in the `payment.PaymentAddress`
 *   as `payment.PaymentRequest.shippingAddress`.
 * 
 *   `var addressErrors = PaymentDetailsUpdate.shippingAddressErrors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/shippingAddressErrors`
 */
payment.PaymentDetailsUpdate.set_shipping_address_errors_BANG_ = (function payment$PaymentDetailsUpdate$set_shipping_address_errors_BANG_(this$,val){
return (this$["shippingAddressErrors"] = val);
});

//# sourceMappingURL=PaymentDetailsUpdate.js.map?rel=1565798840687
