(ns audio.AudioTrackList.ev
  "AudioTrackList Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  The addtrack event is fired when a track is added to an AudioTrackList.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/addtrack_event`"

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

