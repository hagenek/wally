(ns cljs.user
  "Commonly used symbols for easy access in the ClojureScript REPL during
  development."
  (:require
   [re-frame.core :as rf]
   [mister-wally.events :as events]
   [cljs.repl :refer (Error->map apropos dir doc error->str ex-str ex-triage
                                 find-doc print-doc pst source)]
   [clojure.pprint :refer (pprint)]
   [clojure.string :as str]))

(defn go-to [kw]
  (rf/dispatch [::events/navigate (keyword kw)]))