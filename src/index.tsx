import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppWithRouter from './AppWithRouter';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AppWithRouter />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
