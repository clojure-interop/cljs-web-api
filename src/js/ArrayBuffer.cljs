(ns js.ArrayBuffer
  "The ArrayBuffer object is used to represent a generic, fixed-length
  binary data buffer."
  (:refer-clojure :exclude []))

(defn is-view
  "Method.

  The ArrayBuffer.isView() method returns true if arg is one of
  ArrayBuffer views, such as typed array objects or a `js.DataView`;
  otherwise.

  `ArrayBuffer.isView(arg)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView`"
  [this arg]
  (-> this (.isView arg)))

(defn transfer
  "Method.

  [Experimental]

  The static ArrayBuffer.transfer() method returns a new ArrayBuffer
  contents have been taken from the oldBuffer's data and then is
  truncated or zero-extended by newByteLength. If newByteLength
  undefined, the byteLength of the oldBuffer is used. This operation
  oldBuffer in a detached state.

  `ArrayBuffer.transfer(oldBuffer [, newByteLength]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer`"
  [this & args]
  (-> this .-transfer (.apply this (clj->js args))))

(defn slice
  "Method.

  The slice() method returns a new ArrayBuffer whose contents are
  copy of this ArrayBuffer's bytes from begin, inclusive, up to
  exclusive.

  `arraybuffer.slice(begin[, end])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn length
  "Property.

  The ArrayBuffer constructor's length property whose value is"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The ArrayBuffer constructor's length property whose value is"
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The ArrayBuffer.prototype property represents the prototype for
  `js.ArrayBuffer` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The ArrayBuffer.prototype property represents the prototype for
  `js.ArrayBuffer` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype`"
  [this val]
  (aset this "prototype" val))

(defn byte-length
  "Property.

  The byteLength accessor property represents the length of an
  in bytes.

  `arraybuffer.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength`"
  [this]
  (-> this (.-byteLength)))

(defn set-byte-length!
  "Property.

  The byteLength accessor property represents the length of an
  in bytes.

  `arraybuffer.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength`"
  [this val]
  (aset this "byteLength" val))

