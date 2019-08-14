// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Element.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   The afterscriptexecute event is fired after a script has been
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/afterscriptexecute_event`
 */
web.Element.ev.afterscriptexecute = "afterscriptexecute";
/**
 * Event.
 * 
 *   The auxclick event is fired at an `web.Element` when a non-primary
 *   device button (any mouse button other than the primary—usually
 *   has been pressed and released both within the same element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event`
 */
web.Element.ev.auxclick = "auxclick";
/**
 * Event.
 * 
 *   The blur event fires when an element has lost focus. The main
 *   between this event and `web.focusout` is that focusout bubbles
 *   blur does not.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event`
 */
web.Element.ev.blur = "blur";
/**
 * Event.
 * 
 *   An element receives a click event when a pointing device button
 *   as a mouse's primary mouse button) is both pressed and released
 *   the pointer is located inside the element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event`
 */
web.Element.ev.click = "click";
/**
 * Event.
 * 
 *   The compositionend event is fired when a text composition system
 *   as an input method editor completes or cancels the current composition
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event`
 */
web.Element.ev.compositionend = "compositionend";
/**
 * Event.
 * 
 *   The compositionstart event is fired when a text composition system
 *   as an input method editor starts a new composition session.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event`
 */
web.Element.ev.compositionstart = "compositionstart";
/**
 * Event.
 * 
 *   The compositionupdate event is fired when a new character is
 *   in the context of a text composition session controlled by a
 *   composition system such as an input method editor.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event`
 */
web.Element.ev.compositionupdate = "compositionupdate";
/**
 * Event.
 * 
 *   The contextmenu event fires when the user attempts to open a
 *   menu. This event is typically triggered by clicking the right
 *   button, or by pressing the context menu key.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event`
 */
web.Element.ev.contextmenu = "contextmenu";
/**
 * Event.
 * 
 *   The copy event fires when the user initiates a copy action through
 *   browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event`
 */
web.Element.ev.copy = "copy";
/**
 * Event.
 * 
 *   The cut event is fired when the user has initiated a \"cut\"
 *   through the browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event`
 */
web.Element.ev.cut = "cut";
/**
 * Event.
 * 
 *   The dblclick event fires when a pointing device button (such
 *   a mouse's primary button) is double-clicked; that is, when it's
 *   clicked twice on a single element within a very short span of
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event`
 */
web.Element.ev.dblclick = "dblclick";
/**
 * Event.
 * 
 *   The DOM DOMMouseScroll event is fired asynchronously when mouse
 *   or similar device is operated and the accumulated scroll amount
 *   over 1 line or 1 page since last event. It's represented by the
 *   interface. This event was only implemented by Firefox. You should
 *   use the standard `web.wheel` event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/DOMMouseScroll_event`
 */
web.Element.ev.dom_mouse_scroll = "DOMMouseScroll";
/**
 * Event.
 * 
 *   The error event is fired on an `web.Element` object when a resource
 *   to load, or can't be used. For example, if a script has an execution
 *   or an image can't be found or is invalid.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/error_event`
 */
web.Element.ev.error = "error";
/**
 * Event.
 * 
 *   The focus event fires when an element has received focus. The
 *   difference between this event and `web.focusin` is that focusin
 *   while focus does not.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event`
 */
web.Element.ev.focus = "focus";
/**
 * Event.
 * 
 *   The focusin event fires when an element is about to receive focus.
 *   main difference between this event and `web.focus` is that focusin
 *   while focus does not.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event`
 */
web.Element.ev.focusin = "focusin";
/**
 * Event.
 * 
 *   The focusout event fires when an element is about to lose focus.
 *   main difference between this event and `web.blur` is that focusout
 *   while blur does not.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event`
 */
web.Element.ev.focusout = "focusout";
/**
 * Event.
 * 
 *   The gesturechange event is fired when digits move during a touch
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gesturechange_event`
 */
web.Element.ev.gesturechange = "gesturechange";
/**
 * Event.
 * 
 *   The gestureend event is fired when there are no longer multiple
 *   contacting the touch surface, thus ending the gesture.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gestureend_event`
 */
web.Element.ev.gestureend = "gestureend";
/**
 * Event.
 * 
 *   The gesturestart event is fired when multiple fingers contact
 *   touch surface, thus starting a new gesture. During the gesture,
 *   events will be fired. When the gesture has ended, a gestureend
 *   will be fired.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gesturestart_event`
 */
