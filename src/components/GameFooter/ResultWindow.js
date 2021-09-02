import { useContext } from "react";
import GameContext from "../../context/GameContext";
import Modal from "react-modal";
import ResultModal from "./ResultModal";

const ResultWindow = () => {
  const { isOpen, closeModal } = useContext(GameContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="result_modal"
    >
      <ResultModal />
    </Modal>
  );
};

export default ResultWindow;
