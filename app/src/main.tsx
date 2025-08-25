import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from './providers/app-provider';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
