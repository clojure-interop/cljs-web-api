(ns web.ConstantSourceNode
  "The ConstantSourceNode interface—part of the Web Audio API—represents
  audio source (based upon `audio.AudioScheduledSourceNode`) whose
  is single unchanging value. This makes it useful for cases in
  you need a constant value coming in from an audio source. In
  it can be used like a constructible `audio.AudioParam` by automating
  value of its `web.offset` or by connecting another node to it;
  Controlling multiple parameters with ConstantSourceNode."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ConstantSourceNode() constructor creates a new `web.ConstantSourceNode` object instance, representing an audio source which constantly outputs samples whose values are always the same.

  context
  An `audio.AudioContext` representing the audio context you want the node to be associated with.
  options
  A ConstantSourceOptions dictionary object defining the properties you want the ConstantSourceNode to have:

  offset: A read-only `audio.AudioParam` specifying the constant value generated by the source. The default is 1.0. The normal range is -1.0 to 1.0, but the value can be anywhere in the range from -Infinity to +Infinity.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode/ConstantSourceNode`"
  js/ConstantSourceNode)

(defn start
  "Method.

  `web.undefined`

  `AudioScheduledSourceNode.start([when [, offset [, duration]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/start`"
  [this & args]
  (apply (-> this .-start) (concat [this] args)))

(defn stop
  "Method.

  The stop() method on `audio.AudioScheduledSourceNode` schedules
  sound to cease playback at the specified time. If no time is
  then the sound stops playing immediately.

  `AudioScheduledSourceNode.stop([when]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/stop`"
  [this & args]
  (apply (-> this .-stop) (concat [this] args)))

(defn offset
  "Property.

  The read-only offset property of the `web.ConstantSourceNode`
  returns a `audio.AudioParam` object indicating the numeric a-rate
  which is always returned by the source when asked for the next

  `let offsetParameter = ConstantAudioNode.offset;

  let offset = ConstantSourceNode.offset.value;
  ConstantSourceNode.offset.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode/offset`"
  [this]
  (-> this (.offset)))

(defn onended
  "Property.

  The onended event handler for the AudioScheduledSourceNode interface
  an `web.EventHandler` to be executed when the ended event occurs
  the node. This event is sent to the node when the concrete interface
  as `audio.AudioBufferSourceNode`, `web.OscillatorNode`, or `web.ConstantSourceNode`)
  that it has stopped playing.

  `AudioScheduledSourceNode.onended = EventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`"
  [this]
  (-> this (.onended)))

(defn set-onended!
  "Property.

  The onended event handler for the AudioScheduledSourceNode interface
  an `web.EventHandler` to be executed when the ended event occurs
  the node. This event is sent to the node when the concrete interface
  as `audio.AudioBufferSourceNode`, `web.OscillatorNode`, or `web.ConstantSourceNode`)
  that it has stopped playing.

  `AudioScheduledSourceNode.onended = EventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`"
  [this val]
  (aset this "onended" val))

