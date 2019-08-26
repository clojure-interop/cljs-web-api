(ns web.rtc.RTCIceParameters
  "The RTCIceParameters dictionary specifies the username fragment
  password assigned to an ICE session."
  (:refer-clojure :exclude []))

(defn username-fragment
  "Property.

  The `web.rtc.RTCIceParameters` dictionary's usernameFragment
  specifies the username fragment (\\\"ufrag\\\") that uniquely identifies
  corresponding ICE session for the duration of the current ICE

  `ufrag = RTCIceParameters.usernameFragment;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters/usernameFragment`"
  [this]
  (-> this (.usernameFragment)))

(defn set-username-fragment!
  "Property.

  The `web.rtc.RTCIceParameters` dictionary's usernameFragment
  specifies the username fragment (\\\"ufrag\\\") that uniquely identifies
  corresponding ICE session for the duration of the current ICE

  `ufrag = RTCIceParameters.usernameFragment;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters/usernameFragment`"
  [this val]
  (aset this "usernameFragment" val))

(defn password
  "Property.

  The `web.rtc.RTCIceParameters` dictionary's password property
  the ICE password that, in tandem with the `usernameFragment`,
  identifies an ICE session for its entire duration.

  `password = RTCIceParameters.password;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters/password`"
  [this]
  (-> this (.password)))

(defn set-password!
  "Property.

  The `web.rtc.RTCIceParameters` dictionary's password property
  the ICE password that, in tandem with the `usernameFragment`,
  identifies an ICE session for its entire duration.

  `password = RTCIceParameters.password;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters/password`"
  [this val]
  (aset this "password" val))

