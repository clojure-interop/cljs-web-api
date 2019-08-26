(ns web.dom.DOMTokenList
  "The DOMTokenList interface represents a set of space-separated
  Such a set is returned by `Element.classList`, `HTMLLinkElement.relList`,
  `HTMLAreaElement.relList`, `HTMLIframeElement.sandbox`, or `HTMLOutputElement.htmlFor`.
  is indexed beginning with 0 as with JavaScript `js.Array` objects.
  is always case-sensitive."
  (:refer-clojure :exclude [remove replace keys]))

(defn item
  "Method.

  The item() method of the `web.dom.DOMTokenList` interface returns
  item in the list by its index.

  `tokenList.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/item`"
  [this index]
  (-> this (.item index)))

(defn contains
  "Method.

  The contains() method of the `web.dom.DOMTokenList` interface
  a `js.Boolean` — true if the underlying list contains the given
  otherwise false.

  `tokenList.contains(token);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains`"
  [this token]
  (-> this (.contains token)))

(defn add
  "Method.

  The add() method of the `web.dom.DOMTokenList` interface adds
  given token to the list.

  `tokenList.add(token1[, token2[, ...]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

(defn remove
  "Method.

  The remove() method of the `web.dom.DOMTokenList` interface removes
  specified tokens from the list.

  `tokenList.remove(token1[, token2[, ...]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove`"
  [this & args]
  (apply (-> this .-remove) (concat [this] args)))

(defn replace
  "Method.

  The replace() method of the `web.dom.DOMTokenList` interface
  an existing token with a new token.

  `tokenList.replace(oldToken,newToken);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace`"
  [this old-token new-token]
  (-> this (.replace old-token new-token)))

(defn supports
  "Method.

  The supports() method of the `web.dom.DOMTokenList` interface
  true if a given token is in the associated attribute's supported
  This method is intended to support feature detection.

  `var boolean = element.supports(token)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/supports`"
  [this token]
  (-> this (.supports token)))

(defn toggle
  "Method.

  The toggle() method of the `web.dom.DOMTokenList` interface removes
  given token from the list and returns false. If token doesn't
  it's added and the function returns true.

  `tokenList.toggle(token, force);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle`"
  [this token force]
  (-> this (.toggle token force)))

(defn entries
  "Method.

  The DOMTokenList.entries() method returns an `iterator` allowing
  to go through all key/value pairs contained in this object. The
  are `web.dom.DOMString` objects, each representing a single token.

  `tokenList.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method of the `web.dom.DOMTokenList` interface
  the callback given in parameter once for each value pair in the
  in insertion order.

  `tokenList.forEach(callback);
  tokenList.forEach(callback, argument);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn keys
  "Method.

  The keys() method of the `web.dom.DOMTokenList` interface returns
  `iterator` allowing to go through all keys contained in this
  The keys are of type unsigned integer.

  `tokenList.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  The values() method of the `web.dom.DOMTokenList` interface returns
  `iterator` allowing developers to go through all values contained
  the DOMTokenList. The individual values are `web.dom.DOMString`

  `tokenList.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/values`"
  [this ]
  (-> this (.values)))

(defn value
  "Method.

  The value property of the `web.dom.DOMTokenList` interface returns
  value of the list as a `web.dom.DOMString`, or clears and sets
  list to the given value.

  `tokenList.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value`"
  [this ]
  (-> this (.value)))

(defn length
  "Property.

  The length read-only property of the `web.dom.DOMTokenList` interface
  an integer representing the number of objects stored in the object.

  `tokenList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.dom.DOMTokenList` interface
  an integer representing the number of objects stored in the object.

  `tokenList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`"
  [this val]
  (aset this "length" val))

