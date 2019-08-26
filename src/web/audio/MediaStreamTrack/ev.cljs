(ns web.audio.MediaStreamTrack.ev
  "MediaStreamTrack Events."
  (:refer-clojure :exclude []))

(def ended
  "Event.

  Sent when playback of the track ends (when the value readyState
  to ended).
  Also available using the onended event handler property."

  "ended")

(def started
  "Event.

  Sent when the track exits the new readyState.
  Also available through the onstarted event handler property."

  "started")

(def mute
  "Event.

  The mute event is sent to a `web.audio.MediaStreamTrack` when
  track's source is temporarily unable to provide media data.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/mute_event`"

  "mute")

