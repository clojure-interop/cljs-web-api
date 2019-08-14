(ns web.CloseEvent
  "A CloseEvent is sent to clients using WebSockets when the connection
  closed. This is delivered to the listener indicated by the WebSocket
  onclose attribute."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CloseEvent() constructor creates a new `web.CloseEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/CloseEvent`"
  js/CloseEvent)

(defn init-close-event
  "Method.

  The CloseEvent.initCloseEvent() method initializes the value
  a close event once it's been created (normally using the `web.Document.createEvent()`

  `event.initMouseEvent(type, canBubble, cancelable, wasClean, reasonCode, reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/initCloseEvent`"
  [this type can-bubble cancelable was-clean reason-code reason]
  (-> this (.initCloseEvent type can-bubble cancelable was-clean reason-code reason)))

