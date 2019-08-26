(ns web.crypto.RsaPssParams
  "The RsaPssParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  or `SubtleCrypto.verify()`, when using the RSA-PSS algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to RSA-PSS."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSA-PSS."
  [this val]
  (aset this "name" val))

