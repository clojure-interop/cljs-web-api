// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WritableStreamDefaultWriter');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WritableStreamDefaultWriter() constructor creates a new `web.WritableStreamDefaultWriter` object instance.
 * 
 *   stream
 *   \tThe `web.WritableStream` to be written to.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter`
 */
web.WritableStreamDefaultWriter.constructor$ = WritableStreamDefaultWriter;
/**
 * Method.
 * 
 *   The abort() method of the `web.WritableStreamDefaultWriter` interface
 *   the stream, signaling that the producer can no longer successfully
 *   to the stream and it is to be immediately moved to an error state,
 *   any queued writes discarded.
 * 
 *   `Promise<reason> writableStreamDefaultWriterInstance.abort(reason);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/abort`
 */
web.WritableStreamDefaultWriter.abort = (function web$WritableStreamDefaultWriter$abort(this$,reason){
return this$.abort(reason);
});
/**
 * Method.
 * 
 *   The close() method of the `web.WritableStreamDefaultWriter` interface
 *   the associated writable stream.
 * 
 *   `Promise<undefined> writableStreamDefaultWriterInstance.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/close`
 */
web.WritableStreamDefaultWriter.close = (function web$WritableStreamDefaultWriter$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The ready getter property of the `web.WritableStreamDefaultWriter`
 *   returns a `web.Promise` that resolves when the desired size of
 *   stream's internal queue transitions from non-positive to positive,
 *   that it is no longer applying backpressure.
 * 
 *   `var promise = defaultWriter.ready`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/ready`
 */
web.WritableStreamDefaultWriter.ready = (function web$WritableStreamDefaultWriter$ready(this$){
return this$.ready();
});
/**
 * Method.
 * 
 *   The releaseLock() method of the `web.WritableStreamDefaultWriter`
 *   releases the writer's lock on the corresponding stream. After
 *   lock is released, the writer is no longer active. If the associated
 *   is errored when the lock is released, the writer will appear
 *   in the same way from now on; otherwise, the writer will appear
 * 
 *   `writableStreamDefaultWriterInstance.releaseLock()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/releaseLock`
 */
web.WritableStreamDefaultWriter.release_lock = (function web$WritableStreamDefaultWriter$release_lock(this$){
return this$.releaseLock();
});
/**
 * Method.
 * 
 *   The write() property of the `web.WritableStreamDefaultWriter`
 *   writes a passed chunk of data to a `web.WritableStream` and its
 *   sink, then returns a `web.Promise` that resolves to indicate
 *   success or failure of the write operation.
 * 
 *   `Promise<> = defaultWriter.write(chunk)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/write`
 */
web.WritableStreamDefaultWriter.write = (function web$WritableStreamDefaultWriter$write(this$,chunk){
return this$.write(chunk);
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.WritableStreamDefaultWriter`
 *   returns a promise that fulfills if the stream becomes closed
 *   the writer's lock is released, or rejects if the stream errors.
 * 
 *   `var closed = writableStreamDefaultWriterInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/closed`
 */
web.WritableStreamDefaultWriter.closed = (function web$WritableStreamDefaultWriter$closed(this$){
return this$.closed();
});
/**
 * Property.
 * 
 *   The closed getter property of the `web.WritableStreamDefaultWriter`
 *   returns a promise that fulfills if the stream becomes closed
 *   the writer's lock is released, or rejects if the stream errors.
 * 
 *   `var closed = writableStreamDefaultWriterInstance.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/closed`
 */
web.WritableStreamDefaultWriter.set_closed_BANG_ = (function web$WritableStreamDefaultWriter$set_closed_BANG_(this$,val){
return (this$["closed"] = val);
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.WritableStreamDefaultWriter`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = writableStreamDefaultWriterInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/desiredSize`
 */
web.WritableStreamDefaultWriter.desired_size = (function web$WritableStreamDefaultWriter$desired_size(this$){
return this$.desiredSize();
});
/**
 * Property.
 * 
 *   The desiredSize getter property of the `web.WritableStreamDefaultWriter`
 *   returns the desired size required to fill the stream's internal
 * 
 *   `var desiredSize = writableStreamDefaultWriterInstance.desiredSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/desiredSize`
 */
web.WritableStreamDefaultWriter.set_desired_size_BANG_ = (function web$WritableStreamDefaultWriter$set_desired_size_BANG_(this$,val){
return (this$["desiredSize"] = val);
});

//# sourceMappingURL=WritableStreamDefaultWriter.js.map?rel=1565798803753
