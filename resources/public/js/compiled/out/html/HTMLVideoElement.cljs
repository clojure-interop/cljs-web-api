(ns html.HTMLVideoElement
  "The HTMLVideoElement interface provides special properties and
  for manipulating video objects. It also inherits properties and
  of `html.HTMLMediaElement` and `html.HTMLElement`."
  (:refer-clojure :exclude []))

(defn get-video-playback-quality
  "Method.

  The `html.HTMLVideoElement` method getVideoPlaybackQuality()
  and returns a `web.VideoPlaybackQuality` object containing metrics
  how many frames have been lost.

  `videoPQ = videoElement.getVideoPlaybackQuality();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality`"
  [this ]
  (-> this (.getVideoPlaybackQuality)))

(defn ms-frame-step
  "Method.

  The HTMLVideoElement.msFrameStep() method steps the video by
  frame forward or one frame backward.

  `HTMLVideoElement.msFrameStep(forward);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msFrameStep`"
  [this forward]
  (-> this (.msFrameStep forward)))

(defn ms-insert-video-effect
  "Method.

  The HTMLMediaElement.msInsertVideoEffect() method inserts the
  video effect into the media pipeline.

  `str = HTMLMediaElement.msInsertVideoEffect(activatableClassId: DOMString, effectRequired: boolean, config);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msInsertVideoEffect`"
  [this & args]
  (apply (-> this .-msInsertVideoEffect) (concat [this] args)))

(defn ms-horizontal-mirror
  "Property.

  msHorizontalMirror is a read/write property which gets or sets
  a video element is flipped horizontally in the display.

  `HTMLVideoElement.msHorizontalMirror: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msHorizontalMirror`"
  [this]
  (-> this (.msHorizontalMirror)))

(defn set-ms-horizontal-mirror!
  "Property.

  msHorizontalMirror is a read/write property which gets or sets
  a video element is flipped horizontally in the display.

  `HTMLVideoElement.msHorizontalMirror: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msHorizontalMirror`"
  [this val]
  (aset this "msHorizontalMirror" val))

(defn ms-is-layout-optimal-for-playback
  "Property.

  msIsLayoutOptimalForPlayback is a read-only property which indicates
  the video can be rendered more efficiently.

  `HTMLVideoElement.msIsLayoutOptimalForPlayback: DOMString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback`"
  [this]
  (-> this (.msIsLayoutOptimalForPlayback)))

(defn set-ms-is-layout-optimal-for-playback!
  "Property.

  msIsLayoutOptimalForPlayback is a read-only property which indicates
  the video can be rendered more efficiently.

  `HTMLVideoElement.msIsLayoutOptimalForPlayback: DOMString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback`"
  [this val]
  (aset this "msIsLayoutOptimalForPlayback" val))

(defn ms-is-stereo-3d
  "Property.

  msIsStereo3D is a read-only property which determines whether
  system considers the loaded video source to be stereo 3-D or

  `HTMLVideoElement.msIsStereo3D: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsStereo3D`"
  [this]
  (-> this (.msIsStereo3D)))

(defn set-ms-is-stereo-3d!
  "Property.

  msIsStereo3D is a read-only property which determines whether
  system considers the loaded video source to be stereo 3-D or

  `HTMLVideoElement.msIsStereo3D: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsStereo3D`"
  [this val]
  (aset this "msIsStereo3D" val))

(defn ms-zoom
  "Property.

  msZoom is a read/write property which gets or sets whether the
  frame is trimmed, on the top and bottom or left and right, to
  the video display.

  `HTMLVideoElement.msZoom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msZoom`"
  [this]
  (-> this (.msZoom)))

(defn set-ms-zoom!
  "Property.

  msZoom is a read/write property which gets or sets whether the
  frame is trimmed, on the top and bottom or left and right, to
  the video display.

  `HTMLVideoElement.msZoom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msZoom`"
  [this val]
  (aset this "msZoom" val))

(defn video-height
  "Property.

  The `html.HTMLVideoElement` interface's read-only videoHeight
  indicates the intrinsic height of the video, expressed in CSS
  In simple terms, this is the height of the media in its natural

  `height = htmlVideoElement.videoHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight`"
  [this]
  (-> this (.videoHeight)))

(defn video-width
  "Property.

  The `html.HTMLVideoElement` interface's read-only videoWidth
  indicates the intrinsic width of the video, expressed in CSS
  In simple terms, this is the width of the media in its natural

  `width = htmlVideoElement.videoWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth`"
  [this]
  (-> this (.videoWidth)))

