(ns xml.XMLSerializer
  "The XMLSerializer interface provides the `web.serializeToString()`
  to construct an XML string representing a DOM tree."
  (:refer-clojure :exclude []))

(defn serialize-to-string
  "Method.

  The `xml.XMLSerializer` method serializeToString() constructs
  string representing the specified DOM tree in XML form.

  `xmlString = anXMLSerializer.serializeToString(rootNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer/serializeToString`"
  [this root-node]
  (-> this (.serializeToString root-node)))

