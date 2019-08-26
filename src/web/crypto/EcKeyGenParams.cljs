(ns web.crypto.EcKeyGenParams
  "The EcKeyGenParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when generating any elliptic-curve-based key pair: that is, when
  algorithm is identified as either of ECDSA or ECDH."
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

