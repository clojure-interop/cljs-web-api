(ns html.HTMLContentElement
  "The HTMLContentElement interface represents a `web.<content>`
  Element, which is used in Shadow DOM."
  (:refer-clojure :exclude []))

(defn get-distributed-nodes
  "Method.

  The HTMLContentElement.getDistributedNodes() method returns a
  `web.NodeList` of the distributed nodes associated with this
  element.

  `var nodeList = object.getDistributedNodes()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLContentElement/getDistributedNodes`"
  [this ]
  (-> this (.getDistributedNodes)))

(defn select
  "Property.

  The HTMLContentElement.select property reflects the select attribute.
  is a `dom.DOMString` containing a space-separated list of CSS
  that select the content to insert in place of the <content> element.

  `object.select = \\\"CSSselector CSSselector ...\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLContentElement/select`"
  [this]
  (-> this (.select)))

(defn set-select!
  "Property.

  The HTMLContentElement.select property reflects the select attribute.
  is a `dom.DOMString` containing a space-separated list of CSS
  that select the content to insert in place of the <content> element.

  `object.select = \\\"CSSselector CSSselector ...\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLContentElement/select`"
  [this val]
  (aset this "select" val))

