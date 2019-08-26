(ns web.audio.MediaDevices
  "The MediaDevices interface provides access to connected media
  devices like cameras and microphones, as well as screen sharing.
  essence, it lets you obtain access to any hardware source of
  data."
  (:refer-clojure :exclude []))

(defn enumerate-devices
  "Method.

  The `web.audio.MediaDevices` method enumerateDevices() requests
  list of the available media input and output devices, such as
  cameras, headsets, and so forth.

  `var enumeratorPromise = navigator.mediaDevices.enumerateDevices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices`"
  [this ]
  (-> this (.enumerateDevices)))

(defn get-display-media
  "Method.

  The `web.audio.MediaDevices` interface's getDisplayMedia() method
  the user to select and grant permission to capture the contents
  a display or portion thereof (such as a window) as a `web.streams.MediaStream`.

  `var promise = navigator.mediaDevices.getDisplayMedia(constraints);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia`"
  [this constraints]
  (-> this (.getDisplayMedia constraints)))

(defn get-supported-constraints
  "Method.

  The getSupportedConstraints() method of the `web.audio.MediaDevices`
  returns an object based on the `web.streams.MediaTrackSupportedConstraints`
  whose member fields each specify one of the constrainable properties
  user agent understands.

  `var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getSupportedConstraints`"
  [this ]
  (-> this (.getSupportedConstraints)))

(defn get-user-media
  "Method.

  The `web.audio.MediaDevices`.getUserMedia() method prompts the
  for permission to use a media input which produces a `web.streams.MediaStream`
  tracks containing the requested types of media.

  `var promise = navigator.mediaDevices.getUserMedia(constraints);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia`"
  [this constraints]
  (-> this (.getUserMedia constraints)))

(defn ondevicechange
  "Property.

  The MediaDevices.ondevicechange property is an `EventHandler`
  specifies a function to be called when the devicechange event
  on a `web.audio.MediaDevices` instance. This happens whenever
  set of media devices available to the user agent and, by extension,
  the web site or app has changed. You can at any time use `enumerateDevices()`
  get the updated list of available devices.

  `MediaDevices.ondevicechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`"
  [this]
  (-> this (.ondevicechange)))

(defn set-ondevicechange!
  "Property.

  The MediaDevices.ondevicechange property is an `EventHandler`
  specifies a function to be called when the devicechange event
  on a `web.audio.MediaDevices` instance. This happens whenever
  set of media devices available to the user agent and, by extension,
  the web site or app has changed. You can at any time use `enumerateDevices()`
  get the updated list of available devices.

  `MediaDevices.ondevicechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`"
  [this val]
  (aset this "ondevicechange" val))

