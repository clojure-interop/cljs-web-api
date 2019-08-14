// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Range');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Range() constructor returns a newly created `web.Range` object whose start and end is the global `web.Document` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/Range`
 */
web.Range.constructor$ = Range;
/**
 * Method.
 * 
 *   The Range.cloneContents() returns a `web.DocumentFragment` copying
 *   objects of type `web.Node` included in the `web.Range`.
 * 
 *   `documentFragment = range.cloneContents();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneContents`
 */
web.Range.clone_contents = (function web$Range$clone_contents(this$){
return this$.cloneContents();
});
/**
 * Method.
 * 
 *   The Range.cloneRange() method returns a `web.Range` object with
 *   points identical to the cloned `web.Range`.
 * 
 *   `clone = range.cloneRange();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneRange`
 */
web.Range.clone_range = (function web$Range$clone_range(this$){
return this$.cloneRange();
});
/**
 * Method.
 * 
 *   The Range.collapse() method collapses the `web.Range` to one
 *   its boundary points.
 * 
 *   `range.collapse(toStart);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapse`
 */
web.Range.collapse = (function web$Range$collapse(this$,to_start){
return this$.collapse(to_start);
});
/**
 * Method.
 * 
 *   The Range.compareBoundaryPoints() method compares the boundary
 *   of the `web.Range` with another one.
 * 
 *   `compare = range.compareBoundaryPoints(how, sourceRange);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/compareBoundaryPoints`
 */
web.Range.compare_boundary_points = (function web$Range$compare_boundary_points(this$,how,source_range){
return this$.compareBoundaryPoints(how,source_range);
});
/**
 * Method.
 * 
 *   The Range.compareNode() returns a constant indicating the position
 *   the `web.Node`.
 * 
 *   `returnValue = range.compareNode( referenceNode );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/compareNode`
 */
