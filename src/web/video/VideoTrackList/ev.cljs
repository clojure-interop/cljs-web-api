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

  The change event is fired when a video track is made active or
  for example by changing the track's selected property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/change_event`"

  "change")

