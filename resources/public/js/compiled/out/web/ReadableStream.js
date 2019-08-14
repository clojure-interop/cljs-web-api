// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ReadableStream');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ReadableStream() constructor creates and returns a readable stream object from the given handlers.
 * 
 *   underlyingSource
 *   An object containing methods and properties that define how the constructed stream instance will behave. underlyingSource can contain the following:
 * 
 *   start(controller)
 *   This is a method, called immediately when the object is constructed. The contents of this method are defined by the developer, and should aim to get access to the stream source, and do anything else required to set up the stream fuctionality. If this process is to be done asynchronously, it can return a promise to signal success or failure. The controller parameter passed to this method is a `web.ReadableStreamDefaultController` or a `web.ReadableByteStreamController`, depending on the value of the type property. This can be used by the developer to control the stream during set up.
 *   pull(controller) Optional
 *   This method, also defined by the developer, will be called repeatedly when the stream's internal queue of chunks is not full, up until it reaches its high water mark. If pull() returns a promise, then it won't be called again until that promise fulfills; if the promise rejects, the stream will become errored. The controller parameter passed to this method is a `web.ReadableStreamDefaultController` or a `web.ReadableByteStreamController`, depending on the value of the type property. This can be used by the developer to control the stream as more chunks are fetched.
 *   cancel(reason) Optional
 *   This method, also defined by the developer, will be called if the app signals that the stream is to be cancelled (e.g. if `web.ReadableStream.cancel()` is called). The contents should do whatever is necessary to release access to the stream source. If this process is asynchronous, it can return a promise to signal success or failure. The reason parameter contains a `dom.DOMString` describing why the stream was cancelled.
 *   type Optional
 *   This property controls what type of readable stream is being dealt with. If it is included with a value set to bytes, the passed controller object will be a `web.ReadableByteStreamController` capable of handling a BYOB (bring your own buffer)/byte stream. If it is not included, the passed controller will be a `web.ReadableStreamDefaultController`.
 *   autoAllocateChunkSize Optional
 *   For byte streams, the developer can set the autoAllocateChunkSize with a positive integer value to turn on the stream's auto-allocation feature. With this turned on, the stream implementation will automatically allocate an `web.ArrayBuffer` with a size of the given integer, and call the underlying source code as if the consumer was using a BYOB reader.
 * 
 * 
 *   queueingStrategy Optional
 *   An object that optionally defines a queueing strategy for the stream. This takes two parameters:
 * 
 *   highWaterMark
 *   A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
 *   size(chunk)
 *   A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
 * 
 * 
 * 
 *   Note: You could define your own custom queueingStrategy, or use an instance of `web.ByteLengthQueueingStrategy` or `web.CountQueueingStrategy` for this object value. If no queueingStrategy is supplied, the default used is the same as a CountQueuingStrategy with a high water mark of 1.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream`
 */
web.ReadableStream.constructor$ = ReadableStream;
/**
 * Method.
 * 
 *   The cancel() method of the `web.ReadableStream` interface cancels
 *   associated stream. The supplied reason parameter will be given
 *   the underlying source, which may or may not use it.
 * 
 *   `Promise<reason> readableStreamInstance.cancel(reason);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/cancel`
 */
web.ReadableStream.cancel = (function web$ReadableStream$cancel(this$,reason){
return this$.cancel(reason);
});
/**
 * Method.
 * 
 *   The getReader() method of the `web.ReadableStream` interface
 *   a reader and locks the stream to it. While the stream is locked,
 *   other reader can be acquired until this one is released.
 * 
 *   `var reader = readableStreamInstance.getReader({mode});`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader`
 */
