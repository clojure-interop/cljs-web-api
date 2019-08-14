// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TransitionEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The TransitionEvent() constructor returns a newly created `web.TransitionEvent`, representing an event in relation with an transition.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/TransitionEvent`
 */
web.TransitionEvent.constructor$ = TransitionEvent;
/**
 * Method.
 * 
 *   The TransitionEvent.initTransitionEvent() method Initializes
 *   transition event created using the deprecated `web.Document.createEvent(\"TransitionEvent\")`
 * 
 *   `transitionEvent.initTransitionEvent(typeArg, canBubbleArg, cancelableArg, transitionNameArg, elapsedTimeArg);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/initTransitionEvent`
 */
web.TransitionEvent.init_transition_event = (function web$TransitionEvent$init_transition_event(this$,type_arg,can_bubble_arg,cancelable_arg,transition_name_arg,elapsed_time_arg){
return this$.initTransitionEvent(type_arg,can_bubble_arg,cancelable_arg,transition_name_arg,elapsed_time_arg);
});
/**
 * Property.
 * 
 *   The TransitionEvent.transitionName read-only property is a `dom.DOMString`
 *   the name of the CSS property associated with the transition.
 * 
 *   `name = TransitionEvent.transitionName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animationName`
 */
web.TransitionEvent.animation_name = (function web$TransitionEvent$animation_name(this$){
return this$.animationName();
});
/**
 * Property.
 * 
 *   The TransitionEvent.transitionName read-only property is a `dom.DOMString`
 *   the name of the CSS property associated with the transition.
 * 
 *   `name = TransitionEvent.transitionName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animationName`
 */
web.TransitionEvent.set_animation_name_BANG_ = (function web$TransitionEvent$set_animation_name_BANG_(this$,val){
return (this$["animationName"] = val);
});
/**
 * Property.
 * 
 *   The TransitionEvent.elapsedTime read-only property is a float
 *   the amount of time the animation has been running, in seconds,
 *   this event fired. This value is not affected by the `web.transition-delay`
 * 
 *   `name = TransitionEvent.elapsedTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/elapsedTime`
 */
web.TransitionEvent.elapsed_time = (function web$TransitionEvent$elapsed_time(this$){
return this$.elapsedTime();
});
/**
 * Property.
 * 
 *   The TransitionEvent.elapsedTime read-only property is a float
 *   the amount of time the animation has been running, in seconds,
 *   this event fired. This value is not affected by the `web.transition-delay`
 * 
 *   `name = TransitionEvent.elapsedTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/elapsedTime`
 */
web.TransitionEvent.set_elapsed_time_BANG_ = (function web$TransitionEvent$set_elapsed_time_BANG_(this$,val){
return (this$["elapsedTime"] = val);
});
/**
 * Property.
 * 
 *   The TransitionEvent.pseudoElement read-only property is a `dom.DOMString`,
 *   with '::', containing the name of the pseudo-element the animation
 *   on. If the transition doesn't run on a pseudo-element but on
 *   element, an empty string: ''.
 * 
 *   `name = TransitionEvent.pseudoElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/pseudoElement`
 */
web.TransitionEvent.pseudo_element = (function web$TransitionEvent$pseudo_element(this$){
return this$.pseudoElement();
});
/**
 * Property.
 * 
 *   The TransitionEvent.pseudoElement read-only property is a `dom.DOMString`,
 *   with '::', containing the name of the pseudo-element the animation
 *   on. If the transition doesn't run on a pseudo-element but on
 *   element, an empty string: ''.
 * 
 *   `name = TransitionEvent.pseudoElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/pseudoElement`
 */
web.TransitionEvent.set_pseudo_element_BANG_ = (function web$TransitionEvent$set_pseudo_element_BANG_(this$,val){
return (this$["pseudoElement"] = val);
});

//# sourceMappingURL=TransitionEvent.js.map?rel=1565798858203
