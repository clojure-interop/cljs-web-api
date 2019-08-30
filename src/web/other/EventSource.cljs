(ns web.other.EventSource
  "The EventSource interface is web content's interface to server-sent
  An EventSource instance opens a persistent connection to an HTTP
  which sends events in text/event-stream format."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The close() method of the `web.other.EventSource` interface closes
  connection, if one is made, and sets the `EventSource.readyState`
  to 2 (closed).

  `eventSource.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close`"
  [this ]
  (-> this (.close)))

(defn ready-state
  "Property.

  [Read Only]

  The readyState read-only property of the `web.other.EventSource`
  returns a number representing the state of the connection.

  `var myReadyState = eventSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/readyState`"
  [this]
  (-> this (.-readyState)))

(defn url
  "Property.

  [Read Only]

  The url read-only property of the `web.other.EventSource` interface
  a `web.dom.DOMString` representing the URL of the source.

  `var myUrl = eventSource.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/url`"
  [this]
  (-> this (.-url)))

(defn with-credentials
  "Property.

  [Read Only]

  The withCredentials read-only property of the `web.other.EventSource`
  returns a `js.Boolean` indicating whether the EventSource object
  instantiated with CORS credentials set.

  `var myWithCredentials = eventSource.withCredentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials`"
  [this]
  (-> this (.-withCredentials)))

(defn onerror
  "Property.

  The onerror property of the `web.other.EventSource` interface
  an `EventHandler` called when an error occurs and the error event
  dispatched on an EventSource object.

  `eventSource.onerror = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.other.EventSource` interface
  an `EventHandler` called when an error occurs and the error event
  dispatched on an EventSource object.

  `eventSource.onerror = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.other.EventSource` interface
  an `EventHandler` called when a message event is received, that
  when a message is coming from the source.

  `eventSource.onmessage = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.other.EventSource` interface
  an `EventHandler` called when a message event is received, that
  when a message is coming from the source.

  `eventSource.onmessage = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onopen
  "Property.

  The onopen property of the `web.other.EventSource` interface
  an `EventHandler` called when an open event is received, that
  when the connection was just opened.

  `eventSource.onopen = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`"
  [this]
  (-> this (.-onopen)))

(defn set-onopen!
  "Property.

  The onopen property of the `web.other.EventSource` interface
  an `EventHandler` called when an open event is received, that
  when the connection was just opened.

  `eventSource.onopen = function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`"
  [this val]
  (aset this "onopen" val))

