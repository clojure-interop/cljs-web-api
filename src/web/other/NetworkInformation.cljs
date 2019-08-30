(ns web.other.NetworkInformation
  "The NetworkInformation interface provides information about the
  a device is using to communicate with the network and provides
  means for scripts to be notified if the connection type changes.
  NetworkInformation interfaces cannot be instantiated. It is instead
  through the connection property of the `web.performance.Navigator`"
  (:refer-clojure :exclude [type]))

(defn downlink
  "Property.

  [Read Only]
  [Experimental]

  The downlink read-only property of the `web.other.NetworkInformation`
  returns the effective bandwidth estimate in megabits per second,
  to the nearest multiple of 25 kilobits per seconds. This value
  based on recently observed application layer throughput across
  active connections, excluding connections made to a private address
  In the absence of recent bandwidth measurement data, the attribute
  is determined by the properties of the underlying connection

  `var downLink = NetworkInformation.downlink`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink`"
  [this]
  (-> this (.-downlink)))

(defn downlink-max
  "Property.

  [Read Only]
  [Experimental]

  The NetworkInformation.downlinkMax read-only property returns
  maximum downlink speed, in megabits per second (Mbps), for the
  connection technology.

  `var max = NetworkInformation.downlinkMax`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlinkMax`"
  [this]
  (-> this (.-downlinkMax)))

(defn effective-type
  "Property.

  [Read Only]
  [Experimental]

  The effectiveType read-only property of the `web.other.NetworkInformation`
  returns the effective type of the connection meaning one of 'slow-2g',
  '3g', or '4g'. This value is determined using a combination of
  observed, round-trip time and downlink values.

  `var effectiveType = NetworkInformation.effectiveType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType`"
  [this]
  (-> this (.-effectiveType)))

(defn rtt
  "Property.

  [Read Only]
  [Experimental]

  The NetworkInformation.rtt read-only property returns the estimated
  round-trip time of the current connection, rounded to the nearest
  of 25 milliseconds. This value is based on recently observed
  RTT measurements across recently active connections. It excludes
  made to a private address space. If no recent measurement data
  available, the value is based on the properties of the underlying
  technology.

  `rtt = NetworkInformation.rtt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt`"
  [this]
  (-> this (.-rtt)))

(defn save-data
  "Property.

  [Read Only]
  [Experimental]

  The NetworkInformation.saveData read-only property of the `web.other.NetworkInformation`
  returns true if the user has set a reduced data usage option
  the user agent.

  `var saveData = NetworkInformation.saveData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData`"
  [this]
  (-> this (.-saveData)))

(defn type
  "Property.

  [Read Only]
  [Experimental]

  The NetworkInformation.type read-only property returns the type
  connection a device is using to communicate with the network.

  `var type = netInfo.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/type`"
  [this]
  (-> this (.-type)))

(defn onchange
  "Property.

  [Experimental]

  The NetworkInformation.onchange event handler contains the code
  is fired when connection information changes, and the change
  received by the `web.other.NetworkInformation` object.

  `netInfo.onchange = function() { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  [Experimental]

  The NetworkInformation.onchange event handler contains the code
  is fired when connection information changes, and the change
  received by the `web.other.NetworkInformation` object.

  `netInfo.onchange = function() { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/onchange`"
  [this val]
  (aset this "onchange" val))

