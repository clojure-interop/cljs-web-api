(ns web.animation.AnimationEvent
  "The AnimationEvent interface represents events providing information
  to animations."
  (:refer-clojure :exclude []))

(defn init-animation-event
  "Method.

  [Non Standard]
  [Obsolute]

  The AnimationEvent.initAnimationEvent() method Initializes an
  event created using the deprecated `Document.createEvent(\\\"AnimationEvent\\\")`

  `animationEvent.initAnimationEvent(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/initAnimationEvent`"
  [this type-arg can-bubble-arg cancelable-arg animation-name-arg elapsed-time-arg]
  (-> this (.initAnimationEvent type-arg can-bubble-arg cancelable-arg animation-name-arg elapsed-time-arg)))

(defn animation-name
  "Property.

  [Read Only]
  [Experimental]

  The AnimationEvent.animationName read-only property is a `web.dom.DOMString`
  the value of the `animation-name` CSS property associated with
  transition.

  `name = AnimationEvent.animationName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/animationName`"
  [this]
  (-> this (.-animationName)))

(defn elapsed-time
  "Property.

  [Read Only]
  [Experimental]

  The AnimationEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired, excluding any time the animation was paused.
  an \\\"animationstart\\\" event, elapsedTime is 0.0 unless there
  a negative value for `animation-delay`, in which case the event
  be fired with elapsedTime containing (-1 * delay).

  `time = AnimationEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/elapsedTime`"
  [this]
  (-> this (.-elapsedTime)))

(defn pseudo-element
  "Property.

  [Read Only]
  [Experimental]

  The AnimationEvent.pseudoElement read-only property is a `web.dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the animation doesn't run on a pseudo-element but on the
  an empty string: ''.

  `name = AnimationEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/pseudoElement`"
  [this]
  (-> this (.-pseudoElement)))

