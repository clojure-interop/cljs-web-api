(ns web.audio.IIRFilterNode
  "The IIRFilterNode interface of the Web Audio API is a `web.audio.AudioNode`
  which implements a general infinite impulse response (IIR) filter;
  type of filter can be used to implement tone control devices
  graphic equalizers as well. It lets the parameters of the filter
  be specified, so that it can be tuned as needed."
  (:refer-clojure :exclude []))

(defn get-frequency-response
  "Method.

  `js.undefined`

  `IIRFilterNode.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode/getFrequencyResponse`"
  [this frequency-array mag-response-output phase-response-output]
  (-> this (.getFrequencyResponse frequency-array mag-response-output phase-response-output)))

