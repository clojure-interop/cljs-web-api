(ns web.audio.MediaDeviceInfo
  "The MediaDevicesInfo interface contains information that describes
  single media input or output device."
  (:refer-clojure :exclude []))

(defn device-id
  "Property.

  The deviceId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is an identifier for the represented
  and is persisted across sessions.

  `var deviceID = MediaDeviceInfo.deviceId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId`"
  [this]
  (-> this (.deviceId)))

(defn set-device-id!
  "Property.

  The deviceId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is an identifier for the represented
  and is persisted across sessions.

  `var deviceID = MediaDeviceInfo.deviceId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn group-id
  "Property.

  The groupId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is a group identifier.

  `var groupID = mediaDeviceInfo.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/groupId`"
  [this]
  (-> this (.groupId)))

(defn set-group-id!
  "Property.

  The groupId readonly property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString` that is a group identifier.

  `var groupID = mediaDeviceInfo.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/groupId`"
  [this val]
  (aset this "groupId" val))

(defn kind
  "Property.

  The kind readonly property of the `web.audio.MediaDeviceInfo`
  returns an enumerated value, that is either \\\"videoinput\\\", \\\"audioinput\\\"
  \\\"audiooutput\\\".

  `var kind = MediaDeviceInfo.kind`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/kind`"
  [this]
  (-> this (.kind)))

(defn set-kind!
  "Property.

  The kind readonly property of the `web.audio.MediaDeviceInfo`
  returns an enumerated value, that is either \\\"videoinput\\\", \\\"audioinput\\\"
  \\\"audiooutput\\\".

  `var kind = MediaDeviceInfo.kind`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/kind`"
  [this val]
  (aset this "kind" val))

(defn label
  "Property.

  The label readonlyinline property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString`, that is a label describing this
  (for example \\\"External USB Webcam\\\").

  `var label = MediaDeviceInfo.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/label`"
  [this]
  (-> this (.label)))

(defn set-label!
  "Property.

  The label readonlyinline property of the `web.audio.MediaDeviceInfo`
  returns a `web.dom.DOMString`, that is a label describing this
  (for example \\\"External USB Webcam\\\").

  `var label = MediaDeviceInfo.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/label`"
  [this val]
  (aset this "label" val))

