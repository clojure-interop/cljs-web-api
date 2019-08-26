(ns web.crypto.SubtleCrypto
  "The SubtleCrypto interface of the Web Crypto API provides a number
  low-level cryptographic functions. It is accessed via the `Crypto.subtle`
  available in a window context (via `Window.crypto`)."
  (:refer-clojure :exclude []))

(defn encrypt
  "Method.

  The encrypt() method of the `web.crypto.SubtleCrypto` interface
  data.

  `const result = crypto.subtle.encrypt(algorithm, key, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt`"
  [this algorithm key data]
  (-> this (.encrypt algorithm key data)))

(defn decrypt
  "Method.

  The decrypt() method of the `web.crypto.SubtleCrypto` interface
  some encrypted data. It takes as arguments a key to decrypt with,
  optional extra parameters, and the data to decrypt (also known
  \\\"ciphertext\\\"). It returns a `js.Promise` which will be fulfilled
  the decrypted data (also known as \\\"plaintext\\\").

  `const result = crypto.subtle.decrypt(algorithm, key, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt`"
  [this algorithm key data]
  (-> this (.decrypt algorithm key data)))

(defn derive-bits
  "Method.

  The deriveBits() method of the `web.crypto.SubtleCrypto` interface
  be used to derive an array of bits from a base key.

  `const result = crypto.subtle.deriveBits(
  algorithm,
  baseKey,
  length
  );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits`"
  [this & args]
  (apply (-> this .-deriveBits) (concat [this] args)))

(defn derive-key
  "Method.

  The deriveKey() method of the `web.crypto.SubtleCrypto` interface
  be used to derive a secret key from a master key.

  `const result = crypto.subtle.deriveKey(
  algorithm,
  baseKey,
  derivedKeyAlgorithm,
  extractable,
  keyUsages
  );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey`"
  [this & args]
  (apply (-> this .-deriveKey) (concat [this] args)))

(defn digest
  "Method.

  The digest() method of the `web.crypto.SubtleCrypto` interface
  a digest of the given data. A digest is a short fixed-length
  derived from some variable-length input. Cryptographic digests
  exhibit collision-resistance, meaning that it's hard to come
  with two different inputs that have the same digest value.

  `const digest = crypto.subtle.digest(algorithm, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest`"
  [this algorithm data]
  (-> this (.digest algorithm data)))

(defn export-key
  "Method.

  The exportKey() method of the `web.crypto.SubtleCrypto` interface
  a key: that is, it takes as input a `web.crypto.CryptoKey` object
  gives you the key in an external, portable format.

  `const result = crypto.subtle.exportKey(format, key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey`"
  [this format key]
  (-> this (.exportKey format key)))

(defn generate-key
  "Method.

  Use the generateKey() method of the `web.crypto.SubtleCrypto`
  to generate a new key (for symmetric algorithms) or key pair
  public-key algorithms).

  `const result = crypto.subtle.generateKey(algorithm, extractable, keyUsages);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey`"
  [this algorithm extractable key-usages]
  (-> this (.generateKey algorithm extractable key-usages)))

(defn import-key
  "Method.

  The importKey() method of the `web.crypto.SubtleCrypto` interface
  a key: that is, it takes as input a key in an external, portable
  and gives you a `web.crypto.CryptoKey` object that you can use
  the Web Crypto API.

  `const result = crypto.subtle.importKey(
  format,
  keyData,
  algorithm,
  extractable,
  usages
  );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey`"
  [this & args]
  (apply (-> this .-importKey) (concat [this] args)))

(defn sign
  "Method.

  The sign() method of the `web.crypto.SubtleCrypto` interface
  a digital signature.

  `const signature = crypto.subtle.sign(algorithm, key, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign`"
  [this algorithm key data]
  (-> this (.sign algorithm key data)))

(defn unwrap-key
  "Method.

  The unwrapKey() method of the `web.crypto.SubtleCrypto` interface
  a key. This means that it takes as its input a key that has been
  and then encrypted (also called \\\"wrapped\\\"). It decrypts the
  and then imports it, returning a `web.crypto.CryptoKey` object
  can be used in the Web Crypto API.

  `const result = crypto.subtle.unwrapKey(
  format,
  wrappedKey,
  unwrappingKey,
  unwrapAlgo,
  unwrappedKeyAlgo,
  extractable,
  keyUsages
  );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/unwrapKey`"
  [this & args]
  (apply (-> this .-unwrapKey) (concat [this] args)))

(defn verify
  "Method.

  The verify() method of the `web.crypto.SubtleCrypto` interface
  a digital signature.

  `const result = crypto.subtle.verify(algorithm, key, signature, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify`"
  [this algorithm key signature data]
  (-> this (.verify algorithm key signature data)))

(defn wrap-key
  "Method.

  The wrapKey() method of the `web.crypto.SubtleCrypto` interface
  a key. This means that it exports the key in an external, portable
  then encrypts the exported key. Wrapping a key helps protect
  in untrusted environments, such as inside an otherwise unprotected
  store or in transmission over an unprotected network.

  `const result = crypto.subtle.wrapKey(
  format,
  key,
  wrappingKey,
  wrapAlgo
  );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/wrapKey`"
  [this & args]
  (apply (-> this .-wrapKey) (concat [this] args)))

