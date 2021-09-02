import { useContext } from "react";
import GameContext from "../../context/GameContext";
import { FaUndoAlt } from "react-icons/fa";

const GameResetButtons = () => {
  const { resetGame, resetBlocksDiv } = useContext(GameContext);
  const buttons = [
    { type: "Game", action: resetGame },
    { type: "Blocks", action: resetBlocksDiv },
  ];

  return (
    <div className="game_row">
      {buttons.map(({ type, action }, i) => (
        <button onClick={action} className="game_reset_button" key={i}>
          <span className="game_reset_icon_container">
            {type}
            <FaUndoAlt className="game_reset_icon" />
          </span>
        </button>
      ))}
    </div>
  );
};

export default GameResetButtons;
