(ns html.HTMLMediaElement
  "The HTMLMediaElement interface adds to `html.HTMLElement` the
  and methods needed to support basic media-related capabilities
  are common to audio and video."
  (:refer-clojure :exclude [loop load]))

(defn can-play-type
  "Method.

  The `html.HTMLMediaElement` method canPlayType() reports how
  it is that the current browser will be able to play media of
  given MIME type.

  `canPlayResponse = audioOrVideo.canPlayType(mediaType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType`"
  [this media-type]
  (-> this (.canPlayType media-type)))

(defn capture-stream
  "Method.

  The captureStream() property of the `html.HTMLMediaElement` interface
  a `media.MediaStream` object which is streaming a real-time capture
  the content being rendered in the media element.

  `var mediaStream = mediaElement.captureStream()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream`"
  [this ]
  (-> this (.captureStream)))

(defn fast-seek
  "Method.

  The HTMLMediaElement.fastSeek() method quickly seeks the media
  the new time with precision tradeoff.

  `HTMLMediaElement.fastSeek(time);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/fastSeek`"
  [this time]
  (-> this (.fastSeek time)))

(defn load
  "Method.

  The `html.HTMLMediaElement` method load() resets the media element
  its initial state and begins the process of selecting a media
  and loading the media in preparation for playback to begin at
  beginning.

  `mediaElement.load();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/load`"
  [this ]
  (-> this (.load)))

(defn ms-insert-audio-effect
  "Method.

  The HTMLMediaElement.msInsertAudioEffect() method inserts the
  audio effect into the media pipeline.

  `HTMLMediaElement.msInsertAudioEffect(activatableClassId: DOMString, effectRequired: boolean, config);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/msInsertAudioEffect`"
  [this & args]
  (apply (-> this .-msInsertAudioEffect) (concat [this] args)))

(defn pause
  "Method.

  The HTMLMediaElement.pause() method will pause playback of the
  if the media is already in a paused state this method will have
  effect.

  `HTMLMediaElement.pause()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause`"
  [this ]
  (-> this (.pause)))

(defn play
  "Method.

  The `html.HTMLMediaElement` method play() attempts to begin playback
  the media. It returns a `web.Promise` which is resolved when
  has been successfully started.

  `var promise = HTMLMediaElement.play();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play`"
  [this ]
  (-> this (.play)))

(defn seek-to-next-frame
  "Method.

  The HTMLMediaElement.seekToNextFrame() method asynchronously
  the the current play position to the next frame in the media.

  `var seekCompletePromise = HTMLMediaElement.seekToNextFrame();

  HTMLMediaElement.seekToNextFrame();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekToNextFrame`"
  [this & args]
  (apply (-> this .-seekToNextFrame) (concat [this] args)))

(defn set-media-keys
  "Method.

  The setMediaKeys() property of the `html.HTMLMediaElement` interface
  a `web.Promise` that resolves to the passed `media.MediaKeys`,
  are those used to decrypt media during playback.

  `var Promise = HTMLMediaElement.setMediaKeys(mediaKeys);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setMediaKeys`"
  [this media-keys]
  (-> this (.setMediaKeys media-keys)))

(defn set-sink-id
  "Method.

  The HTMLMediaElement.setSinkId() method sets the ID of the audio
  to use for output and returns a Promise. This only works when
  application is authorized to use the specified device.

  `HTMLMediaElement.setSinkId(sinkId).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId`"
  [this sink-id]
  (-> this (.setSinkId sink-id)))

(defn audio-tracks
  "Property.

  The read-only audioTracks property on `html.HTMLMediaElement`
  returns an `audio.AudioTrackList` object listing all of the `audio.AudioTrack`
  representing the media element's audio tracks.

  `var audioTracks = mediaElement.audioTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks`"
  [this]
  (-> this (.audioTracks)))

(defn set-audio-tracks!
  "Property.

  The read-only audioTracks property on `html.HTMLMediaElement`
  returns an `audio.AudioTrackList` object listing all of the `audio.AudioTrack`
  representing the media element's audio tracks.

  `var audioTracks = mediaElement.audioTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks`"
  [this val]
  (aset this "audioTracks" val))

