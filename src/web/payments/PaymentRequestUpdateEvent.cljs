(ns web.payments.PaymentRequestUpdateEvent
  "The PaymentRequestUpdateEvent interface is used for events sent
  a `web.payments.PaymentRequest` instance when changes are made
  shipping-related information for a pending `web.payments.PaymentRequest`.
  events are:"
  (:refer-clojure :exclude []))

(defn update-with
  "Method.

  The updateWith() method of the `web.payments.PaymentRequestUpdateEvent`
  updates the details of an existing `web.payments.PaymentRequest`.

  `paymentRequestUpdateEvent.updateWith(details);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/updateWith`"
  [this details]
  (-> this (.updateWith details)))

