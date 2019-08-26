(ns web.midi.MIDIInput
  "Use the MIDIInput interface of the Web MIDI API to access and
  messages to a MIDI input port."
  (:refer-clojure :exclude []))

(defn onmidimessage
  "Property.

  When the current port receives a MIDIMessage it triggers a call
  this event handler."
  [this]
  (-> this (.onmidimessage)))

(defn set-onmidimessage!
  "Property.

  When the current port receives a MIDIMessage it triggers a call
  this event handler."
  [this val]
  (aset this "onmidimessage" val))

