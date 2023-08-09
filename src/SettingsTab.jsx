import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import 'flag-icons/css/flag-icons.min.css'

import cookies from 'js-cookie'
import FullscreenIcon from './pages/FullscreenToggle';

const languages = [
  { code: 'en', name: 'English', country_code: 'gb' },
  { code: 'no', name: 'Norsk', country_code: 'no' }
]

export function SettingsTab({ isDarkMode, handleModeToggle }) {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t, i18n } = useTranslation();
  const [translatorVisible, setTranslatorVisible] = useState(false);
  const [isSettingsTabActive, setIsSettingsTabActive] = useState(false);
  const [isShrinkHeaderActive, setIsShrinkHeaderActive] = useState(false);

  const handleTranslatorToggle = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setTranslatorVisible(!translatorVisible);
  };

  const handleSettingsTabClick = () => {
    if (isSettingsTabActive) {
      setIsSettingsTabActive(false);
    } else {
      setIsSettingsTabActive(true);
    }
  };

  const handleShrinkHeader = () => {
    if (isShrinkHeaderActive) {
      setIsShrinkHeaderActive(false);
    } else {
      setIsShrinkHeaderActive(true);
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const translatorButtonElement = document.querySelector('.translator-button');

      if (
        isSettingsTabActive &&
        !event.target.closest('#settingsTab') &&
        !translatorButtonElement.contains(event.target)
      ) {
        setIsSettingsTabActive(false);
      }

      if (
        translatorVisible &&
        !event.target.closest('.translator') &&
        !translatorButtonElement.contains(event.target)
      ) {
        setTranslatorVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isSettingsTabActive, translatorVisible]);

  useEffect(() => {
    document.title = t('Settings.app_title')
  }, [t])

  const GlobeIcon = () => (
    <img src="./assets/images/globe.png" className={`bi bi-globe2 translator-globe ${isDarkMode ? 'invert-filter' : ''}`} />
  )

  useEffect(() => {
    if (isSettingsTabActive) {
      document.getElementById("settingsTab").classList.add("settingsTabSlideOut");
    } else {
      document.getElementById("settingsTab").classList.remove("settingsTabSlideOut");
    }
  }, [isSettingsTabActive]);

  useEffect(() => {
    const headerElement = document.getElementById("header");
  
    if (isShrinkHeaderActive) {
      headerElement.classList.add("headerShrink");
    } else {
      headerElement.classList.remove("headerShrink");
    };
  }, [isShrinkHeaderActive]);

  useEffect(() => {
    const headerElement = document.getElementById("projectsBar");
  
    if (isShrinkHeaderActive) {
      headerElement.classList.add("projectsBarShrink");
    } else {
      headerElement.classList.remove("projectsBarShrink");
    };
  }, [isShrinkHeaderActive]);

  useEffect(() => {
    const pageContentElements = document.querySelectorAll(".pageContent");
    const projectContentElements = document.querySelectorAll(".projectContent");
  
    pageContentElements.forEach(element => {
    if (isShrinkHeaderActive) {
      element.classList.add("pageContentGrow");
    } else {
      element.classList.remove("pageContentGrow");
    }
    });
  }, [isShrinkHeaderActive]);
  
  useEffect(() => {
    const projectContentElements = document.querySelectorAll(".projectContent");
  
    projectContentElements.forEach(element => {
    if (isShrinkHeaderActive) {
      element.classList.add("projectContentGrow");
    } else {
      element.classList.remove("projectContentGrow");
    }
    });
  }, [isShrinkHeaderActive]);

  useEffect(() => {
    const pageElements = document.querySelectorAll(".page");
  
    pageElements.forEach(element => {
    if (isShrinkHeaderActive) {
      element.classList.add("pageContentAdapt");
    } else {
      element.classList.remove("pageContentAdapt");
    }
    });
  }, [isShrinkHeaderActive]);

  useEffect(() => {
    const iframeElement = document.getElementById("iframe");
  
    if (iframeElement && isShrinkHeaderActive) {
      iframeElement.classList.add("iframeGrow");
    } else if (!iframeElement && isShrinkHeaderActive) {
      return
    } else if (iframeElement && !isShrinkHeaderActive) {
      iframeElement.classList.remove("iframeGrow");
    }
  }, [isShrinkHeaderActive]);

  return (
    <div id="settingsTab" className={`settings ${isSettingsTabActive ? 'settingsTabSlideOut' : ''}`}>

<div className="settingsColumn1">
      <div id="toggle" className="displayMode" onClick={handleModeToggle}>
        {!isDarkMode ? <img src="/assets/images/moon.webp" alt="Moon" /> : <img className={`${isDarkMode ? 'invert-filter' : ''}`} src="/assets/images/sun.webp" alt="Sun" />}
      </div>
      <button className="translator-button" onClick={(event) => handleTranslatorToggle(event)}>
        <GlobeIcon />
      </button>
      <span className='langTitle'>{t('Settings.language')}</span>
      <ul className={translatorVisible ? 'translator' : 'hidden'}>
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              className='langOption'
              onClick={(event) => {
                event.stopPropagation();
                i18n.changeLanguage(code);
                handleTranslatorToggle();
              }}
              disabled={code === currentLanguageCode}
            >
              <span className={`fi fi-${country_code}`} style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
</div>
<div className="settingsColumn2">
      <FullscreenIcon />
      <div className="shrink" onClick={handleShrinkHeader}>
        {isShrinkHeaderActive ? 'Grow' : 'Shrink'} <br /> Header
      </div>
</div>

      <div className='settingsTabCogwheel' onClick={handleSettingsTabClick}></div>
      <div className={`settingsTabMinimizeHeader ${isShrinkHeaderActive ? '' : 'settingsTabMinimizeHeaderClose'}`} onClick={handleShrinkHeader}><img src="./assets/images/headerarrow.png" alt="" /></div>
    </div>
  );
}
