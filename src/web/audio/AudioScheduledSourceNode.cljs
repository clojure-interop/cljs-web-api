(ns web.audio.AudioScheduledSourceNode
  "The AudioScheduledSourceNode interface—part of the Web Audio
  a parent interface for several types of audio source node interfaces
  share the ability to be started and stopped, optionally at specified
  Specifically, this interface defines the `start()` and `stop()`
  as well as the `onended` event handler."
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

