(ns web.payments.PaymentCurrencyAmount
  "The PaymentCurrencyAmount dictionary describes an amount of money
  terms of both a number of units and the currency (US dollars,
  yen, etc.), and is part of the Payment Request API."
  (:refer-clojure :exclude []))

(defn currency
  "Property.

  The `web.payments.PaymentCurrencyAmount` property currency is
  string which specifies the currency in which the `value` is specified.

  `currency = paymentCurrencyAmount.currency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currency`"
  [this]
  (-> this (.currency)))

(defn set-currency!
  "Property.

  The `web.payments.PaymentCurrencyAmount` property currency is
  string which specifies the currency in which the `value` is specified.

  `currency = paymentCurrencyAmount.currency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currency`"
  [this val]
  (aset this "currency" val))

(defn currency-system
  "Property.

  The obsolete `web.payments.PaymentCurrencyAmount` property currencySystem
  a string which specifies the standard being used to specify the
  the `value` is specified in.

  `currencySystem = paymentCurrencyAmount.currencySystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currencySystem`"
  [this]
  (-> this (.currencySystem)))

(defn set-currency-system!
  "Property.

  The obsolete `web.payments.PaymentCurrencyAmount` property currencySystem
  a string which specifies the standard being used to specify the
  the `value` is specified in.

  `currencySystem = paymentCurrencyAmount.currencySystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currencySystem`"
  [this val]
  (aset this "currencySystem" val))

(defn value
  "Property.

  The `web.payments.PaymentCurrencyAmount` property value is a
  containing the decimal numeric value of the payment, specified
  the currency units indicated by the `currency` property.

  `value = paymentCurrencyAmount.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The `web.payments.PaymentCurrencyAmount` property value is a
  containing the decimal numeric value of the payment, specified
  the currency units indicated by the `currency` property.

  `value = paymentCurrencyAmount.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/value`"
  [this val]
  (aset this "value" val))

