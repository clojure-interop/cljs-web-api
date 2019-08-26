(ns web.crypto.AesKeyGenParams
  "See the examples for `SubtleCrypto.generateKey()`."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-CBC, AES-CTR, AES-GCM,
  AES-KW, depending on the algorithm you want to use."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-CBC, AES-CTR, AES-GCM,
  AES-KW, depending on the algorithm you want to use."
  [this val]
  (aset this "name" val))

