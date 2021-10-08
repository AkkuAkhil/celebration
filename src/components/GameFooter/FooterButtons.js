import { useContext } from "react";
import GameContext from "../../context/GameContext";
import ResultWindow from "./ResultWindow";
import NewGameButton from "./NewGameButton";

const FooterButtons = () => {
  const { openModal, resetScoreMode } = useContext(GameContext);

  return (
    <div className="score_board_row">
      <button onClick={openModal} className="score_new_button">
        Result
      </button>
      <ResultWindow />
      <NewGameButton />
      <h2 className="game_status">Reverse</h2>
      <input
        className="game_checkbox"
        type="checkbox"
        defaultChecked={false}
        onChange={resetScoreMode}
      />
    </div>
  );
};

export default FooterButtons;
