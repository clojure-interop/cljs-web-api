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
  (-> this (.numberOfInputs)))

(defn set-number-of-inputs!
  "Property.

  The value to initialize the numberOfInputs property to. Defaults
  1."
  [this val]
  (aset this "numberOfInputs" val))

