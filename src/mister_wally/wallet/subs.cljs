(ns mister-wally.wallet.subs)

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))
