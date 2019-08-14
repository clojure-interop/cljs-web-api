// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CharacterData');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The ChildNode.after() method inserts a set of `web.Node` or `dom.DOMString`
 *   in the children list of this ChildNode's parent, just after this
 *   `dom.DOMString` objects are inserted as equivalent `web.Text`
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.after((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after`
 */
web.CharacterData.after = (function web$CharacterData$after(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44008 = arguments.length;
var i__42557__auto___44009 = (0);
while(true){
if((i__42557__auto___44009 < len__42556__auto___44008)){
args__42563__auto__.push((arguments[i__42557__auto___44009]));

var G__44010 = (i__42557__auto___44009 + (1));
i__42557__auto___44009 = G__44010;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CharacterData.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CharacterData.after.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.after,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CharacterData.after.cljs$lang$maxFixedArity = (1);

web.CharacterData.after.cljs$lang$applyTo = (function (seq44006){
var G__44007 = cljs.core.first.call(null,seq44006);
var seq44006__$1 = cljs.core.next.call(null,seq44006);
return web.CharacterData.after.cljs$core$IFn$_invoke$arity$variadic(G__44007,seq44006__$1);
});

/**
 * Method.
 * 
 *   The ChildNode.before() method inserts a set of `web.Node` or
 *   objects in the children list of this ChildNode's parent, just
 *   this ChildNode. `dom.DOMString` objects are inserted as equivalent
 *   nodes.
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.before((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before`
 */
web.CharacterData.before = (function web$CharacterData$before(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44013 = arguments.length;
var i__42557__auto___44014 = (0);
while(true){
if((i__42557__auto___44014 < len__42556__auto___44013)){
args__42563__auto__.push((arguments[i__42557__auto___44014]));

var G__44015 = (i__42557__auto___44014 + (1));
i__42557__auto___44014 = G__44015;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CharacterData.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CharacterData.before.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.before,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CharacterData.before.cljs$lang$maxFixedArity = (1);

web.CharacterData.before.cljs$lang$applyTo = (function (seq44011){
var G__44012 = cljs.core.first.call(null,seq44011);
var seq44011__$1 = cljs.core.next.call(null,seq44011);
return web.CharacterData.before.cljs$core$IFn$_invoke$arity$variadic(G__44012,seq44011__$1);
});

/**
 * Method.
 * 
 *   The ChildNode.remove() method removes the object from the tree
 *   belongs to.
 * 
 *   `node.remove();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`
 */
web.CharacterData.remove = (function web$CharacterData$remove(this$){
return this$.remove();
});
/**
 * Method.
 * 
 *   The ChildNode.replaceWith() method replaces this ChildNode in
 *   children list of its parent with a set of `web.Node` or `dom.DOMString`
 *   `dom.DOMString` objects are inserted as equivalent `web.Text`
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.replaceWith((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`
 */
web.CharacterData.replace_with = (function web$CharacterData$replace_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44018 = arguments.length;
var i__42557__auto___44019 = (0);
while(true){
if((i__42557__auto___44019 < len__42556__auto___44018)){
args__42563__auto__.push((arguments[i__42557__auto___44019]));

var G__44020 = (i__42557__auto___44019 + (1));
i__42557__auto___44019 = G__44020;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CharacterData.replace_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CharacterData.replace_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.replaceWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CharacterData.replace_with.cljs$lang$maxFixedArity = (1);

web.CharacterData.replace_with.cljs$lang$applyTo = (function (seq44016){
var G__44017 = cljs.core.first.call(null,seq44016);
var seq44016__$1 = cljs.core.next.call(null,seq44016);
return web.CharacterData.replace_with.cljs$core$IFn$_invoke$arity$variadic(G__44017,seq44016__$1);
});

/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.nextElementSibling read-only property
 *   the element immediately following the specified one in its parent's
 *   list, or null if the specified element is the last one in the
 * 
 *   `var nextNode = elementNodeReference.nextElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`
 */
web.CharacterData.next_element_sibling = (function web$CharacterData$next_element_sibling(this$){
return this$.nextElementSibling();
});
/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.nextElementSibling read-only property
 *   the element immediately following the specified one in its parent's
 *   list, or null if the specified element is the last one in the
 * 
 *   `var nextNode = elementNodeReference.nextElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`
 */
web.CharacterData.set_next_element_sibling_BANG_ = (function web$CharacterData$set_next_element_sibling_BANG_(this$,val){
return (this$["nextElementSibling"] = val);
});
/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.previousElementSibling read-only
 *   returns the `web.Element` immediately prior to the specified
 *   in its parent's children list, or null if the specified element
 *   the first one in the list.
 * 
 *   `prevNode = elementNodeReference.previousElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling`
 */
web.CharacterData.previous_element_sibling = (function web$CharacterData$previous_element_sibling(this$){
return this$.previousElementSibling();
});

//# sourceMappingURL=CharacterData.js.map?rel=1565798810921
