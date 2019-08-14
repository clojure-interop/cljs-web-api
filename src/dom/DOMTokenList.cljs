(ns dom.DOMTokenList
  "The DOMTokenList interface represents a set of space-separated
  Such a set is returned by `web.Element.classList`, `html.HTMLLinkElement.relList`,
  `html.HTMLAreaElement.relList`, `html.HTMLIframeElement.sandbox`,
  `html.HTMLOutputElement.htmlFor`. It is indexed beginning with
  as with JavaScript `web.Array` objects. DOMTokenList is always"
  (:refer-clojure :exclude [keys remove replace]))

(defn add
  "Method.

  The add() method of the `dom.DOMTokenList` interface adds the
  token to the list.

  `tokenList.add(token1[, token2[, ...]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

(defn contains
  "Method.

  The contains() method of the `dom.DOMTokenList` interface returns
  `web.Boolean` — true if the underlying list contains the given
  otherwise false.

  `tokenList.contains(token);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains`"
  [this token]
  (-> this (.contains token)))

(defn entries
  "Method.

  The DOMTokenList.entries() method returns an `web.iterator` allowing
  to go through all key/value pairs contained in this object. The
  are `dom.DOMString` objects, each representing a single token.

  `tokenList.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method of the `dom.DOMTokenList` interface calls
  callback given in parameter once for each value pair in the list,
  insertion order.

  `tokenList.forEach(callback);
  tokenList.forEach(callback, argument);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn item
  "Method.

  The item() method of the `dom.DOMTokenList` interface returns
  item in the list by its index.

  `tokenList.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/item`"
  [this index]
  (-> this (.item index)))

(defn keys
  "Method.

  The keys() method of the `dom.DOMTokenList` interface returns
  `web.iterator` allowing to go through all keys contained in this
  The keys are of type unsigned integer.

  `tokenList.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/keys`"
  [this ]
  (-> this (.keys)))

(defn remove
  "Method.

  The remove() method of the `dom.DOMTokenList` interface removes
  specified tokens from the list.

  `tokenList.remove(token1[, token2[, ...]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove`"
  [this & args]
  (apply (-> this .-remove) (concat [this] args)))

(defn replace
  "Method.

  The replace() method of the `dom.DOMTokenList` interface replaces
  existing token with a new token.

  `tokenList.replace(oldToken,newToken);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace`"
  [this old-token new-token]
  (-> this (.replace old-token new-token)))

(defn supports
  "Method.

  The supports() method of the `dom.DOMTokenList` interface returns
  if a given token is in the associated attribute's supported tokens.
  method is intended to support feature detection.

  `var boolean = element.supports(token)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/supports`"
  [this token]
  (-> this (.supports token)))

(defn toggle
  "Method.

  The toggle() method of the `dom.DOMTokenList` interface removes
  given token from the list and returns false. If token doesn't
  it's added and the function returns true.

  `tokenList.toggle(token, force);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle`"
  [this token force]
  (-> this (.toggle token force)))

(defn value
  "Method.

  The value property of the `dom.DOMTokenList` interface returns
  value of the list as a `dom.DOMString`, or clears and sets the
  to the given value.

  `tokenList.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value`"
  [this ]
  (-> this (.value)))

(defn values
  "Method.

  The values() method of the `dom.DOMTokenList` interface returns
  `web.iterator` allowing developers to go through all values contained
  the DOMTokenList. The individual values are `dom.DOMString` objects.

  `tokenList.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  The length read-only property of the `dom.DOMTokenList` interface
  an integer representing the number of objects stored in the object.

  `tokenList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length read-only property of the `dom.DOMTokenList` interface
  an integer representing the number of objects stored in the object.

  `tokenList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`"
  [this val]
  (aset this "length" val))

