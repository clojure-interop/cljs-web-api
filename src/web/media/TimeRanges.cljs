(ns web.media.TimeRanges
  "The TimeRanges interface is used to represent a set of time ranges,
  for the purpose of tracking which portions of media have been
  when loading it for use by the `<audio>` and `<video>` elements."
  (:refer-clojure :exclude []))

(defn start
  "Method.

  Returns the time offset at which a specified time range begins.

  `startTime = TimeRanges.start(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges/start`"
  [this index]
  (-> this (.start index)))

(defn end
  "Method.

  Returns the time offset at which a specified time range ends.

  `endTime = TimeRanges.end(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges/end`"
  [this index]
  (-> this (.end index)))

(defn length
  "Property.

  The TimeRanges.length read-only property returns the number of
  in the object.

  `length = TimeRanges.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges/length`"
  [this]
  (-> this (.-length)))

