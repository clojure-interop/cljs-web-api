(ns rtc.RTCDTMFSender
  "Listen to these events using `web.addEventListener()` or by assigning
  event listener to the oneventname property of this interface."
  (:refer-clojure :exclude []))

(defn insert-dtmf
  "Method.

  The insertDTMF() method on the `rtc.RTCDTMFSender` interface
  sending tones to the remote peer over the `rtc.RTCPeerConnection`.
  of the tones is performed asynchronously, with tonechange events
  to the RTCDTMFSender every time a tone starts or ends.

  `RTCDTMFSender.insertDTMF(tones[, duration[, interToneGap]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/insertDTMF`"
  [this & args]
  (apply (-> this .-insertDTMF) (concat [this] args)))

(defn ontonechange
  "Property.

  The ontonechange property of the `rtc.RTCDTMFSender` interface
  used to set the event handler for the tonechange event, which
  sent to the RTCDTMFSender each time a tone begins or ends. The
  handler receives as input a single parameter of type `rtc.RTCDTMFToneChangeEvent`,
  describes the change.

  `RTCDTMFSender.ontonechange = toneChangeHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/ontonechange`"
  [this]
  (-> this (.ontonechange)))

(defn set-ontonechange!
  "Property.

  The ontonechange property of the `rtc.RTCDTMFSender` interface
  used to set the event handler for the tonechange event, which
  sent to the RTCDTMFSender each time a tone begins or ends. The
  handler receives as input a single parameter of type `rtc.RTCDTMFToneChangeEvent`,
  describes the change.

  `RTCDTMFSender.ontonechange = toneChangeHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/ontonechange`"
  [this val]
  (aset this "ontonechange" val))

(defn tone-buffer
  "Property.

  The `rtc.RTCDTMFSender` interface's toneBuffer property returns
  string containing a list of the DTMF tones currently queued for
  to the remote peer over the `rtc.RTCPeerConnection`. To place
  into the buffer, call `web.insertDTMF()`.

  `var toneBuffer = RTCDTMFSender.toneBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/toneBuffer`"
  [this]
  (-> this (.toneBuffer)))

(defn set-tone-buffer!
  "Property.

  The `rtc.RTCDTMFSender` interface's toneBuffer property returns
  string containing a list of the DTMF tones currently queued for
  to the remote peer over the `rtc.RTCPeerConnection`. To place
  into the buffer, call `web.insertDTMF()`.

  `var toneBuffer = RTCDTMFSender.toneBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/toneBuffer`"
  [this val]
  (aset this "toneBuffer" val))

