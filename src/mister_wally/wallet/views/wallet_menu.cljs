(ns mister-wally.wallet.views.wallet-menu
  (:require
   [re-frame.core :as re-frame]
   [mister-wally.events :as events]
   ["@smooth-ui/core-sc" :refer [Button
                                 Box]]))

(defn wallet-menu []
  [:> Box
   [:> Box {:as "img"
            :alt "Nanocoin logo"
            :width "auto"
            :border "3px solid #213458"
            :mb 20
            :border-radius "14px"
            :className "nano-logo"
            :src "img/shiba-inu.png"}]
   [:> Box
    [:> Button {:on-click #(re-frame/dispatch [::events/open-modal :receive-modal])} "Receive"]
    [:> Button {:ml 120 :mb 100 :px 25 :on-click #(re-frame/dispatch [::events/open-modal :send-modal])} "Send"]]])