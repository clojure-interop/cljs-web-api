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

  Fired when a track has been enabled or disabled.
  Also available via the onchange property."

  "change")

(def removetrack
  "Event.

  Fired when a new audio track has been removed from the media
  Also available via the onremovetrack property."

  "removetrack")

