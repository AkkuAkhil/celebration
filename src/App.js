import { useState } from "react";
import GameHeader from "./components/GameHeader/GameHeader";
import GameBody from "./components/GameBody/GameBody";
import ScoreBoard from "./components/GameFooter/ScoreBoard";
import { URL } from "./utils/utils";

const App = () => {
  const [game, setGame] = useState(1);
  const [blocks, setBlocks] = useState(true);
  const [image, setImage] = useState(`${URL}/default.png`);

  const resetBlocksDiv = () => {
    const classes = document.querySelectorAll(".image_button_closed");
    classes.forEach((el) => {
      el.classList.remove("image_button_closed");
      el.classList.add("image_button");
    });
  };

  const resetImage = () => setImage(`${URL}/default.png`);
  const resetBlocks = () => setBlocks(!blocks);

  const resetGame = () => {
    resetBlocksDiv();
    resetImage();
    const classes = document.querySelectorAll(".number_button_closed");
    classes.forEach((el) => {
      el.classList.remove("number_button_closed");
      el.classList.add("number_button");
    });
  };

  const changeGame = (num) => {
    setGame(num);
    resetGame();
  };

  return (
    <div className="App">
      <GameHeader
        game={game}
        changeGame={changeGame}
        setGame={setGame}
        resetGame={resetGame}
        resetImage={resetImage}
        resetBlocks={resetBlocks}
        resetBlocksDiv={resetBlocksDiv}
      />
      <GameBody
        game={game}
        image={image}
        setImage={setImage}
        blocks={blocks}
        resetBlocksDiv={resetBlocksDiv}
      />
      <ScoreBoard />
    </div>
  );
};

export default App;
