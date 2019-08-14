(ns rtc.RTCIceServer
  "The RTCIceServer dictionary defines how to connect to a single
  server (such as a STUN or TURN server). It includes both the
  and the necessary credentials, if any, to connect to the server."
  (:refer-clojure :exclude []))

(defn credential
  "Property.

  The `rtc.RTCIceServer` dictionary's credential property is a
  providing the credential to use when connecting to the described
  This is typically a password, key, or other secret.

  `var iceServer = {
  ...
  credential = credential,
  ...
  };

  var credential = iceServer.credential;

  iceServer.credential = newCredential;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credential`"
  [this]
  (-> this (.credential)))

(defn set-credential!
  "Property.

  The `rtc.RTCIceServer` dictionary's credential property is a
  providing the credential to use when connecting to the described
  This is typically a password, key, or other secret.

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

  The `rtc.RTCIceServer` dictionary's credentialType property is
  string value from the RTCIceCredentialType enum which indicates
  type of credential the `rtc.RTCIceServer.credential` value is.
  default is password.

  `var iceServer = {
  ...
  credentialType = newCredentialType,
  ...
  };

  var credentialType = iceServer.credentialType;

  iceServer.credentialType = newCredentialType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credentialType`"
  [this]
  (-> this (.credentialType)))

(defn set-credential-type!
  "Property.

  The `rtc.RTCIceServer` dictionary's credentialType property is
  string value from the RTCIceCredentialType enum which indicates
  type of credential the `rtc.RTCIceServer.credential` value is.
  default is password.

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

(defn url
  "Property.

  The obsolete `rtc.RTCIceServer` dictionary's url property specifies
  URL of a single ICE server to be used while negotiating connections.
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

  The value of this property is a `dom.DOMString` containing the full URL of a server to use during ICE negotiation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`"
  [this]
  (-> this (.url)))

(defn set-url!
  "Property.

  The obsolete `rtc.RTCIceServer` dictionary's url property specifies
  URL of a single ICE server to be used while negotiating connections.
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

  The value of this property is a `dom.DOMString` containing the full URL of a server to use during ICE negotiation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`"
  [this val]
  (aset this "url" val))

(defn urls
  "Property.

  The `rtc.RTCIceServer` dictionary's urls property specifies the
  or URLs of the servers to be used for ICE negotiations. These
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
  (-> this (.urls)))

(defn set-urls!
  "Property.

  The `rtc.RTCIceServer` dictionary's urls property specifies the
  or URLs of the servers to be used for ICE negotiations. These
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

  The `rtc.RTCIceServer` dictionary's username property is a string
  specifies the username to use when authenticating with the ICE
  being described.

  `var iceServer = {
  ...
  username = username,
  ...
  };

  var username = iceServer.username;

  iceServer.username = newUsername;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/username`"
  [this]
  (-> this (.username)))

(defn set-username!
  "Property.

  The `rtc.RTCIceServer` dictionary's username property is a string
  specifies the username to use when authenticating with the ICE
  being described.

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

