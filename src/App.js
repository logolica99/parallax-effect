import { useRef } from "react";
import moon from "./images/moon.png";
import land from "./images/land.png";
import cat from "./images/cat.gif";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          speed={1}
          offset={0}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={1}
          factor={4}
          style={{ backgroundColor: `black`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={2}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => {
            ref.current.scrollTo(3);
          }}
        >
          <h2 className="text">Welcome to the website.</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h2 className="text">Look at the falling cat!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          onClick={() => {
            ref.current.scrollTo(0);
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={cat} alt="" style={{ width: "500px" }} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
