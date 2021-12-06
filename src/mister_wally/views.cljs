(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.subs :as subs]
   ["@smooth-ui/core-sc" :refer [Button]]))


;; home

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:> Button {:variant "primary"} "Click me!"]
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
