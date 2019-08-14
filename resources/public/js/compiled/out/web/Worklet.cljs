(ns web.Worklet
  "The Worklet interface is a lightweight version of `web.Web Workers`
  gives developers access to low-level parts of the rendering pipeline."
  (:refer-clojure :exclude []))

(defn add-module
  "Method.

  The addModule() method of the `web.Worklet` interface loads the
  in the given JavaScript file and adds it to the current Worklet.

  `addPromise = worklet.addModule(moduleURL);
  addPromise = worklet.addModule(moduleURL, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`"
  [this & args]
  (apply (-> this .-addModule) (concat [this] args)))

