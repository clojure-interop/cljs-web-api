(ns js.Generator
  "The Generator object is returned by a generator function and
  conforms to both the iterable protocol and the iterator protocol."
  (:refer-clojure :exclude [next throw]))

(defn next
  "Method.

  The next() method returns an object with two properties done
  value. You can also provide a parameter to the next method to
  a value to the generator.

  `gen.next(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next`"
  [this value]
  (-> this (.next value)))

(defn return
  "Method.

  The return() method returns the given value and finishes the

  `gen.return(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return`"
  [this value]
  (-> this (.return value)))

(defn throw
  "Method.

  The throw() method resumes the execution of a generator by throwing
  error into it and returns an object with two properties done
  value.

  `gen.throw(exception)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw`"
  [this exception]
  (-> this (.throw exception)))

