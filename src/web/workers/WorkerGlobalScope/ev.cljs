(ns web.workers.WorkerGlobalScope.ev
  "WorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def error
  "Event.

  Fired when an error occured.
  Also available via the WorkerGlobalScope.onerror property."

  "error")

(def offline
  "Event.

  Ffired when the browser has lost access to the network and the
  of navigator.onLine switched to false.
  Also available via the WorkerGlobalScope.onoffline property."

  "offline")

(def online
  "Event.

  Fired when the browser has gained access to the network and the
  of navigator.onLine switched to true.
  Also available via the WorkerGlobalScope.ononline property."

  "online")

(def languagechange
  "Event.

  Fired at the global/worker scope object when the user's preferred
  change.
  Also available via the WorkerGlobalScope.onlanguagechange property."

  "languagechange")

(def close
  "Event.

  Is an EventHandler representing the code to be called when the
  event is raised.
  Also available via the WorkerGlobalScope.onclose property."

  "close")

(def rejectionhandled
  "Event.

  An event handler for handled Promise rejection events.
  Also available via the WorkerGlobalScope.onrejectionhandled"

  "rejectionhandled")

(def unhandledrejection
  "Event.

  An event handler for unhandled Promise rejection events.
  Also available via the WorkerGlobalScope.onunhandledrejection"

  "unhandledrejection")

