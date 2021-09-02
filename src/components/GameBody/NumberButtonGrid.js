import NumberButton from "./NumberButton";

const NumberButtonGrid = ({ game, setImage, resetBlocksDiv }) => {
  return (
    <div className="number_button_row">
      {Array(16)
        .fill(1)
        .map((el, i) => (
          <NumberButton
            number={i + 1}
            key={i + 1}
            setImage={setImage}
            game={game}
            resetBlocksDiv={resetBlocksDiv}
          />
        ))}
    </div>
  );
};

export default NumberButtonGrid;
