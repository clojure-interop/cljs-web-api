(ns web.animation.KeyframeEffect
  "The KeyframeEffect interface of the Web Animations API lets us
  sets of animatable properties and values, called keyframes. These
  then be played using the `Animation()` constructor."
  (:refer-clojure :exclude []))

(defn get-computed-timing
  "Method.

  [Experimental]

  The getComputedTiming() method of the `web.animation.AnimationEffect`
  returns the calculated timing properties for this animation effect.

  `var currentTimeValues = animation.getComputedTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming`"
  [this ]
  (-> this (.getComputedTiming)))

(defn get-keyframes
  "Method.

  [Experimental]

  The getKeyframes() method of a `web.animation.KeyframeEffect`
  an Array of the computed keyframes that make up this animation
  with their computed offsets.

  `var keyframes = keyframeEffect.getKeyframes();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/getKeyframes`"
  [this ]
  (-> this (.getKeyframes)))

(defn get-timing
  "Method.

  [Experimental]

  The AnimationEffect.getTiming() method of the `web.animation.AnimationEffect`
  returns an `web.animation.EffectTiming` object containing the
  properties for the Animation Effect.

  `animationTiming = animation.getTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming`"
  [this ]
  (-> this (.getTiming)))

(defn set-keyframes
  "Method.

  [Experimental]

  The setKeyframes() method of the `web.animation.KeyframeEffect`
  replaces the keyframes that make up the affected KeyframeEffect
  a new set of keyframes.

  `existingKeyframeEffect.setKeyframes(keyframes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/setKeyframes`"
  [this keyframes]
  (-> this (.setKeyframes keyframes)))

(defn update-timing
  "Method.

  [Experimental]

  The updateTiming() method of the `web.animation.AnimationEffect`
  updates the specified timing properties for an animation effect.

  `animation.updateTiming(timing);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming`"
  [this timing]
  (-> this (.updateTiming timing)))

(defn target
  "Property.

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

  The composite property of a `web.animation.KeyframeEffect` resolves
  an element's animation impacts its underlying property values.

  `// getting
  var compositeEnumeration = keyframeEffect.composite;

  // setting
  keyframeEffect.composite = 'accumulate';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite`"
  [this val]
  (aset this "composite" val))

