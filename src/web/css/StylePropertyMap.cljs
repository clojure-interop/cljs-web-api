(ns web.css.StylePropertyMap
  "The StylePropertyMap interface of the the CSS Typed Object Model
  provides a representation of a CSS declaration block that is
  alternative to `web.cssdom.CSSStyleDeclaration`."
  (:refer-clojure :exclude [set]))

(defn append
  "Method.

  [Experimental]

  The append() method of the `web.css.StylePropertyMap` interface
  a new CSS declaration to the StylePropertyMap with the given
  and value.

  `StylePropertyMap.append(property,value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/append`"
  [this property value]
  (-> this (.append property value)))

(defn clear
  "Method.

  [Experimental]

  The clear() method of the `web.css.StylePropertyMap` interface
  all declarations in the StylePropertyMap.

  `StylePropertMap.clear()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  [Experimental]

  The delete() method of the `web.css.StylePropertyMap` interface
  the CSS declaration with the given property.

  `StylePropertyMap.delete(property)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/delete`"
  [this property]
  (-> this (.delete property)))

(defn set
  "Method.

  [Experimental]

  The set() method of the `web.css.StylePropertyMap` interface
  the CSS declaration with the given property.

  `StylePropertyMap.set(property,value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set`"
  [this property value]
  (-> this (.set property value)))

