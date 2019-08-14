// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ChildNode');
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
web.ChildNode.after = (function web$ChildNode$after(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48062 = arguments.length;
var i__42557__auto___48063 = (0);
while(true){
if((i__42557__auto___48063 < len__42556__auto___48062)){
args__42563__auto__.push((arguments[i__42557__auto___48063]));

var G__48064 = (i__42557__auto___48063 + (1));
i__42557__auto___48063 = G__48064;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ChildNode.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ChildNode.after.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.after,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ChildNode.after.cljs$lang$maxFixedArity = (1);

web.ChildNode.after.cljs$lang$applyTo = (function (seq48060){
var G__48061 = cljs.core.first.call(null,seq48060);
var seq48060__$1 = cljs.core.next.call(null,seq48060);
return web.ChildNode.after.cljs$core$IFn$_invoke$arity$variadic(G__48061,seq48060__$1);
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
web.ChildNode.before = (function web$ChildNode$before(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48067 = arguments.length;
var i__42557__auto___48068 = (0);
while(true){
if((i__42557__auto___48068 < len__42556__auto___48067)){
args__42563__auto__.push((arguments[i__42557__auto___48068]));

var G__48069 = (i__42557__auto___48068 + (1));
i__42557__auto___48068 = G__48069;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ChildNode.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ChildNode.before.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.before,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ChildNode.before.cljs$lang$maxFixedArity = (1);

web.ChildNode.before.cljs$lang$applyTo = (function (seq48065){
var G__48066 = cljs.core.first.call(null,seq48065);
var seq48065__$1 = cljs.core.next.call(null,seq48065);
return web.ChildNode.before.cljs$core$IFn$_invoke$arity$variadic(G__48066,seq48065__$1);
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
web.ChildNode.remove = (function web$ChildNode$remove(this$){
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
web.ChildNode.replace_with = (function web$ChildNode$replace_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48072 = arguments.length;
var i__42557__auto___48073 = (0);
while(true){
if((i__42557__auto___48073 < len__42556__auto___48072)){
args__42563__auto__.push((arguments[i__42557__auto___48073]));

var G__48074 = (i__42557__auto___48073 + (1));
i__42557__auto___48073 = G__48074;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ChildNode.replace_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ChildNode.replace_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.replaceWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ChildNode.replace_with.cljs$lang$maxFixedArity = (1);

web.ChildNode.replace_with.cljs$lang$applyTo = (function (seq48070){
var G__48071 = cljs.core.first.call(null,seq48070);
var seq48070__$1 = cljs.core.next.call(null,seq48070);
return web.ChildNode.replace_with.cljs$core$IFn$_invoke$arity$variadic(G__48071,seq48070__$1);
});


//# sourceMappingURL=ChildNode.js.map?rel=1565798825435
