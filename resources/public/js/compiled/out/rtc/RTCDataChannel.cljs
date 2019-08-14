(ns rtc.RTCDataChannel
  "The RTCDataChannel interface represents a network channel which
  be used for bidirectional peer-to-peer transfers of arbitrary
  Every data channel is associated with an `rtc.RTCPeerConnection`,
  each peer connection can have up to a theoretical maximum of
  data channels (the actual limit may vary from browser to browser)."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The RTCDataChannel.close() method closes the `rtc.RTCDataChannel`.
  peer is permitted to call this method to initiate closure of
  channel.

  `RTCDataChannel.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/close`"
  [this ]
  (-> this (.close)))

(defn send
  "Method.

  The send() method of the `rtc.RTCDataChannel` interface sends
  across the data channel to the remote peer.

  `RTCDataChannel.send(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/send`"
  [this data]
  (-> this (.send data)))

(defn binary-type
  "Property.

  The property binaryType on the `rtc.RTCDataChannel` interface
  a `dom.DOMString` which specifies the type of JavaScript object
  should be used to represent binary data received on the `rtc.RTCDataChannel`.
  allowed by the `web.WebSocket.binaryType` property are also permitted
  \\\"blob\\\" if `web.Blob` objects are being used or \\\"arraybuffer\\\"
  `web.ArrayBuffer` objects are being used. The default is \\\"blob\\\".

  `var type = aDataChannel.binaryType;

  aDataChannel.binaryType = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/binaryType`"
  [this]
  (-> this (.binaryType)))

(defn set-binary-type!
  "Property.

  The property binaryType on the `rtc.RTCDataChannel` interface
  a `dom.DOMString` which specifies the type of JavaScript object
  should be used to represent binary data received on the `rtc.RTCDataChannel`.
  allowed by the `web.WebSocket.binaryType` property are also permitted
  \\\"blob\\\" if `web.Blob` objects are being used or \\\"arraybuffer\\\"
  `web.ArrayBuffer` objects are being used. The default is \\\"blob\\\".

  `var type = aDataChannel.binaryType;

  aDataChannel.binaryType = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/binaryType`"
  [this val]
  (aset this "binaryType" val))

(defn buffered-amount
  "Property.

  The read-only RTCDataChannel property bufferedAmount returns
  number of bytes of data currently queued to be sent over the
  channel.

  `var amount = aDataChannel.bufferedAmount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmount`"
  [this]
  (-> this (.bufferedAmount)))

(defn buffered-amount-low-threshold
  "Property.

  The RTCDataChannel property bufferedAmountLowThreshold is used
  specify the number of bytes of buffered outgoing data that is
  \\\"low.\\\" The default value is 0.

  `var threshold = aDataChannel.bufferedAmountLowThreshold;

  aDataChannel.bufferedAmountLowThreshold = threshold;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold`"
  [this]
  (-> this (.bufferedAmountLowThreshold)))

(defn set-buffered-amount-low-threshold!
  "Property.

  The RTCDataChannel property bufferedAmountLowThreshold is used
  specify the number of bytes of buffered outgoing data that is
  \\\"low.\\\" The default value is 0.

  `var threshold = aDataChannel.bufferedAmountLowThreshold;

  aDataChannel.bufferedAmountLowThreshold = threshold;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold`"
  [this val]
  (aset this "bufferedAmountLowThreshold" val))

(defn id
  "Property.

  The read-only RTCDataChannel property id returns an ID number
  0 and 65,534) which uniquely identifies the `rtc.RTCDataChannel`.

  `var id = aDataChannel.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/id`"
  [this]
  (-> this (.id)))

(defn label
  "Property.

  The read-only RTCDataChannel property label returns a `dom.DOMString`
  a name describing the data channel. These labels are not required
  be unique.

  `var name = aDataChannel.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/label`"
  [this]
  (-> this (.label)))

