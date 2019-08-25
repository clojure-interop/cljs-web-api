(ns web.Document.ev
  "Document Events."
  (:refer-clojure :exclude [drop]))

(def scroll
  "Event.

  The scroll event fires when the document view or an element has
  scrolled.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event`"

  "scroll")

(def animationcancel
  "Event.

  The animationcancel event is fired when a CSS Animation unexpectedly
  In other words, any time it stops running without sending an
  event. This might happen when the `animation-name` is changed
  that the animation is removed, or when the animating node is
  using CSS. Therefore, either directly or because any of its containing
  are hidden.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationcancel_event`"

  "animationcancel")

(def copy
  "Event.

  The copy event fires when the user initiates a copy action through
  browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/copy_event`"

  "copy")

(def drag
  "Event.

  The drag event is fired every few hundred milliseconds as an
  or text selection is being dragged by the user.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event`"

  "drag")

(def fullscreenchange
  "Event.

  The fullscreenchange event is fired immediately after the browser
  into or out of full-screen mode.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event`"

  "fullscreenchange")

(def dom-content-loaded
  "Event.

  The DOMContentLoaded event fires when the initial HTML document
  been completely loaded and parsed, without waiting for stylesheets,
  and subframes to finish loading.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event`"

  "DOMContentLoaded")

(def gotpointercapture
  "Event.

  The gotpointercapture event is fired when an element captures
  pointer using `setPointerCapture()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/gotpointercapture_event`"

  "gotpointercapture")

(def selectionchange
  "Event.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event`"

  "selectionchange")

(def touchcancel
  "Event.

  The touchcancel event is fired when one or more touch points
  been disrupted in an implementation-specific manner (for example,
  many touch points are created).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchcancel_event`"

  "touchcancel")

(def animationend
  "Event.

  The animationend event is fired when a CSS Animation has completed
  not if it aborts before reaching completion, such as if the element
  invisible or the animation is removed from the element).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationend_event`"

  "animationend")

(def animationiteration
  "Event.

  The animationiteration event is fired when an iteration of a
  Animation ends, and another one begins. This event does not occur
  the same time as the animationend event, and therefore does not
  for animations with an animation-iteration-count of one.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationiteration_event`"

  "animationiteration")

(def animationstart
  "Event.

  The animationstart event is fired when a CSS Animation has started.
  there is an `animation-delay`, this event will fire once the
  period has expired. A negative delay will cause the event to
  with an elapsedTime equal to the absolute value of the delay
  correspondingly, the animation will begin playing at that time
  into the sequence).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationstart_event`"

  "animationstart")

(def cut
  "Event.

  The cut event is fired when the user has initiated a \\\"cut\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cut_event`"

  "cut")

(def dragend
  "Event.

  The dragend event is fired when a drag operation is being ended
  releasing a mouse button or hitting the escape key).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragend_event`"

  "dragend")

(def dragenter
  "Event.

  The dragenter event is fired when a dragged element or text selection
  a valid drop target.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event`"

  "dragenter")

(def dragexit
  "Event.

  The dragexit event is fired when an element is no longer the
  operation's immediate selection target.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragexit_event`"

  "dragexit")

(def dragleave
  "Event.

  The dragleave event is fired when a dragged element or text selection
  a valid drop target.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event`"

  "dragleave")

(def dragover
  "Event.

  The dragover event is fired when an element or text selection
  being dragged over a valid drop target (every few hundred milliseconds).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event`"

  "dragover")

(def dragstart
  "Event.

  The dragstart event is fired when the user starts dragging an
  or text selection.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event`"

  "dragstart")

(def drop
  "Event.

  The drop event is fired when an element or text selection is
  on a valid drop target.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event`"

  "drop")

(def keydown
  "Event.

  The keydown event is fired when a key is pressed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event`"

  "keydown")

(def keypress
  "Event.

  The keypress event is fired when a key that produces a character
  is pressed down.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event`"

  "keypress")

