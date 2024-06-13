import React, { createContext, useContext, useState } from 'react';

interface DialogContextType {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const DialogContext = createContext<DialogContextType | null>(null);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a OpenProvider');
  }
  return context;
};

interface DialogProviderProps {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const onOpen = () => setIsOpen(true);

  return (
    <DialogContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </DialogContext.Provider>
  );
};
