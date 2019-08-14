(ns audio.AudioTrackList
  "The AudioTrackList interface is used to represent a list of the
  tracks contained within a given HTML media element, with each
  represented by a separate `audio.AudioTrack` object in the list."
  (:refer-clojure :exclude []))

(defn get-track-by-id
  "Method.

  The `audio.AudioTrackList` method getTrackById() returns the
  `audio.AudioTrack` object from the track list whose `web.id`
  the specified string.

  `var theTrack = AudioTrackList.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn length
  "Property.

  The read-only `audio.AudioTrackList` property length returns
  number of entries in the AudioTrackList, each of which is an
  representing one audio track in the media element.

  `var trackCount = AudioTrackList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/length`"
  [this]
  (-> this (.length)))

(defn onaddtrack
  "Property.

  The `audio.AudioTrackList` property onaddtrack is an event handler
  is called when the addtrack event occurs, indicating that a new
  track has been added to the media element whose audio tracks
  AudioTrackList represents.

  `AudioTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`"
  [this]
  (-> this (.onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The `audio.AudioTrackList` property onaddtrack is an event handler
  is called when the addtrack event occurs, indicating that a new
  track has been added to the media element whose audio tracks
  AudioTrackList represents.

  `AudioTrackList.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onchange
  "Property.

  The `audio.AudioTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that one or
  of the `audio.AudioTrack`s in the AudioTrackList have been enabled
  disabled.

  `AudioTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The `audio.AudioTrackList` property onchange is an event handler
  is called when the change event occurs, indicating that one or
  of the `audio.AudioTrack`s in the AudioTrackList have been enabled
  disabled.

  `AudioTrackList.onchange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onremovetrack
  "Property.

  The `audio.AudioTrackList` onremovetrack event handler is called
  the removetrack event occurs, indicating that an audio track
  been removed from the media element, and therefore also from
  AudioTrackList.

  `AudioTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`"
  [this]
  (-> this (.onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The `audio.AudioTrackList` onremovetrack event handler is called
  the removetrack event occurs, indicating that an audio track
  been removed from the media element, and therefore also from
  AudioTrackList.

  `AudioTrackList.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

