(ns web.dom.HTMLElement.ev
  "HTMLElement Events."
  (:refer-clojure :exclude []))

(def invalid
  "Event.

  Fired when an element does not satisfy its constraints during
  validation.
  Also available via the oninvalid property."

  "invalid")

(def animationcancel
  "Event.

  Fired when an animation unexpectedly aborts.
  Also available via the onanimationcancel property."

  "animationcancel")

(def animationend
  "Event.

  Fired when an animation has completed normally.
  Also available via the onanimationend property."

  "animationend")

(def animationiteration
  "Event.

  Fired when an animation iteration has completed.
  Also available via the onanimationiteration property."

  "animationiteration")

(def animationstart
  "Event.

  Fired when an animation starts.
  Also available via the onanimationstart property."

  "animationstart")

(def beforeinput
  "Event.

  Fired when the value of an <input>, <select>, or <textarea> element
  about to be modified."

  "beforeinput")

(def input
  "Event.

  Fired when the value of an <input>, <select>, or <textarea> element
  been changed.
  Also available via the oninput property."

  "input")

(def gotpointercapture
  "Event.

  Fired when an element captures a pointer using setPointerCapture().
  Also available via the ongotpointercapture property."

  "gotpointercapture")

(def lostpointercapture
  "Event.

  Fired when a captured pointer is released.
  Also available via the onlostpointercapture property."

  "lostpointercapture")

(def pointercancel
  "Event.

  Fired when a pointer event is canceled.
  Also available via the onpointercancel property."

  "pointercancel")

(def pointerdown
  "Event.

  Fired when a pointer becomes active.
  Also available via the onpointerdown property."

  "pointerdown")

(def pointerenter
  "Event.

  Fired when a pointer is moved into the hit test boundaries of
  element or one of its descendants.
  Also available via the onpointerenter property."

  "pointerenter")

(def pointerleave
  "Event.

  Fired when a pointer is moved out of the hit test boundaries
  an element.
  Also available via the onpointerleave property."

  "pointerleave")

(def pointermove
  "Event.

  Fired when a pointer changes coordinates.
  Also available via the onpointermove property."

  "pointermove")

(def pointerout
  "Event.

  Fired when a pointer is moved out of the hit test boundaries
  an element (among other reasons).
  Also available via the onpointerout property."

  "pointerout")

(def pointerover
  "Event.

  Fired when a pointer is moved into an element's hit test boundaries.
  Also available via the onpointerover property."

  "pointerover")

(def pointerup
  "Event.

  Fired when a pointer is no longer active.
  Also available via the onpointerup property."

  "pointerup")

(def transitioncancel
  "Event.

  Fired when a CSS transition is canceled.
  Also available via the ontransitioncancel property."

  "transitioncancel")

(def transitionend
  "Event.

  Fired when a CSS transition has completed.
  Also available via the ontransitionend property."

  "transitionend")

(def transitionrun
  "Event.

  Fired when a CSS transition is first created.
  Also available via the ontransitionrun property."

  "transitionrun")

(def transitionstart
  "Event.

  Fired when a CSS transition has actually started.
  Also available via the ontransitionstart property."

  "transitionstart")

(def change
  "Event.

  The change event is fired for `<input>`, `<select>`, and `<textarea>`
  when an alteration to the element's value is committed by the
  Unlike the input event, the change event is not necessarily fired
  each alteration to an element's value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`"

  "change")

