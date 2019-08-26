(ns web.workers.ErrorEvent
  "The ErrorEvent interface represents events providing information
  to errors in scripts or in files."
  (:refer-clojure :exclude []))

(defn message
  "Property.

  Is a DOMString containing a human-readable error message describing
  problem."
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  Is a DOMString containing a human-readable error message describing
  problem."
  [this val]
  (aset this "message" val))

