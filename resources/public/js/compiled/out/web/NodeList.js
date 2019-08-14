// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NodeList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The NodeList.entries() method returns an `web.iterator` allowing
 *   go through all key/value pairs contained in this object. The
 *   are `web.Node` objects.
 * 
 *   `list.entries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/entries`
 */
web.NodeList.entries = (function web$NodeList$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The forEach() method of the `web.NodeList` interface calls the
 *   given in parameter once for each value pair in the list, in insertion
 * 
 *   `NodeList.forEach(callback[, thisArg]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach`
 */
web.NodeList.for_each = (function web$NodeList$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44101 = arguments.length;
var i__42557__auto___44102 = (0);
while(true){
if((i__42557__auto___44102 < len__42556__auto___44101)){
args__42563__auto__.push((arguments[i__42557__auto___44102]));

var G__44103 = (i__42557__auto___44102 + (1));
i__42557__auto___44102 = G__44103;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.NodeList.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.NodeList.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.NodeList.for_each.cljs$lang$maxFixedArity = (1);

web.NodeList.for_each.cljs$lang$applyTo = (function (seq44099){
var G__44100 = cljs.core.first.call(null,seq44099);
var seq44099__$1 = cljs.core.next.call(null,seq44099);
return web.NodeList.for_each.cljs$core$IFn$_invoke$arity$variadic(G__44100,seq44099__$1);
});

/**
 * Method.
 * 
 *   Returns a node from a `web.NodeList` by index. This method doesn't
 *   exceptions as long as you provide arguments. A value of null
 *   returned if the index is out of range, and a TypeError is thrown
 *   no argument is provided.
 * 
 *   `nodeItem = nodeList.item(index)
 * 
 * 
 *   nodeList is a NodeList. This is usually obtained from another DOM property or method, such as childNodes.
 *   index is the index of the node to be fetched. The index is zero-based.
 *   nodeItem is the indexth node in the nodeList returned by the item method.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/item`
 */
web.NodeList.item = (function web$NodeList$item(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44106 = arguments.length;
var i__42557__auto___44107 = (0);
while(true){
if((i__42557__auto___44107 < len__42556__auto___44106)){
args__42563__auto__.push((arguments[i__42557__auto___44107]));

var G__44108 = (i__42557__auto___44107 + (1));
i__42557__auto___44107 = G__44108;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.NodeList.item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.NodeList.item.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.NodeList.item.cljs$lang$maxFixedArity = (1);

web.NodeList.item.cljs$lang$applyTo = (function (seq44104){
var G__44105 = cljs.core.first.call(null,seq44104);
var seq44104__$1 = cljs.core.next.call(null,seq44104);
return web.NodeList.item.cljs$core$IFn$_invoke$arity$variadic(G__44105,seq44104__$1);
});

/**
 * Method.
 * 
 *   The NodeList.keys() method returns an `web.iterator` allowing
 *   go through all keys contained in this object. The keys are unsigned
 * 
 *   `nodeList.keys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/keys`
 */
web.NodeList.keys = (function web$NodeList$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The NodeList.values() method returns an `web.iterator` allowing
 *   go through all values contained in this object. The values are
 *   objects.
 * 
 *   `nodeList.values();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/values`
 */
web.NodeList.values = (function web$NodeList$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The NodeList.length property returns the number of items in a
 * 
 *   `numItems = nodeList.length
 * 
 * 
 *   numItems is an integer value representing the number of items in a NodeList.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length`
 */
web.NodeList.length = (function web$NodeList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The NodeList.length property returns the number of items in a
 * 
 *   `numItems = nodeList.length
 * 
 * 
 *   numItems is an integer value representing the number of items in a NodeList.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length`
 */
web.NodeList.set_length_BANG_ = (function web$NodeList$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=NodeList.js.map?rel=1565798811596
