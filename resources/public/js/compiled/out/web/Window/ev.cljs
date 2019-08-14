(ns web.Window.ev
  "Window Events."
  (:refer-clojure :exclude [load]))

(def afterprint
  "Event.

  The afterprint event is fired after the associated document has
  printing or the print preview has been closed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/afterprint_event`"

  "afterprint")

(def beforeprint
  "Event.

  The beforeprint event is fired when the associated document is
  to be printed or previewed for printing.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event`"

  "beforeprint")

(def beforeunload
  "Event.

  The beforeunload event is fired when the window, the document
  its resources are about to be unloaded.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`"

  "beforeunload")

(def blur
  "Event.

  The blur event fires when an element has lost focus.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/blur_event`"

  "blur")

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

(def error
  "Event.

  The error event is fired on a `web.Window` object when a resource
  to load or couldn't be used — for example if a script has an
  error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event`"

  "error")

(def focus
  "Event.

  The focus event fires when an element has received focus.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event`"

  "focus")

(def hashchange
  "Event.

  The hashchange event is fired when the fragment identifier of
  URL has changed (the part of the URL beginning with and following
  # symbol).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event`"

  "hashchange")

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

(def message
  "Event.

  The message event is fired on a `web.Window` object when the
  receives a message, for example from a call to Window.postMessage()
  another browsing context.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event`"

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.Window` object when
  receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/messageerror_event`"

  "messageerror")

(def offline
  "Event.

  The offline event of the `web.Window` interface is fired when
  browser has lost access to the network and the value of `web.Navigator.onLine`
  to false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event`"

  "offline")

(def online
  "Event.

  The online event of the `web.Window` interface is fired when
  browser has gained access to the network and the value of `web.Navigator.onLine`
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

(def rejectionhandled
  "Event.

  The rejectionhandled event is sent to the script's global scope
  `web.window` but also `web.Worker`) whenever a JavaScript `web.Promise`
  rejected but after the promise rejection has been handled.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/rejectionhandled_event`"

  "rejectionhandled")

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
  when a JavaScript `web.Promise` that has no rejection handler
  rejected; typically, this is the `web.window`, but may also be
  `web.Worker`.

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

