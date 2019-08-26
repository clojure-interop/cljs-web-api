(ns web.storage.StorageEvent
  "A StorageEvent is sent to a window when a storage area it has
  to is changed within the context of another document."
  (:refer-clojure :exclude []))

(defn type-arg
  "Method.

  The name of the event."
  [this & args]
  (apply (-> this .-typeArg) (concat [this] args)))

