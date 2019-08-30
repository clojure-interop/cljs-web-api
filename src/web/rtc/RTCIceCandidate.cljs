(ns web.rtc.RTCIceCandidate
  "The RTCIceCandidate interface—part of the WebRTC API—represents
  candidate Internet Connectivity Establishment (ICE) configuration
  may be used to establish an `web.audio.RTCPeerConnection`."
  (:refer-clojure :exclude [type]))

(defn candidate
  "Property.

  [Read Only]

  The read-only property candidate on the `web.rtc.RTCIceCandidate`
  returns a `web.dom.DOMString` describing the candidate in detail.

  `var candidate = RTCIceCandidate.candidate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/candidate`"
  [this]
  (-> this (.-candidate)))

(defn component
  "Property.

  [Read Only]

  The read-only component property on the `web.rtc.RTCIceCandidate`
  is a string which indicates whether the candidate is an RTP or
  RTCP candidate.

  `var component = RTCIceCandidate.component;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/component`"
  [this]
  (-> this (.-component)))

(defn foundation
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only foundation
  is a string which uniquely identifies the candidate across multiple

  `var foundation = RTCIceCandidate.foundation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/foundation`"
  [this]
  (-> this (.-foundation)))

(defn ip
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only ip property
  a string providing the address of the device which is the source
  the candidate.

  `var address = RTCIceCandidate.ip;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/ip`"
  [this]
  (-> this (.-ip)))

(defn port
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only port property
  the port number on the device at the address given by `ip` at
  the candidate's peer can be reached.

  `var port = RTCIceCandidate.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/port`"
  [this]
  (-> this (.-port)))

(defn priority
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only priority
  specifies the candidate's priority according to the remote peer;
  higher this value is, the better the remote peer considers the
  to be.

  `var priority = RTCIceCandidate.priority;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/priority`"
  [this]
  (-> this (.-priority)))

(defn protocol
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only protocol
  is a string which indicates whether the candidate uses UDP or
  as its transport protocol.

  `var protocol = RTCIceCandidate.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/protocol`"
  [this]
  (-> this (.-protocol)))

(defn related-address
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only relatedAddress
  is a string indicating the related address of a relay or reflexive

  `var relAddress = RTCIceCandidate.relatedAddress;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/relatedAddress`"
  [this]
  (-> this (.-relatedAddress)))

(defn related-port
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only relatedPort
  indicates the port number of reflexive or relay candidates.

  `var relPort = RTCIceCandidate.relatedPort;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/relatedPort`"
  [this]
  (-> this (.-relatedPort)))

(defn sdp-mid
  "Property.

  [Read Only]

  The read-only property sdpMid on the `web.rtc.RTCIceCandidate`
  returns a `web.dom.DOMString` specifying the media stream identification
  of the media component with which the candidate is associated.

  `var sdpMid = RTCIceCandidate.sdpMid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/sdpMid`"
  [this]
  (-> this (.-sdpMid)))

(defn sdp-m-line-index
  "Property.

  [Read Only]

  The read-only sdpMLineIndex property on the `web.rtc.RTCIceCandidate`
  is a zero-based index of the m-line describing the media associated
  the candidate.

  `var sdpMLineIndex = RTCIceCandidate.sdpMLineIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/sdpMLineIndex`"
  [this]
  (-> this (.-sdpMLineIndex)))

(defn tcp-type
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only tcpType property
  included on TCP candidates to provide additional details about
  candidate type.

  `var tcpType = RTCIceCandidate.tcpType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/tcpType`"
  [this]
  (-> this (.-tcpType)))

(defn type
  "Property.

  [Read Only]

  The `web.rtc.RTCIceCandidate` interface's read-only type specifies
  type of candidate the object represents.

  `var type = RTCIceCandidate.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/type`"
  [this]
  (-> this (.-type)))

(defn username-fragment
  "Property.

  [Read Only]

  The read-only usernameFragment property on the `web.rtc.RTCIceCandidate`
  is a string indicating the username fragment (\\\"ufrag\\\") that
  identifies a single ICE interaction session.

  `var ufrag = RTCIceCandidate.usernameFragment;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/usernameFragment`"
  [this]
  (-> this (.-usernameFragment)))

