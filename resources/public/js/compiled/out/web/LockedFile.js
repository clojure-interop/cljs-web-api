// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.LockedFile');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The abort method is used to release the lock on the `web.LockedFile`
 *   making it inactive: its `web.active` property is set to false
 *   all ongoing operations are canceled.
 * 
 *   `var request = instanceOfLockedFile.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/abort`
 */
web.LockedFile.abort = (function web$LockedFile$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The append method is used to write some data at the end of the
 * 
 *   `var request = instanceOfLockedFile.append(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/append`
 */
web.LockedFile.append = (function web$LockedFile$append(this$,data){
return this$.append(data);
});
/**
 * Method.
 * 
 *   The flush method is used to ensure any change made to a file
 *   properly written on disk.
 * 
 *   `var request = instanceOfLockedFile.flush();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/flush`
 */
web.LockedFile.flush = (function web$LockedFile$flush(this$){
return this$.flush();
});
/**
 * Method.
 * 
 *   The getMetadata method allows to retrieve some metadata about
 *   locked file.
 * 
 *   `var request = instanceOfLockedFile.getMetadata(param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/getMetaData`
 */
web.LockedFile.get_metadata = (function web$LockedFile$get_metadata(this$,param){
return this$.getMetadata(param);
});
/**
 * Method.
 * 
 *   The readAsArrayBuffer method is used to read the content of the
 *   object and provide the result of that reading as an `web.ArrayBuffer`.
 *   many ways, it performs like the `file.FileReader.readAsArrayBuffer()`
 * 
 *   `var request = instanceOfLockedFile.readAsArrayBuffer(size);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/readAsArrayBuffer`
 */
web.LockedFile.read_as_array_buffer = (function web$LockedFile$read_as_array_buffer(this$,size){
return this$.readAsArrayBuffer(size);
});
/**
 * Method.
 * 
 *   The readAsText method is used to read the content of the `web.LockedFile`
 *   and provide the result of that reading as a string. In many ways,
 *   performs like the `file.FileReader.readAsText()` method.
 * 
 *   `var request = instanceOfLockedFile.readAsText(size[, encoding]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/readAsText`
 */
web.LockedFile.read_as_text = (function web$LockedFile$read_as_text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50151 = arguments.length;
var i__42557__auto___50152 = (0);
while(true){
if((i__42557__auto___50152 < len__42556__auto___50151)){
args__42563__auto__.push((arguments[i__42557__auto___50152]));

var G__50153 = (i__42557__auto___50152 + (1));
i__42557__auto___50152 = G__50153;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.LockedFile.read_as_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.LockedFile.read_as_text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readAsText,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.LockedFile.read_as_text.cljs$lang$maxFixedArity = (1);

web.LockedFile.read_as_text.cljs$lang$applyTo = (function (seq50149){
var G__50150 = cljs.core.first.call(null,seq50149);
var seq50149__$1 = cljs.core.next.call(null,seq50149);
return web.LockedFile.read_as_text.cljs$core$IFn$_invoke$arity$variadic(G__50150,seq50149__$1);
});

/**
 * Method.
 * 
 *   The truncate method is used to remove some data within the file.
 * 
 *   `var request = instanceOfLockedFile.truncate(start);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/truncate`
 */
web.LockedFile.truncate = (function web$LockedFile$truncate(this$,start){
return this$.truncate(start);
});
/**
 * Method.
 * 
 *   The write method is used to write some data within the file.
 * 
 *   `var request = instanceOfLockedFile.write(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/write`
 */
web.LockedFile.write = (function web$LockedFile$write(this$,data){
return this$.write(data);
});
/**
 * Property.
 * 
 *   The active property allows to know if the `web.LockedFile` object
 *   still usable (true) or not (false). If the object is inactive
 *   it is impossible to perform any read or write operation with
 *   Typically, a `web.LockedFile` object becomes inactive when the
 *   method is called or if an error occurs.
 * 
 *   `var state = instanceOfLockedFile.active`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/active`
 */
web.LockedFile.active = (function web$LockedFile$active(this$){
return this$.active();
});
/**
 * Property.
 * 
 *   The active property allows to know if the `web.LockedFile` object
 *   still usable (true) or not (false). If the object is inactive
 *   it is impossible to perform any read or write operation with
 *   Typically, a `web.LockedFile` object becomes inactive when the
 *   method is called or if an error occurs.
 * 
 *   `var state = instanceOfLockedFile.active`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/active`
 */
web.LockedFile.set_active_BANG_ = (function web$LockedFile$set_active_BANG_(this$,val){
return (this$["active"] = val);
});
/**
 * Property.
 * 
 *   The fileHandle property gives access to the `file.FileHandle`
 *   that produced the `web.LockedFile` object.
 * 
 *   `var handler = instanceOfLockedFile.fileHandle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/fileHandle`
 */
web.LockedFile.file_handle = (function web$LockedFile$file_handle(this$){
return this$.fileHandle();
});
/**
 * Property.
 * 
 *   The fileHandle property gives access to the `file.FileHandle`
 *   that produced the `web.LockedFile` object.
 * 
 *   `var handler = instanceOfLockedFile.fileHandle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/fileHandle`
 */
web.LockedFile.set_file_handle_BANG_ = (function web$LockedFile$set_file_handle_BANG_(this$,val){
return (this$["fileHandle"] = val);
});
/**
 * Property.
 * 
 *   The location property is a zero-based index representing the
 *   of the read/write pointer within the file. Its value indicates
 *   which bytes within the file any write or read operation will
 * 
 *   `var location = instanceOfLockedFile.location`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/location`
 */
web.LockedFile.location = (function web$LockedFile$location(this$){
return this$.location();
});
/**
 * Property.
 * 
 *   The location property is a zero-based index representing the
 *   of the read/write pointer within the file. Its value indicates
 *   which bytes within the file any write or read operation will
 * 
 *   `var location = instanceOfLockedFile.location`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/location`
 */
web.LockedFile.set_location_BANG_ = (function web$LockedFile$set_location_BANG_(this$,val){
return (this$["location"] = val);
});
/**
 * Property.
 * 
 *   The mode property provides the read/write status of the `web.LockedFile`
 * 
 *   `var mode = instanceOfLockedFile.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/mode`
 */
web.LockedFile.mode = (function web$LockedFile$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   The mode property provides the read/write status of the `web.LockedFile`
 * 
 *   `var mode = instanceOfLockedFile.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/mode`
 */
web.LockedFile.set_mode_BANG_ = (function web$LockedFile$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive abort events. These events
 *   when the locked file has been aborted with the `web.LockedFile.abort()`
 * 
 *   `instanceOfLockedFile.onabort = funcRef;
 * 
 *   Where funcRef is a function to be called when the abort event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onabort`
 */
web.LockedFile.onabort = (function web$LockedFile$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive abort events. These events
 *   when the locked file has been aborted with the `web.LockedFile.abort()`
 * 
 *   `instanceOfLockedFile.onabort = funcRef;
 * 
 *   Where funcRef is a function to be called when the abort event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onabort`
 */
web.LockedFile.set_onabort_BANG_ = (function web$LockedFile$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive complete events. These
 *   occur each time a read or write operation is successful.
 * 
 *   `instanceOfLockedFile.oncomplete = funcRef;
 * 
 *   Where funcRef is a function to be called when the complete event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/oncomplete`
 */
web.LockedFile.oncomplete = (function web$LockedFile$oncomplete(this$){
return this$.oncomplete();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive complete events. These
 *   occur each time a read or write operation is successful.
 * 
 *   `instanceOfLockedFile.oncomplete = funcRef;
 * 
 *   Where funcRef is a function to be called when the complete event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/oncomplete`
 */
web.LockedFile.set_oncomplete_BANG_ = (function web$LockedFile$set_oncomplete_BANG_(this$,val){
return (this$["oncomplete"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive error events. These events
 *   when something goes wrong.
 * 
 *   `instanceOfLockedFile.onerror = funcRef;
 * 
 *   Where funcRef is a function to be called when the error event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onerror`
 */
web.LockedFile.onerror = (function web$LockedFile$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive error events. These events
 *   when something goes wrong.
 * 
 *   `instanceOfLockedFile.onerror = funcRef;
 * 
 *   Where funcRef is a function to be called when the error event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onerror`
 */
web.LockedFile.set_onerror_BANG_ = (function web$LockedFile$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});

//# sourceMappingURL=LockedFile.js.map?rel=1565798836353
