(ns mister-wally.db
  (:require ["faker" :refer [name]]))

(def default-db
  {:name "Georg" :active-nav "wallet" :active-modal false :transcations {}})
