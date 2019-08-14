// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PresentationConnectionAvailableEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PresentationConnectionAvailableInit() constructor creates a new `web.PresentationConnectionAvailableEvent`.
 * 
 *   typeArg
 *   \tA `dom.DOMSTring` giving the name of the event. For this event it should be connectionavailable.
 *   \teventInit
 *   \tA PresentationConnectionAvailableInit dictionary, which only contains a reference to a PresentationConnection object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent`
 */
web.PresentationConnectionAvailableEvent.constructor$ = PresentationConnectionAvailableEvent;
/**
 * Property.
 * 
 *   When an incoming connection is created, a receiving user agent
 *   a trusted event, named connectionavailable, on a PresentationReceiver.
 *   trusted event is fired at the presentation controller's monitor,
 *   the PresentationConnectionAvailableEvent interface, with the
 *   attribute set to the PresentationConnection object that was created.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/connection`
 */
web.PresentationConnectionAvailableEvent.connection = (function web$PresentationConnectionAvailableEvent$connection(this$){
return this$.connection();
});
/**
 * Property.
 * 
 *   When an incoming connection is created, a receiving user agent
 *   a trusted event, named connectionavailable, on a PresentationReceiver.
 *   trusted event is fired at the presentation controller's monitor,
 *   the PresentationConnectionAvailableEvent interface, with the
 *   attribute set to the PresentationConnection object that was created.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/connection`
 */
web.PresentationConnectionAvailableEvent.set_connection_BANG_ = (function web$PresentationConnectionAvailableEvent$set_connection_BANG_(this$,val){
return (this$["connection"] = val);
});

//# sourceMappingURL=PresentationConnectionAvailableEvent.js.map?rel=1565798812724
