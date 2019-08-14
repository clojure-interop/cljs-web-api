(ns payment.PaymentMethodChangeEvent
  "The PaymentMethodChangeEvent interface of the Payment Request
  describes the paymentmethodchange event which is fired by some
  handlers when the user switches payment instruments (e.g., a
  selects a \\\"store\\\" card to make a purchase while using Apple"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentMethodChangeEvent() constructor creates a new `payment.PaymentMethodChangeEvent` object providing details about a paymentmethodchange event.

  type
  A `dom.DOMString` which must contain the string paymentmethodchange, the name of the only type of event which uses the PaymentMethodChangeEvent interface.
  options Optional

  An optional `payment.PaymentMethodChangeEventInit` dictionary which may contain zero or more of the following properties:


  methodName Optional
  A `dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
  methodDetails Optional
  An object providing payment method-specific information describing the changes made to the payment, or null if there is no additional information available or required. This is null by default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent`"
  js/PaymentMethodChangeEvent)

(defn method-details
  "Property.

  `payment.PaymentMethodChangeEvent` interface is an object containing
  data the payment handler may provide to describe the change the
  has made to their payment method.

  `details = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`"
  [this]
  (-> this (.methodDetails)))

(defn set-method-details!
  "Property.

  `payment.PaymentMethodChangeEvent` interface is an object containing
  data the payment handler may provide to describe the change the
  has made to their payment method.

  `details = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodDetails`"
  [this val]
  (aset this "methodDetails" val))

(defn method-name
  "Property.

  `payment.PaymentMethodChangeEvent` interface is a string which
  identifies the payment handler currently selected by the user.

  `var methodName = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`"
  [this]
  (-> this (.methodName)))

(defn set-method-name!
  "Property.

  `payment.PaymentMethodChangeEvent` interface is a string which
  identifies the payment handler currently selected by the user.

  `var methodName = paymentMethodChangeEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentMethodChangeEvent/methodName`"
  [this val]
  (aset this "methodName" val))

