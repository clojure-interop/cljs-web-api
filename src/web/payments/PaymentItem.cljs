(ns web.payments.PaymentItem
  "The `web.payments.PaymentItem` dictionary is used by the Payment
  API to describe a single line item on a payment request."
  (:refer-clojure :exclude []))

(defn amount
  "Property.

  A PaymentCurrencyAmount object describing the monetary value
  the item."
  [this]
  (-> this (.-amount)))

(defn set-amount!
  "Property.

  A PaymentCurrencyAmount object describing the monetary value
  the item."
  [this val]
  (aset this "amount" val))

(defn label
  "Property.

  A string specifying a human-readable name or description of the
  or service being charged for. This may be displayed to the user
  the user agent, depending on the design of the interface."
  [this]
  (-> this (.-label)))

(defn set-label!
  "Property.

  A string specifying a human-readable name or description of the
  or service being charged for. This may be displayed to the user
  the user agent, depending on the design of the interface."
  [this val]
  (aset this "label" val))

(defn pending
  "Property.

  A Boolean value which is true if the specified amount has not
  been finalized. This can be used to show items such as shipping
  tax amounts that depend upon the selection of shipping address,
  option, or so forth. The user agent may show this information
  is not required to do so."
  [this]
  (-> this (.-pending)))

(defn set-pending!
  "Property.

  A Boolean value which is true if the specified amount has not
  been finalized. This can be used to show items such as shipping
  tax amounts that depend upon the selection of shipping address,
  option, or so forth. The user agent may show this information
  is not required to do so."
  [this val]
  (aset this "pending" val))

