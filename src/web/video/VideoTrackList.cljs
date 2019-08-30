(ns web.video.VideoTrackList
  "The VideoTrackList interface is used to represent a list of the
  tracks contained within a `<video>` element, with each track
  by a separate `web.video.VideoTrack` object in the list."
  (:refer-clojure :exclude []))

(defn get-track-by-id
  "Method.

  The `web.video.VideoTrackList` method getTrackById() returns
  first `web.video.VideoTrack` object from the track list whose
  matches the specified string.

  `var theTrack = VideoTrackList.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn length
  "Property.

  [Read Only]

  The read-only `web.video.VideoTrackList` property length returns
  number of entries in the VideoTrackList, each of which is a `web.video.VideoTrack`
  one video track in the media element.

  `var trackCount = VideoTrackList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/length`"
  [this]
  (-> this (.-length)))

(defn selected-index
  "Property.

  [Read Only]

  The read-only `web.video.VideoTrackList` property selectedIndex
  the index of the currently selected track, if any, or -1 otherwise.

  `var index = VideoTrackList.selectedIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/selectedIndex`"
  [this]
  (-> this (.-selectedIndex)))

(defn onaddtrack
  "Property.

  The `web.video.VideoTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new video track has been added to the media element whose video
  the VideoTrackList represents.

  `VideoTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`"
  [this]
  (-> this (.-onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The `web.video.VideoTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new video track has been added to the media element whose video
  the VideoTrackList represents.

  `VideoTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onchange
  "Property.

  The `web.video.VideoTrackList` property onchange is an event
  which is called when the change event occurs, indicating that
  `web.video.VideoTrack` in the VideoTrackList has been made active.

  `VideoTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The `web.video.VideoTrackList` property onchange is an event
  which is called when the change event occurs, indicating that
  `web.video.VideoTrack` in the VideoTrackList has been made active.

  `VideoTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onremovetrack
  "Property.

  The `web.video.VideoTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that a video track
  been removed from the media element, and therefore also from
  VideoTrackList.

  `VideoTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`"
  [this]
  (-> this (.-onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The `web.video.VideoTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that a video track
  been removed from the media element, and therefore also from
  VideoTrackList.

  `VideoTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

