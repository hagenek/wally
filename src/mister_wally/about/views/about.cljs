(ns mister-wally.about.views.about 
  (:require ["@smooth-ui/core-sc" :refer [Grid Typography Col Row Box]]))

;; about
(defn about-panel []
  [:> Grid
   [:> Row {:justify-content "center" :text-align "center"}
    [:> Col {:xs 10 :sm 8 :lg 5}
     [:> Box {:as "h2" :color "primary"} "Welcome to the About Page."]
     [:> Typography {:as "p"} " Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                              Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."]

     [:> Typography {:as "p"} "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward a new normal that has 
                              evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content 
                              in real-time will have multiple touchpoints for offshoring."]
     [:> Typography {:as "p"} "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional 
                              clickthroughs from DevOps. Nanotechnology immersion along the information highway will close."]]]])
