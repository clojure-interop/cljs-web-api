(ns web.crypto.HkdfParams
  "See the examples for `SubtleCrypto.deriveKey()`."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to HKDF."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to HKDF."
  [this val]
  (aset this "name" val))

