// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MessagePort');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The close() method of the `web.MessagePort` interface disconnects
 *   port, so it is no longer active. This stops the flow of messages
 *   that port.
 * 
 *   `port.close()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/close`
 */
web.MessagePort.close = (function web$MessagePort$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The postMessage() method of the `web.MessagePort` interface sends
 *   message from the port, and optionally, transfers ownership of
 *   to other browsing contexts.
 * 
 *   `port.postMessage(message, transferList);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage`
 */
web.MessagePort.post_message = (function web$MessagePort$post_message(this$,message,transfer_list){
return this$.postMessage(message,transfer_list);
});
/**
 * Method.
 * 
 *   The start() method of the `web.MessagePort` interface starts
 *   sending of messages queued on the port. This method is only needed
 *   using `web.EventTarget.addEventListener`; it is implied when
 *   `web.MessageChannel.onmessage`.
 * 
 *   `port.start()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/start`
 */
web.MessagePort.start = (function web$MessagePort$start(this$){
return this$.start();
});
/**
 * Property.
 * 
 *   The onmessage event handler of the `web.MessagePort` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type message is fired on the port — that is, when the port receives
 *   message.
 * 
 *   `channel.onmessage = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage`
 */
web.MessagePort.onmessage = (function web$MessagePort$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage event handler of the `web.MessagePort` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type message is fired on the port — that is, when the port receives
 *   message.
 * 
 *   `channel.onmessage = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage`
 */
web.MessagePort.set_onmessage_BANG_ = (function web$MessagePort$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.MessagePort` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the port—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `port.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessageerror`
 */
web.MessagePort.onmessageerror = (function web$MessagePort$onmessageerror(this$){
return this$.onmessageerror();
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.MessagePort` interface
 *   an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on the port—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `port.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessageerror`
 */
web.MessagePort.set_onmessageerror_BANG_ = (function web$MessagePort$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
});

//# sourceMappingURL=MessagePort.js.map?rel=1565798836476
