import React, { useState, useEffect } from 'react';
import { useSettings } from '../SettingsContext';
import { Badges } from './Badges';
import { Page } from './Page';

import headerarrow from '../assets/images/headerarrow.png';
import about from '../assets/images/about_icon.webp';

function AboutSection({ t, sectionIndex, selectedSection, setSelectedSection, isDarkMode, isWideScreen }) {
  const handleCheckboxChange = () => {
    setSelectedSection(sectionIndex);
  };

  const handleArrowClick = () => {
    setSelectedSection((prevSelectedSection) =>
      prevSelectedSection === sectionIndex ? null : sectionIndex
    );
  };

  return (
    <section className="collapse">
      <input
        className="inputAbout"
        type="checkbox"
        checked={isWideScreen || selectedSection === sectionIndex}
        onChange={handleCheckboxChange}
      />
      <h3 onClick={handleArrowClick}>
        {t(`About.about_title_${sectionIndex + 1}`)}
        <img
          className={`${selectedSection === sectionIndex ? 'aboutArrowClose' : (isDarkMode ? 'invert-filter aboutArrowOpen' : 'aboutArrowOpen')}`}
          src={headerarrow}
          alt="collapse"
        />
      </h3>
      <p className="pAbout">{t(`About.about_content_${sectionIndex + 1}`)}</p>
    </section>
  );
}

export function About() {
  const { isDarkMode, t } = useSettings();
  const [selectedSection, setSelectedSection] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth >= 461 && window.innerHeight >= 801
  );

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
        {[0, 1, 2].map((sectionIndex) => (
          <AboutSection
            key={sectionIndex}
            t={t}
            sectionIndex={sectionIndex}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            isDarkMode={isDarkMode}
            isWideScreen={isWideScreen}
          />
        ))}
      </div>
      <Badges />
    </Page>
  );
}
