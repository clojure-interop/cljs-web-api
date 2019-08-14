// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileSystemFileEntry');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `file.FileSystemFileEntry` interface's method createWriter()
 *   a `file.FileWriter` object which can be used to write data into
 *   file represented by the directory entry.
 * 
 *   `FileSystemFileEntry.createWriter(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/createWriter`
 */
file.FileSystemFileEntry.create_writer = (function file$FileSystemFileEntry$create_writer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53135 = arguments.length;
var i__42557__auto___53136 = (0);
while(true){
if((i__42557__auto___53136 < len__42556__auto___53135)){
args__42563__auto__.push((arguments[i__42557__auto___53136]));

var G__53137 = (i__42557__auto___53136 + (1));
i__42557__auto___53136 = G__53137;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemFileEntry.create_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemFileEntry.create_writer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createWriter,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemFileEntry.create_writer.cljs$lang$maxFixedArity = (1);

file.FileSystemFileEntry.create_writer.cljs$lang$applyTo = (function (seq53133){
var G__53134 = cljs.core.first.call(null,seq53133);
var seq53133__$1 = cljs.core.next.call(null,seq53133);
return file.FileSystemFileEntry.create_writer.cljs$core$IFn$_invoke$arity$variadic(G__53134,seq53133__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemFileEntry` interface's method file() returns
 *   `file.File` object which can be used to read data from the file
 *   by the directory entry.
 * 
 *   `FileSystemFileEntry.file(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/file`
 */
file.FileSystemFileEntry.file = (function file$FileSystemFileEntry$file(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53140 = arguments.length;
var i__42557__auto___53141 = (0);
while(true){
if((i__42557__auto___53141 < len__42556__auto___53140)){
args__42563__auto__.push((arguments[i__42557__auto___53141]));

var G__53142 = (i__42557__auto___53141 + (1));
i__42557__auto___53141 = G__53142;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemFileEntry.file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemFileEntry.file.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.file,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemFileEntry.file.cljs$lang$maxFixedArity = (1);

file.FileSystemFileEntry.file.cljs$lang$applyTo = (function (seq53138){
var G__53139 = cljs.core.first.call(null,seq53138);
var seq53138__$1 = cljs.core.next.call(null,seq53138);
return file.FileSystemFileEntry.file.cljs$core$IFn$_invoke$arity$variadic(G__53139,seq53138__$1);
});


//# sourceMappingURL=FileSystemFileEntry.js.map?rel=1565798862466
