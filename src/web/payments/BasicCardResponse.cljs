(ns web.payments.BasicCardResponse
  "The BasicCardResponse dictionary (related to the Payment Request
  although defined in the Basic Card Payment spec) defines an object
  for payment response details such as the number/expiry date of
  card used to make the payment, and the billing address."
  (:refer-clojure :exclude []))

(defn card-number
  "Property.

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the number of the card used to make the payment.

  `\\\"cardNumber\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardNumber`"
  [this]
  (-> this (.-cardNumber)))

(defn set-card-number!
  "Property.

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the number of the card used to make the payment.

  `\\\"cardNumber\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardNumber`"
  [this val]
  (aset this "cardNumber" val))

(defn cardholder-name
  "Property.

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the cardholder name of the card used to make the payment.

  `name = basicCardResponse.cardholderName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardholderName`"
  [this]
  (-> this (.-cardholderName)))

(defn set-cardholder-name!
  "Property.

  The cardNumber property of the `web.payments.BasicCardResponse`
  contains the cardholder name of the card used to make the payment.

  `name = basicCardResponse.cardholderName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardholderName`"
  [this val]
  (aset this "cardholderName" val))

(defn card-security-code
  "Property.

  The cardSecurityCode property of the `web.payments.BasicCardResponse`
  contains the security code of the card used to make the payment.

  `\\\"cardSecurityCode\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardSecurityCode`"
  [this]
  (-> this (.-cardSecurityCode)))

(defn set-card-security-code!
  "Property.

  The cardSecurityCode property of the `web.payments.BasicCardResponse`
  contains the security code of the card used to make the payment.

  `\\\"cardSecurityCode\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardSecurityCode`"
  [this val]
  (aset this "cardSecurityCode" val))

(defn expiry-month
  "Property.

  The expiryMonth property of the `web.payments.BasicCardResponse`
  contains the expiry month of the card used to make the payment.

  `\\\"expiryMonth\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryMonth`"
  [this]
  (-> this (.-expiryMonth)))

(defn set-expiry-month!
  "Property.

  The expiryMonth property of the `web.payments.BasicCardResponse`
  contains the expiry month of the card used to make the payment.

  `\\\"expiryMonth\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryMonth`"
  [this val]
  (aset this "expiryMonth" val))

(defn expiry-year
  "Property.

  The expiryYear property of the `web.payments.BasicCardResponse`
  contains the expiry year of the card used to make the payment.

  `\\\"expiryYear\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryYear`"
  [this]
  (-> this (.-expiryYear)))

(defn set-expiry-year!
  "Property.

  The expiryYear property of the `web.payments.BasicCardResponse`
  contains the expiry year of the card used to make the payment.

  `\\\"expiryYear\\\" : \\\"number\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/expiryYear`"
  [this val]
  (aset this "expiryYear" val))

(defn billing-address
  "Property.

  The billingAddress property of the `web.payments.BasicCardResponse`
  contains the billing address of the card used to make the payment.

  `\\\"billingAddress\\\" : PaymentAddress`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/billingAddress`"
  [this]
  (-> this (.-billingAddress)))

(defn set-billing-address!
  "Property.

  The billingAddress property of the `web.payments.BasicCardResponse`
  contains the billing address of the card used to make the payment.

  `\\\"billingAddress\\\" : PaymentAddress`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/billingAddress`"
  [this val]
  (aset this "billingAddress" val))

