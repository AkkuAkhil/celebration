const Image = ({ game, image, blocks }) => {
  const buttonClick = (e) => {
    e.target.classList.add("image_button_closed");
    e.target.classList.remove("image_button");
  };

  const showAnswer = () => {
    if (game !== 3 && game !== 4) return;

    let ansImage;
    if (game === 3) ansImage = image.replace("game3", "game5");
    if (game === 4) ansImage = image.replace("game4", "game6");

    const [div] = document.getElementsByClassName("image");
    div.style.backgroundImage = `url(${ansImage})`;
  };

  return (
    <div className="image_row">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={showAnswer}
      >
        {blocks &&
          Array(80)
            .fill(1)
            .map((el, i) => (
              <button
                className="image_button"
                onClick={(e) => buttonClick(e)}
                key={i + 1}
              >
                {i + 1}
              </button>
            ))}
      </div>
    </div>
  );
};

export default Image;
