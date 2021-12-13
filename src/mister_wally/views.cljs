(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [mister-wally.nav.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.subs :as subs]
   [mister-wally.auth.signup :refer [signup-panel]]
   [mister-wally.auth.login :refer [login-panel]]
   [mister-wally.about.views.about :refer [about-panel]]
   [mister-wally.wallet.views.home :refer [home-panel]]
   [mister-wally.transactions.views.transactions :refer [transactions-panel]]))
   
(defmethod routes/panels :home-panel [] [home-panel])
(defmethod routes/panels :about-panel [] [about-panel])
(defmethod routes/panels :login-panel [] [login-panel])
(defmethod routes/panels :signup-panel [] [signup-panel])
(defmethod routes/panels :transactions-panel [] [transactions-panel])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
