(ns css.CSSValueList
  "The CSSValueList interface derives from the `css.CSSValue` interface
  provides the abstraction of an ordered collection of CSS values."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  The item() method of the `css.CSSValueList` interface is used
  retrieve a `css.CSSValue` by ordinal index.

  `var cssValue = cssValueList.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSValueList/item`"
  [this index]
  (-> this (.item index)))

(defn length
  "Property.

  The length read-only property of the `css.CSSValueList` interface
  the number of `css.CSSValue`s in the list. The range of valid
  of the indices is 0 to length-1 inclusive.

  `var length = cssValueList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSValueList/length`"
  [this]
  (-> this (.length)))

