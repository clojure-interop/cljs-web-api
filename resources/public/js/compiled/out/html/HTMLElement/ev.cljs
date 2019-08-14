(ns html.HTMLElement.ev
  "HTMLElement Events."
  (:refer-clojure :exclude []))

(def animationcancel
  "Event.

  An animationcancel event is fired when a CSS Animation unexpectedly
  In other words, any time it stops running without sending an
  event). This might happen when the `web.animation-name` is changed
  that the animation is removed, or when the animating node is
  using CSS. Therefore, either directly or because any of its containing
  are hidden.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationcancel_event`"

  "animationcancel")

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
  there is an `web.animation-delay`, this event will fire once
  delay period has expired. A negative delay will cause the event
  fire with an elapsedTime equal to the absolute value of the delay
  correspondingly, the animation will begin playing at that time
  into the sequence).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event`"

  "animationstart")

(def beforeinput
  "Event.

  The DOM beforeinput event fires when the value of an `web.<input>`,
  or `web.<textarea>` element is about to be modified. The event
  applies to elements with `web.contenteditable` enabled, and to
  element when `web.designMode` is turned on.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event`"

  "beforeinput")

(def change
  "Event.

  The change event is fired for `web.<input>`, `web.<select>`,
  `web.<textarea>` elements when an alteration to the element's
  is committed by the user. Unlike the input event, the change
  is not necessarily fired for each alteration to an element's

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`"

  "change")

(def gotpointercapture
  "Event.

  The gotpointercapture event is fired when an element captures
  pointer using setPointerCapture().

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/gotpointercapture_event`"

  "gotpointercapture")

(def input
  "Event.

  The input event fires when the value of an `web.<input>`, `web.<select>`,
  `web.<textarea>` element has been changed.

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

(def transitioncancel
  "Event.

  The transitioncancel event is fired when a CSS transition is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitioncancel_event`"

  "transitioncancel")

(def transitionend
  "Event.

  The transitionend event is fired when a CSS transition has completed.
  the case where a transition is removed before completion, such
  if the `web.transition-property` is removed or `web.display`
  set to none, then the event will not be generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event`"

  "transitionend")

(def transitionrun
  "Event.

  The transitionrun event is fired when a CSS transition is first
  i.e. before any `web.transition-delay` has begun.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionrun_event`"

  "transitionrun")

(def transitionstart
  "Event.

  The transitionstart event is fired when a CSS transition has
  started, i.e., after any `web.transition-delay` has ended.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionstart_event`"

  "transitionstart")

