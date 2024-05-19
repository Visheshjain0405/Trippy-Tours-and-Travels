import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import "./destination.css";
import Destinationdata from "./Destinationdata";
function Destinations() {
  return (
    <div className="destination">
      <h1>Popular destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <Destinationdata
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is the second most active volcano found in the
      province of Batangas. A complex volcano in the middle of Taal Lake
      and is often called an island within a lake, that is an island
      within a lake that is on an island as well as one of the lowest
      volcano in the world having 311 meters elevation. It offers a very
      a spectacular view seen from Tagaytay Ridge. Taal volcano is
      located around 50 kilometers away from Manila, capital of the
      Philippines."
        img1={Mountain1}
        img2={Mountain2}
      />
      <Destinationdata
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name Daguldul or Daguldol has been used since olden days. It has an onomatopoeic feeling that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several gems to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destinations;
