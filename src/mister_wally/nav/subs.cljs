(ns mister-wally.nav.subs)

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

