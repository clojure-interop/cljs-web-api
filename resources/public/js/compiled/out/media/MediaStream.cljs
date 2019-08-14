(ns media.MediaStream
  "The MediaStream interface represents a stream of media content.
  stream consists of several tracks such as video or audio tracks.
  track is specified as an instance of `media.MediaStreamTrack`."
  (:refer-clojure :exclude [clone]))

(def constructor
  "Constructor.

  The MediaStream() constructor returns a newly-created `media.MediaStream`, which serves as a collection of media tracks, each represented by a `media.MediaStreamTrack` object.

  stream
  A different `media.MediaStream` object whose tracks are added to the newly-created stream automatically. The tracks are not removed from the original stream, so they're shared by the two streams.
  tracks
  An `web.Array` of `media.MediaStreamTrack` objects, one for each track to add to the stream.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream`"
  js/MediaStream)

(defn add-track
  "Method.

  The MediaStream.addTrack() method adds a new track to the stream.
  track is specified as a parameter of type `media.MediaStreamTrack`.

  `stream.addTrack(track);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/addTrack`"
  [this track]
  (-> this (.addTrack track)))

(defn clone
  "Method.

  The clone() method of the `media.MediaStream` interface creates
  duplicate of the MediaStream. This new MediaStream object has
  new unique `web.id` and contains clones of every `media.MediaStreamTrack`
  by the MediaStream on which clone() was called.

  `var stream = MediaStream.clone();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/clone`"
  [this ]
  (-> this (.clone)))

(defn get-audio-tracks
  "Method.

  The getAudioTracks() method of the `media.MediaStream` interface
  a sequence that represents all the `media.MediaStreamTrack` objects
  this stream's track set where `media.MediaStreamTrack.kind` is

  `var mediaStreamTracks = mediaStream.getAudioTracks()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getAudioTracks`"
  [this ]
  (-> this (.getAudioTracks)))

(defn get-track-by-id
  "Method.

  The MediaStream.getTrackById() method returns a `media.MediaStreamTrack`
  representing the track with the specified ID string. If there
  no track with the specified ID, this method returns null.

  `var track = MediaStream.getTrackById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTrackById`"
  [this id]
  (-> this (.getTrackById id)))

(defn get-tracks
  "Method.

  The getTracks() method of the `media.MediaStream` interface returns
  sequence that represents all the `media.MediaStreamTrack` objects
  this stream's track set, regardless of `media.MediaStreamTrack.kind`.

  `var mediaStreamTracks = mediaStream.getTracks()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTracks`"
  [this ]
  (-> this (.getTracks)))

(defn get-video-tracks
  "Method.

  The getVideoTracks() method of the `media.MediaStream` interface
  a sequence of `media.MediaStreamTrack` objects representing the
  tracks in this stream.

  `var mediaStreamTracks[] = mediaStream.getVideoTracks();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks`"
  [this ]
  (-> this (.getVideoTracks)))

(defn active
  "Property.

  The active read-only property of the `media.MediaStream` interface
  a Boolean value which is true if the stream is currently active;
  it returns false. A stream is considered active if at least one
  its `media.MediaStreamTrack`s is not in the `media.MediaStreamTrack.ended`
  Once every track has ended, the stream's active property becomes

  `var isActive = MediaStream.active;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active`"
  [this]
  (-> this (.active)))

(defn set-active!
  "Property.

  The active read-only property of the `media.MediaStream` interface
  a Boolean value which is true if the stream is currently active;
  it returns false. A stream is considered active if at least one
  its `media.MediaStreamTrack`s is not in the `media.MediaStreamTrack.ended`
  Once every track has ended, the stream's active property becomes

  `var isActive = MediaStream.active;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active`"
  [this val]
  (aset this "active" val))

(defn ended
  "Property.

  The ended read-only property of the `media.MediaStream` interface
  a Boolean value which is true if the stream has been completely
  or false if the end of the stream has not been reached. This
  once the ended event has been fired.

  `var hasEnded = MediaStream.ended;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/ended`"
  [this]
  (-> this (.ended)))

(defn set-ended!
  "Property.

  The ended read-only property of the `media.MediaStream` interface
  a Boolean value which is true if the stream has been completely
  or false if the end of the stream has not been reached. This
  once the ended event has been fired.

  `var hasEnded = MediaStream.ended;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/ended`"
  [this val]
  (aset this "ended" val))

(defn id
  "Property.

  The MediaStream.id() read-only property is a `dom.DOMString`
  36 characters denoting a unique identifier (GUID) for the object.

  `var id = mediaStream.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/id`"
  [this]
  (-> this (.id)))

(defn onaddtrack
  "Property.

  The MediaStream.onaddtrack property is an `web.EventHandler`
  specifies a function to be called when the addtrack event occurs
  a `media.MediaStream` instance. This happens when a new track
  any kind is added to the media stream.

  `MediaStream.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`"
  [this]
  (-> this (.onaddtrack)))

(defn set-onaddtrack!
  "Property.

  The MediaStream.onaddtrack property is an `web.EventHandler`
  specifies a function to be called when the addtrack event occurs
  a `media.MediaStream` instance. This happens when a new track
  any kind is added to the media stream.

  `MediaStream.onaddtrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`"
  [this val]
  (aset this "onaddtrack" val))

(defn onremovetrack
  "Property.

  The MediaStream.onremovetrack property is an `web.EventHandler`
  specifies a function to be called when the removetrack event
  on a `media.MediaStream` instance. This happens when a track
  any kind is removed from the media stream.

  `MediaStream.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`"
  [this]
  (-> this (.onremovetrack)))

(defn set-onremovetrack!
  "Property.

  The MediaStream.onremovetrack property is an `web.EventHandler`
  specifies a function to be called when the removetrack event
  on a `media.MediaStream` instance. This happens when a track
  any kind is removed from the media stream.

  `MediaStream.onremovetrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`"
  [this val]
  (aset this "onremovetrack" val))

