import NumberButton from "./NumberButton";

const NumberButtonGrid = () => {
  return (
    <div className="number_button_row">
      {Array(16)
        .fill(1)
        .map((_, i) => (
          <NumberButton number={i + 1} key={i + 1} />
        ))}
    </div>
  );
};

export default NumberButtonGrid;
