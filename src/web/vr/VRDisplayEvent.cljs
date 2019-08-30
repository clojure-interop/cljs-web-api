(ns web.vr.VRDisplayEvent
  "The VRDisplayEvent interface of the WebVR API represents represents
  event object of WebVR-related events (see the list of WebVR window"
  (:refer-clojure :exclude []))

(defn display
  "Property.

  [Read Only]
  [Experimental]

  The display read-only property of the `web.vr.VRDisplayEvent`
  returns the `web.media.VRDisplay` associated with this event.

  `var myDisplay = vrDisplayEventInstance.display;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/display`"
  [this]
  (-> this (.-display)))

(defn reason
  "Property.

  [Read Only]
  [Experimental]

  The reason read-only property of the `web.vr.VRDisplayEvent`
  returns a human-readable reason why the event was fired.

  `var myReason = vrDisplayEventInstance.reason;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/reason`"
  [this]
  (-> this (.-reason)))

