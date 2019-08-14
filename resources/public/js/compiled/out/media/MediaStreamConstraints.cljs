(ns media.MediaStreamConstraints
  "The MediaStreamConstraints dictionary is used when calling `web.getUserMedia()`
  specify what kinds of tracks should be included in the returned
  and, optionally, to establish constraints for those tracks' settings."
  (:refer-clojure :exclude []))

(defn audio
  "Property.

  The `media.MediaStreamConstraints` dictionary's audio property
  used to indicate what kind of audio track, if any, should be
  in the `media.MediaStream` returned by a call to `web.getUserMedia()`.

  `var audioConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/audio`"
  [this]
  (-> this (.audio)))

(defn set-audio!
  "Property.

  The `media.MediaStreamConstraints` dictionary's audio property
  used to indicate what kind of audio track, if any, should be
  in the `media.MediaStream` returned by a call to `web.getUserMedia()`.

  `var audioConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/audio`"
  [this val]
  (aset this "audio" val))

(defn video
  "Property.

  The `media.MediaStreamConstraints` dictionary's video property
  used to indicate what kind of video track, if any, should be
  in the `media.MediaStream` returned by a call to `web.getUserMedia()`.

  `var videoConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/video`"
  [this]
  (-> this (.video)))

(defn set-video!
  "Property.

  The `media.MediaStreamConstraints` dictionary's video property
  used to indicate what kind of video track, if any, should be
  in the `media.MediaStream` returned by a call to `web.getUserMedia()`.

  `var videoConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/video`"
  [this val]
  (aset this "video" val))

