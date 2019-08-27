(ns js.SharedArrayBuffer
  "The SharedArrayBuffer object is used to represent a generic,
  raw binary data buffer, similar to the `js.ArrayBuffer` object,
  in a way that they can be used to create views on shared memory.
  an ArrayBuffer, a SharedArrayBuffer cannot become detached."
  (:refer-clojure :exclude []))

(defn slice
  "Method.

  The SharedArrayBuffer.prototype.slice() method returns a new
  whose contents are a copy of this SharedArrayBuffer's bytes from
  inclusive, up to end, exclusive. If either begin or end is negative,
  refers to an index from the end of the array, as opposed to from
  beginning. This method has the same algorithm as `Array.prototype.slice()`.

  `sab.slice()
  sab.slice(begin)
  sab.slice(begin, end)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn length
  "Property.

  The SharedArrayBuffer constructor's length property whose value
  1."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The SharedArrayBuffer constructor's length property whose value
  1."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The SharedArrayBuffer.prototype property represents the prototype
  the `js.SharedArrayBuffer` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The SharedArrayBuffer.prototype property represents the prototype
  the `js.SharedArrayBuffer` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype`"
  [this val]
  (aset this "prototype" val))

(defn byte-length
  "Property.

  The byteLength accessor property represents the length of an
  in bytes.

  `sab.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength`"
  [this]
  (-> this (.-byteLength)))

(defn set-byte-length!
  "Property.

  The byteLength accessor property represents the length of an
  in bytes.

  `sab.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength`"
  [this val]
  (aset this "byteLength" val))

