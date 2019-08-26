(ns web.animation.AnimationPlaybackEvent
  "The AnimationPlaybackEvent interface of the Web Animations API
  animation events."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AnimationPlaybackEvent() constructor of the Web Animations API returns a new `web.animation.AnimationPlaybackEvent` object instance.

  `type`
  A DOMString representing the name of the event.
  eventInitDict Optional
  An optional EventInit dictionary object containing the following fields:

  bubbles Optional
  Defaults to false, of type Boolean, indicating if the event bubbles or not.
  cancelable Optional
  Defaults to false, of type Boolean, indicating if the event can be canceled or not.
  detail Optional
  Defaults to null, of type any — an event-dependent value associated with the event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent`"
  js/AnimationPlaybackEvent)

(defn current-time
  "Property.

  The currentTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the current time of the animation that generated the
  at the moment the event is queued. This will be unresolved if
  animation was idle at the time the event was generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/currentTime`"
  [this]
  (-> this (.currentTime)))

(defn set-current-time!
  "Property.

  The currentTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the current time of the animation that generated the
  at the moment the event is queued. This will be unresolved if
  animation was idle at the time the event was generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/currentTime`"
  [this val]
  (aset this "currentTime" val))

(defn timeline-time
  "Property.

  The timelineTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the time value of the animation's `timeline` at the
  the event is queued. This will be unresolved if the animation
  not associated with a timeline at the time the event was generated
  if the associated timeline was inactive.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/timelineTime`"
  [this]
  (-> this (.timelineTime)))

(defn set-timeline-time!
  "Property.

  The timelineTime read-only property of the `web.animation.AnimationPlaybackEvent`
  represents the time value of the animation's `timeline` at the
  the event is queued. This will be unresolved if the animation
  not associated with a timeline at the time the event was generated
  if the associated timeline was inactive.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/timelineTime`"
  [this val]
  (aset this "timelineTime" val))

