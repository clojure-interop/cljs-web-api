// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NodeIterator');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The NodeIterator.detach() method is a no-op, kept for backward
 *   only.
 * 
 *   `nodeIterator.detach();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/detach`
 */
web.NodeIterator.detach = (function web$NodeIterator$detach(this$){
return this$.detach();
});
/**
 * Method.
 * 
 *   The NodeIterator.nextNode() method returns the next node in the
 *   represented by the `web.NodeIterator` and advances the position
 *   the iterator within the set. The first call to nextNode() returns
 *   first node in the set.
 * 
 *   `node = nodeIterator.nextNode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/nextNode`
 */
web.NodeIterator.next_node = (function web$NodeIterator$next_node(this$){
return this$.nextNode();
});
/**
 * Method.
 * 
 *   The NodeIterator.previousNode() method returns the previous node
 *   the set represented by the `web.NodeIterator` and moves the position
 *   the iterator backwards within the set.
 * 
 *   `node = nodeIterator.previousNode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/previousNode`
 */
web.NodeIterator.previous_node = (function web$NodeIterator$previous_node(this$){
return this$.previousNode();
});
/**
 * Property.
 * 
 *   The NodeIterator.expandEntityReferences read-only property returns
 *   `web.Boolean` flag indicating whether or not the children of
 *   reference nodes are visible to the `web.NodeIterator`.
 * 
 *   `expand = nodeIterator.expandEntityReferences;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/expandEntityReferences`
 */
web.NodeIterator.expand_entity_references = (function web$NodeIterator$expand_entity_references(this$){
return this$.expandEntityReferences();
});
/**
 * Property.
 * 
 *   The NodeIterator.expandEntityReferences read-only property returns
 *   `web.Boolean` flag indicating whether or not the children of
 *   reference nodes are visible to the `web.NodeIterator`.
 * 
 *   `expand = nodeIterator.expandEntityReferences;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/expandEntityReferences`
 */
web.NodeIterator.set_expand_entity_references_BANG_ = (function web$NodeIterator$set_expand_entity_references_BANG_(this$,val){
return (this$["expandEntityReferences"] = val);
});
/**
 * Property.
 * 
 *   The NodeIterator.filter read-only method returns a `web.NodeFilter`
 *   that is an object implement an acceptNode(node) method, used
 *   screen nodes.
 * 
 *   `nodeFilter = nodeIterator.filter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/filter`
 */
web.NodeIterator.filter = (function web$NodeIterator$filter(this$){
return this$.filter();
});
/**
 * Property.
 * 
 *   The NodeIterator.filter read-only method returns a `web.NodeFilter`
 *   that is an object implement an acceptNode(node) method, used
 *   screen nodes.
 * 
 *   `nodeFilter = nodeIterator.filter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/filter`
 */
web.NodeIterator.set_filter_BANG_ = (function web$NodeIterator$set_filter_BANG_(this$,val){
return (this$["filter"] = val);
});
/**
 * Property.
 * 
 *   The NodeIterator.pointerBeforeReferenceNode read-only property
 *   a `web.Boolean` flag that indicates whether the `web.NodeFilter`
 *   anchored before (if this value is true) or after (if this value
 *   false) the anchor node indicated by the `web.NodeIterator.referenceNode`
 * 
 *   `flag = nodeIterator.pointerBeforeReferenceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/pointerBeforeReferenceNode`
 */
web.NodeIterator.pointer_before_reference_node = (function web$NodeIterator$pointer_before_reference_node(this$){
return this$.pointerBeforeReferenceNode();
});
/**
 * Property.
 * 
 *   The NodeIterator.pointerBeforeReferenceNode read-only property
 *   a `web.Boolean` flag that indicates whether the `web.NodeFilter`
 *   anchored before (if this value is true) or after (if this value
 *   false) the anchor node indicated by the `web.NodeIterator.referenceNode`
 * 
 *   `flag = nodeIterator.pointerBeforeReferenceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/pointerBeforeReferenceNode`
 */
web.NodeIterator.set_pointer_before_reference_node_BANG_ = (function web$NodeIterator$set_pointer_before_reference_node_BANG_(this$,val){
return (this$["pointerBeforeReferenceNode"] = val);
});
/**
 * Property.
 * 
 *   The NodeIterator.referenceNode read-only returns the `web.Node`
 *   which the iterator is anchored; as new nodes are inserted, the
 *   remains anchored to the reference node as specified by this property.
 * 
 *   `node = nodeIterator.referenceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/referenceNode`
 */
web.NodeIterator.reference_node = (function web$NodeIterator$reference_node(this$){
return this$.referenceNode();
});
/**
 * Property.
 * 
 *   The NodeIterator.referenceNode read-only returns the `web.Node`
 *   which the iterator is anchored; as new nodes are inserted, the
 *   remains anchored to the reference node as specified by this property.
 * 
 *   `node = nodeIterator.referenceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/referenceNode`
 */
web.NodeIterator.set_reference_node_BANG_ = (function web$NodeIterator$set_reference_node_BANG_(this$,val){
return (this$["referenceNode"] = val);
});
/**
 * Property.
 * 
 *   The NodeIterator.root read-only property represents the `web.Node`
 *   is the root of what the `web.NodeIterator` traverses.
 * 
 *   `root = nodeIterator.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/root`
 */
