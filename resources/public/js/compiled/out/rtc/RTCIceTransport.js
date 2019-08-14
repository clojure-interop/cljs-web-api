// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceTransport');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `rtc.RTCIceTransport` method getLocalCandidates() returns
 *   array of `rtc.RTCIceCandidate` objects, one for each of the candidates
 *   have been gathered by the local device during the current ICE
 *   session.
 * 
 *   `localCandidates = RTCIceTransport.getLocalCandidates();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalCandidates`
 */
rtc.RTCIceTransport.get_local_candidates = (function rtc$RTCIceTransport$get_local_candidates(this$){
return this$.getLocalCandidates();
});
/**
 * Method.
 * 
 *   The `rtc.RTCIceTransport` method getLocalParameters() returns
 *   `rtc.RTCIceParameters` object which provides information uniquely
 *   the local peer for the duration of the ICE session.
 * 
 *   `parameters = RTCIceTransport.getLocalParameters();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getLocalParameters`
 */
rtc.RTCIceTransport.get_local_parameters = (function rtc$RTCIceTransport$get_local_parameters(this$){
return this$.getLocalParameters();
});
/**
 * Method.
 * 
 *   The `rtc.RTCIceTransport` method getSelectedCandidatePair() returns
 *   `rtc.RTCIceCandidatePair` object containing the current best-choice
 *   of ICE candidates describing the configuration of the endpoints
 *   the transport.
 * 
 *   `candidatePair = RTCIceTransport.getSelectedCandidatePair();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getSelectedCandidatePair`
 */
rtc.RTCIceTransport.get_selected_candidate_pair = (function rtc$RTCIceTransport$get_selected_candidate_pair(this$){
return this$.getSelectedCandidatePair();
});
/**
 * Method.
 * 
 *   The `rtc.RTCIceTransport` method getRemoteCandidates() returns
 *   array which contains one `rtc.RTCIceCandidate` for each of the
 *   that have been received from the remote peer so far during the
 *   ICE gathering session.
 * 
 *   `remoteCandidates = RTCIceTransport.getRemoteCandidates();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteCandidates`
 */
rtc.RTCIceTransport.get_remote_candidates = (function rtc$RTCIceTransport$get_remote_candidates(this$){
return this$.getRemoteCandidates();
});
/**
 * Method.
 * 
 *   The `rtc.RTCIceTransport` method getRemoteParameters() returns
 *   `rtc.RTCIceParameters` object which provides information uniquely
 *   the remote peer for the duration of the ICE session.
 * 
 *   `parameters = RTCIceTransport.getRemoteParameters();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/getRemoteParameters`
 */
rtc.RTCIceTransport.get_remote_parameters = (function rtc$RTCIceTransport$get_remote_parameters(this$){
return this$.getRemoteParameters();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCIceTransport` property component specifies
 *   the object is serving to transport RTP or RTCP. The value is
 *   of the strings in `rtc.RTCIceComponent`.
 * 
 *   `iceComponent = RTCIceTransport.component;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/component`
 */
rtc.RTCIceTransport.component = (function rtc$RTCIceTransport$component(this$){
return this$.component();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCIceTransport` property gatheringState returns
 *   `dom.DOMString` from the enumerated type `rtc.RTCIceGathererState`
 *   indicates what gathering state the ICE agent is currently in:
 *   \"gathering\", or \"complete\".
 * 
 *   `gatherState = RTCIceTransport.gatheringState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/gatheringState`
 */
rtc.RTCIceTransport.gathering_state = (function rtc$RTCIceTransport$gathering_state(this$){
return this$.gatheringState();
});
/**
 * Property.
 * 
 *   The ongatheringstatechange event handler for the `rtc.RTCIceTransport`
 *   specifies an event handler that is to be called when the gatheringstatechange
 *   occurs on the transport.
 * 
 *   `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`
 */
rtc.RTCIceTransport.ongatheringstatechange = (function rtc$RTCIceTransport$ongatheringstatechange(this$){
return this$.ongatheringstatechange();
});
/**
 * Property.
 * 
 *   The ongatheringstatechange event handler for the `rtc.RTCIceTransport`
 *   specifies an event handler that is to be called when the gatheringstatechange
 *   occurs on the transport.
 * 
 *   `RTCIceTransport.ongatheringstatechange = stateChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/ongatheringstatechange`
 */
rtc.RTCIceTransport.set_ongatheringstatechange_BANG_ = (function rtc$RTCIceTransport$set_ongatheringstatechange_BANG_(this$,val){
return (this$["ongatheringstatechange"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceTransport` interface's onselectedcandidatepairchange
 *   handler specifies a function to be called to handle the selectedcandidatepairchange
 *   which is fired when the ICE agent selects a new candidate pair
 *   be used for the connection.
 * 
 *   `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`
 */
rtc.RTCIceTransport.onselectedcandidatepairchange = (function rtc$RTCIceTransport$onselectedcandidatepairchange(this$){
return this$.onselectedcandidatepairchange();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceTransport` interface's onselectedcandidatepairchange
 *   handler specifies a function to be called to handle the selectedcandidatepairchange
 *   which is fired when the ICE agent selects a new candidate pair
 *   be used for the connection.
 * 
 *   `RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange`
 */
rtc.RTCIceTransport.set_onselectedcandidatepairchange_BANG_ = (function rtc$RTCIceTransport$set_onselectedcandidatepairchange_BANG_(this$,val){
return (this$["onselectedcandidatepairchange"] = val);
});
/**
 * Property.
 * 
 *   The onstatechange event handler for the `rtc.RTCIceTransport`
 *   is a property which specifies a function to serve as the `web.EventHandler`
 *   the statechange event that is fired whenever the transport's
 *   changes.
 * 
 *   `RTCIceTransport.onstatechange = stateChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`
 */
rtc.RTCIceTransport.onstatechange = (function rtc$RTCIceTransport$onstatechange(this$){
return this$.onstatechange();
});
/**
 * Property.
 * 
 *   The onstatechange event handler for the `rtc.RTCIceTransport`
 *   is a property which specifies a function to serve as the `web.EventHandler`
 *   the statechange event that is fired whenever the transport's
 *   changes.
 * 
 *   `RTCIceTransport.onstatechange = stateChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/onstatechange`
 */
rtc.RTCIceTransport.set_onstatechange_BANG_ = (function rtc$RTCIceTransport$set_onstatechange_BANG_(this$,val){
return (this$["onstatechange"] = val);
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCIceTransport` property role indicates which
 *   role the transport is fulfilling: that of the controlling agent,
 *   the agent that is being controlled.
 * 
 *   `iceRole = RTCIceTransport.role;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/role`
 */
rtc.RTCIceTransport.role = (function rtc$RTCIceTransport$role(this$){
return this$.role();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCIceTransport` property state returns the
 *   state of the ICE transport, so you can determine the state of
 *   gathering in which the ICE agent currently is operating.
 * 
 *   `iceState = iceTransport.state;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/state`
 */
rtc.RTCIceTransport.state = (function rtc$RTCIceTransport$state(this$){
return this$.state();
});

//# sourceMappingURL=RTCIceTransport.js.map?rel=1565798861609
