(ns web.audio.OfflineAudioCompletionEvent
  "The Web Audio API OfflineAudioCompletionEvent interface represents
  that occur when the processing of an `web.audio.OfflineAudioContext`
  terminated. The complete event implements this interface."
  (:refer-clojure :exclude []))

(defn rendered-buffer
  "Property.

  [Read Only]

  The renderedBuffer read-only property of the `web.audio.OfflineAudioCompletionEvent`
  is an `web.audio.AudioBuffer` containing the result of processing
  `web.audio.OfflineAudioContext`.

  `var buffer = offlineAudioCompletionEventInstance.renderedBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer`"
  [this]
  (-> this (.-renderedBuffer)))

