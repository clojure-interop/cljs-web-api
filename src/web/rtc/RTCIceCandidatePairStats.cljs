(ns web.rtc.RTCIceCandidatePairStats
  "The WebRTC RTCIceCandidatePairStats dictionary reports statistics
  provide insight into the quality and performance of an `web.audio.RTCPeerConnection`
  connected and configured as described by the specified pair of
  candidates."
  (:refer-clojure :exclude []))

(defn available-incoming-bitrate
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property availableIncomingBitrate
  a value indicative of the available inbound capacity of the network
  represented by the candidate pair.

  `availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate`"
  [this]
  (-> this (.-availableIncomingBitrate)))

(defn set-available-incoming-bitrate!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property availableIncomingBitrate
  a value indicative of the available inbound capacity of the network
  represented by the candidate pair.

  `availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate`"
  [this val]
  (aset this "availableIncomingBitrate" val))

(defn available-outgoing-bitrate
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property availableOutgoingBitrate
  a value indicative of the available outbound capacity of the
  connection represented by the candidate pair.

  `availableOutgoingBitrate = rtcIceCandidatePairStats.availableOutgoingBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate`"
  [this]
  (-> this (.-availableOutgoingBitrate)))

(defn set-available-outgoing-bitrate!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property availableOutgoingBitrate
  a value indicative of the available outbound capacity of the
  connection represented by the candidate pair.

  `availableOutgoingBitrate = rtcIceCandidatePairStats.availableOutgoingBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate`"
  [this val]
  (aset this "availableOutgoingBitrate" val))

