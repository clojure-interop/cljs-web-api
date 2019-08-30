(ns web.rtc.RTCDataChannelEvent
  "The RTCDataChannelEvent() constructor returns a new `web.rtc.RTCDataChannelEvent`
  which represents a `datachannel` event. These events sent to
  `web.audio.RTCPeerConnection` when its remote peer is asking
  open an `web.rtc.RTCDataChannel` between the two peers."
  (:refer-clojure :exclude []))

(defn channel
  "Property.

  [Read Only]
  [Experimental]

  The read-only property RTCDataChannelEvent.channel returns the
  associated with the event.

  `var channel = RTCDataChannelEvent.channel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent/channel`"
  [this]
  (-> this (.-channel)))

