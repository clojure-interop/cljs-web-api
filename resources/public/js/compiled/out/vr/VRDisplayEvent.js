// Compiled by ClojureScript 1.9.946 {}
goog.provide('vr.VRDisplayEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The `vr.VRDisplayEvent` constructor creates a VRDisplayEvent object instance.
 * 
 *   type
 *   \tA `dom.DOMString` describing the type of event object you want to create.
 *   \teventInitDict
 *   \tA object contaning initialization options to use when creating the constructor. These are:
 * 
 *   \t\tdisplay
 *   \t\tA property containing the `vr.VRDisplay` the event is to be associated with.
 *   \t\treason
 *   \t\tA property containing a string representing the human-readable reason why the event is to be fired (see `vr.VRDisplayEvent.reason`).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/VRDisplayEvent`
 */
vr.VRDisplayEvent.constructor$ = VRDisplayEvent;
/**
 * Property.
 * 
 *   The display read-only property of the `vr.VRDisplayEvent` interface
 *   the `vr.VRDisplay` associated with this event.
 * 
 *   `var myDisplay = vrDisplayEventInstance.display;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/display`
 */
vr.VRDisplayEvent.display = (function vr$VRDisplayEvent$display(this$){
return this$.display();
});
/**
 * Property.
 * 
 *   The display read-only property of the `vr.VRDisplayEvent` interface
 *   the `vr.VRDisplay` associated with this event.
 * 
 *   `var myDisplay = vrDisplayEventInstance.display;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/display`
 */
vr.VRDisplayEvent.set_display_BANG_ = (function vr$VRDisplayEvent$set_display_BANG_(this$,val){
return (this$["display"] = val);
});
/**
 * Property.
 * 
 *   The reason read-only property of the `vr.VRDisplayEvent` interface
 *   a human-readable reason why the event was fired.
 * 
 *   `var myReason = vrDisplayEventInstance.reason;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/reason`
 */
vr.VRDisplayEvent.reason = (function vr$VRDisplayEvent$reason(this$){
return this$.reason();
});
/**
 * Property.
 * 
 *   The reason read-only property of the `vr.VRDisplayEvent` interface
 *   a human-readable reason why the event was fired.
 * 
 *   `var myReason = vrDisplayEventInstance.reason;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/reason`
 */
vr.VRDisplayEvent.set_reason_BANG_ = (function vr$VRDisplayEvent$set_reason_BANG_(this$,val){
return (this$["reason"] = val);
});

//# sourceMappingURL=VRDisplayEvent.js.map?rel=1565798859551
