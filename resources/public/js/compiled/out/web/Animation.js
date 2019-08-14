// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Animation');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Animation() constructor of the Web Animations API returns a new Animation object instance.
 * 
 *   effect Optional
 *   The target effect, as an object based on the `web.AnimationEffectReadOnly` interface, to assign to the animation. Although in the future other effects such as SequenceEffects or GroupEffects might be possible, the only kind of effect currently available is `web.KeyframeEffect`. This can be null (which is the default) to indicate that there should be no effect applied.
 *   timeline Optional
 *   Specifies the timeline with which to associate the animation, as an object of a type based on the `web.AnimationTimeline` interface. Currently the only timeline type available is `web.DocumentTimeline`, but in the future there my be timelines associated with gestures or scrolling, for example. The default value is `web.Document.timeline`, but this can be set to null as well.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation`
 */
web.Animation.constructor$ = Animation;
/**
 * Method.
 * 
 *   The Web Animations API's cancel() method of the `web.Animation`
 *   clears all `web.KeyframeEffect`s caused by this animation and
 *   its playback.
 * 
 *   `Animation.cancel();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel`
 */
web.Animation.cancel = (function web$Animation$cancel(this$){
return this$.cancel();
});
/**
 * Method.
 * 
 *   The finish() method of the Web Animations API's `web.Animation`
 *   sets the current playback time to the end of the animation corresponding
 *   the current playback direction.
 * 
 *   `Animation.finish();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish`
 */
web.Animation.finish = (function web$Animation$finish(this$){
return this$.finish();
});
/**
 * Method.
 * 
 *   The pause() method of the Web Animations API's `web.Animation`
 *   suspends playback of the animation.
 * 
 *   `animation.pause();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause`
 */
web.Animation.pause = (function web$Animation$pause(this$){
return this$.pause();
});
/**
 * Method.
 * 
 *   The play() method of the Web Animations API's `web.Animation`
 *   starts or resumes playing of an animation. If the animation is
 *   calling play() restarts the animation, playing it from the beginning.
 * 
 *   `animation.play();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/play`
 */
web.Animation.play = (function web$Animation$play(this$){
return this$.play();
});
/**
 * Method.
 * 
 *   The Animation.reverse() method of the `web.Animation` Interface
 *   the playback direction, meaning the animation ends at its beginning.
 *   called on an unplayed animation, the whole animation is played
 *   If called on a paused animation, the animation will continue
 *   reverse.
 * 
 *   `animation.reverse();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse`
 */
web.Animation.reverse = (function web$Animation$reverse(this$){
return this$.reverse();
});
/**
 * Method.
 * 
 *   The updatePlaybackRate() method of the Web Animations API's `web.Animation`
 *   sets the speed of an animation after first synchronizing its
 *   position.
 * 
 *   `Animation.updatePlaybackRate(2);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate`
 */
web.Animation.update_playback_rate = (function web$Animation$update_playback_rate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50263 = arguments.length;
var i__42557__auto___50264 = (0);
while(true){
if((i__42557__auto___50264 < len__42556__auto___50263)){
args__42563__auto__.push((arguments[i__42557__auto___50264]));

var G__50265 = (i__42557__auto___50264 + (1));
i__42557__auto___50264 = G__50265;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Animation.update_playback_rate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Animation.update_playback_rate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.updatePlaybackRate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Animation.update_playback_rate.cljs$lang$maxFixedArity = (1);

web.Animation.update_playback_rate.cljs$lang$applyTo = (function (seq50261){
var G__50262 = cljs.core.first.call(null,seq50261);
var seq50261__$1 = cljs.core.next.call(null,seq50261);
return web.Animation.update_playback_rate.cljs$core$IFn$_invoke$arity$variadic(G__50262,seq50261__$1);
});

/**
 * Property.
 * 
 *   The Animation.currentTime property of the Web Animations API
 *   and sets the current time value of the animation in milliseconds,
 *   running or paused.
 * 
 *   `var currentTime = Animation.currentTime;
 *   Animation.currentTime = newTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime`
 */
web.Animation.current_time = (function web$Animation$current_time(this$){
return this$.currentTime();
});
/**
 * Property.
 * 
 *   The Animation.currentTime property of the Web Animations API
 *   and sets the current time value of the animation in milliseconds,
 *   running or paused.
 * 
 *   `var currentTime = Animation.currentTime;
 *   Animation.currentTime = newTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime`
 */
web.Animation.set_current_time_BANG_ = (function web$Animation$set_current_time_BANG_(this$,val){
return (this$["currentTime"] = val);
});
/**
 * Property.
 * 
 *   The Animation.effect property of the Web Animations API gets
 *   sets the target effect of an animation. The target effect may
 *   either an effect object of a type based on `web.AnimationEffectReadOnly`,
 *   as `web.KeyframeEffect`, or null.
 * 
 *   `var effect = Animation.effect;
 * 
 *   Animation.effect = AnimationEffectReadOnly`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect`
 */
