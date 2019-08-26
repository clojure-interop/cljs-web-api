(ns web.media.TextTrackCue
  "TextTrackCue is an abstract class which is used as the basis
  the various derived cue types, such as `web.vtt.VTTCue`; you
  instead work with those derived types."
  (:refer-clojure :exclude []))

(defn track
  "Property.

  The TextTrack that this cue belongs to, or null if it doesn't
  to any."
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  The TextTrack that this cue belongs to, or null if it doesn't
  to any."
  [this val]
  (aset this "track" val))

