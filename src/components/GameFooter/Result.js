import Modal from "react-modal";

const Result = ({
  isOpen,
  setIsOpen,
  team1Score,
  team2Score,
  team1,
  team2,
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="result_modal"
    >
      <div>
        <h1>Result</h1>
        <h1 className="result_status">
          {team1Score === team2Score
            ? "Game is Draw"
            : team1Score > team2Score
            ? `${team1} Won`
            : `${team2} Won`}
        </h1>
      </div>
    </Modal>
  );
};

export default Result;
