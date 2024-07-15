import { PropsWithChildren } from "react";

export function Modal({ title, children, onClose }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>{title}</h2>
        <span className="close-button" onClick={onClose}>
          x
        </span>
        {children}
      </div>
    </div>
  );
}

type ModalProps = PropsWithChildren<{ title: string; onClose: () => void }>;
