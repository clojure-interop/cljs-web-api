// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WebSocket');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WebSocket() constructor returns a new `web.WebSocket` object.
 * 
 *   url
 *   The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 *   protocols Optional
 *   Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified protocol). If you don't specify a protocol string, an empty string is assumed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket`
 */
web.WebSocket.constructor$ = WebSocket;
/**
 * Method.
 * 
 *   The WebSocket.close() method closes the `web.WebSocket` connection
 *   connection attempt, if any. If the connection is already CLOSED,
 *   method does nothing.
 * 
 *   `WebSocket.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close`
 */
web.WebSocket.close = (function web$WebSocket$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The WebSocket.send() method enqueues the specified data to be
 *   to the server over the WebSocket connection, increasing the value
 *   bufferedAmount by the number of bytes needed to contain the data.
 *   the data can't be sent (for example, because it needs to be buffered
 *   the buffer is full), the socket is closed automatically.
 * 
 *   `WebSocket.send(\"Hello server!\");`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send`
 */
web.WebSocket.send = (function web$WebSocket$send(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43363 = arguments.length;
var i__42557__auto___43364 = (0);
while(true){
if((i__42557__auto___43364 < len__42556__auto___43363)){
args__42563__auto__.push((arguments[i__42557__auto___43364]));

var G__43365 = (i__42557__auto___43364 + (1));
i__42557__auto___43364 = G__43365;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WebSocket.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WebSocket.send.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.send,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WebSocket.send.cljs$lang$maxFixedArity = (1);

web.WebSocket.send.cljs$lang$applyTo = (function (seq43361){
var G__43362 = cljs.core.first.call(null,seq43361);
var seq43361__$1 = cljs.core.next.call(null,seq43361);
return web.WebSocket.send.cljs$core$IFn$_invoke$arity$variadic(G__43362,seq43361__$1);
});

/**
 * Property.
 * 
 *   The WebSocket.binaryType property returns the type of binary
 *   being transmitted by the connection.
 * 
 *   `var binaryType = aWebSocket.binaryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/binaryType`
 */
web.WebSocket.binary_type = (function web$WebSocket$binary_type(this$){
return this$.binaryType();
});
/**
 * Property.
 * 
 *   The WebSocket.binaryType property returns the type of binary
 *   being transmitted by the connection.
 * 
 *   `var binaryType = aWebSocket.binaryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/binaryType`
 */
web.WebSocket.set_binary_type_BANG_ = (function web$WebSocket$set_binary_type_BANG_(this$,val){
return (this$["binaryType"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.bufferedAmount read-only property returns the number
 *   bytes of data that have been queued using calls to send() but
 *   yet transmitted to the network. This value resets to zero once
 *   queued data has been sent. This value does not reset to zero
 *   the connection is closed; if you keep calling send(), this will
 *   to climb.
 * 
 *   `var bufferedAmount = aWebSocket.bufferedAmount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount`
 */
web.WebSocket.buffered_amount = (function web$WebSocket$buffered_amount(this$){
return this$.bufferedAmount();
});
/**
 * Property.
 * 
 *   The WebSocket.bufferedAmount read-only property returns the number
 *   bytes of data that have been queued using calls to send() but
 *   yet transmitted to the network. This value resets to zero once
 *   queued data has been sent. This value does not reset to zero
 *   the connection is closed; if you keep calling send(), this will
 *   to climb.
 * 
 *   `var bufferedAmount = aWebSocket.bufferedAmount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount`
 */
web.WebSocket.set_buffered_amount_BANG_ = (function web$WebSocket$set_buffered_amount_BANG_(this$,val){
return (this$["bufferedAmount"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.extensions read-only property returns the extensions
 *   by the server. This is currently only the empty string or a list
 *   extensions as negotiated by the connection.
 * 
 *   `var extensions = aWebSocket.extensions;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/extensions`
 */
web.WebSocket.extensions = (function web$WebSocket$extensions(this$){
return this$.extensions();
});
/**
 * Property.
 * 
 *   The WebSocket.extensions read-only property returns the extensions
 *   by the server. This is currently only the empty string or a list
 *   extensions as negotiated by the connection.
 * 
 *   `var extensions = aWebSocket.extensions;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/extensions`
 */
web.WebSocket.set_extensions_BANG_ = (function web$WebSocket$set_extensions_BANG_(this$,val){
return (this$["extensions"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.onclose property is an `web.EventHandler` that
 *   called when the WebSocket connection's `web.readyState` changes
 *   `web.CLOSED`. It is called with a `web.CloseEvent`.
 * 
 *   `aWebSocket.onclose = function(event) {
 *   console.log(\"WebSocket is closed now.\");
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onclose`
 */
web.WebSocket.onclose = (function web$WebSocket$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The WebSocket.onclose property is an `web.EventHandler` that
 *   called when the WebSocket connection's `web.readyState` changes
 *   `web.CLOSED`. It is called with a `web.CloseEvent`.
 * 
 *   `aWebSocket.onclose = function(event) {
 *   console.log(\"WebSocket is closed now.\");
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onclose`
 */
web.WebSocket.set_onclose_BANG_ = (function web$WebSocket$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The `web.WebSocket` interface's onerror event handler property
 *   a function which gets called when an error occurs on the WebSocket.
 * 
 *   `webSocket.onerror = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onerror`
 */
web.WebSocket.onerror = (function web$WebSocket$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The `web.WebSocket` interface's onerror event handler property
 *   a function which gets called when an error occurs on the WebSocket.
 * 
 *   `webSocket.onerror = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onerror`
 */
web.WebSocket.set_onerror_BANG_ = (function web$WebSocket$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.onmessage property is an `web.EventHandler` that
 *   called when a message is received from the server. It is called
 *   a `web.MessageEvent`.
 * 
 *   `aWebSocket.onmessage = function(event) {
 *   console.debug(\"WebSocket message received:\", event);
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage`
 */
web.WebSocket.onmessage = (function web$WebSocket$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The WebSocket.onmessage property is an `web.EventHandler` that
 *   called when a message is received from the server. It is called
 *   a `web.MessageEvent`.
 * 
 *   `aWebSocket.onmessage = function(event) {
 *   console.debug(\"WebSocket message received:\", event);
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage`
 */
web.WebSocket.set_onmessage_BANG_ = (function web$WebSocket$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.onopen property is an `web.EventHandler` that is
 *   when the `web.WebSocket` connection's `web.readyState` changes
 *   `web.OPEN`; this indicates that the connection is ready to send
 *   receive data. It is called with an `web.Event`.
 * 
 *   `aWebSocket.onopen = function(event) {
 *   console.log(\"WebSocket is open now.\");
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onopen`
 */
web.WebSocket.onopen = (function web$WebSocket$onopen(this$){
return this$.onopen();
});
/**
 * Property.
 * 
 *   The WebSocket.onopen property is an `web.EventHandler` that is
 *   when the `web.WebSocket` connection's `web.readyState` changes
 *   `web.OPEN`; this indicates that the connection is ready to send
 *   receive data. It is called with an `web.Event`.
 * 
 *   `aWebSocket.onopen = function(event) {
 *   console.log(\"WebSocket is open now.\");
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onopen`
 */
web.WebSocket.set_onopen_BANG_ = (function web$WebSocket$set_onopen_BANG_(this$,val){
return (this$["onopen"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.protocol read-only property returns the name of
 *   sub-protocol the server selected; this will be one of the strings
 *   in the protocols parameter when creating the `web.WebSocket`
 *   or the empty string if no connection is established.
 * 
 *   `var protocol = aWebSocket.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol`
 */
web.WebSocket.protocol = (function web$WebSocket$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The WebSocket.protocol read-only property returns the name of
 *   sub-protocol the server selected; this will be one of the strings
 *   in the protocols parameter when creating the `web.WebSocket`
 *   or the empty string if no connection is established.
 * 
 *   `var protocol = aWebSocket.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol`
 */
web.WebSocket.set_protocol_BANG_ = (function web$WebSocket$set_protocol_BANG_(this$,val){
return (this$["protocol"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.readyState read-only property returns the current
 *   of the `web.WebSocket` connection.
 * 
 *   `var readyState = aWebSocket.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState`
 */
web.WebSocket.ready_state = (function web$WebSocket$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The WebSocket.readyState read-only property returns the current
 *   of the `web.WebSocket` connection.
 * 
 *   `var readyState = aWebSocket.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState`
 */
web.WebSocket.set_ready_state_BANG_ = (function web$WebSocket$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The WebSocket.url read-only property returns the absolute URL
 *   the `web.WebSocket` as resolved by the constructor.
 * 
 *   `var url = aWebSocket.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/url`
 */
web.WebSocket.url = (function web$WebSocket$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The WebSocket.url read-only property returns the absolute URL
 *   the `web.WebSocket` as resolved by the constructor.
 * 
 *   `var url = aWebSocket.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/url`
 */
web.WebSocket.set_url_BANG_ = (function web$WebSocket$set_url_BANG_(this$,val){
return (this$["url"] = val);
});

//# sourceMappingURL=WebSocket.js.map?rel=1565798805900
