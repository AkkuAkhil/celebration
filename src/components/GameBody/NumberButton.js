import { URL } from "../../utils/utils";

const NumberButton = ({ game, number, setImage, resetBlocksDiv }) => {
  const buttonClick = (e, number) => {
    resetBlocksDiv();
    e.target.classList.add("number_button_closed");
    e.target.classList.remove("number_button");
    setImage(`${URL}game${game}/${number}.jpeg`);
  };

  return (
    <button className="number_button" onClick={(e) => buttonClick(e, number)}>
      {number}
    </button>
  );
};

export default NumberButton;
