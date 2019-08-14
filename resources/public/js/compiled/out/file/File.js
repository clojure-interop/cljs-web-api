// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.File');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The File() constructor creates a new `file.File` object instance.
 * 
 *   bits
 *   An `web.Array` of `web.ArrayBuffer`, `web.ArrayBufferView`, `web.Blob`, or `dom.DOMString` objects — or a mix of any such objects. This is the file content encoded as UTF-8.
 *   name
 *   A `web.USVString` representing the file name or the path to the file.
 *   options Optional
 *   An options object containing optional attributes for the file. Available options are as follows:
 * 
 *   type: A `dom.DOMString` representing the MIME type of the content that will be put into the file. Defaults to a value of \"\".
 *   lastModified: A number representing the number of milliseconds between the Unix time epoch and when the file was last modified. Defaults to a value of `web.Date.now()`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/File`
 */
file.File.constructor$ = File;
/**
 * Method.
 * 
 *   The getAsBinary method allows to access the file's data in raw
 *   format.
 * 
 *   `var binary = instanceOfFile.getAsBinary();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsBinary`
 */
file.File.get_as_binary = (function file$File$get_as_binary(this$){
return this$.getAsBinary();
});
/**
 * Method.
 * 
 *   The getAsDataURL provides a `web.data:` URL that encodes the
 *   contents of the referenced file.
 * 
 *   `var url = instanceOfFile.getAsDataURL();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsDataURL`
 */
file.File.get_as_data_url = (function file$File$get_as_data_url(this$){
return this$.getAsDataURL();
});
/**
 * Method.
 * 
 *   The getAsText method provides the file's data interpreted as
 *   using a given encoding.
 * 
 *   `var str = instanceOfFile.getAsText(encoding);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsText`
 */
file.File.get_as_text = (function file$File$get_as_text(this$,encoding){
return this$.getAsText(encoding);
});
/**
 * Method.
 * 
 *   The Blob.slice() method is used to create a new `web.Blob` object
 *   the data in the specified range of bytes of the source `web.Blob`.
 * 
 *   `var blob = instanceOfBlob.slice([start [, end [, contentType]]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice`
 */
file.File.slice = (function file$File$slice(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52713 = arguments.length;
var i__42557__auto___52714 = (0);
while(true){
if((i__42557__auto___52714 < len__42556__auto___52713)){
args__42563__auto__.push((arguments[i__42557__auto___52714]));

var G__52715 = (i__42557__auto___52714 + (1));
i__42557__auto___52714 = G__52715;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.File.slice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.File.slice.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.slice,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.File.slice.cljs$lang$maxFixedArity = (1);

file.File.slice.cljs$lang$applyTo = (function (seq52711){
var G__52712 = cljs.core.first.call(null,seq52711);
var seq52711__$1 = cljs.core.next.call(null,seq52711);
return file.File.slice.cljs$core$IFn$_invoke$arity$variadic(G__52712,seq52711__$1);
});

/**
 * Method.
 * 
 *   The stream() method of the `web.Blob` interface transforms a
 *   into a `web.ReadableStream` of its data.
 * 
 *   `var stream = blob.stream();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream`
 */
file.File.stream = (function file$File$stream(this$){
return this$.stream();
});
/**
 * Method.
 * 
 * 
 * 
 *   `blob.text().then(function (text) {
 *   // do something with the text
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/text`
 */
file.File.text = (function file$File$text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52718 = arguments.length;
var i__42557__auto___52719 = (0);
while(true){
if((i__42557__auto___52719 < len__42556__auto___52718)){
args__42563__auto__.push((arguments[i__42557__auto___52719]));

var G__52720 = (i__42557__auto___52719 + (1));
i__42557__auto___52719 = G__52720;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.File.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.File.text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.text,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.File.text.cljs$lang$maxFixedArity = (1);

file.File.text.cljs$lang$applyTo = (function (seq52716){
var G__52717 = cljs.core.first.call(null,seq52716);
var seq52716__$1 = cljs.core.next.call(null,seq52716);
return file.File.text.cljs$core$IFn$_invoke$arity$variadic(G__52717,seq52716__$1);
});

/**
 * Method.
 * 
 *   The arrayBuffer() method of the `web.Blob` interface is used
 *   read the contents of a Blob as binary data. It returns a promise
 *   resolves with an `web.ArrayBuffer`.
 * 
 *   `blob.arrayBuffer().then(function (buffer) {
 *   // do something with buffer
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer`
 */
file.File.array_buffer = (function file$File$array_buffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52723 = arguments.length;
var i__42557__auto___52724 = (0);
while(true){
if((i__42557__auto___52724 < len__42556__auto___52723)){
args__42563__auto__.push((arguments[i__42557__auto___52724]));

var G__52725 = (i__42557__auto___52724 + (1));
i__42557__auto___52724 = G__52725;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.File.array_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.File.array_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arrayBuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.File.array_buffer.cljs$lang$maxFixedArity = (1);

file.File.array_buffer.cljs$lang$applyTo = (function (seq52721){
var G__52722 = cljs.core.first.call(null,seq52721);
var seq52721__$1 = cljs.core.next.call(null,seq52721);
return file.File.array_buffer.cljs$core$IFn$_invoke$arity$variadic(G__52722,seq52721__$1);
});

/**
 * Property.
 * 
 *   Returns the name of the file. For security reasons the path is
 *   from this property.
 * 
 *   `var name = instanceOfFile.fileName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileName`
 */
file.File.file_name = (function file$File$file_name(this$){
return this$.fileName();
});
/**
 * Property.
 * 
 *   Returns the name of the file. For security reasons the path is
 *   from this property.
 * 
 *   `var name = instanceOfFile.fileName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileName`
 */
file.File.set_file_name_BANG_ = (function file$File$set_file_name_BANG_(this$,val){
return (this$["fileName"] = val);
});
/**
 * Property.
 * 
 *   Returns the size of a file in bytes.
 * 
 *   `var size = instanceOfFile.fileSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileSize`
 */
file.File.file_size = (function file$File$file_size(this$){
return this$.fileSize();
});
/**
 * Property.
 * 
 *   Returns the size of a file in bytes.
 * 
 *   `var size = instanceOfFile.fileSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileSize`
 */
file.File.set_file_size_BANG_ = (function file$File$set_file_size_BANG_(this$,val){
return (this$["fileSize"] = val);
});
/**
 * Property.
 * 
 *   The File.lastModified read-only property provides the last modified
 *   of the file as the number of milliseconds since the Unix epoch
 *   1, 1970 at midnight). Files without a known last modified date
 *   the current date.
 * 
 *   `const time = instanceOfFile.lastModified;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified`
 */
file.File.last_modified = (function file$File$last_modified(this$){
return this$.lastModified();
});
/**
 * Property.
 * 
 *   The File.lastModified read-only property provides the last modified
 *   of the file as the number of milliseconds since the Unix epoch
 *   1, 1970 at midnight). Files without a known last modified date
 *   the current date.
 * 
 *   `const time = instanceOfFile.lastModified;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified`
 */
file.File.set_last_modified_BANG_ = (function file$File$set_last_modified_BANG_(this$,val){
return (this$["lastModified"] = val);
});
/**
 * Property.
 * 
 *   The File.lastModifiedDate read-only property returns the last
 *   date of the file. Files without a known last modified date returns
 *   current date .
 * 
 *   `var time = instanceOfFile.lastModifiedDate`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModifiedDate`
 */
file.File.last_modified_date = (function file$File$last_modified_date(this$){
return this$.lastModifiedDate();
});
/**
 * Property.
 * 
 *   A privileged exension to the `file.File` interface, the mozFullPath
 *   contains the full pathname of the represented file.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/mozFullPath`
 */
file.File.moz_full_path = (function file$File$moz_full_path(this$){
return this$.mozFullPath();
});
/**
 * Property.
 * 
 *   A privileged exension to the `file.File` interface, the mozFullPath
 *   contains the full pathname of the represented file.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/mozFullPath`
 */
file.File.set_moz_full_path_BANG_ = (function file$File$set_moz_full_path_BANG_(this$,val){
return (this$["mozFullPath"] = val);
});
/**
 * Property.
 * 
 *   Returns the name of the file represented by a `file.File` object.
 *   security reasons, the path is excluded from this property.
 * 
 *   `var name = file.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/name`
 */
file.File.name = (function file$File$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   Returns the name of the file represented by a `file.File` object.
 *   security reasons, the path is excluded from this property.
 * 
 *   `var name = file.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/name`
 */
file.File.set_name_BANG_ = (function file$File$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   Returns the media type (MIME) of the file represented by a `file.File`
 * 
 *   `var name = file.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/type`
 */
file.File.type = (function file$File$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   Returns the media type (MIME) of the file represented by a `file.File`
 * 
 *   `var name = file.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/type`
 */
file.File.set_type_BANG_ = (function file$File$set_type_BANG_(this$,val){
return (this$["type"] = val);
});
/**
 * Property.
 * 
 *   The File.webkitRelativePath is a read-only property that contains
 *   `web.USVString` which specifies the file's path relative to the
 *   selected by the user in an `web.<input>` element with its webkitdirectory
 *   set.
 * 
 *   `relativePath = File.webkitRelativePath`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath`
 */
file.File.webkit_relative_path = (function file$File$webkit_relative_path(this$){
return this$.webkitRelativePath();
});
/**
 * Property.
 * 
 *   Returns the size of a file in bytes.
 * 
 *   `var size = instanceOfFile.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/size`
 */
file.File.size = (function file$File$size(this$){
return this$.size();
});
/**
 * Property.
 * 
 *   Returns the size of a file in bytes.
 * 
 *   `var size = instanceOfFile.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/size`
 */
file.File.set_size_BANG_ = (function file$File$set_size_BANG_(this$,val){
return (this$["size"] = val);
});

//# sourceMappingURL=File.js.map?rel=1565798857897
