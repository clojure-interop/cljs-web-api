(ns web.EffectTiming
  "The EffectTiming dictionary, part of the Web Animations API,
  used by `web.Element.animate()`, `web.KeyframeEffectReadOnly()`,
  `web.KeyframeEffect()` to describe timing properties for animation
  These properties are all optional, although without setting a
  the animation will not play."
  (:refer-clojure :exclude [delay]))

(defn delay
  "Property.

  The `web.EffectTiming` dictionary's delay property in the Web
  API represents the number of milliseconds to delay the start
  the animation.

  `var timingProperties = {
  delay: delayInMilliseconds
  };

  timingProperties.delay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`"
  [this]
  (-> this (.delay)))

(defn set-delay!
  "Property.

  The `web.EffectTiming` dictionary's delay property in the Web
  API represents the number of milliseconds to delay the start
  the animation.

  `var timingProperties = {
  delay: delayInMilliseconds
  };

  timingProperties.delay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay`"
  [this val]
  (aset this "delay" val))

(defn direction
  "Property.

  The direction property of the Web Animations API dictionary `web.EffectTiming`
  an animation's playback direction along its timeline, as well
  its behavior when it reaches the end of an interation

  `var timingProperties = {
  direction: \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\"
  };

  timingProperties.direction = \\\"normal\\\" | \\\"reverse\\\" | \\\"alternate\\\" | \\\"alternate-reverse\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction`"
  [this]
  (-> this (.direction)))

(defn set-direction!
  "Property.

  The direction property of the Web Animations API dictionary `web.EffectTiming`
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

  The duration property of the dictionary `web.EffectTiming` in
  Web Animations API specifies the duration in milliseconds that
  single iteration (from beginning to end) the animation should
  to complete.

  `var timingProperties = {
  duration: durationInMilliseconds | \\\"auto\\\"
  };

  timingProperties.duration = durationInMilliseconds | \\\"auto\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration`"
  [this]
  (-> this (.duration)))

(defn set-duration!
  "Property.

  The duration property of the dictionary `web.EffectTiming` in
  Web Animations API specifies the duration in milliseconds that
  single iteration (from beginning to end) the animation should
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

  The `web.EffectTiming` dictionary's easing property in the Web
  API specifies the timing function used to scale the time to produce
  effects, where easing is the rate of the animation's change over

  `var timingProperties = {
  easing: single-transition-timing-function
  }

  timingProperties.easing = single-transition-timing-function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`"
  [this]
  (-> this (.easing)))

(defn set-easing!
  "Property.

  The `web.EffectTiming` dictionary's easing property in the Web
  API specifies the timing function used to scale the time to produce
  effects, where easing is the rate of the animation's change over

  `var timingProperties = {
  easing: single-transition-timing-function
  }

  timingProperties.easing = single-transition-timing-function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing`"
  [this val]
  (aset this "easing" val))

(defn end-delay
  "Property.

  The endDelay property of the `web.EffectTiming` dictionary (part
  the Web Animations API) indicates the number of milliseconds
  delay after the active period of an animation sequence. The animation's
  time—the time at which an iteration is considered to have finished—is
  time at which the animation finishes an iteration (its initial
  `web.AnimationEffectTimingReadOnly.delay`, plus its duration,`web.duration`,
  its end delay.

  `var timingProperties = {
  endDelay: delayInMilliseconds
  }

  timingProperties.endDelay = delayInMilliseconds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay`"
  [this]
  (-> this (.endDelay)))

(defn set-end-delay!
  "Property.

  The endDelay property of the `web.EffectTiming` dictionary (part
  the Web Animations API) indicates the number of milliseconds
  delay after the active period of an animation sequence. The animation's
  time—the time at which an iteration is considered to have finished—is
  time at which the animation finishes an iteration (its initial
  `web.AnimationEffectTimingReadOnly.delay`, plus its duration,`web.duration`,
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

  The Web Animations API's `web.EffectTiming` dictionary's fill
  specifies a fill mode, which defines how the element to which
  animation is applied should look when the animation sequence
  not actively running, such as before the time specified by `web.iterationStart`
  after animation's end time.

  `var timingProperties = {
  fill: \\\"none\\\" | \\\"forwards\\\" | \\\"backwards\\\" | \\\"both\\\" | \\\"auto\\\"
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`"
  [this]
  (-> this (.fill)))

(defn set-fill!
  "Property.

  The Web Animations API's `web.EffectTiming` dictionary's fill
  specifies a fill mode, which defines how the element to which
  animation is applied should look when the animation sequence
  not actively running, such as before the time specified by `web.iterationStart`
  after animation's end time.

  `var timingProperties = {
  fill: \\\"none\\\" | \\\"forwards\\\" | \\\"backwards\\\" | \\\"both\\\" | \\\"auto\\\"
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill`"
  [this val]
  (aset this "fill" val))

(defn iterations
  "Property.

  The Web Animations API dictionary `web.EffectTiming`'s iterations
  specifies the number of times the animation should repeat. The
  value is 1, indicating that it should only play once, but you
  set it to any floating-point value (including positive `web.Infinity`
  to 1, and can also take a value of Infinity to make it loop infinitely.

  `var timingProperties = {
  iterations: numberOfIterations
  };

  timingProperties.iterations = numberOfIterations;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`"
  [this]
  (-> this (.iterations)))

(defn set-iterations!
  "Property.

  The Web Animations API dictionary `web.EffectTiming`'s iterations
  specifies the number of times the animation should repeat. The
  value is 1, indicating that it should only play once, but you
  set it to any floating-point value (including positive `web.Infinity`
  to 1, and can also take a value of Infinity to make it loop infinitely.

  `var timingProperties = {
  iterations: numberOfIterations
  };

  timingProperties.iterations = numberOfIterations;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations`"
  [this val]
  (aset this "iterations" val))

(defn iteration-start
  "Property.

  Web Animations API's `web.EffectTiming` dictionary's iterationStart
  specifies the repetition number which repetition the animation
  at and its progress through it.

  `var timingProperties = {
  iterationStart = iterationNumber
  };

  timingProperties.iterationStart = iterationNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`"
  [this]
  (-> this (.iterationStart)))

(defn set-iteration-start!
  "Property.

  Web Animations API's `web.EffectTiming` dictionary's iterationStart
  specifies the repetition number which repetition the animation
  at and its progress through it.

  `var timingProperties = {
  iterationStart = iterationNumber
  };

  timingProperties.iterationStart = iterationNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart`"
  [this val]
  (aset this "iterationStart" val))

