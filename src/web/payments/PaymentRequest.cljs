(ns web.payments.PaymentRequest
  "The Payment Request API's PaymentRequest interface the primary
  point into the API, and lets web content and apps accept payments
  the end user on behalf of the operator of the site or the publisher
  the app."
  (:refer-clojure :exclude []))

(defn can-make-payment
  "Method.

  The `web.payments.PaymentRequest` method canMakePayment() determines
  or not the request is configured in a way that is compatible
  at least one payment method supported by the user agent.

  `paymentRequest.canMakePayment()
  .then( canPay => { ... })
  .catch( error => { ... })

  canPay = await paymentRequest.canMakePayment();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/canMakePayment`"
  [this & args]
  (-> this .-canMakePayment (.apply this (clj->js args))))

(defn show
  "Method.

  The `web.payments.PaymentRequest` interface's show() method instructs
  user agent to begin the process of showing and handling the user
  for the payment request to the user.

  `paymentPromise = paymentRequest.show(detailsPromise);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/show`"
  [this details-promise]
  (-> this (.show details-promise)))

(defn abort
  "Method.

  [Experimental]

  The PaymentRequest.abort() method of the `web.payments.PaymentRequest`
  causes the user agent to end the payment request and to remove
  user interface that might be shown.

  `PaymentRequest.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/abort`"
  [this ]
  (-> this (.abort)))

(defn id
  "Property.

  [Read Only]
  [Experimental]

  The id read-only attribute of the `web.payments.PaymentRequest`
  returns a unique identifier for a particular `web.payments.PaymentRequest`

  `var id = paymentRequest.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/id`"
  [this]
  (-> this (.-id)))

(defn shipping-address
  "Property.

  [Read Only]
  [Experimental]

  The shippingAddress read-only property of the `web.payments.PaymentRequest`
  returns the shipping address provided by the user. It is null
  default.

  `var paymentAddress = PaymentRequest.shippingAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress`"
  [this]
  (-> this (.-shippingAddress)))

(defn shipping-option
  "Property.

  [Read Only]
  [Experimental]

  The shippingOption read-only attribute of the `web.payments.PaymentRequest`
  returns either the id of a selected shipping option, null (if
  shipping option was set to be selected) or a shipping option
  by the user. It is initially null by when no \\\"selected\\\" shipping
  are provided.

  `// Returns the id of the selected PaymentShippingOption
  var shippingOption = request.shippingOption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingOption`"
  [this]
  (-> this (.-shippingOption)))

(defn shipping-type
  "Property.

  [Read Only]
  [Experimental]

  The shippingType read-only property of the `web.payments.PaymentRequest`
  returns one of \\\"shipping\\\", \\\"delivery\\\", \\\"pickup\\\", or null
  one was not provided by the constructor.

  `var shippingType = paymentRequest.shippingType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingType`"
  [this]
  (-> this (.-shippingType)))

(defn onmerchantvalidation
  "Property.

  The `web.payments.PaymentRequest` event handler onmerchantvalidation
  invoked when the merchantvalidation

  `paymentRequest.onmerchantvalidation = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`"
  [this]
  (-> this (.-onmerchantvalidation)))

(defn set-onmerchantvalidation!
  "Property.

  The `web.payments.PaymentRequest` event handler onmerchantvalidation
  invoked when the merchantvalidation

  `paymentRequest.onmerchantvalidation = eventHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onmerchantvalidation`"
  [this val]
  (aset this "onmerchantvalidation" val))

(defn onpaymentmethodchange
  "Property.

  The `web.payments.PaymentRequest` event handler onpaymentmethodchange
  invoked when the paymentmethodchange

  `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });

  PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`"
  [this]
  (-> this (.-onpaymentmethodchange)))

(defn set-onpaymentmethodchange!
  "Property.

  The `web.payments.PaymentRequest` event handler onpaymentmethodchange
  invoked when the paymentmethodchange

  `PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });

  PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onpaymentmethodchange`"
  [this val]
  (aset this "onpaymentmethodchange" val))

(defn onshippingaddresschange
  "Property.

  The onshippingaddresschange event of the `web.payments.PaymentRequest`
  is fired whenever the user changes their shipping address, including
  an address is added by the user for the first time.

  `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });

  PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`"
  [this]
  (-> this (.-onshippingaddresschange)))

(defn set-onshippingaddresschange!
  "Property.

  The onshippingaddresschange event of the `web.payments.PaymentRequest`
  is fired whenever the user changes their shipping address, including
  an address is added by the user for the first time.

  `PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { ... });

  PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/onshippingaddresschange`"
  [this val]
  (aset this "onshippingaddresschange" val))

