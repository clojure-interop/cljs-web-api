(ns html.HTMLButtonElement
  "The HTMLButtonElement interface provides properties and methods
  the regular `html.HTMLElement` interface it also has available
  it by inheritance) for manipulating `web.<button>` elements."
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  The HTMLButtonElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<button>`

  `var labelElements = button.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLButtonElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<button>`

  `var labelElements = button.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels`"
  [this val]
  (aset this "labels" val))

