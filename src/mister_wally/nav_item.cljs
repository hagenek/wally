(ns mister-wally.nav-item
  (:require ["@smooth-ui/core-sc" :refer [Box]]))

(defn nav-item
  [{:keys [id href name dispatch active-page]}]
  [:> Box {:key id
           :as "p"
           :href href
           :style {:cursor "pointer"}
           :color "primary"
           :on-click dispatch
           :ml 2
           :pb 10
           :border-bottom (when (= active-page id) "2px solid #102A43")}
   name])