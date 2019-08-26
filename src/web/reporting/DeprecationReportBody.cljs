(ns web.reporting.DeprecationReportBody
  "The DeprecationReportBody interface of the Reporting API represents
  body of a deprecation report (the return value of its `Report.body`"
  (:refer-clojure :exclude []))

(defn id
  "Property.

  A string representing the deprecated feature that generated the
  for example NavigatorGetUserMedia. This can be used to group
  by deprecated feature."
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  A string representing the deprecated feature that generated the
  for example NavigatorGetUserMedia. This can be used to group
  by deprecated feature."
  [this val]
  (aset this "id" val))

(defn anticipated-removal
  "Property.

  A Date object (rendered as a string) representing the date when
  feature is expected to be removed from the current browser. If
  date is not known, this property will return null."
  [this]
  (-> this (.-anticipatedRemoval)))

(defn set-anticipated-removal!
  "Property.

  A Date object (rendered as a string) representing the date when
  feature is expected to be removed from the current browser. If
  date is not known, this property will return null."
  [this val]
  (aset this "anticipatedRemoval" val))

(defn message
  "Property.

  A string containing a human-readable description of the deprecation,
  information such as what newer feature has superceded it, if
  This typically matches the message a browser will display in
  DevTools console when a deprecated feature is used, if one is"
  [this]
  (-> this (.-message)))

(defn set-message!
  "Property.

  A string containing a human-readable description of the deprecation,
  information such as what newer feature has superceded it, if
  This typically matches the message a browser will display in
  DevTools console when a deprecated feature is used, if one is"
  [this val]
  (aset this "message" val))

(defn source-file
  "Property.

  A string containing the path to the source file where the deprecated
  was used, if known, or null otherwise."
  [this]
  (-> this (.-sourceFile)))

(defn set-source-file!
  "Property.

  A string containing the path to the source file where the deprecated
  was used, if known, or null otherwise."
  [this val]
  (aset this "sourceFile" val))

(defn line-number
  "Property.

  A number representing the line in the source file in which the
  feature was used, if known, or null otherwise."
  [this]
  (-> this (.-lineNumber)))

(defn set-line-number!
  "Property.

  A number representing the line in the source file in which the
  feature was used, if known, or null otherwise."
  [this val]
  (aset this "lineNumber" val))

(defn column-number
  "Property.

  A number representing the column in the source file in which
  deprecated feature was used, if known, or null otherwise."
  [this]
  (-> this (.-columnNumber)))

(defn set-column-number!
  "Property.

  A number representing the column in the source file in which
  deprecated feature was used, if known, or null otherwise."
  [this val]
  (aset this "columnNumber" val))

