// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PushEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PushEvent() constructor creates a new `web.PushEvent` object. Note that the this constructor is exposed only to a service worker context.
 * 
 *   type
 *   \tA `dom.DOMString` defining the type of PushEvent. This can be push or pushsubscriptionchange.
 *   \teventInitDict Optional
 *   \tAn options object containing any initialization data you want to populate the PushEvent object with. The options are:
 * 
 *   \t\tdata: The data you want the PushEvent to contain, if any. When the constructor is invoked, the `web.PushEvent.data` property of the resulting object will be set to a new `web.PushMessageData` object containing bytes extracted from the eventInitDict data member.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/PushEvent`
 */
web.PushEvent.constructor$ = PushEvent;
/**
 * Property.
 * 
 *   The data read-only property of the PushEvent interface returns
 *   reference to a `web.PushMessageData` object containing data sent
 *   the `web.PushSubscription`.
 * 
 *   `var myPushData = PushEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data`
 */
web.PushEvent.data = (function web$PushEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the PushEvent interface returns
 *   reference to a `web.PushMessageData` object containing data sent
 *   the `web.PushSubscription`.
 * 
 *   `var myPushData = PushEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data`
 */
web.PushEvent.set_data_BANG_ = (function web$PushEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});

//# sourceMappingURL=PushEvent.js.map?rel=1565798812174
