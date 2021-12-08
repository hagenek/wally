(ns mister-wally.auth.signup
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [mister-wally.events :as events]
            ["@smooth-ui/core-sc" :refer [Row Col FormGroup Label Input Box Button]]))

(defn signup []
  (let [init-values {:name "" :last-name ""}
        userinfo (r/atom init-values)]
    (fn []
      [:> Row {:justify-content "center"}
       [:> Col {:xs 12 :sm 6}
        [:> FormGroup
         [:> Label {:html-for :name} "Name"]
         [:> Input {:control true
                    :id :name
                    :label "Username"
                    :value (:name @userinfo)
                    :on-change #(swap! userinfo assoc :name (.. % -target -value))}]]
        [:> Button {:on-click
                    #(rf/dispatch [::events/set-active-user (:name @userinfo)])}
         "Set username"]]])))