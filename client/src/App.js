import pose from "./images/gym-pose.png";

function App() {
  return (
    <>
      <section id="welcome">
        <div id="yoga-pose">
          <div id="circle" />
          <img src={pose} alt="pose" />
        </div>
        <div id="welcome-text">
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
    </>
  );
}

export default App;
