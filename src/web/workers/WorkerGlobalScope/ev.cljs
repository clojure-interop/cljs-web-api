(ns web.workers.WorkerGlobalScope.ev
  "WorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def error
  "Event.

  Fired when an error occured.
  Also available via the WorkerGlobalScope.onerror property."

  "error")

(def close
  "Event.

  Is an EventHandler representing the code to be called when the
  event is raised.
  Also available via the WorkerGlobalScope.onclose property."

  "close")

(def languagechange
  "Event.

  The languagechange event is fired at the global scope object
  the user's preferred language changes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/languagechange_event`"

  "languagechange")

