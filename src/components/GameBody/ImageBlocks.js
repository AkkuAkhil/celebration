import { useContext } from "react";
import GameContext from "../../context/GameContext";

const ImageBlocks = () => {
  const { blocks, blockClick } = useContext(GameContext);

  return (
    <>
      {blocks &&
        Array(80)
          .fill(1)
          .map((el, i) => (
            <button
              className="image_button"
              onClick={(e) => blockClick(e)}
              key={i + 1}
            >
              {i + 1}
            </button>
          ))}
    </>
  );
};

export default ImageBlocks;
