// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AnimationEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AnimationEvent() constructor returns a newly created `web.AnimationEvent`, representing an event in relation with an animation.
 * 
 *   The AnimationEvent() constructor also inherits arguments from `web.Event()`.
 * 
 * 
 *   type
 *   A `dom.DOMString` representing the name of the type of the AnimationEvent. It is case-sensitive and can be: 'animationstart', 'animationend', or 'animationiteration'.
 *   animationName Optional
 *   A `dom.DOMString` containing the value of the `web.animation-name` CSS property associated with the transition. It defaults to \"\".
 *   elapsedTime Optional
 *   A float giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an \"animationstart\" event, elapsedTime is 0.0 unless there was a negative value for `web.animation-delay`, in which case the event will be fired with elapsedTime containing (-1 * delay). It defaults to 0.0.
 *   pseudoElement Optional
 *   Is a `dom.DOMString`, starting with \"::\", containing the name of the pseudo-element the animation runs on. If the animation doesn't run on a pseudo-element but on the element itself, specify an empty string: \"\". It defaults to \"\".
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/AnimationEvent`
 */
web.AnimationEvent.constructor$ = AnimationEvent;
/**
 * Method.
 * 
 *   The AnimationEvent.initAnimationEvent() method Initializes an
 *   event created using the deprecated `web.Document.createEvent(\"AnimationEvent\")`
 * 
 *   `animationEvent.initAnimationEvent(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/initAnimationEvent`
 */
web.AnimationEvent.init_animation_event = (function web$AnimationEvent$init_animation_event(this$,type_arg,can_bubble_arg,cancelable_arg,animation_name_arg,elapsed_time_arg){
return this$.initAnimationEvent(type_arg,can_bubble_arg,cancelable_arg,animation_name_arg,elapsed_time_arg);
});
/**
 * Property.
 * 
 *   The AnimationEvent.animationName read-only property is a `dom.DOMString`
 *   the value of the `web.animation-name` CSS property associated
 *   the transition.
 * 
 *   `name = AnimationEvent.animationName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/animationName`
 */
web.AnimationEvent.animation_name = (function web$AnimationEvent$animation_name(this$){
return this$.animationName();
});
/**
 * Property.
 * 
 *   The AnimationEvent.animationName read-only property is a `dom.DOMString`
 *   the value of the `web.animation-name` CSS property associated
 *   the transition.
 * 
 *   `name = AnimationEvent.animationName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/animationName`
 */
web.AnimationEvent.set_animation_name_BANG_ = (function web$AnimationEvent$set_animation_name_BANG_(this$,val){
return (this$["animationName"] = val);
});
/**
 * Property.
 * 
 *   The AnimationEvent.elapsedTime read-only property is a float
 *   the amount of time the animation has been running, in seconds,
 *   this event fired, excluding any time the animation was paused.
 *   an \"animationstart\" event, elapsedTime is 0.0 unless there
 *   a negative value for `web.animation-delay`, in which case the
 *   will be fired with elapsedTime containing (-1 * delay).
 * 
 *   `time = AnimationEvent.elapsedTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/elapsedTime`
 */
web.AnimationEvent.elapsed_time = (function web$AnimationEvent$elapsed_time(this$){
return this$.elapsedTime();
});
/**
 * Property.
 * 
 *   The AnimationEvent.elapsedTime read-only property is a float
 *   the amount of time the animation has been running, in seconds,
 *   this event fired, excluding any time the animation was paused.
 *   an \"animationstart\" event, elapsedTime is 0.0 unless there
 *   a negative value for `web.animation-delay`, in which case the
 *   will be fired with elapsedTime containing (-1 * delay).
 * 
 *   `time = AnimationEvent.elapsedTime`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/elapsedTime`
 */
web.AnimationEvent.set_elapsed_time_BANG_ = (function web$AnimationEvent$set_elapsed_time_BANG_(this$,val){
return (this$["elapsedTime"] = val);
});
/**
 * Property.
 * 
 *   The AnimationEvent.pseudoElement read-only property is a `dom.DOMString`,
 *   with '::', containing the name of the pseudo-element the animation
 *   on. If the animation doesn't run on a pseudo-element but on the
 *   an empty string: ''.
 * 
 *   `name = AnimationEvent.pseudoElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/pseudoElement`
 */
web.AnimationEvent.pseudo_element = (function web$AnimationEvent$pseudo_element(this$){
return this$.pseudoElement();
});
/**
 * Property.
 * 
 *   The AnimationEvent.pseudoElement read-only property is a `dom.DOMString`,
 *   with '::', containing the name of the pseudo-element the animation
 *   on. If the animation doesn't run on a pseudo-element but on the
 *   an empty string: ''.
 * 
 *   `name = AnimationEvent.pseudoElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/pseudoElement`
 */
web.AnimationEvent.set_pseudo_element_BANG_ = (function web$AnimationEvent$set_pseudo_element_BANG_(this$,val){
return (this$["pseudoElement"] = val);
});

//# sourceMappingURL=AnimationEvent.js.map?rel=1565798811184
