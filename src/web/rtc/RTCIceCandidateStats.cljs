(ns web.rtc.RTCIceCandidateStats
  "The WebRTC API's RTCIceCandidateStats dictionary provides statistics
  to an `web.rtc.RTCIceCandidate`."
  (:refer-clojure :exclude []))

(defn address
  "Property.

  The address property of the `web.rtc.RTCIceCandidateStats` dictionary
  the address of the ICE candidate. While it's preferred that the
  be specified as an IPv4 or IPv6 numeric address, a fully-qualified
  name can be used as well.

  `candidateAddress = rtcIceCandidateStats.address;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/address`"
  [this]
  (-> this (.-address)))

(defn set-address!
  "Property.

  The address property of the `web.rtc.RTCIceCandidateStats` dictionary
  the address of the ICE candidate. While it's preferred that the
  be specified as an IPv4 or IPv6 numeric address, a fully-qualified
  name can be used as well.

  `candidateAddress = rtcIceCandidateStats.address;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/address`"
  [this val]
  (aset this "address" val))

(defn candidate-type
  "Property.

  The `web.rtc.RTCIceCandidateStats` interface's candidateType
  is a string which indicates the type of ICE candidate the object

  `candidateType = rtcIceCandidateStats.candidateType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/candidateType`"
  [this]
  (-> this (.-candidateType)))

(defn set-candidate-type!
  "Property.

  The `web.rtc.RTCIceCandidateStats` interface's candidateType
  is a string which indicates the type of ICE candidate the object

  `candidateType = rtcIceCandidateStats.candidateType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/candidateType`"
  [this val]
  (aset this "candidateType" val))

(defn deleted
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's deleted property
  whether or not the candidate has been deleted or released.

  `isDeleted = rtcIceCandidateStats.deleted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/deleted`"
  [this]
  (-> this (.-deleted)))

(defn set-deleted!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's deleted property
  whether or not the candidate has been deleted or released.

  `isDeleted = rtcIceCandidateStats.deleted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/deleted`"
  [this val]
  (aset this "deleted" val))

(defn network-type
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's networkType property
  the type of network used by a local candidate to communicate
  a remote peer.

  `networkType = rtcIceCandidateStats.networkType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/networkType`"
  [this]
  (-> this (.-networkType)))

(defn set-network-type!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's networkType property
  the type of network used by a local candidate to communicate
  a remote peer.

  `networkType = rtcIceCandidateStats.networkType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/networkType`"
  [this val]
  (aset this "networkType" val))

(defn port
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's port property
  the network port used by the candidate.

  `candidatePort = rtcIceCandidateStats.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/port`"
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's port property
  the network port used by the candidate.

  `candidatePort = rtcIceCandidateStats.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/port`"
  [this val]
  (aset this "port" val))

(defn priority
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's priority property
  a positive integer value indicating the priority (or desirability)
  the described candidate.

  `priority = rtcIceCandidateStats.priority;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/priority`"
  [this]
  (-> this (.-priority)))

(defn set-priority!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's priority property
  a positive integer value indicating the priority (or desirability)
  the described candidate.

  `priority = rtcIceCandidateStats.priority;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/priority`"
  [this val]
  (aset this "priority" val))

(defn protocol
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's protocol property
  the protocol the specified candidate would use for communication
  the remote peer.

  `protocol = rtcIceCandidateStats.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/protocol`"
  [this]
  (-> this (.-protocol)))

(defn set-protocol!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's protocol property
  the protocol the specified candidate would use for communication
  the remote peer.

  `protocol = rtcIceCandidateStats.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/protocol`"
  [this val]
  (aset this "protocol" val))

(defn relay-protocol
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's relayProtocol
  specifies the protocol being used by a local ICE candidate to
  with the TURN server.

  `relayProtocol = rtcIceCandidateStats.relayProtocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/relayProtocol`"
  [this]
  (-> this (.-relayProtocol)))

(defn set-relay-protocol!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's relayProtocol
  specifies the protocol being used by a local ICE candidate to
  with the TURN server.

  `relayProtocol = rtcIceCandidateStats.relayProtocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/relayProtocol`"
  [this val]
  (aset this "relayProtocol" val))

(defn transport-id
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's transportId property
  a string that uniquely identifies the transport that produced
  `RTCTransportStats` from which information about this candidate
  taken.

  `transportID = rtcIceCandidateStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/transportId`"
  [this]
  (-> this (.-transportId)))

(defn set-transport-id!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's transportId property
  a string that uniquely identifies the transport that produced
  `RTCTransportStats` from which information about this candidate
  taken.

  `transportID = rtcIceCandidateStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/transportId`"
  [this val]
  (aset this "transportId" val))

(defn url
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's url property
  the URL of the ICE server from which the described candidate
  obtained. This property is only available for local candidates.

  `url = rtcIceCandidateStats.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/url`"
  [this]
  (-> this (.-url)))

(defn set-url!
  "Property.

  The `web.rtc.RTCIceCandidateStats` dictionary's url property
  the URL of the ICE server from which the described candidate
  obtained. This property is only available for local candidates.

  `url = rtcIceCandidateStats.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/url`"
  [this val]
  (aset this "url" val))

(defn moz-local-transport
  "Property.

  [Non Standard]
  [Obsolute]

  The non-standard Mozilla extension to the `web.rtc.RTCIceCandidateStats`
  mozLocalTransport, has been supplanted by the standard `protocol`
  `relayProtocol` properties.

  `Instead of using mozLocalTransport, you should use code like this:



  localTransport = rtcIceCandidateStats.relayProtocol || rtcIceCandidateStats.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/mozLocalTransport`"
  [this]
  (-> this (.-mozLocalTransport)))

(defn set-moz-local-transport!
  "Property.

  [Non Standard]
  [Obsolute]

  The non-standard Mozilla extension to the `web.rtc.RTCIceCandidateStats`
  mozLocalTransport, has been supplanted by the standard `protocol`
  `relayProtocol` properties.

  `Instead of using mozLocalTransport, you should use code like this:



  localTransport = rtcIceCandidateStats.relayProtocol || rtcIceCandidateStats.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/mozLocalTransport`"
  [this val]
  (aset this "mozLocalTransport" val))

