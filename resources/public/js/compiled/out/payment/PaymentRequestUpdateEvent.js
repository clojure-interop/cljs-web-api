// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentRequestUpdateEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PaymentRequestUpdateEvent constructor creates a new `payment.PaymentRequestUpdateEvent` object which enables a web page to update the details of a `payment.PaymentRequest` in response to a user action. Actual updates are made by passing options to the `web.updateWith()` method.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent`
 */
payment.PaymentRequestUpdateEvent.constructor$ = PaymentRequestUpdateEvent;
/**
 * Method.
 * 
 *   The updateWith() method of the `payment.PaymentRequestUpdateEvent`
 *   updates the details of an existing `payment.PaymentRequest`.
 * 
 *   `paymentRequestUpdateEvent.updateWith(details);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/updateWith`
 */
payment.PaymentRequestUpdateEvent.update_with = (function payment$PaymentRequestUpdateEvent$update_with(this$,details){
return this$.updateWith(details);
});

//# sourceMappingURL=PaymentRequestUpdateEvent.js.map?rel=1565798812031
