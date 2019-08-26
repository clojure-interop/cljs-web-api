(ns web.presentation.PresentationConnectionAvailableEvent
  "The PresentationConnectionAvailableEvent interface of the Presentation
  is fired on a `web.presentation.PresentationRequest` when a connection
  with the object is created."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PresentationConnectionAvailableInit() constructor creates a new `web.presentation.PresentationConnectionAvailableEvent`.

  typeArg
  \\tA `DOMSTring` giving the name of the event. For this event it should be connectionavailable.
  \\teventInit
  \\tA PresentationConnectionAvailableInit dictionary, which only contains a reference to a PresentationConnection object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent`"
  js/PresentationConnectionAvailableEvent)

(defn connection
  "Property.

  When an incoming connection is created, a receiving user agent
  a trusted event, named connectionavailable, on a PresentationReceiver.
  trusted event is fired at the presentation controller's monitor,
  the PresentationConnectionAvailableEvent interface, with the
  attribute set to the PresentationConnection object that was created.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/connection`"
  [this]
  (-> this (.-connection)))

(defn set-connection!
  "Property.

  When an incoming connection is created, a receiving user agent
  a trusted event, named connectionavailable, on a PresentationReceiver.
  trusted event is fired at the presentation controller's monitor,
  the PresentationConnectionAvailableEvent interface, with the
  attribute set to the PresentationConnection object that was created.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnectionAvailableEvent/connection`"
  [this val]
  (aset this "connection" val))

