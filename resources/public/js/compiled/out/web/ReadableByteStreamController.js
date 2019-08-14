// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReadableByteStreamController');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReadableByteStreamController() constructor creates and returns a ReadableByteStreamController() object instance.
 * 
 *   stream
 *   The `web.ReadableStream` to be controlled.
 *   underlyingSource
 *   An object containing methods and properties that define how the constructed stream instance will behave. See the ReadableStream() constructor's parameters definitions for more information.
 *   highWaterMark
 *   A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/ReadableByteStreamController`
 */
web.ReadableByteStreamController.constructor$ = ReadableByteStreamController;
/**
 * Method.
 * 
 *   The close() method of the `web.ReadableByteStreamController`
 *   closes the associated stream.
 * 
 *   `readableByteStreamControllerInstance.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/close`
 */
web.ReadableByteStreamController.close = (function web$ReadableByteStreamController$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The enqueue() method of the `web.ReadableByteStreamController`
 *   enqueues a given chunk in the associated stream.
 * 
 *   `readableByteStreamControllerInstance.enqueue(chunk);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/enqueue`
 */
web.ReadableByteStreamController.enqueue = (function web$ReadableByteStreamController$enqueue(this$,chunk){
return this$.enqueue(chunk);
});
/**
 * Method.
 * 
 *   The error() method of the `web.ReadableByteStreamController`
 *   causes any future interactions with the associated stream to
 * 
 *   `readableByteStreamControllerInstance.error(e);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/error`
 */
web.ReadableByteStreamController.error = (function web$ReadableByteStreamController$error(this$,e){
return this$.error(e);
});
/**
 * Property.
 * 
 *   The byobRequest getter property of the `web.ReadableByteStreamController`
 *   returns the current BYOB pull request.
 * 
 *   `var request = readableByteStreamControllerInstance.byobRequest;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest`
 */
web.ReadableByteStreamController.byob_request = (function web$ReadableByteStreamController$byob_request(this$){
return this$.byobRequest();
});
/**
 * Property.
 * 
 *   The byobRequest getter property of the `web.ReadableByteStreamController`
 *   returns the current BYOB pull request.
 * 
 *   `var request = readableByteStreamControllerInstance.byobRequest;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest`
 */
web.ReadableByteStreamController.set_byob_request_BANG_ = (function web$ReadableByteStreamController$set_byob_request_BANG_(this$,val){
return (this$["byobRequest"] = val);
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.ReadableByteStreamController`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = readableByteStreamControllerInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/desiredSize`
 */
web.ReadableByteStreamController.desired_size = (function web$ReadableByteStreamController$desired_size(this$){
return this$.desiredSize();
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.ReadableByteStreamController`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = readableByteStreamControllerInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/desiredSize`
 */
web.ReadableByteStreamController.set_desired_size_BANG_ = (function web$ReadableByteStreamController$set_desired_size_BANG_(this$,val){
return (this$["desiredSize"] = val);
});

//# sourceMappingURL=ReadableByteStreamController.js.map?rel=1565798801901
