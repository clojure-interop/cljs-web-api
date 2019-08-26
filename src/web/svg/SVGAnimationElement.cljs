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
  (apply (-> this .-getStartTime) (concat [this] args)))

(defn target-element
  "Property.

  The SVGAnimationElement.targetElement property refers to the
  which is being animated. If no target element is being animated
  example, because the href attribute specifies an unknown element),
  value returned is null.

  `var targetElement = someElement.targetElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/targetElement`"
  [this]
  (-> this (.targetElement)))

(defn set-target-element!
  "Property.

  The SVGAnimationElement.targetElement property refers to the
  which is being animated. If no target element is being animated
  example, because the href attribute specifies an unknown element),
  value returned is null.

  `var targetElement = someElement.targetElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/targetElement`"
  [this val]
  (aset this "targetElement" val))

(defn onbegin
  "Property.

  The SVGAnimationElement.onbegin property refers to the event
  for the beginEvent.

  `var beginEventHandler = someElement.onbegin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onbegin`"
  [this]
  (-> this (.onbegin)))

(defn set-onbegin!
  "Property.

  The SVGAnimationElement.onbegin property refers to the event
  for the beginEvent.

  `var beginEventHandler = someElement.onbegin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onbegin`"
  [this val]
  (aset this "onbegin" val))

(defn onend
  "Property.

  The SVGAnimationElement.onend property refers to the event handler
  the endEvent.

  `var endEventHandler = someElement.onend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onend`"
  [this]
  (-> this (.onend)))

(defn set-onend!
  "Property.

  The SVGAnimationElement.onend property refers to the event handler
  the endEvent.

  `var endEventHandler = someElement.onend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onend`"
  [this val]
  (aset this "onend" val))

(defn onrepeat
  "Property.

  The SVGAnimationElement.onrepeat property refers to the event
  for the repeatEvent.

  `var repeatEventHandler = someElement.onrepeat;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onrepeat`"
  [this]
  (-> this (.onrepeat)))

(defn set-onrepeat!
  "Property.

  The SVGAnimationElement.onrepeat property refers to the event
  for the repeatEvent.

  `var repeatEventHandler = someElement.onrepeat;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimationElement/onrepeat`"
  [this val]
  (aset this "onrepeat" val))

