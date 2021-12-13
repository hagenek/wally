(ns mister-wally.wallet.views.home
  (:require
   ["@smooth-ui/core-sc" :refer [Grid
                                 Typography
                                 Col
                                 Row
                                 Box]]
   [re-frame.core :as re-frame]
   [mister-wally.components.make-payment-form :refer [make-payment-form submit-transaction]]
   [mister-wally.nav.events :as events]
   [mister-wally.components.modal :refer [modal]]
   [mister-wally.wallet.views.wallet-menu :refer [wallet-menu]]
   [mister-wally.wallet.subs :as subs]))


(defn home-panel-header []
  (let [name (re-frame/subscribe [::subs/name])]
    [:> Col {:xs 12 :sm 12}
     [:> Box {:flex-direction "column"}
      [:h2
       [:> Typography {:color "light"} (str "Welcome " @name "!")]]
      [:h2
       [:> Typography {:color "light"} "How can Mister Wally assist you today?"]]]]))

;; Starting page when logged in
(defn home-panel []
  [:> Grid
   [:> Row {:justify-content "center"
            :text-align "center"
            :border-radius "14px"
            :background-color "#1D7D81"}
    [modal {:modal-name :send-modal
            :header "Enter address and amount here"
            :body [make-payment-form]
            :footer [submit-transaction]}]
    [modal {:modal-name :receive-modal
            :header "Share this QR code, or copy address"
            :body [make-payment-form]
            :footer [:div "Footer"]}]
    [:> Box
     [home-panel-header]
     [wallet-menu]
     [:> Row {:xs 12 :justify-content "center" :mb 40}
      [:> Box {:as "a"
               :style {:text-decoration "underline"
                       :cursor "pointer"}
               :color "light"
               :on-click #(re-frame/dispatch [::events/navigate :about])}
       "About Mister Wally"]]]]])