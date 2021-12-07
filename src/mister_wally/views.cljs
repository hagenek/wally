(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.subs :as subs]
   ["@smooth-ui/core-sc" :refer [Input
                                 Button
                                 Box]]))


;; home


(defn send-receive []
  [:> Box {:display "flex"
           :flex-direction "column"}
   [:img {:alt "Nanocoin logo"
          :className "nano-logo"
          :src "img/nano/symbol-blue.svg"}]
   [:> Box {:flex-direction "row" :justify-content "space-between"}
    [:> Button "Send"]
    [:> Button "Receive"]]])


(defn set-username []
  (let [username (r/atom "")]
    [:div
     [:> Input {:type "text" :label "Username" :value @username}]
     [:> Button {:on-click #(re-frame/dispatch [::events/set-active-user @username])} "Set username"]]))

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [send-receive]
     [set-username]
     [:h1
      (str "Hello from " @name ". This is the Home Page.")]
     [:div
      [:a {:on-click #(re-frame/dispatch [::events/navigate :about])}
       "go to About Page"]]]))


(defmethod routes/panels :home-panel [] [home-panel])

;; about
(defn about-panel []
  [:div
   [:h1 "This is the About Page."]
   [:div
    [:a {:on-click #(re-frame/dispatch [::events/navigate :home])}
     "go to Home Page"]]])

(defmethod routes/panels :about-panel [] [about-panel])

;; main

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
