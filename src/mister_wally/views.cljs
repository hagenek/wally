(ns mister-wally.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.subs :as subs]
   [mister-wally.auth.login :refer [login]]
   ["@smooth-ui/core-sc" :refer [Input
                                 Button
                                 FormGroup
                                 Label
                                 Grid
                                 Col
                                 Row
                                 Box]]))


;; home
(defn send-receive []
  [:> Box
   [:> Box {:as "img"
            :alt "Nanocoin logo"
            :width "100px"
            :className "nano-logo"
            :src "img/nano/symbol-blue.svg"}]
   [:> Box
    [:> Button "Receive"]
    [:> Button {:ml 120 :mb 100} "Send"]]])


(defn set-username []
  (let [init-values {:name "" :last-name ""}
        userinfo (r/atom init-values)]
  (fn []
    [:> Row {:justify-content "center"}
     [:> Col {:xs 12 :sm 6}
      [:> FormGroup
       [:> Label {:html-for :name} "Name"]
       [:> Input {:control true
                  :id :name
                  :label "Username"
                  :value (:name @userinfo)
                  :on-change #(swap! userinfo assoc :name (.. % -target -value))}]]
      [:> Button {:on-click
                  #(re-frame/dispatch [::events/set-active-user (:name @userinfo)])}
       "Set username"]]])))

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:> Grid
     [:> Row {:justify-content "center"
              :text-align "center"}
      [:> Col {:xs 12 :sm 12}
              [:> Box {:as "h2" :my 50}
               (str "Hello " @name ". This is the Home Page.")]
       [send-receive]
       [set-username]
       [:div
        [:a {:on-click #(re-frame/dispatch [::events/navigate :about])}
         "go to About Page"]]]]]))

(defmethod routes/panels :home-panel [] [home-panel])

;; about
(defn about-panel []
  [:> Box  {:justify-content "center" :text-align "center"}
   [:h1 "This is the About Page."]
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
