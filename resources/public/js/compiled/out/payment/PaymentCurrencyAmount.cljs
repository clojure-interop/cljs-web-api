(ns payment.PaymentCurrencyAmount
  "The PaymentCurrencyAmount dictionary describes an amount of money
  terms of both a number of units and the currency (US dollars,
  yen, etc.), and is part of the Payment Request API."
  (:refer-clojure :exclude []))

(defn currency-system
  "Property.

  The obsolete `payment.PaymentCurrencyAmount` property currencySystem
  a string which specifies the standard being used to specify the
  the `web.value` is specified in.

  `currencySystem = paymentCurrencyAmount.currencySystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currencySystem`"
  [this]
  (-> this (.currencySystem)))

(defn set-currency-system!
  "Property.

  The obsolete `payment.PaymentCurrencyAmount` property currencySystem
  a string which specifies the standard being used to specify the
  the `web.value` is specified in.

  `currencySystem = paymentCurrencyAmount.currencySystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currencySystem`"
  [this val]
  (aset this "currencySystem" val))

(defn value
  "Property.

  The `payment.PaymentCurrencyAmount` property value is a string
  the decimal numeric value of the payment, specified in the currency
  indicated by the `web.currency` property.

  `value = paymentCurrencyAmount.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The `payment.PaymentCurrencyAmount` property value is a string
  the decimal numeric value of the payment, specified in the currency
  indicated by the `web.currency` property.

  `value = paymentCurrencyAmount.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/value`"
  [this val]
  (aset this "value" val))

(defn currency
  "Property.

  The `payment.PaymentCurrencyAmount` property currency is a string
  specifies the currency in which the `web.value` is specified.

  `currency = paymentCurrencyAmount.currency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currency`"
  [this]
  (-> this (.currency)))

(defn set-currency!
  "Property.

  The `payment.PaymentCurrencyAmount` property currency is a string
  specifies the currency in which the `web.value` is specified.

  `currency = paymentCurrencyAmount.currency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentCurrencyAmount/currency`"
  [this val]
  (aset this "currency" val))

