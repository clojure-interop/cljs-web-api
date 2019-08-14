// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WritableStreamDefaultController');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WritableStreamDefaultController() constructor creates and returns a WritableStreamDefaultController() object instance.
 * 
 *   stream
 *   The `web.WritableStream` to be controlled.
 *   underlyingSink
 *   An object containing methods and properties that define how the constructed stream instance will behave. See the `web.WritableStream()` for more information.
 *   size
 *   A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
 *   highWaterMark
 *   A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/WritableStreamDefaultController`
 */
web.WritableStreamDefaultController.constructor$ = WritableStreamDefaultController;
/**
 * Method.
 * 
 *   The error() method of the `web.WritableStreamDefaultController`
 *   causes any future interactions with the associated stream to
 * 
 *   `writableStreamDefaultControllerInstance.error(e);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/error`
 */
web.WritableStreamDefaultController.error = (function web$WritableStreamDefaultController$error(this$,e){
return this$.error(e);
});

//# sourceMappingURL=WritableStreamDefaultController.js.map?rel=1565798851554
