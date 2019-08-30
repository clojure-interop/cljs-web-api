(ns web.audio.DelayNode
  "The DelayNode interface represents a delay-line; an `web.audio.AudioNode`
  module that causes a delay between the arrival of an input data
  its propagation to the output."
  (:refer-clojure :exclude []))

(defn delay-time
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var myDelay = audioCtx.createDelay(5.0);
  myDelay.delayTime.value = 3.0;


  Note: Though the `web.audio.AudioParam` returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/delayTime`"
  [this]
  (-> this (.-delayTime)))

