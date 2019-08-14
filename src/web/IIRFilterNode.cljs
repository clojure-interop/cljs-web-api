(ns web.IIRFilterNode
  "The IIRFilterNode interface of the Web Audio API is a `audio.AudioNode`
  which implements a general infinite impulse response (IIR) filter;
  type of filter can be used to implement tone control devices
  graphic equalizers as well. It lets the parameters of the filter
  be specified, so that it can be tuned as needed."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The IIRFilterNode() constructor of the Web Audio API creates a new `web.IIRFilterNode` object which an `audio.AudioNode` processor which implements a general infinite impulse response filter.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA reference to an `audio.AudioContext`.
  \\toptions
  \\tOptions are as follows:

  \\t\\tfeedforward: A sequence of feedforward coefficients.
  \\t\\tfeedback: A sequence of feedback coefficients.




  Unlike other nodes in the Web Audio API, the options passed into the IIR filter upon creation are not optional. The filter needs these values to work and with the vast range of filters available, there is no default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode/IIRFilterNode`"
  js/IIRFilterNode)

(defn get-frequency-response
  "Method.

  `web.undefined`

  `IIRFilterNode.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode/getFrequencyResponse`"
  [this frequency-array mag-response-output phase-response-output]
  (-> this (.getFrequencyResponse frequency-array mag-response-output phase-response-output)))

