import { useContext } from "react";
import GameContext from "../../context/GameContext";
import { FaGamepad } from "react-icons/fa";

const NewGameButton = () => {
  const { resetScore } = useContext(GameContext);

  return (
    <button onClick={resetScore} className="score_new_button">
      <span className="score_new_icon_container">
        New
        <FaGamepad className="score_new_icon" />
      </span>
    </button>
  );
};

export default NewGameButton;
