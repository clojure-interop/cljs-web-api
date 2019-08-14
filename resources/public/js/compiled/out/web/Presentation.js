// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Presentation');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   In a controlling user agent, the defaultRequest attribute MUST
 *   the default presentation request if any, otherwise null. In a
 *   browsing context, it MUST return null.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/defaultRequest`
 */
web.Presentation.default_request = (function web$Presentation$default_request(this$){
return this$.defaultRequest();
});
/**
 * Property.
 * 
 *   In a controlling user agent, the defaultRequest attribute MUST
 *   the default presentation request if any, otherwise null. In a
 *   browsing context, it MUST return null.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/defaultRequest`
 */
web.Presentation.set_default_request_BANG_ = (function web$Presentation$set_default_request_BANG_(this$,val){
return (this$["defaultRequest"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.Presentation` attribute receiver, which is
 *   available in browser contexts which are receiving a presentation,
 *   the `web.PresentationReceiver` object which can be used to access
 *   communicate with the browser context which controls the presentation.
 *   property is always null when accessed from outside a browser
 *   which is receiving a presentation.
 * 
 *   `receiver = Presentation.receiver;
 * 
 *   receiver = navigator.presentation.receiver;
 * 
 *   Since the `web.Presentation` interface is typically accessed through `web.navigation.presentation`, the second form of the syntax shown above is the more commonly used.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/receiver`
 */
web.Presentation.receiver = (function web$Presentation$receiver(this$){
return this$.receiver();
});

//# sourceMappingURL=Presentation.js.map?rel=1565798853663
