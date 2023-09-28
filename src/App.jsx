import React, { useEffect, useRef, useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useSettings } from './SettingsContext';
import Modal from './Modal';

import './assets/App.css';
import './assets/splide-default.min.css';

export function App() {

  const { isDarkMode, isShrinkHeaderActive, t } = useSettings();
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [carouselOptions, setCarouselOptions] = useState({
    type: 'slide',
    keyboard: true,
    wheel: true,
    perMove: 1,
    wheelMinThreshold: 50,
    pagination: false,
    snap: false,
    drag: 'free',
  });

  const splideRef = useRef(null);

  const updateCarouselOptions = () => {
    const mediaQuery = window.matchMedia('(max-width: 806px)');
    
    if (mediaQuery.matches) {
      setCarouselOptions({
        ...carouselOptions,
        direction: 'ttb',
        autoHeight: true,
        height: 950,
        arrows: false,
      });
    } else {
      setCarouselOptions({
        ...carouselOptions,
        direction: 'ltr',
        autoHeight: false,
        height: 0,
        arrows: true
      });
    }
  };

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      splideInstance.on('moved', onSlideChanged);
      updateCarouselOptions();
      window.addEventListener('resize', updateCarouselOptions);
  
      return () => {
        window.removeEventListener('resize', updateCarouselOptions);
        splideInstance.destroy();
      };
    }
  }, []);  

  const onSlideChanged = (newIndex) => {
    window.location.hash = '';
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
        <div className="PRDlogo" onClick={() => handleNavClick(0)}></div>
        <div className="titleContainer">
          <div className="PRDlogoTitleRiot">Riot</div>
          <div className="PRDlogoTitleDesign">Design<Modal /></div>
        </div>
        </div>
      </header>
      <Splide hasTrack={false} aria-label="..." options={carouselOptions} ref={splideRef}>
        <SplideTrack>
          <SplideSlide>
            <Home />
          </SplideSlide>
          <SplideSlide>
            <About />
          </SplideSlide>
          <SplideSlide>
            <Projects />
          </SplideSlide>
          <SplideSlide>
            <Contact />
          </SplideSlide>
        </SplideTrack>
        <nav>
          <div className={`splide__arrows ${isDarkMode ? 'invert-filter-arrows' : ''}`} />
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