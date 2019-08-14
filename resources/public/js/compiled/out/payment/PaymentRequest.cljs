(ns payment.PaymentRequest
  "The Payment Request API's PaymentRequest interface the primary
  point into the API, and lets web content and apps accept payments
  the end user on behalf of the operator of the site or the publisher
  the app."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentRequest() constructor creates a new `payment.PaymentRequest` object which will be used to handle the process of generating, validating, and submitting a payment request.

  methodData
  Contains an array of identifiers for the payment methods the merchant web site accepts and any associated payment method specific data. Each item in the array contains the following fields:

  supportedMethods
  For early implementations of the spec, this was a sequence of identifiers for payment methods that the merchant website accepts. Starting with more recent browsers, this parameter is more generic than credit cards, it is a single `dom.DOMString`, and the meaning of the data parameter changes with the supportedMethods. For example, the basic card payment method is selected by specifying the string basic-card here.
  data
  A JSON-serializable object that provides optional information that might be needed by the supported payment methods. This has to conform to the type expected by the payment handler indicated by supportedMethods. For basic credit card services, this structure should match the `web.BasicCardRequest` dictionary.


  details
  Provides information about the requested transaction. This parameter contains the following fields:

  total
  The total amount of the payment request.
  id Optional
  A free-form identifier for this payment request. If a value is not supplied, the browser will construct one.
  displayItems
  An array of optional line items for the payment request that the user agent may display, such as product details, tax, and shipping.
  shippingOptions
  The shipping options the user may choose from. If this sequence is blank, it indicates the merchant cannot ship to the current shipping address. The default shipping option may be indicated in this sequence.
  modifiers
  Modifiers for specific payment methods; for example, adjusting the total amount based on the payment method. This parameter contains the following fields:

  additionalDisplayItems
  An array of items to be appended to the details.displayItems property. This property is commonly used to add a discount or surcharge line item indicating the different amount in details.modifiers.total.
  data
  A JSON-serializable object that provides optional information that might be needed by the supported payment methods. This has to conform to the structure defined in the `web.BasicCardRequest` dictionary.
  total
  A total amount for the payment request that overrides value in details.total. This is typically used when details.modifiers.additionalItems adds a discount or a surchase to the request.




  options Optional
  Lets you set options that control the behavior of the user agent. This parameter contains the following fields:


  requestPayerName
  A Boolean indicating whether the user agent should collect the payer's name and submit it with the payment request. The default is false.
  requestPayerEmail
  A Boolean indicating whether the user agent should collect the payer's email address and submit it with the payment request. The default is false.
  requestPayerPhone
  A Boolean indicating whether the user agent should collect the payer's phone number and submit it with the payment request. The default is false.
  requestShipping
  A Boolean indicating whether the user agent should collect the payer's shipping address and submit it with the payment request. If you set this type to true, you should select an appropriate shippingType. The default is false.
  shippingType
  Lets you specify how the user interface refers to shipping when the word 'shipping' isn't appropriate for your use case. For example, in English speaking countries you would say \\\"pizza delivery\\\" not \\\"pizza shipping\\\". Valid values are \\\"shipping\\\", \\\"delivery\\\", and \\\"pickup\\\". Quotation marks must be included. The default value is \\\"shipping\\\".

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest`"
  js/PaymentRequest)

(defn can-make-payment
  "Method.

  The `payment.PaymentRequest` method canMakePayment() determines
  or not the request is configured in a way that is compatible
  at least one payment method supported by the user agent.

  `paymentRequest.canMakePayment()
  .then( canPay => { ... })
  .catch( error => { ... })

  canPay = await paymentRequest.canMakePayment();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/canMakePayment`"
  [this & args]
  (apply (-> this .-canMakePayment) (concat [this] args)))

(defn show
  "Method.

  The `payment.PaymentRequest` interface's show() method instructs
  user agent to begin the process of showing and handling the user
  for the payment request to the user.

  `paymentPromise = paymentRequest.show(detailsPromise);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/show`"
  [this details-promise]
  (-> this (.show details-promise)))

(defn abort
  "Method.

  The PaymentRequest.abort() method of the `payment.PaymentRequest`
  causes the user agent to end the payment request and to remove
  user interface that might be shown.

  `PaymentRequest.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/abort`"
  [this ]
  (-> this (.abort)))

(defn onmerchantvalidation
  "Property.

  The `payment.PaymentRequest` event handler onmerchantvalidation
  invoked when the merchantvalidation

  `paymentRequest.onmerchantvalidation = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`"
  [this]
  (-> this (.onmerchantvalidation)))

(defn set-onmerchantvalidation!
  "Property.

  The `payment.PaymentRequest` event handler onmerchantvalidation
  invoked when the merchantvalidation

  `paymentRequest.onmerchantvalidation = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`"
  [this val]
  (aset this "onmerchantvalidation" val))

(defn onpaymentmethodchange
  "Property.

  The `payment.PaymentRequest` event handler onpaymentmethodchange
  invoked when the paymentmethodchange

  `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });

  PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`"
  [this]
  (-> this (.onpaymentmethodchange)))

(defn set-onpaymentmethodchange!
  "Property.

  The `payment.PaymentRequest` event handler onpaymentmethodchange
  invoked when the paymentmethodchange

  `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });

  PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`"
  [this val]
  (aset this "onpaymentmethodchange" val))

(defn onshippingaddresschange
  "Property.

  The onshippingaddresschange event of the `payment.PaymentRequest`
  is fired whenever the user changes their shipping address, including
  an address is added by the user for the first time.

  `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });

  PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`"
  [this]
  (-> this (.onshippingaddresschange)))

(defn set-onshippingaddresschange!
  "Property.

  The onshippingaddresschange event of the `payment.PaymentRequest`
  is fired whenever the user changes their shipping address, including
  an address is added by the user for the first time.

  `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });

  PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`"
  [this val]
  (aset this "onshippingaddresschange" val))

(defn shipping-address
  "Property.

  The shippingAddress read-only property of the `payment.PaymentRequest`
  returns the shipping address provided by the user. It is null
  default.

  `var paymentAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress`"
  [this]
  (-> this (.shippingAddress)))

(defn set-shipping-address!
  "Property.

  The shippingAddress read-only property of the `payment.PaymentRequest`
  returns the shipping address provided by the user. It is null
  default.

  `var paymentAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress`"
  [this val]
  (aset this "shippingAddress" val))

(defn shipping-option
  "Property.

  The shippingOption read-only attribute of the `payment.PaymentRequest`
  returns either the id of a selected shipping option, null (if
  shipping option was set to be selected) or a shipping option
  by the user. It is initially null by when no \\\"selected\\\" shipping
  are provided.

  `// Returns the id of the selected PaymentShippingOption
  var shippingOption = request.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingOption`"
  [this]
  (-> this (.shippingOption)))

(defn set-shipping-option!
  "Property.

  The shippingOption read-only attribute of the `payment.PaymentRequest`
  returns either the id of a selected shipping option, null (if
  shipping option was set to be selected) or a shipping option
  by the user. It is initially null by when no \\\"selected\\\" shipping
  are provided.

  `// Returns the id of the selected PaymentShippingOption
  var shippingOption = request.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingOption`"
  [this val]
  (aset this "shippingOption" val))

(defn id
  "Property.

  The id read-only attribute of the `payment.PaymentRequest` interface
  a unique identifier for a particular `payment.PaymentRequest`

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The id read-only attribute of the `payment.PaymentRequest` interface
  a unique identifier for a particular `payment.PaymentRequest`

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/id`"
  [this val]
  (aset this "id" val))

(defn shipping-type
  "Property.

  The shippingType read-only property of the `payment.PaymentRequest`
  returns one of \\\"shipping\\\", \\\"delivery\\\", \\\"pickup\\\", or null
  one was not provided by the constructor.

  `var shippingType = paymentRequest.shippingType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingType`"
  [this]
  (-> this (.shippingType)))

(defn set-shipping-type!
  "Property.

  The shippingType read-only property of the `payment.PaymentRequest`
  returns one of \\\"shipping\\\", \\\"delivery\\\", \\\"pickup\\\", or null
  one was not provided by the constructor.

  `var shippingType = paymentRequest.shippingType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingType`"
  [this val]
  (aset this "shippingType" val))

