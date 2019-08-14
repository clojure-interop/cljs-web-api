(ns rtc.RTCRtpTransceiver
  "The WebRTC interface RTCRtpTransceiver describes a permanent
  of an `rtc.RTCRtpSender` and an `rtc.RTCRtpReceiver`, along with
  shared state."
  (:refer-clojure :exclude []))

(defn set-codec-preferences
  "Method.

  The `rtc.RTCRtpTransceiver` method setCodecPreferences() configures
  transceiver's codecs given a list of `rtc.RTCRtpCodeCapability`
  specifying the new preferences for each codec.

  `rtcRtpTransceiver.setCodecPreferences(codecs)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences`"
  [this codecs]
  (-> this (.setCodecPreferences codecs)))

(defn stop
  "Method.

  The stop() method in the `rtc.RTCRtpTransceiver` interface permanently
  the transceiver by stopping both the associated `rtc.RTCRtpSender`
  `rtc.RTCRtpReceiver`.

  `RTCRtpTransceiver.stop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stop`"
  [this ]
  (-> this (.stop)))

(defn current-direction
  "Property.

  The read-only `rtc.RTCRtpTransceiver` property currentDirection
  a string which indicates the current directionality of the transceiver.

  `var direction = RTCRtpTransceiver.currentDirection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/currentDirection`"
  [this]
  (-> this (.currentDirection)))

(defn direction
  "Property.

  The read-only `rtc.RTCRtpTransceiver` property direction is a
  which indicates the transceiver's preferred directionality.

  `var direction = RTCRtpTransceiver.direction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction`"
  [this]
  (-> this (.direction)))

(defn set-direction!
  "Property.

  The read-only `rtc.RTCRtpTransceiver` property direction is a
  which indicates the transceiver's preferred directionality.

  `var direction = RTCRtpTransceiver.direction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction`"
  [this val]
  (aset this "direction" val))

(defn mid
  "Property.

  The read-only `rtc.RTCRtpTransceiver` interface's mid property
  the negotiated media ID (mid) which the local and remote peers
  agreed upon to uniquely identify the stream's pairing of sender
  receiver.

  `var mediaID = RTCRtpTransceiver.mid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/mid`"
  [this]
  (-> this (.mid)))

(defn receiver
  "Property.

  The read-only receiver property of WebRTC's `rtc.RTCRtpTransceiver`
  indicates the `rtc.RTCRtpReceiver` responsible for receiving
  decoding incoming media data for the transceiver's stream.

  `var rtpReceiver = RTCRtpTransceiver.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/receiver`"
  [this]
  (-> this (.receiver)))

(defn set-receiver!
  "Property.

  The read-only receiver property of WebRTC's `rtc.RTCRtpTransceiver`
  indicates the `rtc.RTCRtpReceiver` responsible for receiving
  decoding incoming media data for the transceiver's stream.

  `var rtpReceiver = RTCRtpTransceiver.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/receiver`"
  [this val]
  (aset this "receiver" val))

(defn sender
  "Property.

  The read-only sender property of WebRTC's `rtc.RTCRtpTransceiver`
  indicates the `rtc.RTCRtpSender` responsible for encoding and
  outgoing media data for the transceiver's stream.

  `var rtpSender = RTCRtpTransceiver.sender;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/sender`"
  [this]
  (-> this (.sender)))

(defn set-sender!
  "Property.

  The read-only sender property of WebRTC's `rtc.RTCRtpTransceiver`
  indicates the `rtc.RTCRtpSender` responsible for encoding and
  outgoing media data for the transceiver's stream.

  `var rtpSender = RTCRtpTransceiver.sender;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/sender`"
  [this val]
  (aset this "sender" val))

(defn stopped
  "Property.

  The read-only stopped property on the `rtc.RTCRtpTransceiver`
  indicates whether or not the transceiver's associated sender
  receiver have both been stopped.

  `var isStopped = RTCRtpTransceiver.stopped;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stopped`"
  [this]
  (-> this (.stopped)))

(defn set-stopped!
  "Property.

  The read-only stopped property on the `rtc.RTCRtpTransceiver`
  indicates whether or not the transceiver's associated sender
  receiver have both been stopped.

  `var isStopped = RTCRtpTransceiver.stopped;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stopped`"
  [this val]
  (aset this "stopped" val))

