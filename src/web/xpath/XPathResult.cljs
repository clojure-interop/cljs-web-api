(ns web.xpath.XPathResult
  "The XPathResult interface represents the results generated by
  an XPath expression within the context of a given node."
  (:refer-clojure :exclude []))

(defn iterate-next
  "Method.

  The iterateNext() method of the `web.xpath.XPathResult` interface
  over a node set result and returns the next node from it or null
  there are no more nodes.

  `var node = result.iterateNext();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/iterateNext`"
  [this ]
  (-> this (.iterateNext)))

(defn snapshot-item
  "Method.

  The snapshotItem() method of the `web.xpath.XPathResult` interface
  an item of the snapshot collection or null in case the index
  not within the range of nodes. Unlike the iterator result, the
  does not become invalid, but may not correspond to the current
  if it is mutated.

  `var node = result.snapshotItem(i);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotItem`"
  [this i]
  (-> this (.snapshotItem i)))

(defn boolean-value
  "Property.

  The read-only booleanValue property of the `web.xpath.XPathResult`
  returns the boolean value of a result with `XPathResult.resultType`
  BOOLEAN_TYPE.

  `var value = result.booleanValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue`"
  [this]
  (-> this (.booleanValue)))

(defn set-boolean-value!
  "Property.

  The read-only booleanValue property of the `web.xpath.XPathResult`
  returns the boolean value of a result with `XPathResult.resultType`
  BOOLEAN_TYPE.

  `var value = result.booleanValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue`"
  [this val]
  (aset this "booleanValue" val))

(defn invalid-iterator-state
  "Property.

  The read-only invalidIteratorState property of the `web.xpath.XPathResult`
  signifies that the iterator has become invalid. It is true if
  is UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE
  the document has been modified since this result was returned.

  `var iteratorState = result.invalidIteratorState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState`"
  [this]
  (-> this (.invalidIteratorState)))

(defn set-invalid-iterator-state!
  "Property.

  The read-only invalidIteratorState property of the `web.xpath.XPathResult`
  signifies that the iterator has become invalid. It is true if
  is UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE
  the document has been modified since this result was returned.

  `var iteratorState = result.invalidIteratorState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState`"
  [this val]
  (aset this "invalidIteratorState" val))

(defn number-value
  "Property.

  The read-only numberValue property of the `web.xpath.XPathResult`
  returns the numeric value of a result with `XPathResult.resultType`
  NUMBER_TYPE.

  `var value = result.numberValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue`"
  [this]
  (-> this (.numberValue)))

(defn set-number-value!
  "Property.

  The read-only numberValue property of the `web.xpath.XPathResult`
  returns the numeric value of a result with `XPathResult.resultType`
  NUMBER_TYPE.

  `var value = result.numberValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue`"
  [this val]
  (aset this "numberValue" val))

(defn result-type
  "Property.

  The read-only resultType property of the `web.xpath.XPathResult`
  represents the type of the result, as defined by the type constants.

  `var resultType = result.resultType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType`"
  [this]
  (-> this (.resultType)))

(defn set-result-type!
  "Property.

  The read-only resultType property of the `web.xpath.XPathResult`
  represents the type of the result, as defined by the type constants.

  `var resultType = result.resultType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType`"
  [this val]
  (aset this "resultType" val))

(defn single-node-value
  "Property.

  The read-only singleNodeValue property of the `web.xpath.XPathResult`
  returns a `web.Node` value or null in case no node was matched
  a result with `XPathResult.resultType` being ANY_UNORDERED_NODE_TYPE
  FIRST_ORDERED_NODE_TYPE.

  `var value = result.singleNodeValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue`"
  [this]
  (-> this (.singleNodeValue)))

(defn set-single-node-value!
  "Property.

  The read-only singleNodeValue property of the `web.xpath.XPathResult`
  returns a `web.Node` value or null in case no node was matched
  a result with `XPathResult.resultType` being ANY_UNORDERED_NODE_TYPE
  FIRST_ORDERED_NODE_TYPE.

  `var value = result.singleNodeValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue`"
  [this val]
  (aset this "singleNodeValue" val))

(defn snapshot-length
  "Property.

  The read-only snapshotLength property of the `web.xpath.XPathResult`
  represents the number of nodes in the result snapshot.

  `var snapshotLength = result.snapshotLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength`"
  [this]
  (-> this (.snapshotLength)))

(defn set-snapshot-length!
  "Property.

  The read-only snapshotLength property of the `web.xpath.XPathResult`
  represents the number of nodes in the result snapshot.

  `var snapshotLength = result.snapshotLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength`"
  [this val]
  (aset this "snapshotLength" val))

(defn string-value
  "Property.

  The read-only stringValue property of the `web.xpath.XPathResult`
  returns the string value of a result with `XPathResult.resultType`
  STRING_TYPE.

  `var value = result.stringValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue`"
  [this]
  (-> this (.stringValue)))

(defn set-string-value!
  "Property.

  The read-only stringValue property of the `web.xpath.XPathResult`
  returns the string value of a result with `XPathResult.resultType`
  STRING_TYPE.

  `var value = result.stringValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue`"
  [this val]
  (aset this "stringValue" val))

