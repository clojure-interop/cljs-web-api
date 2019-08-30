(ns web.animation.Animation
  "The Animation interface of the Web Animations API represents
  single animation player and provides playback controls and a
  for an animation node or source."
  (:refer-clojure :exclude [reverse]))

(defn cancel
  "Method.

  [Experimental]

  The Web Animations API's cancel() method of the `web.animation.Animation`
  clears all `web.animation.KeyframeEffect`s caused by this animation
  aborts its playback.

  `Animation.cancel();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel`"
  [this ]
  (-> this (.cancel)))

(defn finish
  "Method.

  [Experimental]

  The finish() method of the Web Animations API's `web.animation.Animation`
  sets the current playback time to the end of the animation corresponding
  the current playback direction.

  `Animation.finish();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish`"
  [this ]
  (-> this (.finish)))

(defn pause
  "Method.

  [Experimental]

  The pause() method of the Web Animations API's `web.animation.Animation`
  suspends playback of the animation.

  `animation.pause();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause`"
  [this ]
  (-> this (.pause)))

(defn play
  "Method.

  [Experimental]

  The play() method of the Web Animations API's `web.animation.Animation`
  starts or resumes playing of an animation. If the animation is
  calling play() restarts the animation, playing it from the beginning.

  `animation.play();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/play`"
  [this ]
  (-> this (.play)))

(defn reverse
  "Method.

  [Experimental]

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

  [Experimental]

  The updatePlaybackRate() method of the Web Animations API's `web.animation.Animation`
  sets the speed of an animation after first synchronizing its
  position.

  `Animation.updatePlaybackRate(2);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate`"
  [this & args]
  (-> this .-updatePlaybackRate (.apply this (clj->js args))))

(defn current-time
  "Property.

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Read Only]
  [Experimental]

  The Animation.finished read-only property of the Web Animations
  returns a `js.Promise` which resolves once the animation has
  playing.

  `var animationsPromise = Animation.finished;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished`"
  [this]
  (-> this (.-finished)))

(defn id
  "Property.

  [Experimental]

  The Animation.id property of the Web Animations API returns or
  a string used to identify the animation.

  `var animationsId = Animation.id;

  Animation.id = newIdString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  [Experimental]

  The Animation.id property of the Web Animations API returns or
  a string used to identify the animation.

  `var animationsId = Animation.id;

  Animation.id = newIdString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/id`"
  [this val]
  (aset this "id" val))

(defn pending
  "Property.

  [Read Only]
  [Experimental]

  The read-only Animation.pending property of the Web Animations
  indicates whether the animation is currently waiting for an asynchronous
  such as initiating playback or pausing a running animation.

  `var pending = Animation.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending`"
  [this]
  (-> this (.-pending)))

(defn play-state
  "Property.

  [Read Only]
  [Experimental]

  The Animation.playState property of the Web Animations API returns
  sets an enumerated value describing the playback state of an

  `var currentPlayState = Animation.playState;

  Animation.playState = newState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState`"
  [this]
  (-> this (.-playState)))

(defn playback-rate
  "Property.

  [Experimental]

  The Animation.playbackRate property of the Web Animations API
  or sets the playback rate of the animation.

  `var currentPlaybackRate = Animation.playbackRate;

  Animation.playbackRate = newRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`"
  [this]
  (-> this (.-playbackRate)))

(defn set-playback-rate!
  "Property.

  [Experimental]

  The Animation.playbackRate property of the Web Animations API
  or sets the playback rate of the animation.

  `var currentPlaybackRate = Animation.playbackRate;

  Animation.playbackRate = newRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate`"
  [this val]
  (aset this "playbackRate" val))

(defn ready
  "Property.

  [Read Only]
  [Experimental]

  The read-only Animation.ready property of the Web Animations
  returns a `js.Promise` which resolves when the animation is ready
  play. A new promise is created every time the animation enters
  \\\"pending\\\" play state as well as when the animation is canceled,
  in both of those scenarios, the animation is ready to be started

  `var readyPromise = Animation.ready;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready`"
  [this]
  (-> this (.-ready)))

(defn start-time
  "Property.

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

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

  [Experimental]

  The oncancel property of the Web Animations API's `web.animation.Animation`
  is the event handler for the cancel event.

  `var cancelHandler = Animation.oncancel;

  Animation.oncancel = cancelHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`"
  [this]
  (-> this (.-oncancel)))

(defn set-oncancel!
  "Property.

  [Experimental]

  The oncancel property of the Web Animations API's `web.animation.Animation`
  is the event handler for the cancel event.

  `var cancelHandler = Animation.oncancel;

  Animation.oncancel = cancelHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel`"
  [this val]
  (aset this "oncancel" val))

(defn onfinish
  "Property.

  [Experimental]

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

  [Experimental]

  The `web.animation.Animation` interface's onfinish property (from
  Web Animations API) is the event handler for the finish event.
  event is sent when the animation finishes playing.

  `var finishHandler = Animation.onfinish;

  Animation.onfinish = finishHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish`"
  [this val]
  (aset this "onfinish" val))

