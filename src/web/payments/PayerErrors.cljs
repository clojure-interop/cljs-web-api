(ns web.payments.PayerErrors
  "The PayerErrors dictionary is used by the Payment Request API
  indicate the presence of—and to explain how to correct—validation
  in the payer details."
  (:refer-clojure :exclude [name]))

(defn email
  "Property.

  The email property is included in a `web.payments.PayerErrors`
  if the `PaymentResponse.payerEmail` property failed validation;
  this case, the property should contain a string describing how
  correct the problem. If the payer's email address passed validation,
  property is not included in the PayerErrors object.

  `payerEmail = payerErrors.email;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/email`"
  [this]
  (-> this (.-email)))

(defn set-email!
  "Property.

  The email property is included in a `web.payments.PayerErrors`
  if the `PaymentResponse.payerEmail` property failed validation;
  this case, the property should contain a string describing how
  correct the problem. If the payer's email address passed validation,
  property is not included in the PayerErrors object.

  `payerEmail = payerErrors.email;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/email`"
  [this val]
  (aset this "email" val))

(defn name
  "Property.

  The name property is included in a `web.payments.PayerErrors`
  if the `payerName` returned in the response couldn't be validated.
  value is a string explaining the problem. If the payer's name
  successfully, the name property is omitted from the PayerErrors

  `payerName = payerErrors.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name property is included in a `web.payments.PayerErrors`
  if the `payerName` returned in the response couldn't be validated.
  value is a string explaining the problem. If the payer's name
  successfully, the name property is omitted from the PayerErrors

  `payerName = payerErrors.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/name`"
  [this val]
  (aset this "name" val))

(defn phone
  "Property.

  The phone property is found in a `web.payments.PayerErrors` object
  the `payerName` returned in the response couldn't be validated
  a valid phone number. The value of this property is a string
  the problem. If the payer's phone number validated successfully,
  phone property is omitted from the PayerErrors object.

  `payerPhone = payerErrors.phone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/phone`"
  [this]
  (-> this (.-phone)))

(defn set-phone!
  "Property.

  The phone property is found in a `web.payments.PayerErrors` object
  the `payerName` returned in the response couldn't be validated
  a valid phone number. The value of this property is a string
  the problem. If the payer's phone number validated successfully,
  phone property is omitted from the PayerErrors object.

  `payerPhone = payerErrors.phone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/phone`"
  [this val]
  (aset this "phone" val))

