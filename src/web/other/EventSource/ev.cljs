(ns web.other.EventSource.ev
  "EventSource Events."
  (:refer-clojure :exclude []))

(def error
  "Event.

  The error event of the `web.other.EventSource` API is fired when
  connection with an event source fails to be opened.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/error_event`"

  "error")

(def message
  "Event.

  The message event of the `web.other.EventSource` API is fired
  data is received through an event source.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/message_event`"

  "message")

(def open
  "Event.

  The open event of the `web.other.EventSource` API is fired when
  connection with an event source is opened.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/open_event`"

  "open")