web.Range.compare_node = (function web$Range$compare_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43372 = arguments.length;
var i__42557__auto___43373 = (0);
while(true){
if((i__42557__auto___43373 < len__42556__auto___43372)){
args__42563__auto__.push((arguments[i__42557__auto___43373]));

var G__43374 = (i__42557__auto___43373 + (1));
i__42557__auto___43373 = G__43374;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Range.compare_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Range.compare_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.compareNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Range.compare_node.cljs$lang$maxFixedArity = (1);

web.Range.compare_node.cljs$lang$applyTo = (function (seq43370){
var G__43371 = cljs.core.first.call(null,seq43370);
var seq43370__$1 = cljs.core.next.call(null,seq43370);
return web.Range.compare_node.cljs$core$IFn$_invoke$arity$variadic(G__43371,seq43370__$1);
});

/**
 * Method.
 * 
 *   The Range.comparePoint() method returns -1, 0, or 1 depending
 *   whether the referenceNode is before, the same as, or after the
 * 
 *   `returnValue = range.comparePoint(referenceNode, offset)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/comparePoint`
 */
web.Range.compare_point = (function web$Range$compare_point(this$,reference_node,offset){
return this$.comparePoint(reference_node,offset);
});
/**
 * Method.
 * 
 *   The Range.createContextualFragment() method returns a `web.DocumentFragment`
 *   invoking the HTML fragment parsing algorithm or the XML fragment
 *   algorithm with the start of the range (the parent of the selected
 *   as the context node. The HTML fragment parsing algorithm is used
 *   the range belongs to a Document whose HTMLness bit is set. In
 *   HTML case, if the context node would be html, for historical
 *   the fragment parsing algorithm is invoked with body as the context
 * 
 *   `documentFragment = range.createContextualFragment(tagString)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment`
 */
web.Range.create_contextual_fragment = (function web$Range$create_contextual_fragment(this$,tag_string){
return this$.createContextualFragment(tag_string);
});
/**
 * Method.
 * 
 *   The Range.deleteContents() method removes the contents of the
 *   from the `web.Document`.
 * 
 *   `range.deleteContents()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents`
 */
web.Range.delete_contents = (function web$Range$delete_contents(this$){
return this$.deleteContents();
});
/**
 * Method.
 * 
 *   The Range.detach() method does nothing. It used to disable the
 *   object and enable the browser to release associated resources.
 *   method has been kept for compatibility.
 * 
 *   `range.detach();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/detach`
 */
web.Range.detach = (function web$Range$detach(this$){
return this$.detach();
});
/**
 * Method.
 * 
 *   The Range.extractContents() method moves contents of the `web.Range`
 *   the document tree into a `web.DocumentFragment`.
 * 
 *   `documentFragment = range.extractContents();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/extractContents`
 */
web.Range.extract_contents = (function web$Range$extract_contents(this$){
return this$.extractContents();
});
/**
 * Method.
 * 
 *   The Range.getBoundingClientRect() method returns a `dom.DOMRect`
 *   that bounds the contents of the range; this is a rectangle enclosing
 *   union of the bounding rectangles for all the elements in the
 * 
 *   `boundingRect = range.getBoundingClientRect()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/getBoundingClientRect`
 */
web.Range.get_bounding_client_rect = (function web$Range$get_bounding_client_rect(this$){
return this$.getBoundingClientRect();
});
/**
 * Method.
 * 
 *   The Range.getClientRects() method returns a list of `dom.DOMRect`
 *   representing the area of the screen occupied by the range. This
 *   created by aggregating the results of calls to `web.Element.getClientRects()`
 *   all the elements in the range.
 * 
 *   `rectList = range.getClientRects()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects`
 */
web.Range.get_client_rects = (function web$Range$get_client_rects(this$){
return this$.getClientRects();
});
/**
 * Method.
 * 
 *   The Range.insertNode() method inserts a node at the start of
 *   `web.Range`.
 * 
 *   `range.insertNode(newNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode`
 */
web.Range.insert_node = (function web$Range$insert_node(this$,new_node){
return this$.insertNode(new_node);
});
/**
 * Method.
 * 
 *   The Range.intersectsNode() method returns a boolean indicating
 *   the given `web.Node` intersects the `web.Range`.
 * 
 *   `bool = range.intersectsNode( referenceNode )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/intersectsNode`
 */
web.Range.intersects_node = (function web$Range$intersects_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43377 = arguments.length;
var i__42557__auto___43378 = (0);
while(true){
if((i__42557__auto___43378 < len__42556__auto___43377)){
args__42563__auto__.push((arguments[i__42557__auto___43378]));

var G__43379 = (i__42557__auto___43378 + (1));
i__42557__auto___43378 = G__43379;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Range.intersects_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Range.intersects_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.intersectsNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Range.intersects_node.cljs$lang$maxFixedArity = (1);

web.Range.intersects_node.cljs$lang$applyTo = (function (seq43375){
var G__43376 = cljs.core.first.call(null,seq43375);
var seq43375__$1 = cljs.core.next.call(null,seq43375);
return web.Range.intersects_node.cljs$core$IFn$_invoke$arity$variadic(G__43376,seq43375__$1);
});

/**
 * Method.
 * 
 *   The Range.isPointInRange() method returns a boolean indicating
 *   the given point is in the `web.Range`. It returns true if the
 *   (cursor position) at offset within ReferenceNode is within this
 * 
 *   `bool = range.isPointInRange( referenceNode, offset )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/isPointInRange`
 */
web.Range.is_point_in_range = (function web$Range$is_point_in_range(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43382 = arguments.length;
var i__42557__auto___43383 = (0);
while(true){
if((i__42557__auto___43383 < len__42556__auto___43382)){
args__42563__auto__.push((arguments[i__42557__auto___43383]));

var G__43384 = (i__42557__auto___43383 + (1));
i__42557__auto___43383 = G__43384;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Range.is_point_in_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Range.is_point_in_range.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isPointInRange,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Range.is_point_in_range.cljs$lang$maxFixedArity = (1);

web.Range.is_point_in_range.cljs$lang$applyTo = (function (seq43380){
var G__43381 = cljs.core.first.call(null,seq43380);
var seq43380__$1 = cljs.core.next.call(null,seq43380);
return web.Range.is_point_in_range.cljs$core$IFn$_invoke$arity$variadic(G__43381,seq43380__$1);
});

/**
 * Method.
 * 
 *   The Range.selectNode() method sets the `web.Range` to contain
 *   `web.Node` and its contents. The parent `web.Node` of the start
 *   end of the `web.Range` will be the same as the parent of the
 * 
 *   `range.selectNode(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode`
 */
web.Range.select_node = (function web$Range$select_node(this$,reference_node){
return this$.selectNode(reference_node);
});
/**
 * Method.
 * 
 *   The Range.selectNodeContents() method sets the `web.Range` to
 *   the contents of a `web.Node`.
 * 
 *   `range.selectNodeContents(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents`
 */
web.Range.select_node_contents = (function web$Range$select_node_contents(this$,reference_node){
return this$.selectNodeContents(reference_node);
});
/**
 * Method.
 * 
 *   The Range.setEnd() method sets the end position of a `web.Range`.
 * 
 *   `range.setEnd(endNode, endOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd`
 */
web.Range.set_end = (function web$Range$set_end(this$,end_node,end_offset){
return this$.setEnd(end_node,end_offset);
});
/**
 * Method.
 * 
 *   The Range.setEndAfter() method sets the end position of a `web.Range`
 *   to another `web.Node`. The parent Node of end of the Range will
 *   the same as that for the referenceNode.
 * 
 *   `range.setEndAfter(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndAfter`
 */
web.Range.set_end_after = (function web$Range$set_end_after(this$,reference_node){
return this$.setEndAfter(reference_node);
});
/**
 * Method.
 * 
 *   The Range.setEndBefore() method sets the end position of a Range
 *   to another `web.Node`. The parent Node of end of the Range will
 *   the same as that for the referenceNode.
 * 
 *   `range.setEndBefore(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndBefore`
 */
web.Range.set_end_before = (function web$Range$set_end_before(this$,reference_node){
return this$.setEndBefore(reference_node);
});
/**
 * Method.
 * 
 *   The Range.setStart() method sets the start position of a `web.Range`.
 * 
 *   `range.setStart(startNode, startOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart`
 */
web.Range.set_start = (function web$Range$set_start(this$,start_node,start_offset){
return this$.setStart(start_node,start_offset);
});
/**
 * Method.
 * 
 *   The Range.setStartAfter() method sets the start position of a
 *   relative to a `web.Node`. The parent `web.Node` of the start
 *   the `web.Range` will be the same as that for the referenceNode.
 * 
 *   `range.setStartAfter(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartAfter`
 */
web.Range.set_start_after = (function web$Range$set_start_after(this$,reference_node){
return this$.setStartAfter(reference_node);
});
/**
 * Method.
 * 
 *   The Range.setStartBefore() method sets the start position of
 *   `web.Range` relative to another `web.Node`. The parent `web.Node`
 *   the start of the `web.Range` will be the same as that for the
 * 
 *   `range.setStartBefore(referenceNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartBefore`
 */
web.Range.set_start_before = (function web$Range$set_start_before(this$,reference_node){
return this$.setStartBefore(reference_node);
});
/**
 * Method.
 * 
 *   The Range.surroundContents() method moves content of the `web.Range`
 *   a new node, placing the new node at the start of the specified
 * 
 *   `range.surroundContents(newParent);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents`
 */
web.Range.surround_contents = (function web$Range$surround_contents(this$,new_parent){
return this$.surroundContents(new_parent);
});
/**
 * Method.
 * 
 *   The Range.toString() method is a stringifier returning the text
 *   the `web.Range`.
 * 
 *   `text = range.toString();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/toString`
 */
web.Range.to_string = (function web$Range$to_string(this$){
return this$.toString();
});
/**
 * Property.
 * 
 *   The Range.collapsed read-only property returns a `web.Boolean`
 *   indicating whether the start and end points of the `web.Range`
 *   at the same position. It returns true if the start and end boundary
 *   of the `web.Range` are the same point in the DOM, false if not.
 * 
 *   `isCollapsed = range.collapsed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed`
 */
web.Range.collapsed = (function web$Range$collapsed(this$){
return this$.collapsed();
});
/**
 * Property.
 * 
 *   The Range.collapsed read-only property returns a `web.Boolean`
 *   indicating whether the start and end points of the `web.Range`
 *   at the same position. It returns true if the start and end boundary
 *   of the `web.Range` are the same point in the DOM, false if not.
 * 
 *   `isCollapsed = range.collapsed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed`
 */
web.Range.set_collapsed_BANG_ = (function web$Range$set_collapsed_BANG_(this$,val){
return (this$["collapsed"] = val);
});
/**
 * Property.
 * 
 *   The Range.commonAncestorContainer read-only property returns
 *   deepest — or furthest down the document tree — `web.Node` that
 *   both boundary points of the range. This means that if `web.Range.startContainer`
 *   `web.Range.endContainer` both refer to the same node, this node
 *   the commonAncestorContainer.
 * 
 *   `rangeAncestor = range.commonAncestorContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer`
 */
web.Range.common_ancestor_container = (function web$Range$common_ancestor_container(this$){
return this$.commonAncestorContainer();
});
/**
 * Property.
 * 
 *   The Range.commonAncestorContainer read-only property returns
 *   deepest — or furthest down the document tree — `web.Node` that
 *   both boundary points of the range. This means that if `web.Range.startContainer`
 *   `web.Range.endContainer` both refer to the same node, this node
 *   the commonAncestorContainer.
 * 
 *   `rangeAncestor = range.commonAncestorContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer`
 */
web.Range.set_common_ancestor_container_BANG_ = (function web$Range$set_common_ancestor_container_BANG_(this$,val){
return (this$["commonAncestorContainer"] = val);
});
/**
 * Property.
 * 
 *   The Range.endContainer read-only property returns the `web.Node`
 *   which the `web.Range` ends. To change the end position of a node,
 *   the `web.Range.setEnd()` method or a similar one.
 * 
 *   `endRangeNode = range.endContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer`
 */
web.Range.end_container = (function web$Range$end_container(this$){
return this$.endContainer();
});
/**
 * Property.
 * 
 *   The Range.endContainer read-only property returns the `web.Node`
 *   which the `web.Range` ends. To change the end position of a node,
 *   the `web.Range.setEnd()` method or a similar one.
 * 
 *   `endRangeNode = range.endContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer`
 */
web.Range.set_end_container_BANG_ = (function web$Range$set_end_container_BANG_(this$,val){
return (this$["endContainer"] = val);
});
/**
 * Property.
 * 
 *   The Range.endOffset read-only property returns a number representing
 *   in the `web.Range.endContainer` the `web.Range` ends.
 * 
 *   `endRangeOffset = range.endOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset`
 */
web.Range.end_offset = (function web$Range$end_offset(this$){
return this$.endOffset();
});
/**
 * Property.
 * 
 *   The Range.endOffset read-only property returns a number representing
 *   in the `web.Range.endContainer` the `web.Range` ends.
 * 
 *   `endRangeOffset = range.endOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset`
 */
web.Range.set_end_offset_BANG_ = (function web$Range$set_end_offset_BANG_(this$,val){
return (this$["endOffset"] = val);
});
/**
 * Property.
 * 
 *   The Range.startContainer read-only property returns the `web.Node`
 *   which the Range starts. To change the start position of a node,
 *   one of the `web.Range.setStart()` methods.
 * 
 *   `startRangeNode = range.startContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer`
 */
web.Range.start_container = (function web$Range$start_container(this$){
return this$.startContainer();
});
/**
 * Property.
 * 
 *   The Range.startContainer read-only property returns the `web.Node`
 *   which the Range starts. To change the start position of a node,
 *   one of the `web.Range.setStart()` methods.
 * 
 *   `startRangeNode = range.startContainer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer`
 */
web.Range.set_start_container_BANG_ = (function web$Range$set_start_container_BANG_(this$,val){
return (this$["startContainer"] = val);
});
/**
 * Property.
 * 
 *   The Range.startOffset read-only property returns a number representing
 *   in the startContainer the Range starts.
 * 
 *   `startRangeOffset = range.startOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset`
 */
web.Range.start_offset = (function web$Range$start_offset(this$){
return this$.startOffset();
});
/**
 * Property.
 * 
 *   The Range.startOffset read-only property returns a number representing
 *   in the startContainer the Range starts.
 * 
 *   `startRangeOffset = range.startOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset`
 */
web.Range.set_start_offset_BANG_ = (function web$Range$set_start_offset_BANG_(this$,val){
return (this$["startOffset"] = val);
});

//# sourceMappingURL=Range.js.map?rel=1565798806041
