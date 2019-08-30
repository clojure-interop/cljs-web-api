(ns web.audio.MediaKeySystemAccess
  "The MediaKeySystemAccess interface of the EncryptedMediaExtensions
  provides access to a Key System for decryption and/or a content
  provider. You can request an instance of this object using the
  method."
  (:refer-clojure :exclude []))

(defn create-media-keys
  "Method.

  [Experimental]

  The MediaKeySystemAccess.createMediaKeys() method returns a `js.Promise`
  resolves to a new `web.audio.MediaKeys` object.

  `var mediaKeys = mediaKeySystemAccess.createMediaKeys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/createMediaKeys`"
  [this ]
  (-> this (.createMediaKeys)))

(defn get-configuration
  "Method.

  [Experimental]

  The MediaKeySystemAccess.getConfiguration() method returns a
  object with the supported combination of configuration options.

  `var mediaKeySystemConfiguration = mediaKeySystemAccess.getConfiguration();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/getConfiguration`"
  [this ]
  (-> this (.getConfiguration)))

(defn key-system
  "Property.

  [Read Only]
  [Experimental]

  The MediaKeySystemAccess.keySystem read-only property returns
  `web.dom.DOMString` identifying the key system being used.

  `var keySystem = mediaKeySystemAccess.keySystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/keySystem`"
  [this]
  (-> this (.-keySystem)))

