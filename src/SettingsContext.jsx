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
    // Apply class to pageContent elements
    const pageContentElements = document.querySelectorAll(".pageContent");
    applyClassToElements(pageContentElements, "pageContentGrow", isShrinkHeaderActive);

    // Apply class to page elements
    const pageElements = document.querySelectorAll(".page");
    applyClassToElements(pageElements, "pageContentAdapt", isShrinkHeaderActive);

    // Apply class to projectContent elements
    const projectContentElements = document.querySelectorAll(".projectContent");
    applyClassToElements(projectContentElements, "projectContentGrow", isShrinkHeaderActive);

    // Apply class to iframe element
    const iframeElement = document.getElementById("iframe");
    if (iframeElement) {
      if (isShrinkHeaderActive) {
        iframeElement.classList.add("iframeGrow");
      } else {
        iframeElement.classList.remove("iframeGrow");
      }
    }

    // Apply class to projectsBar header element
    const projectsBarHeaderElement = document.getElementById("projectsBar");
    applyClassToElements(projectsBarHeaderElement, "projectsBarShrink", isShrinkHeaderActive);

    // Apply class to header element
    const headerElement = document.getElementById("header");
    applyClassToElements(headerElement, "headerShrink", isShrinkHeaderActive);
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
