import { useState } from "react";
import GameHeader from "./components/GameHeader/GameHeader";
import GameBody from "./components/GameBody/GameBody";
import ScoreBoard from "./components/GameFooter/ScoreBoard";
import GameContext from "./context/GameContext";
import { URL } from "./utils/utils";

const App = () => {
  const [game, setGame] = useState(1);
  const [blocks, setBlocks] = useState(true);
  const [image, setImage] = useState(`${URL}/default.png`);
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scoreMode, setScoreMode] = useState(true);

  const resetScoreMode = () => {
    setScoreMode(!scoreMode);
    scoreMode ? resetScoreToMax() : resetScore();
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const updateTeam1Score = () =>
    scoreMode ? setTeam1Score(team1Score + 1) : setTeam1Score(team1Score - 1);

  const updateTeam2Score = () =>
    scoreMode ? setTeam2Score(team2Score + 1) : setTeam2Score(team2Score - 1);

  const resetScore = () => {
    setTeam1Score(0);
    setTeam2Score(0);
  };

  const resetScoreToMax = () => {
    setTeam1Score(80);
    setTeam2Score(80);
  };

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

  const numberClick = (e, number) => {
    resetBlocksDiv();
    e.target.classList.add("number_button_closed");
    e.target.classList.remove("number_button");
    setImage(`${URL}game${game}/${number}.jpeg`);
  };

  const showAnswer = () => {
    if (game !== 3 && game !== 4) return;

    let ansImage;
    if (game === 3) ansImage = image.replace("game3", "game5");
    if (game === 4) ansImage = image.replace("game4", "game6");

    const [div] = document.getElementsByClassName("image");
    div.style.backgroundImage = `url(${ansImage})`;
  };

  const blockClick = (e) => {
    e.target.classList.add("image_button_closed");
    e.target.classList.remove("image_button");
  };

  return (
    <div className="App">
      <GameContext.Provider
        value={{
          game,
          changeGame,
          resetGame,
          image,
          resetImage,
          blocks,
          resetBlocks,
          resetBlocksDiv,
          team1,
          setTeam1,
          team2,
          setTeam2,
          team1Score,
          team2Score,
          isOpen,
          openModal,
          closeModal,
          updateTeam1Score,
          updateTeam2Score,
          resetScore,
          numberClick,
          showAnswer,
          blockClick,
          resetScoreMode,
        }}
      >
        <GameHeader />
        <GameBody />
        <ScoreBoard />
      </GameContext.Provider>
    </div>
  );
};

export default App;
