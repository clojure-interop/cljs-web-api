(ns web.XMLHttpRequest
  "Use XMLHttpRequest (XHR) objects to interact with servers. You
  retrieve data from a URL without having to do a full page refresh.
  enables a Web page to update just part of a page without disrupting
  the user is doing."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The XMLHttpRequest() constructor creates a new `web.XMLHttpRequest`.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest`"
  js/XMLHttpRequest)

(defn abort
  "Method.

  The XMLHttpRequest.abort() method aborts the request if it has
  been sent. When a request is aborted, its `readyState` is changed
  `XMLHttpRequest.UNSENT` (0) and the request's `status` code is
  to 0.

  `XMLHttpRequest.abort()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort`"
  [this ]
  (-> this (.abort)))

(defn init
  "Method.

  Initializes the object for use from C++ code."
  [this & args]
  (apply (-> this .-init) (concat [this] args)))

(defn open-request
  "Method.

  This Mozilla-specific method is available only from within privileged
  and is only called from a C++ context in order to initialize
  XMLHttpRequest.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/openRequest`"
  [this & args]
  (apply (-> this .-openRequest) (concat [this] args)))

(defn onreadystatechange
  "Property.

  An `EventHandler` that is called whenever the readyState attribute
  The callback is called from the user interface thread. The XMLHttpRequest.onreadystatechange
  contains the event handler to be called when the readystatechange
  is fired, that is every time the `readyState` property of the
  changes.

  `XMLHttpRequest.onreadystatechange = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`"
  [this]
  (-> this (.onreadystatechange)))

(defn set-onreadystatechange!
  "Property.

  An `EventHandler` that is called whenever the readyState attribute
  The callback is called from the user interface thread. The XMLHttpRequest.onreadystatechange
  contains the event handler to be called when the readystatechange
  is fired, that is every time the `readyState` property of the
  changes.

  `XMLHttpRequest.onreadystatechange = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`"
  [this val]
  (aset this "onreadystatechange" val))

(defn timeout
  "Property.

  The XMLHttpRequest.timeout property is an unsigned long representing
  number of milliseconds a request can take before automatically
  terminated. The default value is 0, which means there is no timeout.
  shouldn't be used for synchronous XMLHttpRequests requests used
  a document environment or it will throw an InvalidAccessError
  When a timeout happens, a timeout event is fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`"
  [this]
  (-> this (.timeout)))

(defn set-timeout!
  "Property.

  The XMLHttpRequest.timeout property is an unsigned long representing
  number of milliseconds a request can take before automatically
  terminated. The default value is 0, which means there is no timeout.
  shouldn't be used for synchronous XMLHttpRequests requests used
  a document environment or it will throw an InvalidAccessError
  When a timeout happens, a timeout event is fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`"
  [this val]
  (aset this "timeout" val))

(defn channel
  "Property.

  XMLHttpRequest.channel is an nsIChannel that used by the object
  performing the request. This is null if the channel hasn't been
  yet. In the case of a multi-part request, this is the initial
  not the different parts in the multi-part request. Requires elevated
  to access.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`"
  [this]
  (-> this (.channel)))

(defn set-channel!
  "Property.

  XMLHttpRequest.channel is an nsIChannel that used by the object
  performing the request. This is null if the channel hasn't been
  yet. In the case of a multi-part request, this is the initial
  not the different parts in the multi-part request. Requires elevated
  to access.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`"
  [this val]
  (aset this "channel" val))

