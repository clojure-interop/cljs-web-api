(ns web.media.TextTrackList.ev
  "TextTrackList Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  Fired when a new text track has been added to the media element.
  Also available via the onaddtrack property."

  "addtrack")

(def change
  "Event.

  The change event is fired when a text track is made active or
  or a `textTrackList` is otherwise changed

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/change_event`"

  "change")

