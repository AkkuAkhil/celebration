import NumberButtonGrid from "./NumberButtonGrid";
import Timer from "./Timer";
import Image from "./Image";

const GameBody = ({ game, image, setImage, blocks, resetBlocksDiv }) => {
  return (
    <div className="container">
      <NumberButtonGrid
        game={game}
        setImage={setImage}
        resetBlocksDiv={resetBlocksDiv}
      />
      <Timer />
      <Image image={image} blocks={blocks} />
    </div>
  );
};

export default GameBody;
