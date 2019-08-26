(ns web.media.HTMLMediaElement.ev
  "HTMLMediaElement Events."
  (:refer-clojure :exclude []))

(def abort
  "Event.

  The abort event is fired when the resource was not fully loaded,
  not as the result of an error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event`"

  "abort")

(def canplaythrough
  "Event.

  The canplaythrough event is fired when the user agent can play
  media, and estimates that enough data has been loaded to play
  media up to its end without having to stop for further buffering
  content.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event`"

  "canplaythrough")

(def error
  "Event.

  The error event is fired when the resource could not be loaded
  to an error (for example, a network connectivity problem).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/error_event`"

  "error")

(def loadeddata
  "Event.

  The loadeddata event is fired when the frame at the current playback
  of the media has finished loading; often the first frame.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event`"

  "loadeddata")

(def loadstart
  "Event.

  The loadstart event is fired when the browser has started to
  a resource.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadstart_event`"

  "loadstart")

(def play
  "Event.

  The play event is fired when the paused property is changed from
  to false, as a result of the play method, or the autoplay attribute.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event`"

  "play")

(def playing
  "Event.

  The playing event is fired when playback is ready to start after
  been paused or delayed due to lack of data.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playing_event`"

  "playing")

(def progress
  "Event.

  The progress event is fired periodically as the browser loads
  resource.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event`"

  "progress")

(def timeupdate
  "Event.

  The timeupdate event is fired when the time indicated by the
  attribute has been updated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event`"

  "timeupdate")

(def volumechange
  "Event.

  The volumechange event is fired when the volume has changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event`"

  "volumechange")

(def waiting
  "Event.

  The waiting event is fired when playback has stopped because
  a temporary lack of data.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event`"

  "waiting")

