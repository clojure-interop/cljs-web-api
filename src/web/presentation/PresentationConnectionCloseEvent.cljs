(ns web.presentation.PresentationConnectionCloseEvent
  "The PresentationConnectionCloseEvent interface of the Presentation
  is fired on a `web.presentation.PresentationConnection` when
  is closed."
  (:refer-clojure :exclude []))

(defn message
  "Property.

  A human-readable message that provides more information about
  the connection was closed."
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  A human-readable message that provides more information about
  the connection was closed."
  [this val]
  (aset this "message" val))

