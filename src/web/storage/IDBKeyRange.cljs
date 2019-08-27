(ns web.storage.IDBKeyRange
  "A key range can be a single value or a range with upper and lower
  or endpoints. If the key range has both upper and lower bounds,
  it is bounded; if it has no bounds, it is unbounded. A bounded
  range can either be open (the endpoints are excluded) or closed
  endpoints are included). To retrieve all keys within a certain
  you can use the following code constructs:"
  (:refer-clojure :exclude []))

(defn bound
  "Method.

  `web.storage.IDBKeyRange`: The newly created key range.

  `var myIDBKeyRange = IDBKeyRange.bound(lower, upper);
  var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen);
  var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/bound`"
  [this & args]
  (-> this .-bound (.apply this (clj->js args))))

(defn only
  "Method.

  value is the value for the new key range.

  `var myIDBKeyRange = IDBKeyRange.only(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/only`"
  [this value]
  (-> this (.only value)))

(defn lower-bound
  "Method.

  `web.storage.IDBKeyRange`: The newly created key range.

  `var myIDBKeyRange = IDBKeyRange.lowerBound(lower);
  var myIDBKeyRange = IDBKeyRange.lowerBound(lower, open);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerBound`"
  [this & args]
  (-> this .-lowerBound (.apply this (clj->js args))))

(defn upper-bound
  "Method.

  `web.storage.IDBKeyRange`: The newly created key range.

  `var myIDBKeyRange = IDBKeyRange.upperBound(upper[, open=false])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperBound`"
  [this & args]
  (-> this .-upperBound (.apply this (clj->js args))))

(defn includes
  "Method.

  key The key you want to check for in your key range. This can
  any type.

  `var isIncluded = myKeyRange.includes(key)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/includes`"
  [this key]
  (-> this (.includes key)))

(defn lower
  "Property.

  The lower bound of the key range (can be any type.)

  `var lower = myKeyRange.lower`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lower`"
  [this]
  (-> this (.-lower)))

(defn set-lower!
  "Property.

  The lower bound of the key range (can be any type.)

  `var lower = myKeyRange.lower`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lower`"
  [this val]
  (aset this "lower" val))

(defn upper
  "Property.

  The upper bound of the key range (can be any type.)

  `var upper = myKeyRange.upper`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upper`"
  [this]
  (-> this (.-upper)))

(defn set-upper!
  "Property.

  The upper bound of the key range (can be any type.)

  `var upper = myKeyRange.upper`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upper`"
  [this val]
  (aset this "upper" val))

(defn lower-open
  "Property.

  A `boolean`:

  `var lowerOpen = myKeyRange.lowerOpen`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerOpen`"
  [this]
  (-> this (.-lowerOpen)))

(defn set-lower-open!
  "Property.

  A `boolean`:

  `var lowerOpen = myKeyRange.lowerOpen`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerOpen`"
  [this val]
  (aset this "lowerOpen" val))

(defn upper-open
  "Property.

  A `boolean`:

  `var upperOpen = myKeyRange.upperOpen`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperOpen`"
  [this]
  (-> this (.-upperOpen)))

(defn set-upper-open!
  "Property.

  A `boolean`:

  `var upperOpen = myKeyRange.upperOpen`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperOpen`"
  [this val]
  (aset this "upperOpen" val))

