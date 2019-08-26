(ns web.svg.SVGSVGElement
  "The SVGSVGElement interface provides access to the properties
  `<svg>` elements, as well as methods to manipulate them. This
  contains also various miscellaneous commonly-used utility methods,
  as matrix operations and the ability to control the time of redraw
  visual rendering devices."
  (:refer-clojure :exclude []))

(defn suspend-redraw
  "Method.

  Takes a time-out value which indicates that redraw shall not
  until:
  the corresponding unsuspendRedraw() call has been made, an unsuspendRedrawAll()
  has been made, or its timer has timed out.
  In environments that do not support interactivity (e.g., print
  then redraw shall not be suspended. Calls to suspendRedraw()
  unsuspendRedraw() should, but need not be, made in balanced pairs.
  To suspend redraw actions as a collection of SVG DOM changes
  precede the changes to the SVG DOM with a method call similar
  suspendHandleID = suspendRedraw(maxWaitMilliseconds);
  and follow the changes with a method call similar to:
  unsuspendRedraw(suspendHandleID);
  Note that multiple suspendRedraw calls can be used at once and
  each such method call is treated independently of the other suspendRedraw
  calls."
  [this & args]
  (apply (-> this .-suspendRedraw) (concat [this] args)))

