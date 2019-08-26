(ns web.dom.DOMImplementation
  "The DOMImplementation interface represents an object providing
  which are not dependent on any particular document. Such an object
  returned by the `Document.implementation` property."
  (:refer-clojure :exclude []))

(defn create-document
  "Method.

  The DOMImplementation.createDocument() method creates and returns
  `web.XMLDocument`.

  `var doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument`"
  [this namespace-uri qualified-name-str document-type]
  (-> this (.createDocument namespace-uri qualified-name-str document-type)))

(defn create-document-type
  "Method.

  The DOMImplementation.createDocumentType() method returns a `web.DocumentType`
  which can either be used with `DOMImplementation.createDocument`
  document creation or can be put into the document via methods
  `Node.insertBefore()` or `Node.replaceChild()`.

  `var doctype = document.implementation.createDocumentType(qualifiedNameStr, publicId, systemId);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType`"
  [this qualified-name-str public-id system-id]
  (-> this (.createDocumentType qualified-name-str public-id system-id)))

(defn create-html-document
  "Method.

  The DOMImplementation.createHTMLDocument() method creates a new
  `web.Document`.

  `newDoc = document.implementation.createHTMLDocument(title);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument`"
  [this title]
  (-> this (.createHTMLDocument title)))

(defn has-feature
  "Method.

  The DOMImplementation.hasFeature() method returns a `js.Boolean`
  indicating if a given feature is supported. It is deprecated
  modern browsers return true in all cases.

  `flag = document.implementation.hasFeature(feature, version);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature`"
  [this feature version]
  (-> this (.hasFeature feature version)))

