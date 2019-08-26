(ns web.websockets.WebSocket.ev
  "WebSocket Events."
  (:refer-clojure :exclude []))

(def close
  "Event.

  Fired when a connection with a WebSocket is closed.
  Also available via the onclose property"

  "close")

(def error
  "Event.

  Fired when a connection with a WebSockethas been closed because
  an error, such as when some data couldn't be sent.
  Also available via the onerror property."

  "error")

(def message
  "Event.

  Fired when data is received through a WebSocket.
  Also available via the onmessage property."

  "message")

(def open
  "Event.

  Fired when a connection with a WebSocketis opened.
  Also available via the onopen property."

  "open")

