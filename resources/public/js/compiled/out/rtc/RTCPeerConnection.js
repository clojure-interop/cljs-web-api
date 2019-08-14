// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCPeerConnection');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCPeerConnection() constructor returns a newly-created `rtc.RTCPeerConnection`, which represents a connection between the local device and a remote peer.
 * 
 *   configuration Optional
 *   An RTCConfiguration dictionary providing options to configure the new connection.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection`
 */
rtc.RTCPeerConnection.constructor$ = RTCPeerConnection;
/**
 * Method.
 * 
 *   When a web site or app using `rtc.RTCPeerConnection` receives
 *   new ICE candidate from the remote peer over its signaling channel,
 *   delivers the newly-received candidate to the browser's ICE agent
 *   calling RTCPeerConnection.addIceCandidate().
 * 
 *   `aPromise = pc.addIceCandidate(candidate);
 * 
 *   addIceCandidate(candidate, successCallback, failureCallback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate`
 */
rtc.RTCPeerConnection.add_ice_candidate = (function rtc$RTCPeerConnection$add_ice_candidate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43822 = arguments.length;
var i__42557__auto___43823 = (0);
while(true){
if((i__42557__auto___43823 < len__42556__auto___43822)){
args__42563__auto__.push((arguments[i__42557__auto___43823]));

var G__43824 = (i__42557__auto___43823 + (1));
i__42557__auto___43823 = G__43824;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.add_ice_candidate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.add_ice_candidate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addIceCandidate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.add_ice_candidate.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.add_ice_candidate.cljs$lang$applyTo = (function (seq43820){
var G__43821 = cljs.core.first.call(null,seq43820);
var seq43820__$1 = cljs.core.next.call(null,seq43820);
return rtc.RTCPeerConnection.add_ice_candidate.cljs$core$IFn$_invoke$arity$variadic(G__43821,seq43820__$1);
});

/**
 * Method.
 * 
 *   The obsolete `rtc.RTCPeerConnection` method addStream() adds
 *   `media.MediaStream` as a local source of audio or video. Instead
 *   using this obsolete method, you should instead use `web.addTrack()`
 *   for each track you wish to send to the remote peer.
 * 
 *   `rtcPeerConnection.addStream(mediaStream);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream`
 */
rtc.RTCPeerConnection.add_stream = (function rtc$RTCPeerConnection$add_stream(this$,media_stream){
return this$.addStream(media_stream);
});
/**
 * Method.
 * 
 *   The `rtc.RTCPeerConnection` method addTrack() adds a new media
 *   to the set of tracks which will be transmitted to the other peer.
 * 
 *   `rtpSender = rtcPeerConnection.addTrack(track, stream...);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addTrack`
 */
rtc.RTCPeerConnection.add_track = (function rtc$RTCPeerConnection$add_track(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43827 = arguments.length;
var i__42557__auto___43828 = (0);
while(true){
if((i__42557__auto___43828 < len__42556__auto___43827)){
args__42563__auto__.push((arguments[i__42557__auto___43828]));

var G__43829 = (i__42557__auto___43828 + (1));
i__42557__auto___43828 = G__43829;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.add_track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.add_track.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addTrack,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.add_track.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.add_track.cljs$lang$applyTo = (function (seq43825){
var G__43826 = cljs.core.first.call(null,seq43825);
var seq43825__$1 = cljs.core.next.call(null,seq43825);
return rtc.RTCPeerConnection.add_track.cljs$core$IFn$_invoke$arity$variadic(G__43826,seq43825__$1);
});

/**
 * Method.
 * 
 *   The RTCPeerConnection.close() method closes the current peer
 * 
 *   `peerConnection.close();
 * 
 *   This method has no parameters, and returns nothing.
 * 
 *   Calling this method terminates the RTCPeerConnection's ICE agent, ending any ongoing ICE processing and any active streams. This also releases any resources in use by the ICE agent, including TURN permissions. All `rtc.RTCRtpSender` objects are considered to be stopped once this returns (they may still be in the process of stopping, but for all intents and purposes, they're stopped).
 * 
 *   Once this method returns, the signaling state as returned by `rtc.RTCPeerConnection.signalingState` is closed.
 * 
 *   Make sure that you delete all references to the previous `rtc.RTCPeerConnection` before attempting to create a new one that connects to the same remote peer, as not doing so might result in some errors depending on the browser.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/close`
 */
rtc.RTCPeerConnection.close = (function rtc$RTCPeerConnection$close(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43832 = arguments.length;
var i__42557__auto___43833 = (0);
while(true){
if((i__42557__auto___43833 < len__42556__auto___43832)){
args__42563__auto__.push((arguments[i__42557__auto___43833]));

var G__43834 = (i__42557__auto___43833 + (1));
i__42557__auto___43833 = G__43834;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.close.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.close,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.close.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.close.cljs$lang$applyTo = (function (seq43830){
var G__43831 = cljs.core.first.call(null,seq43830);
var seq43830__$1 = cljs.core.next.call(null,seq43830);
return rtc.RTCPeerConnection.close.cljs$core$IFn$_invoke$arity$variadic(G__43831,seq43830__$1);
});

/**
 * Method.
 * 
 *   The createAnswer() method on the `rtc.RTCPeerConnection` interface
 *   an SDP answer to an offer received from a remote peer during
 *   offer/answer negotiation of a WebRTC connection. The answer contains
 *   about any media already attached to the session, codecs and options
 *   by the browser, and any ICE candidates already gathered. The
 *   is delivered to the returned `web.Promise`, and should then be
 *   to the source of the offer to continue the negotiation process.
 * 
 *   `aPromise = RTCPeerConnection.createAnswer([options]);
 * 
 *   RTCPeerConnection.createAnswer(successCallback, failureCallback[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer`
 */
rtc.RTCPeerConnection.create_answer = (function rtc$RTCPeerConnection$create_answer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43837 = arguments.length;
var i__42557__auto___43838 = (0);
while(true){
if((i__42557__auto___43838 < len__42556__auto___43837)){
args__42563__auto__.push((arguments[i__42557__auto___43838]));

var G__43839 = (i__42557__auto___43838 + (1));
i__42557__auto___43838 = G__43839;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.create_answer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.create_answer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createAnswer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.create_answer.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.create_answer.cljs$lang$applyTo = (function (seq43835){
var G__43836 = cljs.core.first.call(null,seq43835);
var seq43835__$1 = cljs.core.next.call(null,seq43835);
return rtc.RTCPeerConnection.create_answer.cljs$core$IFn$_invoke$arity$variadic(G__43836,seq43835__$1);
});

/**
 * Method.
 * 
 *   The createDataChannel() method on the `rtc.RTCPeerConnection`
 *   creates a new channel linked with the remote peer, over which
 *   kind of data may be transmitted.
 * 
 *   `dataChannel = RTCPeerConnection.createDataChannel(label[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel`
 */
rtc.RTCPeerConnection.create_data_channel = (function rtc$RTCPeerConnection$create_data_channel(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43842 = arguments.length;
var i__42557__auto___43843 = (0);
while(true){
if((i__42557__auto___43843 < len__42556__auto___43842)){
args__42563__auto__.push((arguments[i__42557__auto___43843]));

var G__43844 = (i__42557__auto___43843 + (1));
i__42557__auto___43843 = G__43844;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.create_data_channel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.create_data_channel.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createDataChannel,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.create_data_channel.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.create_data_channel.cljs$lang$applyTo = (function (seq43840){
var G__43841 = cljs.core.first.call(null,seq43840);
var seq43840__$1 = cljs.core.next.call(null,seq43840);
return rtc.RTCPeerConnection.create_data_channel.cljs$core$IFn$_invoke$arity$variadic(G__43841,seq43840__$1);
});

/**
 * Method.
 * 
 *   The createOffer() method of the `rtc.RTCPeerConnection` interface
 *   the creation of an SDP offer for the purpose of starting a new
 *   connection to a remote peer.
 * 
 *   `aPromise = myPeerConnection.createOffer([options]);
 * 
 *   myPeerConnection.createOffer(successCallback, failureCallback, [options])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer`
 */
rtc.RTCPeerConnection.create_offer = (function rtc$RTCPeerConnection$create_offer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43847 = arguments.length;
var i__42557__auto___43848 = (0);
while(true){
if((i__42557__auto___43848 < len__42556__auto___43847)){
args__42563__auto__.push((arguments[i__42557__auto___43848]));

var G__43849 = (i__42557__auto___43848 + (1));
i__42557__auto___43848 = G__43849;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.create_offer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.create_offer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createOffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.create_offer.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.create_offer.cljs$lang$applyTo = (function (seq43845){
var G__43846 = cljs.core.first.call(null,seq43845);
var seq43845__$1 = cljs.core.next.call(null,seq43845);
return rtc.RTCPeerConnection.create_offer.cljs$core$IFn$_invoke$arity$variadic(G__43846,seq43845__$1);
});

/**
 * Method.
 * 
 *   The generateCertificate() method of the `rtc.RTCPeerConnection`
 *   creates and stores an X.509 certificate and corresponding private
 *   then returns an `rtc.RTCCertificate`, providing access to it.
 * 
 *   `var cert = RTCPeerConnection.generateCertificate(keygenAlgorithm)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/generateCertificate`
 */
rtc.RTCPeerConnection.generate_certificate = (function rtc$RTCPeerConnection$generate_certificate(this$,keygen_algorithm){
return this$.generateCertificate(keygen_algorithm);
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.getConfiguration() method returns an `rtc.RTCConfiguration`
 *   which indicates the current configuration of the `rtc.RTCPeerConnection`
 *   which the method is called.
 * 
 *   `var configuration = RTCPeerConnection.getConfiguration();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getConfiguration`
 */
rtc.RTCPeerConnection.get_configuration = (function rtc$RTCPeerConnection$get_configuration(this$){
return this$.getConfiguration();
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.getIdentityAssertion() method initiates
 *   gathering of an identity assertion. This has an effect only if
 *   `web.signalingState` is not \"closed\".
 * 
 *   `pc.getIdentityAssertion();
 * 
 * 
 * 
 * 
 *   There is neither parameter nor return value for this method.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getIdentityAssertion`
 */
rtc.RTCPeerConnection.get_identity_assertion = (function rtc$RTCPeerConnection$get_identity_assertion(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43852 = arguments.length;
var i__42557__auto___43853 = (0);
while(true){
if((i__42557__auto___43853 < len__42556__auto___43852)){
args__42563__auto__.push((arguments[i__42557__auto___43853]));

var G__43854 = (i__42557__auto___43853 + (1));
i__42557__auto___43853 = G__43854;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.get_identity_assertion.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.get_identity_assertion.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getIdentityAssertion,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.get_identity_assertion.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.get_identity_assertion.cljs$lang$applyTo = (function (seq43850){
var G__43851 = cljs.core.first.call(null,seq43850);
var seq43850__$1 = cljs.core.next.call(null,seq43850);
return rtc.RTCPeerConnection.get_identity_assertion.cljs$core$IFn$_invoke$arity$variadic(G__43851,seq43850__$1);
});

/**
 * Method.
 * 
 *   The RTCPeerConnection.getLocalStreams() method returns an array
 *   MediaStream associated with the local end of the connection.
 *   array may be empty.
 * 
 *   `var mediaStreams[] = pc.getLocalStreams();
 * 
 *   The return value is an `web.Array` of `media.MediaStream` objects.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getLocalStreams`
 */
rtc.RTCPeerConnection.get_local_streams = (function rtc$RTCPeerConnection$get_local_streams(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43857 = arguments.length;
var i__42557__auto___43858 = (0);
while(true){
if((i__42557__auto___43858 < len__42556__auto___43857)){
args__42563__auto__.push((arguments[i__42557__auto___43858]));

var G__43859 = (i__42557__auto___43858 + (1));
i__42557__auto___43858 = G__43859;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.get_local_streams.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.get_local_streams.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getLocalStreams,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.get_local_streams.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.get_local_streams.cljs$lang$applyTo = (function (seq43855){
var G__43856 = cljs.core.first.call(null,seq43855);
var seq43855__$1 = cljs.core.next.call(null,seq43855);
return rtc.RTCPeerConnection.get_local_streams.cljs$core$IFn$_invoke$arity$variadic(G__43856,seq43855__$1);
});

/**
 * Method.
 * 
 *   The RTCPeerConnection.getReceivers() method returns an array
 *   `rtc.RTCRtpReceiver` objects, each of which represents one RTP
 *   Each RTP receiver manages the reception and decoding of data
 *   a `media.MediaStreamTrack` on an `rtc.RTCPeerConnection`
 * 
 *   `var receivers[] = RTCPeerConnection.getReceivers();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getReceivers`
 */
rtc.RTCPeerConnection.get_receivers = (function rtc$RTCPeerConnection$get_receivers(this$){
return this$.getReceivers();
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.getRemoteStreams() method returns an array
 *   MediaStream associated with the remote end of the connection.
 *   array may be empty.
 * 
 *   `var mediaStreams[] = pc.getRemoteStreams();
 * 
 *   The return value is an `web.Array` of `media.MediaStream` objects.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getRemoteStreams`
 */
rtc.RTCPeerConnection.get_remote_streams = (function rtc$RTCPeerConnection$get_remote_streams(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43862 = arguments.length;
var i__42557__auto___43863 = (0);
while(true){
if((i__42557__auto___43863 < len__42556__auto___43862)){
args__42563__auto__.push((arguments[i__42557__auto___43863]));

var G__43864 = (i__42557__auto___43863 + (1));
i__42557__auto___43863 = G__43864;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.get_remote_streams.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.get_remote_streams.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getRemoteStreams,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.get_remote_streams.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.get_remote_streams.cljs$lang$applyTo = (function (seq43860){
var G__43861 = cljs.core.first.call(null,seq43860);
var seq43860__$1 = cljs.core.next.call(null,seq43860);
return rtc.RTCPeerConnection.get_remote_streams.cljs$core$IFn$_invoke$arity$variadic(G__43861,seq43860__$1);
});

/**
 * Method.
 * 
 *   The `rtc.RTCPeerConnection` method getSenders() returns an array
 *   `rtc.RTCRtpSender` objects, each of which represents the RTP
 *   responsible for transmitting one track's data.
 * 
 *   `var senders = RTCPeerConnection.getSenders();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getSenders`
 */
rtc.RTCPeerConnection.get_senders = (function rtc$RTCPeerConnection$get_senders(this$){
return this$.getSenders();
});
/**
 * Method.
 * 
 *   The `rtc.RTCPeerConnection` method getStats() returns a promise
 *   resolves with data providing statistics about either the overall
 *   or about the specified `media.MediaStreamTrack`.
 * 
 *   `promise = rtcPeerConnection.getStats(selector)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats`
 */
rtc.RTCPeerConnection.get_stats = (function rtc$RTCPeerConnection$get_stats(this$,selector){
return this$.getStats(selector);
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.getStreamById() method returns the MediaStream
 *   the given id that is associated with local or remote end of the
 *   If no stream matches, it returns null.
 * 
 *   `var mediaStream = pc.getStream(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStreamById`
 */
rtc.RTCPeerConnection.get_stream_by_id = (function rtc$RTCPeerConnection$get_stream_by_id(this$,id){
return this$.getStreamById(id);
});
/**
 * Method.
 * 
 *   The `rtc.RTCPeerConnection` interface's getTransceivers() method
 *   a list of the `rtc.RTCRtpTransceiver` objects being used to send
 *   receive data on the connection.
 * 
 *   `transceiverList = rtcPeerConnection.getTransceivers();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getTransceivers`
 */
rtc.RTCPeerConnection.get_transceivers = (function rtc$RTCPeerConnection$get_transceivers(this$){
return this$.getTransceivers();
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.removeStream() method removes a `media.MediaStream`
 *   a local source of audio or video. If the negotiation already
 *   a new one will be needed for the remote peer to be able to use
 *   Because this method has been deprecated, you should instead use
 *   if your target browser versions have implemented it.
 * 
 *   `RTCPeerConnection.removeStream(mediaStream);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removeStream`
 */
rtc.RTCPeerConnection.remove_stream = (function rtc$RTCPeerConnection$remove_stream(this$,media_stream){
return this$.removeStream(media_stream);
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.removeTrack() method tells the local end
 *   the connection to stop sending media from the specified track,
 *   actually removing the corresponding `rtc.RTCRtpSender` from the
 *   of senders as reported by `rtc.RTCPeerConnection.getSenders()`.
 * 
 *   `pc.removeTrack(sender);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removeTrack`
 */
rtc.RTCPeerConnection.remove_track = (function rtc$RTCPeerConnection$remove_track(this$,sender){
return this$.removeTrack(sender);
});
/**
 * Method.
 * 
 *   The WebRTC API's `rtc.RTCPeerConnection` interface offers the
 *   method to allow a web application to easily request that ICE
 *   gathering be redone on both ends of the connection.
 * 
 *   `rtcPeerConnection.restartIce();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/restartIce`
 */
rtc.RTCPeerConnection.restart_ice = (function rtc$RTCPeerConnection$restart_ice(this$){
return this$.restartIce();
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.setConfiguration() method sets the current
 *   of the `rtc.RTCPeerConnection` based on the values included in
 *   specified `rtc.RTCConfiguration` object. This lets you change
 *   ICE servers used by the connection and which transport policies
 *   use.
 * 
 *   `RTCPeerConnection.setConfiguration(configuration);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setConfiguration`
 */
rtc.RTCPeerConnection.set_configuration = (function rtc$RTCPeerConnection$set_configuration(this$,configuration){
return this$.setConfiguration(configuration);
});
/**
 * Method.
 * 
 *   The RTCPeerConnection.setIdentityProvider() method sets the Identity
 *   (IdP) to the triplet given in parameter: its name, the protocol
 *   to communicate with it (optional) and an optional username. The
 *   will be used only when an assertion is needed.
 * 
 *   `pc.setIdentityProvider(domainname [, protocol] [, username]);
 * 
 *   There is no return value for this method.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setIdentityProvider`
 */
rtc.RTCPeerConnection.set_identity_provider = (function rtc$RTCPeerConnection$set_identity_provider(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43867 = arguments.length;
var i__42557__auto___43868 = (0);
while(true){
if((i__42557__auto___43868 < len__42556__auto___43867)){
args__42563__auto__.push((arguments[i__42557__auto___43868]));

var G__43869 = (i__42557__auto___43868 + (1));
i__42557__auto___43868 = G__43869;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.set_identity_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.set_identity_provider.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setIdentityProvider,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.set_identity_provider.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.set_identity_provider.cljs$lang$applyTo = (function (seq43865){
var G__43866 = cljs.core.first.call(null,seq43865);
var seq43865__$1 = cljs.core.next.call(null,seq43865);
return rtc.RTCPeerConnection.set_identity_provider.cljs$core$IFn$_invoke$arity$variadic(G__43866,seq43865__$1);
});

/**
 * Method.
 * 
 *   The RTCPeerConnection.setLocalDescription() method changes the
 *   description associated with the connection. This description
 *   the properties of the local end of the connection, including
 *   media format.
 * 
 *   `aPromise = RTCPeerConnection.setLocalDescription(sessionDescription);
 * 
 *   pc.setLocalDescription(sessionDescription, successCallback, errorCallback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription`
 */
rtc.RTCPeerConnection.set_local_description = (function rtc$RTCPeerConnection$set_local_description(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43872 = arguments.length;
var i__42557__auto___43873 = (0);
while(true){
if((i__42557__auto___43873 < len__42556__auto___43872)){
args__42563__auto__.push((arguments[i__42557__auto___43873]));

var G__43874 = (i__42557__auto___43873 + (1));
i__42557__auto___43873 = G__43874;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCPeerConnection.set_local_description.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCPeerConnection.set_local_description.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setLocalDescription,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCPeerConnection.set_local_description.cljs$lang$maxFixedArity = (1);

rtc.RTCPeerConnection.set_local_description.cljs$lang$applyTo = (function (seq43870){
var G__43871 = cljs.core.first.call(null,seq43870);
var seq43870__$1 = cljs.core.next.call(null,seq43870);
return rtc.RTCPeerConnection.set_local_description.cljs$core$IFn$_invoke$arity$variadic(G__43871,seq43870__$1);
});

/**
 * Method.
 * 
 *   The RTCPeerConnection.setRemoteDescription() method changes the
 *   description associated with the connection. This description
 *   the properties of the remote end of the connection, including
 *   media format.
 * 
 *   `aPromise = pc.setRemoteDescription(sessionDescription);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setRemoteDescription`
 */
rtc.RTCPeerConnection.set_remote_description = (function rtc$RTCPeerConnection$set_remote_description(this$,session_description){
return this$.setRemoteDescription(session_description);
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCPeerConnection` property canTrickleIceCandidates
 *   a `web.Boolean` which indicates whether or not the remote peer
 *   accept trickled ICE candidates.
 * 
 *   `var canTrickle = RTCPeerConnection.canTrickleIceCandidates;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates`
 */
rtc.RTCPeerConnection.can_trickle_ice_candidates = (function rtc$RTCPeerConnection$can_trickle_ice_candidates(this$){
return this$.canTrickleIceCandidates();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCPeerConnection` property canTrickleIceCandidates
 *   a `web.Boolean` which indicates whether or not the remote peer
 *   accept trickled ICE candidates.
 * 
 *   `var canTrickle = RTCPeerConnection.canTrickleIceCandidates;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates`
 */
rtc.RTCPeerConnection.set_can_trickle_ice_candidates_BANG_ = (function rtc$RTCPeerConnection$set_can_trickle_ice_candidates_BANG_(this$,val){
return (this$["canTrickleIceCandidates"] = val);
});
/**
 * Property.
 * 
 *   The read-only connectionState property of the `rtc.RTCPeerConnection`
 *   indicates the current state of the peer connection by returning
 *   of the string values specified by the enum RTCPeerConnectionState.
 * 
 *   `var connectionState = RTCPeerConnection.connectionState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState`
 */
rtc.RTCPeerConnection.connection_state = (function rtc$RTCPeerConnection$connection_state(this$){
return this$.connectionState();
});
/**
 * Property.
 * 
 *   The read-only connectionState property of the `rtc.RTCPeerConnection`
 *   indicates the current state of the peer connection by returning
 *   of the string values specified by the enum RTCPeerConnectionState.
 * 
 *   `var connectionState = RTCPeerConnection.connectionState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState`
 */
rtc.RTCPeerConnection.set_connection_state_BANG_ = (function rtc$RTCPeerConnection$set_connection_state_BANG_(this$,val){
return (this$["connectionState"] = val);
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.currentLocalDescription
 *   an `rtc.RTCSessionDescription` object describing the local end
 *   the connection as it was most recently successfully negotiated
 *   the last time the `rtc.RTCPeerConnection` finished negotiating
 *   connecting to a remote peer. Also included is a list of any ICE
 *   that may already have been generated by the ICE agent since the
 *   or answer represented by the description was first instantiated.
 * 
 *   `sessionDescription = RTCPeerConnection.currentLocalDescription;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/currentLocalDescription`
 */
rtc.RTCPeerConnection.current_local_description = (function rtc$RTCPeerConnection$current_local_description(this$){
return this$.currentLocalDescription();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.currentRemoteDescription
 *   an `rtc.RTCSessionDescription` object describing the remote end
 *   the connection as it was most recently successfully negotiated
 *   the last time the `rtc.RTCPeerConnection` finished negotiating
 *   connecting to a remote peer. Also included is a list of any ICE
 *   that may already have been generated by the ICE agent since the
 *   or answer represented by the description was first instantiated.
 * 
 *   `sessionDescription = RTCPeerConnection.currentRemoteDescription;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/currentRemoteDescription`
 */
rtc.RTCPeerConnection.current_remote_description = (function rtc$RTCPeerConnection$current_remote_description(this$){
return this$.currentRemoteDescription();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.defaultIceServers returns
 *   array of objects based on the `rtc.RTCIceServer` dictionary,
 *   indicates what, if any, ICE servers the browser will use by default
 *   none are provided to the `rtc.RTCPeerConnection` in its `rtc.RTCConfiguration`.
 *   browsers are not required to provide any default ICE servers
 *   all.
 * 
 *   `var defaultIceServers = RTCPeerConnection.defaultIceServers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/defaultIceServers`
 */
rtc.RTCPeerConnection.default_ice_servers = (function rtc$RTCPeerConnection$default_ice_servers(this$){
return this$.defaultIceServers();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.defaultIceServers returns
 *   array of objects based on the `rtc.RTCIceServer` dictionary,
 *   indicates what, if any, ICE servers the browser will use by default
 *   none are provided to the `rtc.RTCPeerConnection` in its `rtc.RTCConfiguration`.
 *   browsers are not required to provide any default ICE servers
 *   all.
 * 
 *   `var defaultIceServers = RTCPeerConnection.defaultIceServers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/defaultIceServers`
 */
rtc.RTCPeerConnection.set_default_ice_servers_BANG_ = (function rtc$RTCPeerConnection$set_default_ice_servers_BANG_(this$,val){
return (this$["defaultIceServers"] = val);
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.iceConnectionState returns
 *   enum of type RTCIceConnectionState which state of the ICE agent
 *   with the `rtc.RTCPeerConnection`.
 * 
 *   `var state = RTCPeerConnection.iceConnectionState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceConnectionState`
 */
rtc.RTCPeerConnection.ice_connection_state = (function rtc$RTCPeerConnection$ice_connection_state(this$){
return this$.iceConnectionState();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.iceGatheringState returns
 *   enum of type RTCIceGatheringState that describes connection's
 *   gathering state. This lets you detect, for example, when collection
 *   ICE candidates has finished.
 * 
 *   `var state = RTCPeerConnection.iceGatheringState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceGatheringState`
 */
rtc.RTCPeerConnection.ice_gathering_state = (function rtc$RTCPeerConnection$ice_gathering_state(this$){
return this$.iceGatheringState();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.localDescription returns
 *   `rtc.RTCSessionDescription` describing the session for the local
 *   of the connection. If it has not yet been set, this is null.
 * 
 *   `var sessionDescription = peerConnection.localDescription;
 * 
 *   On a more fundamental level, the returned value is the value of `rtc.RTCPeerConnection.pendingLocalDescription` if that property isn't null; otherwise, the value of `rtc.RTCPeerConnection.currentLocalDescription` is returned. See Pending and current descriptions in WebRTC connectivity for details on this algorithm and why it's used.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/localDescription`
 */
rtc.RTCPeerConnection.local_description = (function rtc$RTCPeerConnection$local_description(this$){
return this$.localDescription();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onaddstream event handler is a property
 *   the code to execute when the addstream event, of type `media.MediaStreamEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   a `media.MediaStream` is added to this connection by the remote
 *   The event is sent immediately after the call `web.setRemoteDescription()`
 *   doesn't wait for the result of the SDP negotiation.
 * 
 *   `rtcPeerConnection.onaddstream = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onaddstream`
 */
rtc.RTCPeerConnection.onaddstream = (function rtc$RTCPeerConnection$onaddstream(this$){
return this$.onaddstream();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onaddstream event handler is a property
 *   the code to execute when the addstream event, of type `media.MediaStreamEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   a `media.MediaStream` is added to this connection by the remote
 *   The event is sent immediately after the call `web.setRemoteDescription()`
 *   doesn't wait for the result of the SDP negotiation.
 * 
 *   `rtcPeerConnection.onaddstream = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onaddstream`
 */
rtc.RTCPeerConnection.set_onaddstream_BANG_ = (function rtc$RTCPeerConnection$set_onaddstream_BANG_(this$,val){
return (this$["onaddstream"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onconnectionstatechange property specifies
 *   `web.EventHandler` which is called to handle the connectionstatechange
 *   when it occurs on an instance of `rtc.RTCPeerConnection`. This
 *   whenever the aggregate state of the connection changes.
 * 
 *   `RTCPeerConnection.onconnectionstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onconnectionstatechange`
 */
rtc.RTCPeerConnection.onconnectionstatechange = (function rtc$RTCPeerConnection$onconnectionstatechange(this$){
return this$.onconnectionstatechange();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onconnectionstatechange property specifies
 *   `web.EventHandler` which is called to handle the connectionstatechange
 *   when it occurs on an instance of `rtc.RTCPeerConnection`. This
 *   whenever the aggregate state of the connection changes.
 * 
 *   `RTCPeerConnection.onconnectionstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onconnectionstatechange`
 */
rtc.RTCPeerConnection.set_onconnectionstatechange_BANG_ = (function rtc$RTCPeerConnection$set_onconnectionstatechange_BANG_(this$,val){
return (this$["onconnectionstatechange"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.ondatachannel property is an `web.EventHandler`
 *   specifies a function which is called when the datachannel event
 *   on an `rtc.RTCPeerConnection`. This event, of type `rtc.RTCDataChannelEvent`,
 *   sent when an `rtc.RTCDataChannel` is added to the connection
 *   the remote peer calling `web.createDataChannel()`.
 * 
 *   `RTCPeerConnection.ondatachannel = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ondatachannel`
 */
rtc.RTCPeerConnection.ondatachannel = (function rtc$RTCPeerConnection$ondatachannel(this$){
return this$.ondatachannel();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.ondatachannel property is an `web.EventHandler`
 *   specifies a function which is called when the datachannel event
 *   on an `rtc.RTCPeerConnection`. This event, of type `rtc.RTCDataChannelEvent`,
 *   sent when an `rtc.RTCDataChannel` is added to the connection
 *   the remote peer calling `web.createDataChannel()`.
 * 
 *   `RTCPeerConnection.ondatachannel = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ondatachannel`
 */
rtc.RTCPeerConnection.set_ondatachannel_BANG_ = (function rtc$RTCPeerConnection$set_ondatachannel_BANG_(this$,val){
return (this$["ondatachannel"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection property `web.onicecandidate` property
 *   an `web.EventHandler` which specifies a function to be called
 *   the icecandidate event occurs on an `rtc.RTCPeerConnection` instance.
 *   happens whenever the local ICE agent needs to deliver a message
 *   the other peer through the signaling server.
 * 
 *   `rtcPeerConnection.onicecandidate = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate`
 */
rtc.RTCPeerConnection.onicecandidate = (function rtc$RTCPeerConnection$onicecandidate(this$){
return this$.onicecandidate();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection property `web.onicecandidate` property
 *   an `web.EventHandler` which specifies a function to be called
 *   the icecandidate event occurs on an `rtc.RTCPeerConnection` instance.
 *   happens whenever the local ICE agent needs to deliver a message
 *   the other peer through the signaling server.
 * 
 *   `rtcPeerConnection.onicecandidate = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate`
 */
rtc.RTCPeerConnection.set_onicecandidate_BANG_ = (function rtc$RTCPeerConnection$set_onicecandidate_BANG_(this$,val){
return (this$["onicecandidate"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.oniceconnectionstatechange property is
 *   event handler which specifies a function to be called when the
 *   event is fired on an `rtc.RTCPeerConnection` instance. This happens
 *   the state of the connection's ICE agent, as represented by the
 *   property, changes.
 * 
 *   `RTCPeerConnection.oniceconnectionstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange`
 */
rtc.RTCPeerConnection.oniceconnectionstatechange = (function rtc$RTCPeerConnection$oniceconnectionstatechange(this$){
return this$.oniceconnectionstatechange();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.oniceconnectionstatechange property is
 *   event handler which specifies a function to be called when the
 *   event is fired on an `rtc.RTCPeerConnection` instance. This happens
 *   the state of the connection's ICE agent, as represented by the
 *   property, changes.
 * 
 *   `RTCPeerConnection.oniceconnectionstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange`
 */
rtc.RTCPeerConnection.set_oniceconnectionstatechange_BANG_ = (function rtc$RTCPeerConnection$set_oniceconnectionstatechange_BANG_(this$,val){
return (this$["oniceconnectionstatechange"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onicegatheringstatechange property is an
 *   which specifies a function to be called when the icegatheringstatechange
 *   is sent to an `rtc.RTCPeerConnection` instance. This happens
 *   the ICE gathering state—that is, whether or not the ICE agent
 *   actively gathering candidates—changes.
 * 
 *   `RTCPeerConnection.onicegatheringstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange`
 */
rtc.RTCPeerConnection.onicegatheringstatechange = (function rtc$RTCPeerConnection$onicegatheringstatechange(this$){
return this$.onicegatheringstatechange();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onicegatheringstatechange property is an
 *   which specifies a function to be called when the icegatheringstatechange
 *   is sent to an `rtc.RTCPeerConnection` instance. This happens
 *   the ICE gathering state—that is, whether or not the ICE agent
 *   actively gathering candidates—changes.
 * 
 *   `RTCPeerConnection.onicegatheringstatechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange`
 */
rtc.RTCPeerConnection.set_onicegatheringstatechange_BANG_ = (function rtc$RTCPeerConnection$set_onicegatheringstatechange_BANG_(this$,val){
return (this$["onicegatheringstatechange"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidentityresult event handler is a property
 *   the code to execute when the identityresult event, of type `rtc.RTCIdentityEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   an identity assertion is generated, via `web.getIdentityAssertion()`
 *   during the creation of an offer or an answer.
 * 
 *   `peerconnection.onidentityresult = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidentityresult`
 */
rtc.RTCPeerConnection.onidentityresult = (function rtc$RTCPeerConnection$onidentityresult(this$){
return this$.onidentityresult();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidentityresult event handler is a property
 *   the code to execute when the identityresult event, of type `rtc.RTCIdentityEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   an identity assertion is generated, via `web.getIdentityAssertion()`
 *   during the creation of an offer or an answer.
 * 
 *   `peerconnection.onidentityresult = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidentityresult`
 */
rtc.RTCPeerConnection.set_onidentityresult_BANG_ = (function rtc$RTCPeerConnection$set_onidentityresult_BANG_(this$,val){
return (this$["onidentityresult"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidpassertionerror event handler is a
 *   containing the code to execute whent the idpassertionerror event,
 *   type `rtc.RTCIdentityErrorEvent`, is received by this `rtc.RTCPeerConnection`.
 *   an event is sent when the associated identity provider (IdP)
 *   an error while generating an identity assertion.
 * 
 *   `peerconnection.onidpassertionerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpassertionerror`
 */
rtc.RTCPeerConnection.onidpassertionerror = (function rtc$RTCPeerConnection$onidpassertionerror(this$){
return this$.onidpassertionerror();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidpassertionerror event handler is a
 *   containing the code to execute whent the idpassertionerror event,
 *   type `rtc.RTCIdentityErrorEvent`, is received by this `rtc.RTCPeerConnection`.
 *   an event is sent when the associated identity provider (IdP)
 *   an error while generating an identity assertion.
 * 
 *   `peerconnection.onidpassertionerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpassertionerror`
 */
rtc.RTCPeerConnection.set_onidpassertionerror_BANG_ = (function rtc$RTCPeerConnection$set_onidpassertionerror_BANG_(this$,val){
return (this$["onidpassertionerror"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidpvalidationerror event handler is a
 *   containing the code to execute whent the idpvalidationerror event,
 *   type `rtc.RTCIdentityErrorEvent`, is received by this `rtc.RTCPeerConnection`.
 *   an event is sent when the associated identity provider (IdP)
 *   an error while validating an identity assertion.
 * 
 *   `peerconnection.onidpvalidationerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpvalidationerror`
 */
rtc.RTCPeerConnection.onidpvalidationerror = (function rtc$RTCPeerConnection$onidpvalidationerror(this$){
return this$.onidpvalidationerror();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onidpvalidationerror event handler is a
 *   containing the code to execute whent the idpvalidationerror event,
 *   type `rtc.RTCIdentityErrorEvent`, is received by this `rtc.RTCPeerConnection`.
 *   an event is sent when the associated identity provider (IdP)
 *   an error while validating an identity assertion.
 * 
 *   `peerconnection.onidpvalidationerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onidpvalidationerror`
 */
rtc.RTCPeerConnection.set_onidpvalidationerror_BANG_ = (function rtc$RTCPeerConnection$set_onidpvalidationerror_BANG_(this$,val){
return (this$["onidpvalidationerror"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCPeerConnection` interface's onnegotiationneeded property
 *   an `web.EventListener` which specifies a function which is called
 *   handle the negotiationneeded event when it occurs on an `rtc.RTCPeerConnection`
 *   This event is fired when a change has occurred which requires
 *   negotiation. This negotiation should be carried out as the offerer,
 *   some session changes cannot be negotiated as the answerer.
 * 
 *   `RTCPeerConnection.onnegotiationneeded = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded`
 */
rtc.RTCPeerConnection.onnegotiationneeded = (function rtc$RTCPeerConnection$onnegotiationneeded(this$){
return this$.onnegotiationneeded();
});
/**
 * Property.
 * 
 *   The `rtc.RTCPeerConnection` interface's onnegotiationneeded property
 *   an `web.EventListener` which specifies a function which is called
 *   handle the negotiationneeded event when it occurs on an `rtc.RTCPeerConnection`
 *   This event is fired when a change has occurred which requires
 *   negotiation. This negotiation should be carried out as the offerer,
 *   some session changes cannot be negotiated as the answerer.
 * 
 *   `RTCPeerConnection.onnegotiationneeded = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded`
 */
rtc.RTCPeerConnection.set_onnegotiationneeded_BANG_ = (function rtc$RTCPeerConnection$set_onnegotiationneeded_BANG_(this$,val){
return (this$["onnegotiationneeded"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onpeeridentity event handler is a property
 *   the code to execute whent the peeridentity event, of type `web.Event`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   an identity assertion, received from a peer, has been successfully
 * 
 *   `peerconnection.onpeeridentity = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onpeeridentity`
 */
rtc.RTCPeerConnection.onpeeridentity = (function rtc$RTCPeerConnection$onpeeridentity(this$){
return this$.onpeeridentity();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onpeeridentity event handler is a property
 *   the code to execute whent the peeridentity event, of type `web.Event`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   an identity assertion, received from a peer, has been successfully
 * 
 *   `peerconnection.onpeeridentity = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onpeeridentity`
 */
rtc.RTCPeerConnection.set_onpeeridentity_BANG_ = (function rtc$RTCPeerConnection$set_onpeeridentity_BANG_(this$,val){
return (this$["onpeeridentity"] = val);
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onremovestream event handler is a property
 *   the code to execute when the removestream event, of type `media.MediaStreamEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   a `media.MediaStream` is removed from this connection.
 * 
 *   `peerconnection.onremovestream = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onremovestream`
 */
rtc.RTCPeerConnection.onremovestream = (function rtc$RTCPeerConnection$onremovestream(this$){
return this$.onremovestream();
});
/**
 * Property.
 * 
 *   The RTCPeerConnection.onremovestream event handler is a property
 *   the code to execute when the removestream event, of type `media.MediaStreamEvent`,
 *   received by this `rtc.RTCPeerConnection`. Such an event is sent
 *   a `media.MediaStream` is removed from this connection.
 * 
 *   `peerconnection.onremovestream = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onremovestream`
 */
rtc.RTCPeerConnection.set_onremovestream_BANG_ = (function rtc$RTCPeerConnection$set_onremovestream_BANG_(this$,val){
return (this$["onremovestream"] = val);
});
/**
 * Property.
 * 
 *   The onsignalingstatechange property of the `rtc.RTCPeerConnection`
 *   is an `web.EventHandler` which specifies a function to be called
 *   the signalingstatechange event occurs on an `rtc.RTCPeerConnection`
 * 
 *   `RTCPeerConnection.onsignalingstatechange = errorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange`
 */
rtc.RTCPeerConnection.onsignalingstatechange = (function rtc$RTCPeerConnection$onsignalingstatechange(this$){
return this$.onsignalingstatechange();
});
/**
 * Property.
 * 
 *   The onsignalingstatechange property of the `rtc.RTCPeerConnection`
 *   is an `web.EventHandler` which specifies a function to be called
 *   the signalingstatechange event occurs on an `rtc.RTCPeerConnection`
 * 
 *   `RTCPeerConnection.onsignalingstatechange = errorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange`
 */
rtc.RTCPeerConnection.set_onsignalingstatechange_BANG_ = (function rtc$RTCPeerConnection$set_onsignalingstatechange_BANG_(this$,val){
return (this$["onsignalingstatechange"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCPeerConnection` property ontrack is an `web.EventHandler`
 *   specifies a function to be called when the track event occurs,
 *   that a track has been added to the `rtc.RTCPeerConnection`.
 * 
 *   `RTCPeerConnection.ontrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack`
 */
rtc.RTCPeerConnection.ontrack = (function rtc$RTCPeerConnection$ontrack(this$){
return this$.ontrack();
});
/**
 * Property.
 * 
 *   The `rtc.RTCPeerConnection` property ontrack is an `web.EventHandler`
 *   specifies a function to be called when the track event occurs,
 *   that a track has been added to the `rtc.RTCPeerConnection`.
 * 
 *   `RTCPeerConnection.ontrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack`
 */
rtc.RTCPeerConnection.set_ontrack_BANG_ = (function rtc$RTCPeerConnection$set_ontrack_BANG_(this$,val){
return (this$["ontrack"] = val);
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCPeerConnection` property peerIdentity returns
 *   JavaScript `web.Promise` that resolves to an `rtc.RTCIdentityAssertion`
 *   contains a `dom.DOMString` identifying the remote peer.
 * 
 *   `var identity = rtcPeerConnection.peerIdentity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/peerIdentity`
 */
rtc.RTCPeerConnection.peer_identity = (function rtc$RTCPeerConnection$peer_identity(this$){
return this$.peerIdentity();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.pendingLocalDescription
 *   an `rtc.RTCSessionDescription` object describing a pending configuration
 *   for the local end of the connection. This does not describe the
 *   as it currently stands, but as it may exist in the near future.
 *   `rtc.RTCPeerConnection.currentLocalDescription` or `rtc.RTCPeerConnection.localDescription`
 *   get the current state of the endpoint. For details on the difference,
 *   Pending and current descriptions in WebRTC connectivity.
 * 
 *   `sessionDescription = RTCPeerConnection.pendingLocalDescription;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/pendingLocalDescription`
 */
rtc.RTCPeerConnection.pending_local_description = (function rtc$RTCPeerConnection$pending_local_description(this$){
return this$.pendingLocalDescription();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.pendingRemoteDescription
 *   an `rtc.RTCSessionDescription` object describing a pending configuration
 *   for the remote end of the connection. This does not describe
 *   connection as it currently stands, but as it may exist in the
 *   future. Use `rtc.RTCPeerConnection.currentRemoteDescription`
 *   `rtc.RTCPeerConnection.remoteDescription` to get the current
 *   description for the remote endpoint. For details on the difference,
 *   Pending and current descriptions in WebRTC connectivity.
 * 
 *   `sessionDescription = RTCPeerConnection.pendingRemoteDescription;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/pendingRemoteDescription`
 */
rtc.RTCPeerConnection.pending_remote_description = (function rtc$RTCPeerConnection$pending_remote_description(this$){
return this$.pendingRemoteDescription();
});
/**
 * Property.
 * 
 *   The read-only property RTCPeerConnection.remoteDescription returns
 *   `rtc.RTCSessionDescription` describing the session (which includes
 *   and media information) for the remote end of the connection.
 *   this hasn't been set yet, this is null.
 * 
 *   `var sessionDescription = peerConnection.remoteDescription;
 * 
 *   On a more fundamental level, the returned value is the value of `rtc.RTCPeerConnection.pendingRemoteDescription` if that property isn't null; otherwise, the value of `rtc.RTCPeerConnection.currentRemoteDescription` is returned. See Pending and current descriptions in WebRTC connectivity for details on this algorithm and why it's used.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/remoteDescription`
 */
rtc.RTCPeerConnection.remote_description = (function rtc$RTCPeerConnection$remote_description(this$){
return this$.remoteDescription();
});
/**
 * Property.
 * 
 *   The read-only sctp property on the `rtc.RTCPeerConnection` interface
 *   an `rtc.RTCSctpTransport` describing the SCTP transport over
 *   SCTP data is being sent and received. If SCTP hasn't been negotiated,
 *   value is null.
 * 
 *   `var sctp = RTCPeerConnection.sctp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/sctp`
 */
rtc.RTCPeerConnection.sctp = (function rtc$RTCPeerConnection$sctp(this$){
return this$.sctp();
});
/**
 * Property.
 * 
 *   The read-only sctp property on the `rtc.RTCPeerConnection` interface
 *   an `rtc.RTCSctpTransport` describing the SCTP transport over
 *   SCTP data is being sent and received. If SCTP hasn't been negotiated,
 *   value is null.
 * 
 *   `var sctp = RTCPeerConnection.sctp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/sctp`
 */
rtc.RTCPeerConnection.set_sctp_BANG_ = (function rtc$RTCPeerConnection$set_sctp_BANG_(this$,val){
return (this$["sctp"] = val);
});
/**
 * Property.
 * 
 *   The read-only signalingState property on the `rtc.RTCPeerConnection`
 *   returns one of the string values specified by the RTCSignalingState
 *   these values describe the state of the signaling process on the
 *   end of the connection while connecting or reconnecting to another
 *   See Signaling in Lifetime of a WebRTC session for more details
 *   the signaling process.
 * 
 *   `var state = RTCPeerConnection.signalingState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/signalingState`
 */
rtc.RTCPeerConnection.signaling_state = (function rtc$RTCPeerConnection$signaling_state(this$){
return this$.signalingState();
});

//# sourceMappingURL=RTCPeerConnection.js.map?rel=1565798810074
