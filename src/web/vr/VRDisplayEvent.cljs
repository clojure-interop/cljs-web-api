(ns web.vr.VRDisplayEvent
  "The VRDisplayEvent interface of the WebVR API represents represents
  event object of WebVR-related events (see the list of WebVR window"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The `web.vr.VRDisplayEvent` constructor creates a VRDisplayEvent object instance.

  type
  \\tA `web.dom.DOMString` describing the type of event object you want to create.
  \\teventInitDict
  \\tA object contaning initialization options to use when creating the constructor. These are:

  \\t\\tdisplay
  \\t\\tA property containing the `web.media.VRDisplay` the event is to be associated with.
  \\t\\treason
  \\t\\tA property containing a string representing the human-readable reason why the event is to be fired (see `VRDisplayEvent.reason`).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/VRDisplayEvent`"
  js/VRDisplayEvent)

(defn display
  "Property.

  The display read-only property of the `web.vr.VRDisplayEvent`
  returns the `web.media.VRDisplay` associated with this event.

  `var myDisplay = vrDisplayEventInstance.display;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/display`"
  [this]
  (-> this (.-display)))

(defn set-display!
  "Property.

  The display read-only property of the `web.vr.VRDisplayEvent`
  returns the `web.media.VRDisplay` associated with this event.

  `var myDisplay = vrDisplayEventInstance.display;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/display`"
  [this val]
  (aset this "display" val))

(defn reason
  "Property.

  The reason read-only property of the `web.vr.VRDisplayEvent`
  returns a human-readable reason why the event was fired.

  `var myReason = vrDisplayEventInstance.reason;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/reason`"
  [this]
  (-> this (.-reason)))

(defn set-reason!
  "Property.

  The reason read-only property of the `web.vr.VRDisplayEvent`
  returns a human-readable reason why the event was fired.

  `var myReason = vrDisplayEventInstance.reason;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayEvent/reason`"
  [this val]
  (aset this "reason" val))

