// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileSystemEntry');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method copyTo() copies
 *   file specified by the entry to a new location on the file system.
 * 
 *   `FileSystemEntry.copyTo(newParent[, newName][, successCallback][, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/copyTo`
 */
file.FileSystemEntry.copy_to = (function file$FileSystemEntry$copy_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50097 = arguments.length;
var i__42557__auto___50098 = (0);
while(true){
if((i__42557__auto___50098 < len__42556__auto___50097)){
args__42563__auto__.push((arguments[i__42557__auto___50098]));

var G__50099 = (i__42557__auto___50098 + (1));
i__42557__auto___50098 = G__50099;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.copy_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.copy_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.copyTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.copy_to.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.copy_to.cljs$lang$applyTo = (function (seq50095){
var G__50096 = cljs.core.first.call(null,seq50095);
var seq50095__$1 = cljs.core.next.call(null,seq50095);
return file.FileSystemEntry.copy_to.cljs$core$IFn$_invoke$arity$variadic(G__50096,seq50095__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method getMetadata() obtains
 *   `web.Metadata` object with information about the file system
 *   such as its modification date and time and its size.
 * 
 *   `FileSystemEntry.getMetadata(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getMetadata`
 */
file.FileSystemEntry.get_metadata = (function file$FileSystemEntry$get_metadata(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50102 = arguments.length;
var i__42557__auto___50103 = (0);
while(true){
if((i__42557__auto___50103 < len__42556__auto___50102)){
args__42563__auto__.push((arguments[i__42557__auto___50103]));

var G__50104 = (i__42557__auto___50103 + (1));
i__42557__auto___50103 = G__50104;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.get_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.get_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getMetadata,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.get_metadata.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.get_metadata.cljs$lang$applyTo = (function (seq50100){
var G__50101 = cljs.core.first.call(null,seq50100);
var seq50100__$1 = cljs.core.next.call(null,seq50100);
return file.FileSystemEntry.get_metadata.cljs$core$IFn$_invoke$arity$variadic(G__50101,seq50100__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method getParent() obtains
 *   `file.FileSystemDirectoryEntry`.
 * 
 *   `FileSystemEntry.getParent(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getParent`
 */
file.FileSystemEntry.get_parent = (function file$FileSystemEntry$get_parent(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50107 = arguments.length;
var i__42557__auto___50108 = (0);
while(true){
if((i__42557__auto___50108 < len__42556__auto___50107)){
args__42563__auto__.push((arguments[i__42557__auto___50108]));

var G__50109 = (i__42557__auto___50108 + (1));
i__42557__auto___50108 = G__50109;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.get_parent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.get_parent.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getParent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.get_parent.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.get_parent.cljs$lang$applyTo = (function (seq50105){
var G__50106 = cljs.core.first.call(null,seq50105);
var seq50105__$1 = cljs.core.next.call(null,seq50105);
return file.FileSystemEntry.get_parent.cljs$core$IFn$_invoke$arity$variadic(G__50106,seq50105__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method moveTo() moves
 *   file specified by the entry to a new location on the file system,
 *   renames the file if the destination directory is the same as
 *   source.
 * 
 *   `FileSystemEntry.moveTo(newParent[, newName][, successCallback][, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/moveTo`
 */
file.FileSystemEntry.move_to = (function file$FileSystemEntry$move_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50112 = arguments.length;
var i__42557__auto___50113 = (0);
while(true){
if((i__42557__auto___50113 < len__42556__auto___50112)){
args__42563__auto__.push((arguments[i__42557__auto___50113]));

var G__50114 = (i__42557__auto___50113 + (1));
i__42557__auto___50113 = G__50114;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.move_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.move_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.moveTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.move_to.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.move_to.cljs$lang$applyTo = (function (seq50110){
var G__50111 = cljs.core.first.call(null,seq50110);
var seq50110__$1 = cljs.core.next.call(null,seq50110);
return file.FileSystemEntry.move_to.cljs$core$IFn$_invoke$arity$variadic(G__50111,seq50110__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method remove() deletes
 *   file or directory from the file system. Directories must be empty
 *   they can be removed.
 * 
 *   `FileSystemEntry.remove(successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/remove`
 */
file.FileSystemEntry.remove = (function file$FileSystemEntry$remove(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50117 = arguments.length;
var i__42557__auto___50118 = (0);
while(true){
if((i__42557__auto___50118 < len__42556__auto___50117)){
args__42563__auto__.push((arguments[i__42557__auto___50118]));

var G__50119 = (i__42557__auto___50118 + (1));
i__42557__auto___50118 = G__50119;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.remove.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.remove.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.remove,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.remove.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.remove.cljs$lang$applyTo = (function (seq50115){
var G__50116 = cljs.core.first.call(null,seq50115);
var seq50115__$1 = cljs.core.next.call(null,seq50115);
return file.FileSystemEntry.remove.cljs$core$IFn$_invoke$arity$variadic(G__50116,seq50115__$1);
});

/**
 * Method.
 * 
 *   The `file.FileSystemEntry` interface's method toURL() creates
 *   returns a string containing a URL which can be used to identify
 *   file system entry. This is done by exposing a new URL scheme—filesystem:—that
 *   be used as the value of src and href attributes.
 * 
 *   `FileSystemEntry.toURL([mimeType]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/toURL`
 */
file.FileSystemEntry.to_url = (function file$FileSystemEntry$to_url(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50122 = arguments.length;
var i__42557__auto___50123 = (0);
while(true){
if((i__42557__auto___50123 < len__42556__auto___50122)){
args__42563__auto__.push((arguments[i__42557__auto___50123]));

var G__50124 = (i__42557__auto___50123 + (1));
i__42557__auto___50123 = G__50124;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileSystemEntry.to_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileSystemEntry.to_url.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.toURL,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileSystemEntry.to_url.cljs$lang$maxFixedArity = (1);

file.FileSystemEntry.to_url.cljs$lang$applyTo = (function (seq50120){
var G__50121 = cljs.core.first.call(null,seq50120);
var seq50120__$1 = cljs.core.next.call(null,seq50120);
return file.FileSystemEntry.to_url.cljs$core$IFn$_invoke$arity$variadic(G__50121,seq50120__$1);
});

/**
 * Property.
 * 
 *   The read-only filesystem property of the `file.FileSystemEntry`
 *   contains a `file.FileSystem` object that represents the file
 *   on which the entry resides.
 * 
 *   `var filesystem = FileSystemEntry.filesystem;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/filesystem`
 */
file.FileSystemEntry.filesystem = (function file$FileSystemEntry$filesystem(this$){
return this$.filesystem();
});
/**
 * Property.
 * 
 *   The read-only filesystem property of the `file.FileSystemEntry`
 *   contains a `file.FileSystem` object that represents the file
 *   on which the entry resides.
 * 
 *   `var filesystem = FileSystemEntry.filesystem;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/filesystem`
 */
file.FileSystemEntry.set_filesystem_BANG_ = (function file$FileSystemEntry$set_filesystem_BANG_(this$,val){
return (this$["filesystem"] = val);
});
/**
 * Property.
 * 
 *   The read-only fullPath property of the `file.FileSystemEntry`
 *   returns a `web.USVString` specifying the full, absolute path
 *   the file system's root to the file represented by the entry.
 * 
 *   `var fullPath = FileSystemEntry.fullPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/fullPath`
 */
file.FileSystemEntry.full_path = (function file$FileSystemEntry$full_path(this$){
return this$.fullPath();
});
/**
 * Property.
 * 
 *   The read-only fullPath property of the `file.FileSystemEntry`
 *   returns a `web.USVString` specifying the full, absolute path
 *   the file system's root to the file represented by the entry.
 * 
 *   `var fullPath = FileSystemEntry.fullPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/fullPath`
 */
file.FileSystemEntry.set_full_path_BANG_ = (function file$FileSystemEntry$set_full_path_BANG_(this$,val){
return (this$["fullPath"] = val);
});
/**
 * Property.
 * 
 *   The read-only isDirectory property of the `file.FileSystemEntry`
 *   is true if the entry represents a directory (meaning it's a `file.FileSystemDirectoryEntry`)
 *   false if it's not.
 * 
 *   `var isDirectory = FileSystemEntry.isDirectory;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isDirectory`
 */
file.FileSystemEntry.is_directory = (function file$FileSystemEntry$is_directory(this$){
return this$.isDirectory();
});
/**
 * Property.
 * 
 *   The read-only isDirectory property of the `file.FileSystemEntry`
 *   is true if the entry represents a directory (meaning it's a `file.FileSystemDirectoryEntry`)
 *   false if it's not.
 * 
 *   `var isDirectory = FileSystemEntry.isDirectory;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isDirectory`
 */
file.FileSystemEntry.set_is_directory_BANG_ = (function file$FileSystemEntry$set_is_directory_BANG_(this$,val){
return (this$["isDirectory"] = val);
});
/**
 * Property.
 * 
 *   The read-only isFile property of the `file.FileSystemEntry` interface
 *   true if the entry represents a file (meaning it's a `file.FileSystemFileEntry`)
 *   false if it's not.
 * 
 *   `var isFile = FileSystemEntry.isFile;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isFile`
 */
file.FileSystemEntry.is_file = (function file$FileSystemEntry$is_file(this$){
return this$.isFile();
});
/**
 * Property.
 * 
 *   The read-only isFile property of the `file.FileSystemEntry` interface
 *   true if the entry represents a file (meaning it's a `file.FileSystemFileEntry`)
 *   false if it's not.
 * 
 *   `var isFile = FileSystemEntry.isFile;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isFile`
 */
file.FileSystemEntry.set_is_file_BANG_ = (function file$FileSystemEntry$set_is_file_BANG_(this$,val){
return (this$["isFile"] = val);
});
/**
 * Property.
 * 
 *   The read-only name property of the `file.FileSystemEntry` interface
 *   a `web.USVString` specifying the entry's name; this is the entry
 *   its parent directory (the last component of the path as indicated
 *   the `web.fullPath` property).
 * 
 *   `var name = FileSystemEntry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/name`
 */
file.FileSystemEntry.name = (function file$FileSystemEntry$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The read-only name property of the `file.FileSystemEntry` interface
 *   a `web.USVString` specifying the entry's name; this is the entry
 *   its parent directory (the last component of the path as indicated
 *   the `web.fullPath` property).
 * 
 *   `var name = FileSystemEntry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/name`
 */
file.FileSystemEntry.set_name_BANG_ = (function file$FileSystemEntry$set_name_BANG_(this$,val){
return (this$["name"] = val);
});

//# sourceMappingURL=FileSystemEntry.js.map?rel=1565798836003