(defn max-packet-life-time
  "Property.

  The read-only RTCDataChannel property maxPacketLifeTime returns
  amount of time, in milliseconds, the browser is allowed to take
  attempt to transmit a message, as set when the data channel was
  or null.

  `var lifetime = aDataChannel.maxPacketLifeTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/maxPacketLifeTime`"
  [this]
  (-> this (.maxPacketLifeTime)))

(defn max-retransmits
  "Property.

  The read-only RTCDataChannel property maxRetransmits returns
  maximum number of times the browser should try to retransmit
  message before giving up, as set when the data channel was created,
  null, which indicates that there is no maximum.

  `var tries = aDataChannel.maxRetransmits;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/maxRetransmits`"
  [this]
  (-> this (.maxRetransmits)))

(defn negotiated
  "Property.

  The read-only RTCDataChannel property negotiated indicates whether
  `rtc.RTCDataChannel`'s connection was negotiated by the Web app
  or by the WebRTC layer (false).

  `var negotiated = aDataChannel.negotiated;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/negotiated`"
  [this]
  (-> this (.negotiated)))

(defn onbufferedamountlow
  "Property.

  The RTCDataChannel.onbufferedamountlow property is an `web.EventHandler`
  specifies a function the browser calls when the bufferedamountlow
  is sent to the `rtc.RTCDataChannel`. This event, which is represented
  a simple `web.Event` object, is sent when the amount of data
  to be sent falls to or below the threshold specified by the channel's

  `RTCDataChannel.onbufferedamountlow = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onbufferedamountlow`"
  [this]
  (-> this (.onbufferedamountlow)))

(defn set-onbufferedamountlow!
  "Property.

  The RTCDataChannel.onbufferedamountlow property is an `web.EventHandler`
  specifies a function the browser calls when the bufferedamountlow
  is sent to the `rtc.RTCDataChannel`. This event, which is represented
  a simple `web.Event` object, is sent when the amount of data
  to be sent falls to or below the threshold specified by the channel's

  `RTCDataChannel.onbufferedamountlow = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onbufferedamountlow`"
  [this val]
  (aset this "onbufferedamountlow" val))

(defn onclose
  "Property.

  The RTCDataChannel.onclose property is an `web.EventHandler`
  specifies a function to be called by the browser when the close
  is received by the `rtc.RTCDataChannel`. This is a simple `web.Event`
  indicates that the data channel has closed down.

  `RTCDataChannel.onclose = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onclose`"
  [this]
  (-> this (.onclose)))

