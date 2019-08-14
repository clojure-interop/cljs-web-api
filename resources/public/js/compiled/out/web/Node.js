// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Node');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Node.appendChild() method adds a node to the end of the list
 *   children of a specified parent node. If the given child is a
 *   to an existing node in the document, appendChild() moves it from
 *   current position to the new position (there is no requirement
 *   remove the node from its parent node before appending it to some
 *   node).
 * 
 *   `element.appendChild(aChild);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild`
 */
web.Node.append_child = (function web$Node$append_child(this$,a_child){
return this$.appendChild(a_child);
});
/**
 * Method.
 * 
 *   The Node.cloneNode() method returns a duplicate of the node on
 *   this method was called.
 * 
 *   `var dupNode = node.cloneNode([deep]);
 * 
 * 
 *   node
 *   The node to be cloned.
 *   dupNode
 *   The new node that will be a clone of node
 *   deep Optional
 *   true if the children of the node should also be cloned, or false to clone only the specified node.
 * 
 * 
 * 
 *   Note: In the DOM4 specification (as implemented in Gecko 13.0 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10)), deep is an optional argument. If omitted, the method acts as if the value of deep was true, defaulting to using deep cloning as the default behavior. To create a shallow clone, deep must be set to false.
 * 
 *   This behavior has been changed in the latest spec, and if omitted, the method will act as if the value of deep was false. Though it's still optional, you should always provide the deep argument both for backward and forward compatibility. With Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3)), the console warned developers not to omit the argument. Starting with Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), a shallow clone is defaulted instead of a deep clone.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode`
 */
