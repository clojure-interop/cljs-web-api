(ns web.cssdom.CSSStyleDeclaration
  "The CSSStyleDeclaration interface represents an object that is
  CSS declaration block, and exposes style information and various
  methods and properties."
  (:refer-clojure :exclude []))

(defn get-property-priority
  "Method.

  The CSSStyleDeclaration.getPropertyPriority() method interface
  a `web.dom.DOMString` that provides all explicitly set priorities
  the CSS property.

  `var priority = style.getPropertyPriority(property);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyPriority`"
  [this property]
  (-> this (.getPropertyPriority property)))

(defn get-property-value
  "Method.

  The CSSStyleDeclaration.getPropertyValue() method interface returns
  `web.dom.DOMString` containing the value of a specified CSS property.

  `var value = style.getPropertyValue(property);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue`"
  [this property]
  (-> this (.getPropertyValue property)))

(defn item
  "Method.

  The CSSStyleDeclaration.item() method interface returns a CSS
  name from a `web.cssdom.CSSStyleDeclaration` by index

  `var propertyName = style.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/item`"
  [this index]
  (-> this (.item index)))

(defn remove-property
  "Method.

  The CSSStyleDeclaration.removeProperty() method interface removes
  property from a CSS style declaration object.

  `var oldValue = style.removeProperty(property);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty`"
  [this property]
  (-> this (.removeProperty property)))

(defn set-property
  "Method.

  The CSSStyleDeclaration.setProperty() method interface sets a
  value for a property on a CSS style declaration object.

  `style.setProperty(propertyName, value, priority);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty`"
  [this property-name value priority]
  (-> this (.setProperty property-name value priority)))

(defn get-property-css-value
  "Method.

  [Obsolute]

  The CSSStyleDeclaration.getPropertyCSSValue() method interface
  a `web.css.CSSValue` containing the CSS value for a property.

  `var value = style.getPropertyCSSValue(property);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue`"
  [this property]
  (-> this (.getPropertyCSSValue property)))

(defn length
  "Property.

  [Read Only]

  The read-only property returns an integer that represents the
  of style declarations in this CSS declaration block.

  `var num = styles.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/length`"
  [this]
  (-> this (.-length)))

(defn parent-rule
  "Property.

  [Read Only]

  The CSSStyleDeclaration.parentRule read-only property returns
  `web.cssdom.CSSRule` that is the parent of this style block

  `var rule = styles.parentRule;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/parentRule`"
  [this]
  (-> this (.-parentRule)))

