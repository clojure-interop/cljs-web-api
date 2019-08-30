(ns web.presentation.PresentationConnectionAvailableEvent
  "The PresentationConnectionAvailableEvent interface of the Presentation
  is fired on a `web.presentation.PresentationRequest` when a connection
  with the object is created."
  (:refer-clojure :exclude []))

(defn connection
  "Property.

  [Read Only]

  When an incoming connection is created, a receiving user agent
  a trusted event, named connectionavailable, on a PresentationReceiver.
  trusted event is fired at the presentation controller's monitor,
  the PresentationConnectionAvailableEvent interface, with the
  attribute set to the PresentationConnection object that was created.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/connection`"
  [this]
  (-> this (.-connection)))