(def keyup
  "Event.

  The keyup event is fired when a key is released.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event`"

  "keyup")

(def lostpointercapture
  "Event.

  The lostpointercapture event is fired when a captured pointer
  released.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lostpointercapture_event`"

  "lostpointercapture")

(def paste
  "Event.

  The paste event is fired when the user has initiated a \\\"paste\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/paste_event`"

  "paste")

(def pointercancel
  "Event.

  The pointercancel event is fired when the browser determines
  there are unlikely to be any more pointer events, or if after
  pointerdown event is fired, the pointer is then used to manipulate
  viewport by panning, zooming, or scrolling.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointercancel_event`"

  "pointercancel")

(def pointerdown
  "Event.

  The pointerdown event is fired when a pointer becomes active.
  mouse, it is fired when the device transitions from no buttons
  to at least one button depressed. For touch, it is fired when
  contact is made with the digitizer. For pen, it is fired when
  stylus makes physical contact with the digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerdown_event`"

  "pointerdown")

(def pointerenter
  "Event.

  The pointerenter event fires when a pointing device is moved
  the hit test boundaries of an element or one of its descendants,
  as a result of a `pointerdown` event from a device that does
  support hover (see `pointerdown`).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerenter_event`"

  "pointerenter")

(def pointerleave
  "Event.

  The pointerleave event is fired when a pointing device is moved
  of the hit test boundaries of an element. For pen devices, this
  is fired when the stylus leaves the hover range detectable by
  digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerleave_event`"

  "pointerleave")

(def pointerlockchange
  "Event.

  The pointerlockchange event is fired when the pointer is locked/unlocked.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockchange_event`"

  "pointerlockchange")

(def pointerlockerror
  "Event.

  The pointerlockerror event is fired when locking the pointer
  (for technical reasons or because the permission was denied).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockerror_event`"

  "pointerlockerror")

(def pointermove
  "Event.

  The pointermove event is fired when a pointer changes coordinates,
  the pointer has not been canceled by a browser touch-action.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointermove_event`"

  "pointermove")

(def pointerout
  "Event.

  The pointerout event is fired for several reasons including:
  device is moved out of the hit test boundaries of an element;
  the `pointerup` event for a device that does not support hover
  `pointerup`); after firing the `pointercancel` event (see `pointercancel`);
  a pen stylus leaves the hover range detectable by the digitizer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerout_event`"

  "pointerout")

(def pointerover
  "Event.

  The pointerover event is fired when a pointing device is moved
  an element's hit test boundaries.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerover_event`"

  "pointerover")

(def pointerup
  "Event.

  The pointerup event is fired when a pointer is no longer active.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerup_event`"

  "pointerup")

(def readystatechange
  "Event.

  The readystatechange event is fired when the `readyState` attribute
  a document has changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event`"

  "readystatechange")

(def touchend
  "Event.

  The touchend event fires when one or more touch points are removed
  the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchend_event`"

  "touchend")

(def touchmove
  "Event.

  The touchmove event is fired when one or more touch points are
  along the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchmove_event`"

  "touchmove")

(def touchstart
  "Event.

  The touchstart event is fired when one or more touch points are
  on the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchstart_event`"

  "touchstart")

(def transitioncancel
  "Event.

  The transitioncancel event is fired when a CSS transition is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitioncancel_event`"

  "transitioncancel")

(def transitionend
  "Event.

  The transitionend event is fired when a CSS transition has completed.
  the case where a transition is removed before completion, such
  if the `transition-property` is removed or `display` is set to
  then the event will not be generated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event`"

  "transitionend")

(def transitionrun
  "Event.

  The transitionrun event is fired when a CSS transition is first
  i.e. before any `transition-delay` has begun.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionrun_event`"

  "transitionrun")

(def transitionstart
  "Event.

  The transitionstart event is fired when a CSS transition has
  started, i.e., after any `transition-delay` has ended.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionstart_event`"

  "transitionstart")

