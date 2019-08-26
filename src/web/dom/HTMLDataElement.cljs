(ns web.dom.HTMLDataElement
  "The HTMLDataElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<data>` elements."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  The value property of the `web.dom.HTMLDataElement` interface
  a `web.dom.DOMString` reflecting the value HTML attribute.

  `var aValue = htmlDataElement.value
  htmlDataElement.value = aValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value`"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  The value property of the `web.dom.HTMLDataElement` interface
  a `web.dom.DOMString` reflecting the value HTML attribute.

  `var aValue = htmlDataElement.value
  htmlDataElement.value = aValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value`"
  [this val]
  (aset this "value" val))

