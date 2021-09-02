import { useContext } from "react";
import GameContext from "../../context/GameContext";
import GameButton from "./GameButton";

const GameSelectorButtons = () => {
  const { game } = useContext(GameContext);

  return (
    <div className="game_row">
      <h2 className="game_status">Now Playing Game {game}</h2>
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <GameButton index={i + 1} key={i + 1} />
        ))}
    </div>
  );
};

export default GameSelectorButtons;
