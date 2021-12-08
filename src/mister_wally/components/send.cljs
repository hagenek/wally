(ns mister-wally.components.send
  (:require             ["@smooth-ui/core-sc" :refer [Grid Row Col FormGroup Label Input]]))

(defn send-from-wallet []
  [:> Grid
   [:h3 "Always check twice"]
   [:> Row
    [:> Col {:xs 12 :sm 6}
     [:> FormGroup
      [:> Label "Choose amount "
       [:> Input {:type "currency"}]]]]]])