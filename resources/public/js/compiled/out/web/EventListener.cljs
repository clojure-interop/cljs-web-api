(ns web.EventListener
  "The EventListener interface represents an object that can handle
  event dispatched by an `web.EventTarget` object."
  (:refer-clojure :exclude []))

(defn handle-event
  "Method.

  The `web.EventListener` method handleEvent() method is called
  the user agent when an event is sent to the EventListener, in
  to handle events that occur on an observed `web.EventTarget`.

  `eventListener.handleEvent(event);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventListener/handleEvent`"
  [this event]
  (-> this (.handleEvent event)))

