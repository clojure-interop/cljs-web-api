(ns web.audio.AudioTrackList
  "The AudioTrackList interface is used to represent a list of the
  tracks contained within a given HTML media element, with each
  represented by a separate `web.audio.AudioTrack` object in the"
  (:refer-clojure :exclude []))

(defn get-track-by-id
  "Method.

  The `web.audio.AudioTrackList` method getTrackById() returns
  first `web.audio.AudioTrack` object from the track list whose
  matches the specified string.

  `var theTrack = AudioTrackList.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn length
  "Property.

  The read-only `web.audio.AudioTrackList` property length returns
  number of entries in the AudioTrackList, each of which is an
  representing one audio track in the media element.

  `var trackCount = AudioTrackList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/length`"
  [this]
  (-> this (.-length)))

(defn onaddtrack
  "Property.

  The `web.audio.AudioTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new audio track has been added to the media element whose audio
  the AudioTrackList represents.

  `AudioTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`"
  [this]
  (-> this (.-onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The `web.audio.AudioTrackList` property onaddtrack is an event
  which is called when the addtrack event occurs, indicating that
  new audio track has been added to the media element whose audio
  the AudioTrackList represents.

  `AudioTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onchange
  "Property.

  The `web.audio.AudioTrackList` property onchange is an event
  which is called when the change event occurs, indicating that
  or more of the `web.audio.AudioTrack`s in the AudioTrackList
  been enabled or disabled.

  `AudioTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The `web.audio.AudioTrackList` property onchange is an event
  which is called when the change event occurs, indicating that
  or more of the `web.audio.AudioTrack`s in the AudioTrackList
  been enabled or disabled.

  `AudioTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onremovetrack
  "Property.

  The `web.audio.AudioTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that an audio track
  been removed from the media element, and therefore also from
  AudioTrackList.

  `AudioTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`"
  [this]
  (-> this (.-onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The `web.audio.AudioTrackList` onremovetrack event handler is
  when the removetrack event occurs, indicating that an audio track
  been removed from the media element, and therefore also from
  AudioTrackList.

  `AudioTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

