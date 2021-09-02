import GameBlockCheckbox from "./GameBlockCheckbox";
import GameResetButtons from "./GameResetButtons";
import GameSelectorButtons from "./GameSelectorButtons";

const GameHeader = () => {
  return (
    <div className="game_selector">
      <img className="game_logo" src="/logo.png" alt="logo" />
      <GameSelectorButtons />
      <GameResetButtons />
      <GameBlockCheckbox />
    </div>
  );
};

export default GameHeader;
