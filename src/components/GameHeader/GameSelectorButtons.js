import { FaGamepad } from "react-icons/fa";

const GameSelectorButtons = ({ game, changeGame }) => {
  return (
    <div className="game_row">
      <h2 className="game_status">Now Playing Game {game}</h2>
      {Array(4)
        .fill(1)
        .map((el, i) => (
          <button
            onClick={() => changeGame(i + 1)}
            key={i + 1}
            className={game === i + 1 ? "game_button_active" : "game_button"}
          >
            <span className="game_icon_container">
              <FaGamepad className="game_icon" /> {i + 1}
            </span>
          </button>
        ))}
    </div>
  );
};

export default GameSelectorButtons;
