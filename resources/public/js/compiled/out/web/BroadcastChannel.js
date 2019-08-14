// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BroadcastChannel');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The BroadcastChannel() constructor creates a new `web.BroadcastChannel` and connects it to the underlying channel.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/BroadcastChannel`
 */
web.BroadcastChannel.constructor$ = BroadcastChannel;
/**
 * Method.
 * 
 *   The BroadcastChannel.close() terminates the connection to the
 *   channel, allowing the object to be garbage collected. This is
 *   necessary step to perform as there is no other way for a browser
 *   know that this channel is not needed anymore.
 * 
 *   `var str = channel.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/close`
 */
web.BroadcastChannel.close = (function web$BroadcastChannel$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The BroadcastChannel.postMessage() sends a message, which can
 *   of any kind of `web.Object`, to each listener in any browsing
 *   with the same origin. The message is transmitted as a message
 *   targeted at each BroadcastChannel bound to the channel.
 * 
 *   `var str = channel.postMessage(object);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/postMessage`
 */
web.BroadcastChannel.post_message = (function web$BroadcastChannel$post_message(this$,object){
return this$.postMessage(object);
});
/**
 * Property.
 * 
 *   The read-only BroadcastChannel.name property returns a `dom.DOMString`,
 *   uniquely identifies the given channel with its name. This name
 *   passed to the `web.BroadcastChannel()` constructor at creation
 *   and is therefore read-only.
 * 
 *   `var str = channel.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/name`
 */
web.BroadcastChannel.name = (function web$BroadcastChannel$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The BroadcastChannel.onmessage event handler is a property that
 *   the function to execute when a message event, of type `web.MessageEvent`,
 *   received by this `web.BroadcastChannel`. Such an event is sent
 *   the browser with a message broadcasted to the channel.
 * 
 *   `channel.onmessage = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessage`
 */
web.BroadcastChannel.onmessage = (function web$BroadcastChannel$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The BroadcastChannel.onmessage event handler is a property that
 *   the function to execute when a message event, of type `web.MessageEvent`,
 *   received by this `web.BroadcastChannel`. Such an event is sent
 *   the browser with a message broadcasted to the channel.
 * 
 *   `channel.onmessage = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessage`
 */
web.BroadcastChannel.set_onmessage_BANG_ = (function web$BroadcastChannel$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.BroadcastChannel`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the BroadcastChannel instance —
 *   is, when it receives a message that cannot be deserialized.
 * 
 *   `bc.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessageerror`
 */
web.BroadcastChannel.onmessageerror = (function web$BroadcastChannel$onmessageerror(this$){
return this$.onmessageerror();
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.BroadcastChannel`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the BroadcastChannel instance —
 *   is, when it receives a message that cannot be deserialized.
 * 
 *   `bc.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessageerror`
 */
web.BroadcastChannel.set_onmessageerror_BANG_ = (function web$BroadcastChannel$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
});

//# sourceMappingURL=BroadcastChannel.js.map?rel=1565798812229
