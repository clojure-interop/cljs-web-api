// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DataTransferItemList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The DataTransferItemList.add() method creates a new `web.DataTransferItem`
 *   the specified data and adds it to the drag data list. The item
 *   be a `file.File` or a `web.string` of a given type. If the item
 *   successfully added to the list, the newly-created `web.DataTransferItem`
 *   is returned.
 * 
 *   `DataTransferItem = DataTransferItemList.add(data, type);
 *   DataTransferItem = DataTransferItemList.add(file);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/add`
 */
web.DataTransferItemList.add = (function web$DataTransferItemList$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44027 = arguments.length;
var i__42557__auto___44028 = (0);
while(true){
if((i__42557__auto___44028 < len__42556__auto___44027)){
args__42563__auto__.push((arguments[i__42557__auto___44028]));

var G__44029 = (i__42557__auto___44028 + (1));
i__42557__auto___44028 = G__44029;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DataTransferItemList.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DataTransferItemList.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DataTransferItemList.add.cljs$lang$maxFixedArity = (1);

web.DataTransferItemList.add.cljs$lang$applyTo = (function (seq44025){
var G__44026 = cljs.core.first.call(null,seq44025);
var seq44025__$1 = cljs.core.next.call(null,seq44025);
return web.DataTransferItemList.add.cljs$core$IFn$_invoke$arity$variadic(G__44026,seq44025__$1);
});

/**
 * Method.
 * 
 *   The `web.DataTransferItemList` method clear() removes all `web.DataTransferItem`
 *   from the drag data items list, leaving the list empty.
 * 
 *   `DataTransferItemList.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/clear`
 */
web.DataTransferItemList.clear = (function web$DataTransferItemList$clear(this$){
return this$.clear();
});
/**
 * Method.
 * 
 *   The DataTransferItem() getter method implements support for accessing
 *   in the `web.DataTransferItemList` using array-style syntax (that
 *   DataTransferItem[index]).
 * 
 *   `dataItem = DataTransferItem[index];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/DataTransferItem`
 */
web.DataTransferItemList.data_transfer_item = (function web$DataTransferItemList$data_transfer_item(this$){
return this$.DataTransferItem();
});
/**
 * Method.
 * 
 *   `web.undefined`.
 * 
 *   `DataTransferItemList.remove(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/remove`
 */
web.DataTransferItemList.remove = (function web$DataTransferItemList$remove(this$,index){
return this$.remove(index);
});
/**
 * Property.
 * 
 *   The read-only length property of the `web.DataTransferItemList`
 *   returns the number of items currently in the drag item list.
 * 
 *   `length = DataTransferItemList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/length`
 */
web.DataTransferItemList.length = (function web$DataTransferItemList$length(this$){
return this$.length();
});

//# sourceMappingURL=DataTransferItemList.js.map?rel=1565798810974