web.Element.ev.gesturestart = "gesturestart";
/**
 * Event.
 * 
 *   The keydown event is fired when a key is pressed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event`
 */
web.Element.ev.keydown = "keydown";
/**
 * Event.
 * 
 *   The mousedown event is fired at an `web.Element` when a pointing
 *   button is pressed while the pointer is inside the element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event`
 */
web.Element.ev.mousedown = "mousedown";
/**
 * Event.
 * 
 *   The mouseenter event is fired at an `web.Element` when a pointing
 *   (usually a mouse) is initially moved so that its hotspot is within
 *   element at which the event was fired.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event`
 */
web.Element.ev.mouseenter = "mouseenter";
/**
 * Event.
 * 
 *   The mousemove event is fired at an element when a pointing device
 *   a mouse) is moved while the cursor's hotspot is inside it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event`
 */
web.Element.ev.mousemove = "mousemove";
/**
 * Event.
 * 
 *   The mouseout event is fired at an `web.Element` when a pointing
 *   (usually a mouse) is used to move the cursor so that it is no
 *   contained within the element or one of its children.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event`
 */
web.Element.ev.mouseout = "mouseout";
/**
 * Event.
 * 
 *   The mouseover event is fired at an `web.Element` when a pointing
 *   (such as a mouse or trackpad) is used to move the cursor onto
 *   element or one of its child elements.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event`
 */
web.Element.ev.mouseover = "mouseover";
/**
 * Event.
 * 
 *   The mouseup event is fired at an `web.Element` when a button
 *   a pointing device (such as a mouse or trackpad) is released while
 *   pointer is located inside it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event`
 */
web.Element.ev.mouseup = "mouseup";
/**
 * Event.
 * 
 *   The obsolete and non-standard mousewheel event is fired asynchronously
 *   an `web.Element` to provide updates while a mouse wheel or similar
 *   is operated. The mousewheel event was never part of any standard,
 *   while it was implemented by several browsers, it was never implemented
 *   Firefox.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event`
 */
web.Element.ev.mousewheel = "mousewheel";
/**
 * Event.
 * 
 *   The Firefox-only, non-standard, and obsolete MozMousePixelScroll
 *   is fired at an `web.Element` asynchronously when a mouse wheel
 *   similar device is operated. It's represented by the `web.MouseScrollEvent`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MozMousePixelScroll`
 */
web.Element.ev.moz_mouse_pixel_scroll = "MozMousePixelScroll";
/**
 * Event.
 * 
 *   The msContentZoom event fires when a user zooms the element (changes
 *   scale of the content).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/msContentZoom_event`
 */
web.Element.ev.ms_content_zoom = "msContentZoom";
/**
 * Event.
 * 
 *   The MSGestureChange event is fired when touch contact positions
 *   and also while inertia-based movements are being processed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureChange_event`
 */
web.Element.ev.ms_gesture_change = "MSGestureChange";
/**
 * Event.
 * 
 *   The MSGestureEnd event is fired when all associated touch points
 *   stopped contacting the touch surface, and any associated inertial
 *   have ended; thus ending the gesture.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureEnd_event`
 */
web.Element.ev.ms_gesture_end = "MSGestureEnd";
/**
 * Event.
 * 
 *   The MSGestureHold event is fired when the user contacts the touch
 *   and remains in the same position for a while.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureHold_event`
 */
web.Element.ev.ms_gesture_hold = "MSGestureHold";
/**
 * Event.
 * 
 *   The MSGestureStart event is fired when there's a new point of
 *   on the touch surface, thus starting a new gesture. When the gesture
 *   ended, a MSGestureEnd event will be fired.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureStart_event`
 */
web.Element.ev.ms_gesture_start = "MSGestureStart";
/**
 * Event.
 * 
 *   The MSGestureTap event is fired when the user \"taps\" the pointing
 *   (e.g., touches the touch surface with their finger, taps the
 *   surface with a pen device, clicks with a mouse). Typically, it's
 *   to listen for the click event instead.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureTap_event`
 */
web.Element.ev.ms_gesture_tap = "MSGestureTap";
/**
 * Event.
 * 
 *   The MSInertiaStart event is fired when contact with the touch
 *   stops when a scroll has enough inertia to continue scrolling.
 *   event may not be fired if the scroll is sufficiently slow.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSInertiaStart_event`
 */
