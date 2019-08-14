// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLTableRowElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLTableRowElement.insertCell() method inserts a new cell
 *   into a table row (`web.<tr>`) and returns a reference to the
 * 
 *   `var newCell = HTMLTableRowElement.insertCell(index);
 * 
 *   `html.HTMLTableRowElement` is a reference to an HTML `web.<tr>` element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell`
 */
html.HTMLTableRowElement.insert_cell = (function html$HTMLTableRowElement$insert_cell(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44159 = arguments.length;
var i__42557__auto___44160 = (0);
while(true){
if((i__42557__auto___44160 < len__42556__auto___44159)){
args__42563__auto__.push((arguments[i__42557__auto___44160]));

var G__44161 = (i__42557__auto___44160 + (1));
i__42557__auto___44160 = G__44161;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLTableRowElement.insert_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLTableRowElement.insert_cell.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.insertCell,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLTableRowElement.insert_cell.cljs$lang$maxFixedArity = (1);

html.HTMLTableRowElement.insert_cell.cljs$lang$applyTo = (function (seq44157){
var G__44158 = cljs.core.first.call(null,seq44157);
var seq44157__$1 = cljs.core.next.call(null,seq44157);
return html.HTMLTableRowElement.insert_cell.cljs$core$IFn$_invoke$arity$variadic(G__44158,seq44157__$1);
});

/**
 * Property.
 * 
 *   The HTMLTableRowElement.rowIndex read-only property represents
 *   position of a row in relation to the whole `web.<table>`.
 * 
 *   `var index = HTMLTableRowElement.rowIndex`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`
 */
html.HTMLTableRowElement.row_index = (function html$HTMLTableRowElement$row_index(this$){
return this$.rowIndex();
});
/**
 * Property.
 * 
 *   The HTMLTableRowElement.rowIndex read-only property represents
 *   position of a row in relation to the whole `web.<table>`.
 * 
 *   `var index = HTMLTableRowElement.rowIndex`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`
 */
html.HTMLTableRowElement.set_row_index_BANG_ = (function html$HTMLTableRowElement$set_row_index_BANG_(this$,val){
return (this$["rowIndex"] = val);
});

//# sourceMappingURL=HTMLTableRowElement.js.map?rel=1565798811992