(defn set-onclose!
  "Property.

  The RTCDataChannel.onclose property is an `web.EventHandler`
  specifies a function to be called by the browser when the close
  is received by the `rtc.RTCDataChannel`. This is a simple `web.Event`
  indicates that the data channel has closed down.

  `RTCDataChannel.onclose = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The RTCDataChannel.onerror property is an `web.EventHandler`
  specifies a function to be called when the error event is received.
  an error occurs on the data channel, the function receives as
  an `web.ErrorEvent` object describing the error which occurred.

  `RTCDataChannel.onerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The RTCDataChannel.onerror property is an `web.EventHandler`
  specifies a function to be called when the error event is received.
  an error occurs on the data channel, the function receives as
  an `web.ErrorEvent` object describing the error which occurred.

  `RTCDataChannel.onerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The RTCDataChannel.onmessage property stores an `web.EventHandler`
  specifies a function to be called when the message event is fired
  the channel. This event is represented by the `web.MessageEvent`
  This event is sent to the channel when a message is received
  the other peer.

  `RTCDataChannel.onmessage = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The RTCDataChannel.onmessage property stores an `web.EventHandler`
  specifies a function to be called when the message event is fired
  the channel. This event is represented by the `web.MessageEvent`
  This event is sent to the channel when a message is received
  the other peer.

  `RTCDataChannel.onmessage = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onopen
  "Property.

  The RTCDataChannel.onopen property is an `web.EventHandler` which
  a function to be called when the open event is fired; this is
  simple `web.Event` which is sent when the data channel's underlying
  transport—the link over which the `rtc.RTCDataChannel`'s messages
  established or re-established.

  `RTCDataChannel.onopen = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onopen`"
  [this]
  (-> this (.onopen)))

(defn set-onopen!
  "Property.

  The RTCDataChannel.onopen property is an `web.EventHandler` which
  a function to be called when the open event is fired; this is
  simple `web.Event` which is sent when the data channel's underlying
  transport—the link over which the `rtc.RTCDataChannel`'s messages
  established or re-established.

  `RTCDataChannel.onopen = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onopen`"
  [this val]
  (aset this "onopen" val))

(defn ordered
  "Property.

  The read-only RTCDataChannel property ordered indicates whether
  not the data channel guarantees in-order delivery of messages;
  default is true, which indicates that the data channel is indeed

  `var ordered = aDataChannel.ordered;

  A `web.Boolean` value which is true if in-order delivery is guaranteed and is otherwise false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/ordered`"
  [this]
  (-> this (.ordered)))

(defn protocol
  "Property.

  The read-only RTCDataChannel property protocol returns a `dom.DOMString`
  the name of the subprotocol in use. If no protocol was specified
  the data channel was created, then this property's value is \\\"\\\"
  empty string).

  `var subProtocol = aDataChannel.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/protocol`"
  [this]
  (-> this (.protocol)))

(defn ready-state
  "Property.

  The read-only RTCDataChannel property readyState returns an enum
  type RTCDataChannelState which indicates the state of the data
  underlying data connection.

  `var state = aDataChannel.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/readyState`"
  [this]
  (-> this (.readyState)))

(defn reliable
  "Property.

  The read-only RTCDataChannel property reliable indicates whether
  not the data channel is reliable.

  `var reliable = aDataChannel.reliable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/reliable`"
  [this]
  (-> this (.reliable)))

(defn stream
  "Property.

  The deprecated (and never part of the official specification)
  RTCDataChannel property stream returns an ID number (between
  and 65,535) which uniquely identifies the `rtc.RTCDataChannel`.

  `var stream = aDataChannel.stream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/stream`"
  [this]
  (-> this (.stream)))

(defn bufferedamountlow
  "Property.

  A bufferedamountlow event is sent to an `rtc.RTCDataChannel`
  the number of bytes currently in the outbound data transfer buffer
  below the threshold specified in `web.bufferedAmountLowThreshold`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedamountlow_event`"
  [this]
  (-> this (.bufferedamountlow)))

(defn set-bufferedamountlow!
  "Property.

  A bufferedamountlow event is sent to an `rtc.RTCDataChannel`
  the number of bytes currently in the outbound data transfer buffer
  below the threshold specified in `web.bufferedAmountLowThreshold`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedamountlow_event`"
  [this val]
  (aset this "bufferedamountlow" val))

(defn error
  "Property.

  A WebRTC `web.error` event is sent to an `rtc.RTCDataChannel`
  `web.onerror` error handler when an error occurs on the data

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/error_event`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  A WebRTC `web.error` event is sent to an `rtc.RTCDataChannel`
  `web.onerror` error handler when an error occurs on the data

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/error_event`"
  [this val]
  (aset this "error" val))

(defn message
  "Property.

  The WebRTC message event is sent to the `web.onmessage` event
  on an `rtc.RTCDataChannel` object when a message has been received
  the remote peer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/message_event`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The WebRTC message event is sent to the `web.onmessage` event
  on an `rtc.RTCDataChannel` object when a message has been received
  the remote peer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/message_event`"
  [this val]
  (aset this "message" val))

(defn open
  "Property.

  The WebRTC open event is sent to an `rtc.RTCDataChannel` object's
  event handler when the underlying transport used to send and
  the data channel's messages is opened or re-opened.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/open_event`"
  [this]
  (-> this (.open)))

(defn set-open!
  "Property.

  The WebRTC open event is sent to an `rtc.RTCDataChannel` object's
  event handler when the underlying transport used to send and
  the data channel's messages is opened or re-opened.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/open_event`"
  [this val]
  (aset this "open" val))

