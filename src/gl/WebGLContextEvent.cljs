(ns gl.WebGLContextEvent
  "The WebContextEvent interface is part of the WebGL API and is
  interface for an event that is generated in response to a status
  to the WebGL rendering context."
  (:refer-clojure :exclude []))

(defn status-message
  "Property.

  The read-only WebGLContextEvent.statusMessage property contains
  event status information, or is an empty string if no additional
  is available.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLContextEvent/statusMessage`"
  [this]
  (-> this (.statusMessage)))

