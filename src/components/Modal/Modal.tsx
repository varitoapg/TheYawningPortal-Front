import { FaDiceD20, FaTimes } from "react-icons/fa";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ isError, text }: ModalProps): JSX.Element => {
  return (
    <ModalStyled>
      <div className={`modal modal${isError ? "--error" : ""}`}>
        <div className="icon-container">
          <FaDiceD20 className={`icon icon${isError ? "--error" : ""}`} />
          <span className="icon__text">{isError ? "1" : "20"}</span>
        </div>
        <div className="modal-text">
          <span>{isError ? `Fail!` : `Crit!`}</span>
          <span>{text}</span>
        </div>
        <button className="button" aria-label="Close modal">
          <FaTimes
            className={`button__icon button__icon${isError ? "--error" : ""}`}
          />
        </button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
