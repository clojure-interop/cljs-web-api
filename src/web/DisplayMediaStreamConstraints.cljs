(ns web.DisplayMediaStreamConstraints
  "The DisplayMediaStreamConstraints dictionary is used to specify
  or not to include video and/or audio tracks in the `media.MediaStream`
  be returned by `web.getDisplayMedia()`, as well as what type
  processing must be applied to the tracks."
  (:refer-clojure :exclude []))

(defn audio
  "Property.

  The `web.DisplayMediaStreamConstraints` dictionary's audio property
  used to specify whether or not to request that the `media.MediaStream`
  screen display contents also include an audio track. This value
  simply be a Boolean, where true indicates that an audio track
  be included an false (the default) indicates that no audio should
  included in the stream.

  `displayMediaStreamConstraints.audio = allowAudioFlag;
  displayMediaStreamConstraints.audio = mediaTrackConstraints;

  displayMediaStreamConstraints = {
  audio: allowAudioFlag|mediaTrackConstraints;
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/audio`"
  [this]
  (-> this (.audio)))

(defn set-audio!
  "Property.

  The `web.DisplayMediaStreamConstraints` dictionary's audio property
  used to specify whether or not to request that the `media.MediaStream`
  screen display contents also include an audio track. This value
  simply be a Boolean, where true indicates that an audio track
  be included an false (the default) indicates that no audio should
  included in the stream.

  `displayMediaStreamConstraints.audio = allowAudioFlag;
  displayMediaStreamConstraints.audio = mediaTrackConstraints;

  displayMediaStreamConstraints = {
  audio: allowAudioFlag|mediaTrackConstraints;
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/audio`"
  [this val]
  (aset this "audio" val))

(defn video
  "Property.

  The `web.DisplayMediaStreamConstraints` dictionary's video property
  used to configure the video track in the stream returned by `web.getDisplayMedia()`.

  `displayMediaStreamConstraints.video = allowVideoFlag;
  displayMediaStreamConstraints.video = mediaTrackConstraints;

  displayMediaStreamConstraints = {
  video: allowVideoFlag | mediaTrackConstraints;
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/video`"
  [this]
  (-> this (.video)))

(defn set-video!
  "Property.

  The `web.DisplayMediaStreamConstraints` dictionary's video property
  used to configure the video track in the stream returned by `web.getDisplayMedia()`.

  `displayMediaStreamConstraints.video = allowVideoFlag;
  displayMediaStreamConstraints.video = mediaTrackConstraints;

  displayMediaStreamConstraints = {
  video: allowVideoFlag | mediaTrackConstraints;
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/video`"
  [this val]
  (aset this "video" val))

