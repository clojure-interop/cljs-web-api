(ns web.MerchantValidationEvent
  "The MerchantValidationEvent interface of the the Payment Request
  enables a merchant to verify themselves as allowed to use a particular
  handler."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MerchantValidationEvent() constructor creates a new `web.MerchantValidationEvent` object. You should not have to create these events yourself; instead, just handle the merchantvalidation event.

  type
  A `dom.DOMString` which must be merchantvalidation, the only type of event which uses the MerchantValidationEvent interface.
  options Optional

  An optional dictionary which may contain zero or more of the following properties:


  methodName Optional
  A `dom.DOMString` containing the payment method identifier for the payment handler being used. This is an empty string by default.
  validationURL Optional
  The URL from which to retrieve payment handler specific verification information used to validate the merchant. This is an empty string by default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent`"
  js/MerchantValidationEvent)

(defn complete
  "Method.

  The `web.MerchantValidationEvent` method complete() takes merchant-specific
  previously received from the `web.validationURL` and uses it
  validate the merchant.

  `merchantValidationEvent.complete(validationData);
  merchantValidationEvent.complete(merchantSessionPromise);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/complete`"
  [this & args]
  (apply (-> this .-complete) (concat [this] args)))

(defn method-name
  "Property.

  The `web.MerchantValidationEvent` property methodName is a read-only
  which returns a string indicating the payment method identifier
  represents the payment handler that requires merchant validation.

  `methodID = merchantValidationEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`"
  [this]
  (-> this (.methodName)))

(defn set-method-name!
  "Property.

  The `web.MerchantValidationEvent` property methodName is a read-only
  which returns a string indicating the payment method identifier
  represents the payment handler that requires merchant validation.

  `methodID = merchantValidationEvent.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/methodName`"
  [this val]
  (aset this "methodName" val))

(defn validation-url
  "Property.

  The `web.MerchantValidationEvent` property validationURL is a
  string value providing the URL from which to fetch the payment
  data needed to validate the merchant.

  `validationURL = merchantValidationEvent.validationURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`"
  [this]
  (-> this (.validationURL)))

(defn set-validation-url!
  "Property.

  The `web.MerchantValidationEvent` property validationURL is a
  string value providing the URL from which to fetch the payment
  data needed to validate the merchant.

  `validationURL = merchantValidationEvent.validationURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MerchantValidationEvent/validationURL`"
  [this val]
  (aset this "validationURL" val))

