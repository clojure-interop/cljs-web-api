(ns web.audio.TrackEvent
  "The TrackEvent interface, which is part of the HTML DOM specification,
  used for events which represent changes to a set of available
  on an HTML media element; these events are addtrack and removetrack."
  (:refer-clojure :exclude []))

(defn track
  "Property.

  [Read Only]

  The read-only track property of the `web.audio.TrackEvent` interface
  the media track object to which the event applies.

  `track = TrackEvent.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent/track`"
  [this]
  (-> this (.-track)))

