(ns rtc.RTCIceCandidateInit
  "The WebRTC API's `rtc.RTCIceCandidateInit` dictionary, which
  the information needed to fundamentally describe an `rtc.RTCIceCandidate`."
  (:refer-clojure :exclude []))

(defn candidate
  "Property.

  The optional property candidate in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.candidate`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/candidate`"
  [this]
  (-> this (.candidate)))

(defn set-candidate!
  "Property.

  The optional property candidate in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.candidate`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/candidate`"
  [this val]
  (aset this "candidate" val))

(defn sdp-mid
  "Property.

  The optional property sdpMid in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.sdpMid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMid`"
  [this]
  (-> this (.sdpMid)))

(defn set-sdp-mid!
  "Property.

  The optional property sdpMid in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.sdpMid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMid`"
  [this val]
  (aset this "sdpMid" val))

(defn sdp-m-line-index
  "Property.

  The optional property sdpMLineIndex in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.sdpMLineIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMLineIndex`"
  [this]
  (-> this (.sdpMLineIndex)))

(defn set-sdp-m-line-index!
  "Property.

  The optional property sdpMLineIndex in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.sdpMLineIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMLineIndex`"
  [this val]
  (aset this "sdpMLineIndex" val))

(defn username-fragment
  "Property.

  The optional property usernameFragment in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.usernameFragment`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/usernameFragment`"
  [this]
  (-> this (.usernameFragment)))

(defn set-username-fragment!
  "Property.

  The optional property usernameFragment in the `rtc.RTCIceCandidateInit`
  specifies the value of the `rtc.RTCIceCandidate` object's `web.usernameFragment`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/usernameFragment`"
  [this val]
  (aset this "usernameFragment" val))

