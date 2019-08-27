(ns web.other.Worklet
  "The Worklet interface is a lightweight version of `Web Workers`
  gives developers access to low-level parts of the rendering pipeline."
  (:refer-clojure :exclude []))

(defn add-module
  "Method.

  The addModule() method of the `web.other.Worklet` interface loads
  module in the given JavaScript file and adds it to the current

  `addPromise = worklet.addModule(moduleURL);
  addPromise = worklet.addModule(moduleURL, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`"
  [this & args]
  (-> this .-addModule (.apply this (clj->js args))))

