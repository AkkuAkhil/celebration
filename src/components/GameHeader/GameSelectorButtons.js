const GameSelectorButtons = ({ game, changeGame }) => {
  return (
    <div className="game_row">
      <h2 className="game_status">You are Now Playing Game {game}</h2>
      {Array(3)
        .fill(1)
        .map((el, i) => (
          <button
            onClick={() => changeGame(i + 1)}
            key={i + 1}
            className={game === i + 1 ? "game_button_active" : "game_button"}
          >
            Game {i + 1}
          </button>
        ))}
    </div>
  );
};

export default GameSelectorButtons;
