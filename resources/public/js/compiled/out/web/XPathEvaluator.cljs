(ns web.XPathEvaluator
  "The XPathEvaluator interface allows to compile and evaluate XPath"
  (:refer-clojure :exclude []))

(defn create-expression
  "Method.

  This method compiles an `web.XPathExpression` which can then
  used for (repeated) evaluations of the XPath expression.

  `XPathExpression XPathEvaluator.createExpression(expression, resolver);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createExpression`"
  [this expression resolver]
  (-> this (.createExpression expression resolver)))

(defn create-ns-resolver
  "Method.

  This method adapts any DOM node to resolve namespaces so that
  XPath expression can be easily evaluated relative to the context
  the node where it appeared within the document.

  `XPathNSResolver XPathEvaluator.createNSResolver(nodeResolver);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createNSResolver`"
  [this node-resolver]
  (-> this (.createNSResolver node-resolver)))

(defn evaluate
  "Method.

  The evaluate() method of the `web.XPathEvaluator` interface executes
  XPath expression on the given node or document and returns an

  `XPathResult XPathEvaluator.evaluate(expression, contextNode, resolver, type, result);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/evaluate`"
  [this expression context-node resolver type result]
  (-> this (.evaluate expression context-node resolver type result)))

