(ns mister-wally.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-modal
 (fn [db _]
   (get db :active-modal)))

(re-frame/reg-sub
 ::active-nav
 (fn [db _]
   (get db :active-nav)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (get db :active-panel)))