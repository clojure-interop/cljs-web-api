(ns web.deprecated.MouseScrollEvent
  "The MouseScrollEvent interface represents events that occur due
  the user moving a mouse wheel or similar input device."
  (:refer-clojure :exclude []))

(defn init-mouse-scroll-event
  "Method.

  See nsIDOMMouseScrollEvent::initMouseScrollEvent()."
  [this & args]
  (apply (-> this .-initMouseScrollEvent) (concat [this] args)))

