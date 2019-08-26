(ns web.payments.PaymentMethodChangeEvent
  "The PaymentMethodChangeEvent interface of the Payment Request
  describes the paymentmethodchange event which is fired by some
  handlers when the user switches payment instruments (e.g., a
  selects a \\\"store\\\" card to make a purchase while using Apple"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentMethodChangeEvent() constructor creates a new `web.payments.PaymentMethodChangeEvent` object providing details about a paymentmethodchange event.

  type
  A `web.dom.DOMString` which must contain the string paymentmethodchange, the name of the only type of event which uses the PaymentMethodChangeEvent interface.
  options Optional

  An optional `PaymentMethodChangeEventInit` dictionary which may contain zero or more of the following properties:


  methodName Optional
  A `web.dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
  methodDetails Optional
  An object providing payment method-specific information describing the changes made to the payment, or null if there is no additional information available or required. This is null by default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent`"
  js/PaymentMethodChangeEvent)

(defn method-details
  "Property.

  `web.payments.PaymentMethodChangeEvent` interface is an object
  any data the payment handler may provide to describe the change
  user has made to their payment method.

  `details = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`"
  [this]
  (-> this (.-methodDetails)))

(defn set-method-details!
  "Property.

  `web.payments.PaymentMethodChangeEvent` interface is an object
  any data the payment handler may provide to describe the change
  user has made to their payment method.

  `details = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`"
  [this val]
  (aset this "methodDetails" val))

(defn method-name
  "Property.

  `web.payments.PaymentMethodChangeEvent` interface is a string
  uniquely identifies the payment handler currently selected by
  user.

  `var methodName = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`"
  [this]
  (-> this (.-methodName)))

(defn set-method-name!
  "Property.

  `web.payments.PaymentMethodChangeEvent` interface is a string
  uniquely identifies the payment handler currently selected by
  user.

  `var methodName = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`"
  [this val]
  (aset this "methodName" val))

