const Image = ({ image, blocks }) => {
  const buttonClick = (e) => {
    e.target.classList.add("image_button_closed");
    e.target.classList.remove("image_button");
  };
  return (
    <div className="image_row">
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
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
