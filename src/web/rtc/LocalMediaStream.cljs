(ns web.rtc.LocalMediaStream
  "Do not use LocalMediaStream; you need to update any code that
  use it as soon as possible or your content or application will
  working. See Stopping a video stream in MediaStreamTrack to learn"
  (:refer-clojure :exclude []))

(defn stop
  "Method.

  Stops the stream. When the source of the stream is a connected
  (such as a camera or microphone), capture of media from the device
  halted. This method is no longer available with the deprecation
  LocalMediaStream. See Stopping a video stream in MediaStreamTrack
  learn how to stop an entire stream."
  [this & args]
  (-> this .-stop (.apply this (clj->js args))))

