(ns mister-wally.theme
  (:require ["@smooth-ui/core-sc" :refer [theme]]))

(def wallys-theme (merge
                   (js->clj theme :keywordize-keys true)
                   {:black "#243B53"
                    :primary "#243B53"
                    :secondary "#F7D070"
                    :light "#D9E2EC"
                    :borderRadius "14px"
                    :borderRadiusSm "10px"
                    :borderRadiusLg "18px"
                    :modalHeaderBorderColor "white"}))