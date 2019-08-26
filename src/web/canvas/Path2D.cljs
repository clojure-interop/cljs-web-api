(ns web.canvas.Path2D
  "The Path2D interface of the Canvas 2D API is used to declare
  path that can then be used on a `web.canvas.CanvasRenderingContext2D`
  The path methods of the CanvasRenderingContext2D interface are
  present on this interface, which gives you the convenience of
  able to retain and replay your path whenever desired."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.

  path Optional
  When invoked with another Path2D object, a copy of the path argument is created.
  d Optional
  When invoked with a string consisting of SVG path data, a new path is created from that description.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Path2D/Path2D`"
  js/Path2D)

(defn add-path
  "Method.

  The Path2D.addPath() method of the Canvas 2D API adds one `web.canvas.Path2D`
  to another Path2D object.

  `void path.addPath(path [, transform]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath`"
  [this & args]
  (apply (-> this .-addPath) (concat [this] args)))

