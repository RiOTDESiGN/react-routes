import React, { useEffect, useRef, useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useTranslation } from "react-i18next";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useSettings } from './SettingsContext';

import './assets/App2.css';
import './assets/splide-default.min.css';

const carouselOptions = {
  type: 'slide',
  perPage: 1,
  keyboard: true,
  wheel: true,
  pagination: false,
  snap: true,
  noDrag: '.no-drag',
};

export function App() {
  const { t } = useTranslation();
  const { isDarkMode, isShrinkHeaderActive } = useSettings();
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      splideInstance.on('moved', onSlideChanged);
      return () => {
        splideInstance.destroy();
      };
    }
  }, []);

  const onSlideChanged = (newIndex) => {
    setActiveLinkIndex(newIndex);
  };

  const handleNavClick = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
    setActiveLinkIndex(index);
  };

  return (
    <div className="app">
      <header id="header" className={`${isShrinkHeaderActive ? 'headerShrink' : ""}`}>
        <div className="logoWrapper">
        <div className={`PRDlogo ${isDarkMode ? 'invert-filter' : ''}`} onClick={() => handleNavClick(0)}></div>
        <div className="PRDlogoTitle">Pivot Riot<br />Design</div>
        </div>
      </header>
      <Splide hasTrack={false} aria-label="..." options={carouselOptions} ref={splideRef}>
        <SplideTrack>
          <SplideSlide>
            <Home t={t} />
          </SplideSlide>
          <SplideSlide>
            <About t={t} />
          </SplideSlide>
          <SplideSlide>
            <Projects t={t} />
          </SplideSlide>
          <SplideSlide>
            <Contact t={t} />
          </SplideSlide>
        </SplideTrack>
        <nav>
          <div className="splide__arrows" />
          <ul>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick(0)}
                className={activeLinkIndex === 0 ? 'active' : ''}
              >
                {t('Home.title')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick(1)}
                className={activeLinkIndex === 1 ? 'active' : ''}
              >
                {t('About.title')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick(2)}
                className={activeLinkIndex === 2 ? 'active' : ''}
              >
                {t('Projects.title')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick(3)}
                className={activeLinkIndex === 3 ? 'active' : ''}
              >
                {t('Contact.title')}
              </a>
            </li>
          </ul>
        </nav>
      </Splide>
    </div>
  );
}

export default App;