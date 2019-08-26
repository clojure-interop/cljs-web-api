(ns web.reporting.InterventionReportBody
  "The InterventionReportBody interface of the Reporting API represents
  body of an intervention report (the return value of its `Report.body`"
  (:refer-clojure :exclude []))

(defn id
  "Property.

  A string representing the intervention that generated the report.
  can be used to group reports by deprecated feature."
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  A string representing the intervention that generated the report.
  can be used to group reports by deprecated feature."
  [this val]
  (aset this "id" val))

