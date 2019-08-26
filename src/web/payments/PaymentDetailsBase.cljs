(ns web.payments.PaymentDetailsBase
  "The PaymentDetailsBase dictionary is a mixin used by the `PaymentDetailsInit`
  `web.payments.PaymentDetailsUpdate` dictionaries."
  (:refer-clojure :exclude []))

(defn display-items-optional
  "Property.

  An array of PaymentItem objects, each describing one line item
  the payment request. These represent the line items on a receipt
  invoice."
  [this]
  (-> this (.displayItemsOptional)))

(defn set-display-items-optional!
  "Property.

  An array of PaymentItem objects, each describing one line item
  the payment request. These represent the line items on a receipt
  invoice."
  [this val]
  (aset this "displayItemsOptional" val))

