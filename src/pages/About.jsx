import React, { useState, useEffect } from 'react';
import { useSettings } from '../SettingsContext';
import { Badges } from './Badges';
import { Page } from './Page';

import headerarrow from '../assets/images/headerarrow.png';
import about from '../assets/images/about_icon.webp';

export function About({ t }) {
  const { isDarkMode } = useSettings();
  const [selectedSection, setSelectedSection] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth >= 461 && window.innerHeight >= 801
  );

  const handleCheckboxChange = (sectionIndex) => {
    setSelectedSection(sectionIndex);
  };

  const handleArrowClick = (sectionIndex) => {
    setSelectedSection((prevSelectedSection) =>
      prevSelectedSection === sectionIndex ? null : sectionIndex
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(
        window.innerWidth >= 461 && window.innerHeight >= 801
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Page title={t('About.title')} icon={about} alt="About">
      <div>
        <section className="collapse">
          <input
            className="inputAbout"
            type="checkbox"
            checked={isWideScreen || selectedSection === 0}
            onChange={() => handleCheckboxChange(0)}
          />
          <h3 onClick={() => handleArrowClick(0)}>
            {t('About.about_title_1')}
            <img
              className={`${selectedSection === 0 ? 'aboutArrowClose' : (isDarkMode ? 'invert-filter aboutArrowOpen' : 'aboutArrowOpen')}`}
              src={headerarrow}
              alt="collapse"
            />
          </h3>
          <p className="pAbout">{t('About.about_content_1')}</p>
        </section>
        <section className="collapse">
          <input
            className="inputAbout"
            type="checkbox"
            checked={isWideScreen || selectedSection === 1}
            onChange={() => handleCheckboxChange(1)}
          />
          <h3 onClick={() => handleArrowClick(1)}>
            {t('About.about_title_2')}
            <img
              className={`${selectedSection === 1 ? 'aboutArrowClose' : (isDarkMode ? 'invert-filter aboutArrowOpen' : 'aboutArrowOpen')}`}
              src={headerarrow}
              alt="collapse"
            />
          </h3>
          <p className="pAbout">{t('About.about_content_2')}</p>
        </section>
        <section className="collapse">
          <input
            className="inputAbout"
            type="checkbox"
            checked={isWideScreen || selectedSection === 2}
            onChange={() => handleCheckboxChange(2)}
          />
          <h3 onClick={() => handleArrowClick(2)}>
            {t('About.about_title_3')}
            <img
              className={`${selectedSection === 2 ? 'aboutArrowClose' : (isDarkMode ? 'invert-filter aboutArrowOpen' : 'aboutArrowOpen')}`}
              src={headerarrow}
              alt="collapse"
            />
          </h3>
          <p className="pAbout">{t('About.about_content_3')}</p>
        </section>
      </div>
      <Badges />
    </Page>
  );
}

