(ns web.rtc.RTCPeerConnectionIceEvent
  "The RTCPeerConnectionIceEvent interface represents events that
  in relation to ICE candidates with the target, usually an `web.audio.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(defn candidate
  "Property.

  [Read Only]

  The read-only candidate property of the `web.rtc.RTCPeerConnectionIceEvent`
  returns the `web.rtc.RTCIceCandidate` associated with the event.

  `var candidate = event.candidate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent/candidate`"
  [this]
  (-> this (.-candidate)))

