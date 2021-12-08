(ns mister-wally.events
  (:require
   [re-frame.core :as re-frame]
   [mister-wally.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-db
 ::set-active-nav
 (fn-traced [db [_ active-nav]]
            (assoc db :active-nav active-nav)))

(re-frame/reg-event-fx
 ::navigate
 (fn-traced [_ [_ handler]]
            {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn-traced [{:keys [db]} [_ active-panel]]
            {:db (assoc db :active-panel active-panel)}))

(re-frame/reg-event-fx
 ::set-active-user
 (fn-traced [{:keys [db]} [_ username]]
            {:db (assoc db :name username)}))

(re-frame/reg-event-db
 ::close-modal
 (fn-traced [db _]
            (assoc db :active-modal nil)))

(re-frame/reg-event-db
 ::open-modal
 (fn-traced [db [_ modal-name]]
            (assoc db :active-modal modal-name)))
