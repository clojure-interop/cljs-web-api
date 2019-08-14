(ns web.Keyboard
  "The Keyboard interface of the the Keyboard API provides functions
  retrieve keyboard layout maps and toggle capturing of key presses
  the physical keyboard."
  (:refer-clojure :exclude []))

(defn get-layout-map
  "Method.

  The getLayoutMap() method of the `web.Keyboard` interface returns
  `web.Promise` that resolves with an instance of `web.KeyboardLayoutMap`
  is a map-like object with functions for retrieving the strings
  with specific physical keys.

  `var promise = Keyboard.getLayoutMap()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/getLayoutMap`"
  [this ]
  (-> this (.getLayoutMap)))

(defn lock
  "Method.

  The lock() method of the `web.Keyboard` interface returns a `web.Promise`
  enabling the capture of keypresses for any or all of the keys
  the physical keyboard. This method can only capture keys that
  granted access by the underlying operating system.

  `var promise = Keyboard.lock([keyCodes[]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/lock`"
  [this & args]
  (apply (-> this .-lock) (concat [this] args)))

(defn unlock
  "Method.

  The unlock() method of the `web.Keyboard` interface unlocks all
  captured by the `web.Keyboard.lock()` method and returns synchronously.

  `Keyboard.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/unlock`"
  [this ]
  (-> this (.unlock)))

