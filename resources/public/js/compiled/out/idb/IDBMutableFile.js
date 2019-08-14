// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBMutableFile');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getFile method allows to retrieve a read-only snapshot of
 *   handled file in the form of a `file.File` object.
 * 
 *   `var request = instanceOfFileHandle.getFile();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/getFile`
 */
idb.IDBMutableFile.get_file = (function idb$IDBMutableFile$get_file(this$){
return this$.getFile();
});
/**
 * Method.
 * 
 *   The open method returns a `web.LockedFile` object that allows
 *   safely write in the file.
 * 
 *   `var myFile = instanceOfFileHandle.open(mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/open`
 */
idb.IDBMutableFile.open = (function idb$IDBMutableFile$open(this$,mode){
return this$.open(mode);
});
/**
 * Property.
 * 
 *   Provides the name of the file.
 * 
 *   `var name = instanceOfFileHandle.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/name`
 */
idb.IDBMutableFile.name = (function idb$IDBMutableFile$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   Provides the name of the file.
 * 
 *   `var name = instanceOfFileHandle.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/name`
 */
idb.IDBMutableFile.set_name_BANG_ = (function idb$IDBMutableFile$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive abort events. These events
 *   when the associated locked file has been aborted with the `web.LockedFile.abort()`
 * 
 *   `instanceOfFileHandle.onabort = funcRef;
 * 
 *   Where funcRef is a function to be called when the abort event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onabort`
 */
idb.IDBMutableFile.onabort = (function idb$IDBMutableFile$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive abort events. These events
 *   when the associated locked file has been aborted with the `web.LockedFile.abort()`
 * 
 *   `instanceOfFileHandle.onabort = funcRef;
 * 
 *   Where funcRef is a function to be called when the abort event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onabort`
 */
idb.IDBMutableFile.set_onabort_BANG_ = (function idb$IDBMutableFile$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive error events. These events
 *   when something goes wrong.
 * 
 *   `instanceOfFileHandle.onerror = funcRef;
 * 
 *   Where funcRef is a function to be called when the error event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onerror`
 */
idb.IDBMutableFile.onerror = (function idb$IDBMutableFile$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive error events. These events
 *   when something goes wrong.
 * 
 *   `instanceOfFileHandle.onerror = funcRef;
 * 
 *   Where funcRef is a function to be called when the error event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onerror`
 */
idb.IDBMutableFile.set_onerror_BANG_ = (function idb$IDBMutableFile$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   Provides the mime type of the file.
 * 
 *   `var type = instanceOfFileHandle.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/type`
 */
idb.IDBMutableFile.type = (function idb$IDBMutableFile$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   Provides the mime type of the file.
 * 
 *   `var type = instanceOfFileHandle.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/type`
 */
idb.IDBMutableFile.set_type_BANG_ = (function idb$IDBMutableFile$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=IDBMutableFile.js.map?rel=1565798804943
