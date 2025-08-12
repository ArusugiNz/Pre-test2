import { useState, useRef } from "react";
import "./Music.css";

export default function MusicCard({ cover, audioSrc, style }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-card" style={style}>
      <img src={cover} alt="cover" className="music-cover" />
      <button onClick={togglePlay} className="play-btn">
        {isPlaying ? "⏸" : "▶"}
      </button>
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}