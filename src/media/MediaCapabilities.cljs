(ns media.MediaCapabilities
  "The MediaCapabilities interface of the Media Capabilities API
  information about the decoding abilities of the device, system
  browser. The API can be used to query the browser about the decoding
  of the device based on codecs, profile, resolution, and bitrates.
  information can be used to serve optimal media streams to the
  and determine if playback should be smooth and power efficient."
  (:refer-clojure :exclude []))

(defn decoding-info
  "Method.

  The MediaCapabilities.decodingInfo() method, part of the Media
  API, returns a promise with the tested media configuration's
  this contains the three Boolean properties supported, smooth,
  powerefficient, which describe whether decoding the media described
  be supported, smooth, and powerefficient.

  `mediaCapabilities.decodingInfo(MediaDecodingConfiguration)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo`"
  [this media-decoding-configuration]
  (-> this (.decodingInfo media-decoding-configuration)))

(defn encoding-info
  "Method.

  The MediaCapabilities.encodingInfo() method, part of the `media.MediaCapabilities`
  of the Media Capabilities API, returns a promise with the tested
  configuration's `media.MediaCapabilitiesInfo`; this contains
  three Boolean properties supported, smooth, and powerefficient,
  describe how compatible the device is with the type of media.

  `mediaCapabilities.encodingInfo(mediaEncodingConfiguration)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/encodingInfo`"
  [this media-encoding-configuration]
  (-> this (.encodingInfo media-encoding-configuration)))

