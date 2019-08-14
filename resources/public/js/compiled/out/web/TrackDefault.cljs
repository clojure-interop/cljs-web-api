(ns web.TrackDefault
  "The TrackDefault interface provides a `web.SourceBuffer` with
  label, and language information for tracks that do not contain
  information in the initialization segments of a media chunk."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The TrackDefault() constructor of the `web.TrackDefault` interface constructs and returns a new TrackDefault object.

  type
  A `dom.DOMString` specifying a media segment data type for the `web.SourceBuffer` to contain. Can be audio, video, or text.
  language
  A `dom.DOMString` specifying a default language for the `web.SourceBuffer` to use when an initialization segment does not contain language information for a new track.
  label
  A `dom.DOMString` specifying a default label for the `web.SourceBuffer` to use when an initialization segment does not contain label information for a new track.
  kinds
  An array (sequence) of `dom.DOMString`s specifying default kinds for the `web.SourceBuffer` to use when an initialization segment does not contain kind information for a new track.
  byteStreamTrackID Optional
  A `dom.DOMString` specifying the ID of the specific track that the `web.SourceBuffer` should apply to. If not specified, this value will be an empty string and the SourceBuffer can contain any tracks of the specified type.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/TrackDefault`"
  js/TrackDefault)

(defn byte-stream-track-id
  "Property.

  The byteStreamTrackID read-only property of the `web.TrackDefault`
  returns the ID of the specific track that the `web.SourceBuffer`
  apply to.

  `var myID = TrackDefault.byteStreamTrackID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`"
  [this]
  (-> this (.byteStreamTrackID)))

(defn set-byte-stream-track-id!
  "Property.

  The byteStreamTrackID read-only property of the `web.TrackDefault`
  returns the ID of the specific track that the `web.SourceBuffer`
  apply to.

  `var myID = TrackDefault.byteStreamTrackID;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`"
  [this val]
  (aset this "byteStreamTrackID" val))

(defn kinds
  "Property.

  The kinds read-only property of the `web.TrackDefault` interface
  default kinds for an associated `web.SourceBuffer` to use when
  initialization segment does not contain label information for
  new track.

  `var mykinds = TrackDefault.kinds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`"
  [this]
  (-> this (.kinds)))

(defn set-kinds!
  "Property.

  The kinds read-only property of the `web.TrackDefault` interface
  default kinds for an associated `web.SourceBuffer` to use when
  initialization segment does not contain label information for
  new track.

  `var mykinds = TrackDefault.kinds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`"
  [this val]
  (aset this "kinds" val))

(defn label
  "Property.

  The label read-only property of the `web.TrackDefault` interface
  the default label for an associated `web.SourceBuffer` to use
  an initialization segment does not contain label information
  a new track.

  `var mylabel = TrackDefault.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`"
  [this]
  (-> this (.label)))

(defn set-label!
  "Property.

  The label read-only property of the `web.TrackDefault` interface
  the default label for an associated `web.SourceBuffer` to use
  an initialization segment does not contain label information
  a new track.

  `var mylabel = TrackDefault.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`"
  [this val]
  (aset this "label" val))

(defn language
  "Property.

  The language read-only property of the `web.TrackDefault` interface
  a default language for an associated `web.SourceBuffer` to use
  an initialization segment does not contain language information
  a new track.

  `var mylanguage = TrackDefault.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`"
  [this]
  (-> this (.language)))

(defn set-language!
  "Property.

  The language read-only property of the `web.TrackDefault` interface
  a default language for an associated `web.SourceBuffer` to use
  an initialization segment does not contain language information
  a new track.

  `var mylanguage = TrackDefault.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`"
  [this val]
  (aset this "language" val))

(defn type
  "Property.

  The type read-only property of the `web.TrackDefault` interface
  the type of track that this `web.SourceBuffer`'s media segment
  relates to (i.e. audio, video, or text track.)

  `var myType = TrackDefault.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.TrackDefault` interface
  the type of track that this `web.SourceBuffer`'s media segment
  relates to (i.e. audio, video, or text track.)

  `var myType = TrackDefault.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`"
  [this val]
  (aset this "type" val))

