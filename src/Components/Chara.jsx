import "./Chara.css";

export default function Character({ image }) {
  return (
    <div className="character-container">
      <img src={image} alt="character" className="character" />
    </div>
  );
}