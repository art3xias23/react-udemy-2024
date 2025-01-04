import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({isOpen, children, onClose }) {
  const dialog = useRef();

  useEffect(()=> {
      console.log("IO");
      console.log(isOpen);
      console.log(dialog);
    if(isOpen){
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  }, [isOpen])

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {isOpen && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
