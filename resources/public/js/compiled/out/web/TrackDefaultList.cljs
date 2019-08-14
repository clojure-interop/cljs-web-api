(ns web.TrackDefaultList
  "The TrackDefaultList interface represents a simple container
  for multiple `web.TrackDefault` objects."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The TrackDefaultList() constructor of the `web.TrackDefaultList` interface constructs and returns a new TrackDefaultList object.

  trackDefaults
  A sequence (array) of `web.TrackDefault` objects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/TrackDefaultList`"
  js/TrackDefaultList)

(defn track-default
  "Method.

  The TrackDefault() getter method of the `web.TrackDefaultList`
  allows the TrackDefault objects in the list to be accessed with
  array operator (i.e. [].)

  `var myTrackDefault = TrackDefaultList[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/TrackDefault`"
  [this ]
  (-> this (.TrackDefault)))

(defn length
  "Property.

  The length read-only property of the `web.TrackDefaultList` interface
  the number of `web.TrackDefault` objects in the list.

  `var myListLength = TrackDefaultList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.TrackDefaultList` interface
  the number of `web.TrackDefault` objects in the list.

  `var myListLength = TrackDefaultList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/length`"
  [this val]
  (aset this "length" val))

