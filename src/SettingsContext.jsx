import React, { createContext, useContext, useState, useEffect } from 'react';

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
    <SettingsContext.Provider value={{ isShrinkHeaderActive, toggleShrinkHeader, isDarkMode, toggleDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
