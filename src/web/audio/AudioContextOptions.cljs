(ns web.audio.AudioContextOptions
  "The AudioContextOptions dictionary is used to specify configuration
  when constructing a new `web.audio.AudioContext` object to represent
  graph of web audio nodes."
  (:refer-clojure :exclude []))

(defn latency-hint
  "Property.

  The `web.audio.AudioContextOptions` dictionary (used when instantiating
  `web.audio.AudioContext`) may contain a property named latencyHint,
  indicates the preferred maximum latency in seconds for the audio

  `audioContextOptions.latencyHint = \\\"interactive\\\";
  audioContextOptions.latencyHint = 0.2;

  var latencyHint = audioContextOptions.latencyHint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/latencyHint`"
  [this]
  (-> this (.-latencyHint)))

(defn set-latency-hint!
  "Property.

  The `web.audio.AudioContextOptions` dictionary (used when instantiating
  `web.audio.AudioContext`) may contain a property named latencyHint,
  indicates the preferred maximum latency in seconds for the audio

  `audioContextOptions.latencyHint = \\\"interactive\\\";
  audioContextOptions.latencyHint = 0.2;

  var latencyHint = audioContextOptions.latencyHint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/latencyHint`"
  [this val]
  (aset this "latencyHint" val))

(defn sample-rate
  "Property.

  The `web.audio.AudioContextOptions` dictionary (used when instantiating
  `web.audio.AudioContext`) may contain a property named sampleRate,
  indicates the sample rate to use for the new context.

  `audioContextOptions.sampleRate = 44100;

  var sampleRate = audioContextOptions.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/sampleRate`"
  [this]
  (-> this (.-sampleRate)))

(defn set-sample-rate!
  "Property.

  The `web.audio.AudioContextOptions` dictionary (used when instantiating
  `web.audio.AudioContext`) may contain a property named sampleRate,
  indicates the sample rate to use for the new context.

  `audioContextOptions.sampleRate = 44100;

  var sampleRate = audioContextOptions.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

