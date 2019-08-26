(ns web.audio.AudioTrackList.ev
  "AudioTrackList Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  Fired when a new audio track has been added to the media element.
  Also available via the onaddtrack property."

  "addtrack")

(def change
  "Event.

  The change event is fired when an audio track is enabled or disabled,
  example by changing the track's enabled property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/change_event`"

  "change")

(def removetrack
  "Event.

  The removetrack event is fired when a track is removed from an

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/removetrack_event`"

  "removetrack")

