import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App.jsx'

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
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Suspense>,
)
