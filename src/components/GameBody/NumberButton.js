import { useContext } from "react";
import GameContext from "../../context/GameContext";

const NumberButton = ({ number }) => {
  const { numberClick } = useContext(GameContext);

  return (
    <button className="number_button" onClick={(e) => numberClick(e, number)}>
      {number}
    </button>
  );
};

export default NumberButton;
