(ns web.media.TextTrack
  "This interface also inherits properties from `web.EventTarget`."
  (:refer-clojure :exclude []))

(defn add-cue
  "Method.

  Adds a cue (specified as a TextTrackCue object to the track's
  of cues."
  [this & args]
  (apply (-> this .-addCue) (concat [this] args)))

(defn active-cues
  "Property.

  A TextTrackCueList object listing the currently active set of
  track cues. Track cues are active if the current playback position
  the media is between the cues' start and end times. Thus, for
  cues such as captions or subtitles, the active cues are currently
  displayed."
  [this]
  (-> this (.activeCues)))

(defn set-active-cues!
  "Property.

  A TextTrackCueList object listing the currently active set of
  track cues. Track cues are active if the current playback position
  the media is between the cues' start and end times. Thus, for
  cues such as captions or subtitles, the active cues are currently
  displayed."
  [this val]
  (aset this "activeCues" val))

(defn mode
  "Property.

  The `web.media.TextTrack` interface's mode property is a string
  and controlling the text track's mode: disabled, hidden, or showing.

  `var mode = textTrack.mode;

  textTrack.mode = \\\"disabled\\\" | \\\"hidden\\\" | \\\"showing\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The `web.media.TextTrack` interface's mode property is a string
  and controlling the text track's mode: disabled, hidden, or showing.

  `var mode = textTrack.mode;

  textTrack.mode = \\\"disabled\\\" | \\\"hidden\\\" | \\\"showing\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/mode`"
  [this val]
  (aset this "mode" val))

