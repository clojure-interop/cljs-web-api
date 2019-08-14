(ns html.HTMLMediaElement.ev
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

(def canplay
  "Event.

  The canplay event is fired when the user agent can play the media,
  estimates that not enough data has been loaded to play the media
  to its end without having to stop for further buffering of content.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event`"

  "canplay")

(def durationchange
  "Event.

  The durationchange event is fired when the duration attribute
  been updated.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/durationchange_event`"

  "durationchange")

(def emptied
  "Event.

  The emptied event is fired when the media has become empty; for
  this event is sent if the media has already been loaded (or partially
  and the load() method is called to reload it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/emptied_event`"

  "emptied")

(def ended
  "Event.

  The ended event is fired when playback or streaming has stopped
  the end of the media was reached or because no further data is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event`"

  "ended")

(def loadedmetadata
  "Event.

  The loadedmetadata event is fired when the metadata has been

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event`"

  "loadedmetadata")

(def pause
  "Event.

  The pause event is sent when a request to pause an activity is
  and the activity has entered its paused state, most commonly
  the media has been paused through a call to the element's `web.pause()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event`"

  "pause")

(def ratechange
  "Event.

  The ratechange event is fired when the playback rate has changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ratechange_event`"

  "ratechange")

(def seeked
  "Event.

  The seeked event is fired when a seek operation completed, the
  playback position has changed, and the Boolean seeking attribute
  changed to false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeked_event`"

  "seeked")

(def seeking
  "Event.

  The seeking event is fired when a seek operation starts, meaning
  Boolean seeking attribute has changed to true and the media is
  a new position.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event`"

  "seeking")

(def stalled
  "Event.

  The stalled event is fired when the user agent is trying to fetch
  data, but data is unexpectedly not forthcoming.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/stalled_event`"

  "stalled")

(def suspend
  "Event.

  The suspend event is fired when media data loading has been suspended.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/suspend_event`"

  "suspend")

