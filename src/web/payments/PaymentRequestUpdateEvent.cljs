(ns web.payments.PaymentRequestUpdateEvent
  "The PaymentRequestUpdateEvent interface is used for events sent
  a `web.payments.PaymentRequest` instance when changes are made
  shipping-related information for a pending `web.payments.PaymentRequest`.
  events are:"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentRequestUpdateEvent constructor creates a new `web.payments.PaymentRequestUpdateEvent` object which enables a web page to update the details of a `web.payments.PaymentRequest` in response to a user action. Actual updates are made by passing options to the `updateWith()` method.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent`"
  js/PaymentRequestUpdateEvent)

(defn update-with
  "Method.

  The updateWith() method of the `web.payments.PaymentRequestUpdateEvent`
  updates the details of an existing `web.payments.PaymentRequest`.

  `paymentRequestUpdateEvent.updateWith(details);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/updateWith`"
  [this details]
  (-> this (.updateWith details)))