(defn autoplay
  "Property.

  The HTMLMediaElement.autoplay property reflects the autoplay
  attribute, indicating whether playback should automatically begin
  soon as enough media is available to do so without interruption.

  `HTMLMediaElement.autoplay = true | false;

  var autoplay = HTMLMediaElement.autoplay;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay`"
  [this]
  (-> this (.autoplay)))

(defn set-autoplay!
  "Property.

  The HTMLMediaElement.autoplay property reflects the autoplay
  attribute, indicating whether playback should automatically begin
  soon as enough media is available to do so without interruption.

  `HTMLMediaElement.autoplay = true | false;

  var autoplay = HTMLMediaElement.autoplay;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay`"
  [this val]
  (aset this "autoplay" val))

(defn buffered
  "Property.

  The HTMLMediaElement.buffered read-only property returns a new
  object that indicates the ranges of the media source that the
  has buffered (if any) at the moment the buffered property is

  `var timeRange = audioObject.buffered`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered`"
  [this]
  (-> this (.buffered)))

(defn controller
  "Property.

  The HTMLMediaElement.controller property represents the media
  assigned to the element.

  `...`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controller`"
  [this]
  (-> this (.controller)))

(defn set-controller!
  "Property.

  The HTMLMediaElement.controller property represents the media
  assigned to the element.

  `...`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controller`"
  [this val]
  (aset this "controller" val))

(defn controls
  "Property.

  The HTMLMediaElement.controls property reflects the controls
  attribute, which controls whether user interface controls for
  the media item will be displayed.

  `var ctrls = video.controls;
  audio.controls = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controls`"
  [this]
  (-> this (.controls)))

(defn set-controls!
  "Property.

  The HTMLMediaElement.controls property reflects the controls
  attribute, which controls whether user interface controls for
  the media item will be displayed.

  `var ctrls = video.controls;
  audio.controls = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controls`"
  [this val]
  (aset this "controls" val))

(defn controls-list
  "Property.

  The controlsList property of the `html.HTMLMediaElement` interface
  a DOMTokenList that helps the user agent select what controls
  show on the media element whenever the user agent shows its own
  of controls. The DOMTokenList takes one or more of three possible
  nodownload, nofullscreen, and noremoteplayback.

  `var domTokenList = HTMLMediaElement.controlsList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList`"
  [this]
  (-> this (.controlsList)))

(defn set-controls-list!
  "Property.

  The controlsList property of the `html.HTMLMediaElement` interface
  a DOMTokenList that helps the user agent select what controls
  show on the media element whenever the user agent shows its own
  of controls. The DOMTokenList takes one or more of three possible
  nodownload, nofullscreen, and noremoteplayback.

  `var domTokenList = HTMLMediaElement.controlsList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList`"
  [this val]
  (aset this "controlsList" val))

(defn cross-origin
  "Property.

  The HTMLMediaElement.crossOrigin property is the CORS setting
  this image element. See CORS settings attributes for details.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/crossOrigin`"
  [this]
  (-> this (.crossOrigin)))

