(ns web.audio.OfflineAudioCompletionEvent
  "The Web Audio API OfflineAudioCompletionEvent interface represents
  that occur when the processing of an `web.audio.OfflineAudioContext`
  terminated. The complete event implements this interface."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The OfflineAudioCompletionEvent() constructor of the Web Audio API creates a new `web.audio.OfflineAudioCompletionEvent` object instance.

  type Optional
  \\tA `web.dom.DOMString` representing the type of object to create.
  \\tinit Optional
  \\tOptions are as follows:

  \\t\\trenderedBuffer: The rendered `web.audio.AudioBuffer` containing the audio data.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent`"
  js/OfflineAudioCompletionEvent)

(defn rendered-buffer
  "Property.

  The renderedBuffer read-only property of the `web.audio.OfflineAudioCompletionEvent`
  is an `web.audio.AudioBuffer` containing the result of processing
  `web.audio.OfflineAudioContext`.

  `var buffer = offlineAudioCompletionEventInstance.renderedBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer`"
  [this]
  (-> this (.renderedBuffer)))

(defn set-rendered-buffer!
  "Property.

  The renderedBuffer read-only property of the `web.audio.OfflineAudioCompletionEvent`
  is an `web.audio.AudioBuffer` containing the result of processing
  `web.audio.OfflineAudioContext`.

  `var buffer = offlineAudioCompletionEventInstance.renderedBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer`"
  [this val]
  (aset this "renderedBuffer" val))

