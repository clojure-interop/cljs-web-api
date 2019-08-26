(ns web.animation.AnimationEffect
  "The AnimationEffect interface of the Web Animations API defines
  and future animation effects like `web.animation.KeyframeEffect`,
  can be passed to `web.animation.Animation` objects for playing,
  `KeyframeEffectReadOnly` (which is used by CSS Animations and"
  (:refer-clojure :exclude []))

(defn get-computed-timing
  "Method.

  The getComputedTiming() method of the `web.animation.AnimationEffect`
  returns the calculated timing properties for this animation effect.

  `var currentTimeValues = animation.getComputedTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming`"
  [this ]
  (-> this (.getComputedTiming)))

(defn get-timing
  "Method.

  The AnimationEffect.getTiming() method of the `web.animation.AnimationEffect`
  returns an `web.animation.EffectTiming` object containing the
  properties for the Animation Effect.

  `animationTiming = animation.getTiming();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming`"
  [this ]
  (-> this (.getTiming)))

(defn update-timing
  "Method.

  The updateTiming() method of the `web.animation.AnimationEffect`
  updates the specified timing properties for an animation effect.

  `animation.updateTiming(timing);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming`"
  [this timing]
  (-> this (.updateTiming timing)))

