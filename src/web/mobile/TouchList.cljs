(ns web.mobile.TouchList
  "The TouchList interface represents a list of contact points on
  touch surface. For example, if the user has three fingers on
  touch surface (such as a screen or trackpad), the corresponding
  object would have one `web.other.Touch` object for each finger,
  a total of three entries."
  (:refer-clojure :exclude []))

(defn identified-touch
  "Method.

  [Deprecated]

  The identifiedTouch() method returns the first `web.other.Touch`
  in the `web.mobile.TouchList` that matches the specified identifier.

  `var touchItem = touchList.identifiedTouch(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/identifiedTouch`"
  [this id]
  (-> this (.identifiedTouch id)))

(defn item
  "Method.

  The item() method returns the `web.other.Touch` object at the
  index in the `web.mobile.TouchList`.

  `var touchPoint = touchList.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/item`"
  [this index]
  (-> this (.item index)))

(defn length
  "Property.

  [Read Only]

  The length read-only property indicates the number of items (touch
  in a given `web.mobile.TouchList`.

  `var numTouches = touchList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/length`"
  [this]
  (-> this (.-length)))

