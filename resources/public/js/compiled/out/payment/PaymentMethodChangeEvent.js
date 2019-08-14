// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentMethodChangeEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PaymentMethodChangeEvent() constructor creates a new `payment.PaymentMethodChangeEvent` object providing details about a paymentmethodchange event.
 * 
 *   type
 *   A `dom.DOMString` which must contain the string paymentmethodchange, the name of the only type of event which uses the PaymentMethodChangeEvent interface.
 *   options Optional
 * 
 *   An optional `payment.PaymentMethodChangeEventInit` dictionary which may contain zero or more of the following properties:
 * 
 * 
 *   methodName Optional
 *   A `dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
 *   methodDetails Optional
 *   An object providing payment method-specific information describing the changes made to the payment, or null if there is no additional information available or required. This is null by default.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent`
 */
payment.PaymentMethodChangeEvent.constructor$ = PaymentMethodChangeEvent;
/**
 * Property.
 * 
 *   `payment.PaymentMethodChangeEvent` interface is an object containing
 *   data the payment handler may provide to describe the change the
 *   has made to their payment method.
 * 
 *   `details = paymentMethodChangeEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`
 */
payment.PaymentMethodChangeEvent.method_details = (function payment$PaymentMethodChangeEvent$method_details(this$){
return this$.methodDetails();
});
/**
 * Property.
 * 
 *   `payment.PaymentMethodChangeEvent` interface is an object containing
 *   data the payment handler may provide to describe the change the
 *   has made to their payment method.
 * 
 *   `details = paymentMethodChangeEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`
 */
payment.PaymentMethodChangeEvent.set_method_details_BANG_ = (function payment$PaymentMethodChangeEvent$set_method_details_BANG_(this$,val){
return (this$["methodDetails"] = val);
});
/**
 * Property.
 * 
 *   `payment.PaymentMethodChangeEvent` interface is a string which
 *   identifies the payment handler currently selected by the user.
 * 
 *   `var methodName = paymentMethodChangeEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`
 */
payment.PaymentMethodChangeEvent.method_name = (function payment$PaymentMethodChangeEvent$method_name(this$){
return this$.methodName();
});
/**
 * Property.
 * 
 *   `payment.PaymentMethodChangeEvent` interface is a string which
 *   identifies the payment handler currently selected by the user.
 * 
 *   `var methodName = paymentMethodChangeEvent.methodName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`
 */
payment.PaymentMethodChangeEvent.set_method_name_BANG_ = (function payment$PaymentMethodChangeEvent$set_method_name_BANG_(this$,val){
return (this$["methodName"] = val);
});

//# sourceMappingURL=PaymentMethodChangeEvent.js.map?rel=1565798841452
