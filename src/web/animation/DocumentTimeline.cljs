(ns web.animation.DocumentTimeline
  "The DocumentTimeline interface of the the Web Animations API
  animation timelines, including the default document timeline
  via `Document.timeline`)."
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

