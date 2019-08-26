(ns web.video.VideoTrackList.ev
  "VideoTrackList Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  Fired when a new video track has been added to the media element.
  Also available via the onaddtrack property."

  "addtrack")

(def change
  "Event.

  Fired when a video track has been made active or inactive.
  Also available via the onchange property."

  "change")

(def removetrack
  "Event.

  Fired when a new video track has been removed from the media
  Also available via the onremovetrack property."

  "removetrack")

