// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XPathResult');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The iterateNext() method of the `web.XPathResult` interface iterates
 *   a node set result and returns the next node from it or null if
 *   are no more nodes.
 * 
 *   `var node = result.iterateNext();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/iterateNext`
 */
web.XPathResult.iterate_next = (function web$XPathResult$iterate_next(this$){
return this$.iterateNext();
});
/**
 * Method.
 * 
 *   The snapshotItem() method of the `web.XPathResult` interface
 *   an item of the snapshot collection or null in case the index
 *   not within the range of nodes. Unlike the iterator result, the
 *   does not become invalid, but may not correspond to the current
 *   if it is mutated.
 * 
 *   `var node = result.snapshotItem(i);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotItem`
 */
web.XPathResult.snapshot_item = (function web$XPathResult$snapshot_item(this$,i){
return this$.snapshotItem(i);
});
/**
 * Property.
 * 
 *   The read-only booleanValue property of the `web.XPathResult`
 *   returns the boolean value of a result with `web.XPathResult.resultType`
 *   BOOLEAN_TYPE.
 * 
 *   `var value = result.booleanValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue`
 */
web.XPathResult.boolean_value = (function web$XPathResult$boolean_value(this$){
return this$.booleanValue();
});
/**
 * Property.
 * 
 *   The read-only booleanValue property of the `web.XPathResult`
 *   returns the boolean value of a result with `web.XPathResult.resultType`
 *   BOOLEAN_TYPE.
 * 
 *   `var value = result.booleanValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue`
 */
web.XPathResult.set_boolean_value_BANG_ = (function web$XPathResult$set_boolean_value_BANG_(this$,val){
return (this$["booleanValue"] = val);
});
/**
 * Property.
 * 
 *   The read-only invalidIteratorState property of the `web.XPathResult`
 *   signifies that the iterator has become invalid. It is true if
 *   is UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE
 *   the document has been modified since this result was returned.
 * 
 *   `var iteratorState = result.invalidIteratorState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState`
 */
web.XPathResult.invalid_iterator_state = (function web$XPathResult$invalid_iterator_state(this$){
return this$.invalidIteratorState();
});
/**
 * Property.
 * 
 *   The read-only invalidIteratorState property of the `web.XPathResult`
 *   signifies that the iterator has become invalid. It is true if
 *   is UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE
 *   the document has been modified since this result was returned.
 * 
 *   `var iteratorState = result.invalidIteratorState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState`
 */
web.XPathResult.set_invalid_iterator_state_BANG_ = (function web$XPathResult$set_invalid_iterator_state_BANG_(this$,val){
return (this$["invalidIteratorState"] = val);
});
/**
 * Property.
 * 
 *   The read-only numberValue property of the `web.XPathResult` interface
 *   the numeric value of a result with `web.XPathResult.resultType`
 *   NUMBER_TYPE.
 * 
 *   `var value = result.numberValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue`
 */
web.XPathResult.number_value = (function web$XPathResult$number_value(this$){
return this$.numberValue();
});
/**
 * Property.
 * 
 *   The read-only numberValue property of the `web.XPathResult` interface
 *   the numeric value of a result with `web.XPathResult.resultType`
 *   NUMBER_TYPE.
 * 
 *   `var value = result.numberValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue`
 */
web.XPathResult.set_number_value_BANG_ = (function web$XPathResult$set_number_value_BANG_(this$,val){
return (this$["numberValue"] = val);
});
/**
 * Property.
 * 
 *   The read-only resultType property of the `web.XPathResult` interface
 *   the type of the result, as defined by the type constants.
 * 
 *   `var resultType = result.resultType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType`
 */
web.XPathResult.result_type = (function web$XPathResult$result_type(this$){
return this$.resultType();
});
/**
 * Property.
 * 
 *   The read-only resultType property of the `web.XPathResult` interface
 *   the type of the result, as defined by the type constants.
 * 
 *   `var resultType = result.resultType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType`
 */
web.XPathResult.set_result_type_BANG_ = (function web$XPathResult$set_result_type_BANG_(this$,val){
return (this$["resultType"] = val);
});
/**
 * Property.
 * 
 *   The read-only singleNodeValue property of the `web.XPathResult`
 *   returns a `web.Node` value or null in case no node was matched
 *   a result with `web.XPathResult.resultType` being ANY_UNORDERED_NODE_TYPE
 *   FIRST_ORDERED_NODE_TYPE.
 * 
 *   `var value = result.singleNodeValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue`
 */
web.XPathResult.single_node_value = (function web$XPathResult$single_node_value(this$){
return this$.singleNodeValue();
});
/**
 * Property.
 * 
 *   The read-only singleNodeValue property of the `web.XPathResult`
 *   returns a `web.Node` value or null in case no node was matched
 *   a result with `web.XPathResult.resultType` being ANY_UNORDERED_NODE_TYPE
 *   FIRST_ORDERED_NODE_TYPE.
 * 
 *   `var value = result.singleNodeValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue`
 */
web.XPathResult.set_single_node_value_BANG_ = (function web$XPathResult$set_single_node_value_BANG_(this$,val){
return (this$["singleNodeValue"] = val);
});
/**
 * Property.
 * 
 *   The read-only snapshotLength property of the `web.XPathResult`
 *   represents the number of nodes in the result snapshot.
 * 
 *   `var snapshotLength = result.snapshotLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength`
 */
web.XPathResult.snapshot_length = (function web$XPathResult$snapshot_length(this$){
return this$.snapshotLength();
});
/**
 * Property.
 * 
 *   The read-only snapshotLength property of the `web.XPathResult`
 *   represents the number of nodes in the result snapshot.
 * 
 *   `var snapshotLength = result.snapshotLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength`
 */
web.XPathResult.set_snapshot_length_BANG_ = (function web$XPathResult$set_snapshot_length_BANG_(this$,val){
return (this$["snapshotLength"] = val);
});
/**
 * Property.
 * 
 *   The read-only stringValue property of the `web.XPathResult` interface
 *   the string value of a result with `web.XPathResult.resultType`
 *   STRING_TYPE.
 * 
 *   `var value = result.stringValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue`
 */
web.XPathResult.string_value = (function web$XPathResult$string_value(this$){
return this$.stringValue();
});
/**
 * Property.
 * 
 *   The read-only stringValue property of the `web.XPathResult` interface
 *   the string value of a result with `web.XPathResult.resultType`
 *   STRING_TYPE.
 * 
 *   `var value = result.stringValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue`
 */
web.XPathResult.set_string_value_BANG_ = (function web$XPathResult$set_string_value_BANG_(this$,val){
return (this$["stringValue"] = val);
});

//# sourceMappingURL=XPathResult.js.map?rel=1565798836280
