(ns web.AnimationEvent
  "The AnimationEvent interface represents events providing information
  to animations."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AnimationEvent() constructor returns a newly created `web.AnimationEvent`, representing an event in relation with an animation.

  The AnimationEvent() constructor also inherits arguments from `web.Event()`.


  type
  A `dom.DOMString` representing the name of the type of the AnimationEvent. It is case-sensitive and can be: 'animationstart', 'animationend', or 'animationiteration'.
  animationName Optional
  A `dom.DOMString` containing the value of the `web.animation-name` CSS property associated with the transition. It defaults to \\\"\\\".
  elapsedTime Optional
  A float giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an \\\"animationstart\\\" event, elapsedTime is 0.0 unless there was a negative value for `web.animation-delay`, in which case the event will be fired with elapsedTime containing (-1 * delay). It defaults to 0.0.
  pseudoElement Optional
  Is a `dom.DOMString`, starting with \\\"::\\\", containing the name of the pseudo-element the animation runs on. If the animation doesn't run on a pseudo-element but on the element itself, specify an empty string: \\\"\\\". It defaults to \\\"\\\".

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/AnimationEvent`"
  js/AnimationEvent)

(defn init-animation-event
  "Method.

  The AnimationEvent.initAnimationEvent() method Initializes an
  event created using the deprecated `web.Document.createEvent(\\\"AnimationEvent\\\")`

  `animationEvent.initAnimationEvent(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/initAnimationEvent`"
  [this type-arg can-bubble-arg cancelable-arg animation-name-arg elapsed-time-arg]
  (-> this (.initAnimationEvent type-arg can-bubble-arg cancelable-arg animation-name-arg elapsed-time-arg)))

(defn animation-name
  "Property.

  The AnimationEvent.animationName read-only property is a `dom.DOMString`
  the value of the `web.animation-name` CSS property associated
  the transition.

  `name = AnimationEvent.animationName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/animationName`"
  [this]
  (-> this (.animationName)))

(defn set-animation-name!
  "Property.

  The AnimationEvent.animationName read-only property is a `dom.DOMString`
  the value of the `web.animation-name` CSS property associated
  the transition.

  `name = AnimationEvent.animationName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/animationName`"
  [this val]
  (aset this "animationName" val))

(defn elapsed-time
  "Property.

  The AnimationEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired, excluding any time the animation was paused.
  an \\\"animationstart\\\" event, elapsedTime is 0.0 unless there
  a negative value for `web.animation-delay`, in which case the
  will be fired with elapsedTime containing (-1 * delay).

  `time = AnimationEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/elapsedTime`"
  [this]
  (-> this (.elapsedTime)))

(defn set-elapsed-time!
  "Property.

  The AnimationEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired, excluding any time the animation was paused.
  an \\\"animationstart\\\" event, elapsedTime is 0.0 unless there
  a negative value for `web.animation-delay`, in which case the
  will be fired with elapsedTime containing (-1 * delay).

  `time = AnimationEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/elapsedTime`"
  [this val]
  (aset this "elapsedTime" val))

(defn pseudo-element
  "Property.

  The AnimationEvent.pseudoElement read-only property is a `dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the animation doesn't run on a pseudo-element but on the
  an empty string: ''.

  `name = AnimationEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/pseudoElement`"
  [this]
  (-> this (.pseudoElement)))

(defn set-pseudo-element!
  "Property.

  The AnimationEvent.pseudoElement read-only property is a `dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the animation doesn't run on a pseudo-element but on the
  an empty string: ''.

  `name = AnimationEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/pseudoElement`"
  [this val]
  (aset this "pseudoElement" val))

