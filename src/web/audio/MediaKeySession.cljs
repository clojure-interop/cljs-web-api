(ns web.audio.MediaKeySession
  "The MediaKeySession interface of the EncryptedMediaExtensions
  represents a context for message exchange with a content decryption
  (CDM)."
  (:refer-clojure :exclude [load remove update]))

(defn close
  "Method.

  The MediaKeySession.close() method notifies that the current
  session is no longer needed, and that the content decryption
  should release any resources associated with this object and
  it. Then, it returns a `js.Promise`.

  `mediaKeySession.close().then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/close`"
  [this & args]
  (apply (-> this .-close) (concat [this] args)))

(defn generate-request
  "Method.

  The MediaKeySession.generateRequest() method returns a `js.Promise`
  generating a media request based on initialization data.

  `mediaKeySession.generateRequest().then(function) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/generateRequest`"
  [this & args]
  (apply (-> this .-generateRequest) (concat [this] args)))

(defn load
  "Method.

  The MediaKeySession.load() method returns a `js.Promise` that
  to a boolean value after loading data for a specified session

  `mediaKeySession.load(sessionId).then(function(booleanValue) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/load`"
  [this session-id]
  (-> this (.load session-id)))

(defn remove
  "Method.

  The MediaKeySession.remove() method returns a `js.Promise` after
  any session data associated with the current object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/remove`"
  [this & args]
  (apply (-> this .-remove) (concat [this] args)))

(defn update
  "Method.

  The MediaKeySession.update() method loads messages and licenses
  the CDM, and then returns a `js.Promise` .

  `mediaKeySession.update(response).then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/update`"
  [this response]
  (-> this (.update response)))

(defn closed
  "Property.

  The MediaKeySession.closed read-only property returns a `js.Promise`
  when a `web.audio.MediaKeySession` closes. This promise can only
  fulfilled and is never rejected. Closing a session means that
  and keys associated with it are no longer valid for decrypting
  data.

  `var promise = mediaKeySessionObj.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/closed`"
  [this]
  (-> this (.-closed)))

(defn set-closed!
  "Property.

  The MediaKeySession.closed read-only property returns a `js.Promise`
  when a `web.audio.MediaKeySession` closes. This promise can only
  fulfilled and is never rejected. Closing a session means that
  and keys associated with it are no longer valid for decrypting
  data.

  `var promise = mediaKeySessionObj.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/closed`"
  [this val]
  (aset this "closed" val))

(defn expiration
  "Property.

  The MediaKeySession.expiration read-only property returns the
  after which the keys in the current session can no longer be
  to decrypt media data, or NaN if no such time exists. This value
  determined by the CDM and measured in milliseconds since January
  1970, UTC. This value may change during a session lifetime, such
  when an action triggers the start of a window.

  `​var expirationTime = mediaKeySessionObj.expiration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/expiration`"
  [this]
  (-> this (.-expiration)))

(defn set-expiration!
  "Property.

  The MediaKeySession.expiration read-only property returns the
  after which the keys in the current session can no longer be
  to decrypt media data, or NaN if no such time exists. This value
  determined by the CDM and measured in milliseconds since January
  1970, UTC. This value may change during a session lifetime, such
  when an action triggers the start of a window.

  `​var expirationTime = mediaKeySessionObj.expiration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/expiration`"
  [this val]
  (aset this "expiration" val))

(defn key-statuses
  "Property.

  The MediaKeySession.keyStatuses read-only property returns a
  to a read-only `web.media.MediaKeyStatusMap` of the current session's
  and their statuses.

  `var mediaKeyStatusMapObj = mediaKeySessionObj.keyStatuses;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/keyStatuses`"
  [this]
  (-> this (.-keyStatuses)))

(defn set-key-statuses!
  "Property.

  The MediaKeySession.keyStatuses read-only property returns a
  to a read-only `web.media.MediaKeyStatusMap` of the current session's
  and their statuses.

  `var mediaKeyStatusMapObj = mediaKeySessionObj.keyStatuses;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/keyStatuses`"
  [this val]
  (aset this "keyStatuses" val))

(defn session-id
  "Property.

  The MediaKeySession.sessionId read-only property contains a unique
  generated by the CDM for the current media object and its associated
  or licenses.

  `​var sessionId = mediaKeySessionObj.sessionId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/sessionId`"
  [this]
  (-> this (.-sessionId)))

(defn set-session-id!
  "Property.

  The MediaKeySession.sessionId read-only property contains a unique
  generated by the CDM for the current media object and its associated
  or licenses.

  `​var sessionId = mediaKeySessionObj.sessionId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/sessionId`"
  [this val]
  (aset this "sessionId" val))

(defn onkeystatuseschange
  "Property.

  The onkeystatuseschange property of the `web.audio.MediaKeySession`
  an event handler, fired whenever a keystatuschange event ocurrs,
  there has been a change in the keys or their statuses within
  session.

  `MediaKeySession.onkeystatuseschange = function(keystatuschange) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onkeystatuseschange`"
  [this]
  (-> this (.-onkeystatuseschange)))

(defn set-onkeystatuseschange!
  "Property.

  The onkeystatuseschange property of the `web.audio.MediaKeySession`
  an event handler, fired whenever a keystatuschange event ocurrs,
  there has been a change in the keys or their statuses within
  session.

  `MediaKeySession.onkeystatuseschange = function(keystatuschange) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onkeystatuseschange`"
  [this val]
  (aset this "onkeystatuseschange" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.audio.MediaKeySession` is
  event handler, fired whenever a `web.media.MediaKeyMessageEvent`
  denoting a message is generated by the content decryption module.

  `MediaKeySession.onmessage = function(MediaKeyMessageEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.audio.MediaKeySession` is
  event handler, fired whenever a `web.media.MediaKeyMessageEvent`
  denoting a message is generated by the content decryption module.

  `MediaKeySession.onmessage = function(MediaKeyMessageEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onmessage`"
  [this val]
  (aset this "onmessage" val))

