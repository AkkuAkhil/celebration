import GameBlockCheckbox from "./GameBlockCheckbox";
import GameResetButtons from "./GameResetButtons";
import GameSelectorButtons from "./GameSelectorButtons";

const GameHeader = ({
  game,
  changeGame,
  resetGame,
  resetBlocks,
  resetBlocksDiv,
}) => {
  return (
    <div className="game_selector">
      <img className="game_logo" src="/logo.png" alt="logo" />

      <GameSelectorButtons game={game} changeGame={changeGame} />

      <GameResetButtons resetGame={resetGame} resetBlocksDiv={resetBlocksDiv} />

      <GameBlockCheckbox resetBlocks={resetBlocks} />
    </div>
  );
};

export default GameHeader;
