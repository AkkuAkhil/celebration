import { useContext } from "react";
import GameContext from "../../context/GameContext";

const ResultModal = () => {
  const { team1Score, team2Score, team1, team2 } = useContext(GameContext);

  return (
    <div>
      <h1>Result</h1>
      <h1 className="result_status">
        {team1Score === team2Score
          ? "Game is Draw"
          : team1Score > team2Score
          ? `${team1} Won`
          : `${team2} Won`}
      </h1>
    </div>
  );
};

export default ResultModal;
