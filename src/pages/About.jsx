import React from 'react';
import { useSettings } from '../SettingsContext';
import { Badges } from './Badges';
import { Page } from './Page';

import about from '../assets/images/about_icon.webp';

function AboutSection({ t, sectionIndex }) {

  return (
    <section className="collapse">
      <h3>
        {t(`About.about_title_${sectionIndex + 1}`)}
      </h3>
      <p className="pAbout">{t(`About.about_content_${sectionIndex + 1}`)}</p>
    </section>
  );
}

export function About() {
  const { isDarkMode, t } = useSettings();

  return (
    <Page title={t('About.title')} icon={about} alt="About Icon">
      <div className="aboutContainer">
        {[0, 1, 2].map((sectionIndex) => (
          <AboutSection
            key={sectionIndex}
            t={t}
            sectionIndex={sectionIndex}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
      <Badges />
    </Page>
  );
}
