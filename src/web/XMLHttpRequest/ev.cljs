(ns web.XMLHttpRequest.ev
  "XMLHttpRequest Events."
  (:refer-clojure :exclude [load]))

(def abort
  "Event.

  The abort event is fired when a request has been aborted, for
  because the program called `XMLHttpRequest.abort()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort_event`"

  "abort")

(def error
  "Event.

  The error event is fired when the request encountered an error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/error_event`"

  "error")

(def load
  "Event.

  The load event is fired when an `web.XMLHttpRequest` transaction
  successfully.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event`"

  "load")

(def loadend
  "Event.

  The loadend event is fired when a request has completed, whether
  (after `load`) or unsuccessfully (after `abort` or `error`).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadend_event`"

  "loadend")

(def loadstart
  "Event.

  The loadstart event is fired when a request has started to load

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadstart_event`"

  "loadstart")

(def progress
  "Event.

  The progress event is fired periodically when a request receives
  data.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event`"

  "progress")

(def timeout
  "Event.

  The timeout event is fired when progression is terminated due
  preset time expiring.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout_event`"

  "timeout")

