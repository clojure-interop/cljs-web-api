(ns web.BudgetState
  "The BudgetState interface of the the Web Budget API provides
  amount of the user agent's processing budget at a specific point
  time."
  (:refer-clojure :exclude [time]))

(defn budget-at
  "Property.

  The budgetAt read-only property of the `web.BudgetState` interface
  the anticipated processing budget at the specified time.

  `var budget = BudgetState.budgetAt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetState/budgetAt`"
  [this]
  (-> this (.budgetAt)))

(defn set-budget-at!
  "Property.

  The budgetAt read-only property of the `web.BudgetState` interface
  the anticipated processing budget at the specified time.

  `var budget = BudgetState.budgetAt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetState/budgetAt`"
  [this val]
  (aset this "budgetAt" val))

(defn time
  "Property.

  The time read-only property of the `web.BudgetState` interface
  a `web.timestamp` at which the budgetAt value is valid.

  `var time = BudgetState.time`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetState/time`"
  [this]
  (-> this (.time)))

(defn set-time!
  "Property.

  The time read-only property of the `web.BudgetState` interface
  a `web.timestamp` at which the budgetAt value is valid.

  `var time = BudgetState.time`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetState/time`"
  [this val]
  (aset this "time" val))

