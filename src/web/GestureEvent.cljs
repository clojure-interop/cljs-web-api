(ns web.GestureEvent
  "The GestureEvent is a proprietary interface specific to WebKit
  gives information regarding multi-touch gestures. Events using
  interface include gesturestart, gesturechange, and gestureend."
  (:refer-clojure :exclude []))

(defn init-gesture-event
  "Method.

  Initializes the value of an GestureEvent. If the event has already
  dispatched, this method does nothing."
  [this & args]
  (apply (-> this .-initGestureEvent) (concat [this] args)))

(defn rotation
  "Property.

  Change in rotation (in degrees) since the event's beginning.
  values indicate clockwise rotation; negative values indicate
  rotation. Initial value: 0.0"
  [this]
  (-> this (.rotation)))

(defn set-rotation!
  "Property.

  Change in rotation (in degrees) since the event's beginning.
  values indicate clockwise rotation; negative values indicate
  rotation. Initial value: 0.0"
  [this val]
  (aset this "rotation" val))

