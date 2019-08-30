(ns web.Element.ev
  "Element Events."
  (:refer-clojure :exclude []))

(def cancel
  "Event.

  Fires on a <dialog> when the user instructs the browser that
  wish to dismiss the current open dialog. For example, the browser
  fire this event when the user presses the Esc key or clicks a
  dialog\" button which is part of the browser's UI.
  Also available via the oncancel property."

  "cancel")

(def error
  "Event.

  Fired when when a resource failed to load, or can't be used.
  example, if a script has an execution error or an image can't
  found or is invalid.
  Also available via the onerror property."

  "error")

(def scroll
  "Event.

  The scroll event fires an element has been scrolled.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event`"

  "scroll")

(def select
  "Event.

  The select event fires when some text has been selected.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event`"

  "select")

(def show
  "Event.

  [Deprecated]

  The show event is fired when a contextmenu event was fired on/bubbled
  an element that has a `contextmenu`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/show_event`"

  "show")

(def wheel
  "Event.

  The wheel event fires when the user rotates a wheel button on
  pointing device (typically a mouse).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event`"

  "wheel")

(def copy
  "Event.

  The copy event fires when the user initiates a copy action through
  browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event`"

  "copy")

(def cut
  "Event.

  The cut event is fired when the user has initiated a \\\"cut\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event`"

  "cut")

(def paste
  "Event.

  The paste event is fired when the user has initiated a \\\"paste\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event`"

  "paste")

(def compositionend
  "Event.

  The compositionend event is fired when a text composition system
  as an input method editor completes or cancels the current composition

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event`"

  "compositionend")

(def compositionstart
  "Event.

  The compositionstart event is fired when a text composition system
  as an input method editor starts a new composition session.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event`"

  "compositionstart")

(def compositionupdate
  "Event.

  The compositionupdate event is fired when a new character is
  in the context of a text composition session controlled by a
  composition system such as an input method editor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event`"

  "compositionupdate")

(def blur
  "Event.

  The blur event fires when an element has lost focus. The main
  between this event and `focusout` is that focusout bubbles while
  does not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event`"

  "blur")

(def focus
  "Event.

  The focus event fires when an element has received focus. The
  difference between this event and `focusin` is that focusin bubbles
  focus does not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event`"

  "focus")

(def focusin
  "Event.

  The focusin event fires when an element is about to receive focus.
  main difference between this event and `focus` is that focusin
  while focus does not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event`"

  "focusin")

(def focusout
  "Event.

  The focusout event fires when an element is about to lose focus.
  main difference between this event and `blur` is that focusout
  while blur does not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event`"

  "focusout")

(def fullscreenchange
  "Event.

  Sent to an Element when it transitions into or out of full-screen
  Also available via the onfullscreenchange property."

  "fullscreenchange")

(def fullscreenerror
  "Event.

  Sent to an Element if an error occurs while attempting to switch
  into or out of full-screen mode.
  Also available via the onfullscreenerror property."

  "fullscreenerror")

(def keydown
  "Event.

  Fired when a key is pressed.
  Also available via the onkeydown property."

  "keydown")

(def keypress
  "Event.

  Fired when a key that produces a character value is pressed down.
  Also available via the onkeypress property."

  "keypress")

(def keyup
  "Event.

  Fired when a key is released.
  Also available via the onkeyup property."

  "keyup")

(def auxclick
  "Event.

  The auxclick event is fired at an `web.Element` when a non-primary
  device button (any mouse button other than the primary—usually
  has been pressed and released both within the same element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event`"

  "auxclick")

(def click
  "Event.

  An element receives a click event when a pointing device button
  as a mouse's primary mouse button) is both pressed and released
  the pointer is located inside the element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event`"

  "click")

(def contextmenu
  "Event.

  The contextmenu event fires when the user attempts to open a
  menu. This event is typically triggered by clicking the right
  button, or by pressing the context menu key.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event`"

  "contextmenu")

