(ns web.streams.MediaStreamTrackEvent
  "The MediaStreamTrackEvent interface represents events which indicate
  a `web.streams.MediaStream` has had tracks added to or removed
  the stream through calls to Media Stream API methods. These events
  sent to the stream when these changes occur."
  (:refer-clojure :exclude []))

(defn track
  "Property.

  A MediaStreamTrack object representing the track which was added
  the stream."
  [this]
  (-> this (.-track)))

(defn set-track!
  "Property.

  A MediaStreamTrack object representing the track which was added
  the stream."
  [this val]
  (aset this "track" val))

