// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentRequest.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   paymentmethodchange events are delivered by the Payment Request
 *   to a `payment.PaymentRequest` object when the user changes payment
 *   within a given payment handler.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/paymentmethodchange_event`
 */
payment.PaymentRequest.ev.paymentmethodchange = "paymentmethodchange";
/**
 * Event.
 * 
 *   merchantvalidation events are delivered by the Payment Request
 *   to a `payment.PaymentRequest` object when a payment handler requires
 *   the merchant requesting the purchase validate itself as permitted
 *   use the payment handler.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/merchantvalidation_event`
 */
payment.PaymentRequest.ev.merchantvalidation = "merchantvalidation";
/**
 * Event.
 * 
 *   The shippingaddresschange event is sent to the `payment.PaymentRequest`
 *   when the user selects a shipping address or changes details of
 *   shipping address.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingaddresschange_event`
 */
payment.PaymentRequest.ev.shippingaddresschange = "shippingaddresschange";
/**
 * Event.
 * 
 *   For payment requests that request shipping information, and for
 *   shipping options are offered, the shippingoptionchange event
 *   sent to the `payment.PaymentRequest` whenever the user chooses
 *   shipping option from the list of available options.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingoptionchange_event`
 */
payment.PaymentRequest.ev.shippingoptionchange = "shippingoptionchange";

//# sourceMappingURL=ev.js.map?rel=1565798842335
