(ns web.XPathExpression
  "This interface is a compiled XPath expression that can be evaluated
  a document or specific node to return information its DOM tree."
  (:refer-clojure :exclude []))

(defn evaluate
  "Method.

  The evaluate() method of the `web.XPathExpression` interface
  an XPath expression on the given node or document and returns
  `web.XPathResult`.

  `XPathResult node.evaluate(contextNode, type, result);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression/evaluate`"
  [this context-node type result]
  (-> this (.evaluate context-node type result)))

