import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useTranslation } from "react-i18next";

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
      loadPath: './locales/{{lng}}/translation.json',
    }
  });

const SettingsContext = createContext();

function applyClassToElements(elements, className, shouldApply) {
  Array.from(elements).forEach(element => {
    if (shouldApply) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
}

export function SettingsProvider({ children }) {
  const [isShrinkHeaderActive, setIsShrinkHeaderActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

  const toggleShrinkHeader = () => {
    setIsShrinkHeaderActive(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  useEffect(() => {
    const pageContentElements = document.querySelectorAll(".pageContent");
    applyClassToElements(pageContentElements, "pageContentGrow", isShrinkHeaderActive);

    const pageElements = document.querySelectorAll(".page");
    applyClassToElements(pageElements, "pageContentAdapt", isShrinkHeaderActive);

    const projectContent = document.querySelectorAll(".projectContent");
    applyClassToElements(projectContent, "projectContentShrink", isShrinkHeaderActive);

    const projectsBarHeaderElement = document.getElementById("projectsBar");
    applyClassToElements(projectsBarHeaderElement, "projectsBarShrink", isShrinkHeaderActive);

    const headerElement = document.getElementById("header");
    applyClassToElements(headerElement, "headerShrink", isShrinkHeaderActive);

    const projectsMenu = document.querySelectorAll(".projectsMenu");
    applyClassToElements(projectsMenu, "projectsMenuShrink", isShrinkHeaderActive);
    applyClassToElements(projectsMenu, "projectsMenuItemShrink", isShrinkHeaderActive);

    const projects = document.querySelectorAll(".projects");
    applyClassToElements(projects, "projectsMinimized", isShrinkHeaderActive);

    const menuSpacerBottom = document.querySelectorAll(".menuSpacerBottom");
    applyClassToElements(menuSpacerBottom, "menuSpacerBottomGrow", isShrinkHeaderActive);

    const iframeElement = document.getElementById("iframe");
    if (iframeElement) {
      if (isShrinkHeaderActive) {
        iframeElement.classList.add("iframeGrow");
      } else {
        iframeElement.classList.remove("iframeGrow");
      }
    }
  }, [isShrinkHeaderActive]);

  return (
    <SettingsContext.Provider value={{ isShrinkHeaderActive, toggleShrinkHeader, isDarkMode, toggleDarkMode, t }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
