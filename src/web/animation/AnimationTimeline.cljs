(ns web.animation.AnimationTimeline
  "The AnimationTimeline interface of the Web Animations API represents
  timeline of an animation. This interface exists to define timeline
  (inherited by `web.animation.DocumentTimeline` and future timeline
  and is not itself directly used by developers. Anywhere you see
  you should use DocumentTimeline or any other timeline type instead."
  (:refer-clojure :exclude []))

(defn current-time
  "Property.

  [Read Only]
  [Experimental]

  The currentTime read-only property of the Web Animations API's
  interface returns the timeline's current time in milliseconds,
  null if the timeline is inactive.

  `var currentTime = AnimationTimeline.currentTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline/currentTime`"
  [this]
  (-> this (.-currentTime)))

