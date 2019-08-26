(ns web.media.MediaKeySystemConfiguration
  "The MediaKeySystemConfiguration interface Encrypted Media Extensions
  provides configuration information about the media key system."
  (:refer-clojure :exclude []))

(defn init-data-types
  "Property.

  The MediaKeySystemConfiguration.initDataTypes read-only property
  a list of supported initialization data type names. An initialization
  type is a string indicating the format of the initialization

  `var dataTypes[] = mediaSystemConfiguration.initDataTypes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/initDataTypes`"
  [this]
  (-> this (.-initDataTypes)))

(defn set-init-data-types!
  "Property.

  The MediaKeySystemConfiguration.initDataTypes read-only property
  a list of supported initialization data type names. An initialization
  type is a string indicating the format of the initialization

  `var dataTypes[] = mediaSystemConfiguration.initDataTypes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/initDataTypes`"
  [this val]
  (aset this "initDataTypes" val))

(defn audio-capabilities
  "Property.

  The MediaKeySystemConfiguration.audioCapabilities read-only property
  an array of supported audio type and capability pairs.

  `var audioCapabilities[ {contentType: 'contentType', robustness:'robustness'}] = mediaSystemConfiguration.audioCapabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/audioCapabilities`"
  [this]
  (-> this (.-audioCapabilities)))

(defn set-audio-capabilities!
  "Property.

  The MediaKeySystemConfiguration.audioCapabilities read-only property
  an array of supported audio type and capability pairs.

  `var audioCapabilities[ {contentType: 'contentType', robustness:'robustness'}] = mediaSystemConfiguration.audioCapabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/audioCapabilities`"
  [this val]
  (aset this "audioCapabilities" val))

(defn video-capabilities
  "Property.

  The MediaKeySystemConfiguration.videoCapabilities read-only property
  an array of supported video type and capability pairs.

  `var videoCapabilities[{contentType: 'contentType', robustness:'robustness'}] = mediaSystemConfiguration.videoCapabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/videoCapabilities`"
  [this]
  (-> this (.-videoCapabilities)))

(defn set-video-capabilities!
  "Property.

  The MediaKeySystemConfiguration.videoCapabilities read-only property
  an array of supported video type and capability pairs.

  `var videoCapabilities[{contentType: 'contentType', robustness:'robustness'}] = mediaSystemConfiguration.videoCapabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/videoCapabilities`"
  [this val]
  (aset this "videoCapabilities" val))

(defn distinctive-identifier
  "Property.

  The MediaKeySystemConfiguration.distinctiveIdentifier read-only
  indicates whether a persistent distinctive identifier is required.

  `var distinctiveIdentifier = mediaSystemConfiguration.distinctiveIdentifier;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/distinctiveIdentifier`"
  [this]
  (-> this (.-distinctiveIdentifier)))

(defn set-distinctive-identifier!
  "Property.

  The MediaKeySystemConfiguration.distinctiveIdentifier read-only
  indicates whether a persistent distinctive identifier is required.

  `var distinctiveIdentifier = mediaSystemConfiguration.distinctiveIdentifier;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/distinctiveIdentifier`"
  [this val]
  (aset this "distinctiveIdentifier" val))

(defn persistent-state
  "Property.

  The MediaKeySystemConfiguration.persistentState read-only property
  whether the ability to persist state is required.

  `var persistentState = mediaSystemConfiguration.persistentSTate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/persistentState`"
  [this]
  (-> this (.-persistentState)))

(defn set-persistent-state!
  "Property.

  The MediaKeySystemConfiguration.persistentState read-only property
  whether the ability to persist state is required.

  `var persistentState = mediaSystemConfiguration.persistentSTate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration/persistentState`"
  [this val]
  (aset this "persistentState" val))

