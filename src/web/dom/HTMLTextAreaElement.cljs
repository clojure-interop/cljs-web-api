(ns web.dom.HTMLTextAreaElement
  "The HTMLTextAreaElement interface provides special properties
  methods for manipulating the layout and presentation of `<textarea>`"
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  [Read Only]

  The HTMLTextAreaElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<textarea>` element.

  `var labelElements = textArea.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/labels`"
  [this]
  (-> this (.-labels)))

