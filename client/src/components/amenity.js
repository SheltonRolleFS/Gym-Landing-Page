/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// Image Imports
import yogaStudio from "../images/yoga-studio.jpg";
import squatRack from "../images/squat-rack.jpg";
import dumbellRack from "../images/dumbell-rack.jpg";

const Amenity = ({ name, desc }) => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    switch (name) {
      case "Professional Yoga Studio":
        setBackgroundImage(yogaStudio);
        break;
      case "State of the Art Squat Racks":
        setBackgroundImage(squatRack);
        break;
      case "Wide Variety of Professional Dumbells":
        setBackgroundImage(dumbellRack);
        break;
      default:
        return;
    }
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="amenity"
    >
      {/* <img src={yogaStudio} alt="amenity-background" /> */}
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Amenity;
