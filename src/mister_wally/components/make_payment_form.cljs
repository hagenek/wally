(ns mister-wally.components.send
  (:require
   [mister-wally.events :as events]
   [reagent.core :as r]
   [goog.string :as gstring]
   [goog.string.format]
   [re-frame.core :as re-frame]
   ["faker" :refer [name]]
   ["@smooth-ui/core-sc" :refer [Grid Button Row Col FormGroup Label Input Box Select]]))

(defn return-n-names [n]
  (if (= n 0)
    []
    (cons (.findName name) (return-n-names (dec n)))))

(def names (return-n-names 8))

(defn make-payment-form
  []
  (let [values (r/atom {:amount 0})]
    (fn []
      [:> Grid
       [:> Row {:justify-content "center"}
        [:> Col {:xs 12 :sm 12}
         [:> Box {:as "h3"} "Who do you want to send to?"]]
        [:> Col {:xs 12 :sm 12 :mb 10}
         [:> Select {:scape "base"}
          (for [n names]
            [:option n])]]
        [:> FormGroup
         [:> Col  {:xs 12 :sm 12}
          [:> Label "Choose amount in dollars."]]
         [:> Col  {:xs 12 :sm 12}
          [:> Input {:type "number" :value (:amount @values)
                     :on-change #(swap! values assoc :amount (.. % -target -value))}]]]
        [:> Col {:xs 12 :sm 12}
         [:> Box {:as "h3"} "BTC:" (gstring/format "%.8f" (/ (:amount @values) 49385))]]]])))


(defn submit-transaction []
  [:> Button {:on-click #(re-frame/dispatch [::events/close-modal])} "Submit"])





