// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReadableStreamDefaultController');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReadableStreamDefaultController() constructor creates and returns a ReadableStreamDefaultController() object instance.
 * 
 *   stream
 *   The `web.ReadableStream` to be controlled.
 *   underlyingSource
 *   An object containing methods and properties that define how the constructed stream instance will behave. See the ReadableStream() constructor's parameters definitions for more information.
 *   size
 *   A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
 *   highWaterMark
 *   A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController`
 */
web.ReadableStreamDefaultController.constructor$ = ReadableStreamDefaultController;
/**
 * Method.
 * 
 *   The close() method of the `web.ReadableStreamDefaultController`
 *   closes the associated stream.
 * 
 *   `readableStreamDefaultControllerInstance.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/close`
 */
web.ReadableStreamDefaultController.close = (function web$ReadableStreamDefaultController$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The enqueue() method of the `web.ReadableStreamDefaultController`
 *   enqueues a given chunk in the associated stream.
 * 
 *   `readableStreamDefaultControllerInstance.enqueue(chunk);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/enqueue`
 */
web.ReadableStreamDefaultController.enqueue = (function web$ReadableStreamDefaultController$enqueue(this$,chunk){
return this$.enqueue(chunk);
});
/**
 * Method.
 * 
 *   The error() method of the `web.ReadableStreamDefaultController`
 *   causes any future interactions with the associated stream to
 * 
 *   `readableStreamDefaultControllerInstance.error(e);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/error`
 */
web.ReadableStreamDefaultController.error = (function web$ReadableStreamDefaultController$error(this$,e){
return this$.error(e);
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.ReadableStreamDefaultController`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = readableStreamDefaultControllerInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/desiredSize`
 */
web.ReadableStreamDefaultController.desired_size = (function web$ReadableStreamDefaultController$desired_size(this$){
return this$.desiredSize();
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.ReadableStreamDefaultController`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = readableStreamDefaultControllerInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/desiredSize`
 */
web.ReadableStreamDefaultController.set_desired_size_BANG_ = (function web$ReadableStreamDefaultController$set_desired_size_BANG_(this$,val){
return (this$["desiredSize"] = val);
});

//# sourceMappingURL=ReadableStreamDefaultController.js.map?rel=1565798816982
