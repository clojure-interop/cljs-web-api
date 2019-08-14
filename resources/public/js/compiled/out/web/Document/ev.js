// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Document.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   The animationcancel event is fired when a CSS Animation unexpectedly
 *   In other words, any time it stops running without sending an
 *   event. This might happen when the `web.animation-name` is changed
 *   that the animation is removed, or when the animating node is
 *   using CSS. Therefore, either directly or because any of its containing
 *   are hidden.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationcancel_event`
 */
web.Document.ev.animationcancel = "animationcancel";
/**
 * Event.
 * 
 *   The animationend event is fired when a CSS Animation has completed
 *   not if it aborts before reaching completion, such as if the element
 *   invisible or the animation is removed from the element).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationend_event`
 */
web.Document.ev.animationend = "animationend";
/**
 * Event.
 * 
 *   The animationiteration event is fired when an iteration of a
 *   Animation ends, and another one begins. This event does not occur
 *   the same time as the animationend event, and therefore does not
 *   for animations with an animation-iteration-count of one.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationiteration_event`
 */
web.Document.ev.animationiteration = "animationiteration";
/**
 * Event.
 * 
 *   The animationstart event is fired when a CSS Animation has started.
 *   there is an `web.animation-delay`, this event will fire once
 *   delay period has expired. A negative delay will cause the event
 *   fire with an elapsedTime equal to the absolute value of the delay
 *   correspondingly, the animation will begin playing at that time
 *   into the sequence).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/animationstart_event`
 */
web.Document.ev.animationstart = "animationstart";
/**
 * Event.
 * 
 *   The copy event fires when the user initiates a copy action through
 *   browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/copy_event`
 */
web.Document.ev.copy = "copy";
/**
 * Event.
 * 
 *   The cut event is fired when the user has initiated a \"cut\"
 *   through the browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cut_event`
 */
web.Document.ev.cut = "cut";
/**
 * Event.
 * 
 *   The DOMContentLoaded event fires when the initial HTML document
 *   been completely loaded and parsed, without waiting for stylesheets,
 *   and subframes to finish loading.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event`
 */
web.Document.ev.dom_content_loaded = "DOMContentLoaded";
/**
 * Event.
 * 
 *   The drag event is fired every few hundred milliseconds as an
 *   or text selection is being dragged by the user.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event`
 */
web.Document.ev.drag = "drag";
/**
 * Event.
 * 
 *   The dragend event is fired when a drag operation is being ended
 *   releasing a mouse button or hitting the escape key).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragend_event`
 */
web.Document.ev.dragend = "dragend";
/**
 * Event.
 * 
 *   The dragenter event is fired when a dragged element or text selection
 *   a valid drop target.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event`
 */
web.Document.ev.dragenter = "dragenter";
/**
 * Event.
 * 
 *   The dragexit event is fired when an element is no longer the
 *   operation's immediate selection target.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragexit_event`
 */
web.Document.ev.dragexit = "dragexit";
/**
 * Event.
 * 
 *   The dragleave event is fired when a dragged element or text selection
 *   a valid drop target.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event`
 */
web.Document.ev.dragleave = "dragleave";
/**
 * Event.
 * 
 *   The dragover event is fired when an element or text selection
 *   being dragged over a valid drop target (every few hundred milliseconds).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event`
 */
web.Document.ev.dragover = "dragover";
/**
 * Event.
 * 
 *   The dragstart event is fired when the user starts dragging an
 *   or text selection.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event`
 */
web.Document.ev.dragstart = "dragstart";
/**
 * Event.
 * 
 *   The drop event is fired when an element or text selection is
 *   on a valid drop target.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event`
 */
web.Document.ev.drop = "drop";
/**
 * Event.
 * 
 *   The gotpointercapture event is fired when an element captures
 *   pointer using `web.setPointerCapture()`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/gotpointercapture_event`
 */
web.Document.ev.gotpointercapture = "gotpointercapture";
/**
 * Event.
 * 
 *   The keydown event is fired when a key is pressed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event`
 */
web.Document.ev.keydown = "keydown";
/**
 * Event.
 * 
 *   The keypress event is fired when a key that produces a character
 *   is pressed down.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event`
 */
web.Document.ev.keypress = "keypress";
/**
 * Event.
 * 
 *   The keyup event is fired when a key is released.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event`
 */
web.Document.ev.keyup = "keyup";
/**
 * Event.
 * 
 *   The lostpointercapture event is fired when a captured pointer
 *   released.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lostpointercapture_event`
 */
web.Document.ev.lostpointercapture = "lostpointercapture";
/**
 * Event.
 * 
 *   The paste event is fired when the user has initiated a \"paste\"
 *   through the browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/paste_event`
 */
web.Document.ev.paste = "paste";
/**
 * Event.
 * 
 *   The pointercancel event is fired when the browser determines
 *   there are unlikely to be any more pointer events, or if after
 *   pointerdown event is fired, the pointer is then used to manipulate
 *   viewport by panning, zooming, or scrolling.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointercancel_event`
 */
