import FooterButtons from "./FooterButtons";
import TeamScore from "./TeamScore";

const ScoreBoard = () => {
  return (
    <div className="score_board">
      <h2 className="score_status">ScoreBoard</h2>
      <TeamScore />
      <FooterButtons />
    </div>
  );
};

export default ScoreBoard;
