(ns web.StylePropertyMap
  "The StylePropertyMap interface of the the CSS Typed Object Model
  provides a representation of a CSS declaration block that is
  alternative to `css.CSSStyleDeclaration`."
  (:refer-clojure :exclude [set]))

(defn append
  "Method.

  The append() method of the `web.StylePropertyMap` interface adds
  new CSS declaration to the StylePropertyMap with the given property
  value.

  `StylePropertyMap.append(property,value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/append`"
  [this property value]
  (-> this (.append property value)))

(defn clear
  "Method.

  The clear() method of the `web.StylePropertyMap` interface removes
  declarations in the StylePropertyMap.

  `StylePropertMap.clear()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  The delete() method of the `web.StylePropertyMap` interface removes
  CSS declaration with the given property.

  `StylePropertyMap.delete(property)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/delete`"
  [this property]
  (-> this (.delete property)))

(defn set
  "Method.

  The set() method of the `web.StylePropertyMap` interface changes
  CSS declaration with the given property.

  `StylePropertyMap.set(property,value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set`"
  [this property value]
  (-> this (.set property value)))