web.NodeIterator.root = (function web$NodeIterator$root(this$){
return this$.root();
});
/**
 * Property.
 * 
 *   The NodeIterator.root read-only property represents the `web.Node`
 *   is the root of what the `web.NodeIterator` traverses.
 * 
 *   `root = nodeIterator.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/root`
 */
web.NodeIterator.set_root_BANG_ = (function web$NodeIterator$set_root_BANG_(this$,val){
return (this$["root"] = val);
});
/**
 * Property.
 * 
 *   The NodeIterator.whatToShow read-only property represents an
 *   integer representing a bitmask signifying what types of nodes
 *   be returned by the `web.NodeIterator`.
 * 
 *   `var nodeTypes = nodeIterator.whatToShow;
 * 
 *   The values that can be combined to form the bitmask are:
 * 
 * 
 * 
 * 
 *   \t\t\tConstant
 *   \t\t\tNumerical value
 *   \t\t\tDescription
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ALL
 *   \t\t\t-1 (that is the max value of unsigned long)
 *   \t\t\tShows all nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ATTRIBUTE
 *   \t\t\t2
 *   \t\t\tShows attribute `web.Attr` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with an `web.Attr` node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_CDATA_SECTION
 *   \t\t\t8
 *   \t\t\tShows `web.CDATASection` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_COMMENT
 *   \t\t\t128
 *   \t\t\tShows `web.Comment` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT
 *   \t\t\t256
 *   \t\t\tShows `web.Document` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT_FRAGMENT
 *   \t\t\t1024
 *   \t\t\tShows `web.DocumentFragment` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT_TYPE
 *   \t\t\t512
 *   \t\t\tShows `web.DocumentType` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ELEMENT
 *   \t\t\t1
 *   \t\t\tShows `web.Element` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ENTITY
 *   \t\t\t32
 *   \t\t\tShows `web.Entity` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with an `web.Entity` node as its root; in this case, it means that the `web.Entity` node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ENTITY_REFERENCE
 *   \t\t\t16
 *   \t\t\tShows `web.EntityReference` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_NOTATION
 *   \t\t\t2048
 *   \t\t\tShows `web.Notation` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with a `web.Notation` node as its root; in this case, it means that the `web.Notation` node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_PROCESSING_INSTRUCTION
 *   \t\t\t64
 *   \t\t\tShows `web.ProcessingInstruction` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_TEXT
 *   \t\t\t4
 *   \t\t\tShows `web.Text` nodes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/whatToShow`
 */
web.NodeIterator.what_to_show = (function web$NodeIterator$what_to_show(this$){
return this$.whatToShow();
});
/**
 * Property.
 * 
 *   The NodeIterator.whatToShow read-only property represents an
 *   integer representing a bitmask signifying what types of nodes
 *   be returned by the `web.NodeIterator`.
 * 
 *   `var nodeTypes = nodeIterator.whatToShow;
 * 
 *   The values that can be combined to form the bitmask are:
 * 
 * 
 * 
 * 
 *   \t\t\tConstant
 *   \t\t\tNumerical value
 *   \t\t\tDescription
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ALL
 *   \t\t\t-1 (that is the max value of unsigned long)
 *   \t\t\tShows all nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ATTRIBUTE
 *   \t\t\t2
 *   \t\t\tShows attribute `web.Attr` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with an `web.Attr` node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_CDATA_SECTION
 *   \t\t\t8
 *   \t\t\tShows `web.CDATASection` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_COMMENT
 *   \t\t\t128
 *   \t\t\tShows `web.Comment` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT
 *   \t\t\t256
 *   \t\t\tShows `web.Document` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT_FRAGMENT
 *   \t\t\t1024
 *   \t\t\tShows `web.DocumentFragment` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_DOCUMENT_TYPE
 *   \t\t\t512
 *   \t\t\tShows `web.DocumentType` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ELEMENT
 *   \t\t\t1
 *   \t\t\tShows `web.Element` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ENTITY
 *   \t\t\t32
 *   \t\t\tShows `web.Entity` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with an `web.Entity` node as its root; in this case, it means that the `web.Entity` node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_ENTITY_REFERENCE
 *   \t\t\t16
 *   \t\t\tShows `web.EntityReference` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_NOTATION
 *   \t\t\t2048
 *   \t\t\tShows `web.Notation` nodes. This is meaningful only when creating a `web.NodeIterator` or `web.TreeWalker` with a `web.Notation` node as its root; in this case, it means that the `web.Notation` node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_PROCESSING_INSTRUCTION
 *   \t\t\t64
 *   \t\t\tShows `web.ProcessingInstruction` nodes.
 * 
 * 
 *   \t\t\tNodeFilter.SHOW_TEXT
 *   \t\t\t4
 *   \t\t\tShows `web.Text` nodes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/whatToShow`
 */
web.NodeIterator.set_what_to_show_BANG_ = (function web$NodeIterator$set_what_to_show_BANG_(this$,val){
return (this$["whatToShow"] = val);
});

//# sourceMappingURL=NodeIterator.js.map?rel=1565798860554
