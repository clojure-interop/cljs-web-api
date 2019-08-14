// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MessageChannel');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MessageChannel() constructor of the `web.MessageChannel` interface returns a new `web.MessageChannel` object with two new `web.MessagePort` objects.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/MessageChannel`
 */
web.MessageChannel.constructor$ = MessageChannel;
/**
 * Property.
 * 
 *   The port1 read-only property of the `web.MessageChannel` interface
 *   the first port of the message channel — the port attached to
 *   context that originated the channel.
 * 
 *   `channel.port1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port1`
 */
web.MessageChannel.port_1 = (function web$MessageChannel$port_1(this$){
return this$.port1();
});
/**
 * Property.
 * 
 *   The port1 read-only property of the `web.MessageChannel` interface
 *   the first port of the message channel — the port attached to
 *   context that originated the channel.
 * 
 *   `channel.port1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port1`
 */
web.MessageChannel.set_port_1_BANG_ = (function web$MessageChannel$set_port_1_BANG_(this$,val){
return (this$["port1"] = val);
});
/**
 * Property.
 * 
 *   The port2 read-only property of the `web.MessageChannel` interface
 *   the second port of the message channel — the port attached to
 *   context at the other end of the channel, which the message is
 *   sent to.
 * 
 *   `channel.port2;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port2`
 */
web.MessageChannel.port_2 = (function web$MessageChannel$port_2(this$){
return this$.port2();
});
/**
 * Property.
 * 
 *   The port2 read-only property of the `web.MessageChannel` interface
 *   the second port of the message channel — the port attached to
 *   context at the other end of the channel, which the message is
 *   sent to.
 * 
 *   `channel.port2;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port2`
 */
web.MessageChannel.set_port_2_BANG_ = (function web$MessageChannel$set_port_2_BANG_(this$,val){
return (this$["port2"] = val);
});

//# sourceMappingURL=MessageChannel.js.map?rel=1565798825651
