(ns web.media.MediaKeyMessageEvent
  "The MediaKeyMessageEvent interface of the EncryptedMediaExtensions
  contains the content and related data when the content decryption
  generates a message for the session."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaKeyMessageEvent constructor creates a new `web.media.MediaKeyMessageEvent` object which creates a new instance of MediaKeyMessageEvent.

  typeArg
  A `web.dom.DOMString` containing one of May be one of license-request, license-renewal, license-renewal, or individualization-request.
  options
  Options are as follows:

  messageType: A developer-defined message type that allows applications to differentiate messages without parsing them.
  message: An array containing the message generated by the content decryption module.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/MediaKeyMessageEvent`"
  js/MediaKeyMessageEvent)

(defn message
  "Property.

  The MediaKeyMessageEvent.message read-only property returns an
  with a message from the content decryption module. Messages vary
  key system.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The MediaKeyMessageEvent.message read-only property returns an
  with a message from the content decryption module. Messages vary
  key system.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/message`"
  [this val]
  (aset this "message" val))

(defn message-type
  "Property.

  The MediaKeyMessageEvent.messageType read-only property indicates
  type of message. It may be one of license-request, license-renewal,
  or individualization-request.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/messageType`"
  [this]
  (-> this (.messageType)))

(defn set-message-type!
  "Property.

  The MediaKeyMessageEvent.messageType read-only property indicates
  type of message. It may be one of license-request, license-renewal,
  or individualization-request.

  `var messageType = mediaKeyMessageEvent.messageType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/messageType`"
  [this val]
  (aset this "messageType" val))
