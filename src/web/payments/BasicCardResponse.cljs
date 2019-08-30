(ns web.payments.BasicCardResponse
  "The BasicCardResponse dictionary (related to the Payment Request
  although defined in the Basic Card Payment spec) defines an object
  for payment response details such as the number/expiry date of
  card used to make the payment, and the billing address."
  (:refer-clojure :exclude []))

(defn card-number
  "Property.

  [Read Only]
  [Experimental]

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the number of the card used to make the payment.

  `\\\"cardNumber\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardNumber`"
  [this]
  (-> this (.-cardNumber)))

(defn cardholder-name
  "Property.

  [Read Only]

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the cardholder name of the card used to make the payment.

  `name = basicCardResponse.cardholderName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardholderName`"
  [this]
  (-> this (.-cardholderName)))

(defn card-security-code
  "Property.

  [Read Only]
  [Experimental]

  The cardSecurityCode property of the `web.payments.BasicCardResponse`
  contains the security code of the card used to make the payment.

  `\\\"cardSecurityCode\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardSecurityCode`"
  [this]
  (-> this (.-cardSecurityCode)))

(defn expiry-month
  "Property.

  [Read Only]
  [Experimental]

  The expiryMonth property of the `web.payments.BasicCardResponse`
  contains the expiry month of the card used to make the payment.

  `\\\"expiryMonth\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryMonth`"
  [this]
  (-> this (.-expiryMonth)))

(defn expiry-year
  "Property.

  [Read Only]
  [Experimental]

  The expiryYear property of the `web.payments.BasicCardResponse`
  contains the expiry year of the card used to make the payment.

  `\\\"expiryYear\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryYear`"
  [this]
  (-> this (.-expiryYear)))

(defn billing-address
  "Property.

  [Read Only]
  [Experimental]

  The billingAddress property of the `web.payments.BasicCardResponse`
  contains the billing address of the card used to make the payment.

  `\\\"billingAddress\\\" : PaymentAddress`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/billingAddress`"
  [this]
  (-> this (.-billingAddress)))

