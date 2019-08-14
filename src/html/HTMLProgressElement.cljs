(ns html.HTMLProgressElement
  "The HTMLProgressElement interface provides special properties
  methods (beyond the regular `html.HTMLElement` interface it also
  available to it by inheritance) for manipulating the layout and
  of `web.<progress>` elements."
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  The HTMLProgressElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<progress>`

  `var labelElements = progress.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLProgressElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<progress>`

  `var labelElements = progress.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels`"
  [this val]
  (aset this "labels" val))

