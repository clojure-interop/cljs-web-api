(ns web.svg.SVGAnimationElement
  "The SVGAnimationElement interface is the base interface for all
  the animation element interfaces: `web.svg.SVGAnimateElement`,
  `web.deprecated.SVGAnimateColorElement`, `web.svg.SVGAnimateMotionElement`
  `web.svg.SVGAnimateTransformElement`."
  (:refer-clojure :exclude []))

(defn get-start-time
  "Method.

  Returns a float representing the begin time, in seconds, for
  animation element's current interval, if it exists, regardless
  whether the interval has begun yet. If there is no current interval,
  a DOMException with code INVALID_STATE_ERR is thrown."
  [this & args]
  (-> this .-getStartTime (.apply this (clj->js args))))

(defn get-current-time
  "Method.

  Returns a float representing the current time in seconds relative
  time zero for the given time container."
  [this & args]
  (-> this .-getCurrentTime (.apply this (clj->js args))))

(defn get-simple-duration
  "Method.

  Returns a float representing the number of seconds for the simple
  for this animation. If the simple duration is undefined (e.g.,
  end time is indefinite), then a DOMException with code NOT_SUPPORTED_ERR
  raised."
  [this & args]
  (-> this .-getSimpleDuration (.apply this (clj->js args))))

(defn begin-element
  "Method.

  Creates a begin instance time for the current time. The new instance
  is added to the begin instance times list. The behavior of this
  is equivalent to beginElementAt(0)."
  [this & args]
  (-> this .-beginElement (.apply this (clj->js args))))

(defn begin-element-at
  "Method.

  Creates a begin instance time for the current time plus the
  offset. The new instance time is added to the begin instance
  list."
  [this & args]
  (-> this .-beginElementAt (.apply this (clj->js args))))

(defn end-element
  "Method.

  Creates an end instance time for the current time. The new instance
  is added to the end instance times list. The behavior of this
  is equivalent to endElementAt(0)."
  [this & args]
  (-> this .-endElement (.apply this (clj->js args))))

(defn end-element-at
  "Method.

  Creates a end instance time for the current time plus the specified
  The new instance time is added to the end instance times list."
  [this & args]
  (-> this .-endElementAt (.apply this (clj->js args))))

(defn target-element
  "Property.

  [Read Only]

  The SVGAnimationElement.targetElement property refers to the
  which is being animated. If no target element is being animated
  example, because the href attribute specifies an unknown element),
  value returned is null.

  `var targetElement = someElement.targetElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/targetElement`"
  [this]
  (-> this (.-targetElement)))

(defn onbegin
  "Property.

  [Experimental]

  The SVGAnimationElement.onbegin property refers to the event
  for the beginEvent.

  `var beginEventHandler = someElement.onbegin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onbegin`"
  [this]
  (-> this (.-onbegin)))

(defn set-onbegin!
  "Property.

  [Experimental]

  The SVGAnimationElement.onbegin property refers to the event
  for the beginEvent.

  `var beginEventHandler = someElement.onbegin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onbegin`"
  [this val]
  (aset this "onbegin" val))

(defn onend
  "Property.

  [Experimental]

  The SVGAnimationElement.onend property refers to the event handler
  the endEvent.

  `var endEventHandler = someElement.onend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onend`"
  [this]
  (-> this (.-onend)))

(defn set-onend!
  "Property.

  [Experimental]

  The SVGAnimationElement.onend property refers to the event handler
  the endEvent.

  `var endEventHandler = someElement.onend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onend`"
  [this val]
  (aset this "onend" val))

(defn onrepeat
  "Property.

  [Experimental]

  The SVGAnimationElement.onrepeat property refers to the event
  for the repeatEvent.

  `var repeatEventHandler = someElement.onrepeat;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onrepeat`"
  [this]
  (-> this (.-onrepeat)))

(defn set-onrepeat!
  "Property.

  [Experimental]

  The SVGAnimationElement.onrepeat property refers to the event
  for the repeatEvent.

  `var repeatEventHandler = someElement.onrepeat;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onrepeat`"
  [this val]
  (aset this "onrepeat" val))

