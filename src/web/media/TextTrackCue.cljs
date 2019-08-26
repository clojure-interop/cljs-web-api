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
  (-> this (.-track)))

(defn set-track!
  "Property.

  The TextTrack that this cue belongs to, or null if it doesn't
  to any."
  [this val]
  (aset this "track" val))

(defn id
  "Property.

  A DOMString that identifies the cue."
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  A DOMString that identifies the cue."
  [this val]
  (aset this "id" val))

(defn start-time
  "Property.

  A double that represents the video time that the cue will start
  displayed."
  [this]
  (-> this (.-startTime)))

(defn set-start-time!
  "Property.

  A double that represents the video time that the cue will start
  displayed."
  [this val]
  (aset this "startTime" val))

(defn end-time
  "Property.

  A double that represents the video time that the cue will stop
  displayed."
  [this]
  (-> this (.-endTime)))

(defn set-end-time!
  "Property.

  A double that represents the video time that the cue will stop
  displayed."
  [this val]
  (aset this "endTime" val))

(defn pause-on-exit
  "Property.

  A boolean for whether the video will pause when this cue stops
  displayed."
  [this]
  (-> this (.-pauseOnExit)))

(defn set-pause-on-exit!
  "Property.

  A boolean for whether the video will pause when this cue stops
  displayed."
  [this val]
  (aset this "pauseOnExit" val))

