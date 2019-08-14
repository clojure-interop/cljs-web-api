// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileReader');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FileReader() constructor creates a new FileReader.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader`
 */
file.FileReader.constructor$ = FileReader;
/**
 * Method.
 * 
 *   The abort method aborts the read operation. Upon return, the
 *   will be DONE.
 * 
 *   `instanceOfFileReader.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/abort`
 */
file.FileReader.abort = (function file$FileReader$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The `file.FileReader` interface's readAsArrayBuffer() method
 *   used to start reading the contents of a specified `web.Blob`
 *   `file.File`. When the read operation is finished, the `web.readyState`
 *   DONE, and the loadend is triggered. At that time, the `web.result`
 *   contains an `web.ArrayBuffer` representing the file's data.
 * 
 *   `instanceOfFileReader.readAsArrayBuffer(blob);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer`
 */
file.FileReader.read_as_array_buffer = (function file$FileReader$read_as_array_buffer(this$,blob){
return this$.readAsArrayBuffer(blob);
});
/**
 * Method.
 * 
 *   The readAsBinaryString method is used to start reading the contents
 *   the specified `web.Blob` or `file.File`. When the read operation
 *   finished, the `web.readyState` becomes DONE, and the loadend
 *   triggered. At that time, the `web.result` attribute contains
 *   raw binary data from the file.
 * 
 *   `instanceOfFileReader.readAsBinaryString(blob);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString`
 */
file.FileReader.read_as_binary_string = (function file$FileReader$read_as_binary_string(this$,blob){
return this$.readAsBinaryString(blob);
});
/**
 * Method.
 * 
 *   The readAsDataURL method is used to read the contents of the
 *   `web.Blob` or `file.File`. When the read operation is finished,
 *   `web.readyState` becomes DONE, and the loadend is triggered.
 *   that time, the `web.result` attribute contains the data as a
 *   URL representing the file's data as a base64 encoded string.
 * 
 *   `instanceOfFileReader.readAsDataURL(blob);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL`
 */
file.FileReader.read_as_data_url = (function file$FileReader$read_as_data_url(this$,blob){
return this$.readAsDataURL(blob);
});
/**
 * Method.
 * 
 *   The readAsText() method is used to read the contents of the specified
 *   or `file.File`. When the read operation is complete, the `web.readyState`
 *   changed to DONE, the loadend event is triggered, and the `web.result`
 *   contains the contents of the file as a text string.
 * 
 *   `instanceOfFileReader.readAsText(blob[, encoding]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText`
 */
file.FileReader.read_as_text = (function file$FileReader$read_as_text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43879 = arguments.length;
var i__42557__auto___43880 = (0);
while(true){
if((i__42557__auto___43880 < len__42556__auto___43879)){
args__42563__auto__.push((arguments[i__42557__auto___43880]));

var G__43881 = (i__42557__auto___43880 + (1));
i__42557__auto___43880 = G__43881;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return file.FileReader.read_as_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

file.FileReader.read_as_text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readAsText,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

file.FileReader.read_as_text.cljs$lang$maxFixedArity = (1);

file.FileReader.read_as_text.cljs$lang$applyTo = (function (seq43877){
var G__43878 = cljs.core.first.call(null,seq43877);
var seq43877__$1 = cljs.core.next.call(null,seq43877);
return file.FileReader.read_as_text.cljs$core$IFn$_invoke$arity$variadic(G__43878,seq43877__$1);
});

/**
 * Property.
 * 
 *   Returns the error that occurred while reading the file.
 * 
 *   `var error = instanceOfFileReader.error`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`
 */
file.FileReader.error = (function file$FileReader$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   Returns the error that occurred while reading the file.
 * 
 *   `var error = instanceOfFileReader.error`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`
 */
file.FileReader.set_error_BANG_ = (function file$FileReader$set_error_BANG_(this$,val){
return (this$["error"] = val);
});
/**
 * Property.
 * 
 *   The FileReader.onabort property contains an event handler executed
 *   the abort event is fired, i.e. when the process of reading the
 *   is aborted.
 * 
 *   `reader.onabort = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`
 */
file.FileReader.onabort = (function file$FileReader$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   The FileReader.onabort property contains an event handler executed
 *   the abort event is fired, i.e. when the process of reading the
 *   is aborted.
 * 
 *   `reader.onabort = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`
 */
file.FileReader.set_onabort_BANG_ = (function file$FileReader$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   The FileReader.onload property contains an event handler executed
 *   the load event is fired, when content read with readAsArrayBuffer,
 *   readAsDataURL or readAsText is available.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`
 */
file.FileReader.onload = (function file$FileReader$onload(this$){
return this$.onload();
});
/**
 * Property.
 * 
 *   The FileReader.onload property contains an event handler executed
 *   the load event is fired, when content read with readAsArrayBuffer,
 *   readAsDataURL or readAsText is available.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`
 */
file.FileReader.set_onload_BANG_ = (function file$FileReader$set_onload_BANG_(this$,val){
return (this$["onload"] = val);
});
/**
 * Property.
 * 
 *   The `file.FileReader` readyState property provides the current
 *   of the reading operation a FileReader is in. A FileReader exists
 *   one of the following states:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`
 */
file.FileReader.ready_state = (function file$FileReader$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The `file.FileReader` readyState property provides the current
 *   of the reading operation a FileReader is in. A FileReader exists
 *   one of the following states:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`
 */
file.FileReader.set_ready_state_BANG_ = (function file$FileReader$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The `file.FileReader` result property returns the file's contents.
 *   property is only valid after the read operation is complete,
 *   the format of the data depends on which of the methods was used
 *   initiate the read operation.
 * 
 *   `var file = instanceOfFileReader.result`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`
 */
file.FileReader.result = (function file$FileReader$result(this$){
return this$.result();
});
/**
 * Property.
 * 
 *   The `file.FileReader` result property returns the file's contents.
 *   property is only valid after the read operation is complete,
 *   the format of the data depends on which of the methods was used
 *   initiate the read operation.
 * 
 *   `var file = instanceOfFileReader.result`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`
 */
file.FileReader.set_result_BANG_ = (function file$FileReader$set_result_BANG_(this$,val){
return (this$["result"] = val);
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`
 */
file.FileReader.onerror = (function file$FileReader$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`
 */
file.FileReader.set_onerror_BANG_ = (function file$FileReader$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});

//# sourceMappingURL=FileReader.js.map?rel=1565798810202