(defn set-cross-origin!
  "Property.

  The HTMLMediaElement.crossOrigin property is the CORS setting
  this image element. See CORS settings attributes for details.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/crossOrigin`"
  [this val]
  (aset this "crossOrigin" val))

(defn current-src
  "Property.

  The HTMLMediaElement.currentSrc property contains the absolute
  of the chosen media resource. This could happen, for example,
  the web server selects a media file based on the resolution of
  user's display. The value is an empty string if the networkState
  is EMPTY.

  `var mediaUrl = audioObject.currentSrc;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc`"
  [this]
  (-> this (.currentSrc)))

(defn current-time
  "Property.

  The `html.HTMLMediaElement` interface's currentTime property
  the current playback time in seconds.

  `var currentTime = htmlMediaElement.currentTime;
  htmlMediaElement.currentTime = 35;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime`"
  [this]
  (-> this (.currentTime)))

(defn set-current-time!
  "Property.

  The `html.HTMLMediaElement` interface's currentTime property
  the current playback time in seconds.

  `var currentTime = htmlMediaElement.currentTime;
  htmlMediaElement.currentTime = 35;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime`"
  [this val]
  (aset this "currentTime" val))

(defn default-muted
  "Property.

  The HTMLMediaElement.defaultMuted property reflects the muted
  attribute, which indicates whether the media element's audio
  should be muted by default. This property has no dynamic effect.
  mute and unmute the audio output, use the `web.muted` property.

  `var dMuted = video.defaultMuted;
  audio.defaultMuted = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultMuted`"
  [this]
  (-> this (.defaultMuted)))

(defn set-default-muted!
  "Property.

  The HTMLMediaElement.defaultMuted property reflects the muted
  attribute, which indicates whether the media element's audio
  should be muted by default. This property has no dynamic effect.
  mute and unmute the audio output, use the `web.muted` property.

  `var dMuted = video.defaultMuted;
  audio.defaultMuted = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultMuted`"
  [this val]
  (aset this "defaultMuted" val))

(defn default-playback-rate
  "Property.

  The HTMLMediaElement.defaultPlaybackRate property indicates the
  playback rate for the media.

  `var dSpeed = video.defaultPlaybackRate;
  audio.defaultPlaybackRate = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultPlaybackRate`"
  [this]
  (-> this (.defaultPlaybackRate)))

(defn set-default-playback-rate!
  "Property.

  The HTMLMediaElement.defaultPlaybackRate property indicates the
  playback rate for the media.

  `var dSpeed = video.defaultPlaybackRate;
  audio.defaultPlaybackRate = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultPlaybackRate`"
  [this val]
  (aset this "defaultPlaybackRate" val))

(defn duration
  "Property.

  The read-only `html.HTMLMediaElement` property duration indicates
  length of the element's media in seconds.

  `myDuration = htmlMediaElement.duration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration`"
  [this]
  (-> this (.duration)))

(defn ended
  "Property.

  The HTMLMediaElement.ended indicates whether the media element
  ended playback.

  `var isEnded = HTMLMediaElement.ended`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended`"
  [this]
  (-> this (.ended)))

(defn error
  "Property.

  The HTMLMediaElement.error is the `media.MediaError` object for
  most recent error, or null if there has not been an error. When
  error event is received by the element, you can determine details
  what happened by examining this object.

  `var myError = HTMLMediaElement.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/error`"
  [this]
  (-> this (.error)))

(defn initial-time
  "Property.

  The HTMLMediaElement.initialTime is the initial playback position
  seconds. This property is obsolete, you can use a Media Fragments
  in the `html.HTMLMediaElement.src` attribute instead.

  `...`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/initialTime`"
  [this]
  (-> this (.initialTime)))

(defn loop
  "Property.

  The HTMLMediaElement.loop property reflects the loop HTML attribute,
  controls whether the media element should start over when it
  the end.

  `var loop = video.loop;
  audio.loop = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop`"
  [this]
  (-> this (.loop)))

(defn set-loop!
  "Property.

  The HTMLMediaElement.loop property reflects the loop HTML attribute,
  controls whether the media element should start over when it
  the end.

  `var loop = video.loop;
  audio.loop = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop`"
  [this val]
  (aset this "loop" val))

(defn media-group
  "Property.

  The HTMLMediaElement.mediaGroup property reflects the mediagroup
  attribute, which indicates the name of the group of elements
  belongs to. A group of media elements shares a common controller.

  `...`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup`"
  [this]
  (-> this (.mediaGroup)))

(defn set-media-group!
  "Property.

  The HTMLMediaElement.mediaGroup property reflects the mediagroup
  attribute, which indicates the name of the group of elements
  belongs to. A group of media elements shares a common controller.

  `...`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup`"
  [this val]
  (aset this "mediaGroup" val))

(defn muted
  "Property.

  The HTMLMediaElement.muted indicates whether the media element

  `var isMuted = audioOrVideo.muted
  audio.muted = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted`"
  [this]
  (-> this (.muted)))

(defn set-muted!
  "Property.

  The HTMLMediaElement.muted indicates whether the media element

  `var isMuted = audioOrVideo.muted
  audio.muted = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted`"
  [this val]
  (aset this "muted" val))

(defn network-state
  "Property.

  The HTMLMediaElement.networkState property indicates the current
  of the fetching of media over the network.

  `var networkState = audioOrVideo.networkState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/networkState`"
  [this]
  (-> this (.networkState)))

(defn onerror
  "Property.

  The onerror property of the `html.HTMLMediaElement` interface
  the `web.EventHandler` for processing error events.

  `HTMLMediaElement.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `html.HTMLMediaElement` interface
  the `web.EventHandler` for processing error events.

  `HTMLMediaElement.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onerror`"
  [this val]
  (aset this "onerror" val))

