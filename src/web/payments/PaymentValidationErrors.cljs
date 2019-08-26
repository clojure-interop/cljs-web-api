(ns web.payments.PaymentValidationErrors
  "The PaymentValidationErrors dictionary represents objects providing
  about any and all errors that occurred while processing a payment
  When validation of the `web.payments.PaymentResponse` returned
  the `PaymentRequest.show()` or `PaymentResponse.retry()` methods
  your code creates a PaymentValidationErrors object to pass into
  so that the user agent knows what needs to be fixed and what
  any error messages to display to the user."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  A general description of a payment error from which the user
  attempt to recover by retrying the payment, possibly after correcting
  in the payment information. error can be provided all by itself
  provide only a generic error message, or in concert with the
  properties to serve as an overview while other properties' values
  the user to errors in specific fields in the payment form."
  [this]
  (-> this (.-error)))

(defn set-error!
  "Property.

  A general description of a payment error from which the user
  attempt to recover by retrying the payment, possibly after correcting
  in the payment information. error can be provided all by itself
  provide only a generic error message, or in concert with the
  properties to serve as an overview while other properties' values
  the user to errors in specific fields in the payment form."
  [this val]
  (aset this "error" val))

(defn payer
  "Property.

  A PayerErrors compliant object which provides appropriate error
  for any of the fields describing the payer which failed validation."
  [this]
  (-> this (.-payer)))

(defn set-payer!
  "Property.

  A PayerErrors compliant object which provides appropriate error
  for any of the fields describing the payer which failed validation."
  [this val]
  (aset this "payer" val))

(defn payment-method
  "Property.

  Any payment method specific errors which may have occurred. This
  contents will vary depending on the payment used. For example,
  the user chose to pay by credit card using the basic-card payment
  this is a BasicCardErrors object."
  [this]
  (-> this (.-paymentMethod)))

(defn set-payment-method!
  "Property.

  Any payment method specific errors which may have occurred. This
  contents will vary depending on the payment used. For example,
  the user chose to pay by credit card using the basic-card payment
  this is a BasicCardErrors object."
  [this val]
  (aset this "paymentMethod" val))

(defn shipping-address
  "Property.

  An AddressErrors object which contains error messages for any
  the fields in the shipping address that failed validation."
  [this]
  (-> this (.-shippingAddress)))

(defn set-shipping-address!
  "Property.

  An AddressErrors object which contains error messages for any
  the fields in the shipping address that failed validation."
  [this val]
  (aset this "shippingAddress" val))