web.Animation.effect = (function web$Animation$effect(this$){
return this$.effect();
});
/**
 * Property.
 * 
 *   The Animation.effect property of the Web Animations API gets
 *   sets the target effect of an animation. The target effect may
 *   either an effect object of a type based on `web.AnimationEffectReadOnly`,
 *   as `web.KeyframeEffect`, or null.
 * 
 *   `var effect = Animation.effect;
 * 
 *   Animation.effect = AnimationEffectReadOnly`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect`
 */
web.Animation.set_effect_BANG_ = (function web$Animation$set_effect_BANG_(this$,val){
return (this$["effect"] = val);
});
/**
 * Property.
 * 
 *   The Animation.finished read-only property of the Web Animations
 *   returns a `web.Promise` which resolves once the animation has
 *   playing.
 * 
 *   `var animationsPromise = Animation.finished;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished`
 */
web.Animation.finished = (function web$Animation$finished(this$){
return this$.finished();
});
/**
 * Property.
 * 
 *   The Animation.finished read-only property of the Web Animations
 *   returns a `web.Promise` which resolves once the animation has
 *   playing.
 * 
 *   `var animationsPromise = Animation.finished;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished`
 */
web.Animation.set_finished_BANG_ = (function web$Animation$set_finished_BANG_(this$,val){
return (this$["finished"] = val);
});
/**
 * Property.
 * 
 *   The Animation.id property of the Web Animations API returns or
 *   a string used to identify the animation.
 * 
 *   `var animationsId = Animation.id;
 * 
 *   Animation.id = newIdString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`
 */
