(ns web.audio.RTCPeerConnection
  "The RTCPeerConnection interface represents a WebRTC connection
  the local computer and a remote peer. It provides methods to
  to a remote peer, maintain and monitor the connection, and close
  connection once it's no longer needed."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The RTCPeerConnection() constructor returns a newly-created `web.audio.RTCPeerConnection`, which represents a connection between the local device and a remote peer.

  configuration Optional
  An RTCConfiguration dictionary providing options to configure the new connection.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection`"
  js/RTCPeerConnection)

(defn add-ice-candidate
  "Method.

  When a web site or app using `web.audio.RTCPeerConnection` receives
  new ICE candidate from the remote peer over its signaling channel,
  delivers the newly-received candidate to the browser's ICE agent
  calling RTCPeerConnection.addIceCandidate().

  `aPromise = pc.addIceCandidate(candidate);

  addIceCandidate(candidate, successCallback, failureCallback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate`"
  [this & args]
  (apply (-> this .-addIceCandidate) (concat [this] args)))

(defn add-stream
  "Method.

  The obsolete `web.audio.RTCPeerConnection` method addStream()
  a `web.streams.MediaStream` as a local source of audio or video.
  of using this obsolete method, you should instead use `addTrack()`
  for each track you wish to send to the remote peer.

  `rtcPeerConnection.addStream(mediaStream);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream`"
  [this media-stream]
  (-> this (.addStream media-stream)))

(defn add-track
  "Method.

  The `web.audio.RTCPeerConnection` method addTrack() adds a new
  track to the set of tracks which will be transmitted to the other

  `rtpSender = rtcPeerConnection.addTrack(track, stream...);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addTrack`"
  [this & args]
  (apply (-> this .-addTrack) (concat [this] args)))

(defn close
  "Method.

  The RTCPeerConnection.close() method closes the current peer

  `peerConnection.close();

  This method has no parameters, and returns nothing.

  Calling this method terminates the RTCPeerConnection's ICE agent, ending any ongoing ICE processing and any active streams. This also releases any resources in use by the ICE agent, including TURN permissions. All `web.audio.RTCRtpSender` objects are considered to be stopped once this returns (they may still be in the process of stopping, but for all intents and purposes, they're stopped).

  Once this method returns, the signaling state as returned by `RTCPeerConnection.signalingState` is closed.

  Make sure that you delete all references to the previous `web.audio.RTCPeerConnection` before attempting to create a new one that connects to the same remote peer, as not doing so might result in some errors depending on the browser.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/close`"
  [this & args]
  (apply (-> this .-close) (concat [this] args)))

(defn create-answer
  "Method.

  The createAnswer() method on the `web.audio.RTCPeerConnection`
  creates an SDP answer to an offer received from a remote peer
  the offer/answer negotiation of a WebRTC connection. The answer
  information about any media already attached to the session,
  and options supported by the browser, and any ICE candidates
  gathered. The answer is delivered to the returned `js.Promise`,
  should then be sent to the source of the offer to continue the
  process.

  `aPromise = RTCPeerConnection.createAnswer([options]);

  RTCPeerConnection.createAnswer(successCallback, failureCallback[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer`"
  [this & args]
  (apply (-> this .-createAnswer) (concat [this] args)))

(defn create-data-channel
  "Method.

  The createDataChannel() method on the `web.audio.RTCPeerConnection`
  creates a new channel linked with the remote peer, over which
  kind of data may be transmitted.

  `dataChannel = RTCPeerConnection.createDataChannel(label[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel`"
  [this & args]
  (apply (-> this .-createDataChannel) (concat [this] args)))

(defn create-offer
  "Method.

  The createOffer() method of the `web.audio.RTCPeerConnection`
  initiates the creation of an SDP offer for the purpose of starting
  new WebRTC connection to a remote peer.

  `aPromise = myPeerConnection.createOffer([options]);

  myPeerConnection.createOffer(successCallback, failureCallback, [options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer`"
  [this & args]
  (apply (-> this .-createOffer) (concat [this] args)))

(defn generate-certificate
  "Method.

  The generateCertificate() method of the `web.audio.RTCPeerConnection`
  creates and stores an X.509 certificate and corresponding private
  then returns an `web.rtc.RTCCertificate`, providing access to

  `var cert = RTCPeerConnection.generateCertificate(keygenAlgorithm)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/generateCertificate`"
  [this keygen-algorithm]
  (-> this (.generateCertificate keygen-algorithm)))

(defn get-configuration
  "Method.

  The RTCPeerConnection.getConfiguration() method returns an `web.rtc.RTCConfiguration`
  which indicates the current configuration of the `web.audio.RTCPeerConnection`
  which the method is called.

  `var configuration = RTCPeerConnection.getConfiguration();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getConfiguration`"
  [this ]
  (-> this (.getConfiguration)))

(defn get-identity-assertion
  "Method.

  The RTCPeerConnection.getIdentityAssertion() method initiates
  gathering of an identity assertion. This has an effect only if
  `signalingState` is not \\\"closed\\\".

  `pc.getIdentityAssertion();




  There is neither parameter nor return value for this method.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getIdentityAssertion`"
  [this & args]
  (apply (-> this .-getIdentityAssertion) (concat [this] args)))

(defn get-local-streams
  "Method.

  The RTCPeerConnection.getLocalStreams() method returns an array
  MediaStream associated with the local end of the connection.
  array may be empty.

  `var mediaStreams[] = pc.getLocalStreams();

  The return value is an `js.Array` of `web.streams.MediaStream` objects.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getLocalStreams`"
  [this & args]
  (apply (-> this .-getLocalStreams) (concat [this] args)))

(defn get-receivers
  "Method.

  The RTCPeerConnection.getReceivers() method returns an array
  `web.rtc.RTCRtpReceiver` objects, each of which represents one
  receiver. Each RTP receiver manages the reception and decoding
  data for a `web.audio.MediaStreamTrack` on an `web.audio.RTCPeerConnection`

  `var receivers[] = RTCPeerConnection.getReceivers();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getReceivers`"
  [this ]
  (-> this (.getReceivers)))

(defn get-remote-streams
  "Method.

  The RTCPeerConnection.getRemoteStreams() method returns an array
  MediaStream associated with the remote end of the connection.
  array may be empty.

  `var mediaStreams[] = pc.getRemoteStreams();

  The return value is an `js.Array` of `web.streams.MediaStream` objects.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getRemoteStreams`"
  [this & args]
  (apply (-> this .-getRemoteStreams) (concat [this] args)))

(defn get-senders
  "Method.

  The `web.audio.RTCPeerConnection` method getSenders() returns
  array of `web.audio.RTCRtpSender` objects, each of which represents
  RTP sender responsible for transmitting one track's data.

  `var senders = RTCPeerConnection.getSenders();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getSenders`"
  [this ]
  (-> this (.getSenders)))

(defn get-stats
  "Method.

  The `web.audio.RTCPeerConnection` method getStats() returns a
  which resolves with data providing statistics about either the
  connection or about the specified `web.audio.MediaStreamTrack`.

  `promise = rtcPeerConnection.getStats(selector)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats`"
  [this selector]
  (-> this (.getStats selector)))

(defn get-stream-by-id
  "Method.

  The RTCPeerConnection.getStreamById() method returns the MediaStream
  the given id that is associated with local or remote end of the
  If no stream matches, it returns null.

  `var mediaStream = pc.getStream(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStreamById`"
  [this id]
  (-> this (.getStreamById id)))

(defn get-transceivers
  "Method.

  The `web.audio.RTCPeerConnection` interface's getTransceivers()
  returns a list of the `web.rtc.RTCRtpTransceiver` objects being
  to send and receive data on the connection.

  `transceiverList = rtcPeerConnection.getTransceivers();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getTransceivers`"
  [this ]
  (-> this (.getTransceivers)))

(defn remove-stream
  "Method.

  The RTCPeerConnection.removeStream() method removes a `web.streams.MediaStream`
  a local source of audio or video. If the negotiation already
  a new one will be needed for the remote peer to be able to use
  Because this method has been deprecated, you should instead use
  if your target browser versions have implemented it.

  `RTCPeerConnection.removeStream(mediaStream);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removeStream`"
  [this media-stream]
  (-> this (.removeStream media-stream)))

(defn remove-track
  "Method.

  The RTCPeerConnection.removeTrack() method tells the local end
  the connection to stop sending media from the specified track,
  actually removing the corresponding `web.audio.RTCRtpSender`
  the list of senders as reported by `RTCPeerConnection.getSenders()`.

  `pc.removeTrack(sender);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removeTrack`"
  [this sender]
  (-> this (.removeTrack sender)))

(defn restart-ice
  "Method.

  The WebRTC API's `web.audio.RTCPeerConnection` interface offers
  restartIce() method to allow a web application to easily request
  ICE candidate gathering be redone on both ends of the connection.

  `rtcPeerConnection.restartIce();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/restartIce`"
  [this ]
  (-> this (.restartIce)))

(defn set-configuration
  "Method.

  The RTCPeerConnection.setConfiguration() method sets the current
  of the `web.audio.RTCPeerConnection` based on the values included
  the specified `web.rtc.RTCConfiguration` object. This lets you
  the ICE servers used by the connection and which transport policies
  use.

  `RTCPeerConnection.setConfiguration(configuration);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setConfiguration`"
  [this configuration]
  (-> this (.setConfiguration configuration)))

(defn set-identity-provider
  "Method.

  The RTCPeerConnection.setIdentityProvider() method sets the Identity
  (IdP) to the triplet given in parameter: its name, the protocol
  to communicate with it (optional) and an optional username. The
  will be used only when an assertion is needed.

  `pc.setIdentityProvider(domainname [, protocol] [, username]);

  There is no return value for this method.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setIdentityProvider`"
  [this & args]
  (apply (-> this .-setIdentityProvider) (concat [this] args)))

(defn set-local-description
  "Method.

  The RTCPeerConnection.setLocalDescription() method changes the
  description associated with the connection. This description
  the properties of the local end of the connection, including
  media format.

  `aPromise = RTCPeerConnection.setLocalDescription(sessionDescription);

  pc.setLocalDescription(sessionDescription, successCallback, errorCallback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription`"
  [this & args]
  (apply (-> this .-setLocalDescription) (concat [this] args)))

(defn set-remote-description
  "Method.

  The RTCPeerConnection.setRemoteDescription() method changes the
  description associated with the connection. This description
  the properties of the remote end of the connection, including
  media format.

  `aPromise = pc.setRemoteDescription(sessionDescription);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setRemoteDescription`"
  [this session-description]
  (-> this (.setRemoteDescription session-description)))

(defn can-trickle-ice-candidates
  "Property.

  The read-only `web.audio.RTCPeerConnection` property canTrickleIceCandidates
  a `js.Boolean` which indicates whether or not the remote peer
  accept trickled ICE candidates.

  `var canTrickle = RTCPeerConnection.canTrickleIceCandidates;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates`"
  [this]
  (-> this (.canTrickleIceCandidates)))

(defn set-can-trickle-ice-candidates!
  "Property.

  The read-only `web.audio.RTCPeerConnection` property canTrickleIceCandidates
  a `js.Boolean` which indicates whether or not the remote peer
  accept trickled ICE candidates.

  `var canTrickle = RTCPeerConnection.canTrickleIceCandidates;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates`"
  [this val]
  (aset this "canTrickleIceCandidates" val))

(defn connection-state
  "Property.

  The read-only connectionState property of the `web.audio.RTCPeerConnection`
  indicates the current state of the peer connection by returning
  of the string values specified by the enum RTCPeerConnectionState.

  `var connectionState = RTCPeerConnection.connectionState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState`"
  [this]
  (-> this (.connectionState)))

(defn set-connection-state!
  "Property.

  The read-only connectionState property of the `web.audio.RTCPeerConnection`
  indicates the current state of the peer connection by returning
  of the string values specified by the enum RTCPeerConnectionState.

  `var connectionState = RTCPeerConnection.connectionState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState`"
  [this val]
  (aset this "connectionState" val))

(defn current-local-description
  "Property.

  The read-only property RTCPeerConnection.currentLocalDescription
  an `web.audio.RTCSessionDescription` object describing the local
  of the connection as it was most recently successfully negotiated
  the last time the `web.audio.RTCPeerConnection` finished negotiating
  connecting to a remote peer. Also included is a list of any ICE
  that may already have been generated by the ICE agent since the
  or answer represented by the description was first instantiated.

  `sessionDescription = RTCPeerConnection.currentLocalDescription;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/currentLocalDescription`"
  [this]
  (-> this (.currentLocalDescription)))

(defn current-remote-description
  "Property.

  The read-only property RTCPeerConnection.currentRemoteDescription
  an `web.audio.RTCSessionDescription` object describing the remote
  of the connection as it was most recently successfully negotiated
  the last time the `web.audio.RTCPeerConnection` finished negotiating
  connecting to a remote peer. Also included is a list of any ICE
  that may already have been generated by the ICE agent since the
  or answer represented by the description was first instantiated.

  `sessionDescription = RTCPeerConnection.currentRemoteDescription;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/currentRemoteDescription`"
  [this]
  (-> this (.currentRemoteDescription)))

(defn default-ice-servers
  "Property.

  The read-only property RTCPeerConnection.defaultIceServers returns
  array of objects based on the `web.rtc.RTCIceServer` dictionary,
  indicates what, if any, ICE servers the browser will use by default
  none are provided to the `web.audio.RTCPeerConnection` in its
  However, browsers are not required to provide any default ICE
  at all.

  `var defaultIceServers = RTCPeerConnection.defaultIceServers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/defaultIceServers`"
  [this]
  (-> this (.defaultIceServers)))

(defn set-default-ice-servers!
  "Property.

  The read-only property RTCPeerConnection.defaultIceServers returns
  array of objects based on the `web.rtc.RTCIceServer` dictionary,
  indicates what, if any, ICE servers the browser will use by default
  none are provided to the `web.audio.RTCPeerConnection` in its
  However, browsers are not required to provide any default ICE
  at all.

  `var defaultIceServers = RTCPeerConnection.defaultIceServers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/defaultIceServers`"
  [this val]
  (aset this "defaultIceServers" val))

(defn ice-connection-state
  "Property.

  The read-only property RTCPeerConnection.iceConnectionState returns
  enum of type RTCIceConnectionState which state of the ICE agent
  with the `web.audio.RTCPeerConnection`.

  `var state = RTCPeerConnection.iceConnectionState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceConnectionState`"
  [this]
  (-> this (.iceConnectionState)))

(defn ice-gathering-state
  "Property.

  The read-only property RTCPeerConnection.iceGatheringState returns
  enum of type RTCIceGatheringState that describes connection's
  gathering state. This lets you detect, for example, when collection
  ICE candidates has finished.

  `var state = RTCPeerConnection.iceGatheringState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceGatheringState`"
  [this]
  (-> this (.iceGatheringState)))

(defn local-description
  "Property.

  The read-only property RTCPeerConnection.localDescription returns
  `web.audio.RTCSessionDescription` describing the session for
  local end of the connection. If it has not yet been set, this
  null.

  `var sessionDescription = peerConnection.localDescription;

  On a more fundamental level, the returned value is the value of `RTCPeerConnection.pendingLocalDescription` if that property isn't null; otherwise, the value of `RTCPeerConnection.currentLocalDescription` is returned. See Pending and current descriptions in WebRTC connectivity for details on this algorithm and why it's used.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/localDescription`"
  [this]
  (-> this (.localDescription)))

(defn onaddstream
  "Property.

  The RTCPeerConnection.onaddstream event handler is a property
  the code to execute when the addstream event, of type `web.rtc.MediaStreamEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when a `web.streams.MediaStream` is added to this connection
  the remote peer. The event is sent immediately after the call
  and doesn't wait for the result of the SDP negotiation.

  `rtcPeerConnection.onaddstream = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onaddstream`"
  [this]
  (-> this (.onaddstream)))

(defn set-onaddstream!
  "Property.

  The RTCPeerConnection.onaddstream event handler is a property
  the code to execute when the addstream event, of type `web.rtc.MediaStreamEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when a `web.streams.MediaStream` is added to this connection
  the remote peer. The event is sent immediately after the call
  and doesn't wait for the result of the SDP negotiation.

  `rtcPeerConnection.onaddstream = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onaddstream`"
  [this val]
  (aset this "onaddstream" val))

(defn onconnectionstatechange
  "Property.

  The RTCPeerConnection.onconnectionstatechange property specifies
  `EventHandler` which is called to handle the connectionstatechange
  when it occurs on an instance of `web.audio.RTCPeerConnection`.
  happens whenever the aggregate state of the connection changes.

  `RTCPeerConnection.onconnectionstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onconnectionstatechange`"
  [this]
  (-> this (.onconnectionstatechange)))

(defn set-onconnectionstatechange!
  "Property.

  The RTCPeerConnection.onconnectionstatechange property specifies
  `EventHandler` which is called to handle the connectionstatechange
  when it occurs on an instance of `web.audio.RTCPeerConnection`.
  happens whenever the aggregate state of the connection changes.

  `RTCPeerConnection.onconnectionstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onconnectionstatechange`"
  [this val]
  (aset this "onconnectionstatechange" val))

(defn ondatachannel
  "Property.

  The RTCPeerConnection.ondatachannel property is an `EventHandler`
  specifies a function which is called when the datachannel event
  on an `web.audio.RTCPeerConnection`. This event, of type `web.rtc.RTCDataChannelEvent`,
  sent when an `web.rtc.RTCDataChannel` is added to the connection
  the remote peer calling `createDataChannel()`.

  `RTCPeerConnection.ondatachannel = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ondatachannel`"
  [this]
  (-> this (.ondatachannel)))

(defn set-ondatachannel!
  "Property.

  The RTCPeerConnection.ondatachannel property is an `EventHandler`
  specifies a function which is called when the datachannel event
  on an `web.audio.RTCPeerConnection`. This event, of type `web.rtc.RTCDataChannelEvent`,
  sent when an `web.rtc.RTCDataChannel` is added to the connection
  the remote peer calling `createDataChannel()`.

  `RTCPeerConnection.ondatachannel = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ondatachannel`"
  [this val]
  (aset this "ondatachannel" val))

(defn onicecandidate
  "Property.

  The RTCPeerConnection property `onicecandidate` property is an
  which specifies a function to be called when the icecandidate
  occurs on an `web.audio.RTCPeerConnection` instance. This happens
  the local ICE agent needs to deliver a message to the other peer
  the signaling server.

  `rtcPeerConnection.onicecandidate = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate`"
  [this]
  (-> this (.onicecandidate)))

(defn set-onicecandidate!
  "Property.

  The RTCPeerConnection property `onicecandidate` property is an
  which specifies a function to be called when the icecandidate
  occurs on an `web.audio.RTCPeerConnection` instance. This happens
  the local ICE agent needs to deliver a message to the other peer
  the signaling server.

  `rtcPeerConnection.onicecandidate = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate`"
  [this val]
  (aset this "onicecandidate" val))

(defn oniceconnectionstatechange
  "Property.

  The RTCPeerConnection.oniceconnectionstatechange property is
  event handler which specifies a function to be called when the
  event is fired on an `web.audio.RTCPeerConnection` instance.
  happens when the state of the connection's ICE agent, as represented
  the `iceConnectionState` property, changes.

  `RTCPeerConnection.oniceconnectionstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange`"
  [this]
  (-> this (.oniceconnectionstatechange)))

(defn set-oniceconnectionstatechange!
  "Property.

  The RTCPeerConnection.oniceconnectionstatechange property is
  event handler which specifies a function to be called when the
  event is fired on an `web.audio.RTCPeerConnection` instance.
  happens when the state of the connection's ICE agent, as represented
  the `iceConnectionState` property, changes.

  `RTCPeerConnection.oniceconnectionstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange`"
  [this val]
  (aset this "oniceconnectionstatechange" val))

(defn onicegatheringstatechange
  "Property.

  The RTCPeerConnection.onicegatheringstatechange property is an
  which specifies a function to be called when the icegatheringstatechange
  is sent to an `web.audio.RTCPeerConnection` instance. This happens
  the ICE gathering state—that is, whether or not the ICE agent
  actively gathering candidates—changes.

  `RTCPeerConnection.onicegatheringstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange`"
  [this]
  (-> this (.onicegatheringstatechange)))

(defn set-onicegatheringstatechange!
  "Property.

  The RTCPeerConnection.onicegatheringstatechange property is an
  which specifies a function to be called when the icegatheringstatechange
  is sent to an `web.audio.RTCPeerConnection` instance. This happens
  the ICE gathering state—that is, whether or not the ICE agent
  actively gathering candidates—changes.

  `RTCPeerConnection.onicegatheringstatechange = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange`"
  [this val]
  (aset this "onicegatheringstatechange" val))

(defn onidentityresult
  "Property.

  The RTCPeerConnection.onidentityresult event handler is a property
  the code to execute when the identityresult event, of type `web.rtc.RTCIdentityEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when an identity assertion is generated, via `getIdentityAssertion()`
  during the creation of an offer or an answer.

  `peerconnection.onidentityresult = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidentityresult`"
  [this]
  (-> this (.onidentityresult)))

(defn set-onidentityresult!
  "Property.

  The RTCPeerConnection.onidentityresult event handler is a property
  the code to execute when the identityresult event, of type `web.rtc.RTCIdentityEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when an identity assertion is generated, via `getIdentityAssertion()`
  during the creation of an offer or an answer.

  `peerconnection.onidentityresult = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidentityresult`"
  [this val]
  (aset this "onidentityresult" val))

(defn onidpassertionerror
  "Property.

  The RTCPeerConnection.onidpassertionerror event handler is a
  containing the code to execute whent the idpassertionerror event,
  type `web.rtc.RTCIdentityErrorEvent`, is received by this `web.audio.RTCPeerConnection`.
  an event is sent when the associated identity provider (IdP)
  an error while generating an identity assertion.

  `peerconnection.onidpassertionerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpassertionerror`"
  [this]
  (-> this (.onidpassertionerror)))

(defn set-onidpassertionerror!
  "Property.

  The RTCPeerConnection.onidpassertionerror event handler is a
  containing the code to execute whent the idpassertionerror event,
  type `web.rtc.RTCIdentityErrorEvent`, is received by this `web.audio.RTCPeerConnection`.
  an event is sent when the associated identity provider (IdP)
  an error while generating an identity assertion.

  `peerconnection.onidpassertionerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpassertionerror`"
  [this val]
  (aset this "onidpassertionerror" val))

(defn onidpvalidationerror
  "Property.

  The RTCPeerConnection.onidpvalidationerror event handler is a
  containing the code to execute whent the idpvalidationerror event,
  type `web.rtc.RTCIdentityErrorEvent`, is received by this `web.audio.RTCPeerConnection`.
  an event is sent when the associated identity provider (IdP)
  an error while validating an identity assertion.

  `peerconnection.onidpvalidationerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpvalidationerror`"
  [this]
  (-> this (.onidpvalidationerror)))

(defn set-onidpvalidationerror!
  "Property.

  The RTCPeerConnection.onidpvalidationerror event handler is a
  containing the code to execute whent the idpvalidationerror event,
  type `web.rtc.RTCIdentityErrorEvent`, is received by this `web.audio.RTCPeerConnection`.
  an event is sent when the associated identity provider (IdP)
  an error while validating an identity assertion.

  `peerconnection.onidpvalidationerror = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpvalidationerror`"
  [this val]
  (aset this "onidpvalidationerror" val))

(defn onnegotiationneeded
  "Property.

  The `web.audio.RTCPeerConnection` interface's onnegotiationneeded
  is an `web.EventListener` which specifies a function which is
  to handle the negotiationneeded event when it occurs on an `web.audio.RTCPeerConnection`
  This event is fired when a change has occurred which requires
  negotiation. This negotiation should be carried out as the offerer,
  some session changes cannot be negotiated as the answerer.

  `RTCPeerConnection.onnegotiationneeded = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded`"
  [this]
  (-> this (.onnegotiationneeded)))

(defn set-onnegotiationneeded!
  "Property.

  The `web.audio.RTCPeerConnection` interface's onnegotiationneeded
  is an `web.EventListener` which specifies a function which is
  to handle the negotiationneeded event when it occurs on an `web.audio.RTCPeerConnection`
  This event is fired when a change has occurred which requires
  negotiation. This negotiation should be carried out as the offerer,
  some session changes cannot be negotiated as the answerer.

  `RTCPeerConnection.onnegotiationneeded = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded`"
  [this val]
  (aset this "onnegotiationneeded" val))

(defn onpeeridentity
  "Property.

  The RTCPeerConnection.onpeeridentity event handler is a property
  the code to execute whent the peeridentity event, of type `web.event.Event`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when an identity assertion, received from a peer, has been
  validated.

  `peerconnection.onpeeridentity = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onpeeridentity`"
  [this]
  (-> this (.onpeeridentity)))

(defn set-onpeeridentity!
  "Property.

  The RTCPeerConnection.onpeeridentity event handler is a property
  the code to execute whent the peeridentity event, of type `web.event.Event`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when an identity assertion, received from a peer, has been
  validated.

  `peerconnection.onpeeridentity = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onpeeridentity`"
  [this val]
  (aset this "onpeeridentity" val))

(defn onremovestream
  "Property.

  The RTCPeerConnection.onremovestream event handler is a property
  the code to execute when the removestream event, of type `web.rtc.MediaStreamEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when a `web.streams.MediaStream` is removed from this connection.

  `peerconnection.onremovestream = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onremovestream`"
  [this]
  (-> this (.onremovestream)))

(defn set-onremovestream!
  "Property.

  The RTCPeerConnection.onremovestream event handler is a property
  the code to execute when the removestream event, of type `web.rtc.MediaStreamEvent`,
  received by this `web.audio.RTCPeerConnection`. Such an event
  sent when a `web.streams.MediaStream` is removed from this connection.

  `peerconnection.onremovestream = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onremovestream`"
  [this val]
  (aset this "onremovestream" val))

(defn onsignalingstatechange
  "Property.

  The onsignalingstatechange property of the `web.audio.RTCPeerConnection`
  is an `EventHandler` which specifies a function to be called
  the signalingstatechange event occurs on an `web.audio.RTCPeerConnection`

  `RTCPeerConnection.onsignalingstatechange = errorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange`"
  [this]
  (-> this (.onsignalingstatechange)))

(defn set-onsignalingstatechange!
  "Property.

  The onsignalingstatechange property of the `web.audio.RTCPeerConnection`
  is an `EventHandler` which specifies a function to be called
  the signalingstatechange event occurs on an `web.audio.RTCPeerConnection`

  `RTCPeerConnection.onsignalingstatechange = errorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange`"
  [this val]
  (aset this "onsignalingstatechange" val))

(defn ontrack
  "Property.

  The `web.audio.RTCPeerConnection` property ontrack is an `EventHandler`
  specifies a function to be called when the track event occurs,
  that a track has been added to the `web.audio.RTCPeerConnection`.

  `RTCPeerConnection.ontrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack`"
  [this]
  (-> this (.ontrack)))

(defn set-ontrack!
  "Property.

  The `web.audio.RTCPeerConnection` property ontrack is an `EventHandler`
  specifies a function to be called when the track event occurs,
  that a track has been added to the `web.audio.RTCPeerConnection`.

  `RTCPeerConnection.ontrack = eventHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack`"
  [this val]
  (aset this "ontrack" val))

(defn peer-identity
  "Property.

  The read-only `web.audio.RTCPeerConnection` property peerIdentity
  a JavaScript `js.Promise` that resolves to an `web.rtc.RTCIdentityAssertion`
  contains a `web.dom.DOMString` identifying the remote peer.

  `var identity = rtcPeerConnection.peerIdentity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/peerIdentity`"
  [this]
  (-> this (.peerIdentity)))

(defn pending-local-description
  "Property.

  The read-only property RTCPeerConnection.pendingLocalDescription
  an `web.audio.RTCSessionDescription` object describing a pending
  change for the local end of the connection. This does not describe
  connection as it currently stands, but as it may exist in the
  future. Use `RTCPeerConnection.currentLocalDescription` or `RTCPeerConnection.localDescription`
  get the current state of the endpoint. For details on the difference,
  Pending and current descriptions in WebRTC connectivity.

  `sessionDescription = RTCPeerConnection.pendingLocalDescription;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/pendingLocalDescription`"
  [this]
  (-> this (.pendingLocalDescription)))

(defn pending-remote-description
  "Property.

  The read-only property RTCPeerConnection.pendingRemoteDescription
  an `web.audio.RTCSessionDescription` object describing a pending
  change for the remote end of the connection. This does not describe
  connection as it currently stands, but as it may exist in the
  future. Use `RTCPeerConnection.currentRemoteDescription` or `RTCPeerConnection.remoteDescription`
  get the current session description for the remote endpoint.
  details on the difference, see Pending and current descriptions
  WebRTC connectivity.

  `sessionDescription = RTCPeerConnection.pendingRemoteDescription;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/pendingRemoteDescription`"
  [this]
  (-> this (.pendingRemoteDescription)))

(defn remote-description
  "Property.

  The read-only property RTCPeerConnection.remoteDescription returns
  `web.audio.RTCSessionDescription` describing the session (which
  configuration and media information) for the remote end of the
  If this hasn't been set yet, this is null.

  `var sessionDescription = peerConnection.remoteDescription;

  On a more fundamental level, the returned value is the value of `RTCPeerConnection.pendingRemoteDescription` if that property isn't null; otherwise, the value of `RTCPeerConnection.currentRemoteDescription` is returned. See Pending and current descriptions in WebRTC connectivity for details on this algorithm and why it's used.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/remoteDescription`"
  [this]
  (-> this (.remoteDescription)))

(defn sctp
  "Property.

  The read-only sctp property on the `web.audio.RTCPeerConnection`
  returns an `web.rtc.RTCSctpTransport` describing the SCTP transport
  which SCTP data is being sent and received. If SCTP hasn't been
  this value is null.

  `var sctp = RTCPeerConnection.sctp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/sctp`"
  [this]
  (-> this (.sctp)))

(defn set-sctp!
  "Property.

  The read-only sctp property on the `web.audio.RTCPeerConnection`
  returns an `web.rtc.RTCSctpTransport` describing the SCTP transport
  which SCTP data is being sent and received. If SCTP hasn't been
  this value is null.

  `var sctp = RTCPeerConnection.sctp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/sctp`"
  [this val]
  (aset this "sctp" val))

(defn signaling-state
  "Property.

  The read-only signalingState property on the `web.audio.RTCPeerConnection`
  returns one of the string values specified by the RTCSignalingState
  these values describe the state of the signaling process on the
  end of the connection while connecting or reconnecting to another
  See Signaling in Lifetime of a WebRTC session for more details
  the signaling process.

  `var state = RTCPeerConnection.signalingState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/signalingState`"
  [this]
  (-> this (.signalingState)))

