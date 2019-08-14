// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DataTransferItem');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   If the item is a file, the DataTransferItem.getAsFile() method
 *   the drag data item's `file.File` object. If the item is not a
 *   this method returns null.
 * 
 *   `File = DataTransferItem.getAsFile();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFile`
 */
web.DataTransferItem.get_as_file = (function web$DataTransferItem$get_as_file(this$){
return this$.getAsFile();
});
/**
 * Method.
 * 
 *   The DataTransferItem.getAsString() method invokes the given callback
 *   the drag data item's string data as the argument if the item's
 *   is a Plain unicode string (i.e. kind is string).
 * 
 *   `dataTransferItem.getAsString(callback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsString`
 */
web.DataTransferItem.get_as_string = (function web$DataTransferItem$get_as_string(this$,callback){
return this$.getAsString(callback);
});
/**
 * Method.
 * 
 *   If the item described by the `web.DataTransferItem` is a file,
 *   returns a `file.FileSystemFileEntry` or `file.FileSystemDirectoryEntry`
 *   it. If the item isn't a file, null is returned.
 * 
 *   `DataTransferItem.webkitGetAsEntry();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry`
 */
web.DataTransferItem.webkit_get_as_entry = (function web$DataTransferItem$webkit_get_as_entry(this$){
return this$.webkitGetAsEntry();
});
/**
 * Property.
 * 
 *   The read-only DataTransferItem.kind property returns a `web.DataTransferItem`
 *   the drag data item kind: some text or some file.
 * 
 *   `var itemKind = DataTransferItem.kind;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`
 */
web.DataTransferItem.kind = (function web$DataTransferItem$kind(this$){
return this$.kind();
});
/**
 * Property.
 * 
 *   The read-only DataTransferItem.kind property returns a `web.DataTransferItem`
 *   the drag data item kind: some text or some file.
 * 
 *   `var itemKind = DataTransferItem.kind;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`
 */
web.DataTransferItem.set_kind_BANG_ = (function web$DataTransferItem$set_kind_BANG_(this$,val){
return (this$["kind"] = val);
});
/**
 * Property.
 * 
 *   The read-only DataTransferItem.type property returns the type
 *   of the `web.DataTransferItem` object representing the drag data
 *   The type is a Unicode string generally given by a MIME type,
 *   a MIME type is not required.
 * 
 *   `dataItem.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`
 */
web.DataTransferItem.type = (function web$DataTransferItem$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The read-only DataTransferItem.type property returns the type
 *   of the `web.DataTransferItem` object representing the drag data
 *   The type is a Unicode string generally given by a MIME type,
 *   a MIME type is not required.
 * 
 *   `dataItem.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`
 */
web.DataTransferItem.set_type_BANG_ = (function web$DataTransferItem$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=DataTransferItem.js.map?rel=1565798809742
