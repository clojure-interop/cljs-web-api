(ns web.rtc.RTCStats
  "The RTCStats dictionary is the basic statistics object used by
  statistics monitoring model, providing the properties required
  all statistics data objects."
  (:refer-clojure :exclude [type]))

(defn id
  "Property.

  The id property of the `web.rtc.RTCStats` dictionary is a string
  uniquely identifies the object for which this RTCStats object
  statistics.

  `var id = RTCStats.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  The id property of the `web.rtc.RTCStats` dictionary is a string
  uniquely identifies the object for which this RTCStats object
  statistics.

  `var id = RTCStats.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/id`"
  [this val]
  (aset this "id" val))

(defn timestamp
  "Property.

  The timestamp property of the `web.rtc.RTCStats` dictionary is
  `web.dom.DOMHighResTimeStamp` object specifying the time at which
  data in the object was sampled.

  `var timestamp = RTCStats.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/timestamp`"
  [this]
  (-> this (.-timestamp)))

(defn set-timestamp!
  "Property.

  The timestamp property of the `web.rtc.RTCStats` dictionary is
  `web.dom.DOMHighResTimeStamp` object specifying the time at which
  data in the object was sampled.

  `var timestamp = RTCStats.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/timestamp`"
  [this val]
  (aset this "timestamp" val))

(defn type
  "Property.

  The `web.rtc.RTCStats` dictionary's property type is a string
  specifies the type of statistic represented by the object, where
  permitted values are drawn from the enum type `web.rtc.RTCStatsType`.

  `var type = RTCStats.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The `web.rtc.RTCStats` dictionary's property type is a string
  specifies the type of statistic represented by the object, where
  permitted values are drawn from the enum type `web.rtc.RTCStatsType`.

  `var type = RTCStats.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/type`"
  [this val]
  (aset this "type" val))

