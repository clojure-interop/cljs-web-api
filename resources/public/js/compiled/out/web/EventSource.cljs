(ns web.EventSource
  "The EventSource interface is web content's interface to server-sent
  An EventSource instance opens a persistent connection to an HTTP
  which sends events in text/event-stream format."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The EventSource() constructor returns a newly-created `web.EventSource`, which represents a remote resource.

  url
  A `web.USVString` that represents the location of the remote resource serving the events/messages.
  configuration Optional
  Provides options to configure the new connection. The possible entries are:

  withCredentials, defaulting to false, indicating if CORS should be set to include credentials.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource`"
  js/EventSource)

(defn close
  "Method.

  The close() method of the `web.EventSource` interface closes
  connection, if one is made, and sets the `web.EventSource.readyState`
  to 2 (closed).

  `eventSource.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close`"
  [this ]
  (-> this (.close)))

(defn onerror
  "Property.

  The onerror property of the `web.EventSource` interface is an
  called when an error occurs and the error event is dispatched
  an EventSource object.

  `eventSource.onerror = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.EventSource` interface is an
  called when an error occurs and the error event is dispatched
  an EventSource object.

  `eventSource.onerror = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.EventSource` interface is
  `web.EventHandler` called when a message event is received, that
  when a message is coming from the source.

  `eventSource.onmessage = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.EventSource` interface is
  `web.EventHandler` called when a message event is received, that
  when a message is coming from the source.

  `eventSource.onmessage = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onopen
  "Property.

  The onopen property of the `web.EventSource` interface is an
  called when an open event is received, that is when the connection
  just opened.

  `eventSource.onopen = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`"
  [this]
  (-> this (.onopen)))

(defn set-onopen!
  "Property.

  The onopen property of the `web.EventSource` interface is an
  called when an open event is received, that is when the connection
  just opened.

  `eventSource.onopen = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`"
  [this val]
  (aset this "onopen" val))

(defn ready-state
  "Property.

  The readyState read-only property of the `web.EventSource` interface
  a number representing the state of the connection.

  `var myReadyState = eventSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/readyState`"
  [this]
  (-> this (.readyState)))

(defn set-ready-state!
  "Property.

  The readyState read-only property of the `web.EventSource` interface
  a number representing the state of the connection.

  `var myReadyState = eventSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/readyState`"
  [this val]
  (aset this "readyState" val))

(defn url
  "Property.

  The url read-only property of the `web.EventSource` interface
  a `dom.DOMString` representing the URL of the source.

  `var myUrl = eventSource.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/url`"
  [this]
  (-> this (.url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.EventSource` interface
  a `dom.DOMString` representing the URL of the source.

  `var myUrl = eventSource.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/url`"
  [this val]
  (aset this "url" val))

(defn with-credentials
  "Property.

  The withCredentials read-only property of the `web.EventSource`
  returns a `web.Boolean` indicating whether the EventSource object
  instantiated with CORS credentials set.

  `var myWithCredentials = eventSource.withCredentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials`"
  [this]
  (-> this (.withCredentials)))

(defn set-with-credentials!
  "Property.

  The withCredentials read-only property of the `web.EventSource`
  returns a `web.Boolean` indicating whether the EventSource object
  instantiated with CORS credentials set.

  `var myWithCredentials = eventSource.withCredentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials`"
  [this val]
  (aset this "withCredentials" val))

