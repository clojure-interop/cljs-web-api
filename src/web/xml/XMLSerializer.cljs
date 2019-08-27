(ns web.xml.XMLSerializer
  "The XMLSerializer interface provides the `serializeToString()`
  to construct an XML string representing a DOM tree."
  (:refer-clojure :exclude []))

(defn serialize-to-string
  "Method.

  The `web.xml.XMLSerializer` method serializeToString() constructs
  string representing the specified DOM tree in XML form.

  `xmlString = anXMLSerializer.serializeToString(rootNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer/serializeToString`"
  [this root-node]
  (-> this (.serializeToString root-node)))

(defn serialize-to-stream
  "Method.

  The subtree rooted by the specified element is serialized to
  byte stream using the character set specified."
  [this & args]
  (-> this .-serializeToStream (.apply this (clj->js args))))

