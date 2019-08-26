(ns web.payments.PaymentItem
  "The `web.payments.PaymentItem` dictionary is used by the Payment
  API to describe a single line item on a payment request."
  (:refer-clojure :exclude []))

(defn amount
  "Property.

  A PaymentCurrencyAmount object describing the monetary value
  the item."
  [this]
  (-> this (.amount)))

(defn set-amount!
  "Property.

  A PaymentCurrencyAmount object describing the monetary value
  the item."
  [this val]
  (aset this "amount" val))

