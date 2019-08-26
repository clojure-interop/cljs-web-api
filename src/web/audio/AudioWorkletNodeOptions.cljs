(ns web.audio.AudioWorkletNodeOptions
  "The AudioWorkletNodeOptions dictionary of the Web Audio API is
  to specify configuration options when constructing a new `web.audio.AudioWorkletNode`
  for custom audio processing."
  (:refer-clojure :exclude []))

(defn number-of-inputs
  "Property.

  The value to initialize the numberOfInputs property to. Defaults
  1."
  [this]
  (-> this (.-numberOfInputs)))

(defn set-number-of-inputs!
  "Property.

  The value to initialize the numberOfInputs property to. Defaults
  1."
  [this val]
  (aset this "numberOfInputs" val))

(defn number-of-outputs
  "Property.

  The value to initialize the numberOfOutputs property to. Defaults
  1."
  [this]
  (-> this (.-numberOfOutputs)))

(defn set-number-of-outputs!
  "Property.

  The value to initialize the numberOfOutputs property to. Defaults
  1."
  [this val]
  (aset this "numberOfOutputs" val))

(defn output-channel-count
  "Property.

  An array defining the number of channels for each output. For
  outputChannelCount: [n, m] specifies the number of channels in
  first output to be n and the second output to be m. The array
  must match numberOfOutputs."
  [this]
  (-> this (.-outputChannelCount)))

(defn set-output-channel-count!
  "Property.

  An array defining the number of channels for each output. For
  outputChannelCount: [n, m] specifies the number of channels in
  first output to be n and the second output to be m. The array
  must match numberOfOutputs."
  [this val]
  (aset this "outputChannelCount" val))

(defn parameter-data
  "Property.

  An object containing the initial values of custom AudioParam
  on this node (in its parameters property), with key being the
  of a custom parameter and value being its initial value."
  [this]
  (-> this (.-parameterData)))

(defn set-parameter-data!
  "Property.

  An object containing the initial values of custom AudioParam
  on this node (in its parameters property), with key being the
  of a custom parameter and value being its initial value."
  [this val]
  (aset this "parameterData" val))

(defn processor-options
  "Property.

  Any additional data that can be used for custom initialization
  the underlying AudioWorkletProcessor."
  [this]
  (-> this (.-processorOptions)))

(defn set-processor-options!
  "Property.

  Any additional data that can be used for custom initialization
  the underlying AudioWorkletProcessor."
  [this val]
  (aset this "processorOptions" val))

