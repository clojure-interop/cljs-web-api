(ns web.audio.RTCIceTransport
  "The RTCIceTransport interface provides access to information
  the ICE transport layer over which the data is being sent and"
  (:refer-clojure :exclude []))

(defn get-local-candidates
  "Method.

  The `web.audio.RTCIceTransport` method getLocalCandidates() returns
  array of `web.rtc.RTCIceCandidate` objects, one for each of the
  that have been gathered by the local device during the current
  agent session.

  `localCandidates = RTCIceTransport.getLocalCandidates();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalCandidates`"
  [this ]
  (-> this (.getLocalCandidates)))

(defn get-local-parameters
  "Method.

  The `web.audio.RTCIceTransport` method getLocalParameters() returns
  `web.rtc.RTCIceParameters` object which provides information
  identifying the local peer for the duration of the ICE session.

  `parameters = RTCIceTransport.getLocalParameters();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalParameters`"
  [this ]
  (-> this (.getLocalParameters)))

(defn get-remote-candidates
  "Method.

  The `web.audio.RTCIceTransport` method getRemoteCandidates()
  an array which contains one `web.rtc.RTCIceCandidate` for each
  the candidates that have been received from the remote peer so
  during the current ICE gathering session.

  `remoteCandidates = RTCIceTransport.getRemoteCandidates();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteCandidates`"
  [this ]
  (-> this (.getRemoteCandidates)))

(defn get-remote-parameters
  "Method.

  The `web.audio.RTCIceTransport` method getRemoteParameters()
  an `web.rtc.RTCIceParameters` object which provides information
  identifying the remote peer for the duration of the ICE session.

  `parameters = RTCIceTransport.getRemoteParameters();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteParameters`"
  [this ]
  (-> this (.getRemoteParameters)))

(defn get-selected-candidate-pair
  "Method.

  The `web.audio.RTCIceTransport` method getSelectedCandidatePair()
  an `web.rtc.RTCIceCandidatePair` object containing the current
  pair of ICE candidates describing the configuration of the endpoints
  the transport.

  `candidatePair = RTCIceTransport.getSelectedCandidatePair();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getSelectedCandidatePair`"
  [this ]
  (-> this (.getSelectedCandidatePair)))

(defn component
  "Property.

  The read-only `web.audio.RTCIceTransport` property component
  whether the object is serving to transport RTP or RTCP. The value
  one of the strings in `web.rtc.RTCIceComponent`.

  `iceComponent = RTCIceTransport.component;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/component`"
  [this]
  (-> this (.-component)))

(defn gathering-state
  "Property.

  The read-only `web.audio.RTCIceTransport` property gatheringState
  a `web.dom.DOMString` from the enumerated type `web.rtc.RTCIceGathererState`
  indicates what gathering state the ICE agent is currently in:
  \\\"gathering\\\", or \\\"complete\\\".

  `gatherState = RTCIceTransport.gatheringState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/gatheringState`"
  [this]
  (-> this (.-gatheringState)))

(defn role
  "Property.

  The read-only `web.audio.RTCIceTransport` property role indicates
  ICE role the transport is fulfilling: that of the controlling
  or the agent that is being controlled.

  `iceRole = RTCIceTransport.role;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/role`"
  [this]
  (-> this (.-role)))

(defn state
  "Property.

  The read-only `web.audio.RTCIceTransport` property state returns
  current state of the ICE transport, so you can determine the
  of ICE gathering in which the ICE agent currently is operating.

  `iceState = iceTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/state`"
  [this]
  (-> this (.-state)))

(defn ongatheringstatechange
  "Property.

  The ongatheringstatechange event handler for the `web.audio.RTCIceTransport`
  specifies an event handler that is to be called when the gatheringstatechange
  occurs on the transport.

  `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`"
  [this]
  (-> this (.-ongatheringstatechange)))

(defn set-ongatheringstatechange!
  "Property.

  The ongatheringstatechange event handler for the `web.audio.RTCIceTransport`
  specifies an event handler that is to be called when the gatheringstatechange
  occurs on the transport.

  `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`"
  [this val]
  (aset this "ongatheringstatechange" val))

(defn onselectedcandidatepairchange
  "Property.

  The `web.audio.RTCIceTransport` interface's onselectedcandidatepairchange
  handler specifies a function to be called to handle the selectedcandidatepairchange
  which is fired when the ICE agent selects a new candidate pair
  be used for the connection.

  `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`"
  [this]
  (-> this (.-onselectedcandidatepairchange)))

(defn set-onselectedcandidatepairchange!
  "Property.

  The `web.audio.RTCIceTransport` interface's onselectedcandidatepairchange
  handler specifies a function to be called to handle the selectedcandidatepairchange
  which is fired when the ICE agent selects a new candidate pair
  be used for the connection.

  `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`"
  [this val]
  (aset this "onselectedcandidatepairchange" val))

(defn onstatechange
  "Property.

  The onstatechange event handler for the `web.audio.RTCIceTransport`
  is a property which specifies a function to serve as the `EventHandler`
  the statechange event that is fired whenever the transport's
  changes.

  `RTCIceTransport.onstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`"
  [this]
  (-> this (.-onstatechange)))

(defn set-onstatechange!
  "Property.

  The onstatechange event handler for the `web.audio.RTCIceTransport`
  is a property which specifies a function to serve as the `EventHandler`
  the statechange event that is fired whenever the transport's
  changes.

  `RTCIceTransport.onstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`"
  [this val]
  (aset this "onstatechange" val))

