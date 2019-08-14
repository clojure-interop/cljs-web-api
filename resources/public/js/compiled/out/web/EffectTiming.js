// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.EffectTiming');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `web.EffectTiming` dictionary's delay property in the Web
 *   API represents the number of milliseconds to delay the start
 *   the animation.
 * 
 *   `var timingProperties = {
 *   delay: delayInMilliseconds
 *   };
 * 
 *   timingProperties.delay = delayInMilliseconds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`
 */
web.EffectTiming.delay = (function web$EffectTiming$delay(this$){
return this$.delay();
});
/**
 * Property.
 * 
 *   The `web.EffectTiming` dictionary's delay property in the Web
 *   API represents the number of milliseconds to delay the start
 *   the animation.
 * 
 *   `var timingProperties = {
 *   delay: delayInMilliseconds
 *   };
 * 
 *   timingProperties.delay = delayInMilliseconds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`
 */
web.EffectTiming.set_delay_BANG_ = (function web$EffectTiming$set_delay_BANG_(this$,val){
return (this$["delay"] = val);
});
/**
 * Property.
 * 
 *   The direction property of the Web Animations API dictionary `web.EffectTiming`
 *   an animation's playback direction along its timeline, as well
 *   its behavior when it reaches the end of an interation
 * 
 *   `var timingProperties = {
 *   direction: \"normal\" | \"reverse\" | \"alternate\" | \"alternate-reverse\"
 *   };
 * 
 *   timingProperties.direction = \"normal\" | \"reverse\" | \"alternate\" | \"alternate-reverse\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction`
 */
web.EffectTiming.direction = (function web$EffectTiming$direction(this$){
return this$.direction();
});
/**
 * Property.
 * 
 *   The direction property of the Web Animations API dictionary `web.EffectTiming`
 *   an animation's playback direction along its timeline, as well
 *   its behavior when it reaches the end of an interation
 * 
 *   `var timingProperties = {
 *   direction: \"normal\" | \"reverse\" | \"alternate\" | \"alternate-reverse\"
 *   };
 * 
 *   timingProperties.direction = \"normal\" | \"reverse\" | \"alternate\" | \"alternate-reverse\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction`
 */
web.EffectTiming.set_direction_BANG_ = (function web$EffectTiming$set_direction_BANG_(this$,val){
return (this$["direction"] = val);
});
/**
 * Property.
 * 
 *   The duration property of the dictionary `web.EffectTiming` in
 *   Web Animations API specifies the duration in milliseconds that
 *   single iteration (from beginning to end) the animation should
 *   to complete.
 * 
 *   `var timingProperties = {
 *   duration: durationInMilliseconds | \"auto\"
 *   };
 * 
 *   timingProperties.duration = durationInMilliseconds | \"auto\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration`
 */
web.EffectTiming.duration = (function web$EffectTiming$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   The duration property of the dictionary `web.EffectTiming` in
 *   Web Animations API specifies the duration in milliseconds that
 *   single iteration (from beginning to end) the animation should
 *   to complete.
 * 
 *   `var timingProperties = {
 *   duration: durationInMilliseconds | \"auto\"
 *   };
 * 
 *   timingProperties.duration = durationInMilliseconds | \"auto\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration`
 */
web.EffectTiming.set_duration_BANG_ = (function web$EffectTiming$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});
/**
 * Property.
 * 
 *   The `web.EffectTiming` dictionary's easing property in the Web
 *   API specifies the timing function used to scale the time to produce
 *   effects, where easing is the rate of the animation's change over
 * 
 *   `var timingProperties = {
 *   easing: single-transition-timing-function
 *   }
 * 
 *   timingProperties.easing = single-transition-timing-function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`
 */
web.EffectTiming.easing = (function web$EffectTiming$easing(this$){
return this$.easing();
});
/**
 * Property.
 * 
 *   The `web.EffectTiming` dictionary's easing property in the Web
 *   API specifies the timing function used to scale the time to produce
 *   effects, where easing is the rate of the animation's change over
 * 
 *   `var timingProperties = {
 *   easing: single-transition-timing-function
 *   }
 * 
 *   timingProperties.easing = single-transition-timing-function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`
 */
web.EffectTiming.set_easing_BANG_ = (function web$EffectTiming$set_easing_BANG_(this$,val){
return (this$["easing"] = val);
});
/**
 * Property.
 * 
 *   The endDelay property of the `web.EffectTiming` dictionary (part
 *   the Web Animations API) indicates the number of milliseconds
 *   delay after the active period of an animation sequence. The animation's
 *   time—the time at which an iteration is considered to have finished—is
 *   time at which the animation finishes an iteration (its initial
 *   `web.AnimationEffectTimingReadOnly.delay`, plus its duration,`web.duration`,
 *   its end delay.
 * 
 *   `var timingProperties = {
 *   endDelay: delayInMilliseconds
 *   }
 * 
 *   timingProperties.endDelay = delayInMilliseconds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay`
 */
