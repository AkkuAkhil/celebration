import { useContext } from "react";
import GameContext from "../../context/GameContext";

const GameBlockCheckbox = () => {
  const { resetBlocks } = useContext(GameContext);

  return (
    <div className="game_row">
      <h2 className="game_status">Blocks</h2>
      <input
        className="game_checkbox"
        type="checkbox"
        defaultChecked={true}
        onChange={resetBlocks}
      />
    </div>
  );
};

export default GameBlockCheckbox;
