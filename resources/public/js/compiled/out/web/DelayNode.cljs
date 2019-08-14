(ns web.DelayNode
  "The DelayNode interface represents a delay-line; an `audio.AudioNode`
  module that causes a delay between the arrival of an input data
  its propagation to the output."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DelayNode() constructor of the Web Audio API creates a new `web.DelayNode` object with a delay-line; an AudioNode audio-processing module that causes a delay between the arrival of an input data, and its propagation to the output.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  context
  A reference to an `audio.AudioContext` or `web.OfflineAudioContext`.
  options Optional
  An object specifying the delay node options. Can contain the following members:

  delayTime: The initial delay time for the node, in seconds. The default is 0.
  maxDelayTime: The maximum delay time for the node, in seconds. Defaults to 1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/DelayNode`"
  js/DelayNode)

(defn delay-time
  "Property.

  An `audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var myDelay = audioCtx.createDelay(5.0);
  myDelay.delayTime.value = 3.0;


  Note: Though the `audio.AudioParam` returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/delayTime`"
  [this]
  (-> this (.delayTime)))

(defn set-delay-time!
  "Property.

  An `audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var myDelay = audioCtx.createDelay(5.0);
  myDelay.delayTime.value = 3.0;


  Note: Though the `audio.AudioParam` returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/delayTime`"
  [this val]
  (aset this "delayTime" val))

