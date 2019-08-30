(ns web.payments.MerchantValidationEvent
  "The MerchantValidationEvent interface of the the Payment Request
  enables a merchant to verify themselves as allowed to use a particular
  handler."
  (:refer-clojure :exclude []))

(defn complete
  "Method.

  The `web.payments.MerchantValidationEvent` method complete()
  merchant-specific information previously received from the `validationURL`
  uses it to validate the merchant.

  `merchantValidationEvent.complete(validationData);
  merchantValidationEvent.complete(merchantSessionPromise);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/complete`"
  [this & args]
  (-> this .-complete (.apply this (clj->js args))))

(defn method-name
  "Property.

  [Read Only]

  The `web.payments.MerchantValidationEvent` property methodName
  a read-only value which returns a string indicating the payment
  identifier which represents the payment handler that requires
  validation.

  `methodID = merchantValidationEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`"
  [this]
  (-> this (.-methodName)))

(defn validation-url
  "Property.

  [Read Only]

  The `web.payments.MerchantValidationEvent` property validationURL
  a read-only string value providing the URL from which to fetch
  payment handler-specific data needed to validate the merchant.

  `validationURL = merchantValidationEvent.validationURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`"
  [this]
  (-> this (.-validationURL)))

