// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.MessageEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MessageEvent() constructor creates a new `web.MessageEvent` object instance.
 * 
 *   type
 *   The type of MessageEvent that will be created. This can be one of XXX
 * 
 *   init Optional
 * 
 * 
 *   A dictionary object that can contain the following properties:
 * 
 * 
 *   data: The data you want contained in the MessageEvent. This can be of any data type, and will default to null if not specified.
 *   origin: A `web.USVString` representing the origin of the message emitter. This defaults to an empty string (\"\") if not specified.
 *   lastEventId: A `dom.DOMString` representing a unique ID for the event. This defaults to an empty string (\"\") if not specified.
 *   source: An MessageEventSource (which can be a `web.WindowProxy`, `web.MessagePort`, or `web.ServiceWorker` object) representing the message emitter. This defaults to null if not set.
 *   ports: An array of `web.MessagePort` objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker). This defaults to an empty array ([]) if not specified.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/MessageEvent`
 */
web.MessageEvent.constructor$ = MessageEvent;
/**
 * Property.
 * 
 *   The data read-only property of the `web.MessageEvent` interface
 *   the data sent by the message emitter.
 * 
 *   `var data = messageEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data`
 */
web.MessageEvent.data = (function web$MessageEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.MessageEvent` interface
 *   the data sent by the message emitter.
 * 
 *   `var data = messageEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data`
 */
web.MessageEvent.set_data_BANG_ = (function web$MessageEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The lastEventId read-only property of the `web.MessageEvent`
 *   is a `dom.DOMString` representing a unique ID for the event.
 * 
 *   `var myId = messageEvent.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId`
 */
web.MessageEvent.last_event_id = (function web$MessageEvent$last_event_id(this$){
return this$.lastEventId();
});
/**
 * Property.
 * 
 *   The lastEventId read-only property of the `web.MessageEvent`
 *   is a `dom.DOMString` representing a unique ID for the event.
 * 
 *   `var myId = messageEvent.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId`
 */
web.MessageEvent.set_last_event_id_BANG_ = (function web$MessageEvent$set_last_event_id_BANG_(this$,val){
return (this$["lastEventId"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.MessageEvent` interface
 *   a `web.USVString` representing the origin of the message emitter.
 * 
 *   `var origin = messageEvent.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin`
 */
web.MessageEvent.origin = (function web$MessageEvent$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.MessageEvent` interface
 *   a `web.USVString` representing the origin of the message emitter.
 * 
 *   `var origin = messageEvent.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin`
 */
web.MessageEvent.set_origin_BANG_ = (function web$MessageEvent$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.MessageEvent` interface
 *   an array of `web.MessagePort` objects representing the ports
 *   with the channel the message is being sent through (where appropriate,
 *   in channel messaging or when sending a message to a shared worker).
 * 
 *   `var myPorts = messageEvent.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/ports`
 */
web.MessageEvent.ports = (function web$MessageEvent$ports(this$){
return this$.ports();
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.MessageEvent` interface
 *   an array of `web.MessagePort` objects representing the ports
 *   with the channel the message is being sent through (where appropriate,
 *   in channel messaging or when sending a message to a shared worker).
 * 
 *   `var myPorts = messageEvent.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/ports`
 */
web.MessageEvent.set_ports_BANG_ = (function web$MessageEvent$set_ports_BANG_(this$,val){
return (this$["ports"] = val);
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.MessageEvent` interface
 *   a MessageEventSource (which can be a `web.WindowProxy`, `web.MessagePort`,
 *   `web.ServiceWorker` object) representing the message emitter.
 * 
 *   `let mySource = messageEvent.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/source`
 */
web.MessageEvent.source = (function web$MessageEvent$source(this$){
return this$.source();
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.MessageEvent` interface
 *   a MessageEventSource (which can be a `web.WindowProxy`, `web.MessagePort`,
 *   `web.ServiceWorker` object) representing the message emitter.
 * 
 *   `let mySource = messageEvent.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/source`
 */
web.MessageEvent.set_source_BANG_ = (function web$MessageEvent$set_source_BANG_(this$,val){
return (this$["source"] = val);
});

//# sourceMappingURL=MessageEvent.js.map?rel=1565798853472
