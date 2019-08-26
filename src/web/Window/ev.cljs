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

(def languagechange
  "Event.

  Fired at the global scope object when the user's preferred language
  Also available via the onlanguagechange property."

  "languagechange")

(def orientationchange
  "Event.

  Fired when the orientation of the device has changed.
  Also available via the onorientationchange property."

  "orientationchange")

(def devicemotion
  "Event.

  Fired at a regular interval, indicating the amount of physical
  of acceleration the device is receiving and the rate of rotation,
  available."

  "devicemotion")

(def deviceorientation
  "Event.

  Fired when fresh data is available from the magnetometer orientation
  about the current orientation of the device as compared to the
  coordinate frame."

  "deviceorientation")

(def resize
  "Event.

  Fired when the window has been resized.
  Also available via the onresize property."

  "resize")

(def storage
  "Event.

  Fired when a storage area (localStorage or sessionStorage) has
  modified in the context of another document.
  Also available via the onstorage property."

  "storage")

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

(def clipboardchange
  "Event.

  Fired when the system clipboard content changes."

  "clipboardchange")

(def copy
  "Event.

  Fired when the user initiates a copy action through the browser's
  interface.
  Also available via the oncopy property."

  "copy")

(def cut
  "Event.

  Fired when the user initiates a cut action through the browser's
  interface.
  Also available via the oncut property."

  "cut")

(def paste
  "Event.

  Fired when the user initiates a paste action through the browser's
  interface.
  Also available via the onpaste property."

  "paste")

(def offline
  "Event.

  Fired when the browser has lost access to the network and the
  of navigator.onLine has switched to false.
  Also available via the onoffline property."

  "offline")

(def online
  "Event.

  Fired when the browser has gained access to the network and the
  of navigator.onLine has switched to true.
  Also available via the ononline property."

  "online")

(def blur
  "Event.

  Fired when an element has lost focus.
  Also available via the onblur property."

  "blur")

(def focus
  "Event.

  Fired when an element has gained focus.
  Also available via the onfocus property"

  "focus")

(def gamepadconnected
  "Event.

  Fired when the browser detects that a gamepad has been connected
  the first time a button/axis of the gamepad is used.
  Also available via the ongamepadconnected property."

  "gamepadconnected")

(def gamepaddisconnected
  "Event.

  Fired when the browser detects that a gamepad has been disconnected.
  Also available via the ongamepaddisconnected property"

  "gamepaddisconnected")

(def hashchange
  "Event.

  Fired when the fragment identifier of the URL has changed (the
  of the URL beginning with and following the # symbol).
  Also available via the onhashchange property."

  "hashchange")

(def pagehide
  "Event.

  Sent when the browser hides the current document while in the
  of switching to displaying in its palce a different document
  the session's history. This happens, for example, when the user
  the Back button or when they click the Forward button to move
  in session history.
  Also available through the onpagehide event handler property."

  "pagehide")

(def pageshow
  "Event.

  Sent when the browser makes the document visible due to navigation
  including not only when the page is first loaded, but also situations
  as the user navigating back to the page after having navigated
  another within the same tab.
  Also available using the onpageshow event handler property."

  "pageshow")

(def popstate
  "Event.

  Fired when the active history entry changes.
  Also available using the onpopstate event handler property."

  "popstate")

(def beforeunload
  "Event.

  Fired when the window, the document and its resources are about
  be unloaded.
  Also available via the onbeforeunload property."

  "beforeunload")

(def dom-content-loaded
  "Event.

  Fired when the document has been completely loaded and parsed,
  waiting for stylesheets, images, and subframes to finish loading."

  "DOMContentLoaded")

(def load
  "Event.

  Fired when the whole page has loaded, including all dependent
  such as stylesheets images.
  Also available via the onload property."

  "load")

(def unload
  "Event.

  Fired when the document or a child resource is being unloaded.
  Also available via the onunload property."

  "unload")

(def appinstalled
  "Event.

  Fired when the browser has successfully installed a page as an
  Also available via the onappinstalled property."

  "appinstalled")

(def beforeinstallprompt
  "Event.

  Fired when a user is about to be prompted to install a web application.
  Also available via the onbeforeinstallprompt property."

  "beforeinstallprompt")

(def message
  "Event.

  Fired when the window receives a message, for example from a
  to Window.postMessage() from another browsing context.
  Also available via the onmessage property."

  "message")

(def messageerror
  "Event.

  Fired when a Window object receives a message that can't be deserialized.
  Also available via the onmessageerror property."

  "messageerror")

(def afterprint
  "Event.

  Fired after the associated document has started printing or the
  preview has been closed.
  Also available via the onafterprint property."

  "afterprint")

(def beforeprint
  "Event.

  Fired when the associated document is about to be printed or
  for printing.
  Also available via the onbeforeprint property."

  "beforeprint")

(def rejectionhandled
  "Event.

  Sent every time a JavaScript Promise is rejected, regardless
  whether or not there is a handler in place to catch the rejection.
  Also available through the onrejectionhandled event handler"

  "rejectionhandled")

(def unhandledrejection
  "Event.

  Sent when a JavaScript Promise is rejected but there is no handler
  place to catch the rejection.
  Also available using the onunhandledrejection event handler"

  "unhandledrejection")

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

(def vrdisplayactivate
  "Event.

  Fired when a VR display becomes available to be presented to,
  example if an HMD has been moved to bring it out of standby,
  woken up by being put on.
  Also available via the onvrdisplayactivate property."

  "vrdisplayactivate")

(def vrdisplayblur
  "Event.

  Fired when presentation to a VR display has been paused for some
  by the browser, OS, or VR hardware.
  Also available via the onvrdisplayblur property."

  "vrdisplayblur")

(def vrdisplayconnect
  "Event.

  Fired when a compatible VR display is connected to the computer.
  Also available via the onvrdisplayconnect property."

  "vrdisplayconnect")

(def vrdisplaydeactivate
  "Event.

  Fired when a VR display can no longer be presented to, for example
  an HMD has gone into standby or sleep mode due to a period of
  Also available via the onvrdisplaydeactivate property."

  "vrdisplaydeactivate")

(def vrdisplaydisconnect
  "Event.

  Fired when a compatible VR display is disconnected from the computer.
  Also available via the onvrdisplaydisconnect property."

  "vrdisplaydisconnect")

(def vrdisplayfocus
  "Event.

  Fired when presentation to a VR display has resumed after being
  Also available via the onvrdisplayfocus property."

  "vrdisplayfocus")

(def vrdisplaypresentchange
  "Event.

  fired when the presenting state of a VR display changes — i.e.
  from presenting to not presenting, or vice versa.
  Also available via the onvrdisplaypresentchange property."

  "vrdisplaypresentchange")

(def vrdisplaypointerrestricted
  "Event.

  Fired when the VR display's pointer input is restricted to consumption
  a pointerlocked element.
  Also available via the onvrdisplaypointerrestricted property."

  "vrdisplaypointerrestricted")

(def vrdisplaypointerunrestricted
  "Event.

  Fired when the VR display's pointer input is no longer restricted
  consumption via a pointerlocked element.
  Also available via the onvrdisplaypointerunrestricted property."

  "vrdisplaypointerunrestricted")

