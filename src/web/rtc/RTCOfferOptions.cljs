(ns web.rtc.RTCOfferOptions
  "The RTCOfferOptions dictionary is used to provide optional settings
  creating an `web.audio.RTCPeerConnection` offer with the `createOffer()`"
  (:refer-clojure :exclude []))

(defn ice-restart
  "Property.

  The iceRestart property of the `web.rtc.RTCOfferOptions` dictionary
  a Boolean value which, when true, tells the `web.audio.RTCPeerConnection`
  start ICE renegotiation.

  `var options = {
  iceRestart: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferOptions/iceRestart`"
  [this]
  (-> this (.-iceRestart)))

(defn set-ice-restart!
  "Property.

  The iceRestart property of the `web.rtc.RTCOfferOptions` dictionary
  a Boolean value which, when true, tells the `web.audio.RTCPeerConnection`
  start ICE renegotiation.

  `var options = {
  iceRestart: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferOptions/iceRestart`"
  [this val]
  (aset this "iceRestart" val))

