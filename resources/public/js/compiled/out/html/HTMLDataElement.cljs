(ns html.HTMLDataElement
  "The HTMLDataElement interface provides special properties (beyond
  regular `html.HTMLElement` interface it also has available to
  by inheritance) for manipulating `web.<data>` elements."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  The value property of the `html.HTMLDataElement` interface returns
  `dom.DOMString` reflecting the value HTML attribute.

  `var aValue = htmlDataElement.value
  htmlDataElement.value = aValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The value property of the `html.HTMLDataElement` interface returns
  `dom.DOMString` reflecting the value HTML attribute.

  `var aValue = htmlDataElement.value
  htmlDataElement.value = aValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value`"
  [this val]
  (aset this "value" val))

