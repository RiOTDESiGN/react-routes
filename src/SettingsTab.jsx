import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSettings } from './SettingsContext';

import 'flag-icons/css/flag-icons.min.css'

import cookies from 'js-cookie'
import FullscreenIcon from './pages/FullscreenToggle';
import globe from '/assets/images/globe.png';
import sun from '/assets/images/sun.webp';
import moon from '/assets/images/moon.webp';

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
    <img src={globe} className={`bi bi-globe2 translator-globe ${isDarkMode ? 'invert-filter' : ''}`} />
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

<div className="settingsColumn1">
      <div id="toggle" className="displayMode" onClick={toggleDarkMode}>
        {!isDarkMode ? <img src={sun} alt="Sun" /> : <img className={`${isDarkMode ? 'invert-filter' : ''}`} src={moon} alt="Moon" />}
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
      <div className="shrink" onClick={toggleShrinkHeader}>
        {isShrinkHeaderActive ? 'Grow' : 'Shrink'} <br /> Header
      </div>
</div>

      <div className='settingsTabCogwheel' onClick={handleSettingsTabClick}></div>
      <div className={`settingsTabMinimizeHeader ${isShrinkHeaderActive ? '' : 'settingsTabMinimizeHeaderClose'}`} onClick={toggleShrinkHeader}></div>
      <div id="toggle" className="displayModeMini" onClick={toggleDarkMode}>
        {!isDarkMode ? <img src={sun} alt="Sun" /> :  <img src={moon} alt="Moon" />}
      </div>
      <div className="flags">
      {languages.map(({ code }) => (
        <button
          key={code}
          className={`translator-button-mini ${code === currentLanguageCode ? 'nocursor' : ''}`}
          onClick={(event) => {
            event.stopPropagation();
            i18n.changeLanguage(code);
          }}
        >
          <span className="languageCode">
            {code}
          </span>
        </button>
      ))}
      </div>

    {/* ? */}

    </div>
  );
}

export default SettingsTab;