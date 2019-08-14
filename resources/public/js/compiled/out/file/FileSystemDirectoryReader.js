// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileSystemDirectoryReader');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `file.FileSystemDirectoryReader` interface's readEntries()
 *   retrieves the directory entries within the directory being read
 *   delivers them in an array to a provided callback function.
 * 
 *   `readEntries(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries`
 */
file.FileSystemDirectoryReader.read_entries = (function file$FileSystemDirectoryReader$read_entries(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43393 = arguments.length;
var i__42557__auto___43394 = (0);
while(true){
if((i__42557__auto___43394 < len__42556__auto___43393)){
args__42563__auto__.push((arguments[i__42557__auto___43394]));

var G__43395 = (i__42557__auto___43394 + (1));
i__42557__auto___43394 = G__43395;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemDirectoryReader.read_entries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemDirectoryReader.read_entries.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readEntries,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemDirectoryReader.read_entries.cljs$lang$maxFixedArity = (1);

file.FileSystemDirectoryReader.read_entries.cljs$lang$applyTo = (function (seq43391){
var G__43392 = cljs.core.first.call(null,seq43391);
var seq43391__$1 = cljs.core.next.call(null,seq43391);
return file.FileSystemDirectoryReader.read_entries.cljs$core$IFn$_invoke$arity$variadic(G__43392,seq43391__$1);
});


//# sourceMappingURL=FileSystemDirectoryReader.js.map?rel=1565798806147
