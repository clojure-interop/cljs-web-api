(ns web.crypto.HmacImportParams
  "The HmacImportParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  or `SubtleCrypto.unwrapKey()`, when generating a key for the
  algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to HMAC."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to HMAC."
  [this val]
  (aset this "name" val))

