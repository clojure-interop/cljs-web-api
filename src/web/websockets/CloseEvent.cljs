(ns web.websockets.CloseEvent
  "A CloseEvent is sent to clients using WebSockets when the connection
  closed. This is delivered to the listener indicated by the WebSocket
  onclose attribute."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CloseEvent() constructor creates a new `web.websockets.CloseEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/CloseEvent`"
  js/CloseEvent)

(defn init-close-event
  "Method.

  The CloseEvent.initCloseEvent() method initializes the value
  a close event once it's been created (normally using the `Document.createEvent()`

  `event.initMouseEvent(type, canBubble, cancelable, wasClean, reasonCode, reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/initCloseEvent`"
  [this type can-bubble cancelable was-clean reason-code reason]
  (-> this (.initCloseEvent type can-bubble cancelable was-clean reason-code reason)))

(defn code
  "Property.

  Returns an unsigned short containing the close code send by the
  The following values are permitted status codes. The following
  are sourced from the IANA website [Ref]. Note that the 1xxx codes
  only WebSocket-internal and not for the same meaning by the transported
  (like when the application-layer protocol is invalid). The only
  codes to be specified in Firefox are 1000 and 3000 to 4999 [Source,
  Status code
  Name
  Description
  0–999
  Reserved and not used.
  1000
  Normal Closure
  Normal closure; the connection successfully completed whatever
  for which it was created.
  1001
  Going Away
  The endpoint is going away, either because of a server failure
  because the browser is navigating away from the page that opened
  connection.
  1002
  Protocol Error
  The endpoint is terminating the connection due to a protocol
  1003
  Unsupported Data
  The connection is being terminated because the endpoint received
  of a type it cannot accept (for example, a text-only endpoint
  binary data).
  1004
  Reserved. A meaning might be defined in the future.
  1005
  No Status Received
  Reserved. Indicates that no status code was provided even though
  was expected.
  1006
  Abnormal Closure
  Reserved. Used to indicate that a connection was closed abnormally
  is, with no close frame being sent) when a status code is expected.
  1007
  Invalid frame payload data
  The endpoint is terminating the connection because a message
  received that contained inconsistent data (e.g., non-UTF-8 data
  a text message).
  1008
  Policy Violation
  The endpoint is terminating the connection because it received
  message that violates its policy. This is a generic status code,
  when codes 1003 and 1009 are not suitable.
  1009
  Message too big
  The endpoint is terminating the connection because a data frame
  received that is too large.
  1010
  Missing Extension
  The client is terminating the connection because it expected
  server to negotiate one or more extension, but the server didn't.
  1011
  Internal Error
  The server is terminating the connection because it encountered
  unexpected condition that prevented it from fulfilling the request.
  1012
  Service Restart
  The server is terminating the connection because it is restarting.
  1013
  Try Again Later
  The server is terminating the connection due to a temporary
  e.g. it is overloaded and is casting off some of its clients.
  1014
  Bad Gateway
  The server was acting as a gateway or proxy and received an
  response from the upstream server. This is similar to 502 HTTP
  Code.
  1015
  TLS Handshake
  Reserved. Indicates that the connection was closed due to a
  to perform a TLS handshake (e.g., the server certificate can't
  verified).
  1016–1999
  Reserved for future use by the WebSocket standard.
  2000–2999
  Reserved for use by WebSocket extensions.
  3000–3999
  Available for use by libraries and frameworks. May not be used
  applications. Available for registration at the IANA via first-come,
  4000–4999
  Available for use by applications."
  [this]
  (-> this (.-code)))

(defn set-code!
  "Property.

  Returns an unsigned short containing the close code send by the
  The following values are permitted status codes. The following
  are sourced from the IANA website [Ref]. Note that the 1xxx codes
  only WebSocket-internal and not for the same meaning by the transported
  (like when the application-layer protocol is invalid). The only
  codes to be specified in Firefox are 1000 and 3000 to 4999 [Source,
  Status code
  Name
  Description
  0–999
  Reserved and not used.
  1000
  Normal Closure
  Normal closure; the connection successfully completed whatever
  for which it was created.
  1001
  Going Away
  The endpoint is going away, either because of a server failure
  because the browser is navigating away from the page that opened
  connection.
  1002
  Protocol Error
  The endpoint is terminating the connection due to a protocol
  1003
  Unsupported Data
  The connection is being terminated because the endpoint received
  of a type it cannot accept (for example, a text-only endpoint
  binary data).
  1004
  Reserved. A meaning might be defined in the future.
  1005
  No Status Received
  Reserved. Indicates that no status code was provided even though
  was expected.
  1006
  Abnormal Closure
  Reserved. Used to indicate that a connection was closed abnormally
  is, with no close frame being sent) when a status code is expected.
  1007
  Invalid frame payload data
  The endpoint is terminating the connection because a message
  received that contained inconsistent data (e.g., non-UTF-8 data
  a text message).
  1008
  Policy Violation
  The endpoint is terminating the connection because it received
  message that violates its policy. This is a generic status code,
  when codes 1003 and 1009 are not suitable.
  1009
  Message too big
  The endpoint is terminating the connection because a data frame
  received that is too large.
  1010
  Missing Extension
  The client is terminating the connection because it expected
  server to negotiate one or more extension, but the server didn't.
  1011
  Internal Error
  The server is terminating the connection because it encountered
  unexpected condition that prevented it from fulfilling the request.
  1012
  Service Restart
  The server is terminating the connection because it is restarting.
  1013
  Try Again Later
  The server is terminating the connection due to a temporary
  e.g. it is overloaded and is casting off some of its clients.
  1014
  Bad Gateway
  The server was acting as a gateway or proxy and received an
  response from the upstream server. This is similar to 502 HTTP
  Code.
  1015
  TLS Handshake
  Reserved. Indicates that the connection was closed due to a
  to perform a TLS handshake (e.g., the server certificate can't
  verified).
  1016–1999
  Reserved for future use by the WebSocket standard.
  2000–2999
  Reserved for use by WebSocket extensions.
  3000–3999
  Available for use by libraries and frameworks. May not be used
  applications. Available for registration at the IANA via first-come,
  4000–4999
  Available for use by applications."
  [this val]
  (aset this "code" val))

(defn reason
  "Property.

  Returns a DOMString indicating the reason the server closed the
  This is specific to the particular server and sub-protocol."
  [this]
  (-> this (.-reason)))

(defn set-reason!
  "Property.

  Returns a DOMString indicating the reason the server closed the
  This is specific to the particular server and sub-protocol."
  [this val]
  (aset this "reason" val))

(defn was-clean
  "Property.

  Returns a Boolean that Indicates whether or not the connection
  cleanly closed."
  [this]
  (-> this (.-wasClean)))

(defn set-was-clean!
  "Property.

  Returns a Boolean that Indicates whether or not the connection
  cleanly closed."
  [this val]
  (aset this "wasClean" val))

