// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.VideoPlaybackQuality');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `web.VideoPlaybackQuality` interface's read-only corruptedVideoFrames
 *   the number of corrupted video frames that have been received
 *   the `web.<video>` element was last loaded or reloaded.
 * 
 *   `corruptFrameFount = videoPlaybackQuality.corruptedVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames`
 */
web.VideoPlaybackQuality.corrupted_video_frames = (function web$VideoPlaybackQuality$corrupted_video_frames(this$){
return this$.corruptedVideoFrames();
});
/**
 * Property.
 * 
 *   The `web.VideoPlaybackQuality` interface's read-only corruptedVideoFrames
 *   the number of corrupted video frames that have been received
 *   the `web.<video>` element was last loaded or reloaded.
 * 
 *   `corruptFrameFount = videoPlaybackQuality.corruptedVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames`
 */
web.VideoPlaybackQuality.set_corrupted_video_frames_BANG_ = (function web$VideoPlaybackQuality$set_corrupted_video_frames_BANG_(this$,val){
return (this$["corruptedVideoFrames"] = val);
});
/**
 * Property.
 * 
 *   The read-only creationTime property on the `web.VideoPlaybackQuality`
 *   reports the number of milliseconds since the browsing context
 *   created this quality sample was recorded.
 * 
 *   `value = videoPlaybackQuality.creationTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/creationTime`
 */
web.VideoPlaybackQuality.creation_time = (function web$VideoPlaybackQuality$creation_time(this$){
return this$.creationTime();
});
/**
 * Property.
 * 
 *   The read-only creationTime property on the `web.VideoPlaybackQuality`
 *   reports the number of milliseconds since the browsing context
 *   created this quality sample was recorded.
 * 
 *   `value = videoPlaybackQuality.creationTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/creationTime`
 */
web.VideoPlaybackQuality.set_creation_time_BANG_ = (function web$VideoPlaybackQuality$set_creation_time_BANG_(this$,val){
return (this$["creationTime"] = val);
});
/**
 * Property.
 * 
 *   The read-only droppedVideoFrames property of the `web.VideoPlaybackQuality`
 *   returns the number of video frames which have been dropped rather
 *   being displayed since the last time the media was loaded into
 *   `html.HTMLVideoElement`.
 * 
 *   `value = videoPlaybackQuality.droppedVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames`
 */
web.VideoPlaybackQuality.dropped_video_frames = (function web$VideoPlaybackQuality$dropped_video_frames(this$){
return this$.droppedVideoFrames();
});
/**
 * Property.
 * 
 *   The read-only droppedVideoFrames property of the `web.VideoPlaybackQuality`
 *   returns the number of video frames which have been dropped rather
 *   being displayed since the last time the media was loaded into
 *   `html.HTMLVideoElement`.
 * 
 *   `value = videoPlaybackQuality.droppedVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames`
 */
web.VideoPlaybackQuality.set_dropped_video_frames_BANG_ = (function web$VideoPlaybackQuality$set_dropped_video_frames_BANG_(this$,val){
return (this$["droppedVideoFrames"] = val);
});
/**
 * Property.
 * 
 *   The VideoPlaybackQuality.totalFrameDelay read-only property returns
 *   double containing the sum of the frame delay since the creation
 *   the associated `html.HTMLVideoElement`. The frame delay is the
 *   between a frame's theoretical presentation time and its effective
 *   time.
 * 
 *   `value = videoPlaybackQuality.totalFrameDelay;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalFrameDelay`
 */
web.VideoPlaybackQuality.total_frame_delay = (function web$VideoPlaybackQuality$total_frame_delay(this$){
return this$.totalFrameDelay();
});
/**
 * Property.
 * 
 *   The VideoPlaybackQuality.totalFrameDelay read-only property returns
 *   double containing the sum of the frame delay since the creation
 *   the associated `html.HTMLVideoElement`. The frame delay is the
 *   between a frame's theoretical presentation time and its effective
 *   time.
 * 
 *   `value = videoPlaybackQuality.totalFrameDelay;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalFrameDelay`
 */
web.VideoPlaybackQuality.set_total_frame_delay_BANG_ = (function web$VideoPlaybackQuality$set_total_frame_delay_BANG_(this$,val){
return (this$["totalFrameDelay"] = val);
});
/**
 * Property.
 * 
 *   The `web.VideoPlaybackQuality` interface's totalVideoFrames read-only
 *   returns the total number of video frames that have been displayed
 *   dropped since the media was loaded.
 * 
 *   `value = videoPlaybackQuality.totalVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalVideoFrames`
 */
web.VideoPlaybackQuality.total_video_frames = (function web$VideoPlaybackQuality$total_video_frames(this$){
return this$.totalVideoFrames();
});
/**
 * Property.
 * 
 *   The `web.VideoPlaybackQuality` interface's totalVideoFrames read-only
 *   returns the total number of video frames that have been displayed
 *   dropped since the media was loaded.
 * 
 *   `value = videoPlaybackQuality.totalVideoFrames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality/totalVideoFrames`
 */
web.VideoPlaybackQuality.set_total_video_frames_BANG_ = (function web$VideoPlaybackQuality$set_total_video_frames_BANG_(this$,val){
return (this$["totalVideoFrames"] = val);
});

//# sourceMappingURL=VideoPlaybackQuality.js.map?rel=1565798861393
