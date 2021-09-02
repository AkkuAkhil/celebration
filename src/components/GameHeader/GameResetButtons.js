import { FaUndoAlt } from "react-icons/fa";
const GameResetButtons = ({ resetGame, resetBlocksDiv }) => {
  return (
    <div className="game_row">
      <button onClick={resetGame} className="game_reset_button">
        <span className="game_reset_icon_container">
          Game
          <FaUndoAlt className="game_reset_icon" />
        </span>
      </button>
      <button onClick={resetBlocksDiv} className="game_reset_button">
        <span className="game_reset_icon_container">
          Blocks
          <FaUndoAlt className="game_reset_icon" />
        </span>
      </button>
    </div>
  );
};

export default GameResetButtons;