web.Node.clone_node = (function web$Node$clone_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44612 = arguments.length;
var i__42557__auto___44613 = (0);
while(true){
if((i__42557__auto___44613 < len__42556__auto___44612)){
args__42563__auto__.push((arguments[i__42557__auto___44613]));

var G__44614 = (i__42557__auto___44613 + (1));
i__42557__auto___44613 = G__44614;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.clone_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.clone_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.cloneNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.clone_node.cljs$lang$maxFixedArity = (1);

web.Node.clone_node.cljs$lang$applyTo = (function (seq44610){
var G__44611 = cljs.core.first.call(null,seq44610);
var seq44610__$1 = cljs.core.next.call(null,seq44610);
return web.Node.clone_node.cljs$core$IFn$_invoke$arity$variadic(G__44611,seq44610__$1);
});

/**
 * Method.
 * 
 *   The Node.compareDocumentPosition() method compares the position
 *   the given node against another node in any document.
 * 
 *   `compareMask = node.compareDocumentPosition(otherNode)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition`
 */
web.Node.compare_document_position = (function web$Node$compare_document_position(this$,other_node){
return this$.compareDocumentPosition(other_node);
});
/**
 * Method.
 * 
 *   The Node.contains() method returns a `web.Boolean` value indicating
 *   a node is a descendant of a given node, i.e. the node itself,
 *   of its direct children (`web.childNodes`), one of the children's
 *   children, and so on.
 * 
 *   `node.contains( otherNode )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/contains`
 */
web.Node.contains = (function web$Node$contains(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44617 = arguments.length;
var i__42557__auto___44618 = (0);
while(true){
if((i__42557__auto___44618 < len__42556__auto___44617)){
args__42563__auto__.push((arguments[i__42557__auto___44618]));

var G__44619 = (i__42557__auto___44618 + (1));
i__42557__auto___44618 = G__44619;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.contains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.contains.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.contains,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.contains.cljs$lang$maxFixedArity = (1);

web.Node.contains.cljs$lang$applyTo = (function (seq44615){
var G__44616 = cljs.core.first.call(null,seq44615);
var seq44615__$1 = cljs.core.next.call(null,seq44615);
return web.Node.contains.cljs$core$IFn$_invoke$arity$variadic(G__44616,seq44615__$1);
});

/**
 * Method.
 * 
 *   The getRootNode() method of the `web.Node` interface returns
 *   context object's root, which optionally includes the shadow root
 *   it is available.
 * 
 *   `var root = node.getRootNode(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode`
 */
web.Node.get_root_node = (function web$Node$get_root_node(this$,options){
return this$.getRootNode(options);
});
/**
 * Method.
 * 
 *   The Node.getUserData() method returns any user `dom.DOMUserData`
 *   previously on the given node by `web.Node.setUserData()`.
 * 
 *   `userData = someNode.getUserData(userKey);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getUserData`
 */
web.Node.get_user_data = (function web$Node$get_user_data(this$,user_key){
return this$.getUserData(user_key);
});
/**
 * Method.
 * 
 *   The Node.hasChildNodes() method returns a `web.Boolean` value
 *   whether the given `web.Node` has child nodes or not.
 * 
 *   `bool = node.hasChildNodes();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes`
 */
web.Node.has_child_nodes = (function web$Node$has_child_nodes(this$){
return this$.hasChildNodes();
});
/**
 * Method.
 * 
 *   The Node.insertBefore() method inserts a node before the reference
 *   as a child of a specified parent node. If the given child is
 *   reference to an existing node in the document, insertBefore()
 *   it from its current position to the new position (there is no
 *   to remove the node from its parent node before appending it to
 *   other node).
 * 
 *   `var insertedNode = parentNode.insertBefore(newNode, referenceNode);
 * 
 * 
 *   insertedNode The node being inserted, that is newNode
 *   parentNode The parent of the newly inserted node.
 *   newNode The node to be inserted.
 *   referenceNode The node before which newNode is inserted.
 * 
 * 
 *   If referenceNode is null, the newNode is inserted at the end of the list of child nodes.
 * 
 * 
 *   referenceNode is not an optional parameter -- you must explicitly pass a Node or null. Failing to provide it or passing invalid values may behave differently in different browser versions.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore`
 */
web.Node.insert_before = (function web$Node$insert_before(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44622 = arguments.length;
var i__42557__auto___44623 = (0);
while(true){
if((i__42557__auto___44623 < len__42556__auto___44622)){
args__42563__auto__.push((arguments[i__42557__auto___44623]));

var G__44624 = (i__42557__auto___44623 + (1));
i__42557__auto___44623 = G__44624;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.insert_before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.insert_before.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.insertBefore,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.insert_before.cljs$lang$maxFixedArity = (1);

web.Node.insert_before.cljs$lang$applyTo = (function (seq44620){
var G__44621 = cljs.core.first.call(null,seq44620);
var seq44620__$1 = cljs.core.next.call(null,seq44620);
return web.Node.insert_before.cljs$core$IFn$_invoke$arity$variadic(G__44621,seq44620__$1);
});

/**
 * Method.
 * 
 *   The Node.isDefaultNamespace() method accepts a namespace URI
 *   an argument and returns a `web.Boolean` with a value of true
 *   the namespace is the default namespace on the given node or false
 *   not.
 * 
 *   `result = node.isDefaultNamespace(namespaceURI);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isDefaultNamespace`
 */
web.Node.is_default_namespace = (function web$Node$is_default_namespace(this$,namespace_uri){
return this$.isDefaultNamespace(namespace_uri);
});
/**
 * Method.
 * 
 *   The Node.isEqualNode() method tests whether two nodes are equal.
 *   nodes are equal when they have the same type, defining characteristics
 *   elements, this would be their ID, number of children, and so
 *   its attributes match, and so on. The specific set of data points
 *   must match varies depending on the types of the nodes.
 * 
 *   `var isEqualNode = node.isEqualNode(otherNode);
 * 
 * 
 *   otherNode: The `web.Node` to compare equality with.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode`
 */
web.Node.is_equal_node = (function web$Node$is_equal_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44627 = arguments.length;
var i__42557__auto___44628 = (0);
while(true){
if((i__42557__auto___44628 < len__42556__auto___44627)){
args__42563__auto__.push((arguments[i__42557__auto___44628]));

var G__44629 = (i__42557__auto___44628 + (1));
i__42557__auto___44628 = G__44629;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.is_equal_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.is_equal_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isEqualNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.is_equal_node.cljs$lang$maxFixedArity = (1);

web.Node.is_equal_node.cljs$lang$applyTo = (function (seq44625){
var G__44626 = cljs.core.first.call(null,seq44625);
var seq44625__$1 = cljs.core.next.call(null,seq44625);
return web.Node.is_equal_node.cljs$core$IFn$_invoke$arity$variadic(G__44626,seq44625__$1);
});

/**
 * Method.
 * 
 *   The Node.isSameNode() method tests whether two nodes are the
 *   that is if they reference the same object.
 * 
 *   `var isSameNode = node.isSameNode(otherNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode`
 */
web.Node.is_same_node = (function web$Node$is_same_node(this$,other_node){
return this$.isSameNode(other_node);
});
/**
 * Method.
 * 
 *   The Node.isSupported()returns a `web.Boolean` flag containing
 *   result of a test whether the DOM implementation implements a
 *   feature and this feature is supported by the specific node.
 * 
 *   `boolValue = element.isSupported(feature, version)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isSupported`
 */
web.Node.is_supported = (function web$Node$is_supported(this$,feature,version){
return this$.isSupported(feature,version);
});
/**
 * Method.
 * 
 *   The Node.lookupNamespaceURI() method accepts a prefix and returns
 *   namespace URI associated with it on the given node if found (and
 *   if not).
 * 
 *   `var namespace = node.lookupNamespaceURI(prefix);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupNamespaceURI`
 */
web.Node.lookup_namespace_uri = (function web$Node$lookup_namespace_uri(this$,prefix){
return this$.lookupNamespaceURI(prefix);
});
/**
 * Method.
 * 
 *   The Node.lookupPrefix() method returns a `dom.DOMString` containing
 *   prefix for a given namespace URI, if present, and null if not.
 *   multiple prefixes are possible, the result is implementation-dependent.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupPrefix`
 */
web.Node.lookup_prefix = (function web$Node$lookup_prefix(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44632 = arguments.length;
var i__42557__auto___44633 = (0);
while(true){
if((i__42557__auto___44633 < len__42556__auto___44632)){
args__42563__auto__.push((arguments[i__42557__auto___44633]));

var G__44634 = (i__42557__auto___44633 + (1));
i__42557__auto___44633 = G__44634;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.lookup_prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.lookup_prefix.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.lookupPrefix,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.lookup_prefix.cljs$lang$maxFixedArity = (1);

web.Node.lookup_prefix.cljs$lang$applyTo = (function (seq44630){
var G__44631 = cljs.core.first.call(null,seq44630);
var seq44630__$1 = cljs.core.next.call(null,seq44630);
return web.Node.lookup_prefix.cljs$core$IFn$_invoke$arity$variadic(G__44631,seq44630__$1);
});

/**
 * Method.
 * 
 *   The Node.normalize() method puts the specified node and all of
 *   sub-tree into a \"normalized\" form. In a normalized sub-tree,
 *   text nodes in the sub-tree are empty and there are no adjacent
 *   nodes.
 * 
 *   `element.normalize();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize`
 */
web.Node.normalize = (function web$Node$normalize(this$){
return this$.normalize();
});
/**
 * Method.
 * 
 *   The Node.removeChild() method removes a child node from the DOM
 *   returns the removed node.
 * 
 *   `var oldChild = node.removeChild(child);
 *   OR
 *   node.removeChild(child);
 * 
 * 
 *   child is the child node to be removed from the DOM.
 *   node is the parent node of child.
 *   oldChild holds a reference to the removed child node, i.e., oldChild === child.
 * 
 * 
 *   The removed child node still exists in memory, but is no longer part of the DOM. With the first syntax form shown, you may reuse the removed node later in your code, via the oldChild object reference.
 * 
 *   In the second syntax form, however, there is no oldChild reference kept, so assuming your code has not kept any other reference to the node elsewhere, it will immediately become unusable and irretrievable, and will usually be automatically deleted from memory after a short time.
 * 
 *   If child is actually not a child of the element node, the method throws an exception. This will also happen if child was in fact a child of element at the time of the call, but was removed by an event handler invoked in the course of trying to remove the element (e.g., blur.)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild`
 */
web.Node.remove_child = (function web$Node$remove_child(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44637 = arguments.length;
var i__42557__auto___44638 = (0);
while(true){
if((i__42557__auto___44638 < len__42556__auto___44637)){
args__42563__auto__.push((arguments[i__42557__auto___44638]));

var G__44639 = (i__42557__auto___44638 + (1));
i__42557__auto___44638 = G__44639;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.remove_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.remove_child.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeChild,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.remove_child.cljs$lang$maxFixedArity = (1);

web.Node.remove_child.cljs$lang$applyTo = (function (seq44635){
var G__44636 = cljs.core.first.call(null,seq44635);
var seq44635__$1 = cljs.core.next.call(null,seq44635);
return web.Node.remove_child.cljs$core$IFn$_invoke$arity$variadic(G__44636,seq44635__$1);
});

/**
 * Method.
 * 
 *   The Node.replaceChild() method replaces a child node within the
 *   (parent) node.
 * 
 *   `replacedNode = parentNode.replaceChild(newChild, oldChild);
 * 
 * 
 *   newChild is the new node to replace oldChild. If it already exists in the DOM, it is first removed.
 *   oldChild is the existing child to be replaced.
 *   replacedNode is the replaced node. This is the same node as oldChild.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild`
 */
web.Node.replace_child = (function web$Node$replace_child(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44642 = arguments.length;
var i__42557__auto___44643 = (0);
while(true){
if((i__42557__auto___44643 < len__42556__auto___44642)){
args__42563__auto__.push((arguments[i__42557__auto___44643]));

var G__44644 = (i__42557__auto___44643 + (1));
i__42557__auto___44643 = G__44644;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Node.replace_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Node.replace_child.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.replaceChild,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Node.replace_child.cljs$lang$maxFixedArity = (1);

web.Node.replace_child.cljs$lang$applyTo = (function (seq44640){
var G__44641 = cljs.core.first.call(null,seq44640);
var seq44640__$1 = cljs.core.next.call(null,seq44640);
return web.Node.replace_child.cljs$core$IFn$_invoke$arity$variadic(G__44641,seq44640__$1);
});

/**
 * Method.
 * 
 *   The Node.setUserData() method allows a user to attach (or remove)
 *   to an element, without needing to modify the DOM. Note that such
 *   will not be preserved when imported via `web.Node.importNode`,
 *   with `web.Node.cloneNode()` and `web.Node.renameNode()` operations
 *   `web.Node.adoptNode` does preserve the information), and equality
 *   in `web.Node.isEqualNode()` do not consider user data in making
 *   assessment.
 * 
 *   `var prevUserData = someNode.setUserData(userKey, userData, handler);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/setUserData`
 */
web.Node.set_user_data = (function web$Node$set_user_data(this$,user_key,user_data,handler){
return this$.setUserData(user_key,user_data,handler);
});
/**
 * Property.
 * 
 *   The baseURI read-only property returns the absolute base URL
 *   a `web.Node`.
 * 
 *   `var nodeBaseURI = node.baseURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI`
 */
web.Node.base_uri = (function web$Node$base_uri(this$){
return this$.baseURI();
});
/**
 * Property.
 * 
 *   The Node.baseURIObject property returns the nsIURI representing
 *   node's (typically a document or an element) base URL. It's similar
 *   `web.Node.baseURI`, except it returns an nsIURI instead of a
 * 
 *   `uriObj = node.baseURIObject`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURIObject`
 */
web.Node.base_uri_object = (function web$Node$base_uri_object(this$){
return this$.baseURIObject();
});
/**
 * Property.
 * 
 *   The Node.childNodes read-only property returns a live `web.NodeList`
 *   child `web.nodes` of the given element where the first child
 *   is assigned index 0.
 * 
 *   `var nodeList = elementNodeReference.childNodes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`
 */
web.Node.child_nodes = (function web$Node$child_nodes(this$){
return this$.childNodes();
});
/**
 * Property.
 * 
 *   The Node.childNodes read-only property returns a live `web.NodeList`
 *   child `web.nodes` of the given element where the first child
 *   is assigned index 0.
 * 
 *   `var nodeList = elementNodeReference.childNodes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`
 */
web.Node.set_child_nodes_BANG_ = (function web$Node$set_child_nodes_BANG_(this$,val){
return (this$["childNodes"] = val);
});
/**
 * Property.
 * 
 *   The Node.firstChild read-only property returns the node's first
 *   in the tree, or null if the node has no children.
 * 
 *   `var childNode = node.firstChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild`
 */
web.Node.first_child = (function web$Node$first_child(this$){
return this$.firstChild();
});
/**
 * Property.
 * 
 *   The Node.firstChild read-only property returns the node's first
 *   in the tree, or null if the node has no children.
 * 
 *   `var childNode = node.firstChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild`
 */
web.Node.set_first_child_BANG_ = (function web$Node$set_first_child_BANG_(this$,val){
return (this$["firstChild"] = val);
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `web.Node` interface
 *   a boolean indicating whether the node is connected (directly
 *   indirectly) to the context object, for example the `web.Document`
 *   in the case of the normal DOM, or the `web.ShadowRoot` in the
 *   of a shadow DOM.
 * 
 *   `var isItConnected = nodeObjectInstance.isConnected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`
 */
web.Node.is_connected = (function web$Node$is_connected(this$){
return this$.isConnected();
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `web.Node` interface
 *   a boolean indicating whether the node is connected (directly
 *   indirectly) to the context object, for example the `web.Document`
 *   in the case of the normal DOM, or the `web.ShadowRoot` in the
 *   of a shadow DOM.
 * 
 *   `var isItConnected = nodeObjectInstance.isConnected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`
 */
web.Node.set_is_connected_BANG_ = (function web$Node$set_is_connected_BANG_(this$,val){
return (this$["isConnected"] = val);
});
/**
 * Property.
 * 
 *   The Node.lastChild read-only property returns the last child
 *   the node. If its parent is an element, then the child is generally
 *   element node, a text node, or a comment node. It returns null
 *   there are no child elements.
 * 
 *   `var childNode = node.lastChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild`
 */
web.Node.last_child = (function web$Node$last_child(this$){
return this$.lastChild();
});
/**
 * Property.
 * 
 *   The Node.lastChild read-only property returns the last child
 *   the node. If its parent is an element, then the child is generally
 *   element node, a text node, or a comment node. It returns null
 *   there are no child elements.
 * 
 *   `var childNode = node.lastChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild`
 */
web.Node.set_last_child_BANG_ = (function web$Node$set_last_child_BANG_(this$,val){
return (this$["lastChild"] = val);
});
/**
 * Property.
 * 
 *   The Node.localName read-only property returns the local part
 *   the qualified name of this node.
 * 
 *   `name = element.localName
 * 
 * 
 *   name is the local name as a string (see Notes below for details)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/localName`
 */
web.Node.local_name = (function web$Node$local_name(this$){
return this$.localName();
});
/**
 * Property.
 * 
 *   The Node.localName read-only property returns the local part
 *   the qualified name of this node.
 * 
 *   `name = element.localName
 * 
 * 
 *   name is the local name as a string (see Notes below for details)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/localName`
 */
web.Node.set_local_name_BANG_ = (function web$Node$set_local_name_BANG_(this$,val){
return (this$["localName"] = val);
});
/**
 * Property.
 * 
 *   The Node.namespaceURI read-only property returns the namespace
 *   of the node, or null if the node is not in a namespace. When
 *   node is a document, it returns the XML namespace for the current
 * 
 *   `namespace = node.namespaceURI`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/namespaceURI`
 */
web.Node.namespace_uri = (function web$Node$namespace_uri(this$){
return this$.namespaceURI();
});
/**
 * Property.
 * 
 *   The Node.namespaceURI read-only property returns the namespace
 *   of the node, or null if the node is not in a namespace. When
 *   node is a document, it returns the XML namespace for the current
 * 
 *   `namespace = node.namespaceURI`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/namespaceURI`
 */
web.Node.set_namespace_uri_BANG_ = (function web$Node$set_namespace_uri_BANG_(this$,val){
return (this$["namespaceURI"] = val);
});
/**
 * Property.
 * 
 *   The Node.nextSibling read-only property returns the node immediately
 *   the specified one in their parent's `web.childNodes`, or returns
 *   if the specified node is the last child in the parent element.
 * 
 *   `nextNode = node.nextSibling`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling`
 */
web.Node.next_sibling = (function web$Node$next_sibling(this$){
return this$.nextSibling();
});
/**
 * Property.
 * 
 *   The Node.nextSibling read-only property returns the node immediately
 *   the specified one in their parent's `web.childNodes`, or returns
 *   if the specified node is the last child in the parent element.
 * 
 *   `nextNode = node.nextSibling`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling`
 */
web.Node.set_next_sibling_BANG_ = (function web$Node$set_next_sibling_BANG_(this$,val){
return (this$["nextSibling"] = val);
});
/**
 * Property.
 * 
 *   The nodeName read-only property returns the name of the current
 *   as a string.
 * 
 *   `var str = node.nodeName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName`
 */
web.Node.node_name = (function web$Node$node_name(this$){
return this$.nodeName();
});
/**
 * Property.
 * 
 *   The Node.nodePrincipal read-only property returns the nsIPrincipal
 *   representing current security context of the node.
 * 
 *   `principalObj = Node.nodePrincipal`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodePrincipal`
 */
web.Node.node_principal = (function web$Node$node_principal(this$){
return this$.nodePrincipal();
});
/**
 * Property.
 * 
 *   The Node.nodePrincipal read-only property returns the nsIPrincipal
 *   representing current security context of the node.
 * 
 *   `principalObj = Node.nodePrincipal`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodePrincipal`
 */
web.Node.set_node_principal_BANG_ = (function web$Node$set_node_principal_BANG_(this$,val){
return (this$["nodePrincipal"] = val);
});
/**
 * Property.
 * 
 *   The read-only Node.nodeType property is an integer that identifies
 *   the node is. It distinguishes different kind of nodes from each
 *   such as `web.elements`, `web.text` and `web.comments`.
 * 
 *   `var type = node.nodeType;
 * 
 *   Returns an integer which specifies the type of the node. Possible values are listed in Node type constants.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType`
 */
web.Node.node_type = (function web$Node$node_type(this$){
return this$.nodeType();
});
/**
 * Property.
 * 
 *   The read-only Node.nodeType property is an integer that identifies
 *   the node is. It distinguishes different kind of nodes from each
 *   such as `web.elements`, `web.text` and `web.comments`.
 * 
 *   `var type = node.nodeType;
 * 
 *   Returns an integer which specifies the type of the node. Possible values are listed in Node type constants.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType`
 */
web.Node.set_node_type_BANG_ = (function web$Node$set_node_type_BANG_(this$,val){
return (this$["nodeType"] = val);
});
/**
 * Property.
 * 
 *   The nodeValue property of the `web.Node` interface returns or
 *   the value of the current node.
 * 
 *   `str = node.nodeValue;
 *   node.nodeValue = str;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`
 */
web.Node.node_value = (function web$Node$node_value(this$){
return this$.nodeValue();
});
/**
 * Property.
 * 
 *   The nodeValue property of the `web.Node` interface returns or
 *   the value of the current node.
 * 
 *   `str = node.nodeValue;
 *   node.nodeValue = str;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`
 */
web.Node.set_node_value_BANG_ = (function web$Node$set_node_value_BANG_(this$,val){
return (this$["nodeValue"] = val);
});
/**
 * Property.
 * 
 *   See `html.HTMLElement.outerText`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/outerText`
 */
web.Node.outer_text = (function web$Node$outer_text(this$){
return this$.outerText();
});
/**
 * Property.
 * 
 *   See `html.HTMLElement.outerText`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/outerText`
 */
web.Node.set_outer_text_BANG_ = (function web$Node$set_outer_text_BANG_(this$,val){
return (this$["outerText"] = val);
});
/**
 * Property.
 * 
 *   The ownerDocument read-only property of the `web.Node` interface
 *   the top-level document object of the node.
 * 
 *   `var document = element.ownerDocument;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument`
 */
web.Node.owner_document = (function web$Node$owner_document(this$){
return this$.ownerDocument();
});
/**
 * Property.
 * 
 *   The ownerDocument read-only property of the `web.Node` interface
 *   the top-level document object of the node.
 * 
 *   `var document = element.ownerDocument;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument`
 */
web.Node.set_owner_document_BANG_ = (function web$Node$set_owner_document_BANG_(this$,val){
return (this$["ownerDocument"] = val);
});
/**
 * Property.
 * 
 *   The Node.parentElement read-only property returns the DOM node's
 *   `web.Element`, or null if the node either has no parent, or its
 *   isn't a DOM `web.Element`.
 * 
 *   `parentElement = node.parentElement
 * 
 *   parentElement is the parent element of the current node. This is always a DOM `web.Element` object, or null.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement`
 */
web.Node.parent_element = (function web$Node$parent_element(this$){
return this$.parentElement();
});
/**
 * Property.
 * 
 *   The Node.parentElement read-only property returns the DOM node's
 *   `web.Element`, or null if the node either has no parent, or its
 *   isn't a DOM `web.Element`.
 * 
 *   `parentElement = node.parentElement
 * 
 *   parentElement is the parent element of the current node. This is always a DOM `web.Element` object, or null.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement`
 */
web.Node.set_parent_element_BANG_ = (function web$Node$set_parent_element_BANG_(this$,val){
return (this$["parentElement"] = val);
});
/**
 * Property.
 * 
 *   The Node.parentNode read-only property returns the parent of
 *   specified node in the DOM tree.
 * 
 *   `parentNode = node.parentNode
 * 
 *   parentNode is the parent of the current node. The parent of an element is an Element node, a Document node, or a DocumentFragment node.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode`
 */
web.Node.parent_node = (function web$Node$parent_node(this$){
return this$.parentNode();
});
/**
 * Property.
 * 
 *   The Node.parentNode read-only property returns the parent of
 *   specified node in the DOM tree.
 * 
 *   `parentNode = node.parentNode
 * 
 *   parentNode is the parent of the current node. The parent of an element is an Element node, a Document node, or a DocumentFragment node.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode`
 */
web.Node.set_parent_node_BANG_ = (function web$Node$set_parent_node_BANG_(this$,val){
return (this$["parentNode"] = val);
});
/**
 * Property.
 * 
 *   The Node.prefix read-only property returns the namespace prefix
 *   the specified node, or null if no prefix is specified.
 * 
 *   `string = node.prefix`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/prefix`
 */
web.Node.prefix = (function web$Node$prefix(this$){
return this$.prefix();
});
/**
 * Property.
 * 
 *   The Node.prefix read-only property returns the namespace prefix
 *   the specified node, or null if no prefix is specified.
 * 
 *   `string = node.prefix`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/prefix`
 */
web.Node.set_prefix_BANG_ = (function web$Node$set_prefix_BANG_(this$,val){
return (this$["prefix"] = val);
});
/**
 * Property.
 * 
 *   The Node.previousSibling read-only property returns the node
 *   preceding the specified one in its parent's `web.childNodes`
 *   or null if the specified node is the first in that list.
 * 
 *   `previousNode = node.previousSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling`
 */
web.Node.previous_sibling = (function web$Node$previous_sibling(this$){
return this$.previousSibling();
});
/**
 * Property.
 * 
 *   The Node.previousSibling read-only property returns the node
 *   preceding the specified one in its parent's `web.childNodes`
 *   or null if the specified node is the first in that list.
 * 
 *   `previousNode = node.previousSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling`
 */
web.Node.set_previous_sibling_BANG_ = (function web$Node$set_previous_sibling_BANG_(this$,val){
return (this$["previousSibling"] = val);
});
/**
 * Property.
 * 
 *   The Node.rootNode read-only property returns a `web.Node` object
 *   the topmost node in the tree, or the current node if it's the
 *   node in the tree. This is found by walking backward along `web.Node.parentNode`
 *   the top is reached.
 * 
 *   `rootNode = node.rootNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/rootNode`
 */
web.Node.root_node = (function web$Node$root_node(this$){
return this$.rootNode();
});
/**
 * Property.
 * 
 *   The Node.rootNode read-only property returns a `web.Node` object
 *   the topmost node in the tree, or the current node if it's the
 *   node in the tree. This is found by walking backward along `web.Node.parentNode`
 *   the top is reached.
 * 
 *   `rootNode = node.rootNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/rootNode`
 */
web.Node.set_root_node_BANG_ = (function web$Node$set_root_node_BANG_(this$,val){
return (this$["rootNode"] = val);
});
/**
 * Property.
 * 
 *   The textContent property of the `web.Node` interface represents
 *   text content of the node and its descendants.
 * 
 *   `var text = Node.textContent;
 *   Node.textContent = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`
 */
web.Node.text_content = (function web$Node$text_content(this$){
return this$.textContent();
});
/**
 * Property.
 * 
 *   The textContent property of the `web.Node` interface represents
 *   text content of the node and its descendants.
 * 
 *   `var text = Node.textContent;
 *   Node.textContent = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`
 */
web.Node.set_text_content_BANG_ = (function web$Node$set_text_content_BANG_(this$,val){
return (this$["textContent"] = val);
});

//# sourceMappingURL=Node.js.map?rel=1565798815323
