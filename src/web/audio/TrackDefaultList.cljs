(ns web.audio.TrackDefaultList
  "The TrackDefaultList interface represents a simple container
  for multiple `web.audio.TrackDefault` objects."
  (:refer-clojure :exclude []))

(defn track-default
  "Method.

  [Experimental]

  The TrackDefault() getter method of the `web.audio.TrackDefaultList`
  allows the TrackDefault objects in the list to be accessed with
  array operator (i.e. [].)

  `var myTrackDefault = TrackDefaultList[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/TrackDefault`"
  [this ]
  (-> this (.TrackDefault)))

(defn length
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The length read-only property of the `web.audio.TrackDefaultList`
  returns the number of `web.audio.TrackDefault` objects in the

  `var myListLength = TrackDefaultList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefaultList/length`"
  [this]
  (-> this (.-length)))

