import { useContext } from "react";
import GameContext from "../../context/GameContext";

const TeamScore = () => {
  const {
    setTeam1,
    setTeam2,
    team1Score,
    team2Score,
    team1,
    team2,
    incrementTeam1Score,
    incrementTeam2Score,
  } = useContext(GameContext);
  const buttons = [
    {
      type: team1,
      change: setTeam1,
      click: incrementTeam1Score,
      score: team1Score,
      check: team1Score > team2Score,
    },
    {
      type: team2,
      change: setTeam2,
      click: incrementTeam2Score,
      score: team2Score,
      check: team2Score > team1Score,
    },
  ];

  return (
    <>
      {buttons.map(({ type, change, click, check, score }) => (
        <div className="score_board_row" key={type}>
          <input
            type="text"
            className="score_input"
            value={type}
            onChange={(e) => change(e.target.value)}
          />
          <button
            onClick={click}
            className={
              team1Score === team2Score
                ? "score_button"
                : check
                ? "score_button score_button_win"
                : "score_button score_button_lose"
            }
          >
            {score}
          </button>
        </div>
      ))}
    </>
  );
};

export default TeamScore;
