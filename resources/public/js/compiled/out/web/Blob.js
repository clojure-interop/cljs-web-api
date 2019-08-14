// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Blob');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Blob() constructor returns a new `web.Blob` object. The content of the blob consists of the concatenation of the values given in the parameter array.
 * 
 *   array is an `web.Array` of `web.ArrayBuffer`, `web.ArrayBufferView`, `web.Blob`, `dom.DOMString` objects, or a mix of any of such objects, that will be put inside the `web.Blob`. DOMStrings are encoded as UTF-8.
 *   options is an optional BlobPropertyBag dictionary which may specify the following two attributes:
 * 
 *   type, with a default value of \"\", that represents the MIME type of the content of the array that will be put in the blob.
 *   endings, with a default value of \"transparent\", that specifies how strings containing the line ending character \\n are to be written out. It is one of the two values: \"native\", meaning that line ending characters are changed to match host OS filesystem convention, or \"transparent\", meaning that endings are stored in the blob without change.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob`
 */
web.Blob.constructor$ = Blob;
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
web.Blob.slice = (function web$Blob$slice(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50246 = arguments.length;
var i__42557__auto___50247 = (0);
while(true){
if((i__42557__auto___50247 < len__42556__auto___50246)){
args__42563__auto__.push((arguments[i__42557__auto___50247]));

var G__50248 = (i__42557__auto___50247 + (1));
i__42557__auto___50247 = G__50248;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Blob.slice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Blob.slice.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.slice,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Blob.slice.cljs$lang$maxFixedArity = (1);

web.Blob.slice.cljs$lang$applyTo = (function (seq50244){
var G__50245 = cljs.core.first.call(null,seq50244);
var seq50244__$1 = cljs.core.next.call(null,seq50244);
return web.Blob.slice.cljs$core$IFn$_invoke$arity$variadic(G__50245,seq50244__$1);
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
web.Blob.stream = (function web$Blob$stream(this$){
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
web.Blob.text = (function web$Blob$text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50251 = arguments.length;
var i__42557__auto___50252 = (0);
while(true){
if((i__42557__auto___50252 < len__42556__auto___50251)){
args__42563__auto__.push((arguments[i__42557__auto___50252]));

var G__50253 = (i__42557__auto___50252 + (1));
i__42557__auto___50252 = G__50253;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Blob.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Blob.text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.text,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Blob.text.cljs$lang$maxFixedArity = (1);

web.Blob.text.cljs$lang$applyTo = (function (seq50249){
var G__50250 = cljs.core.first.call(null,seq50249);
var seq50249__$1 = cljs.core.next.call(null,seq50249);
return web.Blob.text.cljs$core$IFn$_invoke$arity$variadic(G__50250,seq50249__$1);
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
web.Blob.array_buffer = (function web$Blob$array_buffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50256 = arguments.length;
var i__42557__auto___50257 = (0);
while(true){
if((i__42557__auto___50257 < len__42556__auto___50256)){
args__42563__auto__.push((arguments[i__42557__auto___50257]));

var G__50258 = (i__42557__auto___50257 + (1));
i__42557__auto___50257 = G__50258;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Blob.array_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Blob.array_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arrayBuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Blob.array_buffer.cljs$lang$maxFixedArity = (1);

web.Blob.array_buffer.cljs$lang$applyTo = (function (seq50254){
var G__50255 = cljs.core.first.call(null,seq50254);
var seq50254__$1 = cljs.core.next.call(null,seq50254);
return web.Blob.array_buffer.cljs$core$IFn$_invoke$arity$variadic(G__50255,seq50254__$1);
});

/**
 * Property.
 * 
 *   The Blob.size property returns the size in bytes of the `web.Blob`
 *   a `file.File`.
 * 
 *   `var sizeInBytes = blob.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`
 */
web.Blob.size = (function web$Blob$size(this$){
return this$.size();
});
/**
 * Property.
 * 
 *   The Blob.size property returns the size in bytes of the `web.Blob`
 *   a `file.File`.
 * 
 *   `var sizeInBytes = blob.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`
 */
web.Blob.set_size_BANG_ = (function web$Blob$set_size_BANG_(this$,val){
return (this$["size"] = val);
});
/**
 * Property.
 * 
 *   The type property of a `web.Blob` object provides the MIME type
 *   the file. It returns an empty string if the type couldn't determined.
 * 
 *   `var mimetype = instanceOfFile.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`
 */
web.Blob.type = (function web$Blob$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type property of a `web.Blob` object provides the MIME type
 *   the file. It returns an empty string if the type couldn't determined.
 * 
 *   `var mimetype = instanceOfFile.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`
 */
web.Blob.set_type_BANG_ = (function web$Blob$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=Blob.js.map?rel=1565798837311
