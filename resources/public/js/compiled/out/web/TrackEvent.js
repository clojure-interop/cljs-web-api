// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TrackEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The TrackEvent() constructor creates and returns a new `web.TrackEvent` object describing an event which occurred on a list of tracks (`audio.AudioTrackList`, `web.VideoTrackList`, or `web.TextTrackList`).
 * 
 *   type
 *   The type of track event which is described by the object: \"addtrack\" or \"removetrack\".
 *   eventInfo Optional
 *   An optional dictionary providing additional information configuring the new event; it can contain the following fields in any combination:
 * 
 *   track Optional
 *   The track to which the event refers; this is null by default, but should be set to a `web.VideoTrack`, `audio.AudioTrack`, or `web.TextTrack` as appropriate given the type of track.
 *   bubbles Optional
 *   A Boolean indicating whether the event bubbles or not.
 *   cancelable Optional
 *   A Boolean indicating whether or not the event can be canceled.
 *   composed Optional
 *   A Boolean indicating whether or not the event will trigger listeners outside of a shadow root; see `web.Event.composed` for more details.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent/TrackEvent`
 */
web.TrackEvent.constructor$ = TrackEvent;
/**
 * Property.
 * 
 *   The read-only track property of the `web.TrackEvent` interface
 *   the media track object to which the event applies.
 * 
 *   `track = TrackEvent.track;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent/track`
 */
web.TrackEvent.track = (function web$TrackEvent$track(this$){
return this$.track();
});

//# sourceMappingURL=TrackEvent.js.map?rel=1565798842488
