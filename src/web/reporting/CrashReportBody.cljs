(ns web.reporting.CrashReportBody
  "The CrashReportBody interface of the Reporting API represents
  body of a crash report (the return value of its `Report.body`"
  (:refer-clojure :exclude []))

(defn reason
  "Property.

  A string representing the reason for the crash. Current possible
  are:
  oom: The browser ran out of memory.
  unresponsive: The page was killed due to being unresponsive."
  [this]
  (-> this (.-reason)))

(defn set-reason!
  "Property.

  A string representing the reason for the crash. Current possible
  are:
  oom: The browser ran out of memory.
  unresponsive: The page was killed due to being unresponsive."
  [this val]
  (aset this "reason" val))

