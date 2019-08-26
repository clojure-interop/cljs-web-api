(ns web.animation.Animation
  "The Animation interface of the Web Animations API represents
  single animation player and provides playback controls and a
  for an animation node or source."
  (:refer-clojure :exclude [reverse]))

(def constructor
  "Constructor.

  The Animation() constructor of the Web Animations API returns a new Animation object instance.

  effect Optional
  The target effect, as an object based on the `AnimationEffectReadOnly` interface, to assign to the animation. Although in the future other effects such as SequenceEffects or GroupEffects might be possible, the only kind of effect currently available is `web.animation.KeyframeEffect`. This can be null (which is the default) to indicate that there should be no effect applied.
  timeline Optional
  Specifies the timeline with which to associate the animation, as an object of a type based on the `web.animation.AnimationTimeline` interface. Currently the only timeline type available is `web.animation.DocumentTimeline`, but in the future there my be timelines associated with gestures or scrolling, for example. The default value is `Document.timeline`, but this can be set to null as well.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation`"
  js/Animation)

(defn cancel
  "Method.

  The Web Animations API's cancel() method of the `web.animation.Animation`
  clears all `web.animation.KeyframeEffect`s caused by this animation
  aborts its playback.

  `Animation.cancel();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel`"
  [this ]
  (-> this (.cancel)))

(defn finish
  "Method.

  The finish() method of the Web Animations API's `web.animation.Animation`
  sets the current playback time to the end of the animation corresponding
  the current playback direction.

  `Animation.finish();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish`"
  [this ]
  (-> this (.finish)))

(defn pause
  "Method.

  The pause() method of the Web Animations API's `web.animation.Animation`
  suspends playback of the animation.

  `animation.pause();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause`"
  [this ]
  (-> this (.pause)))

(defn play
  "Method.

  The play() method of the Web Animations API's `web.animation.Animation`
  starts or resumes playing of an animation. If the animation is
  calling play() restarts the animation, playing it from the beginning.

  `animation.play();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/play`"
  [this ]
  (-> this (.play)))

(defn reverse
  "Method.

  The Animation.reverse() method of the `web.animation.Animation`
  reverses the playback direction, meaning the animation ends at
  beginning. If called on an unplayed animation, the whole animation
  played backwards. If called on a paused animation, the animation
  continue in reverse.

  `animation.reverse();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse`"
  [this ]
  (-> this (.reverse)))

(defn update-playback-rate
  "Method.

  The updatePlaybackRate() method of the Web Animations API's `web.animation.Animation`
  sets the speed of an animation after first synchronizing its
  position.

  `Animation.updatePlaybackRate(2);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate`"
  [this & args]
  (apply (-> this .-updatePlaybackRate) (concat [this] args)))

(defn current-time
  "Property.

  The Animation.currentTime property of the Web Animations API
  and sets the current time value of the animation in milliseconds,
  running or paused.

  `var currentTime = Animation.currentTime;
  Animation.currentTime = newTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime`"
  [this]
  (-> this (.-currentTime)))

(defn set-current-time!
  "Property.

  The Animation.currentTime property of the Web Animations API
  and sets the current time value of the animation in milliseconds,
  running or paused.

  `var currentTime = Animation.currentTime;
  Animation.currentTime = newTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime`"
  [this val]
  (aset this "currentTime" val))

(defn effect
  "Property.

  The Animation.effect property of the Web Animations API gets
  sets the target effect of an animation. The target effect may
  either an effect object of a type based on `AnimationEffectReadOnly`,
  as `web.animation.KeyframeEffect`, or null.

  `var effect = Animation.effect;

  Animation.effect = AnimationEffectReadOnly`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect`"
  [this]
  (-> this (.-effect)))

(defn set-effect!
  "Property.

  The Animation.effect property of the Web Animations API gets
  sets the target effect of an animation. The target effect may
  either an effect object of a type based on `AnimationEffectReadOnly`,
  as `web.animation.KeyframeEffect`, or null.

  `var effect = Animation.effect;

  Animation.effect = AnimationEffectReadOnly`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect`"
  [this val]
  (aset this "effect" val))

(defn finished
  "Property.

  The Animation.finished read-only property of the Web Animations
  returns a `js.Promise` which resolves once the animation has
  playing.

  `var animationsPromise = Animation.finished;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished`"
  [this]
  (-> this (.-finished)))

(defn set-finished!
  "Property.

  The Animation.finished read-only property of the Web Animations
  returns a `js.Promise` which resolves once the animation has
  playing.

  `var animationsPromise = Animation.finished;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished`"
  [this val]
  (aset this "finished" val))

(defn id
  "Property.

  The Animation.id property of the Web Animations API returns or
  a string used to identify the animation.

  `var animationsId = Animation.id;

  Animation.id = newIdString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  The Animation.id property of the Web Animations API returns or
  a string used to identify the animation.

  `var animationsId = Animation.id;

  Animation.id = newIdString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`"
  [this val]
  (aset this "id" val))

