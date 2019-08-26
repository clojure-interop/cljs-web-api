(ns web.dom.HTMLProgressElement
  "The HTMLProgressElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLElement` interface it
  has available to it by inheritance) for manipulating the layout
  presentation of `<progress>` elements."
  (:refer-clojure :exclude [max]))

(defn max
  "Property.

  Is a double value reflecting the content attribute of the same
  limited to numbers greater than zero. Its default value is 1.0."
  [this]
  (-> this (.max)))

(defn set-max!
  "Property.

  Is a double value reflecting the content attribute of the same
  limited to numbers greater than zero. Its default value is 1.0."
  [this val]
  (aset this "max" val))

(defn labels
  "Property.

  The HTMLProgressElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<progress>` element.

  `var labelElements = progress.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLProgressElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<progress>` element.

  `var labelElements = progress.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels`"
  [this val]
  (aset this "labels" val))

