import { useContext } from "react";
import GameContext from "../../context/GameContext";
import ImageBlocks from "./ImageBlocks";

const Image = () => {
  const { image, showAnswer } = useContext(GameContext);

  return (
    <div className="image_row">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={showAnswer}
      >
        <ImageBlocks />
      </div>
    </div>
  );
};

export default Image;