(defn pending
  "Property.

  The read-only Animation.pending property of the Web Animations
  indicates whether the animation is currently waiting for an asynchronous
  such as initiating playback or pausing a running animation.

  `var pending = Animation.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending`"
  [this]
  (-> this (.-pending)))

(defn set-pending!
  "Property.

  The read-only Animation.pending property of the Web Animations
  indicates whether the animation is currently waiting for an asynchronous
  such as initiating playback or pausing a running animation.

  `var pending = Animation.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending`"
  [this val]
  (aset this "pending" val))

(defn play-state
  "Property.

  The Animation.playState property of the Web Animations API returns
  sets an enumerated value describing the playback state of an

  `var currentPlayState = Animation.playState;

  Animation.playState = newState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState`"
  [this]
  (-> this (.-playState)))

(defn set-play-state!
  "Property.

  The Animation.playState property of the Web Animations API returns
  sets an enumerated value describing the playback state of an

  `var currentPlayState = Animation.playState;

  Animation.playState = newState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState`"
  [this val]
  (aset this "playState" val))

(defn playback-rate
  "Property.

  The Animation.playbackRate property of the Web Animations API
  or sets the playback rate of the animation.

  `var currentPlaybackRate = Animation.playbackRate;

  Animation.playbackRate = newRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`"
  [this]
  (-> this (.-playbackRate)))

(defn set-playback-rate!
  "Property.

  The Animation.playbackRate property of the Web Animations API
  or sets the playback rate of the animation.

  `var currentPlaybackRate = Animation.playbackRate;

  Animation.playbackRate = newRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`"
  [this val]
  (aset this "playbackRate" val))

(defn ready
  "Property.

  The read-only Animation.ready property of the Web Animations
  returns a `js.Promise` which resolves when the animation is ready
  play. A new promise is created every time the animation enters
  \\\"pending\\\" play state as well as when the animation is canceled,
  in both of those scenarios, the animation is ready to be started

  `var readyPromise = Animation.ready;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready`"
  [this]
  (-> this (.-ready)))

(defn set-ready!
  "Property.

  The read-only Animation.ready property of the Web Animations
  returns a `js.Promise` which resolves when the animation is ready
  play. A new promise is created every time the animation enters
  \\\"pending\\\" play state as well as when the animation is canceled,
  in both of those scenarios, the animation is ready to be started

  `var readyPromise = Animation.ready;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready`"
  [this val]
  (aset this "ready" val))

(defn start-time
  "Property.

  The Animation.startTime property of the `web.animation.Animation`
  is a double-precision floating-point value which indicates the
  time when an animation's playback should begin.

  `var animationStartedWhen = Animation.startTime;

  Animation.startTime = newStartTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime`"
  [this]
  (-> this (.-startTime)))

(defn set-start-time!
  "Property.

  The Animation.startTime property of the `web.animation.Animation`
  is a double-precision floating-point value which indicates the
  time when an animation's playback should begin.

  `var animationStartedWhen = Animation.startTime;

  Animation.startTime = newStartTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime`"
  [this val]
  (aset this "startTime" val))

(defn timeline
  "Property.

  The Animation.timeline property of the `web.animation.Animation`
  returns or sets the `timeline` associated with this animation.
  timeline is a source of time values for synchronization purposes,
  is an `web.animation.AnimationTimeline`-based object. By default,
  animation's timeline and the `web.Document`'s timeline are the

  `var animationsTimeline = Animation.timeline;

  Animation.timeline = newTimeline;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline`"
  [this]
  (-> this (.-timeline)))

(defn set-timeline!
  "Property.

  The Animation.timeline property of the `web.animation.Animation`
  returns or sets the `timeline` associated with this animation.
  timeline is a source of time values for synchronization purposes,
  is an `web.animation.AnimationTimeline`-based object. By default,
  animation's timeline and the `web.Document`'s timeline are the

  `var animationsTimeline = Animation.timeline;

  Animation.timeline = newTimeline;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline`"
  [this val]
  (aset this "timeline" val))

(defn oncancel
  "Property.

  The oncancel property of the Web Animations API's `web.animation.Animation`
  is the event handler for the cancel event.

  `var cancelHandler = Animation.oncancel;

  Animation.oncancel = cancelHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`"
  [this]
  (-> this (.-oncancel)))

(defn set-oncancel!
  "Property.

  The oncancel property of the Web Animations API's `web.animation.Animation`
  is the event handler for the cancel event.

  `var cancelHandler = Animation.oncancel;

  Animation.oncancel = cancelHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`"
  [this val]
  (aset this "oncancel" val))

(defn onfinish
  "Property.

  The `web.animation.Animation` interface's onfinish property (from
  Web Animations API) is the event handler for the finish event.
  event is sent when the animation finishes playing.

  `var finishHandler = Animation.onfinish;

  Animation.onfinish = finishHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish`"
  [this]
  (-> this (.-onfinish)))

(defn set-onfinish!
  "Property.

  The `web.animation.Animation` interface's onfinish property (from
  Web Animations API) is the event handler for the finish event.
  event is sent when the animation finishes playing.

  `var finishHandler = Animation.onfinish;

  Animation.onfinish = finishHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish`"
  [this val]
  (aset this "onfinish" val))

