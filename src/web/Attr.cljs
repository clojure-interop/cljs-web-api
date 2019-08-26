(ns web.Attr
  "The Attr interface represents one of a DOM element's attributes
  an object. In most DOM methods, you will directly retrieve the
  as a string (e.g., `Element.getAttribute()`), but certain functions
  `Element.getAttributeNode()`) or means of iterating return Attr"
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  The attribute's name."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The attribute's name."
  [this val]
  (aset this "name" val))

(defn namespace-uri
  "Property.

  The Attr.namespaceURI read-only property returns the namespace
  of the attribute, or null if the element is not in a namespace.

  `namespace = attribute.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI`"
  [this]
  (-> this (.-namespaceURI)))

(defn set-namespace-uri!
  "Property.

  The Attr.namespaceURI read-only property returns the namespace
  of the attribute, or null if the element is not in a namespace.

  `namespace = attribute.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI`"
  [this val]
  (aset this "namespaceURI" val))

(defn local-name
  "Property.

  The Attr.localName read-only property returns the local part
  the qualified name of an element.

  `name = attribute.localName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName`"
  [this]
  (-> this (.-localName)))

(defn set-local-name!
  "Property.

  The Attr.localName read-only property returns the local part
  the qualified name of an element.

  `name = attribute.localName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName`"
  [this val]
  (aset this "localName" val))

(defn prefix
  "Property.

  The Attr.prefix read-only property returns the namespace prefix
  the specified attribute, or null if no prefix is specified.

  `string = attribute.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix`"
  [this]
  (-> this (.-prefix)))

(defn set-prefix!
  "Property.

  The Attr.prefix read-only property returns the namespace prefix
  the specified attribute, or null if no prefix is specified.

  `string = attribute.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix`"
  [this val]
  (aset this "prefix" val))

(defn owner-element
  "Property.

  The element holding the attribute.
  Note: DOM Level 4 removed this property. The assumption was
  since you get an Attr object from an Element, you should already
  the associated element.
  As that doesn't hold true in cases like Attr objects being returned
  Document.evaluate, the DOM Living Standard reintroduced the property.
  Gecko outputs a deprecation note starting from Gecko 7.0 (Firefox
  / Thunderbird 7.0 / SeaMonkey 2.4). This note was removed again
  Gecko 49.0 (Firefox 49.0 / Thunderbird 49.0 / SeaMonkey 2.46)."
  [this]
  (-> this (.-ownerElement)))

(defn set-owner-element!
  "Property.

  The element holding the attribute.
  Note: DOM Level 4 removed this property. The assumption was
  since you get an Attr object from an Element, you should already
  the associated element.
  As that doesn't hold true in cases like Attr objects being returned
  Document.evaluate, the DOM Living Standard reintroduced the property.
  Gecko outputs a deprecation note starting from Gecko 7.0 (Firefox
  / Thunderbird 7.0 / SeaMonkey 2.4). This note was removed again
  Gecko 49.0 (Firefox 49.0 / Thunderbird 49.0 / SeaMonkey 2.46)."
  [this val]
  (aset this "ownerElement" val))

(defn specified
  "Property.

  This property always returns true. Originally, it returned true
  the attribute was explicitly specified in the source code or
  a script, and false if its value came from the default one defined
  the document's DTD."
  [this]
  (-> this (.-specified)))

(defn set-specified!
  "Property.

  This property always returns true. Originally, it returned true
  the attribute was explicitly specified in the source code or
  a script, and false if its value came from the default one defined
  the document's DTD."
  [this val]
  (aset this "specified" val))

(defn value
  "Property.

  The attribute's value."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  The attribute's value."
  [this val]
  (aset this "value" val))

