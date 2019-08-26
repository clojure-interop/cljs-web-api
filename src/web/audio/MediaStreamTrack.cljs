(ns web.audio.MediaStreamTrack
  "The MediaStreamTrack interface represents a single media track
  a stream; typically, these are audio or video tracks, but other
  types may exist as well."
  (:refer-clojure :exclude [clone]))

(defn apply-constraints
  "Method.

  The applyConstraints() method of the `web.audio.MediaStreamTrack`
  applies a set of constraints to the track; these constraints
  the Web site or app establish ideal values and acceptable ranges
  values for the constrainable properties of the track, such as
  rate, dimensions, echo cancelation, and so forth.

  `var appliedPromise = MediaStreamTrack.applyConstraints(constraints);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/applyConstraints`"
  [this constraints]
  (-> this (.applyConstraints constraints)))

(defn clone
  "Method.

  The clone() method of the `web.audio.MediaStreamTrack` interface
  a duplicate of the MediaStreamTrack. This new MediaStreamTrack
  is identical except for its unique `id`.

  `var track = MediaStreamTrack.clone();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/clone`"
  [this ]
  (-> this (.clone)))

(defn get-capabilities
  "Method.

  The getCapabilities() method of the `web.audio.MediaStreamTrack`
  returns a `MediaTrackCapabilities` object which specifies the
  or range of values which each constrianable property, based upon
  platform and user agent.

  `var capabilities = MediaStreamTrack.getCapabilities();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getCapabilities`"
  [this ]
  (-> this (.getCapabilities)))

(defn get-constraints
  "Method.

  The getConstraints() method of the `web.audio.MediaStreamTrack`
  returns a `web.streams.MediaTrackConstraints` object containing
  set of constraints most recently established for the track using
  prior call to `applyConstraints()`. These constraints indicate
  and ranges of values that the Web site or application has specified
  required or acceptable for the included constrainable properties.

  `var constraints = MediaStreamTrack.getConstraints();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints`"
  [this ]
  (-> this (.getConstraints)))

(defn get-settings
  "Method.

  The getSettings() method of the `web.audio.MediaStreamTrack`
  returns a `web.audio.MediaTrackSettings` object containing the
  values of each of the constrainable properties for the current

  `var settings = MediaStreamTrack.getSettings();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings`"
  [this ]
  (-> this (.getSettings)))

(defn stop
  "Method.

  In short, the `web.audio.MediaStreamTrack` method stop() method
  the track.

  `MediaStreamTrack.stop();

  Calling stop() tells the user agent that the track's source—whatever that source may be, including files, network streams, or a local camera or microphone—is no longer needed by the MediaStreamTrack.  Since multiple tracks may use the same source (for example, if two tabs are using the device's microphone), the source itself isn't necessarily immediately stopped. It is instead disassociated from the track and the track object is stopped. Once no media tracks are using the source, the source may actually be completely stopped.

  Immediately after calling stop(), the `track` state is set to ended.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop`"
  [this & args]
  (apply (-> this .-stop) (concat [this] args)))

(defn content-hint
  "Property.

  A string that may be used by the web application to provide a
  as to what type of content the track contains to guide how it
  be treated by API consumers."
  [this]
  (-> this (.-contentHint)))

(defn set-content-hint!
  "Property.

  A string that may be used by the web application to provide a
  as to what type of content the track contains to guide how it
  be treated by API consumers."
  [this val]
  (aset this "contentHint" val))

(defn enabled
  "Property.

  The enabled property on the `web.audio.MediaStreamTrack` interface
  a Boolean value which is true if the track is allowed to render
  source stream or false if it is not. This can be used to intentionally
  a track.

  `var bool = track.enabled;
  track.enabled = [true | false];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled`"
  [this]
  (-> this (.-enabled)))

(defn set-enabled!
  "Property.

  The enabled property on the `web.audio.MediaStreamTrack` interface
  a Boolean value which is true if the track is allowed to render
  source stream or false if it is not. This can be used to intentionally
  a track.

  `var bool = track.enabled;
  track.enabled = [true | false];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled`"
  [this val]
  (aset this "enabled" val))

(defn id
  "Property.

  The read-only property MediaStreamTrack.id returns a `web.dom.DOMString`
  a unique identifier (GUID) for the track; it is generated by
  browser.

  `var id = track.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/id`"
  [this]
  (-> this (.-id)))

(defn isolated
  "Property.

  Returns a Boolean value which is true if the track is isolated;
  is, the track cannot be accessed by the document that owns the
  This happens when the peerIdentity property is set, or if the
  comes from a cross-origin source."
  [this]
  (-> this (.-isolated)))

(defn set-isolated!
  "Property.

  Returns a Boolean value which is true if the track is isolated;
  is, the track cannot be accessed by the document that owns the
  This happens when the peerIdentity property is set, or if the
  comes from a cross-origin source."
  [this val]
  (aset this "isolated" val))

