// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ExtendableMessageEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ExtendableMessageEvent() constructor creates a new `web.ExtendableMessageEvent` object instance.
 * 
 *   type
 *   A `dom.DOMString` that defines the type of the message event being created.
 *   init Optional
 *   An initialisation object, which should contain the following parameters:
 * 
 *   data: The event's data — this can be any type.
 *   origin: A `dom.DOMString` that defines the origin of the corresponding service worker's environment settings object.
 *   lastEventId: A `dom.DOMString` that defines the last event ID of the event source.
 *   source: The `web.Client`, `web.ServiceWorker` or `web.MessagePort` that sent the message.
 *   ports: An array containing the `web.MessagePort` objects connected to the channel sending the message.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ExtendableMessageEvent`
 */
web.ExtendableMessageEvent.constructor$ = ExtendableMessageEvent;
/**
 * Property.
 * 
 *   The data read-only property of the `web.ExtendableMessageEvent`
 *   returns the event's data. It can be any data type.
 * 
 *   `var myData = ExtendableMessageEventInstance.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/data`
 */
web.ExtendableMessageEvent.data = (function web$ExtendableMessageEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.ExtendableMessageEvent`
 *   returns the event's data. It can be any data type.
 * 
 *   `var myData = ExtendableMessageEventInstance.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/data`
 */
web.ExtendableMessageEvent.set_data_BANG_ = (function web$ExtendableMessageEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The lastEventID read-only property of the `web.ExtendableMessageEvent`
 *   represents, in server-sent events, the last event ID of the event
 * 
 *   `var myLastEventId = ExtendableMessageEventInstance.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/lastEventId`
 */
web.ExtendableMessageEvent.last_event_id = (function web$ExtendableMessageEvent$last_event_id(this$){
return this$.lastEventId();
});
/**
 * Property.
 * 
 *   The lastEventID read-only property of the `web.ExtendableMessageEvent`
 *   represents, in server-sent events, the last event ID of the event
 * 
 *   `var myLastEventId = ExtendableMessageEventInstance.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/lastEventId`
 */
web.ExtendableMessageEvent.set_last_event_id_BANG_ = (function web$ExtendableMessageEvent$set_last_event_id_BANG_(this$,val){
return (this$["lastEventId"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.ExtendableMessageEvent`
 *   returns the origin of the `web.ServiceWorkerClient` that sent
 *   message.
 * 
 *   `var myOrigin = ExtendableMessageEventInstance.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/origin`
 */
web.ExtendableMessageEvent.origin = (function web$ExtendableMessageEvent$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.ExtendableMessageEvent`
 *   returns the origin of the `web.ServiceWorkerClient` that sent
 *   message.
 * 
 *   `var myOrigin = ExtendableMessageEventInstance.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/origin`
 */
web.ExtendableMessageEvent.set_origin_BANG_ = (function web$ExtendableMessageEvent$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.ExtendableMessageEvent`
 *   returns the array containing the `web.MessagePort` objects representing
 *   ports of the associated message channel (the channel the message
 *   being sent through.)
 * 
 *   `var myPorts = ExtendableMessageEventInstance.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ports`
 */
web.ExtendableMessageEvent.ports = (function web$ExtendableMessageEvent$ports(this$){
return this$.ports();
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.ExtendableMessageEvent`
 *   returns the array containing the `web.MessagePort` objects representing
 *   ports of the associated message channel (the channel the message
 *   being sent through.)
 * 
 *   `var myPorts = ExtendableMessageEventInstance.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ports`
 */
web.ExtendableMessageEvent.set_ports_BANG_ = (function web$ExtendableMessageEvent$set_ports_BANG_(this$,val){
return (this$["ports"] = val);
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.ExtendableMessageEvent`
 *   a reference to the `web.Client` object from which the message
 *   sent.
 * 
 *   `var mySource = ExtendableMessageEventInstance.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/source`
 */
web.ExtendableMessageEvent.source = (function web$ExtendableMessageEvent$source(this$){
return this$.source();
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.ExtendableMessageEvent`
 *   a reference to the `web.Client` object from which the message
 *   sent.
 * 
 *   `var mySource = ExtendableMessageEventInstance.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/source`
 */
web.ExtendableMessageEvent.set_source_BANG_ = (function web$ExtendableMessageEvent$set_source_BANG_(this$,val){
return (this$["source"] = val);
});

//# sourceMappingURL=ExtendableMessageEvent.js.map?rel=1565798857712
