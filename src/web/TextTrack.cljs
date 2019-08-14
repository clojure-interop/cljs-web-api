(ns web.TextTrack
  "This interface also inherits properties from `web.EventTarget`."
  (:refer-clojure :exclude []))

(defn mode
  "Property.

  The `web.TextTrack` interface's mode property is a string specifying
  controlling the text track's mode: disabled, hidden, or showing.

  `var mode = textTrack.mode;

  textTrack.mode = \\\"disabled\\\" | \\\"hidden\\\" | \\\"showing\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The `web.TextTrack` interface's mode property is a string specifying
  controlling the text track's mode: disabled, hidden, or showing.

  `var mode = textTrack.mode;

  textTrack.mode = \\\"disabled\\\" | \\\"hidden\\\" | \\\"showing\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/mode`"
  [this val]
  (aset this "mode" val))

