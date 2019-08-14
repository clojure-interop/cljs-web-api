// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DocumentFragment');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DocumentFragment() constructor returns a new, empty `web.DocumentFragment` object .
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/DocumentFragment`
 */
web.DocumentFragment.constructor$ = DocumentFragment;
/**
 * Method.
 * 
 *   The ParentNode.append() method inserts a set of `web.Node` objects
 *   `dom.DOMString` objects after the last child of the ParentNode.
 *   objects are inserted as equivalent `web.Text` nodes.
 * 
 *   `[Throws, Unscopable]
 *   void ParentNode.append((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append`
 */
web.DocumentFragment.append = (function web$DocumentFragment$append(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50137 = arguments.length;
var i__42557__auto___50138 = (0);
while(true){
if((i__42557__auto___50138 < len__42556__auto___50137)){
args__42563__auto__.push((arguments[i__42557__auto___50138]));

var G__50139 = (i__42557__auto___50138 + (1));
i__42557__auto___50138 = G__50139;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentFragment.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentFragment.append.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.append,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentFragment.append.cljs$lang$maxFixedArity = (1);

web.DocumentFragment.append.cljs$lang$applyTo = (function (seq50135){
var G__50136 = cljs.core.first.call(null,seq50135);
var seq50135__$1 = cljs.core.next.call(null,seq50135);
return web.DocumentFragment.append.cljs$core$IFn$_invoke$arity$variadic(G__50136,seq50135__$1);
});

/**
 * Method.
 * 
 *   The ParentNode.prepend() method inserts a set of `web.Node` objects
 *   `dom.DOMString` objects before the first child of the `web.ParentNode`.
 *   objects are inserted as equivalent `web.Text` nodes.
 * 
 *   `ParentNode.prepend(...nodesToPrepend);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`
 */
web.DocumentFragment.prepend = (function web$DocumentFragment$prepend(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50142 = arguments.length;
var i__42557__auto___50143 = (0);
while(true){
if((i__42557__auto___50143 < len__42556__auto___50142)){
args__42563__auto__.push((arguments[i__42557__auto___50143]));

var G__50144 = (i__42557__auto___50143 + (1));
i__42557__auto___50143 = G__50144;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentFragment.prepend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentFragment.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.prepend,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentFragment.prepend.cljs$lang$maxFixedArity = (1);

web.DocumentFragment.prepend.cljs$lang$applyTo = (function (seq50140){
var G__50141 = cljs.core.first.call(null,seq50140);
var seq50140__$1 = cljs.core.next.call(null,seq50140);
return web.DocumentFragment.prepend.cljs$core$IFn$_invoke$arity$variadic(G__50141,seq50140__$1);
});

/**
 * Method.
 * 
 *   The DocumentFragment.querySelector() method returns the first
 *   or null if no matches are found, within the `web.DocumentFragment`
 *   depth-first pre-order traversal of the document's nodes) that
 *   the specified group of selectors.
 * 
 *   `element = documentfragment.querySelector(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector`
 */
web.DocumentFragment.query_selector = (function web$DocumentFragment$query_selector(this$,selectors){
return this$.querySelector(selectors);
});
/**
 * Method.
 * 
 *   The DocumentFragment.querySelectorAll() method returns a `web.NodeList`
 *   elements within the `web.DocumentFragment` (using depth-first
 *   traversal of the document's nodes) that matches the specified
 *   of selectors.
 * 
 *   `elementList = documentframgment.querySelectorAll(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll`
 */
web.DocumentFragment.query_selector_all = (function web$DocumentFragment$query_selector_all(this$,selectors){
return this$.querySelectorAll(selectors);
});
/**
 * Property.
 * 
 *   The ParentNode.childElementCount read-only property returns an
 *   long representing the number of child elements of the given element.
 * 
 *   `var count = node.childElementCount;
 * 
 * 
 *   count
 *   The return value, which is an unsigned long (simply an integer) type.
 *   node
 *   An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`
 */
web.DocumentFragment.child_element_count = (function web$DocumentFragment$child_element_count(this$){
return this$.childElementCount();
});
/**
 * Property.
 * 
 *   The ParentNode.childElementCount read-only property returns an
 *   long representing the number of child elements of the given element.
 * 
 *   `var count = node.childElementCount;
 * 
 * 
 *   count
 *   The return value, which is an unsigned long (simply an integer) type.
 *   node
 *   An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`
 */
web.DocumentFragment.set_child_element_count_BANG_ = (function web$DocumentFragment$set_child_element_count_BANG_(this$,val){
return (this$["childElementCount"] = val);
});
/**
 * Property.
 * 
 *   The `web.ParentNode` property children is a read-only property
 *   returns a live `html.HTMLCollection` which contains all of the
 *   `web.elements` of the node upon which it was called.
 * 
 *   `var children = node.children;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`
 */
web.DocumentFragment.children = (function web$DocumentFragment$children(this$){
return this$.children();
});
/**
 * Property.
 * 
 *   The `web.ParentNode` property children is a read-only property
 *   returns a live `html.HTMLCollection` which contains all of the
 *   `web.elements` of the node upon which it was called.
 * 
 *   `var children = node.children;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`
 */
web.DocumentFragment.set_children_BANG_ = (function web$DocumentFragment$set_children_BANG_(this$,val){
return (this$["children"] = val);
});
/**
 * Property.
 * 
 *   The ParentNode.firstElementChild read-only property returns the
 *   first child `web.Element`, or null if there are no child elements.
 * 
 *   `var element = node.firstElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`
 */
web.DocumentFragment.first_element_child = (function web$DocumentFragment$first_element_child(this$){
return this$.firstElementChild();
});
/**
 * Property.
 * 
 *   The ParentNode.firstElementChild read-only property returns the
 *   first child `web.Element`, or null if there are no child elements.
 * 
 *   `var element = node.firstElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`
 */
web.DocumentFragment.set_first_element_child_BANG_ = (function web$DocumentFragment$set_first_element_child_BANG_(this$,val){
return (this$["firstElementChild"] = val);
});
/**
 * Property.
 * 
 *   The ParentNode.lastElementChild read-only property returns the
 *   last child `web.Element` or null if there are no child elements.
 * 
 *   `var element = node.lastElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`
 */
web.DocumentFragment.last_element_child = (function web$DocumentFragment$last_element_child(this$){
return this$.lastElementChild();
});
/**
 * Property.
 * 
 *   The ParentNode.lastElementChild read-only property returns the
 *   last child `web.Element` or null if there are no child elements.
 * 
 *   `var element = node.lastElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`
 */
web.DocumentFragment.set_last_element_child_BANG_ = (function web$DocumentFragment$set_last_element_child_BANG_(this$,val){
return (this$["lastElementChild"] = val);
});

//# sourceMappingURL=DocumentFragment.js.map?rel=1565798836225
