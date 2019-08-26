(ns web.audio.MediaStreamTrack.ev
  "MediaStreamTrack Events."
  (:refer-clojure :exclude []))

(def ended
  "Event.

  Sent when playback of the track ends (when the value readyState
  to ended).
  Also available using the onended event handler property."

  "ended")

(def mute
  "Event.

  Sent to the MediaStreamTrack when the value of the muted property
  changed to true, indicating that the track is unable to provide
  temporarily (such as when the network is experiencing a service
  Also available using the onmute event handler property."

  "mute")

(def isolationchange
  "Event.

  Sent whenever the value of the isolated property changes due
  the document gaining or losing permission to access the track.
  Also available through the onisolationchange event handler property."

  "isolationchange")

(def overconstrained
  "Event.

  Send when the constraints specified for the track cause the track
  be incompatible and therefore to not be used.
  Also available through the onoverconstrained event handler property."

  "overconstrained")

(def unmute
  "Event.

  Sent to the track when data becomes available again, ending the
  state.
  Also available through the onunmute event handler property."

  "unmute")

(def started
  "Event.

  Sent when the track exits the new readyState.
  Also available through the onstarted event handler property."

  "started")

