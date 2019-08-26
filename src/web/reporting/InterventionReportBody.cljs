(ns web.reporting.InterventionReportBody
  "The InterventionReportBody interface of the Reporting API represents
  body of an intervention report (the return value of its `Report.body`"
  (:refer-clojure :exclude []))

(defn id
  "Property.

  A string representing the intervention that generated the report.
  can be used to group reports by deprecated feature."
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  A string representing the intervention that generated the report.
  can be used to group reports by deprecated feature."
  [this val]
  (aset this "id" val))

(defn message
  "Property.

  A string containing a human-readable description of the intervention,
  information such how the intervention could be avoided. This
  matches the message a browser will display in its DevTools console
  an intervention is imposed, if one is available."
  [this]
  (-> this (.-message)))

(defn set-message!
  "Property.

  A string containing a human-readable description of the intervention,
  information such how the intervention could be avoided. This
  matches the message a browser will display in its DevTools console
  an intervention is imposed, if one is available."
  [this val]
  (aset this "message" val))

(defn source-file
  "Property.

  A string containing the path to the source file where the intervention
  if known, or null otherwise."
  [this]
  (-> this (.-sourceFile)))

(defn set-source-file!
  "Property.

  A string containing the path to the source file where the intervention
  if known, or null otherwise."
  [this val]
  (aset this "sourceFile" val))

(defn line-number
  "Property.

  A number representing the line in the source file in which the
  occurred, if known, or null otherwise."
  [this]
  (-> this (.-lineNumber)))

(defn set-line-number!
  "Property.

  A number representing the line in the source file in which the
  occurred, if known, or null otherwise."
  [this val]
  (aset this "lineNumber" val))

(defn column-number
  "Property.

  A number representing the column in the source file in which
  intervention occurred, if known, or null otherwise."
  [this]
  (-> this (.-columnNumber)))

(defn set-column-number!
  "Property.

  A number representing the column in the source file in which
  intervention occurred, if known, or null otherwise."
  [this val]
  (aset this "columnNumber" val))

