(ns web.payments.PaymentResponse
  "The PaymentResponse interface of the Payment Request API is returned
  a user selects a payment method and approves a payment request."
  (:refer-clojure :exclude []))

(defn retry
  "Method.

  The `web.payments.PaymentResponse` interface's reply() method
  it possible to ask the user to retry a payment after an error
  during processing.

  `retryPromise = paymentRequest.retry(errorFields);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/retry`"
  [this error-fields]
  (-> this (.retry error-fields)))

(defn complete
  "Method.

  The `web.payments.PaymentRequest` method complete() of the Payment
  API notifies the user agent that the user interaction is over,
  causes any remaining user interface to be closed.

  `completePromise = paymentRequest.complete(result);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/complete`"
  [this result]
  (-> this (.complete result)))

(defn details
  "Property.

  [Read Only]
  [Experimental]

  The details read-only property of the `web.payments.PaymentResponse`
  returns a JSON-serializable object that provides a payment method
  message used by the merchant to process the transaction and determine
  successful funds transfer.

  `var detailsObject = PaymentResponse.details;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details`"
  [this]
  (-> this (.-details)))

(defn method-name
  "Property.

  [Read Only]

  The methodName read-only property of the `web.payments.PaymentResponse`
  returns a string uniquely identifying the payment handler selected
  the user.

  `var methodName = PaymentResponse.methodName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName`"
  [this]
  (-> this (.-methodName)))

(defn payer-email
  "Property.

  [Read Only]
  [Experimental]

  The payerEmail read-only property of the `web.payments.PaymentResponse`
  returns the email address supplied by the user. This option is
  present when the requestPayerEmail option is set to true in the
  object passed to the `web.payments.PaymentRequest` constructor.

  `var payerEmail = PaymentResponse.payerEmail;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail`"
  [this]
  (-> this (.-payerEmail)))

(defn payer-name
  "Property.

  [Read Only]
  [Experimental]

  The payerName read-only property of the `web.payments.PaymentResponse`
  returns the name supplied by the user. This option is only present
  the requestPayerName option is set to true in the options parameter
  the `PaymentRequest()` constructor.

  `var payerName = PaymentResponse.payerName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName`"
  [this]
  (-> this (.-payerName)))

(defn payer-phone
  "Property.

  [Read Only]
  [Experimental]

  The payerPhone read-only property of the `web.payments.PaymentResponse`
  returns the phone number supplied by the user. This option is
  present when the requestPayerPhone option is set to true in the
  object passed to the `web.payments.PaymentRequest` constructor.

  `var payerPhone = PaymentResponse.payerPhone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone`"
  [this]
  (-> this (.-payerPhone)))

(defn request-id
  "Property.

  [Read Only]
  [Experimental]

  The requestId read-only property of the `web.payments.PaymentResponse`
  rreturns the free-form identifier supplied by the PaymentResponse()
  by details.id.

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId`"
  [this]
  (-> this (.-requestId)))

(defn shipping-address
  "Property.

  [Read Only]
  [Experimental]

  The shippingAddress read-only property of the PaymentRequest
  returns a `web.payments.PaymentAddress` object containing the
  address provided by the user.

  `var shippingAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress`"
  [this]
  (-> this (.-shippingAddress)))

(defn shipping-option
  "Property.

  [Read Only]
  [Experimental]

  The shippingOption read-only property of the PaymentRequest interface
  the ID attribute of the shipping option selected by the user.
  option is only present when the requestShipping option is set
  true in the `PaymentOptions` object passed to the `web.payments.PaymentRequest`

  `var shippingOption = PaymentRequest.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption`"
  [this]
  (-> this (.-shippingOption)))

(defn onpayerdetailchange
  "Property.

  The `web.payments.PaymentResponse` object's onpayerdetailchange
  is an event handler which is called to handle the payerdetailchange
  which is sent to the PaymentResponse when the user makes changes
  their personal information while filling out a payment request

  `paymentResponse.onpayerdetailchange = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`"
  [this]
  (-> this (.-onpayerdetailchange)))

(defn set-onpayerdetailchange!
  "Property.

  The `web.payments.PaymentResponse` object's onpayerdetailchange
  is an event handler which is called to handle the payerdetailchange
  which is sent to the PaymentResponse when the user makes changes
  their personal information while filling out a payment request

  `paymentResponse.onpayerdetailchange = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange`"
  [this val]
  (aset this "onpayerdetailchange" val))

