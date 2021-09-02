import { useContext } from "react";
import GameContext from "../../context/GameContext";
import ResultWindow from "./ResultWindow";
import NewGameButton from "./NewGameButton";

const FooterButtons = () => {
  const { openModal } = useContext(GameContext);

  return (
    <div className="score_board_row">
      <button onClick={openModal} className="score_new_button">
        Result
      </button>
      <ResultWindow />
      <NewGameButton />
    </div>
  );
};

export default FooterButtons;
