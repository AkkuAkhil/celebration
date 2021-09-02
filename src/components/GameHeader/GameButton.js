import { useContext } from "react";
import GameContext from "../../context/GameContext";
import { FaGamepad } from "react-icons/fa";

const GameButton = ({ index }) => {
  const { game, changeGame } = useContext(GameContext);

  return (
    <button
      onClick={() => changeGame(index)}
      key={index}
      className={game === index ? "game_button_active" : "game_button"}
    >
      <span className="game_icon_container">
        <FaGamepad className="game_icon" /> {index}
      </span>
    </button>
  );
};

export default GameButton;
