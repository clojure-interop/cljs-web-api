(ns web.PresentationRequest
  "A PresentationRequest object is used to initiate or reconnect
  a presentation made by a controlling browsing context. The PresentationRequest
  MUST be implemented in a controlling browsing context provided
  a controlling user agent."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PresentationRequest constructor creates a new `web.PresentationRequest` object which creates a new PresentationRequest.

  url or urls[]
  A URL or array of URLs that are possible URLs used to create, or reconnect, a presentation for the PresentationRequest instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/PresentationRequest`"
  js/PresentationRequest)

(defn start
  "Method.

  The start() property of the `web.PresentationRequest` interface
  a `web.Promise` that resolves with a `web.PresentationConnection`
  the user agent prompts the user to select a display and grant
  to use that display.

  `var promise = presentationRequest.start()
  promise.then(function(PresentationConnection) { ... })
  .catch(function(error) { ...})`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/start`"
  [this & args]
  (apply (-> this .-start) (concat [this] args)))

(defn reconnect
  "Method.

  When the reconnect(presentationId) method is called on a PresentationRequest
  the user agent MUST run the following steps to reconnect to a

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/reconnect`"
  [this & args]
  (apply (-> this .-reconnect) (concat [this] args)))

(defn get-availability
  "Method.

  When the getAvailability() method is called, the user agent MUST
  the following steps:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/getAvailability`"
  [this & args]
  (apply (-> this .-getAvailability) (concat [this] args)))

(defn onconnectionavailable
  "Property.

  The following are event handlers (and their corresponding event
  event types) which must be supported, as event handler IDL attributes,
  objects implementing the PresentationRequest interface:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/onconnectionavailable`"
  [this]
  (-> this (.onconnectionavailable)))

(defn set-onconnectionavailable!
  "Property.

  The following are event handlers (and their corresponding event
  event types) which must be supported, as event handler IDL attributes,
  objects implementing the PresentationRequest interface:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/onconnectionavailable`"
  [this val]
  (aset this "onconnectionavailable" val))