(def dblclick
  "Event.

  The dblclick event fires when a pointing device button (such
  a mouse's primary button) is double-clicked; that is, when it's
  clicked twice on a single element within a very short span of

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event`"

  "dblclick")

(def dom-activate
  "Event.

  [Deprecated]

  The DOMActivate event is fired at an element when it becomes
  such as when it is clicked on using the mouse or a keypress is
  to navigate to it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/DOMActivate_event`"

  "DOMActivate")

(def mousedown
  "Event.

  The mousedown event is fired at an `web.Element` when a pointing
  button is pressed while the pointer is inside the element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event`"

  "mousedown")

(def mouseenter
  "Event.

  The mouseenter event is fired at an `web.Element` when a pointing
  (usually a mouse) is initially moved so that its hotspot is within
  element at which the event was fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event`"

  "mouseenter")

(def mouseleave
  "Event.

  The mouseleave event is fired at an `web.Element` when the cursor
  a pointing device (usually a mouse) is moved out of it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event`"

  "mouseleave")

(def mousemove
  "Event.

  The mousemove event is fired at an element when a pointing device
  a mouse) is moved while the cursor's hotspot is inside it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event`"

  "mousemove")

(def mouseout
  "Event.

  The mouseout event is fired at an `web.Element` when a pointing
  (usually a mouse) is used to move the cursor so that it is no
  contained within the element or one of its children.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event`"

  "mouseout")

(def mouseover
  "Event.

  The mouseover event is fired at an `web.Element` when a pointing
  (such as a mouse or trackpad) is used to move the cursor onto
  element or one of its child elements.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event`"

  "mouseover")

(def mouseup
  "Event.

  The mouseup event is fired at an `web.Element` when a button
  a pointing device (such as a mouse or trackpad) is released while
  pointer is located inside it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event`"

  "mouseup")

(def webkitmouseforcechanged
  "Event.

  [Non Standard]

  The non-standard webkitmouseforcechanged event is fired by Safari
  time the amount of pressure changes on the trackpad/touchscreen.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcechanged_event`"

  "webkitmouseforcechanged")

(def webkitmouseforcedown
  "Event.

  [Non Standard]

  After a `mousedown` event has been fired at the element, if and
  sufficient pressure has been applied to the mouse or trackpad
  to qualify as a \\\"force click,\\\" Safari begins sending webkitmouseforcedown
  to the element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcedown_event`"

  "webkitmouseforcedown")

(def webkitmouseforcewillbegin
  "Event.

  [Non Standard]

  Safari for macOS fires the non-standard webkitmouseforcewillbegin
  at an `web.Element` before firing the initial mousedown event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforcewillbegin_event`"

  "webkitmouseforcewillbegin")

(def webkitmouseforceup
  "Event.

  [Non Standard]

  The non-standard webkitmouseforceup event is fired by Safari
  an `web.Element` some time after the webkitmouseforcedown event,
  pressure on the button has been reduced sufficiently to end the
  click\\\".

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/webkitmouseforceup_event`"

  "webkitmouseforceup")

(def touchcancel
  "Event.

  The touchcancel event is fired when one or more touch points
  been disrupted in an implementation-specific manner (for example,
  many touch points are created).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event`"

  "touchcancel")

(def touchend
  "Event.

  The touchend event fires when one or more touch points are removed
  the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event`"

  "touchend")

(def touchmove
  "Event.

  The touchmove event is fired when one or more touch points are
  along the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event`"

  "touchmove")

(def touchstart
  "Event.

  The touchstart event is fired when one or more touch points are
  on the touch surface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event`"

  "touchstart")

(def afterscriptexecute
  "Event.

  [Non Standard]

  The afterscriptexecute event is fired after a script has been

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/afterscriptexecute_event`"

  "afterscriptexecute")

(def dom-mouse-scroll
  "Event.

  [Deprecated]
  [Non Standard]

  The DOM DOMMouseScroll event is fired asynchronously when mouse
  or similar device is operated and the accumulated scroll amount
  over 1 line or 1 page since last event. It's represented by the
  interface. This event was only implemented by Firefox. You should
  use the standard `wheel` event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/DOMMouseScroll_event`"

  "DOMMouseScroll")

(def gesturechange
  "Event.

  [Non Standard]

  The gesturechange event is fired when digits move during a touch

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gesturechange_event`"

  "gesturechange")

(def gestureend
  "Event.

  [Non Standard]

  The gestureend event is fired when there are no longer multiple
  contacting the touch surface, thus ending the gesture.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gestureend_event`"

  "gestureend")

(def gesturestart
  "Event.

  [Non Standard]

  The gesturestart event is fired when multiple fingers contact
  touch surface, thus starting a new gesture. During the gesture,
  events will be fired. When the gesture has ended, a gestureend
  will be fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/gesturestart_event`"

  "gesturestart")

(def mousewheel
  "Event.

  [Deprecated]
  [Non Standard]

  The obsolete and non-standard mousewheel event is fired asynchronously
  an `web.Element` to provide updates while a mouse wheel or similar
  is operated. The mousewheel event was never part of any standard,
  while it was implemented by several browsers, it was never implemented
  Firefox.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event`"

  "mousewheel")

(def moz-mouse-pixel-scroll
  "Event.

  [Deprecated]
  [Non Standard]

  The Firefox-only, non-standard, and obsolete MozMousePixelScroll
  is fired at an `web.Element` asynchronously when a mouse wheel
  similar device is operated. It's represented by the `web.deprecated.MouseScrollEvent`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MozMousePixelScroll`"

  "MozMousePixelScroll")

(def ms-content-zoom
  "Event.

  [Non Standard]

  The msContentZoom event fires when a user zooms the element (changes
  scale of the content).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/msContentZoom_event`"

  "msContentZoom")

(def ms-gesture-change
  "Event.

  [Non Standard]

  The MSGestureChange event is fired when touch contact positions
  and also while inertia-based movements are being processed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureChange_event`"

  "MSGestureChange")

(def ms-gesture-end
  "Event.

  [Non Standard]

  The MSGestureEnd event is fired when all associated touch points
  stopped contacting the touch surface, and any associated inertial
  have ended; thus ending the gesture.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureEnd_event`"

  "MSGestureEnd")

(def ms-gesture-hold
  "Event.

  [Non Standard]

  The MSGestureHold event is fired when the user contacts the touch
  and remains in the same position for a while.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureHold_event`"

  "MSGestureHold")

(def ms-gesture-start
  "Event.

  [Non Standard]

  The MSGestureStart event is fired when there's a new point of
  on the touch surface, thus starting a new gesture. When the gesture
  ended, a MSGestureEnd event will be fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureStart_event`"

  "MSGestureStart")

(def ms-gesture-tap
  "Event.

  [Non Standard]

  The MSGestureTap event is fired when the user \\\"taps\\\" the pointing
  (e.g., touches the touch surface with their finger, taps the
  surface with a pen device, clicks with a mouse). Typically, it's
  to listen for the click event instead.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSGestureTap_event`"

  "MSGestureTap")

(def ms-inertia-start
  "Event.

  [Non Standard]

  The MSInertiaStart event is fired when contact with the touch
  stops when a scroll has enough inertia to continue scrolling.
  event may not be fired if the scroll is sufficiently slow.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSInertiaStart_event`"

  "MSInertiaStart")

(def ms-manipulation-state-changed
  "Event.

  [Non Standard]

  MSManipulationStateChanged fires when the state of an element
  manipulated has changed (ie. whenever you start or finish panning
  zooming an element).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/MSManipulationStateChanged_event`"

  "MSManipulationStateChanged")

(def overflow
  "Event.

  [Non Standard]

  The overflow event is fired when an element has been overflowed
  its content or has been rendered for the first time in this state
  works for elements styled with overflow != visible).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/overflow_event`"

  "overflow")

(def underflow
  "Event.

  [Non Standard]

  The non-standard underflow event, which is specific to Firefox,
  fired when an element is no longer overflowed by its content.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/underflow_event`"

  "underflow")

