(ns html.HTMLTextAreaElement
  "The HTMLTextAreaElement interface provides special properties
  methods for manipulating the layout and presentation of `web.<textarea>`"
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  The HTMLTextAreaElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<textarea>`

  `var labelElements = textArea.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLTextAreaElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<textarea>`

  `var labelElements = textArea.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/labels`"
  [this val]
  (aset this "labels" val))

