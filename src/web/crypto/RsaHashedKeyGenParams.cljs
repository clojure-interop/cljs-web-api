(ns web.crypto.RsaHashedKeyGenParams
  "The RsaHashedKeyGenParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when generating any RSA-based key pair: that is, when the algorithm
  identified as any of RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS,
  RSA-OAEP, depending on the algorithm you want to use."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS,
  RSA-OAEP, depending on the algorithm you want to use."
  [this val]
  (aset this "name" val))

