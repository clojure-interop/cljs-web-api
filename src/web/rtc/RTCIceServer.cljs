(ns web.rtc.RTCIceServer
  "The RTCIceServer dictionary defines how to connect to a single
  server (such as a STUN or TURN server). It includes both the
  and the necessary credentials, if any, to connect to the server."
  (:refer-clojure :exclude []))

(defn credential
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's credential property is
  string providing the credential to use when connecting to the
  server. This is typically a password, key, or other secret.

  `var iceServer = {
  ...
  credential = credential,
  ...
  };

  var credential = iceServer.credential;

  iceServer.credential = newCredential;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credential`"
  [this]
  (-> this (.-credential)))

(defn set-credential!
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's credential property is
  string providing the credential to use when connecting to the
  server. This is typically a password, key, or other secret.

  `var iceServer = {
  ...
  credential = credential,
  ...
  };

  var credential = iceServer.credential;

  iceServer.credential = newCredential;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credential`"
  [this val]
  (aset this "credential" val))

(defn credential-type
  "Property.

  The `web.rtc.RTCIceServer` dictionary's credentialType property
  a string value from the RTCIceCredentialType enum which indicates
  type of credential the `RTCIceServer.credential` value is. The
  is password.

  `var iceServer = {
  ...
  credentialType = newCredentialType,
  ...
  };

  var credentialType = iceServer.credentialType;

  iceServer.credentialType = newCredentialType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credentialType`"
  [this]
  (-> this (.-credentialType)))

(defn set-credential-type!
  "Property.

  The `web.rtc.RTCIceServer` dictionary's credentialType property
  a string value from the RTCIceCredentialType enum which indicates
  type of credential the `RTCIceServer.credential` value is. The
  is password.

  `var iceServer = {
  ...
  credentialType = newCredentialType,
  ...
  };

  var credentialType = iceServer.credentialType;

  iceServer.credentialType = newCredentialType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credentialType`"
  [this val]
  (aset this "credentialType" val))

(defn urls
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's urls property specifies
  URL or URLs of the servers to be used for ICE negotiations. These
  typically STUN and/or TURN servers.

  `var iceServer = {
  urls = iceServerUrl | [ url1, ..., urlN ],
  username: \\\"webrtc\\\", // optional
  credential: \\\"turnpassword\\\" // optional
  };

  iceServers.push(iceServer);

  The value of this property may be specified as a single URL or as an array of multiple URLs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/urls`"
  [this]
  (-> this (.-urls)))

(defn set-urls!
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's urls property specifies
  URL or URLs of the servers to be used for ICE negotiations. These
  typically STUN and/or TURN servers.

  `var iceServer = {
  urls = iceServerUrl | [ url1, ..., urlN ],
  username: \\\"webrtc\\\", // optional
  credential: \\\"turnpassword\\\" // optional
  };

  iceServers.push(iceServer);

  The value of this property may be specified as a single URL or as an array of multiple URLs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/urls`"
  [this val]
  (aset this "urls" val))

(defn username
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's username property is
  string which specifies the username to use when authenticating
  the ICE server being described.

  `var iceServer = {
  ...
  username = username,
  ...
  };

  var username = iceServer.username;

  iceServer.username = newUsername;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/username`"
  [this]
  (-> this (.-username)))

(defn set-username!
  "Property.

  [Draft]
  [Experimental]

  The `web.rtc.RTCIceServer` dictionary's username property is
  string which specifies the username to use when authenticating
  the ICE server being described.

  `var iceServer = {
  ...
  username = username,
  ...
  };

  var username = iceServer.username;

  iceServer.username = newUsername;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/username`"
  [this val]
  (aset this "username" val))

(defn url
  "Property.

  [Draft]
  [Experimental]
  [Obsolute]

  The obsolete `web.rtc.RTCIceServer` dictionary's url property
  the URL of a single ICE server to be used while negotiating connections.
  was removed from the specification in June 2013 but is still
  used in older examples and books, so we include documentation
  to help adapt old code to new browsers.

  `var iceServer = {
  ...
  url = iceServerUrl,
  ...
  };

  var serverUrl = iceServer.url;

  iceServer.url = iceServerUrl;

  The value of this property is a `web.dom.DOMString` containing the full URL of a server to use during ICE negotiation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`"
  [this]
  (-> this (.-url)))

(defn set-url!
  "Property.

  [Draft]
  [Experimental]
  [Obsolute]

  The obsolete `web.rtc.RTCIceServer` dictionary's url property
  the URL of a single ICE server to be used while negotiating connections.
  was removed from the specification in June 2013 but is still
  used in older examples and books, so we include documentation
  to help adapt old code to new browsers.

  `var iceServer = {
  ...
  url = iceServerUrl,
  ...
  };

  var serverUrl = iceServer.url;

  iceServer.url = iceServerUrl;

  The value of this property is a `web.dom.DOMString` containing the full URL of a server to use during ICE negotiation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`"
  [this val]
  (aset this "url" val))

