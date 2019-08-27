(ns web.video.HTMLVideoElement
  "The HTMLVideoElement interface provides special properties and
  for manipulating video objects. It also inherits properties and
  of `web.media.HTMLMediaElement` and `web.dom.HTMLElement`."
  (:refer-clojure :exclude []))

(defn get-video-playback-quality
  "Method.

  The `web.video.HTMLVideoElement` method getVideoPlaybackQuality()
  and returns a `web.video.VideoPlaybackQuality` object containing
  including how many frames have been lost.

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
  (-> this .-msInsertVideoEffect (.apply this (clj->js args))))

(defn height
  "Property.

  Is a DOMString that reflects the height HTML attribute, which
  the height of the display area, in CSS pixels."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  Is a DOMString that reflects the height HTML attribute, which
  the height of the display area, in CSS pixels."
  [this val]
  (aset this "height" val))

(defn poster
  "Property.

  Is a DOMString that reflects the poster HTML attribute, which
  an image to show while no video data is available."
  [this]
  (-> this (.-poster)))

(defn set-poster!
  "Property.

  Is a DOMString that reflects the poster HTML attribute, which
  an image to show while no video data is available."
  [this val]
  (aset this "poster" val))

(defn video-height
  "Property.

  The `web.video.HTMLVideoElement` interface's read-only videoHeight
  indicates the intrinsic height of the video, expressed in CSS
  In simple terms, this is the height of the media in its natural

  `height = htmlVideoElement.videoHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight`"
  [this]
  (-> this (.-videoHeight)))

(defn video-width
  "Property.

  The `web.video.HTMLVideoElement` interface's read-only videoWidth
  indicates the intrinsic width of the video, expressed in CSS
  In simple terms, this is the width of the media in its natural

  `width = htmlVideoElement.videoWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth`"
  [this]
  (-> this (.-videoWidth)))

(defn width
  "Property.

  Is a DOMString that reflects the width HTML attribute, which
  the width of the display area, in CSS pixels."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Is a DOMString that reflects the width HTML attribute, which
  the width of the display area, in CSS pixels."
  [this val]
  (aset this "width" val))

(defn moz-parsed-frames
  "Property.

  Returns an unsigned long with the count of video frames that
  been parsed from the media resource."
  [this]
  (-> this (.-mozParsedFrames)))

(defn set-moz-parsed-frames!
  "Property.

  Returns an unsigned long with the count of video frames that
  been parsed from the media resource."
  [this val]
  (aset this "mozParsedFrames" val))

(defn moz-decoded-frames
  "Property.

  Returns an unsigned long with the count of parsed video frames
  have been decoded into images."
  [this]
  (-> this (.-mozDecodedFrames)))

(defn set-moz-decoded-frames!
  "Property.

  Returns an unsigned long with the count of parsed video frames
  have been decoded into images."
  [this val]
  (aset this "mozDecodedFrames" val))

(defn moz-presented-frames
  "Property.

  Returns an unsigned long with the count of decoded frames that
  been presented to the rendering pipeline for painting."
  [this]
  (-> this (.-mozPresentedFrames)))

(defn set-moz-presented-frames!
  "Property.

  Returns an unsigned long with the count of decoded frames that
  been presented to the rendering pipeline for painting."
  [this val]
  (aset this "mozPresentedFrames" val))

(defn moz-painted-frames
  "Property.

  Returns an unsigned long with the count of presented frames which
  painted on the screen."
  [this]
  (-> this (.-mozPaintedFrames)))

(defn set-moz-painted-frames!
  "Property.

  Returns an unsigned long with the count of presented frames which
  painted on the screen."
  [this val]
  (aset this "mozPaintedFrames" val))

(defn moz-frame-delay
  "Property.

  Returns an double with the time which the last painted video
  was late by, in seconds."
  [this]
  (-> this (.-mozFrameDelay)))

(defn set-moz-frame-delay!
  "Property.

  Returns an double with the time which the last painted video
  was late by, in seconds."
  [this val]
  (aset this "mozFrameDelay" val))

(defn moz-has-audio
  "Property.

  Returns a boolean indicating if there is some audio associated
  the video."
  [this]
  (-> this (.-mozHasAudio)))

(defn set-moz-has-audio!
  "Property.

  Returns a boolean indicating if there is some audio associated
  the video."
  [this val]
  (aset this "mozHasAudio" val))

(defn ms-horizontal-mirror
  "Property.

  msHorizontalMirror is a read/write property which gets or sets
  a video element is flipped horizontally in the display.

  `HTMLVideoElement.msHorizontalMirror: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msHorizontalMirror`"
  [this]
  (-> this (.-msHorizontalMirror)))

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
  (-> this (.-msIsLayoutOptimalForPlayback)))

(defn set-ms-is-layout-optimal-for-playback!
  "Property.

  msIsLayoutOptimalForPlayback is a read-only property which indicates
  the video can be rendered more efficiently.

  `HTMLVideoElement.msIsLayoutOptimalForPlayback: DOMString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback`"
  [this val]
  (aset this "msIsLayoutOptimalForPlayback" val))

(defn ms-is-stereo3d
  "Property.

  msIsStereo3D is a read-only property which determines whether
  system considers the loaded video source to be stereo 3-D or

  `HTMLVideoElement.msIsStereo3D: boolean;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsStereo3D`"
  [this]
  (-> this (.-msIsStereo3D)))

(defn set-ms-is-stereo3d!
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
  (-> this (.-msZoom)))

(defn set-ms-zoom!
  "Property.

  msZoom is a read/write property which gets or sets whether the
  frame is trimmed, on the top and bottom or left and right, to
  the video display.

  `HTMLVideoElement.msZoom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msZoom`"
  [this val]
  (aset this "msZoom" val))

