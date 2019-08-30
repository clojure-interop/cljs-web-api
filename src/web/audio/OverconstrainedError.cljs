(ns web.audio.OverconstrainedError
  "The OverconstrainedError interface of the Media Capture and Streams
  indicates that the set of desired capabilities for the current
  cannot currently be met. When this event is thrown on a MediaStreamTrack,
  is muted until either the current constraints can be established
  until satisfiable constraints are applied."
  (:refer-clojure :exclude [name]))

(defn constraint
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The constraint read-only property of the `web.audio.OverconstrainedError`
  returns the constraint that was supplied in the constructor,
  the contraint that was not satisfied.

  `var constraint = Overconstrainederror.constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/constraint`"
  [this]
  (-> this (.-constraint)))

(defn message
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The message read-only property of the `web.audio.OverconstrainedError`
  returns the text supplied in the constructor.

  `var message = OverconstrainedError.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/message`"
  [this]
  (-> this (.-message)))

(defn name
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The name read-only property of the `web.audio.OverconstrainedError`
  will always return 'OverconstrainedError'.

  `var name = OverconstrainedError.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/name`"
  [this]
  (-> this (.-name)))

