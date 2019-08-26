(ns web.rtc.RTCIceCandidateInit
  "The WebRTC API's `web.rtc.RTCIceCandidateInit` dictionary, which
  the information needed to fundamentally describe an `web.rtc.RTCIceCandidate`."
  (:refer-clojure :exclude []))

(defn candidate
  "Property.

  The optional property candidate in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/candidate`"
  [this]
  (-> this (.-candidate)))

(defn set-candidate!
  "Property.

  The optional property candidate in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/candidate`"
  [this val]
  (aset this "candidate" val))

(defn sdp-mid
  "Property.

  The optional property sdpMid in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMid`"
  [this]
  (-> this (.-sdpMid)))

(defn set-sdp-mid!
  "Property.

  The optional property sdpMid in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMid`"
  [this val]
  (aset this "sdpMid" val))

(defn sdp-m-line-index
  "Property.

  The optional property sdpMLineIndex in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMLineIndex`"
  [this]
  (-> this (.-sdpMLineIndex)))

(defn set-sdp-m-line-index!
  "Property.

  The optional property sdpMLineIndex in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/sdpMLineIndex`"
  [this val]
  (aset this "sdpMLineIndex" val))

(defn username-fragment
  "Property.

  The optional property usernameFragment in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/usernameFragment`"
  [this]
  (-> this (.-usernameFragment)))

(defn set-username-fragment!
  "Property.

  The optional property usernameFragment in the `web.rtc.RTCIceCandidateInit`
  specifies the value of the `web.rtc.RTCIceCandidate` object's
  property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit/usernameFragment`"
  [this val]
  (aset this "usernameFragment" val))

