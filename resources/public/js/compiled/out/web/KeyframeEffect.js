// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.KeyframeEffect');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The KeyframeEffect() constructor of the Web Animations API returns a new `web.KeyframeEffect` object instance, and also allows you to clone an existing keyframe effect object instance.
 * 
 *   The first type of constructor (see above) creates a completely new `web.KeyframeEffect` object instance. Its parameters are:
 * 
 * 
 *   element
 *   The DOM element to be animated, or null.
 *   keyframeSet
 *   An keyframe object or null.
 *   keyframeOptions Optional
 * 
 *   Either an integer representing the animation's duration (in milliseconds), or an `web.Object` containing one or more of the following:
 * 
 *   `web.delay` Optional
 *   The number of milliseconds to delay the start of the animation. Defaults to 0.
 *   `web.direction` Optional
 *   Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to \"normal\".
 *   `web.duration` Optional
 *   The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
 *   `web.easing` Optional
 *   The rate of the animation's change over time. Accepts the pre-defined values \"linear\", \"ease\", \"ease-in\", \"ease-out\", and \"ease-in-out\", or a custom \"cubic-bezier\" value like \"cubic-bezier(0.42, 0, 0.58, 1)\". Defaults to \"linear\".
 *   `web.endDelay` Optional
 *   The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
 *   `web.fill` Optional
 *   Dictates whether the animation's effects should be reflected by the element(s) prior to playing (\"backwards\"), retained after the animation has completed playing (\"forwards\"), or both. Defaults to \"none\".
 *   `web.iterationStart` Optional
 *   Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
 *   `web.iterations` Optional
 *   The number of times the animation should repeat. Defaults to 1, and can also take a value of `web.Infinity` to make it repeat for as long as the element exists.
 * 
 * 
 * 
 *   `web.composite`
 *   Determines how values are combined between this animation and the element's underlying values.
 *   `web.iterationComposite`
 *   Determines how values build from iteration to iteration in the current animation.
 * 
 * 
 * 
 * 
 *   The second type of constructor (see above) creates a clone of an existing  `web.KeyframeEffect` object instance. Its parameter is as follows:
 * 
 * 
 *   sourceKeyFrames
 *   A `web.KeyframeEffect` object that you want to clone.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect`
 */
web.KeyframeEffect.constructor$ = KeyframeEffect;
/**
 * Method.
 * 
 *   The getKeyframes() method of a `web.KeyframeEffect` returns an
 *   of the computed keyframes that make up this animation along with
 *   computed offsets.
 * 
 *   `var keyframes = keyframeEffect.getKeyframes();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/getKeyframes`
 */
web.KeyframeEffect.get_keyframes = (function web$KeyframeEffect$get_keyframes(this$){
return this$.getKeyframes();
});
/**
 * Method.
 * 
 *   The setKeyframes() method of the `web.KeyframeEffect` interface
 *   the keyframes that make up the affected KeyframeEffect with a
 *   set of keyframes.
 * 
 *   `existingKeyframeEffect.setKeyframes(keyframes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/setKeyframes`
 */
web.KeyframeEffect.set_keyframes = (function web$KeyframeEffect$set_keyframes(this$,keyframes){
return this$.setKeyframes(keyframes);
});
/**
 * Method.
 * 
 *   The getComputedTiming() method of the `web.AnimationEffect` interface
 *   the calculated timing properties for this animation effect.
 * 
 *   `var currentTimeValues = animation.getComputedTiming();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming`
 */
web.KeyframeEffect.get_computed_timing = (function web$KeyframeEffect$get_computed_timing(this$){
return this$.getComputedTiming();
});
/**
 * Method.
 * 
 *   The AnimationEffect.getTiming() method of the `web.AnimationEffect`
 *   returns an `web.EffectTiming` object containing the timing properties
 *   the Animation Effect.
 * 
 *   `animationTiming = animation.getTiming();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming`
 */
web.KeyframeEffect.get_timing = (function web$KeyframeEffect$get_timing(this$){
return this$.getTiming();
});
/**
 * Method.
 * 
 *   The updateTiming() method of the `web.AnimationEffect` interface
 *   the specified timing properties for an animation effect.
 * 
 *   `animation.updateTiming(timing);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming`
 */
web.KeyframeEffect.update_timing = (function web$KeyframeEffect$update_timing(this$,timing){
return this$.updateTiming(timing);
});
/**
 * Property.
 * 
 *   The composite property of a `web.KeyframeEffect` resolves how
 *   element's animation impacts its underlying property values.
 * 
 *   `// getting
 *   var compositeEnumeration = keyframeEffect.composite;
 * 
 *   // setting
 *   keyframeEffect.composite = 'accumulate';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite`
 */
web.KeyframeEffect.composite = (function web$KeyframeEffect$composite(this$){
return this$.composite();
});
/**
 * Property.
 * 
 *   The composite property of a `web.KeyframeEffect` resolves how
 *   element's animation impacts its underlying property values.
 * 
 *   `// getting
 *   var compositeEnumeration = keyframeEffect.composite;
 * 
 *   // setting
 *   keyframeEffect.composite = 'accumulate';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite`
 */
web.KeyframeEffect.set_composite_BANG_ = (function web$KeyframeEffect$set_composite_BANG_(this$,val){
return (this$["composite"] = val);
});
/**
 * Property.
 * 
 *   The iterationComposite property of a `web.KeyframeEffect` resolves
 *   the the animation's property value changes accumulate or override
 *   other upon each of the animation's iterations.
 * 
 *   `// getting
 *   var iterationCompositeEnumeration = keyframeEffect.iterationComposite;
 * 
 *   // setting
 *   keyframeEffect.iterationComposite = 'replace';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/iterationComposite`
 */
web.KeyframeEffect.iteration_composite = (function web$KeyframeEffect$iteration_composite(this$){
return this$.iterationComposite();
});
/**
 * Property.
 * 
 *   The iterationComposite property of a `web.KeyframeEffect` resolves
 *   the the animation's property value changes accumulate or override
 *   other upon each of the animation's iterations.
 * 
 *   `// getting
 *   var iterationCompositeEnumeration = keyframeEffect.iterationComposite;
 * 
 *   // setting
 *   keyframeEffect.iterationComposite = 'replace';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/iterationComposite`
 */
web.KeyframeEffect.set_iteration_composite_BANG_ = (function web$KeyframeEffect$set_iteration_composite_BANG_(this$,val){
return (this$["iterationComposite"] = val);
});
/**
 * Property.
 * 
 *   The target property of a `web.KeyframeEffect` interface represents
 *   element or pseudo-element being animated. It may be null for
 *   that do not target a specific element. It performs as both a
 *   and a setter, except with animations and transitions generated
 *   CSS.
 * 
 *   `var targetElement = document.getElementById(\"elementToAnimate\");
 * 
 *   var keyframes = new KeyframeEffect( targetElement, keyframeBlock, timingOptions );
 * 
 *   // returns #elementToAnimate
 *   keyframes.target;
 * 
 *   // assigns keyframes a new target
 *   keyframes.target = newTargetElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/target`
 */
web.KeyframeEffect.target = (function web$KeyframeEffect$target(this$){
return this$.target();
});
/**
 * Property.
 * 
 *   The target property of a `web.KeyframeEffect` interface represents
 *   element or pseudo-element being animated. It may be null for
 *   that do not target a specific element. It performs as both a
 *   and a setter, except with animations and transitions generated
 *   CSS.
 * 
 *   `var targetElement = document.getElementById(\"elementToAnimate\");
 * 
 *   var keyframes = new KeyframeEffect( targetElement, keyframeBlock, timingOptions );
 * 
 *   // returns #elementToAnimate
 *   keyframes.target;
 * 
 *   // assigns keyframes a new target
 *   keyframes.target = newTargetElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/target`
 */
web.KeyframeEffect.set_target_BANG_ = (function web$KeyframeEffect$set_target_BANG_(this$,val){
return (this$["target"] = val);
});

//# sourceMappingURL=KeyframeEffect.js.map?rel=1565798807861
