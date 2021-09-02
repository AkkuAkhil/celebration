import NumberButtonGrid from "./NumberButtonGrid";
import Timer from "./Timer";
import Image from "./Image";

const GameBody = () => {
  return (
    <div className="container">
      <NumberButtonGrid />
      <Timer />
      <Image />
    </div>
  );
};

export default GameBody;
