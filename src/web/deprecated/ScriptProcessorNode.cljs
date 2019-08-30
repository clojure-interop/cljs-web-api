(ns web.deprecated.ScriptProcessorNode
  "The ScriptProcessorNode interface allows the generation, processing,
  analyzing of audio using JavaScript."
  (:refer-clojure :exclude []))

(defn buffer-size
  "Property.

  [Read Only]

  The following example shows basic usage of a ScriptProcessorNode
  take a track loaded via `AudioContext.decodeAudioData()`, process
  adding a bit of white noise to each audio sample of the input
  (buffer) and play it through the `web.audio.AudioDestinationNode`.
  each channel and each sample frame, the scriptNode.onaudioprocess
  takes the associated audioProcessingEvent and uses it to loop
  each channel of the input buffer, and each sample in each channel,
  add a small amount of white noise, before setting that result
  be the output sample in each case.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/bufferSize`"
  [this]
  (-> this (.-bufferSize)))

(defn onaudioprocess
  "Property.

  The following example shows basic usage of a ScriptProcessorNode
  take a track loaded via `AudioContext.decodeAudioData()`, process
  adding a bit of white noise to each audio sample of the input
  (buffer) and play it through the `web.audio.AudioDestinationNode`.
  each channel and each sample frame, the scriptNode.onaudioprocess
  takes the associated audioProcessingEvent and uses it to loop
  each channel of the input buffer, and each sample in each channel,
  add a small amount of white noise, before setting that result
  be the output sample in each case.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/onaudioprocess`"
  [this]
  (-> this (.-onaudioprocess)))

(defn set-onaudioprocess!
  "Property.

  The following example shows basic usage of a ScriptProcessorNode
  take a track loaded via `AudioContext.decodeAudioData()`, process
  adding a bit of white noise to each audio sample of the input
  (buffer) and play it through the `web.audio.AudioDestinationNode`.
  each channel and each sample frame, the scriptNode.onaudioprocess
  takes the associated audioProcessingEvent and uses it to loop
  each channel of the input buffer, and each sample in each channel,
  add a small amount of white noise, before setting that result
  be the output sample in each case.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/onaudioprocess`"
  [this val]
  (aset this "onaudioprocess" val))

