// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FocusEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FocusEvent() constructor returns a newly created `web.FocusEvent` object with an optional `web.EventTarget`. When the event has both a source and a destination, the relatedTarget value must be set to the other target.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent`
 */
web.FocusEvent.constructor$ = FocusEvent;
/**
 * Property.
 * 
 *   The FocusEvent.relatedTarget read-only property represents a
 *   target for this event, which will depend on the event itself.
 *   some cases (like when tabbing in or out of a page), this property
 *   be set to null for security reasons.
 * 
 *   `secondTarget = focusEvent.relatedTarget`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget`
 */
web.FocusEvent.related_target = (function web$FocusEvent$related_target(this$){
return this$.relatedTarget();
});
/**
 * Property.
 * 
 *   The FocusEvent.relatedTarget read-only property represents a
 *   target for this event, which will depend on the event itself.
 *   some cases (like when tabbing in or out of a page), this property
 *   be set to null for security reasons.
 * 
 *   `secondTarget = focusEvent.relatedTarget`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget`
 */
web.FocusEvent.set_related_target_BANG_ = (function web$FocusEvent$set_related_target_BANG_(this$,val){
return (this$["relatedTarget"] = val);
});

//# sourceMappingURL=FocusEvent.js.map?rel=1565798861999
