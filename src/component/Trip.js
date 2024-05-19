import React from "react";
import "./Trip.css";
import Tripdata from "./Tripdata";
import Tripimage1 from "../assets/5.jpg";
import Tripimage2 from "../assets/8.jpg";
import Tripimage3 from "../assets/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={Tripimage1}
          heading="Trip in Indonesia"
          text="If you are confused to choose between a relaxing vacation or a energetic happening vacation, your confusion ends here. Indonesia, an archipelago with about 17,000 islands, has everything to offer in terms of activities, budgets and fun. With the beaches on one side and the mountains on the other, it offers the best tourist places in Indonesia. "
        />
        <Tripdata
          image={Tripimage2}
          heading="Trip in Malaysia"
          text="If you are confused to choose between a relaxing vacation or a energetic happening vacation, your confusion ends here. Indonesia, an archipelago with about 17,000 islands, has everything to offer in terms of activities, budgets and fun. With the beaches on one side and the mountains on the other, it offers the best tourist places in Indonesia. "
        />
        <Tripdata
          image={Tripimage3}
          heading="Trip in France"
          text="If you are confused to choose between a relaxing vacation or a energetic happening vacation, your confusion ends here. Indonesia, an archipelago with about 17,000 islands, has everything to offer in terms of activities, budgets and fun. With the beaches on one side and the mountains on the other, it offers the best tourist places in Indonesia. "
        />
      </div>
    </div>
  );
}

export default Trip;
