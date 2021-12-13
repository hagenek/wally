(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.nav.subs :as subs]
   [mister-wally.wallet.views.wallet-menu :refer [wallet-menu]]
   [mister-wally.components.make-payment-form :refer [make-payment-form submit-transaction]]
   [mister-wally.auth.signup :refer [signup-panel]]
   [mister-wally.auth.login :refer [login-panel]]
   [mister-wally.components.modal :refer [modal]]
   [mister-wally.transactions.views.transactions :refer [transactions-panel]]
   ["@smooth-ui/core-sc" :refer [Grid
                                 Typography
                                 Col
                                 Row
                                 Box]]))


(defn home-panel-header []
        [:> Col {:xs 12 :sm 12}
       [:> Box {:flex-direction "column"}
        [:h2
         [:> Typography {:color "light"} (str "Welcome " @name "!")]]
        [:h2
         [:> Typography {:color "light"} "How can Mister Wally assist you today?"]]]])

;; Starting page when logged in
(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
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
              :body [send-from-wallet]
              :footer [:div "Footer"]}]
       [home-panel-header]
       [wallet-menu]
       [:> Row {:xs 12 :justify-content "center" :mb 40}
        [:> Box {:as "a"
                 :style {:text-decoration "underline"
                         :cursor "pointer"}
                 :color "light"
                 :on-click #(re-frame/dispatch [::events/navigate :about])}
         "About Mister Wally"]]]]]))

;; about
(defn about-panel []
  [:> Grid
   [:> Row {:justify-content "center" :text-align "center"}
    [:> Col {:xs 10 :sm 8 :lg 5}
     [:> Box {:as "h2" :color "primary"} "Welcome to the About Page."]
     [:> Typography {:as "p"} " Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                              Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."]

     [:> Typography {:as "p"} "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward a new normal that has 
                              evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content 
                              in real-time will have multiple touchpoints for offshoring."]
     [:> Typography {:as "p"} "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional 
                              clickthroughs from DevOps. Nanotechnology immersion along the information highway will close."]]]])

(defmethod routes/panels :home-panel [] [home-panel])
(defmethod routes/panels :about-panel [] [about-panel])
(defmethod routes/panels :login-panel [] [login-panel])
(defmethod routes/panels :signup-panel [] [signup-panel])
(defmethod routes/panels :transactions-panel [] [transactions-panel])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
