(ns web.Attr
  "This type represents a DOM element's attribute as an object.
  most DOM methods, you will probably directly retrieve the attribute
  a string (e.g., `web.Element.getAttribute()`, but certain functions
  `web.Element.getAttributeNode()`) or means of iterating give
  types."
  (:refer-clojure :exclude []))

(defn local-name
  "Property.

  The Attr.localName read-only property returns the local part
  the qualified name of an element.

  `name = attribute.localName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName`"
  [this]
  (-> this (.localName)))

(defn set-local-name!
  "Property.

  The Attr.localName read-only property returns the local part
  the qualified name of an element.

  `name = attribute.localName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName`"
  [this val]
  (aset this "localName" val))

(defn namespace-uri
  "Property.

  The Attr.namespaceURI read-only property returns the namespace
  of the attribute, or null if the element is not in a namespace.

  `namespace = attribute.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI`"
  [this]
  (-> this (.namespaceURI)))

(defn set-namespace-uri!
  "Property.

  The Attr.namespaceURI read-only property returns the namespace
  of the attribute, or null if the element is not in a namespace.

  `namespace = attribute.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI`"
  [this val]
  (aset this "namespaceURI" val))

(defn prefix
  "Property.

  The Attr.prefix read-only property returns the namespace prefix
  the specified attribute, or null if no prefix is specified.

  `string = attribute.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix`"
  [this]
  (-> this (.prefix)))

(defn set-prefix!
  "Property.

  The Attr.prefix read-only property returns the namespace prefix
  the specified attribute, or null if no prefix is specified.

  `string = attribute.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix`"
  [this val]
  (aset this "prefix" val))