web.ReadableStream.get_reader = (function web$ReadableStream$get_reader(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53078 = arguments.length;
var i__42557__auto___53079 = (0);
while(true){
if((i__42557__auto___53079 < len__42556__auto___53078)){
args__42563__auto__.push((arguments[i__42557__auto___53079]));

var G__53080 = (i__42557__auto___53079 + (1));
i__42557__auto___53079 = G__53080;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ReadableStream.get_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ReadableStream.get_reader.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getReader,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ReadableStream.get_reader.cljs$lang$maxFixedArity = (1);

web.ReadableStream.get_reader.cljs$lang$applyTo = (function (seq53076){
var G__53077 = cljs.core.first.call(null,seq53076);
var seq53076__$1 = cljs.core.next.call(null,seq53076);
return web.ReadableStream.get_reader.cljs$core$IFn$_invoke$arity$variadic(G__53077,seq53076__$1);
});

/**
 * Method.
 * 
 *   The pipeThrough() method of the `web.ReadableStream` interface
 *   a chainable way of piping the current stream through a transform
 *   or any other writable/readable pair.
 * 
 *   `ReadableStream readableStreamInstance.pipeThrough(transformStream[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough`
 */
web.ReadableStream.pipe_through = (function web$ReadableStream$pipe_through(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53083 = arguments.length;
var i__42557__auto___53084 = (0);
while(true){
if((i__42557__auto___53084 < len__42556__auto___53083)){
args__42563__auto__.push((arguments[i__42557__auto___53084]));

var G__53085 = (i__42557__auto___53084 + (1));
i__42557__auto___53084 = G__53085;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ReadableStream.pipe_through.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ReadableStream.pipe_through.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.pipeThrough,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ReadableStream.pipe_through.cljs$lang$maxFixedArity = (1);

web.ReadableStream.pipe_through.cljs$lang$applyTo = (function (seq53081){
var G__53082 = cljs.core.first.call(null,seq53081);
var seq53081__$1 = cljs.core.next.call(null,seq53081);
return web.ReadableStream.pipe_through.cljs$core$IFn$_invoke$arity$variadic(G__53082,seq53081__$1);
});

/**
 * Method.
 * 
 *   The pipeTo() method of the `web.ReadableStream` interface pipes
 *   current ReadableStream to a given `web.WritableStream` and returns
 *   promise that fulfills when the piping process completes successfully,
 *   rejects if any errors were encountered.
 * 
 *   `Promise<void> readableStreamInstance.pipeTo(destination[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeTo`
 */
web.ReadableStream.pipe_to = (function web$ReadableStream$pipe_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53088 = arguments.length;
var i__42557__auto___53089 = (0);
while(true){
if((i__42557__auto___53089 < len__42556__auto___53088)){
args__42563__auto__.push((arguments[i__42557__auto___53089]));

var G__53090 = (i__42557__auto___53089 + (1));
i__42557__auto___53089 = G__53090;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ReadableStream.pipe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ReadableStream.pipe_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.pipeTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ReadableStream.pipe_to.cljs$lang$maxFixedArity = (1);

web.ReadableStream.pipe_to.cljs$lang$applyTo = (function (seq53086){
var G__53087 = cljs.core.first.call(null,seq53086);
var seq53086__$1 = cljs.core.next.call(null,seq53086);
return web.ReadableStream.pipe_to.cljs$core$IFn$_invoke$arity$variadic(G__53087,seq53086__$1);
});

/**
 * Method.
 * 
 *   The tee() method of the `web.ReadableStream` interface tees the
 *   readable stream, returning a two-element array containing the
 *   resulting branches as new `web.ReadableStream` instances.
 * 
 *   `readableStreamInstance.tee();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee`
 */
web.ReadableStream.tee = (function web$ReadableStream$tee(this$){
return this$.tee();
});
/**
 * Property.
 * 
 *   The locked getter property of the `web.ReadableStream` interface
 *   whether or not the readable stream is locked to a reader.
 * 
 *   `var locked = readableStreamInstance.locked;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/locked`
 */
web.ReadableStream.locked = (function web$ReadableStream$locked(this$){
return this$.locked();
});
/**
 * Property.
 * 
 *   The locked getter property of the `web.ReadableStream` interface
 *   whether or not the readable stream is locked to a reader.
 * 
 *   `var locked = readableStreamInstance.locked;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/locked`
 */
web.ReadableStream.set_locked_BANG_ = (function web$ReadableStream$set_locked_BANG_(this$,val){
return (this$["locked"] = val);
});

//# sourceMappingURL=ReadableStream.js.map?rel=1565798862102
