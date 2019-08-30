(ns web.streams.MediaStream
  "The MediaStream interface represents a stream of media content.
  stream consists of several tracks such as video or audio tracks.
  track is specified as an instance of `web.audio.MediaStreamTrack`."
  (:refer-clojure :exclude [clone]))

(defn add-track
  "Method.

  The MediaStream.addTrack() method adds a new track to the stream.
  track is specified as a parameter of type `web.audio.MediaStreamTrack`.

  `stream.addTrack(track);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/addTrack`"
  [this track]
  (-> this (.addTrack track)))

(defn clone
  "Method.

  The clone() method of the `web.streams.MediaStream` interface
  a duplicate of the MediaStream. This new MediaStream object has
  new unique `id` and contains clones of every `web.audio.MediaStreamTrack`
  by the MediaStream on which clone() was called.

  `var stream = MediaStream.clone();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/clone`"
  [this ]
  (-> this (.clone)))

(defn get-audio-tracks
  "Method.

  Returns a list of the MediaStreamTrack objects stored in the
  object that have their kind attribute set to \"audio\". The order
  not defined, and may not only vary from one browser to another,
  also from one call to another."
  [this & args]
  (-> this .-getAudioTracks (.apply this (clj->js args))))

(defn get-track-by-id
  "Method.

  The MediaStream.getTrackById() method returns a `web.audio.MediaStreamTrack`
  representing the track with the specified ID string. If there
  no track with the specified ID, this method returns null.

  `var track = MediaStream.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn get-tracks
  "Method.

  [Experimental]

  The getTracks() method of the `web.streams.MediaStream` interface
  a sequence that represents all the `web.audio.MediaStreamTrack`
  in this stream's track set, regardless of `MediaStreamTrack.kind`.

  `var mediaStreamTracks = mediaStream.getTracks()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTracks`"
  [this ]
  (-> this (.getTracks)))

(defn get-video-tracks
  "Method.

  The getVideoTracks() method of the `web.streams.MediaStream`
  returns a sequence of `web.audio.MediaStreamTrack` objects representing
  video tracks in this stream.

  `var mediaStreamTracks[] = mediaStream.getVideoTracks();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks`"
  [this ]
  (-> this (.getVideoTracks)))

(defn remove-track
  "Method.

  Removes the MediaStreamTrack given as argument. If the track
  not part of the MediaStream object, nothing happens."
  [this & args]
  (-> this .-removeTrack (.apply this (clj->js args))))

(defn active
  "Property.

  [Read Only]

  The active read-only property of the `web.streams.MediaStream`
  returns a Boolean value which is true if the stream is currently
  otherwise, it returns false. A stream is considered active if
  least one of its `web.audio.MediaStreamTrack`s is not in the
  state. Once every track has ended, the stream's active property
  false.

  `var isActive = MediaStream.active;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active`"
  [this]
  (-> this (.-active)))

(defn ended
  "Property.

  [Read Only]
  [Obsolute]

  The ended read-only property of the `web.streams.MediaStream`
  returns a Boolean value which is true if the stream has been
  read, or false if the end of the stream has not been reached.
  value once the ended event has been fired.

  `var hasEnded = MediaStream.ended;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/ended`"
  [this]
  (-> this (.-ended)))

(defn id
  "Property.

  [Read Only]

  The MediaStream.id() read-only property is a `web.dom.DOMString`
  36 characters denoting a unique identifier (GUID) for the object.

  `var id = mediaStream.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/id`"
  [this]
  (-> this (.-id)))

(defn onaddtrack
  "Property.

  The MediaStream.onaddtrack property is an `EventHandler` which
  a function to be called when the addtrack event occurs on a `web.streams.MediaStream`
  This happens when a new track of any kind is added to the media

  `MediaStream.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`"
  [this]
  (-> this (.-onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The MediaStream.onaddtrack property is an `EventHandler` which
  a function to be called when the addtrack event occurs on a `web.streams.MediaStream`
  This happens when a new track of any kind is added to the media

  `MediaStream.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onremovetrack
  "Property.

  The MediaStream.onremovetrack property is an `EventHandler` which
  a function to be called when the removetrack event occurs on
  `web.streams.MediaStream` instance. This happens when a track
  any kind is removed from the media stream.

  `MediaStream.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`"
  [this]
  (-> this (.-onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The MediaStream.onremovetrack property is an `EventHandler` which
  a function to be called when the removetrack event occurs on
  `web.streams.MediaStream` instance. This happens when a track
  any kind is removed from the media stream.

  `MediaStream.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

