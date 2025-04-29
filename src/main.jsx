import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // ✅ import HashRouter
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  {/* ✅ wrap in HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);