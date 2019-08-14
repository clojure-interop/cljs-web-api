(ns payment.PaymentResponse
  "The PaymentResponse interface of the Payment Request API is returned
  a user selects a payment method and approves a payment request."
  (:refer-clojure :exclude []))

(defn complete
  "Method.

  The `payment.PaymentRequest` method complete() of the Payment
  API notifies the user agent that the user interaction is over,
  causes any remaining user interface to be closed.

  `completePromise = paymentRequest.complete(result);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/complete`"
  [this result]
  (-> this (.complete result)))

(defn retry
  "Method.

  The `payment.PaymentResponse` interface's reply() method makes
  possible to ask the user to retry a payment after an error occurs
  processing.

  `retryPromise = paymentRequest.retry(errorFields);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/retry`"
  [this error-fields]
  (-> this (.retry error-fields)))

(defn details
  "Property.

  The details read-only property of the `payment.PaymentResponse`
  returns a JSON-serializable object that provides a payment method
  message used by the merchant to process the transaction and determine
  successful funds transfer.

  `var detailsObject = PaymentResponse.details;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details`"
  [this]
  (-> this (.details)))

(defn set-details!
  "Property.

  The details read-only property of the `payment.PaymentResponse`
  returns a JSON-serializable object that provides a payment method
  message used by the merchant to process the transaction and determine
  successful funds transfer.

  `var detailsObject = PaymentResponse.details;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details`"
  [this val]
  (aset this "details" val))

(defn method-name
  "Property.

  The methodName read-only property of the `payment.PaymentResponse`
  returns a string uniquely identifying the payment handler selected
  the user.

  `var methodName = PaymentResponse.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName`"
  [this]
  (-> this (.methodName)))

(defn set-method-name!
  "Property.

  The methodName read-only property of the `payment.PaymentResponse`
  returns a string uniquely identifying the payment handler selected
  the user.

  `var methodName = PaymentResponse.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName`"
  [this val]
  (aset this "methodName" val))

(defn onpayerdetailchange
  "Property.

  The `payment.PaymentResponse` object's onpayerdetailchange property
  an event handler which is called to handle the payerdetailchange
  which is sent to the PaymentResponse when the user makes changes
  their personal information while filling out a payment request

  `paymentResponse.onpayerdetailchange = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`"
  [this]
  (-> this (.onpayerdetailchange)))

(defn set-onpayerdetailchange!
  "Property.

  The `payment.PaymentResponse` object's onpayerdetailchange property
  an event handler which is called to handle the payerdetailchange
  which is sent to the PaymentResponse when the user makes changes
  their personal information while filling out a payment request

  `paymentResponse.onpayerdetailchange = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`"
  [this val]
  (aset this "onpayerdetailchange" val))

(defn payer-email
  "Property.

  The payerEmail read-only property of the `payment.PaymentResponse`
  returns the email address supplied by the user. This option is
  present when the requestPayerEmail option is set to true in the
  object passed to the `payment.PaymentRequest` constructor.

  `var payerEmail = PaymentResponse.payerEmail;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail`"
  [this]
  (-> this (.payerEmail)))

(defn set-payer-email!
  "Property.

  The payerEmail read-only property of the `payment.PaymentResponse`
  returns the email address supplied by the user. This option is
  present when the requestPayerEmail option is set to true in the
  object passed to the `payment.PaymentRequest` constructor.

  `var payerEmail = PaymentResponse.payerEmail;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail`"
  [this val]
  (aset this "payerEmail" val))

(defn payer-name
  "Property.

  The payerName read-only property of the `payment.PaymentResponse`
  returns the name supplied by the user. This option is only present
  the requestPayerName option is set to true in the options parameter
  the `payment.PaymentRequest()` constructor.

  `var payerName = PaymentResponse.payerName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName`"
  [this]
  (-> this (.payerName)))

(defn set-payer-name!
  "Property.

  The payerName read-only property of the `payment.PaymentResponse`
  returns the name supplied by the user. This option is only present
  the requestPayerName option is set to true in the options parameter
  the `payment.PaymentRequest()` constructor.

  `var payerName = PaymentResponse.payerName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName`"
  [this val]
  (aset this "payerName" val))

(defn payer-phone
  "Property.

  The payerPhone read-only property of the `payment.PaymentResponse`
  returns the phone number supplied by the user. This option is
  present when the requestPayerPhone option is set to true in the
  object passed to the `payment.PaymentRequest` constructor.

  `var payerPhone = PaymentResponse.payerPhone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone`"
  [this]
  (-> this (.payerPhone)))

(defn set-payer-phone!
  "Property.

  The payerPhone read-only property of the `payment.PaymentResponse`
  returns the phone number supplied by the user. This option is
  present when the requestPayerPhone option is set to true in the
  object passed to the `payment.PaymentRequest` constructor.

  `var payerPhone = PaymentResponse.payerPhone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone`"
  [this val]
  (aset this "payerPhone" val))

(defn request-id
  "Property.

  The requestId read-only property of the `payment.PaymentResponse`
  rreturns the free-form identifier supplied by the PaymentResponse()
  by details.id.

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId`"
  [this]
  (-> this (.requestId)))

(defn set-request-id!
  "Property.

  The requestId read-only property of the `payment.PaymentResponse`
  rreturns the free-form identifier supplied by the PaymentResponse()
  by details.id.

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId`"
  [this val]
  (aset this "requestId" val))

(defn shipping-address
  "Property.

  The shippingAddress read-only property of the PaymentRequest
  returns a `payment.PaymentAddress` object containing the shipping
  provided by the user.

  `var shippingAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress`"
  [this]
  (-> this (.shippingAddress)))

(defn set-shipping-address!
  "Property.

  The shippingAddress read-only property of the PaymentRequest
  returns a `payment.PaymentAddress` object containing the shipping
  provided by the user.

  `var shippingAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress`"
  [this val]
  (aset this "shippingAddress" val))

(defn shipping-option
  "Property.

  The shippingOption read-only property of the PaymentRequest interface
  the ID attribute of the shipping option selected by the user.
  option is only present when the requestShipping option is set
  true in the `payment.PaymentOptions` object passed to the `payment.PaymentRequest`

  `var shippingOption = PaymentRequest.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption`"
  [this]
  (-> this (.shippingOption)))

(defn set-shipping-option!
  "Property.

  The shippingOption read-only property of the PaymentRequest interface
  the ID attribute of the shipping option selected by the user.
  option is only present when the requestShipping option is set
  true in the `payment.PaymentOptions` object passed to the `payment.PaymentRequest`

  `var shippingOption = PaymentRequest.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption`"
  [this val]
  (aset this "shippingOption" val))

