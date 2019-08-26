(ns web.presentation.PresentationRequest
  "A PresentationRequest object is used to initiate or reconnect
  a presentation made by a controlling browsing context. The PresentationRequest
  MUST be implemented in a controlling browsing context provided
  a controlling user agent."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PresentationRequest constructor creates a new `web.presentation.PresentationRequest` object which creates a new PresentationRequest.

  url or urls[]
  A URL or array of URLs that are possible URLs used to create, or reconnect, a presentation for the PresentationRequest instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/PresentationRequest`"
  js/PresentationRequest)

(defn start
  "Method.

  The start() property of the `web.presentation.PresentationRequest`
  returns a `js.Promise` that resolves with a `web.presentation.PresentationConnection`
  the user agent prompts the user to select a display and grant
  to use that display.

  `var promise = presentationRequest.start()
  promise.then(function(PresentationConnection) { ... })
  .catch(function(error) { ...})`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/start`"
  [this & args]
  (apply (-> this .-start) (concat [this] args)))

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

