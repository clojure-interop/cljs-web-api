(ns web.deprecated.NotifyAudioAvailableEvent
  "The non-standard, obsolete, NotifyAudioAvailableEvent interface
  the event sent to audio elements when the audio buffer is full."
  (:refer-clojure :exclude [time]))

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
  (-> this (.-frameBuffer)))

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

(defn time
  "Property.

  A floating-point value indicating the time in seconds at which
  first sample in the frameBuffer occurs, relative to the start
  the audio track."
  [this]
  (-> this (.-time)))

(defn set-time!
  "Property.

  A floating-point value indicating the time in seconds at which
  first sample in the frameBuffer occurs, relative to the start
  the audio track."
  [this val]
  (aset this "time" val))

