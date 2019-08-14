// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DisplayMediaStreamConstraints');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `web.DisplayMediaStreamConstraints` dictionary's audio property
 *   used to specify whether or not to request that the `media.MediaStream`
 *   screen display contents also include an audio track. This value
 *   simply be a Boolean, where true indicates that an audio track
 *   be included an false (the default) indicates that no audio should
 *   included in the stream.
 * 
 *   `displayMediaStreamConstraints.audio = allowAudioFlag;
 *   displayMediaStreamConstraints.audio = mediaTrackConstraints;
 * 
 *   displayMediaStreamConstraints = {
 *   audio: allowAudioFlag|mediaTrackConstraints;
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/audio`
 */
web.DisplayMediaStreamConstraints.audio = (function web$DisplayMediaStreamConstraints$audio(this$){
return this$.audio();
});
/**
 * Property.
 * 
 *   The `web.DisplayMediaStreamConstraints` dictionary's audio property
 *   used to specify whether or not to request that the `media.MediaStream`
 *   screen display contents also include an audio track. This value
 *   simply be a Boolean, where true indicates that an audio track
 *   be included an false (the default) indicates that no audio should
 *   included in the stream.
 * 
 *   `displayMediaStreamConstraints.audio = allowAudioFlag;
 *   displayMediaStreamConstraints.audio = mediaTrackConstraints;
 * 
 *   displayMediaStreamConstraints = {
 *   audio: allowAudioFlag|mediaTrackConstraints;
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/audio`
 */
web.DisplayMediaStreamConstraints.set_audio_BANG_ = (function web$DisplayMediaStreamConstraints$set_audio_BANG_(this$,val){
return (this$["audio"] = val);
});
/**
 * Property.
 * 
 *   The `web.DisplayMediaStreamConstraints` dictionary's video property
 *   used to configure the video track in the stream returned by `web.getDisplayMedia()`.
 * 
 *   `displayMediaStreamConstraints.video = allowVideoFlag;
 *   displayMediaStreamConstraints.video = mediaTrackConstraints;
 * 
 *   displayMediaStreamConstraints = {
 *   video: allowVideoFlag | mediaTrackConstraints;
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/video`
 */
web.DisplayMediaStreamConstraints.video = (function web$DisplayMediaStreamConstraints$video(this$){
return this$.video();
});
/**
 * Property.
 * 
 *   The `web.DisplayMediaStreamConstraints` dictionary's video property
 *   used to configure the video track in the stream returned by `web.getDisplayMedia()`.
 * 
 *   `displayMediaStreamConstraints.video = allowVideoFlag;
 *   displayMediaStreamConstraints.video = mediaTrackConstraints;
 * 
 *   displayMediaStreamConstraints = {
 *   video: allowVideoFlag | mediaTrackConstraints;
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DisplayMediaStreamConstraints/video`
 */
web.DisplayMediaStreamConstraints.set_video_BANG_ = (function web$DisplayMediaStreamConstraints$set_video_BANG_(this$,val){
return (this$["video"] = val);
});

//# sourceMappingURL=DisplayMediaStreamConstraints.js.map?rel=1565798817795
