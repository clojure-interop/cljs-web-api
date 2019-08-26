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

(def beforeinput
  "Event.

  Fired when the value of an <input>, <select>, or <textarea> element
  about to be modified."

  "beforeinput")

(def gotpointercapture
  "Event.

  Fired when an element captures a pointer using setPointerCapture().
  Also available via the ongotpointercapture property."

  "gotpointercapture")

(def transitioncancel
  "Event.

  Fired when a CSS transition is canceled.
  Also available via the ontransitioncancel property."

  "transitioncancel")

(def animationend
  "Event.

  The animationend event is fired when a CSS Animation has completed
  not if it aborts before reaching completion, such as if the element
  invisible or the animation is removed from the element).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event`"

  "animationend")

(def animationiteration
  "Event.

  The animationiteration event is fired when an iteration of a
  Animation ends, and another one begins. This event does not occur
  the same time as the animationend event, and therefore does not
  for animations with an animation-iteration-count of one.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationiteration_event`"

  "animationiteration")

(def animationstart
  "Event.

  The animationstart event is fired when a CSS Animation has started.
  there is an `animation-delay`, this event will fire once the
  period has expired. A negative delay will cause the event to
  with an elapsedTime equal to the absolute value of the delay
  correspondingly, the animation will begin playing at that time
  into the sequence).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event`"

  "animationstart")

(def change
  "Event.

  The change event is fired for `<input>`, `<select>`, and `<textarea>`
  when an alteration to the element's value is committed by the
  Unlike the input event, the change event is not necessarily fired
  each alteration to an element's value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`"

  "change")

(def input
  "Event.

  The input event fires when the value of an `<input>`, `<select>`,
  `<textarea>` element has been changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event`"

  "input")

(def lostpointercapture
  "Event.

  The lostpointercapture event is fired when a captured pointer
  released.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lostpointercapture_event`"

  "lostpointercapture")

(def pointercancel
  "Event.

  The pointercancel event is fired when the browser determines
  there are unlikely to be any more pointer events, or if after
  pointerdown event is fired, the pointer is then used to manipulate
  viewport by panning, zooming, or scrolling.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointercancel_event`"

  "pointercancel")

(def pointerdown
  "Event.

  The pointerdown event is fired when a pointer becomes active.
  mouse, it is fired when the device transitions from no buttons
  to at least one button depressed. For touch, it is fired when
  contact is made with the digitizer. For pen, it is fired when
  stylus makes physical contact with the digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerdown_event`"

  "pointerdown")

(def pointerenter
  "Event.

  The pointerenter event fires when a pointing device is moved
  the hit test boundaries of an element or one of its descendants,
  as a result of a pointerdown event from a device that does not
  hover (see pointerdown).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerenter_event`"

  "pointerenter")

(def pointerleave
  "Event.

  The pointerleave event is fired when a pointing device is moved
  of the hit test boundaries of an element. For pen devices, this
  is fired when the stylus leaves the hover range detectable by
  digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerleave_event`"

  "pointerleave")

(def pointermove
  "Event.

  The pointermove event is fired when a pointer changes coordinates,
  the pointer has not been canceled by a browser touch-action.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointermove_event`"

  "pointermove")

(def pointerout
  "Event.

  The pointerout event is fired for several reasons including:
  device is moved out of the hit test boundaries of an element;
  the pointerup event for a device that does not support hover
  pointerup); after firing the pointercancel event (see pointercancel);
  a pen stylus leaves the hover range detectable by the digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerout_event`"

  "pointerout")

(def pointerover
  "Event.

  The pointerover event is fired when a pointing device is moved
  an element's hit test boundaries.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerover_event`"

  "pointerover")

(def pointerup
  "Event.

  The pointerup event is fired when a pointer is no longer active.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerup_event`"

  "pointerup")

(def transitionend
  "Event.

  The transitionend event is fired when a CSS transition has completed.
  the case where a transition is removed before completion, such
  if the `transition-property` is removed or `display` is set to
  then the event will not be generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event`"

  "transitionend")

(def transitionrun
  "Event.

  The transitionrun event is fired when a CSS transition is first
  i.e. before any `transition-delay` has begun.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionrun_event`"

  "transitionrun")

(def transitionstart
  "Event.

  The transitionstart event is fired when a CSS transition has
  started, i.e., after any `transition-delay` has ended.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionstart_event`"

  "transitionstart")

