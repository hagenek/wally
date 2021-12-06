(ns mister-wally.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [mister-wally.events :as events]
   [mister-wally.routes :as routes]
   [mister-wally.views :as views]
   [mister-wally.config :as config]
   ["@smooth-ui/core-sc" :refer [Normalize ThemeProvider]]
   [mister-wally.theme :refer [wallys-theme]]))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [:<>
                  [:> Normalize]
                  [:> ThemeProvider {:theme wallys-theme}
                   [views/main-panel]]] root-el)))

(defn init []
  (routes/start!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
