(ns web.payments.PaymentDetailsUpdate
  "The PaymentDetailsUpdate dictionary is used to provide updated
  to the payment user interface after it has been instantiated."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  The `web.payments.PaymentDetailsUpdate` dictionary's error property
  a human-readable `web.dom.DOMString` which provides an error
  to be displayed if the specified information doesn't offer any
  shipping options.

  `errorString = paymentDetailsUpdate.error;

  paymentDetailsUpdate.error = errorString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  The `web.payments.PaymentDetailsUpdate` dictionary's error property
  a human-readable `web.dom.DOMString` which provides an error
  to be displayed if the specified information doesn't offer any
  shipping options.

  `errorString = paymentDetailsUpdate.error;

  paymentDetailsUpdate.error = errorString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/error`"
  [this val]
  (aset this "error" val))

(defn shipping-address-errors
  "Property.

  The `web.payments.PaymentDetailsUpdate` dictionary's shippingAddressErrors
  if present, contains an `web.payments.AddressErrors` object whose
  provide error messages for one or more of the values in the `web.payments.PaymentAddress`
  as `PaymentRequest.shippingAddress`.

  `var addressErrors = PaymentDetailsUpdate.shippingAddressErrors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/shippingAddressErrors`"
  [this]
  (-> this (.shippingAddressErrors)))

(defn set-shipping-address-errors!
  "Property.

  The `web.payments.PaymentDetailsUpdate` dictionary's shippingAddressErrors
  if present, contains an `web.payments.AddressErrors` object whose
  provide error messages for one or more of the values in the `web.payments.PaymentAddress`
  as `PaymentRequest.shippingAddress`.

  `var addressErrors = PaymentDetailsUpdate.shippingAddressErrors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentDetailsUpdate/shippingAddressErrors`"
  [this val]
  (aset this "shippingAddressErrors" val))

