(ns web.storage.StorageEvent
  "A StorageEvent is sent to a window when a storage area it has
  to is changed within the context of another document."
  (:refer-clojure :exclude [key]))

(defn type-arg
  "Method.

  The name of the event."
  [this & args]
  (-> this .-typeArg (.apply this (clj->js args))))

(defn can-bubble
  "Method.

  A boolean indicating whether the event bubbles up through the
  or not."
  [this & args]
  (-> this .-canBubble (.apply this (clj->js args))))

(defn cancelable
  "Method.

  A boolean indicating whether the event is cancelable."
  [this & args]
  (-> this .-cancelable (.apply this (clj->js args))))

(defn key
  "Method.

  The key whose value is changing as a result of this event."
  [this & args]
  (-> this .-key (.apply this (clj->js args))))

(defn old-value
  "Method.

  The key's old value."
  [this & args]
  (-> this .-oldValue (.apply this (clj->js args))))

(defn new-value
  "Method.

  The key's new value."
  [this & args]
  (-> this .-newValue (.apply this (clj->js args))))

(defn url
  "Method.

  The URL of the document initiating the change."
  [this & args]
  (-> this .-url (.apply this (clj->js args))))

(defn storage-area
  "Method.

  The DOM Storage object representing the storage area on which
  event occurred."
  [this & args]
  (-> this .-storageArea (.apply this (clj->js args))))

