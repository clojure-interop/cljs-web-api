// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLElement.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   An animationcancel event is fired when a CSS Animation unexpectedly
 *   In other words, any time it stops running without sending an
 *   event). This might happen when the `web.animation-name` is changed
 *   that the animation is removed, or when the animating node is
 *   using CSS. Therefore, either directly or because any of its containing
 *   are hidden.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationcancel_event`
 */
html.HTMLElement.ev.animationcancel = "animationcancel";
/**
 * Event.
 * 
 *   The animationend event is fired when a CSS Animation has completed
 *   not if it aborts before reaching completion, such as if the element
 *   invisible or the animation is removed from the element).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event`
 */
html.HTMLElement.ev.animationend = "animationend";
/**
 * Event.
 * 
 *   The animationiteration event is fired when an iteration of a
 *   Animation ends, and another one begins. This event does not occur
 *   the same time as the animationend event, and therefore does not
 *   for animations with an animation-iteration-count of one.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationiteration_event`
 */
html.HTMLElement.ev.animationiteration = "animationiteration";
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
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event`
 */
html.HTMLElement.ev.animationstart = "animationstart";
/**
 * Event.
 * 
 *   The DOM beforeinput event fires when the value of an `web.<input>`,
 *   or `web.<textarea>` element is about to be modified. The event
 *   applies to elements with `web.contenteditable` enabled, and to
 *   element when `web.designMode` is turned on.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event`
 */
html.HTMLElement.ev.beforeinput = "beforeinput";
/**
 * Event.
 * 
 *   The change event is fired for `web.<input>`, `web.<select>`,
 *   `web.<textarea>` elements when an alteration to the element's
 *   is committed by the user. Unlike the input event, the change
 *   is not necessarily fired for each alteration to an element's
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`
 */
html.HTMLElement.ev.change = "change";
/**
 * Event.
 * 
 *   The gotpointercapture event is fired when an element captures
 *   pointer using setPointerCapture().
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/gotpointercapture_event`
 */
html.HTMLElement.ev.gotpointercapture = "gotpointercapture";
/**
 * Event.
 * 
 *   The input event fires when the value of an `web.<input>`, `web.<select>`,
 *   `web.<textarea>` element has been changed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event`
 */
html.HTMLElement.ev.input = "input";
/**
 * Event.
 * 
 *   The lostpointercapture event is fired when a captured pointer
 *   released.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lostpointercapture_event`
 */
html.HTMLElement.ev.lostpointercapture = "lostpointercapture";
/**
 * Event.
 * 
 *   The pointercancel event is fired when the browser determines
 *   there are unlikely to be any more pointer events, or if after
 *   pointerdown event is fired, the pointer is then used to manipulate
 *   viewport by panning, zooming, or scrolling.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointercancel_event`
 */
html.HTMLElement.ev.pointercancel = "pointercancel";
/**
 * Event.
 * 
 *   The pointerdown event is fired when a pointer becomes active.
 *   mouse, it is fired when the device transitions from no buttons
 *   to at least one button depressed. For touch, it is fired when
 *   contact is made with the digitizer. For pen, it is fired when
 *   stylus makes physical contact with the digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerdown_event`
 */
html.HTMLElement.ev.pointerdown = "pointerdown";
/**
 * Event.
 * 
 *   The pointerenter event fires when a pointing device is moved
 *   the hit test boundaries of an element or one of its descendants,
 *   as a result of a pointerdown event from a device that does not
 *   hover (see pointerdown).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerenter_event`
 */
html.HTMLElement.ev.pointerenter = "pointerenter";
/**
 * Event.
 * 
 *   The pointerleave event is fired when a pointing device is moved
 *   of the hit test boundaries of an element. For pen devices, this
 *   is fired when the stylus leaves the hover range detectable by
 *   digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerleave_event`
 */
html.HTMLElement.ev.pointerleave = "pointerleave";
/**
 * Event.
 * 
 *   The pointermove event is fired when a pointer changes coordinates,
 *   the pointer has not been canceled by a browser touch-action.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointermove_event`
 */
html.HTMLElement.ev.pointermove = "pointermove";
/**
 * Event.
 * 
 *   The pointerout event is fired for several reasons including:
 *   device is moved out of the hit test boundaries of an element;
 *   the pointerup event for a device that does not support hover
 *   pointerup); after firing the pointercancel event (see pointercancel);
 *   a pen stylus leaves the hover range detectable by the digitizer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerout_event`
 */
html.HTMLElement.ev.pointerout = "pointerout";
/**
 * Event.
 * 
 *   The pointerover event is fired when a pointing device is moved
 *   an element's hit test boundaries.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerover_event`
 */
html.HTMLElement.ev.pointerover = "pointerover";
/**
 * Event.
 * 
 *   The pointerup event is fired when a pointer is no longer active.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerup_event`
 */
html.HTMLElement.ev.pointerup = "pointerup";
/**
 * Event.
 * 
 *   The transitioncancel event is fired when a CSS transition is
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitioncancel_event`
 */
html.HTMLElement.ev.transitioncancel = "transitioncancel";
/**
 * Event.
 * 
 *   The transitionend event is fired when a CSS transition has completed.
 *   the case where a transition is removed before completion, such
 *   if the `web.transition-property` is removed or `web.display`
 *   set to none, then the event will not be generated.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event`
 */
html.HTMLElement.ev.transitionend = "transitionend";
/**
 * Event.
 * 
 *   The transitionrun event is fired when a CSS transition is first
 *   i.e. before any `web.transition-delay` has begun.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionrun_event`
 */
html.HTMLElement.ev.transitionrun = "transitionrun";
/**
 * Event.
 * 
 *   The transitionstart event is fired when a CSS transition has
 *   started, i.e., after any `web.transition-delay` has ended.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionstart_event`
 */
html.HTMLElement.ev.transitionstart = "transitionstart";

//# sourceMappingURL=ev.js.map?rel=1565798837073
