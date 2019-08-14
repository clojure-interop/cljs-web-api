(ns media.MediaKeys
  "The MediaKeys interface of EncryptedMediaExtensions API represents
  set of keys that an associated `html.HTMLMediaElement` can use
  decryption of media data during playback."
  (:refer-clojure :exclude []))

(defn create-session
  "Method.

  The MediaKeys.createSession() method returns a new `media.MediaKeySession`
  which represents a context for message exchange with a content
  module (CDM).

  `​var mediaKeySessionObject = MediaKeys.createSession([MediaKeySessionType]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys/createSession`"
  [this & args]
  (apply (-> this .-createSession) (concat [this] args)))

(defn set-server-certificate
  "Method.

  The MediaKeys.setServerCertificate() method a `web.Promise` to
  server certificate to be used to encrypt messages to the license

  `MediaKeys.setServerCertificate([MediaKeySessionType]).then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys/setServerCertificate`"
  [this & args]
  (apply (-> this .-setServerCertificate) (concat [this] args)))

