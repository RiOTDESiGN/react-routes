import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { SettingsProvider } from './SettingsContext';
import App from './App.jsx';
import SettingsTab from './SettingsTab';

const loadingMarkup = (
  <div>
    <h1>Loading..</h1>
  </div>
);

const AppWrapper = () => {
  return (
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <HashRouter>
          <SettingsProvider>
            <SettingsTab />
            <App />
          </SettingsProvider>
        </HashRouter>
      </React.StrictMode>
    </Suspense>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<AppWrapper />);