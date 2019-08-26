(ns web.workers.ErrorEvent
  "The ErrorEvent interface represents events providing information
  to errors in scripts or in files."
  (:refer-clojure :exclude []))

(defn message
  "Property.

  Is a DOMString containing a human-readable error message describing
  problem."
  [this]
  (-> this (.-message)))

(defn set-message!
  "Property.

  Is a DOMString containing a human-readable error message describing
  problem."
  [this val]
  (aset this "message" val))

(defn filename
  "Property.

  Is a DOMString containing the name of the script file in which
  error occurred."
  [this]
  (-> this (.-filename)))

(defn set-filename!
  "Property.

  Is a DOMString containing the name of the script file in which
  error occurred."
  [this val]
  (aset this "filename" val))

(defn lineno
  "Property.

  Is an integer containing the line number of the script file on
  the error occurred."
  [this]
  (-> this (.-lineno)))

(defn set-lineno!
  "Property.

  Is an integer containing the line number of the script file on
  the error occurred."
  [this val]
  (aset this "lineno" val))

(defn colno
  "Property.

  Is an integer containing the column number of the script file
  which the error occurred."
  [this]
  (-> this (.-colno)))

(defn set-colno!
  "Property.

  Is an integer containing the column number of the script file
  which the error occurred."
  [this val]
  (aset this "colno" val))

(defn error
  "Property.

  Is a JavaScript Object that is concerned by the event."
  [this]
  (-> this (.-error)))

(defn set-error!
  "Property.

  Is a JavaScript Object that is concerned by the event."
  [this val]
  (aset this "error" val))

