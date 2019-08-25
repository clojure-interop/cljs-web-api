(ns web.Window.ev
  "Window Events."
  (:refer-clojure :exclude [load]))

(def error
  "Event.

  Fired when when a resource failed to load, or can't be used.
  example, if a script has an execution error or an image can't
  found or is invalid.
  Also available via the onerror property."

  "error")

(def animationcancel
  "Event.

  Fired when an animation unexpectedly aborts.
  Also available via the onanimationcancel property."

  "animationcancel")

(def clipboardchange
  "Event.

  Fired when the system clipboard content changes."

  "clipboardchange")

(def offline
  "Event.

  Fired when the browser has lost access to the network and the
  of navigator.onLine has switched to false.
  Also available via the onoffline property."

  "offline")

(def blur
  "Event.

  Fired when an element has lost focus.
  Also available via the onblur property."

  "blur")

(def gamepadconnected
  "Event.

  Fired when the browser detects that a gamepad has been connected
  the first time a button/axis of the gamepad is used.
  Also available via the ongamepadconnected property."

  "gamepadconnected")

(def hashchange
  "Event.

  Fired when the fragment identifier of the URL has changed (the
  of the URL beginning with and following the # symbol).
  Also available via the onhashchange property."

  "hashchange")

(def beforeunload
  "Event.

  Fired when the window, the document and its resources are about
  be unloaded.
  Also available via the onbeforeunload property."

  "beforeunload")

(def appinstalled
  "Event.

  Fired when the browser has successfully installed a page as an
  Also available via the onappinstalled property."

  "appinstalled")

(def message
  "Event.

  Fired when the window receives a message, for example from a
  to Window.postMessage() from another browsing context.
  Also available via the onmessage property."

  "message")

(def afterprint
  "Event.

  Fired after the associated document has started printing or the
  preview has been closed.
  Also available via the onafterprint property."

  "afterprint")

(def rejectionhandled
  "Event.

  Sent every time a JavaScript Promise is rejected, regardless
  whether or not there is a handler in place to catch the rejection.
  Also available through the onrejectionhandled event handler"

  "rejectionhandled")

(def transitioncancel
  "Event.

  Fired when a CSS transition is canceled.
  Also available via the ontransitioncancel property."

  "transitioncancel")

(def vrdisplayactivate
  "Event.

  Fired when a VR display becomes available to be presented to,
  example if an HMD has been moved to bring it out of standby,
  woken up by being put on.
  Also available via the onvrdisplayactivate property."

  "vrdisplayactivate")

(def beforeprint
  "Event.

  The beforeprint event is fired when the associated document is
  to be printed or previewed for printing.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event`"

  "beforeprint")

(def copy
  "Event.

  The copy event fires when the user initiates a copy action through
  browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/copy_event`"

  "copy")

(def cut
  "Event.

  The cut event is fired when the user has initiated a \\\"cut\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/cut_event`"

  "cut")

(def dom-content-loaded
  "Event.

  The DOMContentLoaded event fires when the initial HTML document
  been completely loaded and parsed, without waiting for stylesheets,
  and subframes to finish loading.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event`"

  "DOMContentLoaded")

(def focus
  "Event.

  The focus event fires when an element has received focus.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event`"

  "focus")

(def languagechange
  "Event.

  The languagechange event is fired at the global scope object
  the user's preferred language changes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/languagechange_event`"

  "languagechange")

(def load
  "Event.

  The load event is fired when the whole page has loaded, including
  dependent resources such as stylesheets images. This is in contrast
  DOMContentLoaded, which is fired as soon as the page DOM has
  loaded, without waiting for resources finish loading

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event`"

  "load")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.Window` object when
  receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/messageerror_event`"

  "messageerror")

(def online
  "Event.

  The online event of the `web.Window` interface is fired when
  browser has gained access to the network and the value of `Navigator.onLine`
  to true.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event`"

  "online")

(def orientationchange
  "Event.

  The orientationchange event is fired when the orientation of
  device has changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/orientationchange_event`"

  "orientationchange")

(def pagehide
  "Event.

  The pagehide event is sent to a `web.Window` when the browser
  the current page in the process of presenting a different page
  the session's history.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event`"

  "pagehide")

(def pageshow
  "Event.

  The pageshow event is sent to a `web.Window` when the browser
  the window's document visible due to navigation tasks.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event`"

  "pageshow")

(def paste
  "Event.

  The paste event is fired when the user has initiated a \\\"paste\\\"
  through the browser's user interface.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/paste_event`"

  "paste")

(def popstate
  "Event.

  The popstate event of the `web.Window` interface is fired when
  active history entry changes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event`"

  "popstate")

(def storage
  "Event.

  The storage event of the `web.Window` interface fires when a
  area (localStorage or sessionStorage) has been modified in the
  of another document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event`"

  "storage")

(def unhandledrejection
  "Event.

  The unhandledrejection event is sent to the global scope of a
  when a JavaScript `js.Promise` that has no rejection handler
  rejected; typically, this is the `window`, but may also be a

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event`"

  "unhandledrejection")

(def unload
  "Event.

  The unload event is fired when the document or a child resource
  being unloaded.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event`"

  "unload")

(def vrdisplayconnect
  "Event.

  You can use the vrdisplayconnect event in an addEventListener

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/vrdisplayconnect_event`"

  "vrdisplayconnect")

(def vrdisplaydisconnect
  "Event.

  You can use the vrdisplaydisconnect event in an addEventListener

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/vrdisplaydisconnect_event`"

  "vrdisplaydisconnect")

(def vrdisplaypresentchange
  "Event.

  You can use the vrdisplaypresentchange event in an addEventListener

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/vrdisplaypresentchange_event`"

  "vrdisplaypresentchange")

