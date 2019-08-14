(ns web.SourceBufferList
  "The SourceBufferList interface represents a simple container
  for multiple `web.SourceBuffer` objects."
  (:refer-clojure :exclude []))

(defn source-buffer
  "Method.

  The SourceBuffer() getter method of the `web.SourceBufferList`
  allows the SourceBuffer objects in the list to be accessed with
  array operator (i.e. [].)

  `var mySourceBuffer = SourceBufferList[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/SourceBuffer`"
  [this ]
  (-> this (.SourceBuffer)))

(defn length
  "Property.

  The length read-only property of the `web.SourceBufferList` interface
  the number of `web.SourceBuffer` objects in the list.

  `var myListLength = SourceBufferList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.SourceBufferList` interface
  the number of `web.SourceBuffer` objects in the list.

  `var myListLength = SourceBufferList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/length`"
  [this val]
  (aset this "length" val))

