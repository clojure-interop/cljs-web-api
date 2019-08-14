(ns media.MediaDevices
  "The MediaDevices interface provides access to connected media
  devices like cameras and microphones, as well as screen sharing.
  essence, it lets you obtain access to any hardware source of
  data."
  (:refer-clojure :exclude []))

(defn enumerate-devices
  "Method.

  The `media.MediaDevices` method enumerateDevices() requests a
  of the available media input and output devices, such as microphones,
  headsets, and so forth.

  `var enumeratorPromise = navigator.mediaDevices.enumerateDevices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices`"
  [this ]
  (-> this (.enumerateDevices)))

(defn get-display-media
  "Method.

  The `media.MediaDevices` interface's getDisplayMedia() method
  the user to select and grant permission to capture the contents
  a display or portion thereof (such as a window) as a `media.MediaStream`.

  `var promise = navigator.mediaDevices.getDisplayMedia(constraints);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia`"
  [this constraints]
  (-> this (.getDisplayMedia constraints)))

(defn get-supported-constraints
  "Method.

  The getSupportedConstraints() method of the `media.MediaDevices`
  returns an object based on the `media.MediaTrackSupportedConstraints`
  whose member fields each specify one of the constrainable properties
  user agent understands.

  `var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getSupportedConstraints`"
  [this ]
  (-> this (.getSupportedConstraints)))

(defn get-user-media
  "Method.

  The `media.MediaDevices`.getUserMedia() method prompts the user
  permission to use a media input which produces a `media.MediaStream`
  tracks containing the requested types of media.

  `var promise = navigator.mediaDevices.getUserMedia(constraints);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia`"
  [this constraints]
  (-> this (.getUserMedia constraints)))

(defn ondevicechange
  "Property.

  The MediaDevices.ondevicechange property is an `web.EventHandler`
  specifies a function to be called when the devicechange event
  on a `media.MediaDevices` instance. This happens whenever the
  of media devices available to the user agent and, by extension,
  the web site or app has changed. You can at any time use `web.enumerateDevices()`
  get the updated list of available devices.

  `MediaDevices.ondevicechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`"
  [this]
  (-> this (.ondevicechange)))

(defn set-ondevicechange!
  "Property.

  The MediaDevices.ondevicechange property is an `web.EventHandler`
  specifies a function to be called when the devicechange event
  on a `media.MediaDevices` instance. This happens whenever the
  of media devices available to the user agent and, by extension,
  the web site or app has changed. You can at any time use `web.enumerateDevices()`
  get the updated list of available devices.

  `MediaDevices.ondevicechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`"
  [this val]
  (aset this "ondevicechange" val))

