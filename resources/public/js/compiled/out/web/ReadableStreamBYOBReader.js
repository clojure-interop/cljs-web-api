// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReadableStreamBYOBReader');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReadableStreamBYOBReader() constructor creates and returns a ReadableStreamBYOBReader() object instance.
 * 
 *   stream
 *   The `web.ReadableStream` to be read.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader`
 */
web.ReadableStreamBYOBReader.constructor$ = ReadableStreamBYOBReader;
/**
 * Method.
 * 
 *   The cancel() method of the `web.ReadableStreamBYOBReader` interface
 *   the stream, signaling a loss of interest in the stream by a consumer.
 *   supplied reason argument will be given to the underlying source,
 *   may or may not use it.
 * 
 *   `Promise<reason> readableStreamBYOBReaderInstance.cancel(reason);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/cancel`
 */
web.ReadableStreamBYOBReader.cancel = (function web$ReadableStreamBYOBReader$cancel(this$,reason){
return this$.cancel(reason);
});
/**
 * Method.
 * 
 *   The read() method of the `web.ReadableStreamBYOBReader` interface
 *   a promise providing access to the next chunk in the byte stream's
 *   queue.
 * 
 *   `Promise<result> readableStreamBYOBReaderInstance.read(view);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/read`
 */
web.ReadableStreamBYOBReader.read = (function web$ReadableStreamBYOBReader$read(this$,view){
return this$.read(view);
});
/**
 * Method.
 * 
 *   The releaseLock() method of the `web.ReadableStreamBYOBReader`
 *   releases the reader's lock on the stream. After the lock is released,
 *   reader is no longer active.
 * 
 *   `readableStreamBYOBReaderInstance.releaseLock();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/releaseLock`
 */
web.ReadableStreamBYOBReader.release_lock = (function web$ReadableStreamBYOBReader$release_lock(this$){
return this$.releaseLock();
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.ReadableStreamBYOBReader`
 *   returns a promise that fulfills if the stream becomes closed
 *   the reader's lock is released, or rejects if the stream errors.
 * 
 *   `var closed = readableStreamBYOBReaderInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/closed`
 */
web.ReadableStreamBYOBReader.closed = (function web$ReadableStreamBYOBReader$closed(this$){
return this$.closed();
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.ReadableStreamBYOBReader`
 *   returns a promise that fulfills if the stream becomes closed
 *   the reader's lock is released, or rejects if the stream errors.
 * 
 *   `var closed = readableStreamBYOBReaderInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/closed`
 */
web.ReadableStreamBYOBReader.set_closed_BANG_ = (function web$ReadableStreamBYOBReader$set_closed_BANG_(this$,val){
return (this$["closed"] = val);
});

//# sourceMappingURL=ReadableStreamBYOBReader.js.map?rel=1565798856116
