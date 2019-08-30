(ns web.cssdom.TransitionEvent
  "The TransitionEvent interface represents events providing information
  to transitions."
  (:refer-clojure :exclude []))

(defn init-transition-event
  "Method.

  [Deprecated]
  [Non Standard]

  The TransitionEvent.initTransitionEvent() method Initializes
  transition event created using the deprecated `Document.createEvent(\\\"TransitionEvent\\\")`

  `transitionEvent.initTransitionEvent(typeArg, canBubbleArg, cancelableArg, transitionNameArg, elapsedTimeArg);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/initTransitionEvent`"
  [this type-arg can-bubble-arg cancelable-arg transition-name-arg elapsed-time-arg]
  (-> this (.initTransitionEvent type-arg can-bubble-arg cancelable-arg transition-name-arg elapsed-time-arg)))

(defn property-name
  "Property.

  Is a DOMString containing the name CSS property associated with
  transition."
  [this]
  (-> this (.-propertyName)))

(defn set-property-name!
  "Property.

  Is a DOMString containing the name CSS property associated with
  transition."
  [this val]
  (aset this "propertyName" val))

(defn elapsed-time
  "Property.

  [Read Only]
  [Experimental]

  The TransitionEvent.elapsedTime read-only property is a float
  the amount of time the animation has been running, in seconds,
  this event fired. This value is not affected by the `transition-delay`

  `name = TransitionEvent.elapsedTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/elapsedTime`"
  [this]
  (-> this (.-elapsedTime)))

(defn pseudo-element
  "Property.

  [Read Only]
  [Experimental]

  The TransitionEvent.pseudoElement read-only property is a `web.dom.DOMString`,
  with '::', containing the name of the pseudo-element the animation
  on. If the transition doesn't run on a pseudo-element but on
  element, an empty string: ''.

  `name = TransitionEvent.pseudoElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/pseudoElement`"
  [this]
  (-> this (.-pseudoElement)))

(defn animation-name
  "Property.

  [Read Only]
  [Experimental]

  The TransitionEvent.transitionName read-only property is a `web.dom.DOMString`
  the name of the CSS property associated with the transition.

  `name = TransitionEvent.transitionName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animationName`"
  [this]
  (-> this (.-animationName)))

