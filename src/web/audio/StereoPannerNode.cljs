(ns web.audio.StereoPannerNode
  "The `pan` property takes a unitless value between -1 (full left
  and 1 (full right pan). This interface was introduced as a much
  way to apply a simple panning effect than having to use a full"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The StereoPannerNode() constructor of the Web Audio API creates a new `web.audio.StereoPannerNode` object which is an `web.audio.AudioNode` that represents a simple stereo panner node that can be used to pan an audio stream left or right.

  Inherits parameters from the `web.audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA reference to an `web.audio.AudioContext`.
  \\toptions Optional
  \\tOptions are as follows:

  \\t\\tpan: A floating point number in the range [-1,1] indicating the position of an `web.audio.AudioNode` in an output image. The value -1 represents full left and 1 represents full right. The default value is 0.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode/StereoPannerNode`"
  js/StereoPannerNode)

(defn pan
  "Property.

  An a-rate `web.audio.AudioParam` containing the panning to apply.

  `var audioCtx = new AudioContext();
  var panNode = audioCtx.createStereoPanner();
  panNode.pan.value = -0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode/pan`"
  [this]
  (-> this (.pan)))

