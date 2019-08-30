(ns web.keyboard.Keyboard
  "The Keyboard interface of the the Keyboard API provides functions
  retrieve keyboard layout maps and toggle capturing of key presses
  the physical keyboard."
  (:refer-clojure :exclude []))

(defn get-layout-map
  "Method.

  [Experimental]

  The getLayoutMap() method of the `web.keyboard.Keyboard` interface
  a `js.Promise` that resolves with an instance of `web.keyboard.KeyboardLayoutMap`
  is a map-like object with functions for retrieving the strings
  with specific physical keys.

  `var promise = Keyboard.getLayoutMap()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/getLayoutMap`"
  [this ]
  (-> this (.getLayoutMap)))

(defn lock
  "Method.

  [Experimental]

  The lock() method of the `web.keyboard.Keyboard` interface returns
  `js.Promise` after enabling the capture of keypresses for any
  all of the keys on the physical keyboard. This method can only
  keys that are granted access by the underlying operating system.

  `var promise = Keyboard.lock([keyCodes[]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/lock`"
  [this & args]
  (-> this .-lock (.apply this (clj->js args))))

(defn unlock
  "Method.

  [Experimental]

  The unlock() method of the `web.keyboard.Keyboard` interface
  all keys captured by the `Keyboard.lock()` method and returns

  `Keyboard.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/unlock`"
  [this ]
  (-> this (.unlock)))