web.Document.ev.pointercancel = "pointercancel";
/**
 * Event.
 * 
 *   The pointerdown event is fired when a pointer becomes active.
 *   mouse, it is fired when the device transitions from no buttons
 *   to at least one button depressed. For touch, it is fired when
 *   contact is made with the digitizer. For pen, it is fired when
 *   stylus makes physical contact with the digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerdown_event`
 */
web.Document.ev.pointerdown = "pointerdown";
/**
 * Event.
 * 
 *   The pointerenter event fires when a pointing device is moved
 *   the hit test boundaries of an element or one of its descendants,
 *   as a result of a `web.pointerdown` event from a device that does
 *   support hover (see `web.pointerdown`).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerenter_event`
 */
web.Document.ev.pointerenter = "pointerenter";
/**
 * Event.
 * 
 *   The pointerleave event is fired when a pointing device is moved
 *   of the hit test boundaries of an element. For pen devices, this
 *   is fired when the stylus leaves the hover range detectable by
 *   digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerleave_event`
 */
web.Document.ev.pointerleave = "pointerleave";
/**
 * Event.
 * 
 *   The pointerlockchange event is fired when the pointer is locked/unlocked.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockchange_event`
 */
web.Document.ev.pointerlockchange = "pointerlockchange";
/**
 * Event.
 * 
 *   The pointerlockerror event is fired when locking the pointer
 *   (for technical reasons or because the permission was denied).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerlockerror_event`
 */
web.Document.ev.pointerlockerror = "pointerlockerror";
/**
 * Event.
 * 
 *   The pointermove event is fired when a pointer changes coordinates,
 *   the pointer has not been canceled by a browser touch-action.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointermove_event`
 */
web.Document.ev.pointermove = "pointermove";
/**
 * Event.
 * 
 *   The pointerout event is fired for several reasons including:
 *   device is moved out of the hit test boundaries of an element;
 *   the `web.pointerup` event for a device that does not support
 *   (see `web.pointerup`); after firing the `web.pointercancel` event
 *   `web.pointercancel`); when a pen stylus leaves the hover range
 *   by the digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerout_event`
 */
web.Document.ev.pointerout = "pointerout";
/**
 * Event.
 * 
 *   The pointerover event is fired when a pointing device is moved
 *   an element's hit test boundaries.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerover_event`
 */
web.Document.ev.pointerover = "pointerover";
/**
 * Event.
 * 
 *   The pointerup event is fired when a pointer is no longer active.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerup_event`
 */
web.Document.ev.pointerup = "pointerup";
/**
 * Event.
 * 
 *   The readystatechange event is fired when the `web.readyState`
 *   of a document has changed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event`
 */
web.Document.ev.readystatechange = "readystatechange";
/**
 * Event.
 * 
 *   The scroll event fires when the document view or an element has
 *   scrolled.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event`
 */
web.Document.ev.scroll = "scroll";
/**
 * Event.
 * 
 *   The touchcancel event is fired when one or more touch points
 *   been disrupted in an implementation-specific manner (for example,
 *   many touch points are created).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchcancel_event`
 */
web.Document.ev.touchcancel = "touchcancel";
/**
 * Event.
 * 
 *   The touchend event fires when one or more touch points are removed
 *   the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchend_event`
 */
web.Document.ev.touchend = "touchend";
/**
 * Event.
 * 
 *   The touchmove event is fired when one or more touch points are
 *   along the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchmove_event`
 */
web.Document.ev.touchmove = "touchmove";
/**
 * Event.
 * 
 *   The touchstart event is fired when one or more touch points are
 *   on the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/touchstart_event`
 */
web.Document.ev.touchstart = "touchstart";
/**
 * Event.
 * 
 *   The transitioncancel event is fired when a CSS transition is
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitioncancel_event`
 */
web.Document.ev.transitioncancel = "transitioncancel";
/**
 * Event.
 * 
 *   The transitionend event is fired when a CSS transition has completed.
 *   the case where a transition is removed before completion, such
 *   if the `web.transition-property` is removed or `web.display`
 *   set to none, then the event will not be generated.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event`
 */
web.Document.ev.transitionend = "transitionend";
/**
 * Event.
 * 
 *   The transitionrun event is fired when a CSS transition is first
 *   i.e. before any `web.transition-delay` has begun.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionrun_event`
 */
web.Document.ev.transitionrun = "transitionrun";
/**
 * Event.
 * 
 *   The transitionstart event is fired when a CSS transition has
 *   started, i.e., after any `web.transition-delay` has ended.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionstart_event`
 */
web.Document.ev.transitionstart = "transitionstart";
/**
 * Event.
 * 
 *   The wheel event fires when the user rotates a wheel button on
 *   pointing device (typically a mouse).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/wheel_event`
 */
web.Document.ev.wheel = "wheel";
/**
 * Event.
 * 
 *   The fullscreenchange event is fired immediately after the browser
 *   into or out of full-screen mode.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event`
 */
web.Document.ev.fullscreenchange = "fullscreenchange";
/**
 * Event.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event`
 */
web.Document.ev.selectionchange = "selectionchange";
/**
 * Event.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectstart_event`
 */
web.Document.ev.selectstart = "selectstart";

//# sourceMappingURL=ev.js.map?rel=1565798860902
