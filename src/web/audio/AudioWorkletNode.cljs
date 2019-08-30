(ns web.audio.AudioWorkletNode
  "The AudioWorkletNode interface of the Web Audio API represents
  base class for a user-defined `web.audio.AudioNode`, which can
  connected to an audio routing graph along with other nodes. It
  an associated `web.audio.AudioWorkletProcessor`, which does the
  audio processing in a Web Audio rendering thread."
  (:refer-clojure :exclude []))

(defn port
  "Property.

  [Read Only]
  [Experimental]

  The read-only port property of the `web.audio.AudioWorkletNode`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the node and its associated `web.audio.AudioWorkletProcessor`.

  `audioWorkletNodeInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/port`"
  [this]
  (-> this (.-port)))

(defn parameters
  "Property.

  [Read Only]
  [Experimental]

  The read-only parameters property of the `web.audio.AudioWorkletNode`
  returns the associated `web.audio.AudioParamMap` — that is, a
  collection of `web.audio.AudioParam` objects. They are instantiated
  creation of the underlying `web.audio.AudioWorkletProcessor`
  to its `parameterDescriptors` static getter.

  `audioWorkletNodeInstance.parameters`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/parameters`"
  [this]
  (-> this (.-parameters)))

(defn onprocessorerror
  "Property.

  The onprocessorerror property of the `web.audio.AudioWorkletNode`
  defines an event handler function to be called when the `processorerror`
  fires. This occurs when the underlying `web.audio.AudioWorkletProcessor`
  the node throws an exception in its constructor, the `process`
  or any user-defined class method.

  `audioWorkletNode.onprocessorerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`"
  [this]
  (-> this (.-onprocessorerror)))

(defn set-onprocessorerror!
  "Property.

  The onprocessorerror property of the `web.audio.AudioWorkletNode`
  defines an event handler function to be called when the `processorerror`
  fires. This occurs when the underlying `web.audio.AudioWorkletProcessor`
  the node throws an exception in its constructor, the `process`
  or any user-defined class method.

  `audioWorkletNode.onprocessorerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`"
  [this val]
  (aset this "onprocessorerror" val))

