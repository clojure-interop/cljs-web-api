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
  (-> this (.id)))

(defn set-id!
  "Property.

  A string representing the deprecated feature that generated the
  for example NavigatorGetUserMedia. This can be used to group
  by deprecated feature."
  [this val]
  (aset this "id" val))

