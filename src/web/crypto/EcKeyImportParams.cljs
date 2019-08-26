(ns web.crypto.EcKeyImportParams
  "See the examples for `SubtleCrypto.importKey()`."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to ECDSA or ECDH, depending on
  algorithm you want to use."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to ECDSA or ECDH, depending on
  algorithm you want to use."
  [this val]
  (aset this "name" val))

