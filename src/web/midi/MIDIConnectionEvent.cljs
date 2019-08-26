(ns web.midi.MIDIConnectionEvent
  "The MIDIConnectionEvent interface of the Web MIDI API is the
  passed to the `onstatechange` event of the `web.midi.MIDIAccess`
  and the `onstatechange` event of the `MIDIPorts` interface. This
  any time a new port becomes available, or when a previously available
  becomes unavailable. For example, this event is fired whenever
  MIDI device is either plugged in to or unplugged from a computer."
  (:refer-clojure :exclude []))

(defn port
  "Property.

  Returns a reference to a MIDIPort instance for a port that has
  connected or disconnected.\""
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  Returns a reference to a MIDIPort instance for a port that has
  connected or disconnected.\""
  [this val]
  (aset this "port" val))

