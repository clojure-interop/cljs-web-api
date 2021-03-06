(ns web.audio.ConstantSourceNode
  "The ConstantSourceNode interface—part of the Web Audio API—represents
  audio source (based upon `web.audio.AudioScheduledSourceNode`)
  output is single unchanging value. This makes it useful for cases
  which you need a constant value coming in from an audio source.
  addition, it can be used like a constructible `web.audio.AudioParam`
  automating the value of its `offset` or by connecting another
  to it; see Controlling multiple parameters with ConstantSourceNode."
  (:refer-clojure :exclude []))

(defn start
  "Method.

  `js.undefined`

  `AudioScheduledSourceNode.start([when [, offset [, duration]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/start`"
  [this & args]
  (-> this .-start (.apply this (clj->js args))))

(defn stop
  "Method.

  The stop() method on `web.audio.AudioScheduledSourceNode` schedules
  sound to cease playback at the specified time. If no time is
  then the sound stops playing immediately.

  `AudioScheduledSourceNode.stop([when]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/stop`"
  [this & args]
  (-> this .-stop (.apply this (clj->js args))))

(defn offset
  "Property.

  [Read Only]

  The read-only offset property of the `web.audio.ConstantSourceNode`
  returns a `web.audio.AudioParam` object indicating the numeric
  value which is always returned by the source when asked for the
  sample.

  `let offsetParameter = ConstantAudioNode.offset;

  let offset = ConstantSourceNode.offset.value;
  ConstantSourceNode.offset.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode/offset`"
  [this]
  (-> this (.-offset)))

(defn onended
  "Property.

  The onended event handler for the AudioScheduledSourceNode interface
  an `EventHandler` to be executed when the ended event occurs
  the node. This event is sent to the node when the concrete interface
  as `web.audio.AudioBufferSourceNode`, `web.audio.OscillatorNode`,
  `web.audio.ConstantSourceNode`) determines that it has stopped

  `AudioScheduledSourceNode.onended = EventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`"
  [this]
  (-> this (.-onended)))

(defn set-onended!
  "Property.

  The onended event handler for the AudioScheduledSourceNode interface
  an `EventHandler` to be executed when the ended event occurs
  the node. This event is sent to the node when the concrete interface
  as `web.audio.AudioBufferSourceNode`, `web.audio.OscillatorNode`,
  `web.audio.ConstantSourceNode`) determines that it has stopped

  `AudioScheduledSourceNode.onended = EventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`"
  [this val]
  (aset this "onended" val))

