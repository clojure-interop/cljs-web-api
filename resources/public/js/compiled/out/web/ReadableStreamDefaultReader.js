// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReadableStreamDefaultReader');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReadableStreamDefaultReader() constructor creates and returns a ReadableStreamDefaultReader() object instance.
 * 
 *   stream
 *   The `web.ReadableStream` to be read.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader`
 */
web.ReadableStreamDefaultReader.constructor$ = ReadableStreamDefaultReader;
/**
 * Method.
 * 
 *   The cancel() method of the `web.ReadableStreamDefaultReader`
 *   cancels the stream, signaling a loss of interest in the stream
 *   a consumer. The supplied reason argument will be given to the
 *   source, which may or may not use it.
 * 
 *   `Promise<reason> readableStreamDefaultReaderInstance.cancel(reason);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel`
 */
web.ReadableStreamDefaultReader.cancel = (function web$ReadableStreamDefaultReader$cancel(this$,reason){
return this$.cancel(reason);
});
/**
 * Method.
 * 
 *   The read() method of the `web.ReadableStreamDefaultReader` interface
 *   a promise providing access to the next chunk in the stream's
 *   queue.
 * 
 *   `Promise<result> readableStreamDefaultReaderInstance.read();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read`
 */
web.ReadableStreamDefaultReader.read = (function web$ReadableStreamDefaultReader$read(this$){
return this$.read();
});
/**
 * Method.
 * 
 *   The releaseLock() method of the `web.ReadableStreamDefaultReader`
 *   releases the reader's lock on the stream.
 * 
 *   `readableStreamDefaultReaderInstance.releaseLock();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock`
 */
web.ReadableStreamDefaultReader.release_lock = (function web$ReadableStreamDefaultReader$release_lock(this$){
return this$.releaseLock();
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.ReadableStream` interface
 *   a promise that fulfills if the stream becomes closed or the reader's
 *   is released, or rejects if the stream errors.
 * 
 *   `var closed = readableStreamDefaultReaderInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/closed`
 */
web.ReadableStreamDefaultReader.closed = (function web$ReadableStreamDefaultReader$closed(this$){
return this$.closed();
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.ReadableStream` interface
 *   a promise that fulfills if the stream becomes closed or the reader's
 *   is released, or rejects if the stream errors.
 * 
 *   `var closed = readableStreamDefaultReaderInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/closed`
 */
web.ReadableStreamDefaultReader.set_closed_BANG_ = (function web$ReadableStreamDefaultReader$set_closed_BANG_(this$,val){
return (this$["closed"] = val);
});

//# sourceMappingURL=ReadableStreamDefaultReader.js.map?rel=1565798812951
