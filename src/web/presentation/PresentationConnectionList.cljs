(ns web.presentation.PresentationConnectionList
  "PresentationConnectionList is the collection of incoming presentation"
  (:refer-clojure :exclude []))

(defn connections
  "Property.

  Returns the non-terminated set of presentation connections in
  set of presentation controllers."
  [this]
  (-> this (.-connections)))

(defn set-connections!
  "Property.

  Returns the non-terminated set of presentation connections in
  set of presentation controllers."
  [this val]
  (aset this "connections" val))

(defn onconnectionavailable
  "Property.

  Fired whenever a new presentation connection becomes available."
  [this]
  (-> this (.-onconnectionavailable)))

(defn set-onconnectionavailable!
  "Property.

  Fired whenever a new presentation connection becomes available."
  [this val]
  (aset this "onconnectionavailable" val))

