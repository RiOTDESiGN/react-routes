import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSettings } from './SettingsContext';

import 'flag-icons/css/flag-icons.min.css'

import cookies from 'js-cookie'
import globe from './assets/images/globe.png';
import sun from './assets/images/sun.webp';
import moon from './assets/images/moon.webp';
import arrow from './assets/images/headerarrow.png';
import cogwheel from './assets/images/cogwheel.png';

const languages = [
  { code: 'en', name: 'English', country_code: 'gb' },
  { code: 'no', name: 'Norsk', country_code: 'no' }
]

export function SettingsTab() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t, i18n } = useTranslation();
  const [translatorVisible, setTranslatorVisible] = useState(false);
  const [isSettingsTabActive, setIsSettingsTabActive] = useState(false);
  const { isShrinkHeaderActive, toggleShrinkHeader, isDarkMode, toggleDarkMode } = useSettings();

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
    <img src={globe} className={`bi bi-globe2 translator-globe ${isDarkMode ? 'invert-filter' : ''}`} alt="Translate" />
  )

  useEffect(() => {
    if (isSettingsTabActive) {
      document.getElementById("settingsTab").classList.add("settingsTabSlideOut");
    } else {
      document.getElementById("settingsTab").classList.remove("settingsTabSlideOut");
    }
  }, [isSettingsTabActive]);

  return (
    <div id="settingsTab" className={`settings ${isSettingsTabActive ? 'settingsTabSlideOut' : ''}`}>

      <div className="settingsTabCogwheel" onClick={handleSettingsTabClick}>
        <img className={`${isDarkMode ? 'invert-filter' : ''}`} src={cogwheel} alt="Settings" />
      </div>
      <div id="toggle" className={`displayModeMini`} onClick={toggleDarkMode}>
        {!isDarkMode ? <img src={sun} alt="Sun" /> :  <img className="invert-filter" src={moon} alt="Moon" />}
      </div>

<div className="translator-button" onClick={(event) => handleTranslatorToggle(event)}>
        <GlobeIcon />
      </div>
      <ul className={translatorVisible ? 'translator' : 'hidden'}>
        {languages.map(({ code, country_code }) => (
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
              {code}
            </button>
          </li>
        ))}
      </ul>

      <div className={`settingsTabMinimizeHeader ${isShrinkHeaderActive ? '' : 'settingsTabMinimizeHeaderClose'}`} onClick={toggleShrinkHeader}>
      <img className={`${isDarkMode ? 'invert-filter' : ''}`} src={arrow} alt={isShrinkHeaderActive ? 'Grow Header' : 'Shrink Header'} />
      </div>
    </div>
  );
}

export default SettingsTab;