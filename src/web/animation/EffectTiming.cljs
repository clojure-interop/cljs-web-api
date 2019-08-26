(ns web.animation.EffectTiming
  "The EffectTiming dictionary, part of the Web Animations API,
  used by `Element.animate()`, `KeyframeEffectReadOnly()`, and
  to describe timing properties for animation effects. These properties
  all optional, although without setting a duration the animation
  not play."
  (:refer-clojure :exclude [delay]))

(defn delay
  "Property.

  The `web.animation.EffectTiming` dictionary's delay property
  the Web Animations API represents the number of milliseconds
  delay the start of the animation.

  `var timingProperties = {
  delay: delayInMilliseconds
  };

  timingProperties.delay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`"
  [this]
  (-> this (.-delay)))

(defn set-delay!
  "Property.

  The `web.animation.EffectTiming` dictionary's delay property
  the Web Animations API represents the number of milliseconds
  delay the start of the animation.

  `var timingProperties = {
  delay: delayInMilliseconds
  };

  timingProperties.delay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`"
  [this val]
  (aset this "delay" val))

(defn direction
  "Property.

  The direction property of the Web Animations API dictionary `web.animation.EffectTiming`
  an animation's playback direction along its timeline, as well
  its behavior when it reaches the end of an interation

  `var timingProperties = {
  direction: \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\"
  };

  timingProperties.direction = \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction`"
  [this]
  (-> this (.-direction)))

(defn set-direction!
  "Property.

  The direction property of the Web Animations API dictionary `web.animation.EffectTiming`
  an animation's playback direction along its timeline, as well
  its behavior when it reaches the end of an interation

  `var timingProperties = {
  direction: \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\"
  };

  timingProperties.direction = \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction`"
  [this val]
  (aset this "direction" val))

(defn duration
  "Property.

  The duration property of the dictionary `web.animation.EffectTiming`
  the Web Animations API specifies the duration in milliseconds
  a single iteration (from beginning to end) the animation should
  to complete.

  `var timingProperties = {
  duration: durationInMilliseconds | \\\"auto\\\"
  };

  timingProperties.duration = durationInMilliseconds | \\\"auto\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration`"
  [this]
  (-> this (.-duration)))

(defn set-duration!
  "Property.

  The duration property of the dictionary `web.animation.EffectTiming`
  the Web Animations API specifies the duration in milliseconds
  a single iteration (from beginning to end) the animation should
  to complete.

  `var timingProperties = {
  duration: durationInMilliseconds | \\\"auto\\\"
  };

  timingProperties.duration = durationInMilliseconds | \\\"auto\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration`"
  [this val]
  (aset this "duration" val))

(defn easing
  "Property.

  The `web.animation.EffectTiming` dictionary's easing property
  the Web Animations API specifies the timing function used to
  the time to produce easing effects, where easing is the rate
  the animation's change over time.

  `var timingProperties = {
  easing: single-transition-timing-function
  }

  timingProperties.easing = single-transition-timing-function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`"
  [this]
  (-> this (.-easing)))

(defn set-easing!
  "Property.

  The `web.animation.EffectTiming` dictionary's easing property
  the Web Animations API specifies the timing function used to
  the time to produce easing effects, where easing is the rate
  the animation's change over time.

  `var timingProperties = {
  easing: single-transition-timing-function
  }

  timingProperties.easing = single-transition-timing-function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`"
  [this val]
  (aset this "easing" val))

(defn end-delay
  "Property.

  The endDelay property of the `web.animation.EffectTiming` dictionary
  of the Web Animations API) indicates the number of milliseconds
  delay after the active period of an animation sequence. The animation's
  time—the time at which an iteration is considered to have finished—is
  time at which the animation finishes an iteration (its initial
  `AnimationEffectTimingReadOnly.delay`, plus its duration,`duration`,
  its end delay.

  `var timingProperties = {
  endDelay: delayInMilliseconds
  }

  timingProperties.endDelay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay`"
  [this]
  (-> this (.-endDelay)))

(defn set-end-delay!
  "Property.

  The endDelay property of the `web.animation.EffectTiming` dictionary
  of the Web Animations API) indicates the number of milliseconds
  delay after the active period of an animation sequence. The animation's
  time—the time at which an iteration is considered to have finished—is
  time at which the animation finishes an iteration (its initial
  `AnimationEffectTimingReadOnly.delay`, plus its duration,`duration`,
  its end delay.

  `var timingProperties = {
  endDelay: delayInMilliseconds
  }

  timingProperties.endDelay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay`"
  [this val]
  (aset this "endDelay" val))

(defn fill
  "Property.

  The Web Animations API's `web.animation.EffectTiming` dictionary's
  property specifies a fill mode, which defines how the element
  which the animation is applied should look when the animation
  is not actively running, such as before the time specified by
  or after animation's end time.

  `var timingProperties = {
  fill: \\\"none\\\" | \\\"forwards\\\" | \\\"backwards\\\" | \\\"both\\\" | \\\"auto\\\"
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`"
  [this]
  (-> this (.-fill)))

(defn set-fill!
  "Property.

  The Web Animations API's `web.animation.EffectTiming` dictionary's
  property specifies a fill mode, which defines how the element
  which the animation is applied should look when the animation
  is not actively running, such as before the time specified by
  or after animation's end time.

  `var timingProperties = {
  fill: \\\"none\\\" | \\\"forwards\\\" | \\\"backwards\\\" | \\\"both\\\" | \\\"auto\\\"
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`"
  [this val]
  (aset this "fill" val))

(defn iteration-start
  "Property.

  Web Animations API's `web.animation.EffectTiming` dictionary's
  property specifies the repetition number which repetition the
  begins at and its progress through it.

  `var timingProperties = {
  iterationStart = iterationNumber
  };

  timingProperties.iterationStart = iterationNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`"
  [this]
  (-> this (.-iterationStart)))

(defn set-iteration-start!
  "Property.

  Web Animations API's `web.animation.EffectTiming` dictionary's
  property specifies the repetition number which repetition the
  begins at and its progress through it.

  `var timingProperties = {
  iterationStart = iterationNumber
  };

  timingProperties.iterationStart = iterationNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`"
  [this val]
  (aset this "iterationStart" val))

(defn iterations
  "Property.

  The Web Animations API dictionary `web.animation.EffectTiming`'s
  property specifies the number of times the animation should repeat.
  default value is 1, indicating that it should only play once,
  you can set it to any floating-point value (including positive
  defaults to 1, and can also take a value of Infinity to make
  loop infinitely.

  `var timingProperties = {
  iterations: numberOfIterations
  };

  timingProperties.iterations = numberOfIterations;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`"
  [this]
  (-> this (.-iterations)))

(defn set-iterations!
  "Property.

  The Web Animations API dictionary `web.animation.EffectTiming`'s
  property specifies the number of times the animation should repeat.
  default value is 1, indicating that it should only play once,
  you can set it to any floating-point value (including positive
  defaults to 1, and can also take a value of Infinity to make
  loop infinitely.

  `var timingProperties = {
  iterations: numberOfIterations
  };

  timingProperties.iterations = numberOfIterations;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`"
  [this val]
  (aset this "iterations" val))

