(ns web.crypto.CryptoKey
  "The CryptoKey interface of the Web Crypto API represents a cryptographic"
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  String which may take one of the following values:
  \"secret\": This key is a secret key for use with a symmetric
  \"private\": This key is the private half of an asymmetric algorithm's
  \"public\": This key is the public half of an asymmetric algorithm's"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  String which may take one of the following values:
  \"secret\": This key is a secret key for use with a symmetric
  \"private\": This key is the private half of an asymmetric algorithm's
  \"public\": This key is the public half of an asymmetric algorithm's"
  [this val]
  (aset this "type" val))

