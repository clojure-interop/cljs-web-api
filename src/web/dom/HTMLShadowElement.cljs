(ns web.dom.HTMLShadowElement
  "The HTMLShadowElement interface represents a `<shadow>` HTML
  which is used in Shadow DOM."
  (:refer-clojure :exclude []))

(defn get-distributed-nodes
  "Method.

  The HTMLShadowElement.getDistributedNodes() method returns a
  `web.NodeList` of the distributed nodes associated with this
  element.

  `var nodeList = object.getDistributedNodes()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLShadowElement/getDistributedNodes`"
  [this ]
  (-> this (.getDistributedNodes)))

