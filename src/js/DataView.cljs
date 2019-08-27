(ns js.DataView
  "The DataView view provides a low-level interface for reading
  writing multiple number types in a binary `js.ArrayBuffer`, without
  to care about the platform's endianness."
  (:refer-clojure :exclude []))

(defn get-int8
  "Method.

  The getInt8() method gets a signed 8-bit integer (byte) at the
  byte offset from the start of the `js.DataView`.

  `dataview.getInt8(byteOffset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8`"
  [this byte-offset]
  (-> this (.getInt8 byte-offset)))

(defn get-uint8
  "Method.

  The getUint8() method gets an unsigned 8-bit integer (unsigned
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.getUint8(byteOffset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8`"
  [this byte-offset]
  (-> this (.getUint8 byte-offset)))

(defn get-int16
  "Method.

  The getInt16() method gets a signed 16-bit integer (short) at
  specified byte offset from the start of the `js.DataView`.

  `dataview.getInt16(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16`"
  [this & args]
  (-> this .-getInt16 (.apply this (clj->js args))))

(defn get-uint16
  "Method.

  The getUint16() method gets an unsigned 16-bit integer (unsigned
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.getUint16(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16`"
  [this & args]
  (-> this .-getUint16 (.apply this (clj->js args))))

(defn get-int32
  "Method.

  The getInt32() method gets a signed 32-bit integer (long) at
  specified byte offset from the start of the `js.DataView`.

  `dataview.getInt32(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32`"
  [this & args]
  (-> this .-getInt32 (.apply this (clj->js args))))

(defn get-uint32
  "Method.

  The getUint32() method gets an unsigned 32-bit integer (unsigned
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.getUint32(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32`"
  [this & args]
  (-> this .-getUint32 (.apply this (clj->js args))))

(defn get-float32
  "Method.

  The getFloat32() method gets a signed 32-bit float (float) at
  specified byte offset from the start of the `js.DataView`.

  `dataview.getFloat32(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32`"
  [this & args]
  (-> this .-getFloat32 (.apply this (clj->js args))))

(defn get-float64
  "Method.

  The getFloat64() method gets a signed 64-bit float (double) at
  specified byte offset from the start of the `js.DataView`.

  `dataview.getFloat64(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64`"
  [this & args]
  (-> this .-getFloat64 (.apply this (clj->js args))))

(defn get-big-int64
  "Method.

  The getBigInt64() method gets a signed 64-bit integer (long long)
  the specified byte offset from the start of the `js.DataView`.

  `dataview.getBigInt64(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64`"
  [this & args]
  (-> this .-getBigInt64 (.apply this (clj->js args))))

(defn get-big-uint64
  "Method.

  The getBigUint64() method gets an unsigned 64-bit integer (unsigned
  long) at the specified byte offset from the start of the `js.DataView`.

  `dataview.getBigUint64(byteOffset [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64`"
  [this & args]
  (-> this .-getBigUint64 (.apply this (clj->js args))))

(defn set-int8
  "Method.

  The setInt8() method stores a signed 8-bit integer (byte) value
  the specified byte offset from the start of the `js.DataView`.

  `dataview.setInt8(byteOffset, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8`"
  [this byte-offset value]
  (-> this (.setInt8 byte-offset value)))

(defn set-uint8
  "Method.

  The setUint8() method stores an unsigned 8-bit integer (byte)
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.setUint8(byteOffset, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8`"
  [this byte-offset value]
  (-> this (.setUint8 byte-offset value)))

(defn set-int16
  "Method.

  The setInt16() method stores a signed 16-bit integer (short)
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.setInt16(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16`"
  [this & args]
  (-> this .-setInt16 (.apply this (clj->js args))))

(defn set-uint16
  "Method.

  The setUint16() method stores an unsigned 16-bit integer (unsigned
  value at the specified byte offset from the start of the `js.DataView`.

  `dataview.setUint16(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16`"
  [this & args]
  (-> this .-setUint16 (.apply this (clj->js args))))

(defn set-int32
  "Method.

  The setInt32() method stores a signed 32-bit integer (long) value
  the specified byte offset from the start of the `js.DataView`.

  `dataview.setInt32(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32`"
  [this & args]
  (-> this .-setInt32 (.apply this (clj->js args))))

(defn set-uint32
  "Method.

  The setUint32() method stores an unsigned 32-bit integer (unsigned
  value at the specified byte offset from the start of the `js.DataView`.

  `dataview.setUint32(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32`"
  [this & args]
  (-> this .-setUint32 (.apply this (clj->js args))))

(defn set-float32
  "Method.

  The setFloat32() method stores a signed 32-bit float (float)
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.setFloat32(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32`"
  [this & args]
  (-> this .-setFloat32 (.apply this (clj->js args))))

(defn set-float64
  "Method.

  The setFloat64() method stores a signed 64-bit float (double)
  at the specified byte offset from the start of the `js.DataView`.

  `dataview.setFloat64(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64`"
  [this & args]
  (-> this .-setFloat64 (.apply this (clj->js args))))

(defn set-big-int64
  "Method.

  The setBigInt64() method stores a signed 64-bit integer (long
  value at the specified byte offset from the start of the `js.DataView`.

  `dataview.setBigInt64(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64`"
  [this & args]
  (-> this .-setBigInt64 (.apply this (clj->js args))))

(defn set-big-uint64
  "Method.

  The setBigUint64() method stores an unsigned 64-bit integer (unsigned
  long) value at the specified byte offset from the start of the

  `dataview.setBigUint64(byteOffset, value [, littleEndian])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64`"
  [this & args]
  (-> this .-setBigUint64 (.apply this (clj->js args))))

(defn buffer
  "Property.

  The buffer accessor property represents the `js.ArrayBuffer`
  `js.SharedArrayBuffer` referenced by the DataView at construction

  `dataview.buffer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer`"
  [this]
  (-> this (.-buffer)))

(defn set-buffer!
  "Property.

  The buffer accessor property represents the `js.ArrayBuffer`
  `js.SharedArrayBuffer` referenced by the DataView at construction

  `dataview.buffer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer`"
  [this val]
  (aset this "buffer" val))

(defn byte-length
  "Property.

  The byteLength accessor property represents the length (in bytes)
  this view from the start of its `js.ArrayBuffer` or `js.SharedArrayBuffer`.

  `dataview.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength`"
  [this]
  (-> this (.-byteLength)))

(defn set-byte-length!
  "Property.

  The byteLength accessor property represents the length (in bytes)
  this view from the start of its `js.ArrayBuffer` or `js.SharedArrayBuffer`.

  `dataview.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength`"
  [this val]
  (aset this "byteLength" val))

(defn byte-offset
  "Property.

  The byteOffset accessor property represents the offset (in bytes)
  this view from the start of its `js.ArrayBuffer` or `js.SharedArrayBuffer`.

  `dataview.byteOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset`"
  [this]
  (-> this (.-byteOffset)))

(defn set-byte-offset!
  "Property.

  The byteOffset accessor property represents the offset (in bytes)
  this view from the start of its `js.ArrayBuffer` or `js.SharedArrayBuffer`.

  `dataview.byteOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset`"
  [this val]
  (aset this "byteOffset" val))

(defn prototype
  "Property.

  The DataView.prototype property represents the prototype for
  `js.DataView` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The DataView.prototype property represents the prototype for
  `js.DataView` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype`"
  [this val]
  (aset this "prototype" val))

