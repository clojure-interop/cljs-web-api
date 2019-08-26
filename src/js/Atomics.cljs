(ns js.Atomics
  "The Atomics object provides atomic operations as static methods.
  are used with `js.SharedArrayBuffer` objects."
  (:refer-clojure :exclude [and load or]))

(defn add
  "Method.

  The static Atomics.add() method adds a given value at a given
  in the array and returns the old value at that position. This
  operation guarantees that no other write happens until the modified
  is written back.

  `Atomics.add(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add`"
  [this typed-array index value]
  (-> this (.add typed-array index value)))

(defn and
  "Method.

  The static Atomics.and() method computes a bitwise AND with a
  value at a given position in the array, and returns the old value
  that position. This atomic operation guarantees that no other
  happens until the modified value is written back.

  `Atomics.and(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and`"
  [this typed-array index value]
  (-> this (.and typed-array index value)))

(defn compare-exchange
  "Method.

  The static Atomics.compareExchange() method exchanges a given
  value at a given position in the array, if a given expected value
  the old value. It returns the old value at that position whether
  was equal to the expected value or not. This atomic operation
  that no other write happens until the modified value is written

  `Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange`"
  [this typed-array index expected-value replacement-value]
  (-> this (.compareExchange typed-array index expected-value replacement-value)))

(defn exchange
  "Method.

  The static Atomics.exchange() method stores a given value at
  given position in the array and returns the old value at that
  This atomic operation guarantees that no other write happens
  the read of the old value and the write of the new value.

  `Atomics.exchange(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange`"
  [this typed-array index value]
  (-> this (.exchange typed-array index value)))

(defn load
  "Method.

  The static Atomics.load() method returns a value at a given position
  the array.

  `Atomics.load(typedArray, index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load`"
  [this typed-array index]
  (-> this (.load typed-array index)))

(defn or
  "Method.

  The static Atomics.or() method computes a bitwise OR with a given
  at a given position in the array, and returns the old value at
  position. This atomic operation guarantees that no other write
  until the modified value is written back.

  `Atomics.or(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/or`"
  [this typed-array index value]
  (-> this (.or typed-array index value)))

(defn store
  "Method.

  The static Atomics.store() method stores a given value at the
  position in the array and returns that value.

  `Atomics.store(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store`"
  [this typed-array index value]
  (-> this (.store typed-array index value)))

(defn sub
  "Method.

  The static Atomics.sub() method substracts a given value at a
  position in the array and returns the old value at that position.
  atomic operation guarantees that no other write happens until
  modified value is written back.

  `Atomics.sub(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub`"
  [this typed-array index value]
  (-> this (.sub typed-array index value)))

(defn xor
  "Method.

  The static Atomics.xor() method computes a bitwise XOR with a
  value at a given position in the array, and returns the old value
  that position. This atomic operation guarantees that no other
  happens until the modified value is written back.

  `Atomics.xor(typedArray, index, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor`"
  [this typed-array index value]
  (-> this (.xor typed-array index value)))

(defn wait
  "Method.

  The static Atomics.wait() method verifies that a given position
  an `js.Int32Array` still contains a given value and if so sleeps,
  a wakeup or a timeout. It returns a string which is either \\\"ok\\\",
  or \\\"timed-out\\\".

  `Atomics.wait(typedArray, index, value[, timeout])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait`"
  [this & args]
  (apply (-> this .-wait) (concat [this] args)))

(defn notify
  "Method.

  The static Atomics.notify() method notifies up some agents that
  sleeping in the wait queue.

  `Atomics.notify(typedArray, index, count)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify`"
  [this typed-array index count]
  (-> this (.notify typed-array index count)))

(defn is-lock-free
  "Method.

  The static Atomics.isLockFree() method is used to determine whether
  use locks or atomic operations. It returns true, if the given
  is one of the BYTES_PER_ELEMENT property of integer TypedArray

  `Atomics.isLockFree(size)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree`"
  [this size]
  (-> this (.isLockFree size)))

(defn atomics
  "Property.

  The value of this property is \"Atomics\"."
  [this]
  (-> this (.-Atomics)))

(defn set-atomics!
  "Property.

  The value of this property is \"Atomics\"."
  [this val]
  (aset this "Atomics" val))

