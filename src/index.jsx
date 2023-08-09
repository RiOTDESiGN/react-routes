import React, { Suspense, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { App } from './App.jsx';
import { SettingsTab } from './SettingsTab';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'no'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

const loadingMarkup = (
  <div>
    <h1>Loading..</h1>
  </div>
);

const AppWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <HashRouter>
          <SettingsTab isDarkMode={isDarkMode} handleModeToggle={handleModeToggle} />
          <App isDarkMode={isDarkMode} />
        </HashRouter>
      </React.StrictMode>
    </Suspense>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<AppWrapper />);