(ns web.NodeFilter
  "A NodeFilter interface represents an object used to filter the
  in a `web.NodeIterator` or `web.TreeWalker`. They don't know
  about the DOM or how to traverse nodes; they just know how to
  a single node against the provided filter."
  (:refer-clojure :exclude []))

(defn accept-node
  "Method.

  The NodeFilter.acceptNode() method returns an unsigned short
  will be used to tell if a given `web.Node` must be accepted or
  by the `web.NodeIterator` or `web.TreeWalker` iteration algorithm.
  method is expected to be written by the user of a NodeFilter.
  return values are:

  `result = nodeFilter.acceptNode(node)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter/acceptNode`"
  [this node]
  (-> this (.acceptNode node)))

