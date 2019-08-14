// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XPathEvaluator');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   This method compiles an `web.XPathExpression` which can then
 *   used for (repeated) evaluations of the XPath expression.
 * 
 *   `XPathExpression XPathEvaluator.createExpression(expression, resolver);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createExpression`
 */
web.XPathEvaluator.create_expression = (function web$XPathEvaluator$create_expression(this$,expression,resolver){
return this$.createExpression(expression,resolver);
});
/**
 * Method.
 * 
 *   This method adapts any DOM node to resolve namespaces so that
 *   XPath expression can be easily evaluated relative to the context
 *   the node where it appeared within the document.
 * 
 *   `XPathNSResolver XPathEvaluator.createNSResolver(nodeResolver);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createNSResolver`
 */
web.XPathEvaluator.create_ns_resolver = (function web$XPathEvaluator$create_ns_resolver(this$,node_resolver){
return this$.createNSResolver(node_resolver);
});
/**
 * Method.
 * 
 *   The evaluate() method of the `web.XPathEvaluator` interface executes
 *   XPath expression on the given node or document and returns an
 * 
 *   `XPathResult XPathEvaluator.evaluate(expression, contextNode, resolver, type, result);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/evaluate`
 */
web.XPathEvaluator.evaluate = (function web$XPathEvaluator$evaluate(this$,expression,context_node,resolver,type,result){
return this$.evaluate(expression,context_node,resolver,type,result);
});

//# sourceMappingURL=XPathEvaluator.js.map?rel=1565798842358
