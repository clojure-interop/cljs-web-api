(ns web.audio.TrackDefault
  "The TrackDefault interface provides a `web.audio.SourceBuffer`
  kind, label, and language information for tracks that do not
  this information in the initialization segments of a media chunk."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The TrackDefault() constructor of the `web.audio.TrackDefault` interface constructs and returns a new TrackDefault object.

  type
  A `web.dom.DOMString` specifying a media segment data type for the `web.audio.SourceBuffer` to contain. Can be audio, video, or text.
  language
  A `web.dom.DOMString` specifying a default language for the `web.audio.SourceBuffer` to use when an initialization segment does not contain language information for a new track.
  label
  A `web.dom.DOMString` specifying a default label for the `web.audio.SourceBuffer` to use when an initialization segment does not contain label information for a new track.
  kinds
  An array (sequence) of `web.dom.DOMString`s specifying default kinds for the `web.audio.SourceBuffer` to use when an initialization segment does not contain kind information for a new track.
  byteStreamTrackID Optional
  A `web.dom.DOMString` specifying the ID of the specific track that the `web.audio.SourceBuffer` should apply to. If not specified, this value will be an empty string and the SourceBuffer can contain any tracks of the specified type.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/TrackDefault`"
  js/TrackDefault)

(defn type
  "Property.

  The type read-only property of the `web.audio.TrackDefault` interface
  the type of track that this `web.audio.SourceBuffer`'s media
  data relates to (i.e. audio, video, or text track.)

  `var myType = TrackDefault.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.audio.TrackDefault` interface
  the type of track that this `web.audio.SourceBuffer`'s media
  data relates to (i.e. audio, video, or text track.)

  `var myType = TrackDefault.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`"
  [this val]
  (aset this "type" val))

(defn byte-stream-track-id
  "Property.

  The byteStreamTrackID read-only property of the `web.audio.TrackDefault`
  returns the ID of the specific track that the `web.audio.SourceBuffer`
  apply to.

  `var myID = TrackDefault.byteStreamTrackID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`"
  [this]
  (-> this (.byteStreamTrackID)))

(defn set-byte-stream-track-id!
  "Property.

  The byteStreamTrackID read-only property of the `web.audio.TrackDefault`
  returns the ID of the specific track that the `web.audio.SourceBuffer`
  apply to.

  `var myID = TrackDefault.byteStreamTrackID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`"
  [this val]
  (aset this "byteStreamTrackID" val))

(defn kinds
  "Property.

  The kinds read-only property of the `web.audio.TrackDefault`
  returns default kinds for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mykinds = TrackDefault.kinds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`"
  [this]
  (-> this (.kinds)))

(defn set-kinds!
  "Property.

  The kinds read-only property of the `web.audio.TrackDefault`
  returns default kinds for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mykinds = TrackDefault.kinds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`"
  [this val]
  (aset this "kinds" val))

(defn label
  "Property.

  The label read-only property of the `web.audio.TrackDefault`
  returns the default label for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mylabel = TrackDefault.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`"
  [this]
  (-> this (.label)))

(defn set-label!
  "Property.

  The label read-only property of the `web.audio.TrackDefault`
  returns the default label for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain label information
  a new track.

  `var mylabel = TrackDefault.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`"
  [this val]
  (aset this "label" val))

(defn language
  "Property.

  The language read-only property of the `web.audio.TrackDefault`
  returns a default language for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain language
  for a new track.

  `var mylanguage = TrackDefault.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`"
  [this]
  (-> this (.language)))

(defn set-language!
  "Property.

  The language read-only property of the `web.audio.TrackDefault`
  returns a default language for an associated `web.audio.SourceBuffer`
  use when an initialization segment does not contain language
  for a new track.

  `var mylanguage = TrackDefault.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`"
  [this val]
  (aset this "language" val))

