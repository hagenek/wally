(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.subs :as subs]
   [mister-wally.auth.login :refer [login]]
   ["@smooth-ui/core-sc" :refer [
                                 Button
                                 Grid
                                 Typography
                                 Col
                                 Row
                                 Box]]))


;; home
(defn send-receive []
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
    [:> Button "Receive"]
    [:> Button {:ml 120 :mb 100} "Send"]]])


(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:> Grid {:my 50}
     [:> Row {:justify-content "center"
              :text-align "center"
              :background-color "#1D7D81"}
      [:> Col {:xs 12 :sm 12}
       [:> Box {:flex-direction "column"}
        [:p
         [:> Typography {:color "light"} (str "Welcome " @name ".")]]
        [:p
         [:> Typography {:color "light"} "How can Mister Wally assist you today?"]]]
       [send-receive]
       [:> Box {
                :as "a"
                :on-click #(re-frame/dispatch [::events/navigate :about])}
        "About Mister Wally"]]]]))

(defmethod routes/panels :home-panel [] [home-panel])

;; about
(defn about-panel []
  [:> Box  {:justify-content "center" :text-align "center"}
   [:> Box {:as "h2" :color "#FFF"} "This is the About Page."]
   [:p
    [:> Button {:as "a" :mx 20 :on-click #(re-frame/dispatch [::events/navigate :home])}
     "Home Page"]
    [:> Button {:as "a" :on-click #(re-frame/dispatch [::events/navigate :login])}
     "Login!"]]])

  (defmethod routes/panels :about-panel [] [about-panel])
(defmethod routes/panels :login [] [login])
;; main

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
