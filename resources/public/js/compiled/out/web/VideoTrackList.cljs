(ns web.VideoTrackList
  "The VideoTrackList interface is used to represent a list of the
  tracks contained within a `web.<video>` element, with each track
  by a separate `web.VideoTrack` object in the list."
  (:refer-clojure :exclude []))

(defn get-track-by-id
  "Method.

  The `web.VideoTrackList` method getTrackById() returns the first
  object from the track list whose `web.id` matches the specified

  `var theTrack = VideoTrackList.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn length
  "Property.

  The read-only `web.VideoTrackList` property length returns the
  of entries in the VideoTrackList, each of which is a `web.VideoTrack`
  one video track in the media element.

  `var trackCount = VideoTrackList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/length`"
  [this]
  (-> this (.length)))

(defn onaddtrack
  "Property.

  The `web.VideoTrackList` property onaddtrack is an event handler
  is called when the addtrack event occurs, indicating that a new
  track has been added to the media element whose video tracks
  VideoTrackList represents.

  `VideoTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`"
  [this]
  (-> this (.onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The `web.VideoTrackList` property onaddtrack is an event handler
  is called when the addtrack event occurs, indicating that a new
  track has been added to the media element whose video tracks
  VideoTrackList represents.

  `VideoTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onchange
  "Property.

  The `web.VideoTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that a `web.VideoTrack`
  the VideoTrackList has been made active.

  `VideoTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The `web.VideoTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that a `web.VideoTrack`
  the VideoTrackList has been made active.

  `VideoTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onremovetrack
  "Property.

  The `web.VideoTrackList` onremovetrack event handler is called
  the removetrack event occurs, indicating that a video track has
  removed from the media element, and therefore also from the VideoTrackList.

  `VideoTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`"
  [this]
  (-> this (.onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The `web.VideoTrackList` onremovetrack event handler is called
  the removetrack event occurs, indicating that a video track has
  removed from the media element, and therefore also from the VideoTrackList.

  `VideoTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

(defn selected-index
  "Property.

  The read-only `web.VideoTrackList` property selectedIndex returns
  index of the currently selected track, if any, or -1 otherwise.

  `var index = VideoTrackList.selectedIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/selectedIndex`"
  [this]
  (-> this (.selectedIndex)))

