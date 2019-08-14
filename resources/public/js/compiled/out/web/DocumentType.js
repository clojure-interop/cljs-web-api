// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DocumentType');
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
web.DocumentType.after = (function web$DocumentType$after(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53006 = arguments.length;
var i__42557__auto___53007 = (0);
while(true){
if((i__42557__auto___53007 < len__42556__auto___53006)){
args__42563__auto__.push((arguments[i__42557__auto___53007]));

var G__53008 = (i__42557__auto___53007 + (1));
i__42557__auto___53007 = G__53008;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentType.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentType.after.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.after,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentType.after.cljs$lang$maxFixedArity = (1);

web.DocumentType.after.cljs$lang$applyTo = (function (seq53004){
var G__53005 = cljs.core.first.call(null,seq53004);
var seq53004__$1 = cljs.core.next.call(null,seq53004);
return web.DocumentType.after.cljs$core$IFn$_invoke$arity$variadic(G__53005,seq53004__$1);
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
web.DocumentType.before = (function web$DocumentType$before(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53011 = arguments.length;
var i__42557__auto___53012 = (0);
while(true){
if((i__42557__auto___53012 < len__42556__auto___53011)){
args__42563__auto__.push((arguments[i__42557__auto___53012]));

var G__53013 = (i__42557__auto___53012 + (1));
i__42557__auto___53012 = G__53013;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentType.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentType.before.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.before,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentType.before.cljs$lang$maxFixedArity = (1);

web.DocumentType.before.cljs$lang$applyTo = (function (seq53009){
var G__53010 = cljs.core.first.call(null,seq53009);
var seq53009__$1 = cljs.core.next.call(null,seq53009);
return web.DocumentType.before.cljs$core$IFn$_invoke$arity$variadic(G__53010,seq53009__$1);
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
web.DocumentType.remove = (function web$DocumentType$remove(this$){
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
web.DocumentType.replace_with = (function web$DocumentType$replace_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53016 = arguments.length;
var i__42557__auto___53017 = (0);
while(true){
if((i__42557__auto___53017 < len__42556__auto___53016)){
args__42563__auto__.push((arguments[i__42557__auto___53017]));

var G__53018 = (i__42557__auto___53017 + (1));
i__42557__auto___53017 = G__53018;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentType.replace_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentType.replace_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.replaceWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentType.replace_with.cljs$lang$maxFixedArity = (1);

web.DocumentType.replace_with.cljs$lang$applyTo = (function (seq53014){
var G__53015 = cljs.core.first.call(null,seq53014);
var seq53014__$1 = cljs.core.next.call(null,seq53014);
return web.DocumentType.replace_with.cljs$core$IFn$_invoke$arity$variadic(G__53015,seq53014__$1);
});


//# sourceMappingURL=DocumentType.js.map?rel=1565798861552
