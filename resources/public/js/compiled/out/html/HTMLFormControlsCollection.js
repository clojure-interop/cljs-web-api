// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLFormControlsCollection');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLFormControlsCollection.namedItem() method returns the
 *   or the `web.Element` in the collection whose name or id match
 *   specified name, or null if no node matches.
 * 
 *   `var item = collection.namedItem(str);
 *   var item = collection[str];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection/namedItem`
 */
html.HTMLFormControlsCollection.named_item = (function html$HTMLFormControlsCollection$named_item(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50601 = arguments.length;
var i__42557__auto___50602 = (0);
while(true){
if((i__42557__auto___50602 < len__42556__auto___50601)){
args__42563__auto__.push((arguments[i__42557__auto___50602]));

var G__50603 = (i__42557__auto___50602 + (1));
i__42557__auto___50602 = G__50603;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLFormControlsCollection.named_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLFormControlsCollection.named_item.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.namedItem,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLFormControlsCollection.named_item.cljs$lang$maxFixedArity = (1);

html.HTMLFormControlsCollection.named_item.cljs$lang$applyTo = (function (seq50599){
var G__50600 = cljs.core.first.call(null,seq50599);
var seq50599__$1 = cljs.core.next.call(null,seq50599);
return html.HTMLFormControlsCollection.named_item.cljs$core$IFn$_invoke$arity$variadic(G__50600,seq50599__$1);
});


//# sourceMappingURL=HTMLFormControlsCollection.js.map?rel=1565798841093
