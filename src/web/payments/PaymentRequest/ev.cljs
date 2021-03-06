(ns web.payments.PaymentRequest.ev
  "PaymentRequest Events."
  (:refer-clojure :exclude []))

(def merchantvalidation
  "Event.

  merchantvalidation events are delivered by the Payment Request
  to a `web.payments.PaymentRequest` object when a payment handler
  that the merchant requesting the purchase validate itself as
  to use the payment handler.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/merchantvalidation_event`"

  "merchantvalidation")

(def paymentmethodchange
  "Event.

  paymentmethodchange events are delivered by the Payment Request
  to a `web.payments.PaymentRequest` object when the user changes
  methods within a given payment handler.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/paymentmethodchange_event`"

  "paymentmethodchange")

(def shippingaddresschange
  "Event.

  The shippingaddresschange event is sent to the `web.payments.PaymentRequest`
  when the user selects a shipping address or changes details of
  shipping address.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingaddresschange_event`"

  "shippingaddresschange")

(def shippingoptionchange
  "Event.

  For payment requests that request shipping information, and for
  shipping options are offered, the shippingoptionchange event
  sent to the `web.payments.PaymentRequest` whenever the user chooses
  shipping option from the list of available options.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingoptionchange_event`"

  "shippingoptionchange")

