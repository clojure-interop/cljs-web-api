(ns web.animation.AnimationPlaybackEvent
  "The AnimationPlaybackEvent interface of the Web Animations API
  animation events."
  (:refer-clojure :exclude []))

(defn current-time
  "Property.

  [Read Only]
  [Experimental]

  The currentTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the current time of the animation that generated the
  at the moment the event is queued. This will be unresolved if
  animation was idle at the time the event was generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/currentTime`"
  [this]
  (-> this (.-currentTime)))

(defn timeline-time
  "Property.

  [Read Only]
  [Experimental]

  The timelineTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the time value of the animation's `timeline` at the
  the event is queued. This will be unresolved if the animation
  not associated with a timeline at the time the event was generated
  if the associated timeline was inactive.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/timelineTime`"
  [this]
  (-> this (.-timelineTime)))

