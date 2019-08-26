(ns web.dom.HTMLTrackElement
  "The HTMLTrackElement interface represents an HTML `<track>` element
  the DOM. This element can be used as a child of either `<audio>`
  `<video>` to specify a text track containing information such
  closed captions or subtitles."
  (:refer-clojure :exclude []))

(defn kind
  "Property.

  Is a DOMString that reflects the kind HTML attribute, indicating
  the text track is meant to be used. Possible values are: subtitles,
  descriptions, chapters, or metadata."
  [this]
  (-> this (.-kind)))

(defn set-kind!
  "Property.

  Is a DOMString that reflects the kind HTML attribute, indicating
  the text track is meant to be used. Possible values are: subtitles,
  descriptions, chapters, or metadata."
  [this val]
  (aset this "kind" val))

(defn src
  "Property.

  The HTMLTrackElement.src property reflects the value of the `<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  The HTMLTrackElement.src property reflects the value of the `<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this val]
  (aset this "src" val))

(defn srclang
  "Property.

  Is a DOMString that reflects the srclang HTML attribute, indicating
  language of the text track data."
  [this]
  (-> this (.-srclang)))

(defn set-srclang!
  "Property.

  Is a DOMString that reflects the srclang HTML attribute, indicating
  language of the text track data."
  [this val]
  (aset this "srclang" val))

(defn label
  "Property.

  Is a DOMString that reflects the label HTML attribute, indicating
  user-readable title for the track."
  [this]
  (-> this (.-label)))

(defn set-label!
  "Property.

  Is a DOMString that reflects the label HTML attribute, indicating
  user-readable title for the track."
  [this val]
  (aset this "label" val))

(defn default
  "Property.

  A Boolean reflecting the default attribute, indicating that the
  is to be enabled if the user's preferences do not indicate that
  track would be more appropriate."
  [this]
  (-> this (.-default)))

(defn set-default!
  "Property.

  A Boolean reflecting the default attribute, indicating that the
  is to be enabled if the user's preferences do not indicate that
  track would be more appropriate."
  [this val]
  (aset this "default" val))

(defn ready-state
  "Property.

  Returns an unsigned short that show the readiness state of the
  Constant
  Value
  Description
  NONE
  0
  Indicates that the text track's cues have not been obtained.
  LOADING
  1
  Indicates that the text track is loading and there have been
  fatal errors encountered so far. Further cues might still be
  to the track by the parser.
  LOADED
  2
  Indicates that the text track has been loaded with no fatal
  ERROR
  3
  Indicates that the text track was enabled, but when the user
  attempted to obtain it, this failed in some way. Some or all
  the cues are likely missing and will not be obtained."
  [this]
  (-> this (.-readyState)))

(defn set-ready-state!
  "Property.

  Returns an unsigned short that show the readiness state of the
  Constant
  Value
  Description
  NONE
  0
  Indicates that the text track's cues have not been obtained.
  LOADING
  1
  Indicates that the text track is loading and there have been
  fatal errors encountered so far. Further cues might still be
  to the track by the parser.
  LOADED
  2
  Indicates that the text track has been loaded with no fatal
  ERROR
  3
  Indicates that the text track was enabled, but when the user
  attempted to obtain it, this failed in some way. Some or all
  the cues are likely missing and will not be obtained."
  [this val]
  (aset this "readyState" val))

(defn track
  "Property.

  Returns TextTrack is the track element's text track data."
  [this]
  (-> this (.-track)))

(defn set-track!
  "Property.

  Returns TextTrack is the track element's text track data."
  [this val]
  (aset this "track" val))

