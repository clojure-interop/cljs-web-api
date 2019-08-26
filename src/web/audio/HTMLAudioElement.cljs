(ns web.audio.HTMLAudioElement
  "The HTMLAudioElement interface provides access to the properties
  `<audio>` elements, as well as methods to manipulate them. It
  from the `web.media.HTMLMediaElement` interface."
  (:refer-clojure :exclude []))

(defn url-string
  "Method.

  The src property of the constructed HTMLAudioElement."
  [this & args]
  (apply (-> this .-URLString) (concat [this] args)))

