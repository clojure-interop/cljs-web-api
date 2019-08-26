(ns web.rtc.RTCIceCandidatePair
  "The RTCIceCandidatePair dictionary describes a pair of ICE candidates
  together comprise a description of a viable connection between
  WebRTC endpoints."
  (:refer-clojure :exclude []))

(defn local
  "Property.

  The local property of the `web.rtc.RTCIceCandidatePair` dictionary
  the `web.rtc.RTCIceCandidate` which describes the configuration
  the local end of a viable WebRTC connection.

  `localCandidate = RTCIceCandidatePair.local;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair/local`"
  [this]
  (-> this (.local)))

(defn set-local!
  "Property.

  The local property of the `web.rtc.RTCIceCandidatePair` dictionary
  the `web.rtc.RTCIceCandidate` which describes the configuration
  the local end of a viable WebRTC connection.

  `localCandidate = RTCIceCandidatePair.local;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair/local`"
  [this val]
  (aset this "local" val))

(defn remote
  "Property.

  The remote property of the `web.rtc.RTCIceCandidatePair` dictionary
  the `web.rtc.RTCIceCandidate` describing the configuration of
  remote end of a viable WebRTC connection.

  `remoteCandidate = RTCIceCandidatePair.remote;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair/remote`"
  [this]
  (-> this (.remote)))

(defn set-remote!
  "Property.

  The remote property of the `web.rtc.RTCIceCandidatePair` dictionary
  the `web.rtc.RTCIceCandidate` describing the configuration of
  remote end of a viable WebRTC connection.

  `remoteCandidate = RTCIceCandidatePair.remote;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair/remote`"
  [this val]
  (aset this "remote" val))

