// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileSystemDirectoryEntry');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `file.FileSystemDirectoryEntry` interface's method createReader()
 *   a `file.FileSystemDirectoryReader` object which can be used to
 *   the entries in the directory.
 * 
 *   `directoryReader = FileSystemDirectoryEntry.createReader();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader`
 */
file.FileSystemDirectoryEntry.create_reader = (function file$FileSystemDirectoryEntry$create_reader(this$){
return this$.createReader();
});
/**
 * Method.
 * 
 *   The `file.FileSystemDirectoryEntry` interface's method getDirectory()
 *   a `file.FileSystemDirectoryEntry` object corresponding to a directory
 *   somewhere within the directory subtree rooted at the directory
 *   which it's called.
 * 
 *   `FileSystemDirectoryEntry.getDirectory([path][, options][, successCallback][, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getDirectory`
 */
file.FileSystemDirectoryEntry.get_directory = (function file$FileSystemDirectoryEntry$get_directory(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43890 = arguments.length;
var i__42557__auto___43891 = (0);
while(true){
if((i__42557__auto___43891 < len__42556__auto___43890)){
args__42563__auto__.push((arguments[i__42557__auto___43891]));

var G__43892 = (i__42557__auto___43891 + (1));
i__42557__auto___43891 = G__43892;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemDirectoryEntry.get_directory.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemDirectoryEntry.get_directory.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getDirectory,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemDirectoryEntry.get_directory.cljs$lang$maxFixedArity = (1);

file.FileSystemDirectoryEntry.get_directory.cljs$lang$applyTo = (function (seq43888){
var G__43889 = cljs.core.first.call(null,seq43888);
var seq43888__$1 = cljs.core.next.call(null,seq43888);
return file.FileSystemDirectoryEntry.get_directory.cljs$core$IFn$_invoke$arity$variadic(G__43889,seq43888__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemDirectoryEntry` interface's method getFile()
 *   a `file.FileSystemFileEntry` object corresponding to a file contained
 *   within the directory subtree rooted at the directory on which
 *   called.
 * 
 *   `FileSystemDirectoryEntry.getFile([path][, options][, successCallback][, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getFile`
 */
file.FileSystemDirectoryEntry.get_file = (function file$FileSystemDirectoryEntry$get_file(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43895 = arguments.length;
var i__42557__auto___43896 = (0);
while(true){
if((i__42557__auto___43896 < len__42556__auto___43895)){
args__42563__auto__.push((arguments[i__42557__auto___43896]));

var G__43897 = (i__42557__auto___43896 + (1));
i__42557__auto___43896 = G__43897;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemDirectoryEntry.get_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemDirectoryEntry.get_file.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getFile,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemDirectoryEntry.get_file.cljs$lang$maxFixedArity = (1);

file.FileSystemDirectoryEntry.get_file.cljs$lang$applyTo = (function (seq43893){
var G__43894 = cljs.core.first.call(null,seq43893);
var seq43893__$1 = cljs.core.next.call(null,seq43893);
return file.FileSystemDirectoryEntry.get_file.cljs$core$IFn$_invoke$arity$variadic(G__43894,seq43893__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemDirectoryEntry` interface's method removeRecursively()
 *   the directory as well as all of its content, hierarchically iterating
 *   its entire subtree of descendant files and directories.
 * 
 *   `FileSystemDirectoryEntry.removeRecursively(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/removeRecursively`
 */
file.FileSystemDirectoryEntry.remove_recursively = (function file$FileSystemDirectoryEntry$remove_recursively(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43900 = arguments.length;
var i__42557__auto___43901 = (0);
while(true){
if((i__42557__auto___43901 < len__42556__auto___43900)){
args__42563__auto__.push((arguments[i__42557__auto___43901]));

var G__43902 = (i__42557__auto___43901 + (1));
i__42557__auto___43901 = G__43902;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemDirectoryEntry.remove_recursively.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemDirectoryEntry.remove_recursively.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeRecursively,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemDirectoryEntry.remove_recursively.cljs$lang$maxFixedArity = (1);

file.FileSystemDirectoryEntry.remove_recursively.cljs$lang$applyTo = (function (seq43898){
var G__43899 = cljs.core.first.call(null,seq43898);
var seq43898__$1 = cljs.core.next.call(null,seq43898);
return file.FileSystemDirectoryEntry.remove_recursively.cljs$core$IFn$_invoke$arity$variadic(G__43899,seq43898__$1);
});


//# sourceMappingURL=FileSystemDirectoryEntry.js.map?rel=1565798810330
