(ns web.payments.PaymentMethodChangeEvent
  "The PaymentMethodChangeEvent interface of the Payment Request
  describes the paymentmethodchange event which is fired by some
  handlers when the user switches payment instruments (e.g., a
  selects a \\\"store\\\" card to make a purchase while using Apple"
  (:refer-clojure :exclude []))

(defn method-details
  "Property.

  [Read Only]

  `web.payments.PaymentMethodChangeEvent` interface is an object
  any data the payment handler may provide to describe the change
  user has made to their payment method.

  `details = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`"
  [this]
  (-> this (.-methodDetails)))

(defn method-name
  "Property.

  [Read Only]

  `web.payments.PaymentMethodChangeEvent` interface is a string
  uniquely identifies the payment handler currently selected by
  user.

  `var methodName = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`"
  [this]
  (-> this (.-methodName)))

