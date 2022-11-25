import { FaDiceD20, FaTimes } from "react-icons/fa";
import { hideModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ isError, text }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(hideModalActionCreator());
  };

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
        <Button
          ariaLabel="Close Modal"
          classname="-modal"
          children={
            <FaTimes
              className={`button-modal__icon button-modal__icon${
                isError ? "--error" : ""
              }`}
            />
          }
          action={closeModal}
        />
      </div>
    </ModalStyled>
  );
};

export default Modal;
