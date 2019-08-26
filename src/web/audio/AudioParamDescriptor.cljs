(ns web.audio.AudioParamDescriptor
  "The AudioParamDescriptor dictionary of the Web Audio API specifies
  for an `web.audio.AudioParam` objects."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  The DOMString which represents the name of the AudioParam. Under
  name the AudioParam will be available in the parameters property
  the node, and under this name the AudioWorkletProcessor.process
  will acquire the calculated values of this AudioParam."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The DOMString which represents the name of the AudioParam. Under
  name the AudioParam will be available in the parameters property
  the node, and under this name the AudioWorkletProcessor.process
  will acquire the calculated values of this AudioParam."
  [this val]
  (aset this "name" val))

