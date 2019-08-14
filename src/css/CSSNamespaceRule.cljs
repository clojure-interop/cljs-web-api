(ns css.CSSNamespaceRule
  "The CSSNamespaceRule interface describes an object representing
  single CSS `web.@namespace` at-rule. It implements the `css.CSSRule`
  with a type value of 10 (CSSRule.NAMESPACE_RULE)."
  (:refer-clojure :exclude []))

(defn namespace-uri
  "Property.

  The CSSNamespaceRule.namespaceURI read-only property returns
  `dom.DOMString` containing the text of the URI of the given namespace.

  `var namespaceURI = CSSNamespaceRule.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule/namespaceURI`"
  [this]
  (-> this (.namespaceURI)))

(defn set-namespace-uri!
  "Property.

  The CSSNamespaceRule.namespaceURI read-only property returns
  `dom.DOMString` containing the text of the URI of the given namespace.

  `var namespaceURI = CSSNamespaceRule.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule/namespaceURI`"
  [this val]
  (aset this "namespaceURI" val))

(defn prefix
  "Property.

  The CSSNamespaceRule.prefix read-only property returns a `dom.DOMString`
  the name of the prefix associated to this namespace. If there
  no such prefix, returns null.

  `var prefix = CSSNamespaceRule.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule/prefix`"
  [this]
  (-> this (.prefix)))

(defn set-prefix!
  "Property.

  The CSSNamespaceRule.prefix read-only property returns a `dom.DOMString`
  the name of the prefix associated to this namespace. If there
  no such prefix, returns null.

  `var prefix = CSSNamespaceRule.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNamespaceRule/prefix`"
  [this val]
  (aset this "prefix" val))