web.EffectTiming.end_delay = (function web$EffectTiming$end_delay(this$){
return this$.endDelay();
});
/**
 * Property.
 * 
 *   The endDelay property of the `web.EffectTiming` dictionary (part
 *   the Web Animations API) indicates the number of milliseconds
 *   delay after the active period of an animation sequence. The animation's
 *   time—the time at which an iteration is considered to have finished—is
 *   time at which the animation finishes an iteration (its initial
 *   `web.AnimationEffectTimingReadOnly.delay`, plus its duration,`web.duration`,
 *   its end delay.
 * 
 *   `var timingProperties = {
 *   endDelay: delayInMilliseconds
 *   }
 * 
 *   timingProperties.endDelay = delayInMilliseconds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay`
 */
web.EffectTiming.set_end_delay_BANG_ = (function web$EffectTiming$set_end_delay_BANG_(this$,val){
return (this$["endDelay"] = val);
});
/**
 * Property.
 * 
 *   The Web Animations API's `web.EffectTiming` dictionary's fill
 *   specifies a fill mode, which defines how the element to which
 *   animation is applied should look when the animation sequence
 *   not actively running, such as before the time specified by `web.iterationStart`
 *   after animation's end time.
 * 
 *   `var timingProperties = {
 *   fill: \"none\" | \"forwards\" | \"backwards\" | \"both\" | \"auto\"
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`
 */
web.EffectTiming.fill = (function web$EffectTiming$fill(this$){
return this$.fill();
});
/**
 * Property.
 * 
 *   The Web Animations API's `web.EffectTiming` dictionary's fill
 *   specifies a fill mode, which defines how the element to which
 *   animation is applied should look when the animation sequence
 *   not actively running, such as before the time specified by `web.iterationStart`
 *   after animation's end time.
 * 
 *   `var timingProperties = {
 *   fill: \"none\" | \"forwards\" | \"backwards\" | \"both\" | \"auto\"
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`
 */
web.EffectTiming.set_fill_BANG_ = (function web$EffectTiming$set_fill_BANG_(this$,val){
return (this$["fill"] = val);
});
/**
 * Property.
 * 
 *   The Web Animations API dictionary `web.EffectTiming`'s iterations
 *   specifies the number of times the animation should repeat. The
 *   value is 1, indicating that it should only play once, but you
 *   set it to any floating-point value (including positive `web.Infinity`
 *   to 1, and can also take a value of Infinity to make it loop infinitely.
 * 
 *   `var timingProperties = {
 *   iterations: numberOfIterations
 *   };
 * 
 *   timingProperties.iterations = numberOfIterations;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`
 */
web.EffectTiming.iterations = (function web$EffectTiming$iterations(this$){
return this$.iterations();
});
/**
 * Property.
 * 
 *   The Web Animations API dictionary `web.EffectTiming`'s iterations
 *   specifies the number of times the animation should repeat. The
 *   value is 1, indicating that it should only play once, but you
 *   set it to any floating-point value (including positive `web.Infinity`
 *   to 1, and can also take a value of Infinity to make it loop infinitely.
 * 
 *   `var timingProperties = {
 *   iterations: numberOfIterations
 *   };
 * 
 *   timingProperties.iterations = numberOfIterations;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`
 */
web.EffectTiming.set_iterations_BANG_ = (function web$EffectTiming$set_iterations_BANG_(this$,val){
return (this$["iterations"] = val);
});
/**
 * Property.
 * 
 *   Web Animations API's `web.EffectTiming` dictionary's iterationStart
 *   specifies the repetition number which repetition the animation
 *   at and its progress through it.
 * 
 *   `var timingProperties = {
 *   iterationStart = iterationNumber
 *   };
 * 
 *   timingProperties.iterationStart = iterationNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`
 */
web.EffectTiming.iteration_start = (function web$EffectTiming$iteration_start(this$){
return this$.iterationStart();
});
/**
 * Property.
 * 
 *   Web Animations API's `web.EffectTiming` dictionary's iterationStart
 *   specifies the repetition number which repetition the animation
 *   at and its progress through it.
 * 
 *   `var timingProperties = {
 *   iterationStart = iterationNumber
 *   };
 * 
 *   timingProperties.iterationStart = iterationNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`
 */
web.EffectTiming.set_iteration_start_BANG_ = (function web$EffectTiming$set_iteration_start_BANG_(this$,val){
return (this$["iterationStart"] = val);
});

//# sourceMappingURL=EffectTiming.js.map?rel=1565798816933
