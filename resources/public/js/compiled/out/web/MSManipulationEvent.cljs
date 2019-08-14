(ns web.MSManipulationEvent
  "MSManipulationEvent provides contextual information when contact
  made to the screen and an element is manipulated."
  (:refer-clojure :exclude []))

(defn init-ms-manipulation-event
  "Method.

  The initMSManipulationEvent method is used to create a `web.MSManipulationEvent`
  can be called from JavaScript.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MSManipulationEvent/initMSManipulationEvent`"
  [this & args]
  (apply (-> this .-initMSManipulationEvent) (concat [this] args)))

