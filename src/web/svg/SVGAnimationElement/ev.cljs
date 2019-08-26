(ns web.svg.SVGAnimationElement.ev
  "SVGAnimationElement Events."
  (:refer-clojure :exclude []))

(def begin-event
  "Event.

  Fired when the element local timeline begins to play.
  Also available via the onbegin property."

  "beginEvent")

(def end-event
  "Event.

  Fired when at the active end of the animation is reached.
  Also available via the onend property."

  "endEvent")

(def repeat-event
  "Event.

  Fired when the element's local timeline repeats. It will be fired
  time the element repeats, after the first iteration.
  Also available via the onrepeat property."

  "repeatEvent")

