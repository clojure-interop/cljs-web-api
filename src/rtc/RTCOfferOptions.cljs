(ns rtc.RTCOfferOptions
  "The RTCOfferOptions dictionary is used to provide optional settings
  creating an `rtc.RTCPeerConnection` offer with the `web.createOffer()`"
  (:refer-clojure :exclude []))

(defn ice-restart
  "Property.

  The iceRestart property of the `rtc.RTCOfferOptions` dictionary
  a Boolean value which, when true, tells the `rtc.RTCPeerConnection`
  start ICE renegotiation.

  `var options = {
  iceRestart: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferOptions/iceRestart`"
  [this]
  (-> this (.iceRestart)))

(defn set-ice-restart!
  "Property.

  The iceRestart property of the `rtc.RTCOfferOptions` dictionary
  a Boolean value which, when true, tells the `rtc.RTCPeerConnection`
  start ICE renegotiation.

  `var options = {
  iceRestart: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferOptions/iceRestart`"
  [this val]
  (aset this "iceRestart" val))

