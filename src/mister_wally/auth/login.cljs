(ns mister-wally.auth.login
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [mister-wally.events :as events]
            ["@smooth-ui/core-sc" :refer [Row Col FormGroup Label Input Box Button]]))

(defn login-panel
  []
  (let [initial-values {:email "" :password ""}
        values (r/atom initial-values)]
    (fn []
      [:> Row {:justify-content "center"}
       [:> Col {:xs 6 :sm 4 :lg 3 :xl 2}
        [:> FormGroup
         [:> Label {:html-for :email} "Username"]
         [:> Input {:control true
                    :id :email
                    :type "email"
                    :placeholder "email"
                    :value (:email @values)
                    :on-change #(swap! values assoc :email (.. % -target -value))}]]
        [:> FormGroup
         [:> Label {:html-for :password} "Password"]
         [:> Input {:control true
                    :id :password
                    :placeholder "password"
                    :type "password"
                    :value (:password @values)
                    :on-change #(swap! values assoc :password (.. % -target -value))}]]
        [:> Box {:display "flex"
                 :justify-content "space-between"
                 :flex-direction "column"}
         [:> Button {:width "auto" :mb 20 :on-click #(rf/dispatch [::events/navigate :home])}
          "Log in"]
         [:> Box {:text-align "center"}
          [:span "New to Mister Wally?"]
          [:a {:href "#sign-up"
               :on-click #(rf/dispatch [::events/navigate :signup])}
           " Sign up!"]]]]])))