(defn bytes-receieved
  "Property.

  The total number of payload bytes received (that is, the total
  of bytes received minus any headers, padding, or other administrative
  on this candidate pair so far."
  [this]
  (-> this (.-bytesReceieved)))

(defn set-bytes-receieved!
  "Property.

  The total number of payload bytes received (that is, the total
  of bytes received minus any headers, padding, or other administrative
  on this candidate pair so far."
  [this val]
  (aset this "bytesReceieved" val))

(defn bytes-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property bytesSent indicates
  total number of payload bytes—that is, bytes which aren't overhead
  as headers or padding—that hve been sent so far on the connection
  by the candidate pair.

  `sent = rtcIceCandidatePairStats.bytesSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesSent`"
  [this]
  (-> this (.-bytesSent)))

(defn set-bytes-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property bytesSent indicates
  total number of payload bytes—that is, bytes which aren't overhead
  as headers or padding—that hve been sent so far on the connection
  by the candidate pair.

  `sent = rtcIceCandidatePairStats.bytesSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesSent`"
  [this val]
  (aset this "bytesSent" val))

(defn circuit-breaker-trigger-count
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property circuitBreakerTriggerCount
  the number of times the circuit-breaker has been triggered to
  a connection timeout or other unexpected connection abort on
  specific connection configuration.

  `cbtCount = rtcIceCandidatePairStats.circuitBreakerTriggerCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/circuitBreakerTriggerCount`"
  [this]
  (-> this (.-circuitBreakerTriggerCount)))

(defn set-circuit-breaker-trigger-count!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property circuitBreakerTriggerCount
  the number of times the circuit-breaker has been triggered to
  a connection timeout or other unexpected connection abort on
  specific connection configuration.

  `cbtCount = rtcIceCandidatePairStats.circuitBreakerTriggerCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/circuitBreakerTriggerCount`"
  [this val]
  (aset this "circuitBreakerTriggerCount" val))

(defn consent-expired-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property consentExpiredTimestamp
  the time at which the most recent STUN binding response expired.

  `consentExpiration = rtcIceCandidatePairStats.consentExpiredTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp`"
  [this]
  (-> this (.-consentExpiredTimestamp)))

(defn set-consent-expired-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property consentExpiredTimestamp
  the time at which the most recent STUN binding response expired.

  `consentExpiration = rtcIceCandidatePairStats.consentExpiredTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp`"
  [this val]
  (aset this "consentExpiredTimestamp" val))

(defn consent-requests-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property consentRequestsSent
  the number of consent requests that have been sent by this peer
  the remote peer on the connection described by the pair of candidates.

  `consentRequestsSent = rtcIceCandidatePairStats.consentRequestsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent`"
  [this]
  (-> this (.-consentRequestsSent)))

(defn set-consent-requests-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property consentRequestsSent
  the number of consent requests that have been sent by this peer
  the remote peer on the connection described by the pair of candidates.

  `consentRequestsSent = rtcIceCandidatePairStats.consentRequestsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent`"
  [this val]
  (aset this "consentRequestsSent" val))

(defn current-round-trip-time
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property currentRoundTripTime
  a floating-point value indicating the number of seconds it takes
  data to be sent by this peer to the remote peer and back over
  connection described by this pair of ICE candidates.

  `rtt = rtcIceCandidatePairStats.currentRoundTripTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime`"
  [this]
  (-> this (.-currentRoundTripTime)))

(defn set-current-round-trip-time!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property currentRoundTripTime
  a floating-point value indicating the number of seconds it takes
  data to be sent by this peer to the remote peer and back over
  connection described by this pair of ICE candidates.

  `rtt = rtcIceCandidatePairStats.currentRoundTripTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime`"
  [this val]
  (aset this "currentRoundTripTime" val))

(defn first-request-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property firstRequestTimestamp
  the time at which the first STUN request was sent on the described
  pair.

  `firstRequestTimestamp = rtcIceCandidatePairStats.firstRequestTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/firstRequestTimestamp`"
  [this]
  (-> this (.-firstRequestTimestamp)))

(defn set-first-request-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property firstRequestTimestamp
  the time at which the first STUN request was sent on the described
  pair.

  `firstRequestTimestamp = rtcIceCandidatePairStats.firstRequestTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/firstRequestTimestamp`"
  [this val]
  (aset this "firstRequestTimestamp" val))

(defn last-packet-received-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastPacketReceivedTimestamp
  the time at which the connection described by the candidate pair
  received a packet. STUN packets are not included.

  `lastPacketReceivedTimestamp = rtcIceCandidatePairStats.lastPacketReceivedTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp`"
  [this]
  (-> this (.-lastPacketReceivedTimestamp)))

(defn set-last-packet-received-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastPacketReceivedTimestamp
  the time at which the connection described by the candidate pair
  received a packet. STUN packets are not included.

  `lastPacketReceivedTimestamp = rtcIceCandidatePairStats.lastPacketReceivedTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp`"
  [this val]
  (aset this "lastPacketReceivedTimestamp" val))

(defn last-packet-sent-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastPacketSentTimestamp
  the time at which the connection described by the candidate pair
  sent a packet, not including STUN packets.

  `lastPacketSentTimestamp = rtcIceCandidatePairStats.lastPacketSentTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp`"
  [this]
  (-> this (.-lastPacketSentTimestamp)))

(defn set-last-packet-sent-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastPacketSentTimestamp
  the time at which the connection described by the candidate pair
  sent a packet, not including STUN packets.

  `lastPacketSentTimestamp = rtcIceCandidatePairStats.lastPacketSentTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp`"
  [this val]
  (aset this "lastPacketSentTimestamp" val))

(defn last-request-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastRequestTimestamp
  the time at which the most recent STUN request was sent on the
  candidate pair.

  `lastRequestTimestamp = rtcIceCandidatePairStats.lastRequestTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastRequestTimestamp`"
  [this]
  (-> this (.-lastRequestTimestamp)))

(defn set-last-request-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastRequestTimestamp
  the time at which the most recent STUN request was sent on the
  candidate pair.

  `lastRequestTimestamp = rtcIceCandidatePairStats.lastRequestTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastRequestTimestamp`"
  [this val]
  (aset this "lastRequestTimestamp" val))

(defn last-response-timestamp
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastResponseTimestamp
  the time at which the last STUN response was received on the
  candidate pair.

  `lastResponseTimestamp = rtcIceCandidatePairStats.lastResponseTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastResponseTimestamp`"
  [this]
  (-> this (.-lastResponseTimestamp)))

(defn set-last-response-timestamp!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property lastResponseTimestamp
  the time at which the last STUN response was received on the
  candidate pair.

  `lastResponseTimestamp = rtcIceCandidatePairStats.lastResponseTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastResponseTimestamp`"
  [this val]
  (aset this "lastResponseTimestamp" val))

(defn local-candidate-id
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property localCandidateId
  a string that uniquely identifies the local ICE candidate which
  analyzed to generate the `web.rtc.RTCIceCandidateStats` used
  compute the statistics for this pair of candidates.

  `localCandidateId = rtcIceCandidatePairStats.localCandidateId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/localCandidateId`"
  [this]
  (-> this (.-localCandidateId)))

(defn set-local-candidate-id!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property localCandidateId
  a string that uniquely identifies the local ICE candidate which
  analyzed to generate the `web.rtc.RTCIceCandidateStats` used
  compute the statistics for this pair of candidates.

  `localCandidateId = rtcIceCandidatePairStats.localCandidateId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/localCandidateId`"
  [this val]
  (aset this "localCandidateId" val))

(defn nominated
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property nominated specifies
  or not the candidate pair described by the underlying RTCIceCandidatePair
  been nominated to be used as the configuration for the WebRTC

  `nominated = rtcIceCandidatePairStats.nominated;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/nominated`"
  [this]
  (-> this (.-nominated)))

(defn set-nominated!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property nominated specifies
  or not the candidate pair described by the underlying RTCIceCandidatePair
  been nominated to be used as the configuration for the WebRTC

  `nominated = rtcIceCandidatePairStats.nominated;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/nominated`"
  [this val]
  (aset this "nominated" val))

(defn packets-received
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's packetsReceived
  indicates the total number of packets of any kind that have been
  on the connection described by the pair of candidates.

  `packetsReceived = rtcIceCandidatePairStats.packetsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsReceived`"
  [this]
  (-> this (.-packetsReceived)))

(defn set-packets-received!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's packetsReceived
  indicates the total number of packets of any kind that have been
  on the connection described by the pair of candidates.

  `packetsReceived = rtcIceCandidatePairStats.packetsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsReceived`"
  [this val]
  (aset this "packetsReceived" val))

(defn packets-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's packetsSent
  indicates the total number of packets which have been sent on
  connection described by the pair of candidates.

  `packetsSent = rtcIceCandidatePairStats.packetsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsSent`"
  [this]
  (-> this (.-packetsSent)))

(defn set-packets-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's packetsSent
  indicates the total number of packets which have been sent on
  connection described by the pair of candidates.

  `packetsSent = rtcIceCandidatePairStats.packetsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsSent`"
  [this val]
  (aset this "packetsSent" val))

(defn remote-candidate-id
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property remoteCandidateId
  a string that uniquely identifies the remote ICE candidate which
  analyzed to generate the `web.rtc.RTCIceCandidateStats` used
  compute the statistics for this pair of candidates.

  `remoteCandidateId = rtcIceCandidatePairStats.remoteCandidateId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId`"
  [this]
  (-> this (.-remoteCandidateId)))

(defn set-remote-candidate-id!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` property remoteCandidateId
  a string that uniquely identifies the remote ICE candidate which
  analyzed to generate the `web.rtc.RTCIceCandidateStats` used
  compute the statistics for this pair of candidates.

  `remoteCandidateId = rtcIceCandidatePairStats.remoteCandidateId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId`"
  [this val]
  (aset this "remoteCandidateId" val))

(defn requests-received
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's requestsReceived
  indicates the total number of STUN connectivity check requests
  have been received so far on the connection described by this
  of candidates.

  `requestsReceived = rtcIceCandidatePairStats.requestsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsReceived`"
  [this]
  (-> this (.-requestsReceived)))

(defn set-requests-received!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's requestsReceived
  indicates the total number of STUN connectivity check requests
  have been received so far on the connection described by this
  of candidates.

  `requestsReceived = rtcIceCandidatePairStats.requestsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsReceived`"
  [this val]
  (aset this "requestsReceived" val))

(defn requests-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's requestsSent
  indicates the total number of STUN connectivity check requests
  have been sent so far on the connection described by this pair
  candidates.

  `requestsSent = rtcIceCandidatePairStats.requestsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsSent`"
  [this]
  (-> this (.-requestsSent)))

(defn set-requests-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's requestsSent
  indicates the total number of STUN connectivity check requests
  have been sent so far on the connection described by this pair
  candidates.

  `requestsSent = rtcIceCandidatePairStats.requestsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsSent`"
  [this val]
  (aset this "requestsSent" val))

(defn responses-received
  "Property.

  The responsesReceived property in the `web.rtc.RTCIceCandidatePairStats`
  indicates the total number of STUN connectivity check responses
  have been received on the connection described by this pair of

  `responsesReceived = rtcIceCandidatePairStats.responsesReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesReceived`"
  [this]
  (-> this (.-responsesReceived)))

(defn set-responses-received!
  "Property.

  The responsesReceived property in the `web.rtc.RTCIceCandidatePairStats`
  indicates the total number of STUN connectivity check responses
  have been received on the connection described by this pair of

  `responsesReceived = rtcIceCandidatePairStats.responsesReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesReceived`"
  [this val]
  (aset this "responsesReceived" val))

(defn responses-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's responsesSent
  indicates the total number of STUN connectivity check responses
  have been sent so far on the connection described by this pair
  candidates.

  `responsesSent = rtcIceCandidatePairStats.responsesSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesSent`"
  [this]
  (-> this (.-responsesSent)))

(defn set-responses-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's responsesSent
  indicates the total number of STUN connectivity check responses
  have been sent so far on the connection described by this pair
  candidates.

  `responsesSent = rtcIceCandidatePairStats.responsesSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesSent`"
  [this val]
  (aset this "responsesSent" val))

(defn retransmissions-received
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's retransmissionsReceived
  indicates the total number of STUN connectivity check request
  that have been received so far on the pair of candidates.

  `retransmissionsReceived = rtcIceCandidatePairStats.retransmissionsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsReceived`"
  [this]
  (-> this (.-retransmissionsReceived)))

(defn set-retransmissions-received!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's retransmissionsReceived
  indicates the total number of STUN connectivity check request
  that have been received so far on the pair of candidates.

  `retransmissionsReceived = rtcIceCandidatePairStats.retransmissionsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsReceived`"
  [this val]
  (aset this "retransmissionsReceived" val))

(defn retransmissions-sent
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's retransmissionsSent
  indicates the total number of STUN connectivity check request
  that have been sent so far on the pair of candidates.

  `retransmissionsSent = rtcIceCandidatePairStats.retransmissionsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsSent`"
  [this]
  (-> this (.-retransmissionsSent)))

(defn set-retransmissions-sent!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's retransmissionsSent
  indicates the total number of STUN connectivity check request
  that have been sent so far on the pair of candidates.

  `retransmissionsSent = rtcIceCandidatePairStats.retransmissionsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsSent`"
  [this val]
  (aset this "retransmissionsSent" val))

(defn state
  "Property.

  The state property in an `web.rtc.RTCIceCandidatePairStats` object
  the state of the check list of which the candidate pair is a

  `state = rtcIceCandidatePairStats.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/state`"
  [this]
  (-> this (.-state)))

(defn set-state!
  "Property.

  The state property in an `web.rtc.RTCIceCandidatePairStats` object
  the state of the check list of which the candidate pair is a

  `state = rtcIceCandidatePairStats.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/state`"
  [this val]
  (aset this "state" val))

(defn total-round-trip-time
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's totalRoundTripTime
  is the total time that has elapsed between sending STUN requests
  receiving the responses, for all such requests that have been
  so far on the pair of candidates described by this RTCIceCandidatePairStats

  `totalRTT = rtcIceCandidatePairStats.totalRoundTripTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime`"
  [this]
  (-> this (.-totalRoundTripTime)))

(defn set-total-round-trip-time!
  "Property.

  The `web.rtc.RTCIceCandidatePairStats` dictionary's totalRoundTripTime
  is the total time that has elapsed between sending STUN requests
  receiving the responses, for all such requests that have been
  so far on the pair of candidates described by this RTCIceCandidatePairStats

  `totalRTT = rtcIceCandidatePairStats.totalRoundTripTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime`"
  [this val]
  (aset this "totalRoundTripTime" val))

(defn transport-id
  "Property.

  The transportId property uniquely identifies the `web.audio.RTCIceTransport`
  was inspected to obtain the transport-related statistics contained
  the `web.rtc.RTCIceCandidatePairStats` object.

  `transportId = rtcIceCandidatePairStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/transportId`"
  [this]
  (-> this (.-transportId)))

(defn set-transport-id!
  "Property.

  The transportId property uniquely identifies the `web.audio.RTCIceTransport`
  was inspected to obtain the transport-related statistics contained
  the `web.rtc.RTCIceCandidatePairStats` object.

  `transportId = rtcIceCandidatePairStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/transportId`"
  [this val]
  (aset this "transportId" val))

(defn priority
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property priority
  the priority of the candidate pair as an integer value.

  `pairPriority = rtcIceCandidatePairStats.priority;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/priority`"
  [this]
  (-> this (.-priority)))

(defn set-priority!
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property priority
  the priority of the candidate pair as an integer value.

  `pairPriority = rtcIceCandidatePairStats.priority;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/priority`"
  [this val]
  (aset this "priority" val))

(defn readable
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property readable
  whether or not the connection described by the candidate pair
  received at least one valid incoming ICE request.

  `isReadable = rtcIceCandidatePairStats.readable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/readable`"
  [this]
  (-> this (.-readable)))

(defn set-readable!
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property readable
  whether or not the connection described by the candidate pair
  received at least one valid incoming ICE request.

  `isReadable = rtcIceCandidatePairStats.readable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/readable`"
  [this val]
  (aset this "readable" val))

(defn writable
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property writable
  whether or not the connection described by the candidate pair
  writable.

  `isWritable = rtcIceCandidatePairStats.writable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/writable`"
  [this]
  (-> this (.-writable)))

(defn set-writable!
  "Property.

  [Obsolute]

  The obsolete `web.rtc.RTCIceCandidatePairStats` property writable
  whether or not the connection described by the candidate pair
  writable.

  `isWritable = rtcIceCandidatePairStats.writable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/writable`"
  [this val]
  (aset this "writable" val))

(defn selected
  "Property.

  [Non Standard]

  The non-standard, Firefox-specific `web.rtc.RTCIceCandidatePairStats`
  selected indicates whether or not the candidate pair described
  the object is the one currently being used to communicate with
  remote peer.

  `isSelected = icpStats.selected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/selected`"
  [this]
  (-> this (.-selected)))

(defn set-selected!
  "Property.

  [Non Standard]

  The non-standard, Firefox-specific `web.rtc.RTCIceCandidatePairStats`
  selected indicates whether or not the candidate pair described
  the object is the one currently being used to communicate with
  remote peer.

  `isSelected = icpStats.selected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/selected`"
  [this val]
  (aset this "selected" val))

