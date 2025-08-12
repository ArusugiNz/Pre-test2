import "./App.css";
import Character from "./Components/Chara";
import MusicCard from "./Components/Music";

import bg from "./assets/Background.jpg";
import chara from "./assets/Char.png";
import cover1 from "./assets/Music1C.jpg";
import cover2 from "./assets/Music2C.jpg";
import song1 from "./assets/Music1.mp3";
import song2 from "./assets/Music2.mp3";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`, position: "center", overflow: "hidden",
      }}
    >
      <MusicCard
        cover={cover1}
        audioSrc={song1}
        style={{ position: "absolute", left: "20%", top: "20%" }}
      />
      <MusicCard
        cover={cover2}
        audioSrc={song2}
        style={{ position: "absolute", right: "20%", top: "10%" }}
      />
      <Character image={chara} />
    </div>
  );
}

export default App;