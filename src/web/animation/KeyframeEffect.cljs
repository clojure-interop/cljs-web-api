(ns web.animation.KeyframeEffect
  "The KeyframeEffect interface of the Web Animations API lets us
  sets of animatable properties and values, called keyframes. These
  then be played using the `Animation()` constructor."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The KeyframeEffect() constructor of the Web Animations API returns a new `web.animation.KeyframeEffect` object instance, and also allows you to clone an existing keyframe effect object instance.

  The first type of constructor (see above) creates a completely new `web.animation.KeyframeEffect` object instance. Its parameters are:


  element
  The DOM element to be animated, or null.
  keyframeSet
  An keyframe object or null.
  keyframeOptions Optional

  Either an integer representing the animation's duration (in milliseconds), or an `js.Object` containing one or more of the following:

  `delay` Optional
  The number of milliseconds to delay the start of the animation. Defaults to 0.
  `direction` Optional
  Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to \\\"normal\\\".
  `duration` Optional
  The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
  `easing` Optional
  The rate of the animation's change over time. Accepts the pre-defined values \\\"linear\\\", \\\"ease\\\", \\\"ease-in\\\", \\\"ease-out\\\", and \\\"ease-in-out\\\", or a custom \\\"cubic-bezier\\\" value like \\\"cubic-bezier(0.42, 0, 0.58, 1)\\\". Defaults to \\\"linear\\\".
  `endDelay` Optional
  The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
  `fill` Optional
  Dictates whether the animation's effects should be reflected by the element(s) prior to playing (\\\"backwards\\\"), retained after the animation has completed playing (\\\"forwards\\\"), or both. Defaults to \\\"none\\\".
  `iterationStart` Optional
  Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
  `iterations` Optional
  The number of times the animation should repeat. Defaults to 1, and can also take a value of `js.Infinity` to make it repeat for as long as the element exists.



  `composite`
  Determines how values are combined between this animation and the element's underlying values.
  `iterationComposite`
  Determines how values build from iteration to iteration in the current animation.




  The second type of constructor (see above) creates a clone of an existing  `web.animation.KeyframeEffect` object instance. Its parameter is as follows:


  sourceKeyFrames
  A `web.animation.KeyframeEffect` object that you want to clone.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect`"
  js/KeyframeEffect)

(defn get-computed-timing
  "Method.

  The getComputedTiming() method of the `web.animation.AnimationEffect`
  returns the calculated timing properties for this animation effect.

  `var currentTimeValues = animation.getComputedTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming`"
  [this ]
  (-> this (.getComputedTiming)))

(defn get-keyframes
  "Method.

  The getKeyframes() method of a `web.animation.KeyframeEffect`
  an Array of the computed keyframes that make up this animation
  with their computed offsets.

  `var keyframes = keyframeEffect.getKeyframes();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/getKeyframes`"
  [this ]
  (-> this (.getKeyframes)))

(defn get-timing
  "Method.

  The AnimationEffect.getTiming() method of the `web.animation.AnimationEffect`
  returns an `web.animation.EffectTiming` object containing the
  properties for the Animation Effect.

  `animationTiming = animation.getTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming`"
  [this ]
  (-> this (.getTiming)))

(defn set-keyframes
  "Method.

  The setKeyframes() method of the `web.animation.KeyframeEffect`
  replaces the keyframes that make up the affected KeyframeEffect
  a new set of keyframes.

  `existingKeyframeEffect.setKeyframes(keyframes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/setKeyframes`"
  [this keyframes]
  (-> this (.setKeyframes keyframes)))

(defn update-timing
  "Method.

  The updateTiming() method of the `web.animation.AnimationEffect`
  updates the specified timing properties for an animation effect.

  `animation.updateTiming(timing);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming`"
  [this timing]
  (-> this (.updateTiming timing)))

(defn target
  "Property.

  The target property of a `web.animation.KeyframeEffect` interface
  the element or pseudo-element being animated. It may be null
  animations that do not target a specific element. It performs
  both a getter and a setter, except with animations and transitions
  by CSS.

  `var targetElement = document.getElementById(\\\"elementToAnimate\\\");

  var keyframes = new KeyframeEffect( targetElement, keyframeBlock, timingOptions );

  // returns #elementToAnimate
  keyframes.target;

  // assigns keyframes a new target
  keyframes.target = newTargetElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/target`"
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  The target property of a `web.animation.KeyframeEffect` interface
  the element or pseudo-element being animated. It may be null
  animations that do not target a specific element. It performs
  both a getter and a setter, except with animations and transitions
  by CSS.

  `var targetElement = document.getElementById(\\\"elementToAnimate\\\");

  var keyframes = new KeyframeEffect( targetElement, keyframeBlock, timingOptions );

  // returns #elementToAnimate
  keyframes.target;

  // assigns keyframes a new target
  keyframes.target = newTargetElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/target`"
  [this val]
  (aset this "target" val))

(defn iteration-composite
  "Property.

  The iterationComposite property of a `web.animation.KeyframeEffect`
  how the the animation's property value changes accumulate or
  each other upon each of the animation's iterations.

  `// getting
  var iterationCompositeEnumeration = keyframeEffect.iterationComposite;

  // setting
  keyframeEffect.iterationComposite = 'replace';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/iterationComposite`"
  [this]
  (-> this (.-iterationComposite)))

(defn set-iteration-composite!
  "Property.

  The iterationComposite property of a `web.animation.KeyframeEffect`
  how the the animation's property value changes accumulate or
  each other upon each of the animation's iterations.

  `// getting
  var iterationCompositeEnumeration = keyframeEffect.iterationComposite;

  // setting
  keyframeEffect.iterationComposite = 'replace';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/iterationComposite`"
  [this val]
  (aset this "iterationComposite" val))

(defn composite
  "Property.

  The composite property of a `web.animation.KeyframeEffect` resolves
  an element's animation impacts its underlying property values.

  `// getting
  var compositeEnumeration = keyframeEffect.composite;

  // setting
  keyframeEffect.composite = 'accumulate';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite`"
  [this]
  (-> this (.-composite)))

(defn set-composite!
  "Property.

  The composite property of a `web.animation.KeyframeEffect` resolves
  an element's animation impacts its underlying property values.

  `// getting
  var compositeEnumeration = keyframeEffect.composite;

  // setting
  keyframeEffect.composite = 'accumulate';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite`"
  [this val]
  (aset this "composite" val))

