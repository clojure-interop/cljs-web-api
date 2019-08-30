(ns web.media.MediaKeyMessageEvent
  "The MediaKeyMessageEvent interface of the EncryptedMediaExtensions
  contains the content and related data when the content decryption
  generates a message for the session."
  (:refer-clojure :exclude []))

(defn message
  "Property.

  [Read Only]
  [Experimental]

  The MediaKeyMessageEvent.message read-only property returns an
  with a message from the content decryption module. Messages vary
  key system.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/message`"
  [this]
  (-> this (.-message)))

(defn message-type
  "Property.

  [Read Only]
  [Experimental]

  The MediaKeyMessageEvent.messageType read-only property indicates
  type of message. It may be one of license-request, license-renewal,
  or individualization-request.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/messageType`"
  [this]
  (-> this (.-messageType)))

