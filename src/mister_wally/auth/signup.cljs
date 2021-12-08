(ns mister-wally.auth.signup
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as s]
            [mister-wally.events :as events]
            [mister-wally.components.send :refer [send-from-wallet]]
            ["@smooth-ui/core-sc" :refer [Row Col FormGroup Label Input Box Button]]))

(defn signup-panel []
  (let [init-values {:name "" :last-name ""}
        userinfo (r/atom init-values)]
    (fn []
      [:> Row {:justify-content "center"}
       [:> Col {:xs 10 :sm 6}
        [:> FormGroup
         [:> Label {:html-for :name} "Name"]
         [:> Input {:control true
                    :id :name
                    :label "Username"
                    :value (:name @userinfo)
                    :on-change #(swap! userinfo assoc :name (.. % -target -value))}]]
        [:> Button {:on-click
                    #((do (rf/dispatch [::events/set-active-user (s/trim (:name @userinfo))])
                          (rf/dispatch [::events/navigate :home])))}
         "Submit"]]])))