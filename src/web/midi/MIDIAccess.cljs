(ns web.midi.MIDIAccess
  "The MIDIAccess interface of the Web MIDI API provides methods
  listing MIDI input and output devices, and obtaining access to
  devices."
  (:refer-clojure :exclude []))

(defn inputs
  "Property.

  Returns an instance of MIDIInputMap which provides access to
  available MIDI input ports."
  [this]
  (-> this (.-inputs)))

(defn set-inputs!
  "Property.

  Returns an instance of MIDIInputMap which provides access to
  available MIDI input ports."
  [this val]
  (aset this "inputs" val))

(defn outputs
  "Property.

  Returns an instance of MIDIOutputMap which provides access to
  available MIDI output ports."
  [this]
  (-> this (.-outputs)))

(defn set-outputs!
  "Property.

  Returns an instance of MIDIOutputMap which provides access to
  available MIDI output ports."
  [this val]
  (aset this "outputs" val))

(defn sysex-enabled
  "Property.

  A boolean attribute indicating whether system exclusive support
  enabled on the current MIDIAccess instance."
  [this]
  (-> this (.-sysexEnabled)))

(defn set-sysex-enabled!
  "Property.

  A boolean attribute indicating whether system exclusive support
  enabled on the current MIDIAccess instance."
  [this val]
  (aset this "sysexEnabled" val))

(defn onstatechange
  "Property.

  Called whenever a new MIDI port is added or an existing port
  state."
  [this]
  (-> this (.-onstatechange)))

(defn set-onstatechange!
  "Property.

  Called whenever a new MIDI port is added or an existing port
  state."
  [this val]
  (aset this "onstatechange" val))

