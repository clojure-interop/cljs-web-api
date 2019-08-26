(ns web.payments.PaymentResponse.ev
  "PaymentResponse Events."
  (:refer-clojure :exclude []))

(def payerdetailchange
  "Event.

  Fired during a retry when the user makes changes to their personal
  while filling out a payment request form. Allows the developer
  revalidate any requested user data (e.g., the phone number or
  email address) if it changes.
  Also available via the onpayerdetailchange property."

  "payerdetailchange")

