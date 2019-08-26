(ns web.animation.DocumentTimeline
  "The DocumentTimeline interface of the the Web Animations API
  animation timelines, including the default document timeline
  via `Document.timeline`)."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DocumentTimeline() constructor of the Web Animations API creates a new instance of the `web.animation.DocumentTimeline` object associated with the active document of the current browsing context.

  options
  An object specifying options for the new timeline. Currently the only supported option is the originTime member which specifies the zero time for the documentTimeline as a real number of milliseconds relative to the `navigationStart` moment of the active document for the current browsing context.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline/DocumentTimeline`"
  js/DocumentTimeline)

(defn current-time
  "Property.

  The currentTime read-only property of the Web Animations API's
  interface returns the timeline's current time in milliseconds,
  null if the timeline is inactive.

  `var currentTime = AnimationTimeline.currentTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline/currentTime`"
  [this]
  (-> this (.currentTime)))