web.Animation.id = (function web$Animation$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The Animation.id property of the Web Animations API returns or
 *   a string used to identify the animation.
 * 
 *   `var animationsId = Animation.id;
 * 
 *   Animation.id = newIdString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`
 */
web.Animation.set_id_BANG_ = (function web$Animation$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The oncancel property of the Web Animations API's `web.Animation`
 *   is the event handler for the cancel event.
 * 
 *   `var cancelHandler = Animation.oncancel;
 * 
 *   Animation.oncancel = cancelHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`
 */
web.Animation.oncancel = (function web$Animation$oncancel(this$){
return this$.oncancel();
});
/**
 * Property.
 * 
 *   The oncancel property of the Web Animations API's `web.Animation`
 *   is the event handler for the cancel event.
 * 
 *   `var cancelHandler = Animation.oncancel;
 * 
 *   Animation.oncancel = cancelHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`
 */
web.Animation.set_oncancel_BANG_ = (function web$Animation$set_oncancel_BANG_(this$,val){
return (this$["oncancel"] = val);
});
/**
 * Property.
 * 
 *   The `web.Animation` interface's onfinish property (from the Web
 *   API) is the event handler for the finish event. This event is
 *   when the animation finishes playing.
 * 
 *   `var finishHandler = Animation.onfinish;
 * 
 *   Animation.onfinish = finishHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish`
 */
web.Animation.onfinish = (function web$Animation$onfinish(this$){
return this$.onfinish();
});
/**
 * Property.
 * 
 *   The `web.Animation` interface's onfinish property (from the Web
 *   API) is the event handler for the finish event. This event is
 *   when the animation finishes playing.
 * 
 *   `var finishHandler = Animation.onfinish;
 * 
 *   Animation.onfinish = finishHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish`
 */
web.Animation.set_onfinish_BANG_ = (function web$Animation$set_onfinish_BANG_(this$,val){
return (this$["onfinish"] = val);
});
/**
 * Property.
 * 
 *   The read-only Animation.pending property of the Web Animations
 *   indicates whether the animation is currently waiting for an asynchronous
 *   such as initiating playback or pausing a running animation.
 * 
 *   `var pending = Animation.pending;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending`
 */
web.Animation.pending = (function web$Animation$pending(this$){
return this$.pending();
});
/**
 * Property.
 * 
 *   The read-only Animation.pending property of the Web Animations
 *   indicates whether the animation is currently waiting for an asynchronous
 *   such as initiating playback or pausing a running animation.
 * 
 *   `var pending = Animation.pending;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending`
 */
web.Animation.set_pending_BANG_ = (function web$Animation$set_pending_BANG_(this$,val){
return (this$["pending"] = val);
});
/**
 * Property.
 * 
 *   The Animation.playbackRate property of the Web Animations API
 *   or sets the playback rate of the animation.
 * 
 *   `var currentPlaybackRate = Animation.playbackRate;
 * 
 *   Animation.playbackRate = newRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`
 */
web.Animation.playback_rate = (function web$Animation$playback_rate(this$){
return this$.playbackRate();
});
/**
 * Property.
 * 
 *   The Animation.playbackRate property of the Web Animations API
 *   or sets the playback rate of the animation.
 * 
 *   `var currentPlaybackRate = Animation.playbackRate;
 * 
 *   Animation.playbackRate = newRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`
 */
web.Animation.set_playback_rate_BANG_ = (function web$Animation$set_playback_rate_BANG_(this$,val){
return (this$["playbackRate"] = val);
});
/**
 * Property.
 * 
 *   The Animation.playState property of the Web Animations API returns
 *   sets an enumerated value describing the playback state of an
 * 
 *   `var currentPlayState = Animation.playState;
 * 
 *   Animation.playState = newState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState`
 */
web.Animation.play_state = (function web$Animation$play_state(this$){
return this$.playState();
});
/**
 * Property.
 * 
 *   The Animation.playState property of the Web Animations API returns
 *   sets an enumerated value describing the playback state of an
 * 
 *   `var currentPlayState = Animation.playState;
 * 
 *   Animation.playState = newState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState`
 */
web.Animation.set_play_state_BANG_ = (function web$Animation$set_play_state_BANG_(this$,val){
return (this$["playState"] = val);
});
/**
 * Property.
 * 
 *   The read-only Animation.ready property of the Web Animations
 *   returns a `web.Promise` which resolves when the animation is
 *   to play. A new promise is created every time the animation enters
 *   \"pending\" play state as well as when the animation is canceled,
 *   in both of those scenarios, the animation is ready to be started
 * 
 *   `var readyPromise = Animation.ready;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready`
 */
web.Animation.ready = (function web$Animation$ready(this$){
return this$.ready();
});
/**
 * Property.
 * 
 *   The read-only Animation.ready property of the Web Animations
 *   returns a `web.Promise` which resolves when the animation is
 *   to play. A new promise is created every time the animation enters
 *   \"pending\" play state as well as when the animation is canceled,
 *   in both of those scenarios, the animation is ready to be started
 * 
 *   `var readyPromise = Animation.ready;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready`
 */
web.Animation.set_ready_BANG_ = (function web$Animation$set_ready_BANG_(this$,val){
return (this$["ready"] = val);
});
/**
 * Property.
 * 
 *   The Animation.startTime property of the `web.Animation` interface
 *   a double-precision floating-point value which indicates the scheduled
 *   when an animation's playback should begin.
 * 
 *   `var animationStartedWhen = Animation.startTime;
 * 
 *   Animation.startTime = newStartTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime`
 */
web.Animation.start_time = (function web$Animation$start_time(this$){
return this$.startTime();
});
/**
 * Property.
 * 
 *   The Animation.startTime property of the `web.Animation` interface
 *   a double-precision floating-point value which indicates the scheduled
 *   when an animation's playback should begin.
 * 
 *   `var animationStartedWhen = Animation.startTime;
 * 
 *   Animation.startTime = newStartTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime`
 */
web.Animation.set_start_time_BANG_ = (function web$Animation$set_start_time_BANG_(this$,val){
return (this$["startTime"] = val);
});
/**
 * Property.
 * 
 *   The Animation.timeline property of the `web.Animation` interface
 *   or sets the `web.timeline` associated with this animation. A
 *   is a source of time values for synchronization purposes, and
 *   an `web.AnimationTimeline`-based object. By default, the animation's
 *   and the `web.Document`'s timeline are the same.
 * 
 *   `var animationsTimeline = Animation.timeline;
 * 
 *   Animation.timeline = newTimeline;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline`
 */
web.Animation.timeline = (function web$Animation$timeline(this$){
return this$.timeline();
});
/**
 * Property.
 * 
 *   The Animation.timeline property of the `web.Animation` interface
 *   or sets the `web.timeline` associated with this animation. A
 *   is a source of time values for synchronization purposes, and
 *   an `web.AnimationTimeline`-based object. By default, the animation's
 *   and the `web.Document`'s timeline are the same.
 * 
 *   `var animationsTimeline = Animation.timeline;
 * 
 *   Animation.timeline = newTimeline;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline`
 */
web.Animation.set_timeline_BANG_ = (function web$Animation$set_timeline_BANG_(this$,val){
return (this$["timeline"] = val);
});

//# sourceMappingURL=Animation.js.map?rel=1565798837404
