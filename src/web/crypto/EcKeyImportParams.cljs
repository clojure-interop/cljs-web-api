(ns web.crypto.EcKeyImportParams
  "See the examples for `SubtleCrypto.importKey()`."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to ECDSA or ECDH, depending on
  algorithm you want to use."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to ECDSA or ECDH, depending on
  algorithm you want to use."
  [this val]
  (aset this "name" val))

(defn named-curve
  "Property.

  A DOMString representing the name of the elliptic curve to use.
  may be any of the following names for NIST-approved curves:
  P-256
  P-384
  P-521"
  [this]
  (-> this (.-namedCurve)))

(defn set-named-curve!
  "Property.

  A DOMString representing the name of the elliptic curve to use.
  may be any of the following names for NIST-approved curves:
  P-256
  P-384
  P-521"
  [this val]
  (aset this "namedCurve" val))

