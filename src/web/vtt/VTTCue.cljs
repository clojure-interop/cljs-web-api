(ns web.vtt.VTTCue
  "This interface also inherits properties from `web.media.TextTrackCue`."
  (:refer-clojure :exclude []))

(defn get-cue-as-html
  "Method.

  Returns the cue text as a DocumentFragment."
  [this & args]
  (-> this .-getCueAsHTML (.apply this (clj->js args))))

(defn region
  "Property.

  A VTTRegion object describing the video's sub-region that the
  will be drawn onto, or null if none is assigned."
  [this]
  (-> this (.-region)))

(defn set-region!
  "Property.

  A VTTRegion object describing the video's sub-region that the
  will be drawn onto, or null if none is assigned."
  [this val]
  (aset this "region" val))

(defn vertical
  "Property.

  Returns an enum representing the cue writing direction."
  [this]
  (-> this (.-vertical)))

(defn set-vertical!
  "Property.

  Returns an enum representing the cue writing direction."
  [this val]
  (aset this "vertical" val))

(defn snap-to-lines
  "Property.

  Returns true if the VTTCue.line attribute is an integer number
  lines or a percentage of the video size."
  [this]
  (-> this (.-snapToLines)))

(defn set-snap-to-lines!
  "Property.

  Returns true if the VTTCue.line attribute is an integer number
  lines or a percentage of the video size."
  [this val]
  (aset this "snapToLines" val))

(defn line
  "Property.

  Returns the line positioning of the cue. This can be the string
  or a number whose interpretation depends on the value of VTTCue.snapToLines."
  [this]
  (-> this (.-line)))

(defn set-line!
  "Property.

  Returns the line positioning of the cue. This can be the string
  or a number whose interpretation depends on the value of VTTCue.snapToLines."
  [this val]
  (aset this "line" val))

(defn line-align
  "Property.

  Returns an enum representing the alignment of the VTTCue.line."
  [this]
  (-> this (.-lineAlign)))

(defn set-line-align!
  "Property.

  Returns an enum representing the alignment of the VTTCue.line."
  [this val]
  (aset this "lineAlign" val))

(defn position
  "Property.

  Returns the indentation of the cue within the line. This can
  the string auto or a number representing the percentage of the
  or the video size if VTTCue.region is null."
  [this]
  (-> this (.-position)))

(defn set-position!
  "Property.

  Returns the indentation of the cue within the line. This can
  the string auto or a number representing the percentage of the
  or the video size if VTTCue.region is null."
  [this val]
  (aset this "position" val))

(defn position-align
  "Property.

  Returns an enum representing the alignment of the cue. This is
  to determine what the VTTCue.position is anchored to. The default
  auto."
  [this]
  (-> this (.-positionAlign)))

(defn set-position-align!
  "Property.

  Returns an enum representing the alignment of the cue. This is
  to determine what the VTTCue.position is anchored to. The default
  auto."
  [this val]
  (aset this "positionAlign" val))

(defn size
  "Property.

  Returns a double representing the size of the cue, as a percentage
  the video size."
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  Returns a double representing the size of the cue, as a percentage
  the video size."
  [this val]
  (aset this "size" val))

(defn text-align
  "Property.

  Returns an enum representing the alignment of all the lines of
  within the cue box."
  [this]
  (-> this (.-textAlign)))

(defn set-text-align!
  "Property.

  Returns an enum representing the alignment of all the lines of
  within the cue box."
  [this val]
  (aset this "textAlign" val))

(defn text
  "Property.

  Returns a DOMString with the contents of the cue."
  [this]
  (-> this (.-text)))

(defn set-text!
  "Property.

  Returns a DOMString with the contents of the cue."
  [this val]
  (aset this "text" val))