(defn paused
  "Property.

  The read-only HTMLMediaElement.paused property tells whether
  media element is paused.

  `var isPaused = audioOrVideo.paused`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused`"
  [this]
  (-> this (.paused)))

(defn playback-rate
  "Property.

  The HTMLMediaElement.playbackRate property sets the rate at which
  media is being played back. This is used to implement user controls
  fast forward, slow motion, and so forth. The normal playback
  is multiplied by this value to obtain the current rate, so a
  of 1.0 indicates normal speed.

  `// video
  video.playbackRate = 1.5;
  // audio
  audio.playbackRate = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate`"
  [this]
  (-> this (.playbackRate)))

(defn set-playback-rate!
  "Property.

  The HTMLMediaElement.playbackRate property sets the rate at which
  media is being played back. This is used to implement user controls
  fast forward, slow motion, and so forth. The normal playback
  is multiplied by this value to obtain the current rate, so a
  of 1.0 indicates normal speed.

  `// video
  video.playbackRate = 1.5;
  // audio
  audio.playbackRate = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate`"
  [this val]
  (aset this "playbackRate" val))

(defn ready-state
  "Property.

  The HTMLMediaElement.readyState property indicates the readiness
  of the media.

  `var readyState = audioOrVideo.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState`"
  [this]
  (-> this (.readyState)))

(defn seekable
  "Property.

  The seekable read-only property of the `html.HTMLMediaElement`
  a `web.TimeRanges` object that contains the time ranges that
  user is able to seek to, if any.

  `var seekable = audioOrVideo.seekable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekable`"
  [this]
  (-> this (.seekable)))

(defn set-seekable!
  "Property.

  The seekable read-only property of the `html.HTMLMediaElement`
  a `web.TimeRanges` object that contains the time ranges that
  user is able to seek to, if any.

  `var seekable = audioOrVideo.seekable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekable`"
  [this val]
  (aset this "seekable" val))

(defn sink-id
  "Property.

  The HTMLMediaElement.sinkId read-only property returns a `dom.DOMString`
  is the unique ID of the audio device delivering output. If it
  using the user agent default, it returns an empty string. This
  should be one of the `media.MediaDeviceInfo.deviceId` values
  from `media.MediaDevices.enumerateDevices()`, id-multimedia,
  id-communications.

  `var sinkId = HTMLMediaElement.sinkId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/sinkId`"
  [this]
  (-> this (.sinkId)))

(defn set-sink-id!
  "Property.

  The HTMLMediaElement.sinkId read-only property returns a `dom.DOMString`
  is the unique ID of the audio device delivering output. If it
  using the user agent default, it returns an empty string. This
  should be one of the `media.MediaDeviceInfo.deviceId` values
  from `media.MediaDevices.enumerateDevices()`, id-multimedia,
  id-communications.

  `var sinkId = HTMLMediaElement.sinkId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/sinkId`"
  [this val]
  (aset this "sinkId" val))

(defn src
  "Property.

  The HTMLMediaElement.src property reflects the value of the HTML
  element's src attribute, which indicates the URL of a media resource
  use in the element.

  `var mediaUrl = HTMLMediaElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`"
  [this]
  (-> this (.src)))

(defn set-src!
  "Property.

  The HTMLMediaElement.src property reflects the value of the HTML
  element's src attribute, which indicates the URL of a media resource
  use in the element.

  `var mediaUrl = HTMLMediaElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`"
  [this val]
  (aset this "src" val))

(defn src-object
  "Property.

  The srcObject property of the `html.HTMLMediaElement` interface
  or returns the object which serves as the source of the media
  with the `html.HTMLMediaElement`.

  `var sourceObject = HTMLMediaElement.srcObject;

  HTMLMediaElement.srcObject = sourceObject;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject`"
  [this]
  (-> this (.srcObject)))

(defn set-src-object!
  "Property.

  The srcObject property of the `html.HTMLMediaElement` interface
  or returns the object which serves as the source of the media
  with the `html.HTMLMediaElement`.

  `var sourceObject = HTMLMediaElement.srcObject;

  HTMLMediaElement.srcObject = sourceObject;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject`"
  [this val]
  (aset this "srcObject" val))

(defn text-tracks
  "Property.

  The read-only textTracks property on `html.HTMLMediaElement`
  returns a `web.TextTrackList` object listing all of the `web.TextTrack`
  representing the media element's text tracks

  `var textTracks = mediaElement.textTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/textTracks`"
  [this]
  (-> this (.textTracks)))

(defn set-text-tracks!
  "Property.

  The read-only textTracks property on `html.HTMLMediaElement`
  returns a `web.TextTrackList` object listing all of the `web.TextTrack`
  representing the media element's text tracks

  `var textTracks = mediaElement.textTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/textTracks`"
  [this val]
  (aset this "textTracks" val))

(defn video-tracks
  "Property.

  The read-only videoTracks property on `html.HTMLMediaElement`
  returns a `web.VideoTrackList` object listing all of the `web.VideoTrack`
  representing the media element's video tracks.

  `var videoTracks = mediaElement.videoTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/videoTracks`"
  [this]
  (-> this (.videoTracks)))

(defn set-video-tracks!
  "Property.

  The read-only videoTracks property on `html.HTMLMediaElement`
  returns a `web.VideoTrackList` object listing all of the `web.VideoTrack`
  representing the media element's video tracks.

  `var videoTracks = mediaElement.videoTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/videoTracks`"
  [this val]
  (aset this "videoTracks" val))

(defn volume
  "Property.

  The HTMLMediaElement.volume property sets the volume at which
  media will be played.

  `var volume ​= video.volume; //1`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume`"
  [this]
  (-> this (.volume)))