(defn kind
  "Property.

  The read-only property MediaStreamTrack.kind returns a `web.dom.DOMString`
  to \\\"audio\\\" if the track is an audio track and to \\\"video\\\",
  it is a video track. It doesn't change if the track is deassociated
  its source.

  `var type = track.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/kind`"
  [this]
  (-> this (.-kind)))

(defn label
  "Property.

  The read-only property MediaStreamTrack.label returns a `web.dom.DOMString`
  a user agent-assigned label that identifies the track source,
  in \\\"internal microphone\\\". The string may be left empty and
  empty as long as no source has been connected. When the track
  deassociated from its source, the label is not changed.

  `var name = track.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/label`"
  [this]
  (-> this (.-label)))

(defn muted
  "Property.

  The muted read-only property of the `web.audio.MediaStreamTrack`
  returns a `js.Boolean` value indicating whether or not the track
  currently unable to provide media output.

  `mutedFlag = MediaStreamTrack.muted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/muted`"
  [this]
  (-> this (.-muted)))

(defn set-muted!
  "Property.

  The muted read-only property of the `web.audio.MediaStreamTrack`
  returns a `js.Boolean` value indicating whether or not the track
  currently unable to provide media output.

  `mutedFlag = MediaStreamTrack.muted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/muted`"
  [this val]
  (aset this "muted" val))

(defn readonly
  "Property.

  Returns a Boolean value with a value of true if the track is
  (such a video file source or a camera that settings can't be
  false otherwise."
  [this]
  (-> this (.-readonly)))

(defn set-readonly!
  "Property.

  Returns a Boolean value with a value of true if the track is
  (such a video file source or a camera that settings can't be
  false otherwise."
  [this val]
  (aset this "readonly" val))

(defn ready-state
  "Property.

  The read-only property MediaStreamTrack.readyState returns an
  value giving the status of the track.

  `var state = track.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/readyState`"
  [this]
  (-> this (.-readyState)))

(defn remote
  "Property.

  The MediaStreamTrack.remote read-only property allows Javascript
  know whether a WebRTC MediaStreamTrack is from a remote source
  a local one. It returns a `js.Boolean` with a value of true if
  track is sourced remotely (that is, sourced by an RTCPeerConnection),
  false if it is sourced locally.

  `var bool ​= track.remote;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/remote`"
  [this]
  (-> this (.-remote)))

(defn onended
  "Property.

  The MediaStreamTrack.onended event handler is used to specify
  function which serves as an `EventHandler` to be called when
  ended event occurs on the track. This event occurs when the track
  no longer provide data to the stream for any reason, including
  end of the media input being reached, the user revoking needed
  the source device being removed, or the remote peer ending a

  `MediaStreamTrack.onended = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended`"
  [this]
  (-> this (.-onended)))

(defn set-onended!
  "Property.

  The MediaStreamTrack.onended event handler is used to specify
  function which serves as an `EventHandler` to be called when
  ended event occurs on the track. This event occurs when the track
  no longer provide data to the stream for any reason, including
  end of the media input being reached, the user revoking needed
  the source device being removed, or the remote peer ending a

  `MediaStreamTrack.onended = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended`"
  [this val]
  (aset this "onended" val))

(defn onmute
  "Property.

  `web.audio.MediaStreamTrack`'s onmute event handler is called
  the mute event is received.

  `track.onmute = muteHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onmute`"
  [this]
  (-> this (.-onmute)))

(defn set-onmute!
  "Property.

  `web.audio.MediaStreamTrack`'s onmute event handler is called
  the mute event is received.

  `track.onmute = muteHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onmute`"
  [this val]
  (aset this "onmute" val))

(defn onoverconstrained
  "Property.

  The MediaStreamTrack.onoverconstrained event handler is a property
  when the overconstrained event is received. Such an event is
  when the track is again able to send data.

  `track.onoverconstrained = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onoverconstrained`"
  [this]
  (-> this (.-onoverconstrained)))

(defn set-onoverconstrained!
  "Property.

  The MediaStreamTrack.onoverconstrained event handler is a property
  when the overconstrained event is received. Such an event is
  when the track is again able to send data.

  `track.onoverconstrained = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onoverconstrained`"
  [this val]
  (aset this "onoverconstrained" val))

(defn onunmute
  "Property.

  `web.audio.MediaStreamTrack`'s onunmute event handler is called
  the unmute event is received. Such an event is sent when the
  is again able to send data.

  `track.onunmute = unmuteHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onunmute`"
  [this]
  (-> this (.-onunmute)))

(defn set-onunmute!
  "Property.

  `web.audio.MediaStreamTrack`'s onunmute event handler is called
  the unmute event is received. Such an event is sent when the
  is again able to send data.

  `track.onunmute = unmuteHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onunmute`"
  [this val]
  (aset this "onunmute" val))

