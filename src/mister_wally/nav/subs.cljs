(ns mister-wally.nav.subs
  (:require [re-frame.core :as re-frame]))

;; Subs
(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::active-modal
 (fn [db _]
   (get db :active-modal)))

(re-frame/reg-sub
 ::active-nav
 (fn [db _]
   (get db :active-nav)))

