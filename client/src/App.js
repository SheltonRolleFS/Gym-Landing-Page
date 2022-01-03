/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

// Image Imports
import pose from "./images/gym-pose.png";

// Component Imports
import Amenity from "./components/amenity";

// Data Imports
import { amenities } from "./data/amenities";

function App() {
  const poseRef = useRef(null);
  const circleRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "pose":
          entry.target.classList.toggle("animate-pose", entry.isIntersecting);
          break;
        case "circle":
          entry.target.classList.toggle("animate-circle", entry.isIntersecting);
          break;
        case "welcome-text":
          entry.target.classList.toggle(
            "animate-welcome",
            entry.isIntersecting
          );
          break;
        default:
          return;
      }

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });

  useEffect(() => {
    observer.observe(poseRef.current);
    observer.observe(circleRef.current);
    observer.observe(welcomeTextRef.current);
  }, []);

  return (
    <>
      <section id="welcome">
        <div id="yoga-pose">
          <div id="circle" ref={circleRef} />
          <img id="pose" src={pose} alt="pose" ref={poseRef} />
        </div>
        <div id="welcome-text" ref={welcomeTextRef}>
          <header>
            <h1>Welcome to,</h1>
            <h1>Ronnies Gym</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            purus in mollis nunc. Posuere sollicitudin aliquam ultrices
            sagittis. Donec et odio pellentesque diam volutpat. Consectetur a
            erat nam at lectus
          </p>
          <div id="action-buttons">
            <button>Schedule a Visit</button>
            <button>View Plans</button>
          </div>
        </div>
      </section>
      <div className="divider" />
      <section id="amenities">
        <h2>Amenities</h2>
        <div className="amenity-container">
          {amenities.map((amenity) => {
            return <Amenity name={amenity.name} desc={amenity.description} />;
          })}
        </div>
      </section>
      <footer>
        <div className="container">
          <div id="contact">
            <h3>Contact</h3>
            <div id="email">
              <h4>Email</h4>
              <p>contact@ronniesgym.com</p>
            </div>
            <div id="phone">
              <h4>Phone Number</h4>
              <p>+1 (321) 203-9062</p>
              <strong>OR</strong>
              <p>+1 (098) 765- 4321</p>
            </div>
          </div>
          <div id="newsletter">
            <h3>Newsletter</h3>
            <p>
              Signup for our newsletter to be the first to hear about events and
              specials!
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="your.email@address.com" />
              <button>Sign Up</button>
            </form>
          </div>
          <div id="location">
            <h3>Location</h3>
            <p>123 Fake Street</p>
            <p>Winter Springs, FL, 32708</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