web.Element.ev.ms_inertia_start = "MSInertiaStart";
/**
 * Event.
 * 
 *   MSManipulationStateChanged fires when the state of an element
 *   manipulated has changed (ie. whenever you start or finish panning
 *   zooming an element).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSManipulationStateChanged_event`
 */
web.Element.ev.ms_manipulation_state_changed = "MSManipulationStateChanged";
/**
 * Event.
 * 
 *   The overflow event is fired when an element has been overflowed
 *   its content or has been rendered for the first time in this state
 *   works for elements styled with overflow != visible).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/overflow_event`
 */
web.Element.ev.overflow = "overflow";
/**
 * Event.
 * 
 *   The paste event is fired when the user has initiated a \"paste\"
 *   through the browser's user interface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event`
 */
web.Element.ev.paste = "paste";
/**
 * Event.
 * 
 *   The select event fires when some text has been selected.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event`
 */
web.Element.ev.select = "select";
/**
 * Event.
 * 
 *   The show event is fired when a contextmenu event was fired on/bubbled
 *   an element that has a `web.contextmenu`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/show_event`
 */
web.Element.ev.show = "show";
/**
 * Event.
 * 
 *   The touchcancel event is fired when one or more touch points
 *   been disrupted in an implementation-specific manner (for example,
 *   many touch points are created).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event`
 */
web.Element.ev.touchcancel = "touchcancel";
/**
 * Event.
 * 
 *   The touchstart event is fired when one or more touch points are
 *   on the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event`
 */
web.Element.ev.touchstart = "touchstart";
/**
 * Event.
 * 
 *   The non-standard underflow event, which is specific to Firefox,
 *   fired when an element is no longer overflowed by its content.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/underflow_event`
 */
web.Element.ev.underflow = "underflow";
/**
 * Event.
 * 
 *   The non-standard webkitmouseforcechanged event is fired by Safari
 *   time the amount of pressure changes on the trackpad/touchscreen.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcechanged_event`
 */
web.Element.ev.webkitmouseforcechanged = "webkitmouseforcechanged";
/**
 * Event.
 * 
 *   After a `web.mousedown` event has been fired at the element,
 *   and when sufficient pressure has been applied to the mouse or
 *   button to qualify as a \"force click,\" Safari begins sending
 *   events to the element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcedown_event`
 */
web.Element.ev.webkitmouseforcedown = "webkitmouseforcedown";
/**
 * Event.
 * 
 *   The non-standard webkitmouseforceup event is fired by Safari
 *   an `web.Element` some time after the webkitmouseforcedown event,
 *   pressure on the button has been reduced sufficiently to end the
 *   click\".
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforceup_event`
 */
web.Element.ev.webkitmouseforceup = "webkitmouseforceup";
/**
 * Event.
 * 
 *   Safari for macOS fires the non-standard webkitmouseforcewillbegin
 *   at an `web.Element` before firing the initial mousedown event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcewillbegin_event`
 */
web.Element.ev.webkitmouseforcewillbegin = "webkitmouseforcewillbegin";
/**
 * Event.
 * 
 *   The wheel event fires when the user rotates a wheel button on
 *   pointing device (typically a mouse).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event`
 */
web.Element.ev.wheel = "wheel";
/**
 * Event.
 * 
 *   The scroll event fires an element has been scrolled.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event`
 */
web.Element.ev.scroll = "scroll";
/**
 * Event.
 * 
 *   The DOMActivate event is fired at an element when it becomes
 *   such as when it is clicked on using the mouse or a keypress is
 *   to navigate to it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/DOMActivate_event`
 */
web.Element.ev.dom_activate = "DOMActivate";
/**
 * Event.
 * 
 *   The mouseleave event is fired at an `web.Element` when the cursor
 *   a pointing device (usually a mouse) is moved out of it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event`
 */
web.Element.ev.mouseleave = "mouseleave";
/**
 * Event.
 * 
 *   The touchend event fires when one or more touch points are removed
 *   the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event`
 */
web.Element.ev.touchend = "touchend";
/**
 * Event.
 * 
 *   The touchmove event is fired when one or more touch points are
 *   along the touch surface.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event`
 */
web.Element.ev.touchmove = "touchmove";

//# sourceMappingURL=ev.js.map?rel=1565798855709
