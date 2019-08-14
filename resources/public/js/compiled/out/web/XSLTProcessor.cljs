(ns web.XSLTProcessor
  "An XSLTProcessor applies an XSLT stylesheet transformation to
  XML document to produce a new XML document as output. It has
  to load the XSLT stylesheet, to manipulate <xsl:param> parameter
  and to apply the transformation to documents."
  (:refer-clojure :exclude []))

(defn node
  "Method.

  Node Node

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node`"
  [this & args]
  (apply (-> this .-Node) (concat [this] args)))

(defn document-fragment
  "Method.

  The DocumentFragment interface represents a minimal document
  that has no parent. It is used as a lightweight version of `web.Document`
  stores a segment of a document structure comprised of nodes just
  a standard document. The key difference is that because the document
  isn't part of the active document tree structure, changes made
  the fragment don't affect the document, cause reflow, or incur
  performance impact that can occur when changes are made.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment`"
  [this & args]
  (apply (-> this .-DocumentFragment) (concat [this] args)))

(defn document
  "Method.

  The Document interface represents any web page loaded in the
  and serves as an entry point into the web page's content, which
  the DOM tree.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document`"
  [this & args]
  (apply (-> this .-Document) (concat [this] args)))

(defn string
  "Method.

  The String global object is a constructor for strings or a sequence
  characters.

  `String literals take the forms:



  'string text'
  \\\"string text\\\"
  \\\"中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית\\\"

  Strings can also be created using the String global object directly:



  String(thing)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String`"
  [this & args]
  (apply (-> this .-String) (concat [this] args)))

