(ns audio.AudioDestinationNode
  "AudioDestinationNode has no output (as it is the output, no more
  can be linked after it in the audio graph) and one input. The
  of channels in the input must be between 0 and the maxChannelCount
  or an exception is raised."
  (:refer-clojure :exclude []))

(defn max-channel-count
  "Property.

  An unsigned long.

  `var audioCtx = new AudioContext();
  var myDestination = audioCtx.destination;
  myDestination.maxChannelCount = 2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode/maxChannelCount`"
  [this]
  (-> this (.maxChannelCount)))

(defn set-max-channel-count!
  "Property.

  An unsigned long.

  `var audioCtx = new AudioContext();
  var myDestination = audioCtx.destination;
  myDestination.maxChannelCount = 2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode/maxChannelCount`"
  [this val]
  (aset this "maxChannelCount" val))

