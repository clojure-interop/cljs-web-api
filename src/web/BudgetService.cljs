(ns web.BudgetService
  "The BudgetService interface of the Web Budget API provides a
  interface to the user agent’s budget service. It is available
  both document and worker environments."
  (:refer-clojure :exclude []))

(defn get-budget
  "Method.

  The getBudget() property of the `web.BudgetService` interface
  a `web.Promise` that resolves to an array of BudgetState objects
  the expected state of the budget at times in the future.

  `var aPromise = BudgetService.getBudget();
  aPromise.then(function(budgetState[]){ ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/getBudget`"
  [this & args]
  (apply (-> this .-getBudget) (concat [this] args)))

(defn get-cost
  "Method.

  The getCost() property of the `web.BudgetService` interface returns
  `web.Promise` that resolves to a double indicating the worst-case
  operation cost of the provided background operation.

  `var aPromise = BudgetService.getCost(operation);
  aPromise.then(function(someDouble){ ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/getCost`"
  [this & args]
  (apply (-> this .-getCost) (concat [this] args)))

(defn reserve
  "Method.

  The reserve() property of the `web.BudgetService` interface returns
  `web.Promise` that resolves to a boolean indicating whether the
  budget operation can be reserved.

  `var aPromise = BudgetService.reserve(operation);
  aPromise.then(function(boolean){ ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/reserve`"
  [this & args]
  (apply (-> this .-reserve) (concat [this] args)))

