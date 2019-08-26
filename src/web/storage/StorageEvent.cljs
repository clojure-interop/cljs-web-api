(ns web.storage.StorageEvent
  "A StorageEvent is sent to a window when a storage area it has
  to is changed within the context of another document."
  (:refer-clojure :exclude [key]))

(defn type-arg
  "Method.

  The name of the event."
  [this & args]
  (apply (-> this .-typeArg) (concat [this] args)))

(defn can-bubble
  "Method.

  A boolean indicating whether the event bubbles up through the
  or not."
  [this & args]
  (apply (-> this .-canBubble) (concat [this] args)))

(defn cancelable
  "Method.

  A boolean indicating whether the event is cancelable."
  [this & args]
  (apply (-> this .-cancelable) (concat [this] args)))

(defn key
  "Method.

  The key whose value is changing as a result of this event."
  [this & args]
  (apply (-> this .-key) (concat [this] args)))

(defn old-value
  "Method.

  The key's old value."
  [this & args]
  (apply (-> this .-oldValue) (concat [this] args)))

(defn new-value
  "Method.

  The key's new value."
  [this & args]
  (apply (-> this .-newValue) (concat [this] args)))

(defn url
  "Method.

  The URL of the document initiating the change."
  [this & args]
  (apply (-> this .-url) (concat [this] args)))

(defn storage-area
  "Method.

  The DOM Storage object representing the storage area on which
  event occurred."
  [this & args]
  (apply (-> this .-storageArea) (concat [this] args)))

