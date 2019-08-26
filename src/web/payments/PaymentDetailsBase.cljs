(ns web.payments.PaymentDetailsBase
  "The PaymentDetailsBase dictionary is a mixin used by the `PaymentDetailsInit`
  `web.payments.PaymentDetailsUpdate` dictionaries."
  (:refer-clojure :exclude []))

(defn display-items
  "Property.

  An array of PaymentItem objects, each describing one line item
  the payment request. These represent the line items on a receipt
  invoice."
  [this]
  (-> this (.-displayItems)))

(defn set-display-items!
  "Property.

  An array of PaymentItem objects, each describing one line item
  the payment request. These represent the line items on a receipt
  invoice."
  [this val]
  (aset this "displayItems" val))

(defn modifiers
  "Property.

  An array of PaymentDetailsModifier objects, each describing a
  for particular payment method identifiers. For example, you can
  one to adjust the total payment amount based on the selected
  method (\"5% cash discount!\")."
  [this]
  (-> this (.-modifiers)))

(defn set-modifiers!
  "Property.

  An array of PaymentDetailsModifier objects, each describing a
  for particular payment method identifiers. For example, you can
  one to adjust the total payment amount based on the selected
  method (\"5% cash discount!\")."
  [this val]
  (aset this "modifiers" val))

(defn shipping-options
  "Property.

  An array of PaymentShippingOption objects, each describing one
  shipping option from which the user may choose."
  [this]
  (-> this (.-shippingOptions)))

(defn set-shipping-options!
  "Property.

  An array of PaymentShippingOption objects, each describing one
  shipping option from which the user may choose."
  [this val]
  (aset this "shippingOptions" val))

