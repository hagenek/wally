(ns mister-wally.events
  (:require
   [re-frame.core :as re-frame]
   [mister-wally.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-fx
 ::set-active-user
 (fn-traced [{:keys [db]} [_ username]]
            {:db (assoc db :name username)}))

;; Subs
(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))


