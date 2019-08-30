(ns web.audio.StereoPannerNode
  "The `pan` property takes a unitless value between -1 (full left
  and 1 (full right pan). This interface was introduced as a much
  way to apply a simple panning effect than having to use a full"
  (:refer-clojure :exclude []))

(defn pan
  "Property.

  [Read Only]

  An a-rate `web.audio.AudioParam` containing the panning to apply.

  `var audioCtx = new AudioContext();
  var panNode = audioCtx.createStereoPanner();
  panNode.pan.value = -0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode/pan`"
  [this]
  (-> this (.-pan)))

