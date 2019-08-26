(ns web.audio.SourceBufferList
  "The SourceBufferList interface represents a simple container
  for multiple `web.audio.SourceBuffer` objects."
  (:refer-clojure :exclude []))

(defn source-buffer
  "Method.

  The SourceBuffer() getter method of the `web.audio.SourceBufferList`
  allows the SourceBuffer objects in the list to be accessed with
  array operator (i.e. [].)

  `var mySourceBuffer = SourceBufferList[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/SourceBuffer`"
  [this ]
  (-> this (.SourceBuffer)))

(defn length
  "Property.

  The length read-only property of the `web.audio.SourceBufferList`
  returns the number of `web.audio.SourceBuffer` objects in the

  `var myListLength = SourceBufferList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.audio.SourceBufferList`
  returns the number of `web.audio.SourceBuffer` objects in the

  `var myListLength = SourceBufferList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBufferList/length`"
  [this val]
  (aset this "length" val))

(defn onaddsourcebuffer
  "Property.

  The event handler for the addsourcebuffer event."
  [this]
  (-> this (.-onaddsourcebuffer)))

(defn set-onaddsourcebuffer!
  "Property.

  The event handler for the addsourcebuffer event."
  [this val]
  (aset this "onaddsourcebuffer" val))

(defn onremovesourcebuffer
  "Property.

  The event handler for the removesourcebuffer event."
  [this]
  (-> this (.-onremovesourcebuffer)))

(defn set-onremovesourcebuffer!
  "Property.

  The event handler for the removesourcebuffer event."
  [this val]
  (aset this "onremovesourcebuffer" val))

