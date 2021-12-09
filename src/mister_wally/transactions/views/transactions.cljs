(ns mister-wally.transactions.views.transactions
  (:require
   [clojure.string :as s]
   ["faker" :refer [name finance date]]
   ["@smooth-ui/core-sc" :refer [Grid
                                 Typography
                                 Col
                                 Row
                                 Box]]))

(def strapply (partial apply str))

(defn format-shiba [shiba-inu-amount]
  (str "SHIB " (s/join "," (map strapply (partition-all 3 (str shiba-inu-amount))))))

(defn format-btc [btc]
  (.toLocaleString btc "us-EN" #js {:style "currency" :currency "BTC"}))

(defn format-usd [btc]
  (.toLocaleString btc "us-EN" #js {:style "currency" :currency "USD"}))

(defn transactions-panel []
  [:> Grid
   [:> Row {:justify-content "center"}
    [:> Box {:as "h2" :color "#FFF" :background-color "secondary" :px 15 :py 1 :border-radius "10px"} "Your last 10 transactions"]
    [:> Box {:background-color "primary"
             :border-radius "14px"
             :py 25
             :width "70vw"
             :px 50
             :color "#FFF"
             :mb 100}
     (for [transaction (range 10)]
       [:> Col {:key transaction
                :py 10 :px 16
                :xs 12 :sm 12
                :border "2px solid black"
                :background-color "secondary"
                :mt 10 :mb 20
                :border-radius "14px"}
        (let [dollar-amount (* (.random js/Math) (* 10000 (+ transaction 6)))
              btc-amount (/ dollar-amount 50522)]
          [:<>
           [:> Box (.toLocaleString (.past date))]
           [:> Box {:display "flex" :align-items "center" :justify-content "space-between"}
            [:> Typography "Outgoing transaction from "]
            [:> Typography {:font-weight "bold" :ml 1} (.findName name)]
            [:> Typography {:ml 3 :border "2px solid primary"}
             [:> Box  [:span [:img
                              {:src "img/btc-logo.png"
                               :style {:position "relative" :top "7px"}
                               :ml 2
                               :width "24px"
                               :height "auto"}]] " " (str (format-btc btc-amount) " ")]
             [:> Box " " (format-usd dollar-amount)]]]
           [:> Box {:color "light" :font-weight "bold"} (str " - " (.accountName finance))]])])]]])