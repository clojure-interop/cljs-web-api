(ns web.websockets.WebSocket
  "The WebSocket object provides the API for creating and managing
  WebSocket connection to a server, as well as for sending and
  data on the connection."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The WebSocket.close() method closes the `web.websockets.WebSocket`
  or connection attempt, if any. If the connection is already CLOSED,
  method does nothing.

  `WebSocket.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close`"
  [this ]
  (-> this (.close)))

(defn send
  "Method.

  The WebSocket.send() method enqueues the specified data to be
  to the server over the WebSocket connection, increasing the value
  bufferedAmount by the number of bytes needed to contain the data.
  the data can't be sent (for example, because it needs to be buffered
  the buffer is full), the socket is closed automatically.

  `WebSocket.send(\\\"Hello server!\\\");`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send`"
  [this & args]
  (-> this .-send (.apply this (clj->js args))))

(defn binary-type
  "Property.

  The WebSocket.binaryType property returns the type of binary
  being transmitted by the connection.

  `var binaryType = aWebSocket.binaryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/binaryType`"
  [this]
  (-> this (.-binaryType)))

(defn set-binary-type!
  "Property.

  The WebSocket.binaryType property returns the type of binary
  being transmitted by the connection.

  `var binaryType = aWebSocket.binaryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/binaryType`"
  [this val]
  (aset this "binaryType" val))

(defn buffered-amount
  "Property.

  [Read Only]

  The WebSocket.bufferedAmount read-only property returns the number
  bytes of data that have been queued using calls to send() but
  yet transmitted to the network. This value resets to zero once
  queued data has been sent. This value does not reset to zero
  the connection is closed; if you keep calling send(), this will
  to climb.

  `var bufferedAmount = aWebSocket.bufferedAmount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount`"
  [this]
  (-> this (.-bufferedAmount)))

(defn extensions
  "Property.

  [Read Only]

  The WebSocket.extensions read-only property returns the extensions
  by the server. This is currently only the empty string or a list
  extensions as negotiated by the connection.

  `var extensions = aWebSocket.extensions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/extensions`"
  [this]
  (-> this (.-extensions)))

(defn onclose
  "Property.

  The WebSocket.onclose property is an `EventHandler` that is called
  the WebSocket connection's `readyState` changes to `CLOSED`.
  is called with a `web.websockets.CloseEvent`.

  `aWebSocket.onclose = function(event) {
  console.log(\\\"WebSocket is closed now.\\\");
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

  The WebSocket.onclose property is an `EventHandler` that is called
  the WebSocket connection's `readyState` changes to `CLOSED`.
  is called with a `web.websockets.CloseEvent`.

  `aWebSocket.onclose = function(event) {
  console.log(\\\"WebSocket is closed now.\\\");
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The `web.websockets.WebSocket` interface's onerror event handler
  is a function which gets called when an error occurs on the WebSocket.

  `webSocket.onerror = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The `web.websockets.WebSocket` interface's onerror event handler
  is a function which gets called when an error occurs on the WebSocket.

  `webSocket.onerror = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The WebSocket.onmessage property is an `EventHandler` that is
  when a message is received from the server. It is called with
  `web.workers.MessageEvent`.

  `aWebSocket.onmessage = function(event) {
  console.debug(\\\"WebSocket message received:\\\", event);
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The WebSocket.onmessage property is an `EventHandler` that is
  when a message is received from the server. It is called with
  `web.workers.MessageEvent`.

  `aWebSocket.onmessage = function(event) {
  console.debug(\\\"WebSocket message received:\\\", event);
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onopen
  "Property.

  The WebSocket.onopen property is an `EventHandler` that is called
  the `web.websockets.WebSocket` connection's `readyState` changes
  `OPEN`; this indicates that the connection is ready to send and
  data. It is called with an `web.event.Event`.

  `aWebSocket.onopen = function(event) {
  console.log(\\\"WebSocket is open now.\\\");
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onopen`"
  [this]
  (-> this (.-onopen)))

(defn set-onopen!
  "Property.

  The WebSocket.onopen property is an `EventHandler` that is called
  the `web.websockets.WebSocket` connection's `readyState` changes
  `OPEN`; this indicates that the connection is ready to send and
  data. It is called with an `web.event.Event`.

  `aWebSocket.onopen = function(event) {
  console.log(\\\"WebSocket is open now.\\\");
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onopen`"
  [this val]
  (aset this "onopen" val))

(defn protocol
  "Property.

  [Read Only]

  The WebSocket.protocol read-only property returns the name of
  sub-protocol the server selected; this will be one of the strings
  in the protocols parameter when creating the `web.websockets.WebSocket`
  or the empty string if no connection is established.

  `var protocol = aWebSocket.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol`"
  [this]
  (-> this (.-protocol)))

(defn ready-state
  "Property.

  [Read Only]

  The WebSocket.readyState read-only property returns the current
  of the `web.websockets.WebSocket` connection.

  `var readyState = aWebSocket.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState`"
  [this]
  (-> this (.-readyState)))

(defn url
  "Property.

  [Read Only]

  The WebSocket.url read-only property returns the absolute URL
  the `web.websockets.WebSocket` as resolved by the constructor.

  `var url = aWebSocket.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/url`"
  [this]
  (-> this (.-url)))

