// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileRequest');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The lockedFile property represents the `web.LockedFile` object
 *   which the request was started.
 * 
 *   `var lockedFile = instanceOfFileRequest.lockedFile`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`
 */
file.FileRequest.locked_file = (function file$FileRequest$locked_file(this$){
return this$.lockedFile();
});
/**
 * Property.
 * 
 *   The lockedFile property represents the `web.LockedFile` object
 *   which the request was started.
 * 
 *   `var lockedFile = instanceOfFileRequest.lockedFile`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`
 */
file.FileRequest.set_locked_file_BANG_ = (function file$FileRequest$set_locked_file_BANG_(this$,val){
return (this$["lockedFile"] = val);
});
/**
 * Property.
 * 
 *   This property specifies a callback function to be run repeatedly
 *   the operation represented by a `file.FileRequest` object is in
 * 
 *   `instanceOfFileRequest.onprogress = function;
 * 
 *   Where instanceOfFileRequest is a `file.FileRequest` object and function is the JavaScript function to execute.
 * 
 *   Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:
 * 
 * 
 *   loaded
 *   A number representing the current amount of bytes processed by the operation.
 *   total
 *   A number representing the total amount of bytes that will be processed by the operation.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/onprogress`
 */
file.FileRequest.onprogress = (function file$FileRequest$onprogress(this$){
return this$.onprogress();
});
/**
 * Property.
 * 
 *   This property specifies a callback function to be run repeatedly
 *   the operation represented by a `file.FileRequest` object is in
 * 
 *   `instanceOfFileRequest.onprogress = function;
 * 
 *   Where instanceOfFileRequest is a `file.FileRequest` object and function is the JavaScript function to execute.
 * 
 *   Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:
 * 
 * 
 *   loaded
 *   A number representing the current amount of bytes processed by the operation.
 *   total
 *   A number representing the total amount of bytes that will be processed by the operation.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/onprogress`
 */
file.FileRequest.set_onprogress_BANG_ = (function file$FileRequest$set_onprogress_BANG_(this$,val){
return (this$["onprogress"] = val);
});

//# sourceMappingURL=FileRequest.js.map?rel=1565798853949
