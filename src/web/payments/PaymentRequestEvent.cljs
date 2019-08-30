(ns web.payments.PaymentRequestEvent
  "The PaymentRequestEvent interface of the the Payment Request
  is the object passed to a payment handler when a `web.payments.PaymentRequest`
  made."
  (:refer-clojure :exclude []))

(defn open-window
  "Method.

  [Experimental]

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

  [Experimental]

  The respondWith property of the `web.payments.PaymentRequestEvent`
  prevents the default event handling and allows you to provide
  `js.Promise` for a `web.payments.PaymentResponse` object yourself.

  `paymentRequestEvent.respondWith(
  // Promise that resolves with a PaymentResponse.
  )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/respondWith`"
  [this & args]
  (-> this .-respondWith (.apply this (clj->js args))))

(defn instrument-key
  "Property.

  [Read Only]
  [Experimental]

  The instrumentKey read-only property of the `web.payments.PaymentRequestEvent`
  returns a `PaymentInstrument` object reflecting the payment instrument
  by the user or an empty string if the user has not registered
  chosen a payment instrument.

  `var instrumentKey = paymentRequestEvent.instrumentKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/instrumentKey`"
  [this]
  (-> this (.-instrumentKey)))

(defn method-data
  "Property.

  [Read Only]
  [Experimental]

  The methodData read-only property of the `web.payments.PaymentRequestEvent`
  returns an array of `PaymentMethodData` objects containing payment
  identifers for the payment methods that the web site accepts
  any associated payment method specific data.

  `var methodData[] = paymentRequestEvent.methodData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/methodData`"
  [this]
  (-> this (.-methodData)))

(defn modifiers
  "Property.

  [Read Only]
  [Experimental]

  The modifiers read-only property of the `web.payments.PaymentRequestEvent`
  returns an array of objects containing changes to payment details.

  `var modifiers[] = paymentDetailsEvent.modifiers`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/modifiers`"
  [this]
  (-> this (.-modifiers)))

(defn payment-request-id
  "Property.

  [Read Only]
  [Experimental]

  The paymentRequestId read-only property of the `web.payments.PaymentRequestEvent`
  returns the ID of the `web.payments.PaymentRequest` object.

  `var id = paymentRequestEvent.paymentRequestId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestId`"
  [this]
  (-> this (.-paymentRequestId)))

(defn payment-request-origin
  "Property.

  [Read Only]
  [Experimental]

  The paymentRequestOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the origin where the `web.payments.PaymentRequest` object
  initialized.

  `var aUsvString = paymentRequestEvent.paymentRequestOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin`"
  [this]
  (-> this (.-paymentRequestOrigin)))

(defn top-origin
  "Property.

  [Read Only]
  [Experimental]

  The topOrigin read-only property of the `web.payments.PaymentRequestEvent`
  returns the top level payee origin where the `web.payments.PaymentRequest`
  was initialized.

  `var aUsvString = paymentRequestEvent.topOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/topOrigin`"
  [this]
  (-> this (.-topOrigin)))

(defn total
  "Property.

  [Read Only]
  [Experimental]

  The total readonly property of the `web.payments.PaymentRequestEvent`
  returns a `web.payments.PaymentCurrencyAmount` object containing
  total amount being requested for payment.

  `var paymentCurrencyAmount = paymentRequestEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestEvent/total`"
  [this]
  (-> this (.-total)))

