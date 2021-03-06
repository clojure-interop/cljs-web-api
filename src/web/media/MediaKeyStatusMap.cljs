(ns web.media.MediaKeyStatusMap
  "The MediaKeyStatusMap interface of the EncryptedMediaExtensions
  is a read-only map of media key statuses by key IDs."
  (:refer-clojure :exclude [get keys]))

(defn entries
  "Method.

  [Experimental]

  The entries() read-only property of the `web.media.MediaKeyStatusMap`
  returns a new Iterator object, containing an array of [key, value]
  for each element in the status map, in insertion order.

  `// TBD`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  [Experimental]

  The forEach property of the `web.media.MediaKeyStatusMap` interface
  callback once for each key-value pair in the status map, in insertion
  If an argument is present it will be passed to the callback.

  `mediaKeyStatusMap.forEach(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/forEach`"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn get
  "Method.

  [Experimental]

  The get property of the `web.media.MediaKeyStatusMap` interface
  the value associated with the given key, or undefined if there
  none.

  `var value = mediaKeyStatusMap.get(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/get`"
  [this key]
  (-> this (.get key)))

(defn has
  "Method.

  [Experimental]

  The has property of the `web.media.MediaKeyStatusMap` interface
  a `js.Boolean`, asserting whether a value has been associated
  the given key.

  `var boolean = mediaKeyStatusMap(key)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/has`"
  [this key]
  (-> this (.has key)))

(defn keys
  "Method.

  [Experimental]

  The keys property of the `web.media.MediaKeyStatusMap` interface
  a new Iterator object, containing keys for each element in the
  map, in insertion order

  `var iterator = mediaKeyStatusMap.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  [Experimental]

  The values property of the `web.media.MediaKeyStatusMap` interface
  a new Iterator object, containing values for each element in
  status map, in insertion order.

  `var iterator = mediaKeyStatusMap.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/values`"
  [this ]
  (-> this (.values)))

(defn size
  "Property.

  [Read Only]
  [Experimental]

  The size read-only property of the `web.media.MediaKeyStatusMap`
  returns the number of key/value paIrs in the status map.

  `var size = MediaKeyStatusMap.size;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/size`"
  [this]
  (-> this (.-size)))

