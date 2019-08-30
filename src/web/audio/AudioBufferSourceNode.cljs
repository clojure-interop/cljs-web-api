(ns web.audio.AudioBufferSourceNode
  "The AudioBufferSourceNode interface is an `web.audio.AudioScheduledSourceNode`
  represents an audio source consisting of in-memory audio data,
  in an `web.audio.AudioBuffer`. It's especially useful for playing
  audio which has particularly stringent timing accuracy requirements,
  as for sounds that must match a specific rhythm and can be kept
  memory rather than being played from disk or the network."
  (:refer-clojure :exclude [loop]))

(defn start
  "Method.

  `js.undefined`.

  `AudioBufferSourceNode.start([when][, offset][, duration]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start`"
  [this & args]
  (-> this .-start (.apply this (clj->js args))))

(defn buffer
  "Property.

  The buffer property of the `web.audio.AudioBufferSourceNode`
  provides the ability to play back audio using an `web.audio.AudioBuffer`
  the source of the sound data.

  `AudioBufferSourceNode.buffer = soundBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/buffer`"
  [this]
  (-> this (.-buffer)))

(defn set-buffer!
  "Property.

  The buffer property of the `web.audio.AudioBufferSourceNode`
  provides the ability to play back audio using an `web.audio.AudioBuffer`
  the source of the sound data.

  `AudioBufferSourceNode.buffer = soundBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/buffer`"
  [this val]
  (aset this "buffer" val))

(defn detune
  "Property.

  The detune property of the `web.audio.AudioBufferSourceNode`
  is a k-rate `web.audio.AudioParam` representing detuning of oscillation
  cents.

  `var source = audioCtx.createBufferSource();
  source.detune.value = 100; // value in cents


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/detune`"
  [this]
  (-> this (.-detune)))

(defn set-detune!
  "Property.

  The detune property of the `web.audio.AudioBufferSourceNode`
  is a k-rate `web.audio.AudioParam` representing detuning of oscillation
  cents.

  `var source = audioCtx.createBufferSource();
  source.detune.value = 100; // value in cents


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/detune`"
  [this val]
  (aset this "detune" val))

(defn loop
  "Property.

  The loop property's default value is false.

  `var loopingEnabled = AudioBufferSourceNode.loop;
  AudioBufferSourceNode.loop = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop`"
  [this]
  (-> this (.-loop)))

(defn set-loop!
  "Property.

  The loop property's default value is false.

  `var loopingEnabled = AudioBufferSourceNode.loop;
  AudioBufferSourceNode.loop = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop`"
  [this val]
  (aset this "loop" val))

(defn loop-start
  "Property.

  The loopStart property of the `web.audio.AudioBufferSourceNode`
  is a floating-point value indicating, in seconds, where in the
  the restart of the play must happen.

  `AudioBufferSourceNode.loopStart = startOffsetInSeconds;

  startOffsetInSeconds = AudioBufferSourceNode.loopStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart`"
  [this]
  (-> this (.-loopStart)))

(defn set-loop-start!
  "Property.

  The loopStart property of the `web.audio.AudioBufferSourceNode`
  is a floating-point value indicating, in seconds, where in the
  the restart of the play must happen.

  `AudioBufferSourceNode.loopStart = startOffsetInSeconds;

  startOffsetInSeconds = AudioBufferSourceNode.loopStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart`"
  [this val]
  (aset this "loopStart" val))

(defn loop-end
  "Property.

  A floating-point number indicating the offset, in seconds, into
  audio buffer at which each loop will loop return to the beginning
  the loop (that is, the current play time gets reset to `AudioBufferSourceNode.loopStart`).
  property is only used if the `loop` property is true.

  `AudioBufferSourceNode.loopEnd = endOffsetInSeconds;

  var endOffsetInSeconds = AudioBufferSourceNode.loopEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd`"
  [this]
  (-> this (.-loopEnd)))

(defn set-loop-end!
  "Property.

  A floating-point number indicating the offset, in seconds, into
  audio buffer at which each loop will loop return to the beginning
  the loop (that is, the current play time gets reset to `AudioBufferSourceNode.loopStart`).
  property is only used if the `loop` property is true.

  `AudioBufferSourceNode.loopEnd = endOffsetInSeconds;

  var endOffsetInSeconds = AudioBufferSourceNode.loopEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd`"
  [this val]
  (aset this "loopEnd" val))

(defn playback-rate
  "Property.

  The playbackRate property of the `web.audio.AudioBufferSourceNode`
  Is a k-rate `web.audio.AudioParam` that defines the speed at
  the audio asset will be played.

  `AudioBufferSourceNode.playbackRate.value = playbackRateProportion;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/playbackRate`"
  [this]
  (-> this (.-playbackRate)))

(defn set-playback-rate!
  "Property.

  The playbackRate property of the `web.audio.AudioBufferSourceNode`
  Is a k-rate `web.audio.AudioParam` that defines the speed at
  the audio asset will be played.

  `AudioBufferSourceNode.playbackRate.value = playbackRateProportion;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/playbackRate`"
  [this val]
  (aset this "playbackRate" val))

