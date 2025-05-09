import { Modal } from '@/components/Modal';
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type ModalConfirmArgs = {
  closeModal: () => void;
};

type ModalProps = {
  title: string;
  children: ReactNode;
  onConfirm?: (args: ModalConfirmArgs) => void;
  onCancel?: () => void;
};

type ModalContextType = {
  openModal: (props: ModalProps) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (props: ModalProps) => {
    setModalProps(props);
  };

  const closeModal = () => {
    setModalProps(null);
  };

  const handleConfirm = () => {
    if (typeof modalProps?.onConfirm === 'function') {
      modalProps.onConfirm({ closeModal: () => closeModal() });
    }
  };

  const handleCancel = () => {
    modalProps?.onCancel?.();
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalProps && (
        <Modal
          modalProps={{
            title: modalProps.title,
            children: modalProps.children,
          }}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
        />
      )}
    </ModalContext.Provider>
  );
};
