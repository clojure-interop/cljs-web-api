(ns web.rtc.RTCRtpTransceiver
  "The WebRTC interface RTCRtpTransceiver describes a permanent
  of an `web.audio.RTCRtpSender` and an `web.rtc.RTCRtpReceiver`,
  with some shared state."
  (:refer-clojure :exclude []))

(defn set-codec-preferences
  "Method.

  The `web.rtc.RTCRtpTransceiver` method setCodecPreferences()
  the transceiver's codecs given a list of `RTCRtpCodeCapability`
  specifying the new preferences for each codec.

  `rtcRtpTransceiver.setCodecPreferences(codecs)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences`"
  [this codecs]
  (-> this (.setCodecPreferences codecs)))

(defn stop
  "Method.

  The stop() method in the `web.rtc.RTCRtpTransceiver` interface
  stops the transceiver by stopping both the associated `web.audio.RTCRtpSender`
  `web.rtc.RTCRtpReceiver`.

  `RTCRtpTransceiver.stop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stop`"
  [this ]
  (-> this (.stop)))

(defn current-direction
  "Property.

  [Read Only]

  The read-only `web.rtc.RTCRtpTransceiver` property currentDirection
  a string which indicates the current directionality of the transceiver.

  `var direction = RTCRtpTransceiver.currentDirection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/currentDirection`"
  [this]
  (-> this (.-currentDirection)))

(defn direction
  "Property.

  [Read Only]

  The read-only `web.rtc.RTCRtpTransceiver` property direction
  a string which indicates the transceiver's preferred directionality.

  `var direction = RTCRtpTransceiver.direction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction`"
  [this]
  (-> this (.-direction)))

(defn mid
  "Property.

  [Read Only]

  The read-only `web.rtc.RTCRtpTransceiver` interface's mid property
  the negotiated media ID (mid) which the local and remote peers
  agreed upon to uniquely identify the stream's pairing of sender
  receiver.

  `var mediaID = RTCRtpTransceiver.mid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/mid`"
  [this]
  (-> this (.-mid)))

(defn receiver
  "Property.

  [Read Only]

  The read-only receiver property of WebRTC's `web.rtc.RTCRtpTransceiver`
  indicates the `web.rtc.RTCRtpReceiver` responsible for receiving
  decoding incoming media data for the transceiver's stream.

  `var rtpReceiver = RTCRtpTransceiver.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/receiver`"
  [this]
  (-> this (.-receiver)))

(defn sender
  "Property.

  [Read Only]

  The read-only sender property of WebRTC's `web.rtc.RTCRtpTransceiver`
  indicates the `web.audio.RTCRtpSender` responsible for encoding
  sending outgoing media data for the transceiver's stream.

  `var rtpSender = RTCRtpTransceiver.sender;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/sender`"
  [this]
  (-> this (.-sender)))

(defn stopped
  "Property.

  [Read Only]
  [Deprecated]

  The read-only stopped property on the `web.rtc.RTCRtpTransceiver`
  indicates whether or not the transceiver's associated sender
  receiver have both been stopped.

  `var isStopped = RTCRtpTransceiver.stopped;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stopped`"
  [this]
  (-> this (.-stopped)))

