(ns mister-wally.nav.views.nav
  (:require [re-frame.core :as rf]
            [mister-wally.events :as events]
            [mister-wally.subs :as subs]
            [mister-wally.nav.views.nav-item :refer [nav-item]]
            ["@smooth-ui/core-sc" :refer [Box]]))

(defn public
  []
  (let [active-page @(rf/subscribe [::subs/active-panel])
        nav-items [{:id :home
                    :name "Wallet"
                    :href "/"
                    :dispatch #(rf/dispatch [::events/navigate :home])}
                   {:id :transactions
                    :name "My Transactions"
                    :href "/transactions"
                    :dispatch #(rf/dispatch [::events/navigate :transactions])}
                   {:id :signup
                    :name "Sign up"
                    :href "/signup"
                    :dispatch #(rf/dispatch [::events/navigate :signup])}
                   {:id :login
                    :name "Log in"
                    :href "/login"
                    :dispatch #(rf/dispatch [::events/navigate :login])}]]
    [:> Box {:display "flex"
             :justify-content "flex-end"
             :px 50}
     (for [{:keys [id name href dispatch]} nav-items]
       [nav-item {:key id
                  :id id
                  :name name
                  :href href
                  :dispatch dispatch
                  :active-page active-page}])]))

