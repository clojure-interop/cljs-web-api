(ns web.presentation.PresentationReceiver
  "The PresentationReceiver interface of the the Presentation API
  a means for a receiving browsing context to access controlling
  contexts and communicate with them."
  (:refer-clojure :exclude []))

(defn connection-list
  "Property.

  Returns a Promise that resolves with a PresentationConnectionList
  containing a list of incoming presentation connections."
  [this]
  (-> this (.-connectionList)))

(defn set-connection-list!
  "Property.

  Returns a Promise that resolves with a PresentationConnectionList
  containing a list of incoming presentation connections."
  [this val]
  (aset this "connectionList" val))

