(ns web.deprecated.NotifyAudioAvailableEvent
  "The non-standard, obsolete, NotifyAudioAvailableEvent interface
  the event sent to audio elements when the audio buffer is full."
  (:refer-clojure :exclude []))

(defn frame-buffer
  "Property.

  A Float32Array containing the raw 32-bit floating-point audio
  obtained from decoding the audio (e.g., the raw data being sent
  the audio hardware vs. encoded audio). The data is a series of
  samples, each sample containing one 32-bit value per audio channel.
  audio frames are normalized to contain 1024 samples by default,
  could be any length between 512 and 16384 samples if the user
  set a different length using the mozFrameBufferLength attribute."
  [this]
  (-> this (.frameBuffer)))

(defn set-frame-buffer!
  "Property.

  A Float32Array containing the raw 32-bit floating-point audio
  obtained from decoding the audio (e.g., the raw data being sent
  the audio hardware vs. encoded audio). The data is a series of
  samples, each sample containing one 32-bit value per audio channel.
  audio frames are normalized to contain 1024 samples by default,
  could be any length between 512 and 16384 samples if the user
  set a different length using the mozFrameBufferLength attribute."
  [this val]
  (aset this "frameBuffer" val))

