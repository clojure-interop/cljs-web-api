(ns web.presentation.PresentationConnection
  "The PresentationConnection interface of the Presentation API
  methods and properties for managing a single presentation. Each
  connection is represented by a PresentationConnection object.
  the controlling user agent and receiving user agent MUST implement"
  (:refer-clojure :exclude []))

(defn close
  "Method.

  When the close() method is called on a `web.presentation.PresentationConnection`,
  user agent begins the process of closing the connection by sending
  empty closeMessage with the closeReason set to closed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/close`"
  [this & args]
  (apply (-> this .-close) (concat [this] args)))

(defn send
  "Method.

  The send() method of the `web.presentation.PresentationConnection`
  tells a controlling browsing context to send binary or text data
  a presenting browsing context.

  `PresentationConnection.send(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/send`"
  [this data]
  (-> this (.send data)))

(defn terminate
  "Method.

  When the terminate() method is called on a `web.presentation.PresentationConnection`,
  user agent begins the process of terminating the presentation.
  exact process differs depending on whether terminate() is called
  the controlling or the presenting context.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/terminate`"
  [this & args]
  (apply (-> this .-terminate) (concat [this] args)))

(defn binary-type
  "Property.

  When a PresentationConnection object is created, its binaryType
  attribute MUST be set to the string \\\"arraybuffer\\\". Upon getting,
  attribute MUST return its most recent value (the value it was
  set as). Upon setting, the user agent MUST set the IDL attribute
  the new value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/binaryType`"
  [this]
  (-> this (.binaryType)))

(defn set-binary-type!
  "Property.

  When a PresentationConnection object is created, its binaryType
  attribute MUST be set to the string \\\"arraybuffer\\\". Upon getting,
  attribute MUST return its most recent value (the value it was
  set as). Upon setting, the user agent MUST set the IDL attribute
  the new value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/binaryType`"
  [this val]
  (aset this "binaryType" val))

(defn onclose
  "Property.

  Fired when there is a call to PresentationConnection.close()."
  [this]
  (-> this (.onclose)))

(defn set-onclose!
  "Property.

  Fired when there is a call to PresentationConnection.close()."
  [this val]
  (aset this "onclose" val))

(defn state
  "Property.

  The state attribute reflects the presentation connection's current
  Depending on the current PresentationConnectionState, the state
  can hold one of the following values.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/state`"
  [this]
  (-> this (.state)))

(defn set-state!
  "Property.

  The state attribute reflects the presentation connection's current
  Depending on the current PresentationConnectionState, the state
  can hold one of the following values.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/state`"
  [this val]
  (aset this "state" val))

(defn url
  "Property.

  The url readonly property of the `web.presentation.PresentationConnection`
  returns the URL used to create or reconnect to the presentation.

  `var url = PresentationConnection.url`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/url`"
  [this]
  (-> this (.url)))

(defn set-url!
  "Property.

  The url readonly property of the `web.presentation.PresentationConnection`
  returns the URL used to create or reconnect to the presentation.

  `var url = PresentationConnection.url`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/url`"
  [this val]
  (aset this "url" val))

