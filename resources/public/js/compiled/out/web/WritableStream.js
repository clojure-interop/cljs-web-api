// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WritableStream');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WritableStream() constructor creates a new `web.WritableStream` object instance.
 * 
 *   underlyingSink
 *   \tAn object containing methods and properties that define how the constructed stream instance will behave. underlyingSink can contain the following:
 * 
 *   \t\tstart(controller) Optional
 *   \t\tThis is a method, called immediately when the object is constructed. The contents of this method are defined by the developer, and should aim to get access to the underlying sink. If this process is to be done asynchronously, it can return a promise to signal success or failure. The controller parameter passed to this method is a `web.WritableStreamDefaultController`. This can be used by the developer to control the stream during set up.
 *   \t\twrite(chunk, controller) Optional
 *   \t\tThis method, also defined by the developer, will be called when a new chunk of data (specified in the chunk parameter) is ready to be written to the underlying sink. It can return a promise to signal success or failure of the write operation. The controller parameter passed to this method is a `web.WritableStreamDefaultController` that can be used by the developer to control the stream as more chunks are submitted for writing. This method will be called only after previous writes have succeeded, and never after the stream is closed or aborted (see below).
 *   \t\tclose(controller) Optional
 *   \t\tThis method, also defined by the developer, will be called if the app signals that it has finished writing chunks to the stream. The contents should do whatever is necessary to finalize writes to the underlying sink, and release access to it. If this process is asynchronous, it can return a promise to signal success or failure. This method will be called only after all queued-up writes have succeeded. The controller parameter passed to this method is a `web.WritableStreamDefaultController`, which can be used to control the stream at the end of writing.
 *   \t\tabort(reason) Optional
 *   \t\tThis method, also defined by the developer, will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state. It can clean up any held resources, much like close(), but abort() will be called even if writes are queued up — those chunks will be thrown away. If this process is asynchronous, it can return a promise to signal success or failure. The reason parameter contains a `dom.DOMString` describing why the stream was aborted.
 * 
 * 
 *   \tqueuingStrategy Optional
 *   \tAn object that optionally defines a queueing strategy for the stream. This takes two parameters:
 * 
 *   \t\thighWaterMark
 *   \t\tA non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
 *   \t\tsize(chunk)
 *   \t\tA method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
 * 
 * 
 * 
 *   \tNote: You could define your own custom queuingStrategy, or use an instance of `web.ByteLengthQueueingStrategy` or `web.CountQueueingStrategy` for this object value. If no queuingStrategy is supplied, the default used is the same as a CountQueuingStrategy with a high water mark of 1.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/WritableStream`
 */
web.WritableStream.constructor$ = WritableStream;
/**
 * Method.
 * 
 *   The abort() method of the `web.WritableStream` interface aborts
 *   stream, signaling that the producer can no longer successfully
 *   to the stream and it is to be immediately moved to an error state,
 *   any queued writes discarded.
 * 
 *   `Promise<reason> writableStreamInstance.abort(reason);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/abort`
 */
web.WritableStream.abort = (function web$WritableStream$abort(this$,reason){
return this$.abort(reason);
});
/**
 * Method.
 * 
 *   The getWriter() method of the `web.WritableStream` interface
 *   a new instance of `web.WritableStreamDefaultWriter` and locks
 *   stream to that instance. While the stream is locked, no other
 *   can be acquired until this one is released.
 * 
 *   `var writer = writableStreamInstance.getWriter();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/getWriter`
 */
web.WritableStream.get_writer = (function web$WritableStream$get_writer(this$){
return this$.getWriter();
});
/**
 * Property.
 * 
 *   The locked getter property of the `web.WritableStream` interface
 *   a boolean indicating whether the WritableStream is locked to
 *   writer.
 * 
 *   `var locked = writableStreamInstance.locked;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/locked`
 */
web.WritableStream.locked = (function web$WritableStream$locked(this$){
return this$.locked();
});
/**
 * Property.
 * 
 *   The locked getter property of the `web.WritableStream` interface
 *   a boolean indicating whether the WritableStream is locked to
 *   writer.
 * 
 *   `var locked = writableStreamInstance.locked;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/locked`
 */
web.WritableStream.set_locked_BANG_ = (function web$WritableStream$set_locked_BANG_(this$,val){
return (this$["locked"] = val);
});

//# sourceMappingURL=WritableStream.js.map?rel=1565798811284
