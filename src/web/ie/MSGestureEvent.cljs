(ns web.ie.MSGestureEvent
  "The MSGestureEvent is a proprietary interface specific to Internet
  and Microsoft Edge which represents events that occur due to
  gestures. Events using this interface include MSGestureStart,
  MSGestureTap, MSGestureHold, MSGestureChange, and MSInertiaStart."
  (:refer-clojure :exclude []))

(defn init-gesture-event
  "Method.

  Initializes the value of an MSGestureEvent. If the event has
  being dispatched, this method does nothing. This method is deprecated
  of Microsoft Edge."
  [this & args]
  (-> this .-initGestureEvent (.apply this (clj->js args))))

(defn expansion
  "Property.

  The diameter of the gesture area. For example, the distance between"
  [this]
  (-> this (.-expansion)))

(defn set-expansion!
  "Property.

  The diameter of the gesture area. For example, the distance between"
  [this val]
  (aset this "expansion" val))

(defn gesture-object
  "Property.

  Returns the MSGesture object for this gesture event."
  [this]
  (-> this (.-gestureObject)))

(defn set-gesture-object!
  "Property.

  Returns the MSGesture object for this gesture event."
  [this val]
  (aset this "gestureObject" val))

(defn rotation
  "Property.

  Amount of rotation (in radians) since the previous MSGestureEvent
  the current gesture. Positive values indicate clockwise rotation;
  values indicate anticlockwise rotation."
  [this]
  (-> this (.-rotation)))

(defn set-rotation!
  "Property.

  Amount of rotation (in radians) since the previous MSGestureEvent
  the current gesture. Positive values indicate clockwise rotation;
  values indicate anticlockwise rotation."
  [this val]
  (aset this "rotation" val))

(defn scale
  "Property.

  The difference in scale (for zoom gestures) from the previous
  of the current gesture."
  [this]
  (-> this (.-scale)))

(defn set-scale!
  "Property.

  The difference in scale (for zoom gestures) from the previous
  of the current gesture."
  [this val]
  (aset this "scale" val))

(defn translation-x
  "Property.

  Distance traversed along the X-axis since the previous MSGestureEvent
  the current gesture"
  [this]
  (-> this (.-translationX)))

(defn set-translation-x!
  "Property.

  Distance traversed along the X-axis since the previous MSGestureEvent
  the current gesture"
  [this val]
  (aset this "translationX" val))

(defn translation-y
  "Property.

  Distance traversed along the Y-axis since the previous MSGestureEvent
  the current gesture"
  [this]
  (-> this (.-translationY)))

(defn set-translation-y!
  "Property.

  Distance traversed along the Y-axis since the previous MSGestureEvent
  the current gesture"
  [this val]
  (aset this "translationY" val))

(defn velocity-angular
  "Property.

  Angular velocity. Expressed in radians."
  [this]
  (-> this (.-velocityAngular)))

(defn set-velocity-angular!
  "Property.

  Angular velocity. Expressed in radians."
  [this val]
  (aset this "velocityAngular" val))

(defn velocity-expansion
  "Property.

  The velocity of the expansion of the gesture area."
  [this]
  (-> this (.-velocityExpansion)))

(defn set-velocity-expansion!
  "Property.

  The velocity of the expansion of the gesture area."
  [this val]
  (aset this "velocityExpansion" val))

(defn velocity-x
  "Property.

  Velocity along the direction of the X-axis."
  [this]
  (-> this (.-velocityX)))

(defn set-velocity-x!
  "Property.

  Velocity along the direction of the X-axis."
  [this val]
  (aset this "velocityX" val))

(defn velocity-y
  "Property.

  Velocity along the direction of the Y-axis."
  [this]
  (-> this (.-velocityY)))

(defn set-velocity-y!
  "Property.

  Velocity along the direction of the Y-axis."
  [this val]
  (aset this "velocityY" val))

