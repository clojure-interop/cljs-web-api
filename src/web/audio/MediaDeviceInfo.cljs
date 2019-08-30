(ns web.audio.MediaDeviceInfo
  "The MediaDevicesInfo interface contains information that describes
  single media input or output device."
  (:refer-clojure :exclude []))

(defn device-id
  "Property.

  [Read Only]
  [Experimental]

  The deviceId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is an identifier for the represented
  and is persisted across sessions.

  `var deviceID = MediaDeviceInfo.deviceId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId`"
  [this]
  (-> this (.-deviceId)))

(defn group-id
  "Property.

  [Read Only]

  The groupId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is a group identifier.

  `var groupID = mediaDeviceInfo.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/groupId`"
  [this]
  (-> this (.-groupId)))

(defn kind
  "Property.

  [Read Only]
  [Experimental]

  The kind readonly property of the `web.audio.MediaDeviceInfo`
  returns an enumerated value, that is either \\\"videoinput\\\", \\\"audioinput\\\"
  \\\"audiooutput\\\".

  `var kind = MediaDeviceInfo.kind`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/kind`"
  [this]
  (-> this (.-kind)))

(defn label
  "Property.

  [Read Only]

  The label readonlyinline property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString`, that is a label describing this
  (for example \\\"External USB Webcam\\\").

  `var label = MediaDeviceInfo.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/label`"
  [this]
  (-> this (.-label)))

