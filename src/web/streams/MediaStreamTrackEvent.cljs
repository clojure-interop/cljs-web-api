(ns web.streams.MediaStreamTrackEvent
  "The MediaStreamTrackEvent interface represents events which indicate
  a `web.streams.MediaStream` has had tracks added to or removed
  the stream through calls to Media Stream API methods. These events
  sent to the stream when these changes occur."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaStreamTrackEvent() constructor returns a newly created `web.streams.MediaStreamTrackEvent` object, which represents an event announcing that a `web.audio.MediaStreamTrack` has been added to or removed from a `web.streams.MediaStream`.

  The MediaStreamTrackEvent() constructor also inherits arguments from `Event()`.


  type
  A `web.dom.DOMString` representing the name of the type of the MediaStreamTrackEvent. It is case-sensitive and can be \\\"addtrack\\\" or \\\"removetrack\\\".
  track
  A `web.audio.MediaStreamTrack` object representing the track which was added to or removed from the stream.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent`"
  js/MediaStreamTrackEvent)

(defn track
  "Property.

  A MediaStreamTrack object representing the track which was added
  the stream."
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  A MediaStreamTrack object representing the track which was added
  the stream."
  [this val]
  (aset this "track" val))

