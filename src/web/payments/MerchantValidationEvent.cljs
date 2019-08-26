(ns web.payments.MerchantValidationEvent
  "The MerchantValidationEvent interface of the the Payment Request
  enables a merchant to verify themselves as allowed to use a particular
  handler."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MerchantValidationEvent() constructor creates a new `web.payments.MerchantValidationEvent` object. You should not have to create these events yourself; instead, just handle the merchantvalidation event.

  type
  A `web.dom.DOMString` which must be merchantvalidation, the only type of event which uses the MerchantValidationEvent interface.
  options Optional

  An optional dictionary which may contain zero or more of the following properties:


  methodName Optional
  A `web.dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
  validationURL Optional
  The URL from which to retrieve payment handler specific verification information used to validate the merchant. This is an empty string by default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent`"
  js/MerchantValidationEvent)

(defn complete
  "Method.

  The `web.payments.MerchantValidationEvent` method complete()
  merchant-specific information previously received from the `validationURL`
  uses it to validate the merchant.

  `merchantValidationEvent.complete(validationData);
  merchantValidationEvent.complete(merchantSessionPromise);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/complete`"
  [this & args]
  (apply (-> this .-complete) (concat [this] args)))

(defn method-name
  "Property.

  The `web.payments.MerchantValidationEvent` property methodName
  a read-only value which returns a string indicating the payment
  identifier which represents the payment handler that requires
  validation.

  `methodID = merchantValidationEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`"
  [this]
  (-> this (.methodName)))

(defn set-method-name!
  "Property.

  The `web.payments.MerchantValidationEvent` property methodName
  a read-only value which returns a string indicating the payment
  identifier which represents the payment handler that requires
  validation.

  `methodID = merchantValidationEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`"
  [this val]
  (aset this "methodName" val))

(defn validation-url
  "Property.

  The `web.payments.MerchantValidationEvent` property validationURL
  a read-only string value providing the URL from which to fetch
  payment handler-specific data needed to validate the merchant.

  `validationURL = merchantValidationEvent.validationURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`"
  [this]
  (-> this (.validationURL)))

(defn set-validation-url!
  "Property.

  The `web.payments.MerchantValidationEvent` property validationURL
  a read-only string value providing the URL from which to fetch
  payment handler-specific data needed to validate the merchant.

  `validationURL = merchantValidationEvent.validationURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`"
  [this val]
  (aset this "validationURL" val))

