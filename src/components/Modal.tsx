import { FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: JSX.Element;
}

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }): JSX.Element => {
  return createPortal(
    <>
      <div onClick={() => setIsOpen(false)} className={`backdrop ${!isOpen && "hidden"}`}></div>
      <div className={`modal ${!isOpen && "hidden"}`}>{children}</div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
