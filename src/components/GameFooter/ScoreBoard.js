import { useState } from "react";
import { FaGamepad } from "react-icons/fa";
import Result from "./Result";

const ScoreBoard = () => {
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="score_board">
      <h2 className="score_status">ScoreBoard</h2>
      <div className="score_board_row">
        <input
          type="text"
          className="score_input"
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
        />
        <button
          onClick={() => setTeam1Score(team1Score + 1)}
          className={
            team1Score === team2Score
              ? "score_button"
              : team1Score > team2Score
              ? "score_button score_button_win"
              : "score_button score_button_lose"
          }
        >
          {team1Score}
        </button>
      </div>
      <div className="score_board_row">
        <input
          type="text"
          className="score_input"
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
        />
        <button
          onClick={() => setTeam2Score(team2Score + 1)}
          className={
            team1Score === team2Score
              ? "score_button"
              : team2Score > team1Score
              ? "score_button score_button_win"
              : "score_button score_button_lose"
          }
        >
          {team2Score}
        </button>
      </div>

      <div className="score_board_row">
        <button onClick={openModal} className="score_new_button">
          Result
        </button>
        <Result
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          team1Score={team1Score}
          team2Score={team2Score}
          team1={team1}
          team2={team2}
        />
        <button
          onClick={() => {
            setTeam1Score(0);
            setTeam2Score(0);
          }}
          className="score_new_button"
        >
          <span className="score_new_icon_container">
            New
            <FaGamepad className="score_new_icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
