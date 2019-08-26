(ns web.audio.OverconstrainedError
  "The OverconstrainedError interface of the Media Capture and Streams
  indicates that the set of desired capabilities for the current
  cannot currently be met. When this event is thrown on a MediaStreamTrack,
  is muted until either the current constraints can be established
  until satisfiable constraints are applied."
  (:refer-clojure :exclude [name]))

(def constructor
  "Constructor.

  The OverconstrainedError constructor creates a new `web.audio.OverconstrainedError` object which indicates that the set of desired capabilities for the current `web.audio.MediaStreamTrack` cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.

  constraint
  The constraint that was not satified.
  message
  Text for the error's message property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/OverconstrainedError`"
  js/OverconstrainedError)

(defn constraint
  "Property.

  The constraint read-only property of the `web.audio.OverconstrainedError`
  returns the constraint that was supplied in the constructor,
  the contraint that was not satisfied.

  `var constraint = Overconstrainederror.constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/constraint`"
  [this]
  (-> this (.constraint)))

(defn set-constraint!
  "Property.

  The constraint read-only property of the `web.audio.OverconstrainedError`
  returns the constraint that was supplied in the constructor,
  the contraint that was not satisfied.

  `var constraint = Overconstrainederror.constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/constraint`"
  [this val]
  (aset this "constraint" val))

(defn message
  "Property.

  The message read-only property of the `web.audio.OverconstrainedError`
  returns the text supplied in the constructor.

  `var message = OverconstrainedError.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The message read-only property of the `web.audio.OverconstrainedError`
  returns the text supplied in the constructor.

  `var message = OverconstrainedError.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/message`"
  [this val]
  (aset this "message" val))

(defn name
  "Property.

  The name read-only property of the `web.audio.OverconstrainedError`
  will always return 'OverconstrainedError'.

  `var name = OverconstrainedError.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.audio.OverconstrainedError`
  will always return 'OverconstrainedError'.

  `var name = OverconstrainedError.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/name`"
  [this val]
  (aset this "name" val))

