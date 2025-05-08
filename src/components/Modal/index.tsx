import React from 'react';
import styles from './styles.module.css';

interface ModalProps {
  modalProps: {
    title: string;
    children: React.ReactNode;
  };
  handleCancel?: () => void;
  handleConfirm?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalProps,
  handleCancel,
  handleConfirm,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>{modalProps.title}</h2>
        <button className={styles['modal__close-icon']} onClick={handleCancel}>
          ✖
        </button>
        <div className={styles.modal__body}>{modalProps.children}</div>
        <footer className={styles.modal__footer}>
          <button
            className={styles['modal__button--secondary']}
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            className={styles['modal__button--primary']}
            onClick={handleConfirm}
          >
            Guardar
          </button>
        </footer>
      </div>
    </div>
  );
};
