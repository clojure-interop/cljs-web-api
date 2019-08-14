// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ServiceWorkerMessageEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ServiceWorkerMessageEvent() constructor creates a new `web.ServiceWorkerMessageEvent` object instance.
 * 
 *   type
 *   A `dom.DOMString` that defines the type of the message event being created.
 *   init Optional
 *   An initialisation object, which should contain the following parameters:
 * 
 *   data: The event's data — this can be any type.
 *   origin: A `dom.DOMString` that defines the origin of the corresponding service worker's environment settings object.
 *   lastEventId: A `dom.DOMString` that defines the last event ID of the event source.
 *   source: The `web.ServiceWorker` or `web.MessagePort` that sent the message.
 *   ports: An array containing the `web.MessagePort` objects connected to the channel sending the message.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ServiceWorkerMessageEvent`
 */
web.ServiceWorkerMessageEvent.constructor$ = ServiceWorkerMessageEvent;
/**
 * Property.
 * 
 *   The data read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns the event's data. It can be any data type.
 * 
 *   `var myData = ServiceWorkerMessageEventInstance.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/data`
 */
web.ServiceWorkerMessageEvent.data = (function web$ServiceWorkerMessageEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns the event's data. It can be any data type.
 * 
 *   `var myData = ServiceWorkerMessageEventInstance.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/data`
 */
web.ServiceWorkerMessageEvent.set_data_BANG_ = (function web$ServiceWorkerMessageEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The lastEventID read-only property of the `web.ServiceWorkerMessageEvent`
 *   represents, in server-sent events, the last event ID of the event
 * 
 *   `var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/lastEventId`
 */
web.ServiceWorkerMessageEvent.last_event_id = (function web$ServiceWorkerMessageEvent$last_event_id(this$){
return this$.lastEventId();
});
/**
 * Property.
 * 
 *   The lastEventID read-only property of the `web.ServiceWorkerMessageEvent`
 *   represents, in server-sent events, the last event ID of the event
 * 
 *   `var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/lastEventId`
 */
web.ServiceWorkerMessageEvent.set_last_event_id_BANG_ = (function web$ServiceWorkerMessageEvent$set_last_event_id_BANG_(this$,val){
return (this$["lastEventId"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns the origin of the service worker's environment settings
 * 
 *   `var myOrigin = ServiceWorkerMessageEventInstance.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/origin`
 */
web.ServiceWorkerMessageEvent.origin = (function web$ServiceWorkerMessageEvent$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns the origin of the service worker's environment settings
 * 
 *   `var myOrigin = ServiceWorkerMessageEventInstance.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/origin`
 */
web.ServiceWorkerMessageEvent.set_origin_BANG_ = (function web$ServiceWorkerMessageEvent$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns an array of `web.MessagePort` objects connected with
 *   message channel the message is being sent through.
 * 
 *   `var myPorts = ServiceWorkerMessageEventInstance.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports`
 */
web.ServiceWorkerMessageEvent.ports = (function web$ServiceWorkerMessageEvent$ports(this$){
return this$.ports();
});
/**
 * Property.
 * 
 *   The ports read-only property of the `web.ServiceWorkerMessageEvent`
 *   returns an array of `web.MessagePort` objects connected with
 *   message channel the message is being sent through.
 * 
 *   `var myPorts = ServiceWorkerMessageEventInstance.ports;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports`
 */
web.ServiceWorkerMessageEvent.set_ports_BANG_ = (function web$ServiceWorkerMessageEvent$set_ports_BANG_(this$,val){
return (this$["ports"] = val);
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.ServiceWorkerMessageEvent`
 *   a reference to the `web.ServiceWorker` object of the associated
 *   worker that sent the message.
 * 
 *   `var mySource = ServiceWorkerMessageEventInstance.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/source`
 */
web.ServiceWorkerMessageEvent.source = (function web$ServiceWorkerMessageEvent$source(this$){
return this$.source();
});
/**
 * Property.
 * 
 *   The source read-only property of the `web.ServiceWorkerMessageEvent`
 *   a reference to the `web.ServiceWorker` object of the associated
 *   worker that sent the message.
 * 
 *   `var mySource = ServiceWorkerMessageEventInstance.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/source`
 */
web.ServiceWorkerMessageEvent.set_source_BANG_ = (function web$ServiceWorkerMessageEvent$set_source_BANG_(this$,val){
return (this$["source"] = val);
});

//# sourceMappingURL=ServiceWorkerMessageEvent.js.map?rel=1565798856927
