(ns mister-wally.auth.signup
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as s]
            [mister-wally.nav.events :as nav-events]
            [mister-wally.events :as events]
            ["@smooth-ui/core-sc" :refer [Row Col FormGroup Label Input Grid Button Box]]))

(defn signup-panel []
  (let [init-values {:name "" :last-name ""}
        userinfo (r/atom init-values)]
    (fn []
      [:> Grid
       [:> Box {:as "h2" :color "primary" :text-align "center"} "Enter your name to sign up!"]
       [:> Row {:justify-content "center" :background-color "secondary" :border-radius "14px"
                :py 20}
        [:> Col {:xs 10 :sm 8 :md 6 :lg 4}
         [:> FormGroup
          [:> Label {:html-for :name :color "#FFF"} "Name"]
          [:> Input {:control true
                     :id :name
                     :placeholder "Your name here."
                     :label "Username"
                     :value (:name @userinfo)
                     :on-change #(swap! userinfo assoc :name (.. % -target -value))}]]
         [:> Button {:on-click
                     #((do (rf/dispatch [::events/set-active-user (s/trim (:name @userinfo))])
                           (rf/dispatch [::nav-events/navigate :home])))}
          "Submit"]]]])))