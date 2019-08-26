(ns web.vtt.VTTCue
  "This interface also inherits properties from `web.media.TextTrackCue`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The VTTCue() constructor creates and returns a new `web.vtt.VTTCue` object.

  startTime
  This is a double representing the initial text track cue start time. This is the time, given in seconds and fractions of a second, denoting the beginning of the range of the media data to which this cue applies. For example, if a cue is to be visible from 50 seconds to a one minute, five and a half seconds in the media's playback, startTime will be 50.0.
  endTime
  This is a double representing the ending time for this text track cue. This is the time at which the cue should stop being presented to the user, given in seconds and fractions thereof. Given the example cue mentioned under startTime, the value of endTime would be 65.5.
  text
  A `web.dom.DOMString` providing the text that will be shown during the time span indicated by startTime and endTime.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/VTTCue`"
  js/VTTCue)

(defn get-cue-as-html
  "Method.

  Returns the cue text as a DocumentFragment."
  [this & args]
  (apply (-> this .-getCueAsHTML) (concat [this] args)))

(defn region
  "Property.

  A VTTRegion object describing the video's sub-region that the
  will be drawn onto, or null if none is assigned."
  [this]
  (-> this (.region)))

(defn set-region!
  "Property.

  A VTTRegion object describing the video's sub-region that the
  will be drawn onto, or null if none is assigned."
  [this val]
  (aset this "region" val))

