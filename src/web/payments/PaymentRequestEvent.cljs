(ns web.payments.PaymentRequestEvent
  "The PaymentRequestEvent interface of the the Payment Request
  is the object passed to a payment handler when a `web.payments.PaymentRequest`
  made."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PaymentRequestEvent constructor creates a new `web.payments.PaymentRequestEvent` object which is a constructor for a `web.payments.PaymentRequestEvent` which is the object passed to a payment handler when a `web.payments.PaymentRequest` is made..

  type
  Must always be 'PaymentRequest'.
  options Optional
  Options are as follows:

  instrumentKey: A `PaymentInstrument` object reflecting the payment instrument selected by the user or an empty string if the user has not registered or chosen a payment instrument.
  methodData: An array of `PaymentMethodData` objects containing payment method identifers for the payment methods that the web site accepts and any associated payment method specific data.
  modifiers: An array of objects containing changes to payment details.
  paymentRequestId: The ID of the `web.payments.PaymentRequest` object.
  paymentRequestOrigin: The origin where the `web.payments.PaymentRequest` object was initialized.
  topLeveOrigin: The top-level origin where the `web.payments.PaymentRequest` object was initialized.
  total: The total amount being requested for payment.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent`"
  js/PaymentRequestEvent)

(defn open-window
  "Method.

  The openWindow property of the `web.payments.PaymentRequestEvent`
  opens the specified URL in a new window, if and only if the given
  is on the same origin as the calling page. It returns a `js.Promise`
  resolves with a reference to a `web.service-workers.WindowClient`.

  `var aPromise = paymentRequestEvent.openWindow(url)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/openWindow`"
  [this url]
  (-> this (.openWindow url)))

(defn respond-with
  "Method.

  The respondWith property of the `web.payments.PaymentRequestEvent`
  prevents the default event handling and allows you to provide
  `js.Promise` for a `web.payments.PaymentResponse` object yourself.

  `paymentRequestEvent.respondWith(
  // Promise that resolves with a PaymentResponse.
  )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/respondWith`"
  [this & args]
  (apply (-> this .-respondWith) (concat [this] args)))

(defn instrument-key
  "Property.

  The instrumentKey read-only property of the `web.payments.PaymentRequestEvent`
  returns a `PaymentInstrument` object reflecting the payment instrument
  by the user or an empty string if the user has not registered
  chosen a payment instrument.

  `var instrumentKey = paymentRequestEvent.instrumentKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/instrumentKey`"
  [this]
  (-> this (.instrumentKey)))

(defn set-instrument-key!
  "Property.

  The instrumentKey read-only property of the `web.payments.PaymentRequestEvent`
  returns a `PaymentInstrument` object reflecting the payment instrument
  by the user or an empty string if the user has not registered
  chosen a payment instrument.

  `var instrumentKey = paymentRequestEvent.instrumentKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/instrumentKey`"
  [this val]
  (aset this "instrumentKey" val))

(defn payment-request-id
  "Property.

  The paymentRequestId read-only property of the `web.payments.PaymentRequestEvent`
  returns the ID of the `web.payments.PaymentRequest` object.

  `var id = paymentRequestEvent.paymentRequestId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestId`"
  [this]
  (-> this (.paymentRequestId)))

(defn set-payment-request-id!
  "Property.

  The paymentRequestId read-only property of the `web.payments.PaymentRequestEvent`
  returns the ID of the `web.payments.PaymentRequest` object.

  `var id = paymentRequestEvent.paymentRequestId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestId`"
  [this val]
  (aset this "paymentRequestId" val))

(defn payment-request-origin
  "Property.

  The paymentRequestOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the origin where the `web.payments.PaymentRequest` object
  initialized.

  `var aUsvString = paymentRequestEvent.paymentRequestOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin`"
  [this]
  (-> this (.paymentRequestOrigin)))

(defn set-payment-request-origin!
  "Property.

  The paymentRequestOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the origin where the `web.payments.PaymentRequest` object
  initialized.

  `var aUsvString = paymentRequestEvent.paymentRequestOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin`"
  [this val]
  (aset this "paymentRequestOrigin" val))

(defn top-origin
  "Property.

  The topOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the top level payee origin where the `web.payments.PaymentRequest`
  was initialized.

  `var aUsvString = paymentRequestEvent.topOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/topLevelOrigin`"
  [this]
  (-> this (.topOrigin)))

(defn set-top-origin!
  "Property.

  The topOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the top level payee origin where the `web.payments.PaymentRequest`
  was initialized.

  `var aUsvString = paymentRequestEvent.topOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/topLevelOrigin`"
  [this val]
  (aset this "topOrigin" val))

(defn total
  "Property.

  The total readonly property of the `web.payments.PaymentRequestEvent`
  returns a `web.payments.PaymentCurrencyAmount` object containing
  total amount being requested for payment.

  `var paymentCurrencyAmount = paymentRequestEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/total`"
  [this]
  (-> this (.total)))

(defn set-total!
  "Property.

  The total readonly property of the `web.payments.PaymentRequestEvent`
  returns a `web.payments.PaymentCurrencyAmount` object containing
  total amount being requested for payment.

  `var paymentCurrencyAmount = paymentRequestEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/total`"
  [this val]
  (aset this "total" val))

