import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { ModalProvider } from '@/context/ModalContext.tsx';
import { TaskProvider } from './context/TaskContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ModalProvider>
  </StrictMode>,
);
