(ns web.audio.TrackEvent
  "The TrackEvent interface, which is part of the HTML DOM specification,
  used for events which represent changes to a set of available
  on an HTML media element; these events are addtrack and removetrack."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The TrackEvent() constructor creates and returns a new `web.audio.TrackEvent` object describing an event which occurred on a list of tracks (`web.audio.AudioTrackList`, `web.video.VideoTrackList`, or `web.media.TextTrackList`).

  type
  The type of track event which is described by the object: \\\"addtrack\\\" or \\\"removetrack\\\".
  eventInfo Optional
  An optional dictionary providing additional information configuring the new event; it can contain the following fields in any combination:

  track Optional
  The track to which the event refers; this is null by default, but should be set to a `web.video.VideoTrack`, `web.audio.AudioTrack`, or `web.media.TextTrack` as appropriate given the type of track.
  bubbles Optional
  A Boolean indicating whether the event bubbles or not.
  cancelable Optional
  A Boolean indicating whether or not the event can be canceled.
  composed Optional
  A Boolean indicating whether or not the event will trigger listeners outside of a shadow root; see `Event.composed` for more details.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent/TrackEvent`"
  js/TrackEvent)

(defn track
  "Property.

  The read-only track property of the `web.audio.TrackEvent` interface
  the media track object to which the event applies.

  `track = TrackEvent.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent/track`"
  [this]
  (-> this (.-track)))