(defn set-volume!
  "Property.

  The HTMLMediaElement.volume property sets the volume at which
  media will be played.

  `var volume ​= video.volume; //1`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume`"
  [this val]
  (aset this "volume" val))

(defn disable-remote-playback
  "Property.

  The HTMLMediaElement.disableRemotePlayback property determines
  the media element is allowed to have a remote playback UI.

  `var remotePlaybackState ​= element.disableRemotePlayback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/disableRemotePlayback`"
  [this]
  (-> this (.disableRemotePlayback)))

(defn set-disable-remote-playback!
  "Property.

  The HTMLMediaElement.disableRemotePlayback property determines
  the media element is allowed to have a remote playback UI.

  `var remotePlaybackState ​= element.disableRemotePlayback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/disableRemotePlayback`"
  [this val]
  (aset this "disableRemotePlayback" val))

(defn onencrypted
  "Property.

  The onencrypted property of the `html.HTMLMediaElement` is an
  handler, fired whenever an encrypted event occurs, denoting the
  is encrypted.

  `HTMLMediaElement.onencrypted = function(encrypted) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onencrypted`"
  [this]
  (-> this (.onencrypted)))

(defn set-onencrypted!
  "Property.

  The onencrypted property of the `html.HTMLMediaElement` is an
  handler, fired whenever an encrypted event occurs, denoting the
  is encrypted.

  `HTMLMediaElement.onencrypted = function(encrypted) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onencrypted`"
  [this val]
  (aset this "onencrypted" val))

(defn onwaitingforkey
  "Property.

  The onwaitingforkey property of the `html.HTMLMediaElement` is
  event handler, fired when a waitingforkey event occurs, when
  is blocked while waiting for an encryption key.

  `HTMLMediaElement.onwaitingforkey = function(waitingforkey) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onwaitingforkey`"
  [this]
  (-> this (.onwaitingforkey)))

(defn set-onwaitingforkey!
  "Property.

  The onwaitingforkey property of the `html.HTMLMediaElement` is
  event handler, fired when a waitingforkey event occurs, when
  is blocked while waiting for an encryption key.

  `HTMLMediaElement.onwaitingforkey = function(waitingforkey) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onwaitingforkey`"
  [this val]
  (aset this "onwaitingforkey" val))

