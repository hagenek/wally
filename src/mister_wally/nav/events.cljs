(ns mister-wally.nav.events
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::close-modal
 (fn-traced [db _]
            (assoc db :active-modal nil)))

(re-frame/reg-event-db
 ::open-modal
 (fn-traced [db [_ modal-name]]
            (assoc db :active-modal modal-name)))


(re-frame/reg-event-fx
 ::navigate
 (fn-traced [_ [_ handler]]
            {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn-traced [{:keys [db]} [_ active-panel]]
            {:db (assoc db :active-panel active-panel)}))