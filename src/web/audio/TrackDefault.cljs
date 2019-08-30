(ns web.audio.TrackDefault
  "The TrackDefault interface provides a `web.audio.SourceBuffer`
  kind, label, and language information for tracks that do not
  this information in the initialization segments of a media chunk."
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The type read-only property of the `web.audio.TrackDefault` interface
  the type of track that this `web.audio.SourceBuffer`'s media
  data relates to (i.e. audio, video, or text track.)

  `var myType = TrackDefault.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`"
  [this]
  (-> this (.-type)))

(defn byte-stream-track-id
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The byteStreamTrackID read-only property of the `web.audio.TrackDefault`
  returns the ID of the specific track that the `web.audio.SourceBuffer`
  apply to.

  `var myID = TrackDefault.byteStreamTrackID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`"
  [this]
  (-> this (.-byteStreamTrackID)))

(defn language
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The language read-only property of the `web.audio.TrackDefault`
  returns a default language for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain language
  for a new track.

  `var mylanguage = TrackDefault.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`"
  [this]
  (-> this (.-language)))

(defn label
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The label read-only property of the `web.audio.TrackDefault`
  returns the default label for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mylabel = TrackDefault.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`"
  [this]
  (-> this (.-label)))

(defn kinds
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The kinds read-only property of the `web.audio.TrackDefault`
  returns default kinds for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mykinds = TrackDefault.kinds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`"
  [this]
  (-> this (.-kinds)))

