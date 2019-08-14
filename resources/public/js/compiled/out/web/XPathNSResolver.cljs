(ns web.XPathNSResolver
  "The XPathNSResolver interface permits prefix strings in an XPath
  to be properly bound to namespace URI strings."
  (:refer-clojure :exclude []))

(defn lookup-namespace-uri
  "Method.

  The lookupNamespaceURI method looks up the namespace URI associated
  the given namespace prefix within an XPath expression evaluated
  the `web.XPathEvaluator` interface.

  `DOMString XPathNSResolver.lookupNamespaceURI(prefix);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathNSResolver/lookupNamespaceURI`"
  [this prefix]
  (-> this (.lookupNamespaceURI prefix)))

