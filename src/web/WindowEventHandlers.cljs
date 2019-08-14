(ns web.WindowEventHandlers
  "The WindowEventHandlers mixin describes the event handlers common
  several interfaces like `web.Window`, or `html.HTMLBodyElement`
  `html.HTMLFrameSetElement`. Each of these interfaces can implement
  specific event handlers."
  (:refer-clojure :exclude []))

(defn onafterprint
  "Property.

  The onafterprint property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing afterprint events for the
  window. These events are raised after the user prints, or if
  abort the print dialog.

  `window.addEventListener(\\\"afterprint\\\", function(event) { ... });
  window.onafterprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`"
  [this]
  (-> this (.onafterprint)))

(defn set-onafterprint!
  "Property.

  The onafterprint property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing afterprint events for the
  window. These events are raised after the user prints, or if
  abort the print dialog.

  `window.addEventListener(\\\"afterprint\\\", function(event) { ... });
  window.onafterprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`"
  [this val]
  (aset this "onafterprint" val))

(defn onbeforeprint
  "Property.

  The onbeforeprint property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing beforeprint events for
  current window. These events are raised before the print dialog
  is opened.

  `window.addEventListener(\\\"beforeprint\\\", function(event) { ... });
  window.onbeforeprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`"
  [this]
  (-> this (.onbeforeprint)))

(defn set-onbeforeprint!
  "Property.

  The onbeforeprint property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing beforeprint events for
  current window. These events are raised before the print dialog
  is opened.

  `window.addEventListener(\\\"beforeprint\\\", function(event) { ... });
  window.onbeforeprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`"
  [this val]
  (aset this "onbeforeprint" val))

(defn onbeforeunload
  "Property.

  The onbeforeunload property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing beforeunload events.
  events fire when a window is about to unload its resources. At
  point, the document is still visible and the event is still cancelable.

  `window.addEventListener(\\\"beforeunload\\\", function(event) { ... });
  window.onbeforeunload = function(event) { ... };

  Typically, it is better to use `web.window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`"
  [this]
  (-> this (.onbeforeunload)))

(defn set-onbeforeunload!
  "Property.

  The onbeforeunload property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing beforeunload events.
  events fire when a window is about to unload its resources. At
  point, the document is still visible and the event is still cancelable.

  `window.addEventListener(\\\"beforeunload\\\", function(event) { ... });
  window.onbeforeunload = function(event) { ... };

  Typically, it is better to use `web.window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`"
  [this val]
  (aset this "onbeforeunload" val))

(defn onhashchange
  "Property.

  The WindowEventHandlers.onhashchange property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing hashchange events.

  `Using an event handler:



  window.onhashchange = funcRef;

  Using an HTML event handler:



  <body onhashchange=\\\"funcRef();\\\">

  Using an event listener:

  To add an event listener, use `web.addEventListener()`:



  window.addEventListener(\\\"hashchange\\\", funcRef, false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`"
  [this]
  (-> this (.onhashchange)))

(defn set-onhashchange!
  "Property.

  The WindowEventHandlers.onhashchange property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing hashchange events.

  `Using an event handler:



  window.onhashchange = funcRef;

  Using an HTML event handler:



  <body onhashchange=\\\"funcRef();\\\">

  Using an event listener:

  To add an event listener, use `web.addEventListener()`:



  window.addEventListener(\\\"hashchange\\\", funcRef, false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`"
  [this val]
  (aset this "onhashchange" val))

(defn onlanguagechange
  "Property.

  The onlanguagechange property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing languagechange events.

  `object.onlanguagechange = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`"
  [this]
  (-> this (.onlanguagechange)))

(defn set-onlanguagechange!
  "Property.

  The onlanguagechange property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing languagechange events.

  `object.onlanguagechange = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`"
  [this val]
  (aset this "onlanguagechange" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` called whenever an object receives a message

  `window.addEventListener('message', function(event) { ... })
  window.onmessage = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` called whenever an object receives a message

  `window.addEventListener('message', function(event) { ... })
  window.onmessage = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.WindowEventHandlers`
  is an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on a window—that is, when it receives
  message that cannot be deserialized.

  `window.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`"
  [this]
  (-> this (.onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.WindowEventHandlers`
  is an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on a window—that is, when it receives
  message that cannot be deserialized.

  `window.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

(defn onpopstate
  "Property.

  The onpopstate property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing popstate events on the

  `window.onpopstate = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`"
  [this]
  (-> this (.onpopstate)))

(defn set-onpopstate!
  "Property.

  The onpopstate property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing popstate events on the

  `window.onpopstate = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`"
  [this val]
  (aset this "onpopstate" val))

(defn onrejectionhandled
  "Property.

  The onrejectionhandled property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing rejectionhandled events.
  events are raised when `web.Promise`s are rejected.

  `window.addEventListener(\\\"rejectionhandled\\\", function(event) { ... });
  window.onrejectionhandled = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`"
  [this]
  (-> this (.onrejectionhandled)))

(defn set-onrejectionhandled!
  "Property.

  The onrejectionhandled property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing rejectionhandled events.
  events are raised when `web.Promise`s are rejected.

  `window.addEventListener(\\\"rejectionhandled\\\", function(event) { ... });
  window.onrejectionhandled = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`"
  [this val]
  (aset this "onrejectionhandled" val))

(defn onstorage
  "Property.

  The onstorage property of the `web.WindowEventHandlers` mixin
  an `web.EventHandler` for processing storage events.

  `window.onstorage = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`"
  [this]
  (-> this (.onstorage)))

(defn set-onstorage!
  "Property.

  The onstorage property of the `web.WindowEventHandlers` mixin
  an `web.EventHandler` for processing storage events.

  `window.onstorage = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`"
  [this val]
  (aset this "onstorage" val))

(defn onunhandledrejection
  "Property.

  The onunhandledrejection property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing unhandledrejection events.
  events are raised for unhandled `web.Promise` rejections.

  `window.onunhandledrejection = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`"
  [this]
  (-> this (.onunhandledrejection)))

(defn set-onunhandledrejection!
  "Property.

  The onunhandledrejection property of the `web.WindowEventHandlers`
  is the `web.EventHandler` for processing unhandledrejection events.
  events are raised for unhandled `web.Promise` rejections.

  `window.onunhandledrejection = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`"
  [this val]
  (aset this "onunhandledrejection" val))

(defn onunload
  "Property.

  The onunload property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing unload events. These events
  when the window is unloading its content and resources. The resource
  is processed after the unload event occurs.

  `window.addEventListener(\\\"unload\\\", function(event) { ... });
  window.onunload = function(event) { ... };

  Typically, it is better to use `web.window.addEventListener()` and the unload event, instead of onunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`"
  [this]
  (-> this (.onunload)))

(defn set-onunload!
  "Property.

  The onunload property of the `web.WindowEventHandlers` mixin
  the `web.EventHandler` for processing unload events. These events
  when the window is unloading its content and resources. The resource
  is processed after the unload event occurs.

  `window.addEventListener(\\\"unload\\\", function(event) { ... });
  window.onunload = function(event) { ... };

  Typically, it is better to use `web.window.addEventListener()` and the unload event, instead of onunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`"
  [this val]
  (aset this "onunload" val))

