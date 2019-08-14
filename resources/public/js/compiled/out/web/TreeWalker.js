// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TreeWalker');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The TreeWalker.firstChild() method moves the current `web.Node`
 *   the first visible child of the current node, and returns the
 *   child. It also moves the current node to this child. If no such
 *   exists, returns null and the current node is not changed.
 * 
 *   `node = treeWalker.firstChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/firstChild`
 */
web.TreeWalker.first_child = (function web$TreeWalker$first_child(this$){
return this$.firstChild();
});
/**
 * Method.
 * 
 *   The TreeWalker.lastChild() method moves the current `web.Node`
 *   the last visible child of the current node, and returns the found
 *   It also moves the current node to this child. If no such child
 *   returns null and the current node is not changed.
 * 
 *   `node = treeWalker.lastChild();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/lastChild`
 */
web.TreeWalker.last_child = (function web$TreeWalker$last_child(this$){
return this$.lastChild();
});
/**
 * Method.
 * 
 *   The TreeWalker.nextNode() method moves the current `web.Node`
 *   the next visible node in the document order, and returns the
 *   node. It also moves the current node to this one. If no such
 *   exists, returns null and the current node is not changed.
 * 
 *   `node = treeWalker.nextNode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextNode`
 */
web.TreeWalker.next_node = (function web$TreeWalker$next_node(this$){
return this$.nextNode();
});
/**
 * Method.
 * 
 *   The TreeWalker.nextSibling() method moves the current `web.Node`
 *   its next sibling, if any, and returns the found sibling. I there
 *   no such node, return null and the current node is not changed.
 * 
 *   `node = treeWalker.nextSibling();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextSibling`
 */
web.TreeWalker.next_sibling = (function web$TreeWalker$next_sibling(this$){
return this$.nextSibling();
});
/**
 * Method.
 * 
 *   The TreeWalker.parentNode() method moves the current `web.Node`
 *   the first visible ancestor node in the document order, and returns
 *   found node. If no such node exists, or if it is above the TreeWalker's
 *   node, returns null and the current node is not changed.
 * 
 *   `node = treeWalker.parentNode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/parentNode`
 */
web.TreeWalker.parent_node = (function web$TreeWalker$parent_node(this$){
return this$.parentNode();
});
/**
 * Method.
 * 
 *   The TreeWalker.previousNode() method moves the current `web.Node`
 *   the previous visible node in the document order, and returns
 *   found node. It also moves the current node to this one. If no
 *   node exists,or if it is before that the root node defined at
 *   object construction, returns null and the current node is not
 * 
 *   `node = treeWalker.previousNode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousNode`
 */
web.TreeWalker.previous_node = (function web$TreeWalker$previous_node(this$){
return this$.previousNode();
});
/**
 * Method.
 * 
 *   The TreeWalker.previousSibling() method moves the current `web.Node`
 *   its previous sibling, if any, and returns the found sibling.
 *   there is no such node, return null and the current node is not
 * 
 *   `node = treeWalker.previousSibling();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousSibling`
 */
web.TreeWalker.previous_sibling = (function web$TreeWalker$previous_sibling(this$){
return this$.previousSibling();
});
/**
 * Property.
 * 
 *   The TreeWalker.currentNode property represents the `web.Node`
 *   which the `web.TreeWalker` is currently pointing at.
 * 
 *   `node = treeWalker.currentNode;
 *   treeWalker.currentNode = node;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode`
 */
web.TreeWalker.current_node = (function web$TreeWalker$current_node(this$){
return this$.currentNode();
});
/**
 * Property.
 * 
 *   The TreeWalker.currentNode property represents the `web.Node`
 *   which the `web.TreeWalker` is currently pointing at.
 * 
 *   `node = treeWalker.currentNode;
 *   treeWalker.currentNode = node;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode`
 */
web.TreeWalker.set_current_node_BANG_ = (function web$TreeWalker$set_current_node_BANG_(this$,val){
return (this$["currentNode"] = val);
});
/**
 * Property.
 * 
 *   The TreeWalker.expandEntityReferences read-only property returns
 *   `web.Boolean` flag indicating whether or not the children of
 *   reference nodes are visible to the `web.TreeWalker`.
 * 
 *   `expand = treeWalker.expandEntityReferences;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/expandEntityReferences`
 */
web.TreeWalker.expand_entity_references = (function web$TreeWalker$expand_entity_references(this$){
return this$.expandEntityReferences();
});
/**
 * Property.
 * 
 *   The TreeWalker.expandEntityReferences read-only property returns
 *   `web.Boolean` flag indicating whether or not the children of
 *   reference nodes are visible to the `web.TreeWalker`.
 * 
 *   `expand = treeWalker.expandEntityReferences;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/expandEntityReferences`
 */
web.TreeWalker.set_expand_entity_references_BANG_ = (function web$TreeWalker$set_expand_entity_references_BANG_(this$,val){
return (this$["expandEntityReferences"] = val);
});
/**
 * Property.
 * 
 *   The TreeWalker.filter read-only property returns a `web.NodeFilter`
 *   is the filtering object associated with the `web.TreeWalker`.
 * 
 *   `nodeFilter = treeWalker.filter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/filter`
 */
web.TreeWalker.filter = (function web$TreeWalker$filter(this$){
return this$.filter();
});
/**
 * Property.
 * 
 *   The TreeWalker.filter read-only property returns a `web.NodeFilter`
 *   is the filtering object associated with the `web.TreeWalker`.
 * 
 *   `nodeFilter = treeWalker.filter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/filter`
 */
web.TreeWalker.set_filter_BANG_ = (function web$TreeWalker$set_filter_BANG_(this$,val){
return (this$["filter"] = val);
});
/**
 * Property.
 * 
 *   The TreeWalker.root read-only property returns the node that
 *   the root of what the TreeWalker traverses.
 * 
 *   `root = TreeWalker.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/root`
 */
web.TreeWalker.root = (function web$TreeWalker$root(this$){
return this$.root();
});
/**
 * Property.
 * 
 *   The TreeWalker.root read-only property returns the node that
 *   the root of what the TreeWalker traverses.
 * 
 *   `root = TreeWalker.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/root`
 */
web.TreeWalker.set_root_BANG_ = (function web$TreeWalker$set_root_BANG_(this$,val){
return (this$["root"] = val);
});
/**
 * Property.
 * 
 *   The TreeWalker.whatToShow read-only property returns an unsigned
 *   being a bitmask made of constants describing the types of `web.Node`
 *   must to be presented. Non-matching nodes are skipped, but their
 *   may be included, if relevant. The possible values are:
 * 
 *   `nodeTypes = treeWalker.whatToShow;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/whatToShow`
 */
web.TreeWalker.what_to_show = (function web$TreeWalker$what_to_show(this$){
return this$.whatToShow();
});
/**
 * Property.
 * 
 *   The TreeWalker.whatToShow read-only property returns an unsigned
 *   being a bitmask made of constants describing the types of `web.Node`
 *   must to be presented. Non-matching nodes are skipped, but their
 *   may be included, if relevant. The possible values are:
 * 
 *   `nodeTypes = treeWalker.whatToShow;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/whatToShow`
 */
web.TreeWalker.set_what_to_show_BANG_ = (function web$TreeWalker$set_what_to_show_BANG_(this$,val){
return (this$["whatToShow"] = val);
});

//# sourceMappingURL=TreeWalker.js.map?rel=1565798861801
