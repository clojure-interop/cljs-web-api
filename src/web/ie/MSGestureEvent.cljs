(ns web.ie.MSGestureEvent
  "The MSGestureEvent is a proprietary interface specific to Internet
  and Microsoft Edge which represents events that occur due to
  gestures. Events using this interface include MSGestureStart,
  MSGestureTap, MSGestureHold, MSGestureChange, and MSInertiaStart."
  (:refer-clojure :exclude []))

(defn init-gesture-event
  "Method.

  Initializes the value of an MSGestureEvent. If the event has
  being dispatched, this method does nothing. This method is deprecated
  of Microsoft Edge."
  [this & args]
  (apply (-> this .-initGestureEvent) (concat [this] args)))

(defn expansion
  "Property.

  The diameter of the gesture area. For example, the distance between"
  [this]
  (-> this (.expansion)))

(defn set-expansion!
  "Property.

  The diameter of the gesture area. For example, the distance between"
  [this val]
  (aset this "expansion" val))

