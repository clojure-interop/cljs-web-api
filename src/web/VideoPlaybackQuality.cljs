(ns web.VideoPlaybackQuality
  "A VideoPlaybackQuality object is returned by the `html.HTMLVideoElement.getVideoPlaybackQuality()`
  and contains metrics that can be used to determine the playback
  of a video."
  (:refer-clojure :exclude []))

(defn corrupted-video-frames
  "Property.

  The `web.VideoPlaybackQuality` interface's read-only corruptedVideoFrames
  the number of corrupted video frames that have been received
  the `web.<video>` element was last loaded or reloaded.

  `corruptFrameFount = videoPlaybackQuality.corruptedVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames`"
  [this]
  (-> this (.corruptedVideoFrames)))

(defn set-corrupted-video-frames!
  "Property.

  The `web.VideoPlaybackQuality` interface's read-only corruptedVideoFrames
  the number of corrupted video frames that have been received
  the `web.<video>` element was last loaded or reloaded.

  `corruptFrameFount = videoPlaybackQuality.corruptedVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames`"
  [this val]
  (aset this "corruptedVideoFrames" val))

(defn creation-time
  "Property.

  The read-only creationTime property on the `web.VideoPlaybackQuality`
  reports the number of milliseconds since the browsing context
  created this quality sample was recorded.

  `value = videoPlaybackQuality.creationTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/creationTime`"
  [this]
  (-> this (.creationTime)))

(defn set-creation-time!
  "Property.

  The read-only creationTime property on the `web.VideoPlaybackQuality`
  reports the number of milliseconds since the browsing context
  created this quality sample was recorded.

  `value = videoPlaybackQuality.creationTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/creationTime`"
  [this val]
  (aset this "creationTime" val))

(defn dropped-video-frames
  "Property.

  The read-only droppedVideoFrames property of the `web.VideoPlaybackQuality`
  returns the number of video frames which have been dropped rather
  being displayed since the last time the media was loaded into
  `html.HTMLVideoElement`.

  `value = videoPlaybackQuality.droppedVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames`"
  [this]
  (-> this (.droppedVideoFrames)))

(defn set-dropped-video-frames!
  "Property.

  The read-only droppedVideoFrames property of the `web.VideoPlaybackQuality`
  returns the number of video frames which have been dropped rather
  being displayed since the last time the media was loaded into
  `html.HTMLVideoElement`.

  `value = videoPlaybackQuality.droppedVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames`"
  [this val]
  (aset this "droppedVideoFrames" val))

(defn total-frame-delay
  "Property.

  The VideoPlaybackQuality.totalFrameDelay read-only property returns
  double containing the sum of the frame delay since the creation
  the associated `html.HTMLVideoElement`. The frame delay is the
  between a frame's theoretical presentation time and its effective
  time.

  `value = videoPlaybackQuality.totalFrameDelay;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalFrameDelay`"
  [this]
  (-> this (.totalFrameDelay)))

(defn set-total-frame-delay!
  "Property.

  The VideoPlaybackQuality.totalFrameDelay read-only property returns
  double containing the sum of the frame delay since the creation
  the associated `html.HTMLVideoElement`. The frame delay is the
  between a frame's theoretical presentation time and its effective
  time.

  `value = videoPlaybackQuality.totalFrameDelay;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalFrameDelay`"
  [this val]
  (aset this "totalFrameDelay" val))

(defn total-video-frames
  "Property.

  The `web.VideoPlaybackQuality` interface's totalVideoFrames read-only
  returns the total number of video frames that have been displayed
  dropped since the media was loaded.

  `value = videoPlaybackQuality.totalVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalVideoFrames`"
  [this]
  (-> this (.totalVideoFrames)))

(defn set-total-video-frames!
  "Property.

  The `web.VideoPlaybackQuality` interface's totalVideoFrames read-only
  returns the total number of video frames that have been displayed
  dropped since the media was loaded.

  `value = videoPlaybackQuality.totalVideoFrames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalVideoFrames`"
  [this val]
  (aset this "totalVideoFrames" val))

