(ns web.TransitionEvent
  "The TransitionEvent interface represents events providing information
  to transitions."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The TransitionEvent() constructor returns a newly created `web.TransitionEvent`, representing an event in relation with an transition.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/TransitionEvent`"
  js/TransitionEvent)

(defn init-transition-event
  "Method.

  The TransitionEvent.initTransitionEvent() method Initializes
  transition event created using the deprecated `web.Document.createEvent(\\\"TransitionEvent\\\")`

  `transitionEvent.initTransitionEvent(typeArg, canBubbleArg, cancelableArg, transitionNameArg, elapsedTimeArg);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/initTransitionEvent`"
  [this type-arg can-bubble-arg cancelable-arg transition-name-arg elapsed-time-arg]
  (-> this (.initTransitionEvent type-arg can-bubble-arg cancelable-arg transition-name-arg elapsed-time-arg)))

(defn animation-name
  "Property.

  The TransitionEvent.transitionName read-only property is a `dom.DOMString`
  the name of the CSS property associated with the transition.

  `name = TransitionEvent.transitionName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animationName`"
  [this]
  (-> this (.animationName)))

(defn set-animation-name!
  "Property.

  The TransitionEvent.transitionName read-only property is a `dom.DOMString`
  the name of the CSS property associated with the transition.

  `name = TransitionEvent.transitionName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animationName`"
  [this val]
  (aset this "animationName" val))

(defn elapsed-time
  "Property.

  The TransitionEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired. This value is not affected by the `web.transition-delay`

  `name = TransitionEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/elapsedTime`"
  [this]
  (-> this (.elapsedTime)))

(defn set-elapsed-time!
  "Property.

  The TransitionEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired. This value is not affected by the `web.transition-delay`

  `name = TransitionEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/elapsedTime`"
  [this val]
  (aset this "elapsedTime" val))

(defn pseudo-element
  "Property.

  The TransitionEvent.pseudoElement read-only property is a `dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the transition doesn't run on a pseudo-element but on
  element, an empty string: ''.

  `name = TransitionEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/pseudoElement`"
  [this]
  (-> this (.pseudoElement)))

(defn set-pseudo-element!
  "Property.

  The TransitionEvent.pseudoElement read-only property is a `dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the transition doesn't run on a pseudo-element but on
  element, an empty string: ''.

  `name = TransitionEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/pseudoElement`"
  [this val]
  (aset this "pseudoElement" val))

