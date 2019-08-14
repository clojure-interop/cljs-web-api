// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ParentNode');
goog.require('cljs.core');
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
web.ParentNode.append = (function web$ParentNode$append(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43304 = arguments.length;
var i__42557__auto___43305 = (0);
while(true){
if((i__42557__auto___43305 < len__42556__auto___43304)){
args__42563__auto__.push((arguments[i__42557__auto___43305]));

var G__43306 = (i__42557__auto___43305 + (1));
i__42557__auto___43305 = G__43306;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ParentNode.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ParentNode.append.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.append,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ParentNode.append.cljs$lang$maxFixedArity = (1);

web.ParentNode.append.cljs$lang$applyTo = (function (seq43302){
var G__43303 = cljs.core.first.call(null,seq43302);
var seq43302__$1 = cljs.core.next.call(null,seq43302);
return web.ParentNode.append.cljs$core$IFn$_invoke$arity$variadic(G__43303,seq43302__$1);
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
web.ParentNode.prepend = (function web$ParentNode$prepend(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43309 = arguments.length;
var i__42557__auto___43310 = (0);
while(true){
if((i__42557__auto___43310 < len__42556__auto___43309)){
args__42563__auto__.push((arguments[i__42557__auto___43310]));

var G__43311 = (i__42557__auto___43310 + (1));
i__42557__auto___43310 = G__43311;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ParentNode.prepend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ParentNode.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.prepend,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ParentNode.prepend.cljs$lang$maxFixedArity = (1);

web.ParentNode.prepend.cljs$lang$applyTo = (function (seq43307){
var G__43308 = cljs.core.first.call(null,seq43307);
var seq43307__$1 = cljs.core.next.call(null,seq43307);
return web.ParentNode.prepend.cljs$core$IFn$_invoke$arity$variadic(G__43308,seq43307__$1);
});

/**
 * Method.
 * 
 *   The `web.ParentNode` mixin defines the querySelector() method
 *   returning an `web.Element` representing the first element matching
 *   specified group of selectors which are descendants of the object
 *   which the method was called.
 * 
 *   `element = parentNode.querySelector(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelector`
 */
web.ParentNode.query_selector = (function web$ParentNode$query_selector(this$,selectors){
return this$.querySelector(selectors);
});
/**
 * Method.
 * 
 *   The `web.ParentNode` mixin defines the querySelectorAll() method
 *   returning a `web.NodeList` representing a list of elements matching
 *   specified group of selectors which are descendants of the object
 *   which the method was called.
 * 
 *   `elementList = parentNode.querySelectorAll(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll`
 */
web.ParentNode.query_selector_all = (function web$ParentNode$query_selector_all(this$,selectors){
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
web.ParentNode.child_element_count = (function web$ParentNode$child_element_count(this$){
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
web.ParentNode.set_child_element_count_BANG_ = (function web$ParentNode$set_child_element_count_BANG_(this$,val){
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
web.ParentNode.children = (function web$ParentNode$children(this$){
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
web.ParentNode.set_children_BANG_ = (function web$ParentNode$set_children_BANG_(this$,val){
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
web.ParentNode.first_element_child = (function web$ParentNode$first_element_child(this$){
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
web.ParentNode.set_first_element_child_BANG_ = (function web$ParentNode$set_first_element_child_BANG_(this$,val){
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
web.ParentNode.last_element_child = (function web$ParentNode$last_element_child(this$){
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
web.ParentNode.set_last_element_child_BANG_ = (function web$ParentNode$set_last_element_child_BANG_(this$,val){
return (this$["lastElementChild"] = val);
});

//# sourceMappingURL=ParentNode.js.map?rel=1565798805519
