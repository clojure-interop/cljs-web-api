(ns payment.PaymentRequestUpdateEvent
  "The PaymentRequestUpdateEvent interface is used for events sent
  a `payment.PaymentRequest` instance when changes are made to
  information for a pending `payment.PaymentRequest`. Those events"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentRequestUpdateEvent constructor creates a new `payment.PaymentRequestUpdateEvent` object which enables a web page to update the details of a `payment.PaymentRequest` in response to a user action. Actual updates are made by passing options to the `web.updateWith()` method.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent`"
  js/PaymentRequestUpdateEvent)

(defn update-with
  "Method.

  The updateWith() method of the `payment.PaymentRequestUpdateEvent`
  updates the details of an existing `payment.PaymentRequest`.

  `paymentRequestUpdateEvent.updateWith(details);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/updateWith`"
  [this details]
  (-> this (.updateWith details)))

