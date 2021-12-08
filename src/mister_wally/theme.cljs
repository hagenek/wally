(ns mister-wally.theme
  (:require ["@smooth-ui/core-sc" :refer [theme]]))

(def wallys-theme (merge
                   (js->clj theme :keywordize-keys true)
                   {:black "#243B53"
                    :primary "#213458"
                    :secondary "#1D7D81"
                    :light "#DDDDDD"
                    :borderRadius "14px"
                    :borderRadiusSm "10px"
                    :borderRadiusLg "18px"
                    :modalHeaderBorderColor "white"}))