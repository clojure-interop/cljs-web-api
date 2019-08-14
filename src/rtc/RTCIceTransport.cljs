(ns rtc.RTCIceTransport
  "The RTCIceTransport interface provides access to information
  the ICE transport layer over which the data is being sent and"
  (:refer-clojure :exclude []))

(defn get-local-candidates
  "Method.

  The `rtc.RTCIceTransport` method getLocalCandidates() returns
  array of `rtc.RTCIceCandidate` objects, one for each of the candidates
  have been gathered by the local device during the current ICE
  session.

  `localCandidates = RTCIceTransport.getLocalCandidates();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalCandidates`"
  [this ]
  (-> this (.getLocalCandidates)))

(defn get-local-parameters
  "Method.

  The `rtc.RTCIceTransport` method getLocalParameters() returns
  `rtc.RTCIceParameters` object which provides information uniquely
  the local peer for the duration of the ICE session.

  `parameters = RTCIceTransport.getLocalParameters();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalParameters`"
  [this ]
  (-> this (.getLocalParameters)))

(defn get-selected-candidate-pair
  "Method.

  The `rtc.RTCIceTransport` method getSelectedCandidatePair() returns
  `rtc.RTCIceCandidatePair` object containing the current best-choice
  of ICE candidates describing the configuration of the endpoints
  the transport.

  `candidatePair = RTCIceTransport.getSelectedCandidatePair();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getSelectedCandidatePair`"
  [this ]
  (-> this (.getSelectedCandidatePair)))

(defn get-remote-candidates
  "Method.

  The `rtc.RTCIceTransport` method getRemoteCandidates() returns
  array which contains one `rtc.RTCIceCandidate` for each of the
  that have been received from the remote peer so far during the
  ICE gathering session.

  `remoteCandidates = RTCIceTransport.getRemoteCandidates();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteCandidates`"
  [this ]
  (-> this (.getRemoteCandidates)))

(defn get-remote-parameters
  "Method.

  The `rtc.RTCIceTransport` method getRemoteParameters() returns
  `rtc.RTCIceParameters` object which provides information uniquely
  the remote peer for the duration of the ICE session.

  `parameters = RTCIceTransport.getRemoteParameters();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteParameters`"
  [this ]
  (-> this (.getRemoteParameters)))

(defn component
  "Property.

  The read-only `rtc.RTCIceTransport` property component specifies
  the object is serving to transport RTP or RTCP. The value is
  of the strings in `rtc.RTCIceComponent`.

  `iceComponent = RTCIceTransport.component;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/component`"
  [this]
  (-> this (.component)))

(defn gathering-state
  "Property.

  The read-only `rtc.RTCIceTransport` property gatheringState returns
  `dom.DOMString` from the enumerated type `rtc.RTCIceGathererState`
  indicates what gathering state the ICE agent is currently in:
  \\\"gathering\\\", or \\\"complete\\\".

  `gatherState = RTCIceTransport.gatheringState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/gatheringState`"
  [this]
  (-> this (.gatheringState)))

(defn ongatheringstatechange
  "Property.

  The ongatheringstatechange event handler for the `rtc.RTCIceTransport`
  specifies an event handler that is to be called when the gatheringstatechange
  occurs on the transport.

  `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`"
  [this]
  (-> this (.ongatheringstatechange)))

(defn set-ongatheringstatechange!
  "Property.

  The ongatheringstatechange event handler for the `rtc.RTCIceTransport`
  specifies an event handler that is to be called when the gatheringstatechange
  occurs on the transport.

  `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`"
  [this val]
  (aset this "ongatheringstatechange" val))

(defn onselectedcandidatepairchange
  "Property.

  The `rtc.RTCIceTransport` interface's onselectedcandidatepairchange
  handler specifies a function to be called to handle the selectedcandidatepairchange
  which is fired when the ICE agent selects a new candidate pair
  be used for the connection.

  `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`"
  [this]
  (-> this (.onselectedcandidatepairchange)))

(defn set-onselectedcandidatepairchange!
  "Property.

  The `rtc.RTCIceTransport` interface's onselectedcandidatepairchange
  handler specifies a function to be called to handle the selectedcandidatepairchange
  which is fired when the ICE agent selects a new candidate pair
  be used for the connection.

  `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`"
  [this val]
  (aset this "onselectedcandidatepairchange" val))

(defn onstatechange
  "Property.

  The onstatechange event handler for the `rtc.RTCIceTransport`
  is a property which specifies a function to serve as the `web.EventHandler`
  the statechange event that is fired whenever the transport's
  changes.

  `RTCIceTransport.onstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`"
  [this]
  (-> this (.onstatechange)))

(defn set-onstatechange!
  "Property.

  The onstatechange event handler for the `rtc.RTCIceTransport`
  is a property which specifies a function to serve as the `web.EventHandler`
  the statechange event that is fired whenever the transport's
  changes.

  `RTCIceTransport.onstatechange = stateChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`"
  [this val]
  (aset this "onstatechange" val))

(defn role
  "Property.

  The read-only `rtc.RTCIceTransport` property role indicates which
  role the transport is fulfilling: that of the controlling agent,
  the agent that is being controlled.

  `iceRole = RTCIceTransport.role;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/role`"
  [this]
  (-> this (.role)))

(defn state
  "Property.

  The read-only `rtc.RTCIceTransport` property state returns the
  state of the ICE transport, so you can determine the state of
  gathering in which the ICE agent currently is operating.

  `iceState = iceTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/state`"
  [this]
  (-> this (.state)))

