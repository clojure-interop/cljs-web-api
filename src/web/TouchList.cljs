(ns web.TouchList
  "The TouchList interface represents a list of contact points on
  touch surface. For example, if the user has three fingers on
  touch surface (such as a screen or trackpad), the corresponding
  object would have one `web.Touch` object for each finger, for
  total of three entries."
  (:refer-clojure :exclude []))

(defn identified-touch
  "Method.

  The identifiedTouch() method returns the first `web.Touch` item
  the `web.TouchList` that matches the specified identifier.

  `var touchItem = touchList.identifiedTouch(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/identifiedTouch`"
  [this id]
  (-> this (.identifiedTouch id)))

(defn item
  "Method.

  The item() method returns the `web.Touch` object at the specified
  in the `web.TouchList`.

  `var touchPoint = touchList.item(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/item`"
  [this index]
  (-> this (.item index)))

(defn length
  "Property.

  The length read-only property indicates the number of items (touch
  in a given `web.TouchList`.

  `var numTouches = touchList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length read-only property indicates the number of items (touch
  in a given `web.TouchList`.

  `var numTouches = touchList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/length`"
  [this val]
  (aset this "length" val))

