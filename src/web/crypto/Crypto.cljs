(ns web.crypto.Crypto
  "The Crypto interface represents basic cryptography features available
  the current context. It allows access to a cryptographically
  random number generator and to cryptographic primitives."
  (:refer-clojure :exclude []))

(defn get-random-values
  "Method.

  The Crypto.getRandomValues() method lets you get cryptographically
  random values. The array given as the parameter is filled with
  numbers (random in its cryptographic meaning).

  `cryptoObj.getRandomValues(typedArray);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues`"
  [this typed-array]
  (-> this (.getRandomValues typed-array)))

(defn subtle
  "Property.

  The Crypto.subtle read-only property returns a `web.crypto.SubtleCrypto`
  allowing to perform cryptographical operations.

  `var crypto = crypto.subtle;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle`"
  [this]
  (-> this (.-subtle)))

