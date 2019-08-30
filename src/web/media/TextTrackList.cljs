(ns web.media.TextTrackList
  "The TextTrackList interface is used to represent a list of the
  tracks defined by the `<track>` element, with each track represented
  a separate `textTrack` object in the list."
  (:refer-clojure :exclude []))

(defn get-track-by-id
  "Method.

  The `web.media.TextTrackList` method getTrackById() returns the
  `web.media.TextTrack` object from the track list whose id matches
  specified string.

  `var theTrack = TextTrackList.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn length
  "Property.

  [Read Only]

  The read-only `web.media.TextTrackList` property length returns
  number of entries in the TextTrackList, each of which is a `web.media.TextTrack`
  one track in the media element.

  `var trackCount = TextTrackList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/length`"
  [this]
  (-> this (.-length)))

(defn onaddtrack
  "Property.

  The `web.media.TextTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new text track has been added to the media element whose text
  the TextTrackList represents.

  `TextTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onaddtrack`"
  [this]
  (-> this (.-onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The `web.media.TextTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new text track has been added to the media element whose text
  the TextTrackList represents.

  `TextTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onchange
  "Property.

  The `web.media.TextTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that a change
  occurred on a `web.media.TextTrack` in the VideoTrackList.

  `TextTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The `web.media.TextTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that a change
  occurred on a `web.media.TextTrack` in the VideoTrackList.

  `TextTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onremovetrack
  "Property.

  The `web.media.TextTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that a text track
  been removed from the media element, and therefore also from
  TextTrackList.

  `TextTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onremovetrack`"
  [this]
  (-> this (.-onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The `web.media.TextTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that a text track
  been removed from the media element, and therefore also from
  TextTrackList.

  `TextTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

