(ns web.AnimationEffect
  "The AnimationEffect interface of the Web Animations API defines
  and future animation effects like `web.KeyframeEffect`, which
  be passed to `web.Animation` objects for playing, and `web.KeyframeEffectReadOnly`
  is used by CSS Animations and Transitions)."
  (:refer-clojure :exclude []))

(defn get-computed-timing
  "Method.

  The getComputedTiming() method of the `web.AnimationEffect` interface
  the calculated timing properties for this animation effect.

  `var currentTimeValues = animation.getComputedTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming`"
  [this ]
  (-> this (.getComputedTiming)))

(defn get-timing
  "Method.

  The AnimationEffect.getTiming() method of the `web.AnimationEffect`
  returns an `web.EffectTiming` object containing the timing properties
  the Animation Effect.

  `animationTiming = animation.getTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming`"
  [this ]
  (-> this (.getTiming)))

(defn update-timing
  "Method.

  The updateTiming() method of the `web.AnimationEffect` interface
  the specified timing properties for an animation effect.

  `animation.updateTiming(timing);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming`"
  [this timing]
  (-> this (.updateTiming timing)))

