(ns html.HTMLOutputElement
  "The HTMLOutputElement interface provides properties and methods
  those inherited from `html.HTMLElement`) for manipulating the
  and presentation of `web.<output>` elements."
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<output>`

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<output>`

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this val]
  (aset this "labels" val))

