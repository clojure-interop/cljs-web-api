// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Selection');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Selection.addRange() method adds a `web.Range` to a `web.Selection`.
 * 
 *   `selection.addRange(range);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/addRange`
 */
web.Selection.add_range = (function web$Selection$add_range(this$,range){
return this$.addRange(range);
});
/**
 * Method.
 * 
 *   The Selection.collapse() method collapses the current selection
 *   a single point. The document is not modified. If the content
 *   focused and editable, the caret will blink there.
 * 
 *   `sel.collapse(node, offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapse`
 */
web.Selection.collapse = (function web$Selection$collapse(this$,node,offset){
return this$.collapse(node,offset);
});
/**
 * Method.
 * 
 *   The Selection.collapseToEnd() method collapses the selection
 *   the end of the last range in the selection. If the content of
 *   selection is focused and editable, the caret will blink there.
 * 
 *   `sel.collapseToEnd()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapseToEnd`
 */
web.Selection.collapse_to_end = (function web$Selection$collapse_to_end(this$){
return this$.collapseToEnd();
});
/**
 * Method.
 * 
 *   The Selection.collapseToStart() method collapses the selection
 *   the start of the first range in the selection. If the content
 *   the selection is focused and editable, the caret will blink there.
 * 
 *   `sel.collapseToStart()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapseToStart`
 */
web.Selection.collapse_to_start = (function web$Selection$collapse_to_start(this$){
return this$.collapseToStart();
});
/**
 * Method.
 * 
 *   The Selection.containsNode() method indicates whether a specfied
 *   is part of the selection.
 * 
 *   `sel.containsNode(node, partialContainment)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/containsNode`
 */
web.Selection.contains_node = (function web$Selection$contains_node(this$,node,partial_containment){
return this$.containsNode(node,partial_containment);
});
/**
 * Method.
 * 
 *   The deleteFromDocument() method of the `web.Selection` interface
 *   the selected text from the document's DOM.
 * 
 *   `sel.deleteFromDocument()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/deleteFromDocument`
 */
web.Selection.delete_from_document = (function web$Selection$delete_from_document(this$){
return this$.deleteFromDocument();
});
/**
 * Method.
 * 
 *   The Selection.extend() method moves the focus of the selection
 *   a specified point. The anchor of the selection does not move.
 *   selection will be from the anchor to the new focus, regardless
 *   direction.
 * 
 *   `sel.extend(node, offset)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/extend`
 */
web.Selection.extend = (function web$Selection$extend(this$,node,offset){
return this$.extend(node,offset);
});
/**
 * Method.
 * 
 *   The Selection.getRangeAt() method returns a range object representing
 *   of the ranges currently selected.
 * 
 *   `range = sel.getRangeAt(index)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt`
 */
web.Selection.get_range_at = (function web$Selection$get_range_at(this$,index){
return this$.getRangeAt(index);
});
/**
 * Method.
 * 
 *   The Selection.modify() method applies a change to the current
 *   or cursor position, using simple textual commands.
 * 
 *   `sel.modify(alter, direction, granularity)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/modify`
 */
web.Selection.modify = (function web$Selection$modify(this$,alter,direction,granularity){
return this$.modify(alter,direction,granularity);
});
/**
 * Method.
 * 
 *   The Selection.removeAllRanges() method removes all ranges from
 *   selection, leaving the `web.anchorNode` and `web.focusNode` properties
 *   to null and leaving nothing selected.
 * 
 *   `sel.removeAllRanges();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeAllRanges`
 */
web.Selection.remove_all_ranges = (function web$Selection$remove_all_ranges(this$){
return this$.removeAllRanges();
});
/**
 * Method.
 * 
 *   The Selection.removeRange() method removes a range from a selection.
 * 
 *   `sel.removeRange(range)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeRange`
 */
web.Selection.remove_range = (function web$Selection$remove_range(this$,range){
return this$.removeRange(range);
});
/**
 * Method.
 * 
 *   The Selection.selectAllChildren() method adds all the children
 *   the specified node to the selection. Previous selection is lost.
 * 
 *   `sel.selectAllChildren(parentNode)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/selectAllChildren`
 */
web.Selection.select_all_children = (function web$Selection$select_all_children(this$,parent_node){
return this$.selectAllChildren(parent_node);
});
/**
 * Method.
 * 
 *   The setBaseAndExtent() method of the `web.Selection` interface
 *   the selection to be a range including all or parts of two specified
 *   nodes, and any content located between them.
 * 
 *   `sel.setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/setBaseAndExtent`
 */
web.Selection.set_base_and_extent = (function web$Selection$set_base_and_extent(this$,anchor_node,anchor_offset,focus_node,focus_offset){
return this$.setBaseAndExtent(anchor_node,anchor_offset,focus_node,focus_offset);
});
/**
 * Method.
 * 
 *   The Selection.toString() method returns a string currently being
 *   by the selection object, i.e. the currently selected text.
 * 
 *   `sel.toString()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/toString`
 */
web.Selection.to_string = (function web$Selection$to_string(this$){
return this$.toString();
});
/**
 * Property.
 * 
 *   The Selection.anchorNode read-only property returns the `web.Node`
 *   which the selection begins.
 * 
 *   `node = sel.anchorNode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorNode`
 */
web.Selection.anchor_node = (function web$Selection$anchor_node(this$){
return this$.anchorNode();
});
/**
 * Property.
 * 
 *   The Selection.anchorOffset read-only property returns the number
 *   characters that the selection's anchor is offset within the `web.Selection.anchorNode`.
 * 
 *   `number = sel.anchorOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorOffset`
 */
web.Selection.anchor_offset = (function web$Selection$anchor_offset(this$){
return this$.anchorOffset();
});
/**
 * Property.
 * 
 *   The Selection.focusNode read-only property returns the `web.Node`
 *   which the selection ends.
 * 
 *   `node = sel.focusNode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusNode`
 */
web.Selection.focus_node = (function web$Selection$focus_node(this$){
return this$.focusNode();
});
/**
 * Property.
 * 
 *   The Selection.focusOffset read-only property returns the number
 *   characters that the selection's focus is offset within the `web.Selection.focusNode`.
 * 
 *   `offset = sel.focusOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusOffset`
 */
web.Selection.focus_offset = (function web$Selection$focus_offset(this$){
return this$.focusOffset();
});
/**
 * Property.
 * 
 *   The Selection.isCollapsed read-only property returns a `web.Boolean`
 *   indicates whether or not there is currently any text selected.
 *   text is selected when the selection's start and end points are
 *   the same position in the content.
 * 
 *   `bool = sel.isCollapsed`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/isCollapsed`
 */
web.Selection.is_collapsed = (function web$Selection$is_collapsed(this$){
return this$.isCollapsed();
});
/**
 * Property.
 * 
 *   The Selection.rangeCount read-only property returns the number
 *   ranges in the selection.
 * 
 *   `value = sel.rangeCount`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount`
 */
web.Selection.range_count = (function web$Selection$range_count(this$){
return this$.rangeCount();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Selection` interface
 *   a `dom.DOMString` describing the type of the current selection.
 * 
 *   `value = sel.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/type`
 */
web.Selection.type = (function web$Selection$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Selection` interface
 *   a `dom.DOMString` describing the type of the current selection.
 * 
 *   `value = sel.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/type`
 */
web.Selection.set_type_BANG_ = (function web$Selection$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=Selection.js.map?rel=1565798859453
