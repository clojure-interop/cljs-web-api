(ns file.FileReader.ev
  "FileReader Events."
  (:refer-clojure :exclude [load]))

(def abort
  "Event.

  The abort event is fired when a read has been aborted: for instance
  the program called `file.FileReader.abort()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/abort_event`"

  "abort")

(def error
  "Event.

  The error event is fired when the read failed due to an error
  example, because the file was not found or not readable).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error_event`"

  "error")

(def load
  "Event.

  The load event is fired when a file has been read successfully.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event`"

  "load")

(def loadend
  "Event.

  The loadend event is fired when a file read has completed, successfully
  not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/loadend_event`"

  "loadend")

(def loadstart
  "Event.

  The loadstart event is fired when a file read operation has begun.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/loadstart_event`"

  "loadstart")

(def progress
  "Event.

  The progress event is fired periodically as the FileReader reads

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/progress_event`"

  "progress")

