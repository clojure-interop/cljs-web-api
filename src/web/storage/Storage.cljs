(ns web.storage.Storage
  "The Storage interface of the Web Storage API provides access
  a particular domain's session or local storage. It allows, for
  the addition, modification, or deletion of stored data items."
  (:refer-clojure :exclude [key]))

(defn key
  "Method.

  The key() method of the `web.storage.Storage` interface, when
  a number n, returns the name of the nth key in a given Storage
  The order of keys is user-agent defined, so you should not rely
  it.

  `var aKeyName = storage.key(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/key`"
  [this index]
  (-> this (.key index)))

(defn get-item
  "Method.

  The getItem() method of the `web.storage.Storage` interface,
  passed a key name, will return that key's value, or null if the
  does not exist, in the given Storage object.

  `var aValue = storage.getItem(keyName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem`"
  [this key-name]
  (-> this (.getItem key-name)))

(defn set-item
  "Method.

  The setItem() method of the `web.storage.Storage` interface,
  passed a key name and value, will add that key to the given Storage
  or update that key's value if it already exists.

  `storage.setItem(keyName, keyValue);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem`"
  [this key-name key-value]
  (-> this (.setItem key-name key-value)))

(defn remove-item
  "Method.

  The removeItem() method of the `web.storage.Storage` interface,
  passed a key name, will remove that key from the given Storage
  if it exists. If there is no item associated with the given key,
  method will do nothing.

  `storage.removeItem(keyName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem`"
  [this key-name]
  (-> this (.removeItem key-name)))

(defn clear
  "Method.

  The clear() method of the `web.storage.Storage` interface clears
  keys stored in a given Storage object.

  `storage.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear`"
  [this ]
  (-> this (.clear)))

(defn length
  "Property.

  [Read Only]

  The length read-only property of the `web.storage.Storage` interface
  the number of data items stored in a given Storage object.

  `var aLength = storage.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/length`"
  [this]
  (-> this (.-length)))

