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
  (-> this (.-max)))

(defn set-max!
  "Property.

  Is a double value reflecting the content attribute of the same
  limited to numbers greater than zero. Its default value is 1.0."
  [this val]
  (aset this "max" val))

(defn position
  "Property.

  Returns a double value returning the result of dividing the current
  (value) by the maximum value (max); if the progress bar is an
  progress bar, it returns -1."
  [this]
  (-> this (.-position)))

(defn set-position!
  "Property.

  Returns a double value returning the result of dividing the current
  (value) by the maximum value (max); if the progress bar is an
  progress bar, it returns -1."
  [this val]
  (aset this "position" val))

(defn value
  "Property.

  Is a double value that reflects the current value; if the progress
  is an indeterminate progress bar, it returns 0."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  Is a double value that reflects the current value; if the progress
  is an indeterminate progress bar, it returns 0."
  [this val]
  (aset this "value" val))

(defn labels
  "Property.

  [Read Only]

  The HTMLProgressElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<progress>` element.

  `var labelElements = progress.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels`"
  [this]
  (-> this (.-labels)))

